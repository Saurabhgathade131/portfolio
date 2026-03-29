import { Component, For } from 'solid-js';
import styles from './Experience.module.scss';

const experienceData = [
    {
        company: 'Qualizeal',
        role: 'Full Stack & AI Engineer',
        period: 'Dec 2025 - Present',
        location: 'Hyderabad, India',
        description: 'Architecting AI-driven framework migration and multi-agent systems.',
        highlights: [
            'Architected AI-driven framework migration system reducing manual migration effort by 60%+',
            'Designed end-to-end AI agent architecture for code transformation, validation, and execution',
            'Led development of Test Automation Agentic Workflow with specialized UI Explorer and Code Gen agents',
            'Implemented Decorator Pattern-based logging and canonical observability for distributed AI agents',
            'Applying SOLID principles to design scalable, production-grade agentic platforms'
        ]
    },
    {
        company: 'Techolution',
        role: 'Full Stack Engineer',
        period: 'Apr 2024 - Dec 2025',
        location: 'Remote',
        description: 'Engineered LLM Studio Platform and enterprise AI solutions.',
        highlights: [
            'Engineered high-performance GraphQL-WebSocket streaming layer reducing interaction latency by 40%',
            'Designed Next.js + TypeScript AI chat interface with structured reasoning and tool invocation visibility',
            'Created reusable NPM streaming UI library reducing integration time from 8 hours to 45 minutes',
            'Built robust AI Trace Viewer visualizing agent execution, token timelines, and performance metrics',
            'Architected micro-frontend modules enabling independent deployment across Agentic modes',
            'Optimized critical paths improving TTFB by 27% and reducing bundle size by 18%'
        ]
    },
    {
        company: 'I AM First Digition Solutions Pvt Ltd',
        role: 'Full Stack Developer',
        period: 'Feb 2023 - Mar 2024',
        location: 'Nagpur',
        description: 'Full-stack development for production ed-tech systems.',
        highlights: [
            'Developed key modules for Jai Bhim Connect project including interface components and backend workflows',
            'Improved API response performance by 30% through optimized MongoDB queries and Express.js middleware',
            'Modernized UI using React.js + Tailwind CSS improving Lighthouse performance scores',
            'Built mobile features using React Native with Node.js backend integration',
            'Implemented full-stack modules using React, Node.js, and MongoDB'
        ]
    },
    {
        company: 'Think & Learn Pvt Ltd (BYJU\'S)',
        role: 'Senior Business Development Associate',
        period: 'Oct 2020 - Feb 2023',
        location: 'Ahmedabad / Bangalore',
        description: 'Business development and team leadership.',
        highlights: [
            'Secured Regional Rank #2 and maintained consistent Top-5 performance nationwide',
            'Mentored and supported 778+ team members to improve conversion rates and product knowledge',
            'Ranked among top 5 nationally; guided 700+ associates to enhance performance quality'
        ]
    }
];

const Experience: Component = () => {
    return (
        <section class={styles.experience} id="experience">
            <div class={styles.header}>
                <p class={styles.label}>Career Journey</p>
                <h2 class={styles.title}>Work Experience</h2>
                <p class={styles.subtitle}>
                    Building impactful solutions across various domains
                </p>
            </div>

            <div class={styles.timeline}>
                <For each={experienceData}>
                    {(exp) => (
                        <div class={styles.item}>
                            <h3 class={styles.company}>{exp.company}</h3>
                            <p class={styles.role}>{exp.role}</p>
                            <p class={styles.period}>{exp.period} • {exp.location}</p>
                            <p class={styles.description}>{exp.description}</p>
                            <ul class={styles.highlights}>
                                <For each={exp.highlights}>
                                    {(highlight) => <li>{highlight}</li>}
                                </For>
                            </ul>
                        </div>
                    )}
                </For>
            </div>
        </section>
    );
};

export default Experience;
