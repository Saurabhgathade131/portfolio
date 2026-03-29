import { Component, For, createSignal } from 'solid-js';
import { Motion, Presence } from '@motionone/solid';
import styles from './Resume.module.scss';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiCpu, FiServer, FiLayers, FiZap } from 'solid-icons/fi';
import { BiRegularFile } from 'solid-icons/bi';

type ResumeType = 'fullstack' | 'genai' | 'backend' | 'agentic';

const resumeVersions: Record<ResumeType, any> = {
    fullstack: {
        title: 'Full Stack & AI Engineer',
        icon: <FiLayers />,
        experience: [
            {
                company: 'Qualizeal',
                role: 'Full Stack & AI Engineer',
                period: 'Dec 2025 - Present',
                highlights: [
                    'Architected AI-driven framework migration system reducing manual effort by 60%+',
                    'Designed end-to-end AI agent architecture for code transformation and validation',
                    'Led development of Test Automation Agentic Workflow with specialized agents'
                ]
            },
            {
                company: 'Techolution',
                role: 'Full Stack Engineer',
                period: 'Apr 2024 - Dec 2025',
                highlights: [
                    'Engineered high-performance backend modules supporting distributed AI workflows',
                    'Introduced Redis Pub/Sub pipelines for efficient real-time communication',
                    'Built micro-frontend dashboards using Next.js for AI chat and analytics'
                ]
            }
        ],
        projects: [
            {
                name: 'AI-Native Coding Interview Platform',
                tech: 'Next.js 14 · FastAPI · Azure OpenAI · Judge0',
                highlights: [
                    'Developed professional AI interviewer with stuck detection and contextual hinting',
                    'Integrated Judge0 for secure live code execution and automated test validation'
                ]
            },
            {
                name: 'Discipline Engine: Learning Command Center',
                tech: 'React · TypeScript · AWS Lambda · DynamoDB',
                highlights: [
                    'Designed a full-stack learning tracker with automated skill validation',
                    'Deployed serverless backend on AWS with DynamoDB persistence'
                ]
            }
        ]
    },
    genai: {
        title: 'Backend + GenAI Engineer',
        icon: <FiZap />,
        experience: [
            {
                company: 'Qualizeal',
                role: 'AI Engineer (GenAI Focus)',
                period: 'Dec 2025 - Present',
                highlights: [
                    'Architected LLM-powered code transformation pipelines using FastAPI',
                    'Designed Gen AI agent architecture for automated validation and execution',
                    'Engineered intelligent decision pipelines using Microsoft Agent Framework'
                ]
            },
            {
                company: 'Techolution',
                role: 'Backend/GenAI Engineer',
                period: 'Apr 2024 - Dec 2025',
                highlights: [
                    'Developed high-throughput FastAPI microservices for AI model execution',
                    'Implemented token-level streaming and audio transcription pipelines',
                    'Optimized Redis backplane for low-latency AI event communication'
                ]
            }
        ],
        projects: [
            {
                name: 'AI-Native Coding Interview Platform',
                tech: 'Azure OpenAI · Python · FastAPI · Socket.io',
                highlights: [
                    'Integrated Azure OpenAI for intelligent technical interviewer capabilities',
                    'Built real-time proctoring and evaluation engine using GenAI'
                ]
            },
            {
                name: 'Discipline Engine: Learning Command Center',
                tech: 'React · TypeScript · AWS Lambda · DynamoDB',
                highlights: [
                    'Designed a full-stack learning tracker with automated skill validation',
                    'Deployed serverless backend on AWS with DynamoDB persistence'
                ]
            }
        ]
    },
    backend: {
        title: 'Backend Developer',
        icon: <FiServer />,
        experience: [
            {
                company: 'Qualizeal',
                role: 'Senior Backend Engineer',
                period: 'Dec 2025 - Present',
                highlights: [
                    'Architected distributed systems for large-scale code migration workflows',
                    'Implemented Decorator Pattern-based logging and canonical observability',
                    'Applied SOLID principles to design scalable, production-grade backends'
                ]
            },
            {
                company: 'Techolution',
                role: 'Backend Engineer',
                period: 'Apr 2024 - Dec 2025',
                highlights: [
                    'Engineered resilient event-driven architectures using Node.js and Redis',
                    'Refined MongoDB schemas for high-concurrency agent orchestration',
                    'Created internal NPM libraries accelerating development speed by 40%'
                ]
            }
        ],
        projects: [
            {
                name: 'AI-Native Coding Interview Platform',
                tech: 'FastAPI · Socket.io · Redis · Judge0',
                highlights: [
                    'Architected robust real-time bidirectional communication layer',
                    'Implemented secure sandbox for code execution via Judge0 API'
                ]
            },
            {
                name: 'Discipline Engine: Learning Command Center',
                tech: 'React · TypeScript · AWS Lambda · DynamoDB',
                highlights: [
                    'Designed a full-stack learning tracker with automated skill validation',
                    'Deployed serverless backend on AWS with DynamoDB persistence'
                ]
            }
        ]
    },
    agentic: {
        title: 'Agentic AI Architect',
        icon: <FiCpu />,
        experience: [
            {
                company: 'Qualizeal',
                role: 'Agentic AI Engineer',
                period: 'Dec 2025 - Present',
                highlights: [
                    'Built multi-agent orchestration frameworks for autonomous framework migration',
                    'Designed UI Explorer and Code Generator specialized AI agents',
                    'Engineered agent workflows with structured tool execution and decision pipelines'
                ]
            },
            {
                company: 'Techolution',
                role: 'AI Orchestration Engineer',
                period: 'Apr 2024 - Dec 2025',
                highlights: [
                    'Engineered orchestration for 10+ concurrent agents in production',
                    'Built Redis-backed agent memory and state synchronization layers',
                    'Developed observability tools for multi-step agent execution traces'
                ]
            }
        ],
        projects: [
            {
                name: 'AI-Native Coding Interview Platform',
                tech: 'Agentic AI · Azure OpenAI · LangGraph',
                highlights: [
                    'Designed agentic proctoring and evaluation workflows',
                    'Implemented intelligent interviewer agents with contextual awareness'
                ]
            },
            {
                name: 'Discipline Engine: Learning Command Center',
                tech: 'React · TypeScript · AWS Lambda · DynamoDB',
                highlights: [
                    'Designed a full-stack learning tracker with automated skill validation',
                    'Deployed serverless backend on AWS with DynamoDB persistence'
                ]
            }
        ]
    }
};

