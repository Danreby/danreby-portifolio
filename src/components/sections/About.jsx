import { useRef } from "react";
import GravityIcons from "../common/GravityTechIcons";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTranslations } from "../../i18n/useTranslations";

export const About = ({ language }) => {

  const frontendSkills = ["ReactJS", "Vue.js", "JavaScript", "Tailwind CSS", "Bootstrap"];
  const backendSkills = ["Laravel", "PHP", "Docker", "MySQL", "SQLServer", "Python"];
  const gravityRef = useRef();
  const { t } = useTranslations(language);
  const aboutTexts = t("about");
  const {
    title,
    subtitle,
    formationTitle,
    formation1,
    formation2,
    experienceTitle,
    experiences = [],
    courseTitle,
    course1,
    course2,
    languages: languageLevels = [],
    levels = [],
  } = aboutTexts;
  const maxLevel = 3;
  const languages = languageLevels;

  return (
    <>
      <GravityIcons ref={gravityRef} />
      <section id="about" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">

        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-blue-500/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <RevealOnScroll>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">
                {title}
              </h2>
              <div className="glow-divider" />
            </div>

            <div className="glass-card rounded-2xl p-7 mb-5">
              <p className="text-gray-300 leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { heading: 'Front-End', skills: frontendSkills },
                { heading: 'Back-End', skills: backendSkills },
              ].map(({ heading, skills }) => (
                <div key={heading} className="glass-card rounded-2xl p-6">
                  <h3 className="text-base font-bold mb-4 text-gray-200 tracking-wide">{heading}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer select-none"
                        onClick={(e) => {
                          gravityRef.current?.spawn(tech === 'JavaScript' ? 'JS' : tech, e.clientX, e.clientY);
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-6 mb-5">
              <h3 className="text-base font-bold mb-6 text-gray-200 tracking-wide">
                {language === "en" ? "Languages" : "Idiomas"}
              </h3>
              <div className="space-y-7">
                {languages.map(({ name, level }, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    <span className="text-gray-300 font-semibold text-sm">{name}</span>
                    <div className="relative flex items-center justify-between px-2.5 h-5">
                      <div
                        className="absolute top-1/2 h-1 bg-white/5 rounded-full -translate-y-1/2"
                        style={{ left: 10, right: 20 }}
                      />
                      <div
                        className="absolute top-1/2 h-1 rounded-full -translate-y-1/2"
                        style={{
                          width: `${(level / maxLevel) * 95}%`,
                          background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
                          boxShadow: '0 0 8px rgba(59,130,246,0.5)'
                        }}
                      />
                      {[...Array(maxLevel + 1)].map((_, i) => (
                        <div key={i} className="group relative flex items-center justify-center z-10">
                          <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200
                            ${i <= level
                              ? "bg-blue-600 border-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.35)]"
                              : "bg-white/5 border-white/20"
                            } group-hover:scale-125`}
                          />
                          <span className="absolute top-full mt-2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity pointer-events-none">
                            {levels[i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="glass-card rounded-2xl p-6 md:col-span-2">
                <h3 className="text-base font-bold mb-5 text-gray-200 tracking-wide flex items-center gap-2">
                  <span>💼</span> {experienceTitle}
                </h3>
                <div className="space-y-5">
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="timeline-item">
                      <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                      {exp.role && <p className="text-gray-400 text-sm mt-1 leading-relaxed">{exp.role}</p>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold mb-5 text-gray-200 tracking-wide flex items-center gap-2">
                  <span>🎓</span> {formationTitle}
                </h3>
                <div className="space-y-5">
                  <div className="timeline-item">
                    <p className="font-semibold text-white text-sm">{formation1}</p>
                    <p className="text-gray-500 text-xs mt-0.5">PUC RIO · 2025–2026</p>
                  </div>
                  <div className="timeline-item">
                    <p className="font-semibold text-white text-sm">{formation2}</p>
                    <p className="text-gray-500 text-xs mt-0.5">Uni São José · 2021–2024</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-base font-bold mb-5 text-gray-200 tracking-wide flex items-center gap-2">
                  <span>📚</span> {courseTitle}
                </h3>
                <div className="space-y-5">
                  <div className="timeline-item">
                    <p className="font-semibold text-white text-sm">{course1}</p>
                    <p className="text-gray-500 text-xs mt-0.5">05/2024 – 08/2024</p>
                  </div>
                  <div className="timeline-item">
                    <p className="font-semibold text-white text-sm">{course2}</p>
                    <p className="text-gray-500 text-xs mt-0.5">01/2023 – 04/2024</p>
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