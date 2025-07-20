import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingSreen";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { FindMe } from "./components/sections/FindMe";

function App() {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('pt') 

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />} {""}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setLanguage={setLanguage} language={language}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setLanguage={setLanguage} language={language}/>
          <Home language={language}/>
          <About language={language}/>
          <Projects language={language}/>
          <FindMe language={language}/>
          <Contact language={language}/>
        </div>
    </>
  )
}

export default App
