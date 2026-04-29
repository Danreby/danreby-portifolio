import { useEffect, useState, useRef } from "react";

export const Overview = ({ isOpen, onClose, project }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [current, setCurrent] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [direction, setDirection] = useState("next");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    if (!isOpen) {
      setCurrent(0);
      setAnimating(false);
      setSlideIn(false);
    }
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  if (!showModal || !project) return null;

  const total = project.images.length;

  const changeSlide = (newIndex, dir) => {
    if (animating) return;
    setNextIndex(newIndex);
    setDirection(dir);
    setAnimating(true);
    setSlideIn(false);
    setTimeout(() => setSlideIn(true), 20);
  };

  const prev = () => changeSlide((current - 1 + total) % total, "prev");
  const next = () => changeSlide((current + 1) % total, "next");

  const handleTransitionEnd = () => {
    clearTimeout(timeoutRef.current);
    setCurrent(nextIndex);
    setAnimating(false);
    setSlideIn(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-in-out px-4 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <div
        className={`relative rounded-2xl p-6 max-w-3xl w-full transform transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{
          background: 'rgba(10,10,16,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 25px 80px rgba(0,0,0,0.7), 0 0 40px rgba(59,130,246,0.05)',
          backdropFilter: 'blur(24px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-xl font-bold mb-5 text-white text-center pr-8">
          {project.title}
        </h3>

        <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-xl bg-black/30">
          {animating && (
            <div
              className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${
                slideIn
                  ? direction === "next"
                    ? "-translate-x-full"
                    : "translate-x-full"
                  : "translate-x-0"
              }`}
            >
              <img
                src={project.images[current]}
                alt={`${project.title} ${current + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {animating && (
            <div
              className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${
                slideIn
                  ? "translate-x-0"
                  : direction === "next"
                  ? "translate-x-full"
                  : "-translate-x-full"
              }`}
              onTransitionEnd={handleTransitionEnd}
            >
              <img
                src={project.images[nextIndex]}
                alt={`${project.title} ${nextIndex + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {!animating && (
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={project.images[current]}
                alt={`${project.title} ${current + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 border border-white/10 rounded-full text-white hover:bg-black/80 transition-all text-lg leading-none"
          >‹</button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/60 border border-white/10 rounded-full text-white hover:bg-black/80 transition-all text-lg leading-none"
          >›</button>
        </div>

        <div className="mt-4 flex justify-center gap-1.5">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-2 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.7)]"
                  : "w-2 h-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
