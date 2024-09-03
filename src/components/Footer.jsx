import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Valorant Info. Todos os direitos reservados.</p>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/privacidade">Política de Privacidade</a>
            </li>
          </ul>
        </nav>
        <div className="social-links">
          <a
            href="https://twitter.com/PlayVALORANT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.facebook.com/VALORANTbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/valorantbrasil"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
