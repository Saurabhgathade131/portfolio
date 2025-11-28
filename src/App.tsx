import { lazy } from 'solid-js';
import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Header from './components/Header';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const App: Component = () => {
  return (
    <Router root={(props) => (
      <>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </>
    )}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/contact" component={ContactPage} />
    </Router>
  );
};

export default App;
