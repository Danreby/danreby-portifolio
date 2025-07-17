

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right uppercase">
            Yokoso, Watashi no ryōiki Tenkai e
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Explore meus projetos e saiba mais sobre mim.
        </p>
        <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
              Ver Projetos
            </a>
            <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
              Me Contate
            </a>
        </div>
      </div>
    </section>
  );
}