import React, { useState } from 'react';
import SidebarToggleButton from '../components/buttons/SidebasToggleButton';
import Sidebar from '../components/bars/sidebar';
import Img from '/public/storage/img/bus.png';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <header className="flex w-full py-6 bg-gray-900 shadow-md fixed top-0 left-0 z-10">
            <SidebarToggleButton onClick={() => setIsSidebarOpen(prev => !prev)} />
            <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Bernardo Santos Rolim</h1>
          </div>
          
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <section className="py-[300px] px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Olá, eu sou Bernardo</h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
          Desenvolvedor Front-End júnior apaixonado por criar experiências web elegantes e responsivas. Sempre em busca de aprender e colaborar.
        </p>
        <a
          href="#projects"
          className="inline-block mt-8 px-8 py-4 border-2 border-gray-700 rounded-md hover:bg-gray-800 transition"
        >
          Ver meus projetos
        </a>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto text-start">
          <h3 className="text-3xl font-bold mb-6">Sobre Mim</h3>
          <p className="text-gray-400 leading-relaxed">
            Pós-graduado em Desenvolvimento de Jogos e graduado em Sistemas de Informação,
            com experiência em suporte técnico e desenvolvimento de sites. Sou comunicativo,
            trabalho bem em equipe e estou sempre motivado a aprender novas tecnologias.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-8">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Projetos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div
              className="relative h-[300px] flex flex-col sm:justify-center items-center pt-6
              bg-gray-600 bg-cover bg-center"
              style={{ backgroundImage: `url(${Img})` }}
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold mb-2">OndeIr</h4>
                <p className="text-gray-400 mb-4">
                  Plataforma universitária desenvolvida com MongoDB, JavaScript, HTML e CSS em equipe.
                </p>
                <a href="#" className="text-indigo-400 hover:underline">
                  Ver detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-gray-900">
        <div className="container mx-auto max-w-lg text-center">
          <h3 className="text-3xl font-bold mb-6">Contato</h3>
          <p className="text-gray-400 mb-8">
            Vamos conversar! Me mande um e-mail ou conecte-se no LinkedIn.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:bernardo@example.com" className="hover:text-gray-400">
              Email
            </a>
            <a href="https://www.linkedin.com/in/bernardo-rolim-aa6802213/" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      

      <footer className="py-6 px-8 bg-black text-center text-gray-600">
        © {new Date().getFullYear()} Bernardo Santos Rolim. Todos os direitos reservados.
      </footer>
    </div>
  );
}