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
        <div className=" w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent uppercase">
              Bernardo Santos Rolim
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-center items-center sm:items-stretch gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={e => handleScroll(e, 'projects')}
                className="inline-block bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                {projects}
              </a>

              <a
                href="#find-me"
                onClick={e => handleScroll(e, 'find-me')}
                className="inline-block border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                {contact}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <NeonProfile
              imageSrc="/danreby-portifolio/img/profile3.jpeg"
              alt="Bernardo Santos Rolim"
              sizeClass="w-40 sm:w-48 md:w-72 lg:w-96"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
