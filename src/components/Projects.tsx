import { Component, For } from 'solid-js';
import { AiOutlineGithub, AiOutlineGlobal } from 'solid-icons/ai';
import styles from './Projects.module.scss';

const projectsData = [
    {
        title: 'AI-Native Coding Interview Platform',
        description: '🚀 A professional AI-native coding interview platform with real-time interaction, intelligent feedback, and secure execution. Features an AI interviewer with stuck detection and contextual hinting.',
        tags: ['Next.js 14', 'FastAPI', 'Azure OpenAI', 'Judge0', 'Socket.io', 'Monaco Editor'],
        github: 'https://github.com/Saurabhgathade131/ai-interview-platform',
        demo: null,
        highlights: [
            'Intelligent AI interviewer with stuck detection mechanism',
            'Secure real-time code execution via Judge0 API integration',
            'Live voice interaction using Web Speech API',
            'Robust proctoring: Tab-switch tracking & Paste detection'
        ]
    },
    {
        title: 'Discipline Engine: Learning Command Center',
        description: '🛡️ A comprehensive productivity and learning ecosystem featuring roadmap tracking, automated skill validation, and consistency reporting. Built to master the $200k AI Engineer path.',
        tags: ['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Serverless'],
        github: 'https://github.com/Saurabhgathade131/learning-plan',
        demo: 'https://learning-plan-mu.vercel.app/',
        highlights: [
            'Real-time Roadmaps for $200k GenAI Engineer Path',
            'Automated Skill Extraction for Resume Building',
            'Mastery validation via Q&A Deep Dive Validator',
            'Cloud-native deployment with Serverless Framework'
        ]
    },
    {
        title: 'LLM Multi-Agent Studio',
        description: '🤖 Enterprise-grade AI orchestration platform with real-time multi-agent execution, streaming token responses, and advanced observability for LLM traces.',
        tags: ['SolidJS', 'Next.js', 'FastAPI', 'Redis', 'WebSockets', 'LangGraph'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time streaming reducing perceived latency by 40%',
            'NPM library reducing integration time from 8h to 45min',
            'High-performance orchestration for 10+ concurrent agents',
            'Distributed tracing for AI execution pipelines'
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
