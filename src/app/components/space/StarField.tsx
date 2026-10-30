import { useEffect, useRef } from 'react';
import type { Theme } from './useTheme';

type Star = { x: number; y: number; r: number; depth: number; phase: number; speed: number };
type Shooter = { x: number; y: number; vx: number; vy: number; life: number };

// Fixed full-screen sky: twinkling stars in three parallax layers, the odd shooting star,
// and soft nebula glows. In day mode the stars fade out and the glows turn warm.
export function StarField({ theme }: { theme: Theme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars: Star[] = [];
    let shooter: Shooter | null = null;
    let nextShooter = performance.now() + 3000;
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round((width * height) / 2600);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random() < 0.6 ? 0.15 : Math.random() < 0.8 ? 0.35 : 0.7;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          r: depth * 1.6 + Math.random() * 0.6,
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 1.5,
        };
      });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const scroll = window.scrollY;
      const t = now / 1000;

      for (const s of stars) {
        const y = (((s.y - scroll * s.depth * 0.25) % height) + height) % height;
        const twinkle = reduceMotion ? 0.8 : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        ctx.globalAlpha = twinkle * (0.4 + s.depth);
        ctx.fillStyle = s.depth > 0.5 ? '#fff6d6' : '#dfe6ff';
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        if (!shooter && now > nextShooter) {
          shooter = {
            x: Math.random() * width * 0.7 + width * 0.2,
            y: Math.random() * height * 0.3,
            vx: -9 - Math.random() * 4,
            vy: 4 + Math.random() * 2,
            life: 1,
          };
        }
        if (shooter) {
          const tail = 14;
          const grad = ctx.createLinearGradient(shooter.x, shooter.y, shooter.x - shooter.vx * tail, shooter.y - shooter.vy * tail);
          grad.addColorStop(0, `rgba(255,255,255,${shooter.life})`);
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.globalAlpha = 1;
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shooter.x, shooter.y);
          ctx.lineTo(shooter.x - shooter.vx * tail, shooter.y - shooter.vy * tail);
          ctx.stroke();
          shooter.x += shooter.vx;
          shooter.y += shooter.vy;
          shooter.life -= 0.012;
          if (shooter.life <= 0 || shooter.x < -100 || shooter.y > height + 100) {
            shooter = null;
            nextShooter = now + 4000 + Math.random() * 6000;
          }
        }
      }

      ctx.globalAlpha = 1;
      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    // With reduced motion the sky is static and only redraws for parallax on scroll.
    const redraw = () => draw(0);
    resize();
    window.addEventListener('resize', resize);
    if (reduceMotion) {
      redraw();
      window.addEventListener('scroll', redraw, { passive: true });
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', redraw);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Nebula glows */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full blur-3xl transition-colors duration-700"
        style={{ background: 'radial-gradient(circle, var(--sp-nebula-1), transparent 65%)' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl transition-colors duration-700"
        style={{ background: 'radial-gradient(circle, var(--sp-nebula-2), transparent 65%)' }}
      />
      <div
        className="absolute -bottom-1/3 left-1/4 w-[60vw] h-[60vw] rounded-full blur-3xl transition-colors duration-700"
        style={{ background: 'radial-gradient(circle, var(--sp-nebula-3), transparent 65%)' }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: theme === 'night' ? 1 : 0 }}
      />
    </div>
  );
}
