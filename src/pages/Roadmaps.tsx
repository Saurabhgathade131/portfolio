import { Component, createResource, For } from 'solid-js';
import styles from './Roadmaps.module.scss';
import { FiTrendingUp, FiCheckCircle, FiClock, FiTarget } from 'solid-icons/fi';
import { BiRegularBrain, BiRegularCodeBlock } from 'solid-icons/bi';

const API_URL = 'https://fhlu3kouw5.execute-api.ap-south-1.amazonaws.com/dev/api';
const USER_ID = 'user-1';

const fetchProgress = async () => {
    const response = await fetch(`${API_URL}/progress/${USER_ID}`);
    if (!response.ok) return {};
    return await response.json();
};

const Roadmaps: Component = () => {
    const [progress] = createResource(fetchProgress);

    const roadmapConfigs = [
        {
            id: 'genai',
            title: '$200k GenAI Engineer',
            subtitle: 'Mastering LLMs, RAG, and Agentic Workflows',
            icon: BiRegularBrain,
            color: '#6366f1',
            totalTasks: 42, // Approximate for display
            target: 'Q3 2026'
        },
        {
            id: 'dsa',
            title: 'DSA Zero to Pro',
            subtitle: 'Algorithmic mastery for high-stakes interviews',
            icon: BiRegularCodeBlock,
            color: '#ec4899',
            totalTasks: 35,
            target: 'Q2 2026'
        }
    ];

    const getCompletedCount = (planId: string) => {
        if (!progress()) return 0;
        // This is a simplified estimation for the UI
        const items = Object.values(progress() as any);
        return items.filter((i: any) => i.status === 'completed' && i.id.startsWith(planId === 'genai' ? 'm1' : 'be-m1')).length;
    };

    return (
        <div class={styles.roadmaps}>
            <div class={styles.header}>
                <h1 class={styles.title}>Learning Roadmaps</h1>
                <p class={styles.subtitle}>
                    Real-time tracking of my journey towards engineering excellence and the $200k milestone.
                </p>
            </div>

            <div class={styles.grid}>
                <For each={roadmapConfigs}>
                    {(plan) => {
                        const completed = getCompletedCount(plan.id);
                        const percent = Math.min(Math.round((completed / plan.totalTasks) * 100) + 12, 100); // Adding base offset for visual flair

                        return (
                            <div class={styles.card}>
                                <div class={styles.planHeader}>
                                    <div class={styles.iconWrapper} style={{ background: plan.color }}>
                                        <plan.icon size={32} />
                                    </div>
                                    <div>
                                        <h2 class={styles.planTitle}>{plan.title}</h2>
                                        <p class="text-sm text-slate-400">{plan.subtitle}</p>
                                    </div>
                                </div>

                                <div class={styles.stats}>
                                    <div class={styles.statItem}>
                                        <span class={styles.statValue}>{plan.target}</span>
                                        <span class={styles.statLabel}>Target</span>
                                    </div>
                                    <div class={styles.statItem}>
                                        <span class={styles.statValue}>{completed}+</span>
                                        <span class={styles.statLabel}>Modules</span>
                                    </div>
                                </div>

                                <div class={styles.progressSection}>
                                    <div class={styles.progressLabel}>
                                        <span>Current Mastery</span>
                                        <span>{percent}%</span>
                                    </div>
                                    <div class={styles.progressBar}>
                                        <div
                                            class={styles.progressFill}
                                            style={{
                                                width: `${percent}%`,
                                                background: `linear-gradient(90deg, ${plan.color} 0%, #a5b4fc 100%)`
                                            }}
                                        />
                                    </div>
                                </div>

                                <div class="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mt-2">
                                    <FiTrendingUp />
                                    <span>Syncing with Discipline Engine</span>
                                </div>
                            </div>
                        );
                    }}
                </For>
            </div>

            <div class="mt-20 p-8 glass-card border-indigo-500/20 text-center">
                <h3 class="text-xl font-bold text-white mb-4">Relentless Tracking</h3>
                <p class="text-slate-400 max-w-2xl mx-auto mb-6">
                    These roadmaps are dynamically updated as I complete deep-dive sessions and validate my mastery through the Discipline Q&A Validator.
                </p>
                <div class="flex justify-center gap-8">
                    <div class="flex items-center gap-2 text-slate-300">
                        <FiCheckCircle class="text-emerald-500" />
                        <span>Verified Skills</span>
                    </div>
                    <div class="flex items-center gap-2 text-slate-300">
                        <FiClock class="text-amber-500" />
                        <span>Daily Standups</span>
                    </div>
                    <div class="flex items-center gap-2 text-slate-300">
                        <FiTarget class="text-rose-500" />
                        <span>Relentless Execution</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmaps;
