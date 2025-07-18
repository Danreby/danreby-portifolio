import { useEffect, useState, useRef } from "react";

export const Overview = ({ isOpen, onClose, project }) => {
  const [showModal, setShowModal] = useState(isOpen);
  const [current, setCurrent] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [direction, setDirection] = useState("next");
  const timeoutRef = useRef(null);

  // Handle fade-in and fade-out timing
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      // Wait for fade-out before unmounting
      const timer = setTimeout(() => setShowModal(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent body scroll
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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-500 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-gray-950 rounded-2xl p-6 max-w-[820px] w-full transform transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-6 text-white text-center">
          {project.title}
        </h3>

        <div className="relative w-full h-96 overflow-hidden">
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
            className="absolute -left-1 top-1/2 transform -translate-y-1/2 ml-2 p-2 bg-gray-800/60 rounded-full hover:bg-gray-800/80 transition"
          >‹</button>
          <button
            onClick={next}
            className="absolute -right-1 top-1/2 transform -translate-y-1/2 mr-2 p-2 bg-gray-800/60 rounded-full hover:bg-gray-800/80 transition"
          >›</button>
        </div>

        <div className="text-center mt-6">
          texts
        </div>

        <div className="mt-4 flex justify-center space-x-2">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? "bg-blue-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
