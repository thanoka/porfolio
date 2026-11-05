import { useEffect, useRef } from 'react';

// The full-page variant stays transparent so every section shares the same rain.
export default function RainScene({ paused = false, variant = 'panel', theme = 'light' }) {
  const canvasRef = useRef(null);
  const settingsRef = useRef({ paused, theme });
  const restartRef = useRef(null);

  useEffect(() => {
    settingsRef.current = { paused, theme };
    restartRef.current?.();
  }, [paused, theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    const background = variant === 'background';
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let frame;
    let previous = 0;
    let elapsed = 0;
    let visible = true;
    let drops = [];
    let ripples = [];
    let pointerTime = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, background ? 1.5 : 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = background ? Math.min(160, Math.round(width / 8)) : Math.round(width / 5);
      drops = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 180 + Math.random() * 320,
        length: 12 + Math.random() * 38,
        opacity: 0.06 + Math.random() * (background ? 0.12 : 0.2),
      }));
    };

    const draw = (time) => {
      const delta = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
      previous = time;
      const { paused: isPaused, theme: currentTheme } = settingsRef.current;
      const animate = !isPaused && !motionPreference.matches && visible && !document.hidden;
      const ink = !background || currentTheme === 'dark' ? '235,235,235' : '30,30,30';
      if (animate) elapsed += delta;
      context.clearRect(0, 0, width, height);

      if (!background) {
        const glow = context.createRadialGradient(width * 0.52, height * 0.4, 0, width * 0.52, height * 0.4, width * 0.75);
        glow.addColorStop(0, '#2b2b2b');
        glow.addColorStop(0.55, '#161616');
        glow.addColorStop(1, '#0a0a0a');
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      for (const drop of drops) {
        if (animate) {
          drop.y += drop.speed * delta;
          drop.x -= delta * 22;
        }
        if (drop.y > height + 50 || drop.x < -50) {
          drop.y = -50;
          drop.x = Math.random() * width;
        }
        context.beginPath();
        context.moveTo(drop.x, drop.y);
        context.lineTo(drop.x - drop.length * 0.07, drop.y + drop.length);
        context.strokeStyle = `rgba(${ink},${drop.opacity})`;
        context.lineWidth = background ? 1 : 0.7;
        context.stroke();
      }

      const ringCount = background ? 4 : 9;
      for (let index = 0; index < ringCount; index++) {
        const progress = (elapsed * 0.13 + index / ringCount) % 1;
        const radius = 12 + progress * width * (background ? 0.25 : 0.7);
        const x = background ? width * ((index + 0.5) / ringCount) : width * 0.52;
        const y = background ? height * (0.3 + (index % 3) * 0.26) : height * 0.6;
        context.beginPath();
        context.ellipse(x, y, radius, radius * 0.28, -0.08, 0, Math.PI * 2);
        context.strokeStyle = `rgba(${ink},${(1 - progress) * (background ? 0.11 : 0.21)})`;
        context.lineWidth = 0.7;
        context.stroke();
      }

      ripples = ripples.filter((ripple) => ripple.age < 2);
      for (const ripple of ripples) {
        if (animate) ripple.age += delta;
        context.beginPath();
        context.ellipse(ripple.x, ripple.y, 8 + ripple.age * 90, 3 + ripple.age * 26, -0.08, 0, Math.PI * 2);
        context.strokeStyle = `rgba(${ink},${(background ? 0.14 : 0.35) * (1 - ripple.age / 2)})`;
        context.stroke();
      }
      if (animate) frame = requestAnimationFrame(draw);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      frame = requestAnimationFrame(draw);
    };
    restartRef.current = start;

    const onPointer = (event) => {
      if (settingsRef.current.paused || motionPreference.matches || document.hidden) return;
      const now = performance.now();
      if (now - pointerTime < (background ? 240 : 140)) return;
      pointerTime = now;
      const bounds = canvas.getBoundingClientRect();
      ripples.push({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, age: 0 });
    };
    const pointerTarget = background ? window : canvas;
    const resizeObserver = new ResizeObserver(() => { resize(); start(); });
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); });
    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    pointerTarget.addEventListener('pointermove', onPointer, { passive: true });
    pointerTarget.addEventListener('pointerdown', onPointer, { passive: true });
    document.addEventListener('visibilitychange', start);
    motionPreference.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(frame);
      restartRef.current = null;
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      pointerTarget.removeEventListener('pointermove', onPointer);
      pointerTarget.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('visibilitychange', start);
      motionPreference.removeEventListener('change', start);
    };
  }, [variant]);

  return <canvas ref={canvasRef} className="rain-canvas" aria-hidden="true" />;
}
