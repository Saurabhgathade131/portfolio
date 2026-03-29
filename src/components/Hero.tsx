import { Component } from 'solid-js';
import { Motion } from '@motionone/solid';
import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter } from 'solid-icons/fa';
import { BiRegularDownload } from 'solid-icons/bi';
import { AiOutlineMail } from 'solid-icons/ai';
import styles from './Hero.module.scss';

const Hero: Component = () => {
    return (
        <section class={styles.hero}>
            <div class={styles.content}>
                <Motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    class={styles.greeting}
                >
                    👋 Hey there! I'm
                </Motion.p>
                <Motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    class={styles.title}
                >
                    Saurabh <span class="gradient-text">Gathade</span>
                </Motion.h1>
                <Motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    class={styles.subtitle}
                >
                    Full Stack & AI Engineer | Generative AI | Agentic Workflows
                </Motion.p>
                <Motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    class={styles.description}
                >
                    Building scalable, AI-native systems with React, Next.js 14, FastAPI, and Agentic Orchestration.
                    Expertise in real-time architectures, multi-agent workflows, and performance optimization.
                    Currently driving AI innovation at Qualizeal.
                </Motion.p>

                <Motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    class={styles.buttons}
                >
                    <a href="#contact" class={styles.btnPrimary}>
                        <AiOutlineMail size={20} />
                        Get In Touch
                    </a>
                    <a href="/resume" class={styles.btnSecondary}>
                        <BiRegularDownload size={20} />
                        View 4 Resume Versions
                    </a>
                </Motion.div>

                <Motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    class={styles.social}
                >
                    <a href="https://github.com/Saurabhgathade131" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaBrandsGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/saurabhpgathade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaBrandsLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com/SaurabhGathade" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaBrandsTwitter size={24} />
                    </a>
                </Motion.div>
            </div>
        </section>
    );
};

export default Hero;
