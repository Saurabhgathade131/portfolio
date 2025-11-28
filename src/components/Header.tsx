import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './Header.module.scss';

const Header: Component = () => {
    return (
        <header class={styles.header}>
            <div class={styles.container}>
                <A href="/" class={styles.logoContainer}>
                    <img src="/logo.png" alt="SPG Logo" class={styles.logoImage} />
                </A>
                <nav class={styles.nav}>
                    <A href="/" end activeClass={styles.active}>Home</A>
                    <A href="/projects" activeClass={styles.active}>Projects</A>
                    <A href="/about" activeClass={styles.active}>About</A>
                    <A href="/contact" activeClass={styles.active}>Contact</A>
                </nav>
            </div>
        </header>
    );
};

export default Header;
