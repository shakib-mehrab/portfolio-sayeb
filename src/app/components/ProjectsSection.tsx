import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Download, Github, Palette, Users } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

type Project = (typeof portfolioData)['projects']['items'][number];

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader kicker={projects.kicker} title={projects.title} subtitle={projects.subtitle} color="var(--sp-gold)" />
        {projects.items.map((project) => (
          <div key={project.name}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
              <SolarSystem project={project} />
              <ProjectStory project={project} />
            </div>
            <PhoneGallery project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

// The app is the sun; its features orbit it as moons on two rings.
function SolarSystem({ project }: { project: Project }) {
  const inner = project.features.slice(0, 4);
  const outer = project.features.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, type: 'spring', bounce: 0.25 }}
      className="sp-orbit-group relative mx-auto w-full max-w-[520px] aspect-square"
    >
      <Ring features={outer} radius={44} duration={60} offset={45} />
      <Ring features={inner} radius={28} duration={40} offset={0} />

      {/* Sun */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square">
        <div
          className="absolute -inset-[45%] rounded-full sp-pulse"
          style={{ background: 'radial-gradient(circle, rgba(255,201,60,0.55), rgba(255,140,60,0.15) 45%, transparent 70%)' }}
        />
        <div
          className="relative w-full h-full rounded-full flex flex-col items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #fff4c2, #ffc93c 45%, #f08a24 100%)',
            boxShadow: '0 0 60px rgba(255,190,60,0.6)',
          }}
        >
          <img src={project.icon} alt={`${project.name} logo`} className="w-[42%] rounded-2xl shadow-lg" />
          <span className="font-display mt-1.5 text-[#3a2000]" style={{ fontWeight: 800, fontSize: 'clamp(0.85rem, 2.4vw, 1.15rem)' }}>
            {project.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Ring({
  features,
  radius,
  duration,
  offset,
}: {
  features: Project['features'];
  radius: number;
  duration: number;
  offset: number;
}) {
  const size = `${radius * 2}%`;
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ width: size, height: size, border: '1px solid var(--sp-line-strong)' }}
    >
      <div className="sp-orbit absolute inset-0" style={{ ['--orbit-duration' as string]: `${duration}s` }}>
        {features.map((feature, i) => {
          const angle = offset + (360 / features.length) * i;
          return (
            <div key={feature.label} className="absolute inset-0" style={{ transform: `rotate(${angle}deg)` }}>
              <div className="absolute left-1/2 top-0" style={{ transform: `translate(-50%, -50%) rotate(${-angle}deg)` }}>
                <div className="sp-orbit-counter" style={{ ['--orbit-duration' as string]: `${duration}s` }}>
                  <span
                    className="sp-card flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 text-xs sm:text-sm"
                    style={{ borderRadius: 999, fontWeight: 600 }}
                  >
                    <span className="text-base sm:text-lg leading-none">{feature.emoji}</span>
                    {feature.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectStory({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="flex items-center gap-4 mb-5">
        <img src={project.icon} alt="" className="w-16 h-16 rounded-2xl" style={{ boxShadow: '0 0 30px rgba(255,190,60,0.45)' }} />
        <div>
          <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1 }}>
            {project.name}
          </h3>
          <p className="mt-1" style={{ color: 'var(--sp-muted)' }}>
            {project.tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <span
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm"
          style={{ background: 'var(--sp-gold)', color: 'var(--sp-gold-ink)', fontWeight: 700 }}
        >
          <Palette className="w-4 h-4" />
          {project.role}
        </span>
        <span
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm"
          style={{ border: '1px solid var(--sp-line-strong)', fontWeight: 600 }}
        >
          <Users className="w-4 h-4" />
          {project.teammate}
        </span>
      </div>

      <p className="text-lg mb-7" style={{ lineHeight: 1.8, color: 'var(--sp-muted)' }}>
        {project.description}
      </p>

      <div className="sp-card p-6 mb-7">
        <p className="font-mono-space text-xs uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--sp-gold)' }}>
          My part
        </p>
        <ul className="space-y-3">
          {project.myPart.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="flex gap-3"
            >
              <span
                className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-[11px]"
                style={{ background: 'var(--sp-gold)', color: 'var(--sp-gold-ink)', fontWeight: 800 }}
              >
                ✓
              </span>
              <span style={{ lineHeight: 1.6 }}>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {project.stats.map((stat) => (
          <div key={stat.label} className="text-center py-3 rounded-2xl" style={{ border: '1px solid var(--sp-line)' }}>
            <div className="font-display" style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.1, color: 'var(--sp-gold)' }}>
              {stat.value}
            </div>
            <div className="text-xs mt-1" style={{ color: 'var(--sp-muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sp-focus inline-flex items-center gap-2 px-6 py-3 rounded-full transition-transform hover:-translate-y-0.5"
            style={
              link.primary
                ? { background: 'var(--sp-gold)', color: 'var(--sp-gold-ink)', fontWeight: 700 }
                : { border: '1px solid var(--sp-line-strong)', fontWeight: 700, background: 'var(--sp-surface-2)' }
            }
          >
            {link.primary ? <Download className="w-4 h-4" /> : <Github className="w-4 h-4" />}
            {link.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

function PhoneGallery({ project }: { project: Project }) {
  const shots = project.screenshots;
  const [active, setActive] = useState(1);
  const go = (delta: number) => setActive((i) => (i + delta + shots.length) % shots.length);

  return (
    <div className="mt-24">
      <p className="font-mono-space text-xs uppercase tracking-[0.25em] mb-6 text-center" style={{ color: 'var(--sp-muted)' }}>
        Inside the app · {shots[active].label}
      </p>
      <div className="relative h-[440px] md:h-[520px] flex items-center justify-center overflow-hidden">
        {shots.map((shot, i) => {
          const offset = i - active;
          if (Math.abs(offset) > 2) return null;
          return (
            <motion.button
              key={shot.alt}
              type="button"
              onClick={() => setActive(i)}
              aria-label={shot.alt}
              animate={{
                x: `${offset * 75}%`,
                scale: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.68,
                rotateY: offset * -18,
                zIndex: 10 - Math.abs(offset),
                opacity: Math.abs(offset) === 2 ? 0.35 : 1,
              }}
              transition={{ type: 'spring', stiffness: 180, damping: 24 }}
              className="sp-focus absolute w-[180px] md:w-[220px] aspect-[470/1032] rounded-[2rem] overflow-hidden"
              style={{
                border: '5px solid #0b0b14',
                boxShadow: offset === 0 ? '0 30px 80px -20px rgba(255,190,60,0.45)' : 'var(--sp-shadow)',
                transformPerspective: 1000,
              }}
            >
              <img src={shot.src} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
            </motion.button>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="sp-focus w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: '1px solid var(--sp-line-strong)' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {shots.map((shot, i) => (
            <button
              key={shot.alt}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${shot.label}`}
              className="sp-focus h-2.5 rounded-full transition-all"
              style={{ width: i === active ? 28 : 10, background: i === active ? 'var(--sp-gold)' : 'var(--sp-line-strong)' }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="sp-focus w-10 h-10 rounded-full flex items-center justify-center"
          style={{ border: '1px solid var(--sp-line-strong)' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
