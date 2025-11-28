import { Component, For } from 'solid-js';
import { VsCode } from 'solid-icons/vs';
import { TbDatabase } from 'solid-icons/tb';
import { AiOutlineCloud } from 'solid-icons/ai';
import { BiRegularBrain } from 'solid-icons/bi';
import styles from './Skills.module.scss';

const skillsData = [
    {
        title: 'Frontend Development',
        icon: VsCode,
        skills: [
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'TailwindCSS',
            'shadcn/ui',
            'Redux Toolkit',
            'Zustand',
            'React Native',
            'SolidJS'
        ]
    },
    {
        title: 'Backend & APIs',
        icon: TbDatabase,
        skills: [
            'Node.js',
            'Express.js',
            'FastAPI',
            'Python',
            'REST APIs',
            'GraphQL',
            'Microservices',
            'WebSockets',
            'Socket.IO'
        ]
    },
    {
        title: 'Databases & Cloud',
        icon: AiOutlineCloud,
        skills: [
            'MongoDB',
            'PostgreSQL',
            'Redis',
            'AWS',
            'Supabase',
            'Docker',
            'CI/CD',
            'Nginx',
            'Serverless'
        ]
    },
    {
        title: 'AI & Performance',
        icon: BiRegularBrain,
        skills: [
            'LLM Integration',
            'OpenAI APIs',
            'Langchain',
            'SSR/ISR',
            'Code Splitting',
            'Micro-Frontends',
            'Design Systems',
            'Jest Testing'
        ]
    }
];

// Technology logos with CDN links
const techLogos = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
];

const Skills: Component = () => {
    return (
        <section class={styles.skills} id="skills">
            <div class={styles.header}>
                <p class={styles.label}>What I Do</p>
                <h2 class={styles.title}>Skills & Technologies</h2>
                <p class={styles.subtitle}>
                    A comprehensive toolkit for building modern, scalable applications
                </p>
            </div>

            <div class={styles.grid}>
                <For each={skillsData}>
                    {(category) => (
                        <div class={styles.category}>
                            <h3 class={styles.categoryTitle}>
                                <category.icon size={28} />
                                {category.title}
                            </h3>
                            <div class={styles.skillList}>
                                <For each={category.skills}>
                                    {(skill) => <span class={styles.skill}>{skill}</span>}
                                </For>
                            </div>
                        </div>
                    )}
                </For>
            </div>

            <div class={styles.techLogos}>
                <h3 class={styles.logosTitle}>Technology Stack</h3>
                <div class={styles.logosGrid}>
                    <For each={techLogos}>
                        {(tech) => (
                            <div class={styles.logoItem}>
                                <img src={tech.logo} alt={tech.name} loading="lazy" />
                                <span class={styles.logoName}>{tech.name}</span>
                            </div>
                        )}
                    </For>
                </div>
            </div>
        </section>
    );
};

export default Skills;
