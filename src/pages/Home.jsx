// src/pages/Home.jsx
import { useEffect, useRef } from 'react';
import '../styles/style.css';

// ESTA LINHA É CRUCIAL: Verifique o caminho e o nome exato do arquivo
import euImg from '../assets/img/eu.jpg'; 

export default function Home() {
    // ...resto do código (na tag <img>, use src={euImg})
  const typewriterRef = useRef(null);

  useEffect(() => {
    const textArray = ["Programador Full Stack", "Front-end é arte🖼️", "Back-end é magia 🧙‍♂️"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function type() {
      const currentText = textArray[textIndex];
      const textToShow = isDeleting 
        ? currentText.substring(0, charIndex - 1) 
        : currentText.substring(0, charIndex + 1);

      if (typewriterRef.current) {
        typewriterRef.current.textContent = textToShow;
      }

      if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 1500); 
          return;
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % textArray.length; 
          timeoutId = setTimeout(type, 500); 
          return;
        }
      }

      const typingSpeed = isDeleting ? 75 : 150;
      timeoutId = setTimeout(type, typingSpeed);
    }

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="inicio">
      <div className="inicio-img">
        <img src={euImg} alt="eu" />
      </div>
      <div className="inicio-content">
        <h1>Olá, eu sou o <span>João</span></h1>
        <h3 className="typing-text">
          <span className="typewriter" ref={typewriterRef}></span>
        </h3>
        <p>
          Meu nome é João Diego Martins, tenho 18 anos e atualmente curso Análise e Desenvolvimento de Sistemas. Embora ainda não tenha ampla experiência na área de programação, estou comprometido em evoluir constantemente, dedicando-me diariamente para aprender novas habilidades e aprimorar meus conhecimentos. Tenho paixão pela tecnologia e busco sempre transformar desafios em oportunidades de crescimento.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/jo%C3%A3o-diego-martins-5aa4b5345/" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/JDMartinss" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}