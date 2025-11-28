import { Component, For } from 'solid-js';
import { AiOutlineGithub, AiOutlineGlobal } from 'solid-icons/ai';
import styles from './Projects.module.scss';

const projectsData = [
    {
        title: 'LLM Studio Platform',
        description: 'Enterprise AI platform with real-time multi-agent execution, GraphQL-WebSocket streaming, and comprehensive AI trace visualization. Features micro-frontend architecture and NPM streaming library.',
        tags: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'WebSockets', 'Node.js', 'FastAPI', 'Redis'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time streaming with 40% latency reduction',
            'NPM library reducing integration from 8h to 45min',
            '27% TTFB improvement, 18% bundle size reduction'
        ]
    },
    {
        title: 'Real-Time AI Chat Platform',
        description: 'Full-stack conversational platform with token streaming, speech input, and agentic flows. Event-driven backend using Redis Pub/Sub, microservices, and WebSocket broadcasting.',
        tags: ['React', 'Node.js', 'FastAPI', 'Redis', 'WebSockets', 'MongoDB'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Voice-to-Text streaming with 93% test coverage',
            'Event-driven architecture with Redis Pub/Sub',
            'Structured reasoning steps and tool invocation'
        ]
    },
    {
        title: 'ChatHub — Real-time MERN Chat App',
        description: 'Socket.io-powered real-time chat application with typing indicators, presence tracking, Google OAuth authentication, and private messaging capabilities.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'OAuth'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Real-time messaging with Socket.IO',
            'Google OAuth integration',
            'Typing indicators and presence tracking'
        ]
    },
    {
        title: 'Placement Cell Management System',
        description: 'End-to-end recruitment portal handling student data, recruiter modules, interview rounds, and comprehensive reporting. Features secure REST APIs with JWT authentication and RBAC.',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'Secure JWT authentication with RBAC',
            'Efficient MongoDB aggregation logic',
            'Complete recruitment workflow management'
        ]
    },
    {
        title: 'Web Scraping Automation UI',
        description: 'Production-grade web scraping system with DOM selector mapping, live previews, payload builder, and anti-bot-safe workflows for automated data extraction.',
        tags: ['React', 'Node.js', 'Python', 'Selenium', 'Automation'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            'DOM selector mapping with live preview',
            'Anti-bot detection mechanisms',
            'Automated workflow builder'
        ]
    },
    {
        title: 'Jai Bhim Connect',
        description: 'Ed-tech platform with mobile and web interfaces. Built using React Native for mobile, React.js for web, with Node.js backend. Improved API performance by 30% through MongoDB optimization.',
        tags: ['React Native', 'React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/Saurabhgathade131',
        demo: null,
        highlights: [
            '30% API performance improvement',
            'Cross-platform mobile and web support',
            'Optimized MongoDB queries'
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
