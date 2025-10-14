import React, { useRef, useEffect } from "react";

export default function SnakeLinesBackground({
  minCount = 2,
  maxCount = 8,
  speedRange = [40, 260],
  minLen = 40,    
  maxLen = 140,
  baseLineWidthRange = [1.2, 2.4],
  zigAmpBase = 16,
  zigFreqRange = [0.6, 1.6],
  burstChance = 0.12,
  burstAmp = 2.2,
  burstDurationRange = [0.22, 1.0],
  edgeMargin = 110,
  decaySpeed = 300,
  colorPalette = ["80,200,255", "200,120,255", "180,255,200", "255,220,160"],
  lineOpacityBase = 0.28,
  spawnInterval = 2200,
}) {
  const canvasRef = useRef(null);
  const snakesRef = useRef([]);
  const rafRef = useRef(null);
  const lastSpawnCheckRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const c = canvasRef.current;
      if (c) c.style.display = "none";
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const rand = (a, b) => a + Math.random() * (b - a);
    const choose = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    function makeSnake(spawnOnEdge = false) {
      const color = choose(colorPalette);
      const life = Math.floor(rand(minLen, maxLen));
      const speed = rand(speedRange[0], speedRange[1]);
      const baseWidth = rand(baseLineWidthRange[0], baseLineWidthRange[1]);

      const s = {
        x: Math.random() * w,
        y: Math.random() * h,
        angle: Math.random() * Math.PI * 2,
        speed,
        points: [],
        lifeTarget: life,
        initialLife: life,
        baseWidth,
        zigFreq: rand(zigFreqRange[0], zigFreqRange[1]),
        zigPhase: Math.random() * Math.PI * 2,
        zigAmp: zigAmpBase * (0.6 + Math.random() * 1.4),
        color,
        dying: false,
        vx: 0,
        vy: 0,
        inBurst: false,
        burstEndAt: 0,
        burstAmpFactor: 1,
        lastPushX: null,
        lastPushY: null,
      };

      if (spawnOnEdge) {
        const side = Math.floor(Math.random() * 4);
        if (side === 0) { s.x = -40; s.y = Math.random() * h; s.angle = rand(-0.6, 0.6); }
        if (side === 1) { s.x = w + 40; s.y = Math.random() * h; s.angle = Math.PI + rand(-0.6, 0.6); }
        if (side === 2) { s.y = -40; s.x = Math.random() * w; s.angle = Math.PI / 2 + rand(-0.6, 0.6); }
        if (side === 3) { s.y = h + 40; s.x = Math.random() * w; s.angle = -Math.PI / 2 + rand(-0.6, 0.6); }
      }

      return s;
    }

    function initSnakes() {
      snakesRef.current = [];
      const initial = Math.floor(rand(minCount, maxCount + 0.999));
      for (let i = 0; i < initial; i++) {
        const spawnOnEdge = Math.random() < 0.45;
        snakesRef.current.push(makeSnake(spawnOnEdge));
      }
    }
    initSnakes();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      snakesRef.current.forEach((s) => {
        s.x = Math.random() * w;
        s.y = Math.random() * h;
        s.points = [];
        s.lastPushX = null;
        s.lastPushY = null;
      });
    };
    window.addEventListener("resize", onResize);

    function maybeAdjustPopulation(now) {
      if (now - lastSpawnCheckRef.current < spawnInterval) return;
      lastSpawnCheckRef.current = now;
      const cur = snakesRef.current.length;
      if (cur < minCount) {
        const toSpawn = minCount - cur;
        for (let i = 0; i < toSpawn; i++) snakesRef.current.push(makeSnake(true));
      } else if (cur > maxCount) {
        const toRemove = cur - maxCount;
        for (let i = 0; i < toRemove; i++) {
          const idx = Math.floor(Math.random() * snakesRef.current.length);
          snakesRef.current.splice(idx, 1);
        }
      } else {
        if (Math.random() < 0.14) {
          const idx = Math.floor(Math.random() * snakesRef.current.length);
          snakesRef.current.splice(idx, 1, makeSnake(true));
        }
      }
    }

    function maybeTriggerBurst(s, nowSec) {
      if (s.inBurst) {
        if (nowSec >= s.burstEndAt) {
          s.inBurst = false;
          s.burstAmpFactor = 1;
        }
        return;
      }
      if (Math.random() < burstChance * (1 / 60)) {
        s.inBurst = true;
        s.burstAmpFactor = rand(1.2, burstAmp);
        s.burstEndAt = nowSec + rand(burstDurationRange[0], burstDurationRange[1]);
      }
    }

    function frame(now) {
      const tSec = now / 1000;
      const last = lastTimeRef.current;
      let dt = (now - last) / 1000;
      if (!isFinite(dt) || dt <= 0) dt = 1 / 60;
      lastTimeRef.current = now;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      maybeAdjustPopulation(now);

      snakesRef.current.forEach((s, idx) => {
        maybeTriggerBurst(s, tSec);

        s.angle += (Math.random() - 0.5) * 0.006;

        const fx = Math.cos(s.angle);
        const fy = Math.sin(s.angle);
        const px = -fy;
        const py = fx;

        const localAmp = s.zigAmp * (s.inBurst ? s.burstAmpFactor : 1);
        const lateral = Math.sin(tSec * s.zigFreq + s.zigPhase) * localAmp;

        const desiredVx = fx * s.speed + px * lateral;
        const desiredVy = fy * s.speed + py * lateral;

        s.vx = lerp(s.vx, desiredVx, 0.12);
        s.vy = lerp(s.vy, desiredVy, 0.12);

        s.x += s.vx * dt;
        s.y += s.vy * dt;

        if (!s.dying && (s.x < -edgeMargin || s.x > w + edgeMargin || s.y < -edgeMargin || s.y > h + edgeMargin)) {
          s.dying = true;
        }

        if (s.dying) {
          s.lifeTarget = Math.max(0, s.lifeTarget - decaySpeed * dt);
        } else {
          s.lifeTarget = lerp(s.lifeTarget, s.initialLife, 0.08);
        }

        const minDist = 0.6 + s.baseWidth * 0.12;
        if (s.lastPushX === null || Math.hypot(s.x - s.lastPushX, s.y - s.lastPushY) > minDist) {
          s.points.push({ x: s.x, y: s.y });
          s.lastPushX = s.x;
          s.lastPushY = s.y;
        }

        const lifeInt = Math.max(2, Math.floor(s.lifeTarget));
        if (s.points.length > lifeInt) {
          s.points.splice(0, s.points.length - lifeInt);
        }

        if (s.dying && s.lifeTarget <= 2) {
          snakesRef.current[idx] = makeSnake(true);
          return;
        }

        if (s.points.length > 1) {
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          const dyingFactor = s.dying ? clamp(s.lifeTarget / Math.max(1, s.initialLife), 0, 1) : 1;

          for (let i = 0; i < s.points.length - 1; i++) {
            const p = s.points[i];
            const q = s.points[i + 1];
            const tNorm = i / Math.max(1, s.points.length - 1);
            const headFactor = tNorm;

            const segWidth = s.baseWidth * (0.5 + headFactor * 1.1);

            const alphaSeg = (0.04 + headFactor * 0.46) * lineOpacityBase * dyingFactor;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${s.color},${alphaSeg.toFixed(3)})`;
            ctx.lineWidth = Math.max(0.4, segWidth);
            ctx.stroke();
          }

          const headIdx = s.points.length - 2;
          if (headIdx >= 0) {
            const hp = s.points[headIdx];
            const hq = s.points[headIdx + 1];
            ctx.beginPath();
            ctx.moveTo(hp.x, hp.y);
            ctx.lineTo(hq.x, hq.y);
            const headAlpha = Math.min(0.6, 0.22 * dyingFactor * lineOpacityBase);
            ctx.strokeStyle = `rgba(${s.color},${headAlpha.toFixed(3)})`;
            ctx.lineWidth = Math.max(0.8, s.baseWidth * 1.0);
            ctx.stroke();
          }
        }
      });

      rafRef.current = requestAnimationFrame(frame);
    }

    rafRef.current = requestAnimationFrame((t) => {
      lastTimeRef.current = t;
      frame(t);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [
    minCount,
    maxCount,
    speedRange,
    minLen,
    maxLen,
    baseLineWidthRange,
    zigAmpBase,
    zigFreqRange,
    burstChance,
    burstAmp,
    burstDurationRange,
    edgeMargin,
    decaySpeed,
    colorPalette,
    lineOpacityBase,
    spawnInterval,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
      aria-hidden
    />
  );
}
