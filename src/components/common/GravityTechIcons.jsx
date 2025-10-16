import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import TechIcon from './icons/TechIcon';

const GRAVITY = 1800;
const RESTITUTION = 0.6;
const MAX_ICONS = 80;
const LIFETIME_MS = 10000;
const FADE_MS = 600;

function uid() { return Math.random().toString(36).slice(2, 9); }

function normalizeType(raw) {
  return raw || 'ReactJs';
}

const GravityTechIcons = forwardRef(function GravityTechIcons(_, ref) {
  const [icons, setIcons] = useState([]);
  const rafRef = useRef(null);
  const lastRef = useRef(performance.now());

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
      fadingAt: null
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
            if (ic.fading) {
              return { ...ic, fading: false, fadingAt: null };
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
            return { ...ic, x, y, vx, vy, rot, fading: true, fadingAt: nowMs };
          }

          return { ...ic, x, y, vx, vy, rot };
        });

        return next.filter(ic => !(ic.fading && (nowMs - (ic.fadingAt || 0) >= FADE_MS)));
      });

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function handlePointerDown(e, id) {
    e.stopPropagation();
    const pointerId = e.pointerId ?? 'mouse';
    const startX = e.clientX, startY = e.clientY;
    let lastX = startX, lastY = startY, lastT = performance.now();

    setIcons(prev => prev.map(ic => ic.id === id ? ({
      ...ic,
      grabbed: true,
      pointerId,
      _offsetX: startX - ic.x,
      _offsetY: startY - ic.y,
      _lastVX: 0,
      _lastVY: 0,
      fading: false,
      fadingAt: null
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
            transform: `translate(-50%, -50%) rotate(${icon.rot}deg) scale(${icon.fading ? 0.75 : 1})`,
            touchAction: 'none',
            background: 'rgba(255,255,255,0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.06)',
            userSelect: 'none',
            opacity: icon.fading ? 0 : 1,
            transition: `opacity ${FADE_MS}ms linear, transform ${FADE_MS}ms linear`
          }}
        >
          <div style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="select-none pointer-events-none">
            <TechIcon type={icon.type} size={Math.max(12, Math.floor(icon.size * 0.6))} />
          </div>
        </div>
      ))}
    </div>
  );
});

export default GravityTechIcons;
