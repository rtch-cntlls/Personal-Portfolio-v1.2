import { useState, useEffect } from 'react';
import Content from '../components/Hero-UI/Content';
import Image from '../components/Hero-UI/Image';

const typingPhrases = ["Hi, I'm", "Hello, I'm"];

export default function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-bs-theme');
      setIsDarkMode(currentTheme === 'dark');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fullText = typingPhrases[phraseIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section id="hero" className="d-flex align-items-center pt-5 overflow-hidden">
      <div className="hero-grid-pattern">
        <div className="grid-square" style={{ top: '40px', left: '120px' }}></div>
        <div className="grid-square" style={{ top: '80px', left: '360px' }}></div>
        <div className="grid-square" style={{ top: '40px', left: '680px' }}></div>
        <div className="grid-square" style={{ top: '120px', left: '920px' }}></div>
        <div className="grid-square" style={{ top: '80px', left: '1160px' }}></div>
        <div className="grid-square" style={{ top: '40px', left: '1440px' }}></div>

        <div className="grid-square" style={{ top: '240px', left: '200px' }}></div>
        <div className="grid-square" style={{ top: '320px', left: '560px' }}></div>
        <div className="grid-square" style={{ top: '280px', left: '840px' }}></div>
        <div className="grid-square" style={{ top: '360px', left: '1280px' }}></div>
        <div className="grid-square" style={{ top: '200px', left: '1600px' }}></div>

        <div className="grid-square" style={{ top: '520px', left: '80px' }}></div>
        <div className="grid-square" style={{ top: '600px', left: '320px' }}></div>
        <div className="grid-square" style={{ top: '560px', left: '600px' }}></div>
        <div className="grid-square" style={{ top: '640px', left: '880px' }}></div>
        <div className="grid-square" style={{ top: '520px', left: '1120px' }}></div>
        <div className="grid-square" style={{ top: '600px', left: '1400px' }}></div>
        <div className="grid-square" style={{ top: '560px', left: '1680px' }}></div>
        <div className="grid-square" style={{ top: '640px', left: '440px' }}></div>
        <div className="grid-square" style={{ top: '520px', left: '1840px' }}></div>
      </div>

      <div className="container py-5 px-5 position-relative z-2">
        <div className="row align-items-center">
          <Content isDarkMode={isDarkMode} currentText={currentText} />
          <Image isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
}