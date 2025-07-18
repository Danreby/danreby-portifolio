import { useEffect } from "react"


export const NavBar = ({menuOpen, setMenuOpen, setLanguage, language}) => {

        useEffect(() => {
            document.body.style.overflow = menuOpen ? "hidden" : "auto";
        }, [menuOpen]);

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

    const texts = {
        pt: {
            home: 'Início',
            about: 'Sobre',
            projects: 'Projetos',
            contact: 'Contato',
        },
        en: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
        }
    }

  const { home, about, projects, contact } = texts[language] || texts.pt

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <a href="#home" onClick={e => handleScroll(e, 'home')} className="font-mono text-xl font-bold text-white"> neydo<span className="text-blue-500">.rar</span> </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" onClick={e => handleScroll(e, 'home')} className="text-gray-300 hover:text-white transition-colors"> {home} </a>
                    <a href="#about" onClick={e => handleScroll(e, 'about')} className="text-gray-300 hover:text-white transition-colors"> {about} </a>
                    <a href="#projects" onClick={e => handleScroll(e, 'projects')} className="text-gray-300 hover:text-white transition-colors"> {projects} </a>
                    <a href="#contact" onClick={e => handleScroll(e, 'find-me')} className="text-gray-300 hover:text-white transition-colors"> {contact} </a>
                    <select
                        className="text-gray-300 hover:text-white transition-colors bg-[rgba(10,10,10,0.8)]"
                        defaultValue="pt"
                        onChange={handleLangChange}
                    >
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </div>
    </nav>
    )
}