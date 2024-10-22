import React, { useState } from "react";
import { db } from "../firebase/firebase"; // Importa a configuração do Firebase
import { collection, addDoc } from "firebase/firestore";
import "../assets/styles/contact.css"; // Estilos específicos para a página de contato

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: new Date(),
      });
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Erro ao enviar mensagem: ", err);
      setError("Houve um erro ao enviar sua mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <h1>Entre em Contato Conosco</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Assunto:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
