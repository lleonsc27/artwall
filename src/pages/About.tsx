import React from "react";
import "../assets/styles/about.css";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Sobre Nós</h1>
      <section className="about-intro">
        <p>
          Bem-vindo à ArtWall, a sua loja especializada em quadros que transformam qualquer espaço. 
          Desde o nosso início, temos o compromisso de oferecer arte acessível e de alta qualidade, 
          permitindo que todos expressem sua individualidade e estilo através de belas obras.
        </p>
      </section>

      <section className="mission-vision-values">
        <h2>Missão</h2>
        <p>
          Nossa missão é proporcionar uma experiência única de compra de arte, 
          oferecendo produtos de qualidade que inspirem e enriqueçam o ambiente de nossos clientes.
        </p>

        <h2>Visão</h2>
        <p>
          Ser a principal referência em quadros e decoração de arte, 
          reconhecida pela qualidade de nossos produtos e pela excelência no atendimento ao cliente.
        </p>

        <h2>Valores</h2>
        <ul className="values-ul">
          <li className="values-li">Qualidade: Acreditamos que cada quadro deve ser uma peça única de arte.</li>
          <li className="values-li">Acessibilidade: Trabalhamos para oferecer opções para todos os orçamentos.</li>
          <li className="values-li">Inovação: Estamos sempre em busca de novas tendências e designs para oferecer aos nossos clientes.</li>
          <li className="values-li">Atendimento ao Cliente: Valorizamos cada cliente e nos esforçamos para oferecer o melhor suporte possível.</li>
        </ul>
      </section>

      <section className="contact-preview">
        <h2>Entre em Contato</h2>
        <p>
          Se você tiver alguma dúvida ou precisar de mais informações sobre nossos <br/>produtos, 
          não hesite em <Link to="/contact" className="contact-redirect">entrar em contato conosco!</Link>
        </p>
      </section>
    </div>
  );
};

export default About;
