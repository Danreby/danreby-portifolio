import { useEffect, useState } from "react"
import { useTranslations } from "../i18n/useTranslations"

export const NavBar = ({menuOpen, setMenuOpen, setLanguage, language}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const handleLangChange = (e) => {
    setLanguage(e.target.value);
    setMenuOpen(false);
  };

  const { t } = useTranslations(language);
  const { home, about, projects, contact } = t("navigation");

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled
        ? 'bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            onClick={e => handleScroll(e, 'home')}
            className="font-mono text-xl font-bold text-white hover:opacity-90 transition-opacity select-none"
          >
            neydo<span className="text-blue-500 neon-text-blue">.rar</span>
          </a>

          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between group"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${menuOpen ? 'rotate-[36deg] translate-x-[3px]' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${menuOpen ? '-rotate-[36deg] translate-x-[3px]' : ''}`} />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: home, id: 'home' },
              { label: about, id: 'about' },
              { label: projects, id: 'projects' },
              { label: contact, id: 'find-me' },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => handleScroll(e, id)}
                className="nav-link text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}
            <select
              className="text-gray-300 transition-colors bg-transparent text-sm font-medium cursor-pointer outline-none border border-white/10 rounded-lg px-2 py-1 hover:text-white hover:border-blue-500/40"
              style={{ background: 'rgba(10,10,10,0.8)' }}
              value={language}
              onChange={handleLangChange}
            >
              <option value="pt" style={{ background: '#0a0a0a' }}>PT</option>
              <option value="en" style={{ background: '#0a0a0a' }}>EN</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}