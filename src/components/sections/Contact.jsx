import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import SendButton from "../common/buttons/SendButton";
import { useTranslations } from "../../i18n/useTranslations";

export const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitState, setSubmitState] = useState("idle");

  const { t } = useTranslations(language);
  const contactTexts = t("contact");
  const { title, name, email, message } = contactTexts;

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
      setTimeout(() => setSubmitState("idle"), 1600);
    } catch (err) {
      console.error("EmailJS send error:", err);
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 1600);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden">
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <RevealOnScroll>
        <div className="w-full max-w-5xl px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <div className="flex flex-col gap-6">
                <div>
                  <span className="section-mono-label">// contact</span>
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {title}
                  </h2>
                  <div className="glow-divider" style={{ margin: '0' }} />
                </div>

                <p className="text-gray-400 text-base leading-relaxed">
                  {contactTexts.description}
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/Danreby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-200 group rounded-xl px-3 py-2.5 hover:bg-white/4 border border-transparent hover:border-white/8"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 group-hover:bg-white/8 transition-all shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-gray-600 font-mono leading-none mb-0.5">GitHub</span>
                      <span className="text-sm font-mono truncate">github.com/Danreby</span>
                    </div>
                    <svg className="w-3.5 h-3.5 ml-auto text-gray-700 group-hover:text-gray-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/bernardo-rolim-aa6802213"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-all duration-200 group rounded-xl px-3 py-2.5 hover:bg-blue-500/5 border border-transparent hover:border-blue-500/15"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-gray-600 font-mono leading-none mb-0.5">LinkedIn</span>
                      <span className="text-sm font-mono truncate">bernardo-rolim</span>
                    </div>
                    <svg className="w-3.5 h-3.5 ml-auto text-gray-700 group-hover:text-blue-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="https://instagram.com/neydo.rar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-all duration-200 group rounded-xl px-3 py-2.5 hover:bg-pink-500/5 border border-transparent hover:border-pink-500/15"
                  >
                    <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-pink-500/30 group-hover:bg-pink-500/8 transition-all shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                      </svg>
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs text-gray-600 font-mono leading-none mb-0.5">Instagram</span>
                      <span className="text-sm font-mono truncate">neydo.rar</span>
                    </div>
                    <svg className="w-3.5 h-3.5 ml-auto text-gray-700 group-hover:text-pink-400 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
              </div>

              <div>
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
                    className="form-input"
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
                    className="form-input"
                  />

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={message}
                    rows={5}
                    maxLength={255}
                    className="form-input"
                  />

                  <div className="flex justify-end pt-1">
                    <SendButton state={submitState} label={contactTexts.send} />
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
