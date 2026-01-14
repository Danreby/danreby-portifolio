import { useTranslations } from "../i18n/useTranslations";

export const MobileMenu = ({ menuOpen, setMenuOpen, setLanguage, language }) => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  };

  const handleLangChange = (e) => {
            setLanguage(e.target.value)
            setMenuOpen(false)
        }

    const { t } = useTranslations(language)
    const { home, about, projects, contact } = t("navigation")

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
        ${menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu" title="Close Menu"
        >
        &times;
      </button>

        <a href="#home"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {home} </a>
        <a href="#about"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {about} </a>
        <a href="#projects"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {projects} </a>
        <a href="#find-me"  onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> {contact} </a>
        <select className={`bg-transparent text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} `}
          value={language}
          onChange={handleLangChange}
        >
          <option className="bg-[rgba(10,10,10,0.8)] text-white" value="pt" > Português </option>
          <option className="bg-[rgba(10,10,10,0.8)] text-white" value="en" > English </option>
        </select>
    </div>
  );
};
