import { useRef } from "react";
import GravityIcons from "../common/GravityTechIcons";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = ({ language }) => {

  const frontendSkills = ["ReactJS", "Vue.js", "JavaScript", "Tailwind CSS", "Bootstrap"];
  const backendSkills = ["Laravel", "PHP", "Docker", "MySQL", "SQLServer", "Python"];
  const gravityRef = useRef();
  
  const texts = {
    pt: {
      title:'Sobre mim',
      subtitle: 'Sou um jovem desenvolvedor estusiasta no mundo da programação e com um longo caminho a percorrer para alcançar meus objetivos. Minhas habilidades flutuam entre o front-end e o back-end, colocando-as em sinergia para criar aplicações e sistemas web. Minha vontade é de conseguir melhorar minhas capacidades ao maximo e me tornar o melhor de mim nos mais diversos aspectos. Atualmente cursando minha 2º pós graduação, dessa vez na PUC-RIO.',
      formationTitle: 'Formação',
      formation1: 'Pós Graduação em Desenvolvimento Full-Stack',
      formation2: 'Graduação em Sistemas da Informação',
      experienceTitle: 'Experiência',
      experience1: 'Assistente de Dados I - Vix Logística (2025 - 2026)',
      role: 'Desenvolvimento de sistemas para o auxílio e otimização dos processos dos funcionários da Vix Logística, e da Petrobras',
      courseTitle: 'Cursos',
      course1: 'Escola Técnica de Gwinnett (Curso de Inglês)',
      course2: 'Brasas English Course',
    },
    en: {
      title:'About Me',
      subtitle: 'I am a young and enthusiastic developer in the world of programming, with a long journey ahead to achieve my goals. My skills range from front-end to back-end, combining both in synergy to create web applications and systems. My goal is to continuously improve my abilities to the fullest and become the best version of myself in every possible way. Currently pursuing my second postgraduate degree, In PUC-RIO this time.',
      formationTitle: 'Education',
      formation1: 'Postgraduate Certificate in Full-Stack Development',
      formation2: 'BSc in Information Systems ',
      experienceTitle: 'Experience',
      experience1: 'Data Assistant I - Vix Logística (2025 - 2026)',
      role: 'Development of internal systems aimed at supporting and optimizing the operational workflows of employees at Vix Logística and Petrobras.',
      courseTitle: 'Courses',
      course1: 'Gwinnett Technical College (English Course)',
      course2: 'Brasas English Course',
    }
  }

  const languagesPt = [
    { name: "Português", level: 3 },
    { name: "Inglês",   level: 2 }
  ];
  const languagesEn = [
    { name: "Portuguese", level: 3 },
    { name: "English",    level: 2 }
  ];
  const maxLevel = 3;
  const { title, subtitle, formationTitle, formation1, formation2, experienceTitle, experience1, role, courseTitle, course1, course2} = texts[language] || texts.pt
  const levelsPt = ["Básico", "Intermediário", "Avançado", "Fluente"];
  const levelsEn = ["Basic", "Intermediate", "Advanced", "Fluent"];
  const languages = language === "en" ? languagesEn : languagesPt;
  const levels    = language === "en" ? levelsEn    : levelsPt;

  return (
    <>
      <GravityIcons ref={gravityRef} />
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
                        <div className="flex flex-wrap gap-2">      
                          {frontendSkills.map((tech, key) => (
                            <span
                              key={key}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 cursor-pointer select-none"
                              onClick={(e) => {
                                gravityRef.current?.spawn(tech === 'JavaScript' ? 'JS' : tech, e.clientX, e.clientY);
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800/50 border border-white/10">
                        <h3 className="text-xl font-bold mb-4">Back-End</h3>
                        <div className="flex flex-wrap gap-2">
                          {backendSkills.map((tech, key) => (
                            <span
                              key={key}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 cursor-pointer select-none"
                              onClick={(e) => {
                                gravityRef.current?.spawn(tech === 'JavaScript' ? 'JS' : tech, e.clientX, e.clientY);
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                  </div>
              </div>
              <div className="rounded-xl p-6 mt-8 border border-white/10">
                  <h3 className="text-xl font-bold mb-6">
                  {language === "en" ? "Languages" : "Idiomas"}
                  </h3>
                  <div className="space-y-8">
                  {languages.map(({ name, level }, idx) => (
                      <div key={idx} className="flex flex-col">
                          <span className="text-gray-300 font-semibold mb-3">{name}</span>
                          <div className="relative flex items-center justify-between px-2.5 h-5">
                              <div className="absolute top-1/2 h-1 bg-blue-500/10 rounded-full -translate-y-1/2"
                              style={{ left: 10, right: 20 }}/>
                              <div className="absolute top-1/2 h-1 bg-blue-500 rounded-full -translate-y-1/2"
                              style={{ width: `${(level / maxLevel) * 95}%` }}/>
                              {[...Array(maxLevel + 1)].map((_, i) => (
                              <div key={i} className="group relative flex items-center justify-center">
                                  <div className={`w-5 h-5 rounded-full border transition-transform
                                      ${i <= level ? "bg-blue-500 border-blue-400" : "bg-blue-500/10 border-white/20"}
                                      group-hover:scale-150`}/>
                                  <span className="absolute top-full mt-1 text-xs text-gray-300 opacity-0 group-hover:opacity-100 whitespace-nowrap">
                                  {levels[i]}
                                  </span>
                              </div>
                              ))}
                          </div>
                      </div>
                  ))}
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">🎓 {formationTitle}</h3>
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
                      <h3 className="text-xl font-bold mb-4">💼 {experienceTitle}</h3>
                      <div className="space-y-4 text-gray-300">
                          <div>
                              <h4 className="font-semibold"> {experience1} </h4>
                              <p>
                                  {role}
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                      <h3 className="text-xl font-bold mb-4">📚 {courseTitle}</h3>
                      <div className="space-y-4 text-gray-300">
                          <div>
                              <li>
                                  <strong> {course1} </strong> - (05/2024 - 08/2024)
                              </li>
                              <li>
                                  <strong> {course2} </strong> - (01/2023 - 04/2024)
                              </li>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}