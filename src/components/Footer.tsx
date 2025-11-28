import { Component } from 'solid-js';
import { FaBrandsGithub, FaBrandsLinkedin, FaBrandsTwitter } from 'solid-icons/fa';
import styles from './Footer.module.scss';

const Footer: Component = () => {
    return (
        <footer class={styles.footer}>
            <div class={styles.container}>
                <div class={styles.content}>
                    <div class={styles.section}>
                        <h3 class={styles.title}>Saurabh Gathade</h3>
                        <p class={styles.description}>
                            Full Stack Engineer passionate about building scalable, cloud-native systems
                            with modern technologies and AI integration.
                        </p>
                    </div>

                    <div class={styles.section}>
                        <h3 class={styles.title}>Quick Links</h3>
                        <div class={styles.links}>
                            <a href="#skills">Skills</a>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>

                    <div class={styles.section}>
                        <h3 class={styles.title}>Connect</h3>
                        <div class={styles.social}>
                            <a href="https://github.com/Saurabhgathade131" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaBrandsGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/saurabhpgathade/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaBrandsLinkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaBrandsTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div class={styles.bottom}>
                    <p>
                        © {new Date().getFullYear()} Saurabh Gathade. Built with <span class={styles.heart}>♥</span> using SolidJS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
