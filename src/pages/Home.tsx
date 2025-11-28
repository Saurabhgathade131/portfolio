import { Component } from 'solid-js';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home: Component = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
