import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Erro ao enviar a mensagem. Tente novamente mais tarde.")
      );
  };

  const texts = {
    pt: {
      title: 'Entre em Contato',
      name: 'Seu Nome',
      email: 'example@gmail.com',
      message: 'Sua Mensagem',
      send: 'Enviar'
    },
    en: {
      title: 'Get in Touch',
      name: 'Your Name',
      email: 'example@hotmail.com',
      message: 'Your Message',
      send: 'Send'
    }
  }

  const { title, name, email, message, send } = texts[language] || texts.pt

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {title}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={name}
              required
              maxLength={255}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder={email}
              required
              maxLength={255}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={message}
              rows={5}
              maxLength={255}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />

            <button
              type="submit"
              className="w-full sm:w-auto mx-auto block bg-blue-500 text-white px-6 py-2 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {send}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
