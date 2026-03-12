import { Component, createResource, For, Show } from 'solid-js';
import styles from './About.module.scss';
import { FiAward, FiCheckCircle } from 'solid-icons/fi';

const API_URL = 'https://fhlu3kouw5.execute-api.ap-south-1.amazonaws.com/dev/api';
const USER_ID = 'user-1';

const fetchSkills = async () => {
    const response = await fetch(`${API_URL}/skills/${USER_ID}`);
    if (!response.ok) return [];
    return await response.json();
};

const About: Component = () => {
    const [verifiedSkills] = createResource(fetchSkills);

    return (
        <div class={styles.about}>
            <div class={styles.header}>
                <h1 class={styles.title}>About Me</h1>
                <p class={styles.subtitle}>Full Stack Engineer | AI Enthusiast | Problem Solver</p>
            </div>

            <div class={styles.content}>
                <div class={styles.section}>
                    <h2>Professional Summary</h2>
                    <p>
                        Full Stack Engineer with extensive experience building scalable, cloud-native systems using
                        <strong> React.js, Next.js, Node.js, FastAPI, AWS, Redis, and MongoDB</strong>.
                        Strong expertise in backend design, microservices architecture, real-time streaming,
                        caching strategies, and performance optimization with a focus on reliability and clean engineering practices.
                    </p>
                    <p>
                        Currently at <strong>Techolution</strong>, I lead the development of the LLM Studio Platform,
                        engineering high-performance AI solutions that power real-time multi-agent executions and
                        distributed workflows.
                    </p>
                </div>

                <Show when={verifiedSkills()?.length > 0}>
                    <div class={styles.section}>
                        <h2 class="flex items-center gap-2">
                            <FiAward class="text-indigo-500" />
                            Verified Milestones (Discipline Engine)
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <For each={verifiedSkills()}>
                                {(skill: any) => (
                                    <div class="flex items-center gap-3 p-4 glass-card border-indigo-500/10 hover:border-indigo-500/30 transition-all">
                                        <FiCheckCircle class="text-emerald-500 flex-shrink-0" />
                                        <div>
                                            <span class="font-bold text-slate-100 block">{skill.skillName}</span>
                                            <span class="text-[10px] text-slate-500 uppercase tracking-tighter">Verified on {new Date(skill.timestamp).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                )}
                            </For>
                        </div>
                    </div>
                </Show>

                <div class={styles.section}>
                    <h2>Expertise & Capabilities</h2>
                    <ul>
                        <li><strong>Frontend Excellence:</strong> Expert in React.js, Next.js, TypeScript with focus on performance optimization (SSR/ISR, code splitting)</li>
                        <li><strong>Backend Mastery:</strong> Proficient in Node.js, Express.js, FastAPI, building RESTful APIs, and microservices</li>
                        <li><strong>Real-time Systems:</strong> Extensive experience with WebSockets, Socket.IO, and Redis Pub/Sub</li>
                        <li><strong>AI Integration:</strong> Hands-on experience integrating LLM APIs (OpenAI, Anthropic) and LangGraph workflows</li>
                        <li><strong>Cloud & DevOps:</strong> AWS deployment, Docker containerization, CI/CD pipelines, and serverless</li>
                    </ul>
                </div>

                <div class={styles.section}>
                    <h2>Beyond Code</h2>
                    <p>
                        I believe in continuous learning and staying ahead of industry trends. My current focus is achieving
                        mastery in **Agentic AI Architecture** and **Advanced Distributed Systems** part of my $200k career roadmap.
                        I track my discipline daily through a custom-built Command Center that enforces absolute consistency.
                    </p>
                </div>
            </div>

            <div class={styles.stats}>
                <div class={styles.stat}>
                    <div class={styles.number}>4+</div>
                    <div class={styles.label}>Years Experience</div>
                </div>
                <div class={styles.stat}>
                    <div class={styles.number}>15+</div>
                    <div class={styles.label}>Projects Delivered</div>
                </div>
                <div class={styles.stat}>
                    <div class={styles.number}>
                        <Show when={verifiedSkills()} fallback="20">
                            {verifiedSkills()?.length + 20}
                        </Show>
                    </div>
                    <div class={styles.label}>Technologies</div>
                </div>
                <div class={styles.stat}>
                    <div class={styles.number}>40%</div>
                    <div class={styles.label}>Performance Gains</div>
                </div>
            </div>
        </div>
    );
};

export default About;
