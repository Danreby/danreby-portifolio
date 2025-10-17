import React, { useRef, useState, useEffect } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import '../../index.css';

export const FindMe = ({ language }) => {
  const socials = [
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>
      ),
      url: 'https://github.com/Danreby',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
        </svg>
      ),
      url: 'https://linkedin.com/in/bernardo-rolim-aa6802213',
    },
    {
      name: 'Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      ),
      url: 'https://twitter.com/MURINGOLA',
    },
    {
      name: 'Instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
        </svg>
      ),
      url: 'https://instagram.com/neydo.rar',
    },
  ];

  const texts = {
    pt: { title: 'Encontre-me nas redes' },
    en: { title: 'Find me on the webs' },
  };
  const { title } = texts[language] || texts.pt;

  const [rot, setRot] = useState({ x: -10, y: 20 });
  const startRef = useRef({ x: 0, y: 0, rotX: 0, rotY: 0, dragging: false, moved: false, pointerId: null });
  const sceneRef = useRef(null);

  const clickAllowedRef = useRef(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setRot(r => ({ ...r, y: r.y - 45 }));
      if (e.key === 'ArrowRight') setRot(r => ({ ...r, y: r.y + 45 }));
      if (e.key === 'ArrowUp') setRot(r => ({ ...r, x: Math.max(-60, r.x - 10) }));
      if (e.key === 'ArrowDown') setRot(r => ({ ...r, x: Math.min(60, r.x + 10) }));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onPointerDown = (e) => {
    const p = (e.touches && e.touches[0]) || e;
    startRef.current = {
      x: p.clientX,
      y: p.clientY,
      rotX: rot.x,
      rotY: rot.y,
      dragging: true,
      moved: false,
      pointerId: e.pointerId ?? (e.touches ? 'touch' : null),
    };
    try {
      if (e.pointerId && sceneRef.current?.setPointerCapture) sceneRef.current.setPointerCapture(e.pointerId);
    } catch (err) { }
  };

  const onPointerMove = (e) => {
    if (!startRef.current.dragging) return;
    const p = (e.touches && e.touches[0]) || e;
    const dx = p.clientX - startRef.current.x;
    const dy = p.clientY - startRef.current.y;

    const threshold = 6;
    if (Math.abs(dx) > threshold || Math.abs(dy) > threshold) startRef.current.moved = true;

    const newY = startRef.current.rotY + dx * 0.3;
    const newX = Math.max(-60, Math.min(60, startRef.current.rotX - dy * 0.18));
    setRot({ x: newX, y: newY });
  };

  const onPointerUp = (e) => {
    startRef.current.dragging = false;
    try {
      if (e && e.pointerId && sceneRef.current?.releasePointerCapture) sceneRef.current.releasePointerCapture(e.pointerId);
    } catch (err) {  }

    const moved = startRef.current.moved;
    setTimeout(() => { startRef.current.moved = false; }, 60);

    clickAllowedRef.current = false;
  };

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleIconClick = (e, url) => {
    e.stopPropagation();

    if (!clickAllowedRef.current) return;
    if (startRef.current.moved) return;

    openLink(url);

    clickAllowedRef.current = false;
  };

  const handleIconKey = (e, url) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (startRef.current.moved) return;
      openLink(url);
    }
  };

  const size = 220;
  const half = size / 2;

  return (
    <section id="find-me" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div 
          // className="relative p-8 rounded-lg findme-led-border mx-auto w-11/12 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {title}
          </h2>

          <div
            ref={sceneRef}
            className="mx-auto mt-6"
            style={{ width: `${size}px`, height: `${size}px`, touchAction: 'none' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onTouchStart={onPointerDown}
            onTouchMove={onPointerMove}
            onTouchEnd={onPointerUp}
            aria-label="3D social cube"
          >
            <div className="scene" style={{ perspective: '900px' }}>
              <div
                className="cube relative mx-auto"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                  transition: startRef.current.dragging ? 'none' : 'transform 500ms cubic-bezier(.2,.9,.2,1)',
                }}
              >
                {socials.map((s, i) => {
                  const rotY = i * 90;
                  return (
                    <div
                      key={s.name}
                      className={`face face-${i} absolute inset-0 flex items-center justify-center rounded-lg shadow-lg`}
                      style={{
                        transform: `rotateY(${rotY}deg) translateZ(${half}px)`,
                        width: `${size}px`,
                        height: `${size}px`,
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center" role="group" aria-hidden="false">
                        <button
                          type="button"
                          onPointerDown={(ev) => { ev.stopPropagation(); clickAllowedRef.current = true; }}
                          onTouchStart={(ev) => { ev.stopPropagation(); clickAllowedRef.current = true; }}
                          onPointerUp={(ev) => { ev.stopPropagation(); }}
                          onClick={(ev) => handleIconClick(ev, s.url)}
                          onKeyDown={(ev) => handleIconKey(ev, s.url)}
                          aria-label={s.name}
                          className="p-2 rounded-full focus:outline-none group"
                        >
                          <div className="transform transition-transform duration-200 group-hover:scale-110">
                            {s.icon}
                          </div>
                        </button>

                        <span className="mt-3 text-sm opacity-90 font-medium pointer-events-none">{s.name}</span>
                      </div>
                    </div>
                  );
                })}

                <div
                  className="face-top absolute inset-0"
                  style={{ transform: `rotateX(90deg) translateZ(${half}px)`, width: `${size}px`, height: `${size}px`, pointerEvents: 'none' }}
                />
                <div
                  className="face-bottom absolute inset-0"
                  style={{ transform: `rotateX(-90deg) translateZ(${half}px)`, width: `${size}px`, height: `${size}px`, pointerEvents: 'none' }}
                />
              </div>
            </div>
          </div>

          <style>{`
            .scene { display: block }
            .cube { margin: 0 auto; position: relative }
            .cube .face { backface-visibility: hidden; box-sizing: border-box; user-select: none; overflow: hidden; }
            .cube .face-0 { background: linear-gradient(135deg, rgba(59,130,246,0.10), rgba(99,102,241,0.06)); }
            .cube .face-1 { background: linear-gradient(135deg, rgba(14,165,233,0.10), rgba(56,189,248,0.05)); }
            .cube .face-2 { background: linear-gradient(135deg, rgba(99,102,241,0.10), rgba(139,92,246,0.05)); }
            .cube .face-3 { background: linear-gradient(135deg, rgba(168,85,247,0.10), rgba(236,72,153,0.05)); }

            .cube button { background: rgba(255,255,255,0.03); border: none; cursor: pointer; }
            .cube button:focus { outline: 3px solid rgba(99,102,241,0.22); outline-offset: 4px; border-radius: 999px; }
            .cube svg { color: white; width: 2.25rem; height: 2.25rem; }

            /* cursor durante arraste */
            .cube .face:active { cursor: grabbing; }
            @media (max-width: 640px) { .cube { transform-origin: center } }
          `}</style>
        </div>
      </RevealOnScroll>
    </section>
  );
};