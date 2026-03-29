import { Component, createResource, For, Show } from 'solid-js';
import { Motion } from '@motionone/solid';
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
            <Motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                class={styles.header}
            >
                <h1 class={styles.title}>About Me</h1>
                <p class={styles.subtitle}>Full Stack Engineer | AI Enthusiast | Problem Solver</p>
            </Motion.div>

            <div class={styles.content}>
                <Motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    class={styles.section}
                >
                    <h2>Professional Summary</h2>
                    <p>
                        Full Stack Engineer with extensive experience building scalable, cloud-native systems using
                        <strong> React.js, Next.js, Node.js, FastAPI, AWS, Redis, and MongoDB</strong>.
                        Strong expertise in backend design, microservices architecture, real-time streaming,
                        caching strategies, and performance optimization with a focus on reliability and clean engineering practices.
                    </p>
                    <p>
                        Currently at <strong>Qualizeal</strong>, I lead the development of AI-driven framework migration systems,
                        engineering high-performance Agentic AI solutions that automate complex code transformations and
                        distributed technical workflows.
                    </p>
                </Motion.div>

                <Show when={verifiedSkills()?.length > 0}>
                    <Motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        class={styles.section}
                    >
                        <h2>
                            <FiAward />
                            Verified Milestones
                        </h2>
                        <div class={styles.milestonesGrid}>
                            <For each={verifiedSkills()}>
                                {(skill: any) => (
                                    <div class={styles.milestoneCard}>
                                        <FiCheckCircle class={styles.milestoneIcon} />
                                        <div class={styles.milestoneInfo}>
                                            <span class={styles.milestoneName}>{skill.skillName}</span>
                                            <span class={styles.milestoneDate}>Verified on {new Date(skill.timestamp).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                )}
                            </For>
                        </div>
                    </Motion.div>
                </Show>

                <Motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    class={styles.section}
                >
                    <h2>Expertise & Capabilities</h2>
                    <ul>
                        <li><strong>Frontend Excellence:</strong> Expert in React.js, Next.js, TypeScript with focus on performance optimization (SSR/ISR, code splitting)</li>
                        <li><strong>Backend Mastery:</strong> Proficient in Node.js, Express.js, FastAPI, building RESTful APIs, and microservices</li>
                        <li><strong>Real-time Systems:</strong> Extensive experience with WebSockets, Socket.IO, and Redis Pub/Sub</li>
                        <li><strong>AI Integration:</strong> Hands-on experience integrating LLM APIs (OpenAI, Anthropic) and LangGraph workflows</li>
                        <li><strong>Cloud & DevOps:</strong> AWS deployment, Docker containerization, CI/CD pipelines, and serverless</li>
                    </ul>
                </Motion.div>

                <Motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    class={styles.section}
                >
                    <h2>Beyond Code</h2>
                    <p>
                        I believe in continuous learning and staying ahead of industry trends. My current focus is achieving
                        mastery in **Agentic AI Architecture** and **Advanced Distributed Systems** part of my $200k career roadmap.
                        I track my discipline daily through a custom-built Command Center that enforces absolute consistency.
                    </p>
                </Motion.div>
            </div>

            <Motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                class={styles.stats}
            >
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
            </Motion.div>
        </div>
    );
};

export default About;
