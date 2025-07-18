import { RevealOnScroll } from "../RevealOnScroll";

export const About = ({ language }) => {

    const frontendSkills = ["React", "Vue.js", "JavaScript", "Tailwind CSS", "Bootstrap"];
    const backendSkills = ["Laravel", "PHP", "Node.js", "MySQL", "SQLServer", "Python"];

    const texts = {
    pt: {
      title:'Sobre mim',
      subtitle: 'Sou um jovem desenvolvedor estusiasta no mundo da programação e com um longo caminho a percorrer para alcançar meus objetivos. Minhas habilidades flutuam entre o front-end e o back-end,colocando-as em sinergia para criar aplicações e sistemas web. Minha vontade é de conseguir melhorar minhas capacidades ao maximo e me tornar o melhor de mim nos mais diversos aspectos.',
      formation: 'Formação',
      formation1: 'Pós Graduação em Desenvolvimento Full-Stack',
      formation2: 'Graduação em Sistemas da Informação',
      experience: 'Experiência',
      experience1: 'Assistente de Dados I - Vix Logística (2025 - Atual)',
      role: 'Desenvolvimento de sistemas para o auxílio e otimização dos processos dos funcionários da Vix Logística, e da Petrobras',
    },
    en: {
      title:'About Me',
      subtitle: 'I am a young and enthusiastic developer in the world of programming, with a long journey ahead to achieve my goals. My skills range from front-end to back-end, combining both in synergy to create web applications and systems. My goal is to continuously improve my abilities to the fullest and become the best version of myself in every possible way.',
      formation: 'Education',
      formation1: 'Postgraduate Certificate in Full-Stack Development',
      formation2: 'BSc in Information Systems ',
      experience: 'Experience',
      experience1: 'Data Assistant I - Vix Logística (2025 - Present)',
      role: 'Development of internal systems aimed at supporting and optimizing the operational workflows of employees at Vix Logística and Petrobras.',
    }
  }

  const { title, subtitle, formation, formation1, formation2, experience, experience1, role} = texts[language] || texts.pt

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">{title}</h2>
            <div className="glass rounded-xl p-8 border-white/10 border horver:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    {subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800/50 border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Front-End</h3>
                        <div className="flex flex-wrap gap-2">{frontendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))}</div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800/50 border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Back-End</h3>
                        <div className="flex flex-wrap gap-2">{backendSkills.map((tech, key) => (
                            <span key={key} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition-all">
                                {tech}
                            </span>
                        ))}</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">🎓 {formation}</h3>
                    <ul className="list-disc list-inside text-gray-300 space-x-2">
                        <li>
                            <strong> {formation1} </strong> - PUC RIO (2025 - 2026)
                        </li>
                        <li>
                            <strong> {formation2} </strong> - Uni São José (2021 - 2024)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">💼 {experience}</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold"> {experience1} </h4>
                            <p>
                                {role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}