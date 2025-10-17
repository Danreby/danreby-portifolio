import NeonProfile from "../common/NeonProfile";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = ({ language }) => {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const texts = {
    pt: {
      subtitle: 'Ao Infinito e Além 🚀',
      projects: 'Ver Projetos',
      contact: 'Me contate'
    },
    en: {
      subtitle: 'To infinity and beyond 🚀',
      projects: 'See projects',
      contact: 'Contact Me'
    }
  }

  const { subtitle, projects, contact } = texts[language] || texts.pt

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent uppercase">
              Bernardo Santos Rolim
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-row flex-wrap justify-center items-center gap-3">
              <a
                href="#projects"
                onClick={e => handleScroll(e, 'projects')}
                className="inline-block bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                {projects}
              </a>

              <a
                href="#find-me"
                onClick={e => handleScroll(e, 'find-me')}
                className="inline-block border border-blue-500/50 text-blue-500 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                {contact}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <NeonProfile
              imageSrc="/danreby-portifolio/img/profile3.jpeg"
              alt="Bernardo Santos Rolim"
              sizeClass="w-60 sm:w-48 md:w-72 lg:w-96 border-4 border-white/20 sm:p-0 rounded-none sm:rounded-full"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
