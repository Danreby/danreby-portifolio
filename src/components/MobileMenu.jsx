import { useTranslations } from "../i18n/useTranslations";

export const MobileMenu = ({ menuOpen, setMenuOpen, setLanguage, language }) => {

  const handleScroll = (event, sectionId) => {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const { t } = useTranslations(language);
  const { home, about, projects, contact } = t("navigation");

  const links = [
    { label: home, id: 'home' },
    { label: about, id: 'about' },
    { label: projects, id: 'projects' },
    { label: contact, id: 'find-me' },
  ];

  return (
    <div
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      style={{ background: 'rgba(8, 8, 12, 0.97)', backdropFilter: 'blur(24px)' }}
    >
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <nav className="flex flex-col items-center gap-7 z-10">
        {links.map(({ label, id }, i) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => handleScroll(e, id)}
            className={`text-2xl font-semibold text-white hover:text-blue-400 transition-all duration-300
              ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
          >
            {label}
          </a>
        ))}

      <div className={`mt-2 flex gap-3 transition-all duration-300
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: menuOpen ? '260ms' : '0ms' }}
      >
          {['pt', 'en'].map((lang) => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); setMenuOpen(false); }}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200
                ${language === lang
                  ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
            >
              {lang === 'pt' ? 'Português' : 'English'}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

