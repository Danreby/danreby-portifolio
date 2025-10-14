import React, { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, className = "", keepInteractive = false }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (keepInteractive) {
      el.classList.add("keep-interactive");
    }

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          el.classList.remove("blurred");
          return;
        }

        const isAbove = entry.boundingClientRect.top < 0;

        if (isAbove) {
          el.classList.add("blurred");
        } else {
          el.classList.remove("blurred");
          // el.classList.remove("visible");
        }
      },
      { threshold: [0, 0.2], rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [keepInteractive]);

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      <div className="reveal-inner">
        {children}
      </div>
    </div>
  );
};

export default RevealOnScroll;
