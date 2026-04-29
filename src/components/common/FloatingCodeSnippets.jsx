import { useEffect, useRef } from 'react';

const snippets = [
  { text: 'git commit -m "v2.0"',   color: 'blue',   topFrac: 0.08, left: '7%',  dur: 60, delay: 0,  hideOnMobile: false, speed: 0.12 },
  { text: 'const skills = [...]',    color: 'purple', topFrac: 0.18, left: '79%', dur: 72, delay: 9,  hideOnMobile: true,  speed: 0.26 },
  { text: '<Developer />',           color: 'cyan',   topFrac: 0.62, left: '13%', dur: 52, delay: 17, hideOnMobile: false, speed: 0.18 },
  { text: 'npm run dev',             color: 'green',  topFrac: 0.50, left: '75%', dur: 78, delay: 4,  hideOnMobile: true,  speed: 0.08 },
  { text: 'docker compose up',       color: 'orange', topFrac: 0.30, left: '43%', dur: 64, delay: 23, hideOnMobile: false, speed: 0.32 },
  { text: 'return <UI />',           color: 'pink',   topFrac: 0.75, left: '57%', dur: 57, delay: 13, hideOnMobile: false, speed: 0.14 },
  { text: 'git push origin main',    color: 'blue',   topFrac: 0.42, left: '88%', dur: 68, delay: 30, hideOnMobile: true,  speed: 0.22 },
  { text: 'SELECT * FROM projects',  color: 'cyan',   topFrac: 0.88, left: '2%',  dur: 82, delay: 7,  hideOnMobile: false, speed: 0.10 },
];

const allEntries = snippets.flatMap((s, si) => [
  { ...s, entryId: si * 2,     topFrac: s.topFrac },
  { ...s, entryId: si * 2 + 1, topFrac: s.topFrac + 0.5 },
]);

const colorMap = {
  blue:   ['rgba(96,165,250,0.12)',  'rgba(59,130,246,0.02)',  'rgba(59,130,246,0.05)'  ],
  purple: ['rgba(167,139,250,0.12)', 'rgba(139,92,246,0.02)',  'rgba(139,92,246,0.05)'  ],
  cyan:   ['rgba(103,232,249,0.12)', 'rgba(6,182,212,0.02)',   'rgba(6,182,212,0.05)'   ],
  green:  ['rgba(74,222,128,0.11)',  'rgba(34,197,94,0.02)',   'rgba(34,197,94,0.04)'   ],
  orange: ['rgba(251,146,60,0.11)',  'rgba(249,115,22,0.02)',  'rgba(249,115,22,0.04)'  ],
  pink:   ['rgba(240,171,252,0.11)', 'rgba(217,70,239,0.02)',  'rgba(217,70,239,0.04)'  ],
};

const driftAnims = ['code-drift-a', 'code-drift-b', 'code-drift-c', 'code-drift-d'];

const BUFFER = 80;

export const FloatingCodeSnippets = () => {
  const outerRefs  = useRef([]);
  const animY      = useRef(allEntries.map(() => 0));
  const targetY    = useRef(allEntries.map(() => 0));
  const loopOffset = useRef(allEntries.map(() => 0));
  const rafId      = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      allEntries.forEach((s, i) => {
        targetY.current[i] = -window.scrollY * s.speed;
      });
    };

    const tick = () => {
      const vh = window.innerHeight;
      const loopStep = vh;

      allEntries.forEach((s, i) => {
        const cur  = animY.current[i];
        const next = cur + (targetY.current[i] - cur) * 0.045;
        animY.current[i] = next;

        const baseY   = s.topFrac * vh;
        const visualY = baseY + loopOffset.current[i] + next;

        if (visualY < -BUFFER) {
          loopOffset.current[i] += loopStep;
        } else if (visualY > vh + BUFFER) {
          loopOffset.current[i] -= loopStep;
        }

        const finalY = baseY + loopOffset.current[i] + next;
        const el = outerRefs.current[i];
        if (el) el.style.transform = `translateY(${finalY.toFixed(2)}px)`;
      });

      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {allEntries.map((s, i) => {
        const [textColor, bgColor, borderColor] = colorMap[s.color] || colorMap.blue;
        const anim = driftAnims[s.entryId % driftAnims.length];
        return (
          <div
            key={i}
            ref={el => { outerRefs.current[i] = el; }}
            className={`absolute ${s.hideOnMobile ? 'hidden md:block' : 'block'}`}
            style={{ top: 0, left: s.left }}
          >
            <div
              className="font-mono text-xs px-3 py-2 rounded-lg backdrop-blur-sm select-none"
              style={{
                color: textColor,
                background: bgColor,
                border: `1px solid ${borderColor}`,
                animationName: anim,
                animationDuration: `${s.dur}s`,
                animationDelay: `-${s.delay}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDirection: 'alternate',
              }}
            >
              {s.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};
