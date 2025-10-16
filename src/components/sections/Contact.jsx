import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import SendButton from "../common/buttons/SendButton";

export const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState("idle");
  const [flash, setFlash] = useState({ open: false, type: "success", message: "" });

  const texts = {
    pt: {
      title: "Entre em Contato",
      name: "Seu Nome",
      email: "example@gmail.com",
      message: "Sua Mensagem",
      send: "Enviar",
      sending: "Enviando...",
      sent: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar a mensagem. Tente novamente mais tarde.",
    },
    en: {
      title: "Get in Touch",
      name: "Your Name",
      email: "example@hotmail.com",
      message: "Your Message",
      send: "Send",
      sending: "Sending...",
      sent: "Message sent successfully!",
      error: "Error sending message. Try again later.",
    },
  };

  const { title, name, email, message, send, sent, error } = texts[language] || texts.pt;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );

      setSubmitState("success");
      setFormData({ name: "", email: "", message: "" });

      setFlash({ open: true, type: "success", message: sent });

      setTimeout(() => setSubmitState("idle"), 1600);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setSubmitState("error");
      setFlash({ open: true, type: "error", message: error });

      setTimeout(() => setSubmitState("idle"), 1600);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-4">
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
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={email}
              required
              maxLength={255}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={message}
              rows={5}
              maxLength={255}
              className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
            />

            <div className="flex justify-center">
              <SendButton state={submitState} label={send} />
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
