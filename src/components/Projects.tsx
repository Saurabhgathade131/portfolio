import { Component, For } from 'solid-js';
import { AiOutlineGithub, AiOutlineGlobal } from 'solid-icons/ai';
import styles from './Projects.module.scss';

const projectsData = [
    {
        title: 'Learning Command Center : Discipline Engine',
        description: 'A comprehensive productivity and learning ecosystem inspired by the "All-In" discipline framework. Features roadmap tracking, automated skill validation, and consistency reporting with AWS Lambda/DynamoDB.',
        tags: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Serverless', 'TailwindCSS'],
        github: 'https://github.com/Saurabhgathade131/portfolio',
        demo: null,
        highlights: [
            'Mastery validation via Q&A Deep Dive Validator',
            'Real-time Roadmaps for $200k AI Engineer Path',
            'Automated Skill Extraction for Resume Building',
            'Daily Accountability via Nightly Standup Engine'
        ]
    },
    {
        title: 'LLM Studio Platform',
        description: 'Enterprise-grade AI orchestration platform with real-time multi-agent execution, streaming token responses, and advanced observability for LLM traces. Engineered with micro-frontend architecture.',
        tags: ['SolidJS', 'Next.js', 'FastAPI', 'Redis', 'WebSockets', 'GraphQL', 'LangGraph'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time streaming reducing perceived latency by 40%',
            'NPM library reducing integration time from 8h to 45min',
            '27% TTFB improvement via edge caching strategies',
            'High-performance orchestration for 10+ concurrent agents'
        ]
    },
    {
        title: 'AI Multi-Agent Interviewer',
        description: 'Agentic AI system designed to conduct deep technical interviews. Features proactive questioning, live code analysis, and multimodal feedback loops using Semantic Kernel.',
        tags: ['Python', 'Semantic Kernel', 'Azure OpenAI', 'WebRTC', 'STT/TTS'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time code feedback & proactive hints',
            'Multimodal STT/TTS interaction loop',
            'Automated test case generation for live code'
        ]
    },
    {
        title: 'ChatHub — Real-time MERN Social App',
        description: 'Socket.io-powered real-time communication platform featuring presence tracking, typing dynamics, and secure JWT-based private messaging with end-to-end reliability.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Redis'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time state synchronization via Socket.IO',
            'Google OAuth integration & secure RBAC',
            'Presence tracking with Redis backplane'
        ]
    }
];

const Projects: Component = () => {
    return (
        <section class={styles.projects} id="projects">
            <div class={styles.header}>
                <p class={styles.label}>My Work</p>
                <h2 class={styles.title}>Featured Projects</h2>
                <p class={styles.subtitle}>
                    Production-grade applications showcasing full-stack expertise and AI integration
                </p>
            </div>

            <div class={styles.grid}>
                <For each={projectsData}>
                    {(project) => (
                        <div class={styles.card}>
                            <div class={styles.imageContainer}>
                                <div class={styles.image} style={{
                                    background: `linear-gradient(135deg, rgba(93, 95, 239, 0.3), rgba(163, 107, 255, 0.3))`
                                }} />
                            </div>
                            <div class={styles.content}>
                                <h3 class={styles.title}>{project.title}</h3>
                                <p class={styles.description}>{project.description}</p>

                                {project.highlights && (
                                    <ul class={styles.highlights}>
                                        <For each={project.highlights}>
                                            {(highlight) => <li>{highlight}</li>}
                                        </For>
                                    </ul>
                                )}

                                <div class={styles.tags}>
                                    <For each={project.tags}>
                                        {(tag) => <span class={styles.tag}>{tag}</span>}
                                    </For>
                                </div>

                                <div class={styles.links}>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" class={styles.linkPrimary}>
                                        <AiOutlineGithub size={20} />
                                        View Code
                                    </a>
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" class={styles.linkSecondary}>
                                            <AiOutlineGlobal size={20} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
};

export default Projects;
