import { Component } from 'solid-js';
import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter } from 'solid-icons/fa';
import { BiRegularDownload } from 'solid-icons/bi';
import { AiOutlineMail } from 'solid-icons/ai';
import styles from './Hero.module.scss';

const Hero: Component = () => {
    return (
        <section class={styles.hero}>
            <div class={styles.content}>
                <p class={styles.greeting}>👋 Hey there! I'm</p>
                <h1 class={styles.title}>
                    Saurabh <span class={styles.gradient}>Gathade</span>
                </h1>
                <p class={styles.subtitle}>Full Stack & AI Engineer | Generative AI | Agentic Workflows</p>
                <p class={styles.description}>
                    Building scalable, AI-native systems with React, Next.js 14, FastAPI, and Agentic Orchestration.
                    Expertise in real-time architectures, multi-agent workflows, and performance optimization.
                    Currently driving AI innovation at Qualizeal.
                </p>

                <div class={styles.buttons}>
                    <a href="#contact" class={styles.btnPrimary}>
                        <AiOutlineMail size={20} />
                        Get In Touch
                    </a>
                    <a href="/resume" class={styles.btnSecondary}>
                        <BiRegularDownload size={20} />
                        View 4 Resume Versions
                    </a>
                </div>

                <div class={styles.social}>
                    <a href="https://github.com/Saurabhgathade131" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaBrandsGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/saurabhpgathade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaBrandsLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com/SaurabhGathade" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaBrandsTwitter size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
