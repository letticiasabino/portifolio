import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  return (
    <main className="relative z-10 container mx-auto px-6 md:px-12 pt-24 pb-12 flex flex-col gap-32">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
