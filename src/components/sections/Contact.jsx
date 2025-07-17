import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((response) => {
            alert("Mensagem enviada com sucesso!");
            setFormData({ name: "", email: "", message: "" });
        }).catch(() => alert("Erro ao enviar a mensagem. Tente novamente mais tarde."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Entre em Contato
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" name="name" value={formData.name} onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            } placeholder="Seu Nome" required className="w-full  my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                            <input type="email" id="email" email="email" value={formData.email} onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            } placeholder="example@gmail.com" required className="w-full  my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                            <textarea id="message" name="message"  value={formData.message} onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            } placeholder="Sua Mensagem" rows={5} className="w-full  my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"></textarea>
                            <button type="submit"  className=" w-auto mx-auto my-4 bg-blue-500 text-white px-8 py-3 rounded font-medium block transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Enviar</button>
                        </div>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
}