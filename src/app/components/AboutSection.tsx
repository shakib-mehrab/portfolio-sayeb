import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index={about.index} kicker={about.kicker} title={about.title} color="var(--sp-cyan)" />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          {/* Porthole photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[380px] aspect-square"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ border: '1px dashed var(--sp-line-strong)', transform: 'scale(1.12)' }}
            />
            <div
              className="absolute inset-0 rounded-full p-3"
              style={{ background: 'linear-gradient(140deg, var(--sp-cyan), var(--sp-violet))' }}
            >
              <div className="w-full h-full rounded-full overflow-hidden" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }}>
                <img src={about.profileImageUrl} alt={about.profileImageAlt} className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Porthole bolts */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <span
                key={deg}
                aria-hidden
                className="absolute w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full"
                style={{
                  left: `${50 + 48.5 * Math.sin((deg * Math.PI) / 180)}%`,
                  top: `${50 - 48.5 * Math.cos((deg * Math.PI) / 180)}%`,
                  background: 'var(--sp-bg)',
                  opacity: 0.7,
                }}
              />
            ))}
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-display mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, lineHeight: 1.25 }}>
              Hi! I'm <span style={{ color: 'var(--sp-gold)' }}>{about.name}</span>, a {about.classLabel} student at{' '}
              {about.schoolName}.
            </p>
            {about.paragraphs.map((text) => (
              <p key={text} className="text-lg mb-4" style={{ lineHeight: 1.8, color: 'var(--sp-muted)' }}>
                {text}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-3 mt-8">
              {about.facts.map((fact) => (
                <div key={fact.label} className="sp-card p-4 text-center" style={{ borderRadius: '1.25rem' }}>
                  <div className="font-display" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--sp-cyan)' }}>
                    {fact.value}
                  </div>
                  <div className="font-mono-space text-[11px] uppercase tracking-widest mt-1" style={{ color: 'var(--sp-muted)' }}>
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {about.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-1.5 rounded-full text-sm"
                  style={{ border: '1px solid var(--sp-line-strong)', fontWeight: 600 }}
                >
                  ✦ {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Captain's log: photo polaroids */}
        <div className="mt-20">
          <p className="font-mono-space text-xs uppercase tracking-[0.25em] mb-8 text-center" style={{ color: 'var(--sp-muted)' }}>
            Captain's log · photos from Earth
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {about.log.map((photo, i) => (
              <motion.figure
                key={photo.caption}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: [-4, 3, -2, 4][i % 4] }}
                whileHover={{ rotate: 0, y: -8, scale: 1.03 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 120 }}
                className="w-[220px] md:w-[240px] p-3 pb-4 rounded-xl"
                style={{ background: 'var(--sp-surface-solid)', boxShadow: 'var(--sp-shadow)', border: '1px solid var(--sp-line)' }}
              >
                <img src={photo.src} alt={photo.caption} className="w-full aspect-[4/5] object-cover rounded-lg" loading="lazy" />
                <figcaption className="mt-3 text-center font-display" style={{ fontWeight: 600 }}>
                  {photo.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
