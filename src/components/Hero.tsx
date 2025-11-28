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
                <p class={styles.subtitle}>Full Stack Engineer | Frontend Specialist | AI Enthusiast</p>
                <p class={styles.description}>
                    Building scalable, cloud-native systems with React, Next.js, Node.js, and AI integration.
                    Specialized in real-time applications, microservices, and performance optimization.
                    Currently engineering LLM Studio Platform at Techolution.
                </p>

                <div class={styles.buttons}>
                    <a href="#contact" class={styles.btnPrimary}>
                        <AiOutlineMail size={20} />
                        Get In Touch
                    </a>
                    <a href="https://drive.google.com/file/d/1O-N2iH1nuqSb80WgUTtHIN4zqaDyV7HQ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class={styles.btnSecondary}>
                        <BiRegularDownload size={20} />
                        View Resume
                    </a>
                </div>

                <div class={styles.social}>
                    <a href="https://github.com/Saurabhgathade131" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaBrandsGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/saurabhpgathade/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BMho1ScZ1Q6WUW9yD1wYDkA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaBrandsLinkedin size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaBrandsTwitter size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
