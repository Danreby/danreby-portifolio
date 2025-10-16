import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import TechIcon from './icons/TechIcon';

const GRAVITY = 1800;
const RESTITUTION = 0.6;
const MAX_ICONS = 80;
const LIFETIME_MS = 10000;
const FADE_MS = 800;

function uid() { return Math.random().toString(36).slice(2, 9); }
function rand(min, max) { return Math.random() * (max - min) + min; }
function normalizeType(raw) { return raw || 'ReactJs'; }

const isTouchDevice = typeof window !== 'undefined' && (
  ('ontouchstart' in window) ||
  (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
  (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
);

function createShardsForIcon(icon, count = 8) {
  const shards = [];
  const cx = 50, cy = 50, radius = 80;
  const angleStep = (Math.PI * 2) / count;
  const base = rand(0, Math.PI * 2);
  for (let i = 0; i < count; i++) {
    const a1 = base + i * angleStep;
    const a2 = base + (i + 1) * angleStep;
    const p1x = cx + Math.cos(a1) * radius;
    const p1y = cy + Math.sin(a1) * radius;
    const p2x = cx + Math.cos(a2) * radius;
    const p2y = cy + Math.sin(a2) * radius;
    const dist = rand(30, 160) * (icon.size / 64);
    const angle = rand(a1, a2);
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    const rot = rand(-90, 90);
    const clip = `polygon(${cx}% ${cy}%, ${p1x}% ${p1y}%, ${p2x}% ${p2y}%)`;
    shards.push({ id: uid(), clipPath: clip, dx, dy, rot, delay: rand(0, FADE_MS * 0.2) });
  }
  return shards;
}

const GravityTechIcons = forwardRef(function GravityTechIcons(_, ref) {
  const [icons, setIcons] = useState([]);
  const rafRef = useRef(null);
  const lastRef = useRef(performance.now());
  const shardsTriggerRef = useRef(new Set());
  const timeoutsRef = useRef(new Map());

  useImperativeHandle(ref, () => ({
    spawn(type = 'ReactJs', pageX = window.innerWidth / 2, pageY = window.innerHeight / 4) {
      const t = normalizeType(type);
      setIcons(prev => {
        const newIcon = createIcon(t, pageX, pageY);
        if (prev.length >= MAX_ICONS) return prev.slice(1).concat(newIcon);
        return prev.concat(newIcon);
      });
    }
  }));

  function createIcon(type, pageX, pageY) {
    const size = Math.floor(36 + Math.random() * 48);
    return {
      id: uid(),
      type,
      x: Math.max(20, Math.min(window.innerWidth - 20, pageX)),
      y: Math.max(20, Math.min(window.innerHeight - 20, pageY)),
      vx: (Math.random() - 0.5) * 600,
      vy: -800 - Math.random() * 200,
      size,
      rot: (Math.random() - 0.5) * 30,
      grabbed: false,
      createdAt: performance.now(),
      fading: false,
      fadingAt: null,
      shards: null,
      shattered: false,
      simpleFade: false
    };
  }

  useEffect(() => {
    function loop(now) {
      const dt = Math.min(0.032, (now - lastRef.current) / 1000);
      lastRef.current = now;

      setIcons(prev => {
        if (!prev.length) return prev;
        const w = window.innerWidth, h = window.innerHeight;
        const nowMs = performance.now();

        const next = prev.map(ic => {
          if (ic.grabbed) {
            if (ic.fading && ic.simpleFade) {
              const tinfo = timeoutsRef.current.get(ic.id);
              if (tinfo) {
                tinfo.forEach(id => clearTimeout(id));
                timeoutsRef.current.delete(ic.id);
              }
              return { ...ic, fading: false, fadingAt: null, shards: null, shattered: false, simpleFade: false };
            }
            return ic;
          }

          let { x, y, vx, vy, size } = ic;
          vy += GRAVITY * dt;
          x += vx * dt;
          y += vy * dt;
          const r = size / 2;
          if (y + r > h) { y = h - r; vy = -vy * RESTITUTION; if (Math.abs(vy) < 50) vy = 0; vx *= 0.98; }
          if (x - r < 0) { x = r; vx = -vx * RESTITUTION; }
          if (x + r > w) { x = w - r; vx = -vx * RESTITUTION; }
          vx *= 0.999;
          const rot = ic.rot * 0.999;

          if (!ic.fading && (nowMs - (ic.createdAt || 0) >= LIFETIME_MS)) {
            if (isTouchDevice) {
              const fadingAt = nowMs;
              const t1 = setTimeout(() => {
                setIcons(prevIcons => prevIcons.map(p => p.id === ic.id ? { ...p, shattered: true } : p));
              }, 20);
              const t2 = setTimeout(() => {
                setIcons(prevIcons => prevIcons.filter(p => p.id !== ic.id));
                timeoutsRef.current.delete(ic.id);
              }, FADE_MS + 20);
              timeoutsRef.current.set(ic.id, [t1, t2]);
              return { ...ic, x, y, vx, vy, rot, fading: true, fadingAt, shards: null, shattered: false, simpleFade: true };
            } else {
              const shards = createShardsForIcon(ic, Math.floor(rand(6, 10)));
              return { ...ic, x, y, vx, vy, rot, fading: true, fadingAt: nowMs, shards, shattered: false, simpleFade: false };
            }
          }

          return { ...ic, x, y, vx, vy, rot };
        });

        return next.filter(ic => {
          if (!ic.fading) return true;
          if (ic.simpleFade) return true;
          const elapsed = nowMs - (ic.fadingAt || 0);
          return elapsed < (FADE_MS + 50);
        });
      });

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const needTrigger = icons.filter(ic => ic.fading && ic.shards && !ic.shattered && !shardsTriggerRef.current.has(ic.id));
    needTrigger.forEach(ic => {
      shardsTriggerRef.current.add(ic.id);
      setTimeout(() => {
        setIcons(prev => prev.map(p => p.id === ic.id ? { ...p, shattered: true } : p));
        setTimeout(() => {
          setIcons(prev => prev.filter(p => p.id !== ic.id));
          shardsTriggerRef.current.delete(ic.id);
        }, FADE_MS + 20);
      }, 20 + (ic.shards?.[0]?.delay ?? 0));
    });
  }, [icons]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((arr) => arr.forEach(id => clearTimeout(id)));
      timeoutsRef.current.clear();
    };
  }, []);

  function handlePointerDown(e, id) {
    e.stopPropagation();
    const pointerId = e.pointerId ?? 'mouse';
    const startX = e.clientX, startY = e.clientY;
    let lastX = startX, lastY = startY, lastT = performance.now();

    const tinfo = timeoutsRef.current.get(id);
    if (tinfo) { tinfo.forEach(t => clearTimeout(t)); timeoutsRef.current.delete(id); }

    setIcons(prev => prev.map(ic => ic.id === id ? ({
      ...ic,
      grabbed: true,
      pointerId,
      _offsetX: startX - ic.x,
      _offsetY: startY - ic.y,
      _lastVX: 0,
      _lastVY: 0,
      fading: false,
      fadingAt: null,
      shards: null,
      shattered: false,
      simpleFade: false
    }) : ic));

    function onPointerMove(ev) {
      ev.preventDefault();
      const now = performance.now();
      const dt = Math.max(0.001, (now - lastT) / 1000);
      const dx = ev.clientX - lastX, dy = ev.clientY - lastY;
      const vx = dx / dt, vy = dy / dt;
      lastX = ev.clientX; lastY = ev.clientY; lastT = now;

      setIcons(prev => prev.map(ic => ic.id === id ? ({
        ...ic,
        x: ev.clientX - ic._offsetX,
        y: ev.clientY - ic._offsetY,
        _lastVX: vx,
        _lastVY: vy
      }) : ic));
    }

    function onPointerUp(ev) {
      try { e.target.releasePointerCapture?.(pointerId); } catch {}
      setIcons(prev => prev.map(ic => {
        if (ic.id !== id) return ic;
        const vx = ic._lastVX ?? 0;
        const vy = ic._lastVY ?? 0;
        const cleaned = { ...ic, vx, vy, grabbed: false };
        delete cleaned._offsetX; delete cleaned._offsetY; delete cleaned._lastVX; delete cleaned._lastVY;
        return cleaned;
      }));
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    }

    try { (e.target).setPointerCapture?.(pointerId); } catch (_) {}
    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {icons.map(icon => (
        <div
          key={icon.id}
          onPointerDown={(e) => { handlePointerDown(e, icon.id); }}
          className="absolute rounded-full shadow-2xl will-change-transform pointer-events-auto"
          style={{
            left: icon.x + 'px',
            top: icon.y + 'px',
            width: icon.size + 'px',
            height: icon.size + 'px',
            transform: `translate(-50%, -50%) rotate(${icon.rot}deg)`,
            touchAction: 'none',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.06)',
            userSelect: 'none',
            overflow: 'visible'
          }}
        >
          {icon.simpleFade && (
            <div
              style={{
                width: '70%',
                height: '70%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                transition: `transform ${FADE_MS}ms ease, opacity ${FADE_MS}ms linear`,
                transform: icon.shattered ? 'scale(0.5) translateY(20px)' : 'scale(1)',
                opacity: icon.shattered ? 0 : 1
              }}
              className="select-none"
            >
              <TechIcon type={icon.type} size={Math.max(12, Math.floor(icon.size * 0.6))} />
            </div>
          )}

          {!icon.simpleFade && !icon.fading && (
            <div style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="select-none pointer-events-none">
              <TechIcon type={icon.type} size={Math.max(12, Math.floor(icon.size * 0.6))} />
            </div>
          )}

          {icon.shards && icon.fading && (
            <div style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              {icon.shards.map(shard => {
                const shattered = icon.shattered;
                const transform = shattered
                  ? `translate(${shard.dx}px, ${shard.dy}px) rotate(${shard.rot}deg) scale(0.6)`
                  : `translate(0px, 0px) rotate(0deg) scale(1)`;
                const opacity = shattered ? 0 : 1;
                const transition = `transform ${FADE_MS}ms cubic-bezier(.2,.8,.2,1) ${shard.delay}ms, opacity ${FADE_MS}ms linear ${shard.delay}ms`;
                return (
                  <div
                    key={shard.id}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      clipPath: shard.clipPath,
                      WebkitClipPath: shard.clipPath,
                      transform,
                      opacity,
                      transition,
                      willChange: 'transform, opacity',
                    }}
                  >
                    <div style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="select-none pointer-events-none">
                      <TechIcon type={icon.type} size={Math.max(12, Math.floor(icon.size * 0.6))} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

export default GravityTechIcons;
