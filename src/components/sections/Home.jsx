import NeonProfile from "../common/NeonProfile";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslations } from "../../i18n/useTranslations";

export const Home = ({ language }) => {
  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const { t } = useTranslations(language);
  const { subtitle, projects, contact } = t("home");
  const profileSrc = `${import.meta.env.BASE_URL}img/profile3.jpeg`;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">

      <div className="absolute top-24 -left-24 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-24 -right-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />

      <RevealOnScroll>
        <div className="w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl">

          <div className="text-center md:text-left order-2 md:order-1">

            {/* <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow" />
              {language === 'pt' ? 'Disponível para trabalhar' : 'Available to work'}
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="hero-name-text">Bernardo</span>
              <br />
              <span className="text-white">Santos Rolim</span>
            </h1>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-5 md:mx-0 mx-auto" />

            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md md:mx-0 mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-3">
              <a
                href="#projects"
                onClick={e => handleScroll(e, 'projects')}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-7 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.45)]"
              >
                {projects}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#find-me"
                onClick={e => handleScroll(e, 'find-me')}
                className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 py-3 px-7 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.15)] hover:bg-blue-500/10 hover:border-blue-500/60"
              >
                {contact}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 md:order-2">
            <NeonProfile
              imageSrc={profileSrc}
              alt="Bernardo Santos Rolim"
              sizeClass="w-56 sm:w-64 md:w-72 lg:w-80 border-4 border-white/20 sm:p-0 rounded-none sm:rounded-full"
            />
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
}
