import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <Testimonials />
      <Blog />
      <Newsletter />
    </main>
  );
}