const Resume: Component = () => {
    const [activeTab, setActiveTab] = createSignal<ResumeType>('fullstack');

    const currentResume = () => resumeVersions[activeTab()];

    return (
        <div class={styles.resume}>
            <Motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                class={styles.tabs}
            >
                <For each={['fullstack', 'genai', 'backend', 'agentic'] as ResumeType[]}>
                    {(type) => (
                        <button 
                            class={`${styles.tab} ${activeTab() === type ? styles.active : ''}`}
                            onClick={() => setActiveTab(type)}
                        >
                            {resumeVersions[type].icon}
                            {type.charAt(0).toUpperCase() + type.slice(1).replace('ai', ' AI')}
                        </button>
                    )}
                </For>
            </Motion.div>

            <Presence exitBeforeEnter>
                <Motion.div 
                    key={activeTab()}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    class={styles.resumePage}
                >
                    <header class={styles.header}>
                        <div class={styles.nameInfo}>
                            <h1>Saurabh Gathade</h1>
                            <p class={styles.title}>{currentResume().title}</p>
                        </div>
                        <div class={styles.contactInfo}>
                            <span><FiMail /> saurabhgathade131@gmail.com</span>
                            <span><FiMapPin /> Hyderabad, India</span>
                            <span><FiGithub /> github.com/Saurabhgathade131</span>
                            <span><FiLinkedin /> linkedin.com/in/saurabhpgathade</span>
                        </div>
                    </header>

                    <section class={styles.section}>
                        <h2>Work Experience</h2>
                        <For each={currentResume().experience}>
                            {(exp) => (
                                <div class={styles.experienceItem}>
                                    <div class={styles.expHeader}>
                                        <h3>{exp.role}</h3>
                                        <span class={styles.period}>{exp.period}</span>
                                    </div>
                                    <div class={styles.company}>{exp.company}</div>
                                    <ul class={styles.highlights}>
                                        <For each={exp.highlights}>
                                            {(h) => <li>{h}</li>}
                                        </For>
                                    </ul>
                                </div>
                            )}
                        </For>
                    </section>

                    <section class={styles.projectsSection}>
                        <h2>Key Projects</h2>
                        <For each={currentResume().projects}>
                            {(project) => (
                                <div class={styles.projectItem}>
                                    <div class={styles.projectHeader}>
                                        <h3>{project.name}</h3>
                                        <span class={styles.techStack}>{project.tech}</span>
                                    </div>
                                    <ul class={styles.highlights}>
                                        <For each={project.highlights}>
                                            {(h) => <li>{h}</li>}
                                        </For>
                                    </ul>
                                </div>
                            )}
                        </For>
                    </section>

                    <div class="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-slate-500 text-xs uppercase tracking-widest print:hidden">
                        <span>Generated by Discipline Engine Command Center</span>
                        <div class="flex gap-4">
                            <button onClick={() => window.print()} class="hover:text-white transition-colors flex items-center gap-1">
                                <BiRegularFile /> Print PDF
                            </button>
                        </div>
                    </div>
                </Motion.div>
            </Presence>
        </div>
    );
};

export default Resume;
