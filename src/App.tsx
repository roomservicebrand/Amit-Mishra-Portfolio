
import React, { useState, useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Insights from './components/Insights';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Publications from './components/Publications';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
const Chatbot = lazy(() => import('./components/Chatbot'));


const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Insights />
        <Projects />
        <Achievements theme={theme} />
        <Services />
        <Publications />
        <Blog />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {!isChatbotOpen && <ChatWidget onClick={() => setIsChatbotOpen(true)} />}
      {isChatbotOpen && (
        <Suspense fallback={null}>
            <Chatbot onClose={() => setIsChatbotOpen(false)} />
        </Suspense>
      )}
    </div>
  );
};

export default App;