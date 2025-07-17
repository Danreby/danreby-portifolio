import { useEffect } from "react"


export const NavBar = ({menuOpen, setMenuOpen}) => {

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

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <a href="#home" onClick={e => handleScroll(e, 'home')} className="font-mono text-xl font-bold text-white"> neydo<span className="text-blue-500">.rar</span> </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" onClick={e => handleScroll(e, 'home')} className="text-gray-300 hover:text-white transition-colors"> Home </a>
                    <a href="#about" onClick={e => handleScroll(e, 'about')} className="text-gray-300 hover:text-white transition-colors"> Sobre </a>
                    <a href="#projects" onClick={e => handleScroll(e, 'projects')} className="text-gray-300 hover:text-white transition-colors"> Projetos </a>
                    <a href="#contact" onClick={e => handleScroll(e, 'find-me')} className="text-gray-300 hover:text-white transition-colors"> Contato </a>
                </div>
            </div>
        </div>
    </nav>
    )
}