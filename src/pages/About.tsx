import { Component } from 'solid-js';
import styles from './About.module.scss';

const About: Component = () => {
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
                        distributed workflows. My work spans the entire stack—from crafting intuitive React interfaces
                        to architecting robust backend systems with Node.js, FastAPI, and MongoDB.
                    </p>
                </div>

                <div class={styles.section}>
                    <h2>What I Bring to the Table</h2>
                    <ul>
                        <li><strong>Frontend Excellence:</strong> Expert in React.js, Next.js, TypeScript with focus on performance optimization (SSR/ISR, code splitting, micro-frontends)</li>
                        <li><strong>Backend Mastery:</strong> Proficient in Node.js, Express.js, FastAPI, building RESTful APIs, GraphQL services, and microservices architectures</li>
                        <li><strong>Real-time Systems:</strong> Extensive experience with WebSockets, Socket.IO, Redis Pub/Sub, and GraphQL Subscriptions for event-driven applications</li>
                        <li><strong>AI Integration:</strong> Hands-on experience integrating LLM APIs (OpenAI, Anthropic), building AI chat interfaces, and streaming token responses</li>
                        <li><strong>Cloud & DevOps:</strong> AWS deployment, Docker containerization, CI/CD pipelines, serverless architectures</li>
                        <li><strong>Database Design:</strong> MongoDB schema optimization, PostgreSQL, Redis caching strategies, efficient query design</li>
                        <li><strong>Performance Optimization:</strong> Achieved 27% TTFB improvement, 18% bundle size reduction, 40% latency reduction in production systems</li>
                        <li><strong>Team Collaboration:</strong> Experience mentoring 700+ team members, creating reusable libraries, and establishing best practices</li>
                    </ul>
                </div>

                <div class={styles.section}>
                    <h2>Education & Certifications</h2>
                    <p>
                        <strong>B.Tech in Computer Technology</strong><br />
                        K.D.K. College of Engineering, Nagpur (RTMNU) | 2016-2020 | CGPA: 8.0/10
                    </p>
                    <p>
                        <strong>Certifications:</strong> Coding Ninjas - Java, Data Structures, Frontend, Backend, React.js
                    </p>
                </div>

                <div class={styles.section}>
                    <h2>Beyond Code</h2>
                    <p>
                        When I'm not building scalable applications, I'm exploring cutting-edge technologies,
                        contributing to open-source projects, and sharing knowledge with the developer community.
                        I believe in continuous learning and staying ahead of industry trends—whether it's the
                        latest in AI/ML integration, performance optimization techniques, or modern architectural patterns.
                    </p>
                    <p>
                        My journey from a Business Development Associate at BYJU'S (where I ranked in the top 5 nationally)
                        to a Full Stack Engineer demonstrates my adaptability, quick learning ability, and passion for
                        technology. I bring both technical expertise and strong communication skills to every project.
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
                    <div class={styles.number}>20+</div>
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
