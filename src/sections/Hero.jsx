import { useState, useEffect } from 'react';
import Content from '../components/Hero-UI/Content';
import Image from '../components/Hero-UI/Image';

const typingPhrases = ["Hi, I'm", "Hello, I'm"];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="hero" className="d-flex align-items-center pt-5 overflow-hidden position-relative">
      <div className="container py-5 px-3 px-md-5 position-relative z-2">
        <div className="row align-items-center">
          <Content currentText={currentText} />
          <Image />
        </div>
      </div>
    </section>
  );
}