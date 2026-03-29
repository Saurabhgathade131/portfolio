import { onMount, lazy, type Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Lenis from 'lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Roadmaps = lazy(() => import('./pages/Roadmaps'));
const Resume = lazy(() => import('./pages/Resume'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const App: Component = () => {
  onMount(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <Router root={(props) => (
      <>
        <div class="mesh-bg"></div>
        <ThreeBackground />
        <Header />
        <main>{props.children}</main>
        <Footer />
      </>
    )}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/roadmaps" component={Roadmaps} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/contact" component={ContactPage} />
    </Router>
  );
};

export default App;
