import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, Sun } from 'lucide-react';
import { portfolioData } from '../data';
import { scrollToSection } from './space/SolarNav';

// A small constellation drawn in the top-left of the sky, line by line.
const constellation = {
  stars: [
    [8, 18], [16, 10], [24, 16], [30, 8], [38, 14], [34, 26], [22, 30],
  ],
  lines: [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 2],
  ],
};

// Points around a tilted ellipse for the moon's orbit; z flips it behind the planet.
const ORBIT_STEPS = 36;
const orbit = Array.from({ length: ORBIT_STEPS + 1 }, (_, i) => {
  const a = (i / ORBIT_STEPS) * Math.PI * 2;
  return { x: Math.cos(a), y: Math.sin(a), front: Math.sin(a) > 0 };
});

// Planet diameter at each breakpoint; matches the w-/h- classes on the planet below.
function usePlanetSize() {
  const measure = () => (window.innerWidth >= 1024 ? 380 : window.innerWidth >= 640 ? 300 : 240);
  const [size, setSize] = useState(measure);
  useEffect(() => {
    const onResize = () => setSize(measure());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return size;
}

export function HeroSection() {
  const { hero } = portfolioData;
  const reduceMotion = useReducedMotion();
  const planet = usePlanetSize();
  // The ring SVG is 150% of the planet wide with rx 92/100 and ry 16/100 of its half-width.
  const rx = planet * 0.75 * 0.92;
  const ry = planet * 0.75 * 0.16;

  return (
    <section id="home" className="relative min-h-screen flex items-center px-4 pt-28 pb-32 overflow-hidden">
      {/* Constellation */}
      <svg
        aria-hidden
        viewBox="0 0 46 36"
        className="absolute top-20 left-[4%] w-[46vw] max-w-[420px] opacity-40 pointer-events-none"
      >
        {constellation.lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={constellation.stars[a][0]}
            y1={constellation.stars[a][1]}
            x2={constellation.stars[b][0]}
            y2={constellation.stars[b][1]}
            stroke="var(--sp-line-strong)"
            strokeWidth={0.18}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.6 + i * 0.25, duration: 0.6 }}
          />
        ))}
        {constellation.stars.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={0.55}
            fill="var(--sp-gold)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.2, type: 'spring' }}
          />
        ))}
      </svg>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-10 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono-space text-xs md:text-sm uppercase tracking-[0.25em] mb-6"
            style={{ color: 'var(--sp-gold)' }}
          >
            {hero.kicker}
          </motion.p>

          <h1 className="font-display mb-6" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="block"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.75rem)', lineHeight: 1.1, color: 'var(--sp-muted)' }}
            >
              {hero.firstLine}
            </motion.span>
            <span
              className="block"
              style={{ fontSize: 'clamp(4.5rem, 15vw, 9.5rem)', lineHeight: 0.95 }}
              aria-label={hero.secondLine}
            >
              {hero.secondLine.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 0.55 + i * 0.09, duration: 0.6 }}
                  className="inline-block"
                  style={{
                    background: 'linear-gradient(120deg, var(--sp-gold), var(--sp-pink) 55%, var(--sp-violet))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                aria-hidden
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="inline-block"
                style={{ color: 'var(--sp-gold)' }}
              >
                .
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6"
          >
            {hero.roles.map((role, i) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full text-sm md:text-base"
                style={{
                  fontWeight: 600,
                  border: '1px solid var(--sp-line-strong)',
                  background: i === 1 ? 'var(--sp-gold)' : 'var(--sp-surface-2)',
                  color: i === 1 ? 'var(--sp-gold-ink)' : 'var(--sp-text)',
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-3"
            style={{ lineHeight: 1.7 }}
          >
            {hero.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.35 }}
            className="font-mono-space text-sm mb-9"
            style={{ color: 'var(--sp-muted)' }}
          >
            {hero.classLabel} · {hero.schoolName}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <button
              type="button"
              onClick={() => scrollToSection(hero.primaryCta.target)}
              className="sp-focus inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--sp-text)', color: 'var(--sp-bg)', fontWeight: 700, fontSize: '1.05rem' }}
            >
              {hero.primaryCta.label}
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(hero.secondaryCta.target)}
              className="sp-focus inline-flex items-center gap-2 px-7 py-3.5 rounded-full transition-transform hover:-translate-y-0.5"
              style={{ border: '1px solid var(--sp-line-strong)', fontWeight: 700, fontSize: '1.05rem', background: 'var(--sp-surface-2)' }}
            >
              <Sun className="w-4 h-4" style={{ color: 'var(--sp-gold)' }} />
              {hero.secondaryCta.label}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {hero.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="sp-focus w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                style={{ border: '1px solid var(--sp-line-strong)', background: 'var(--sp-surface-2)' }}
              >
                <social.icon className="w-5 h-5" style={{ color: social.color }} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Planet portrait with its Ad-Deen moon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, type: 'spring', bounce: 0.3 }}
          className="order-1 lg:order-2 relative mx-auto w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px]"
        >
          {/* Glow */}
          <div
            className="absolute -inset-10 rounded-full sp-pulse"
            style={{ background: 'radial-gradient(circle, var(--sp-nebula-1), transparent 70%)' }}
          />
          {/* Back half of the ring */}
          <OrbitRing half="back" />
          <div
            className="relative w-full h-full rounded-full overflow-hidden z-10"
            style={{
              boxShadow: '0 0 0 1px var(--sp-line-strong), 0 0 60px -10px var(--sp-violet), inset -30px -30px 60px rgba(0,0,0,0.35)',
            }}
          >
            <img
              src={hero.profileImageUrl}
              alt={hero.profileImageAlt}
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 30%' }}
            />
            {/* Terminator shading so the photo reads as a lit planet */}
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(circle at 30% 25%, transparent 45%, rgba(6,8,24,0.55) 100%)' }}
            />
          </div>
          <OrbitRing half="front" />

          {/* Moon */}
          <motion.button
            type="button"
            onClick={() => scrollToSection('projects')}
            aria-label="Ad-Deen, the app I helped design"
            className="sp-focus absolute left-1/2 top-1/2 -ml-7 -mt-7 w-14 h-14 rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 0 24px var(--sp-gold)' }}
            animate={
              reduceMotion
                ? { x: rx, y: 0, zIndex: 30 }
                : {
                    x: orbit.map((p) => p.x * rx),
                    y: orbit.map((p) => p.y * ry),
                    zIndex: orbit.map((p) => (p.front ? 30 : 5)),
                    scale: orbit.map((p) => (p.front ? 1 : 0.75)),
                  }
            }
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          >
            <img src={hero.moonImageUrl} alt="" className="w-full h-full" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 font-mono-space text-xs tracking-[0.3em] uppercase hidden md:block"
        style={{ color: 'var(--sp-muted)' }}
      >
        Scroll to launch ↓
      </motion.div>
    </section>
  );
}

function OrbitRing({ half }: { half: 'back' | 'front' }) {
  return (
    <svg
      aria-hidden
      viewBox="-100 -30 200 60"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] pointer-events-none"
      style={{ zIndex: half === 'back' ? 0 : 20, overflow: 'visible' }}
    >
      <defs>
        <clipPath id={`ring-${half}`}>
          {half === 'back' ? <rect x="-120" y="-40" width="240" height="40" /> : <rect x="-120" y="0" width="240" height="40" />}
        </clipPath>
      </defs>
      <ellipse
        cx="0"
        cy="0"
        rx="92"
        ry="16"
        fill="none"
        stroke="var(--sp-gold)"
        strokeOpacity={half === 'back' ? 0.35 : 0.8}
        strokeWidth="1.2"
        strokeDasharray={half === 'back' ? '3 4' : undefined}
        clipPath={`url(#ring-${half})`}
      />
    </svg>
  );
}
