import React from "react";
import HighlightedProducts from "../components/HighlightedProducts";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <div className="home-box">
        <h1>Bem-vindo a ArtWall!</h1>
        <main>
          <section id="produtos-destaque" className="produtos-destaque">
            <HighlightedProducts />
            <Link to="/products">
              <button type="button">Ver mais produtos</button>
            </Link>
          </section>

          <section id="sobre-nos" className="sobre-nos">
            <About />
            <Link to="/about">
              <button type="button">Saiba mais</button>
            </Link>
          </section>

          <section id="contato" className="contato">
            <Contact />
            <Link to="/contact">
              <button type="button">Entre em Contato</button>
            </Link>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 ArtWall. Todos os direitos reservados.</p>
        </footer>
    </div>
  );
};

export default Home;
