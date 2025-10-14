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
      subtitle: 'Explore meus projetos e saiba mais sobre mim.',
      projects: 'Ver Projetos',
      contact: 'Me contate'
    },
    en: {
      subtitle: 'Find out about me and my projects',
      projects: 'See projects',
      contact: 'Contact Me'
    }
  }

  const { subtitle, projects, contact } = texts[language] || texts.pt

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center justify-center items-center z-10 px-4 grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right uppercase">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right uppercase">
                Bernardo Santos Rolim
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                {subtitle}
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#projects" onClick={e => handleScroll(e, 'projects')} className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                {projects}
              </a>
              <a href="#find-me" onClick={e => handleScroll(e, 'find-me')} className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                {contact}
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <NeonProfile imageSrc="/danreby-portifolio/img/profile3.jpeg" size={384} alt="Bernardo Santos Rolim" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}