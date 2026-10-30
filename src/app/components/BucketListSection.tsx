import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

export function BucketListSection() {
  const { missions } = portfolioData;

  return (
    <section id="missions" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={missions.index}
          kicker={missions.kicker}
          title={missions.title}
          subtitle={missions.subtitle}
          color="var(--sp-green)"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {missions.items.map((mission, i) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group sp-card p-6 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -right-6 -top-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity select-none"
              >
                {mission.icon}
              </div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-space text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--sp-muted)' }}>
                  Mission {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono-space uppercase tracking-wider"
                  style={{ border: '1px solid var(--sp-line-strong)', color: 'var(--sp-green)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full sp-pulse" style={{ background: 'var(--sp-green)' }} />
                  Planned
                </span>
              </div>
              <div className="text-4xl mb-3">{mission.icon}</div>
              <h3 className="font-display text-xl" style={{ fontWeight: 700 }}>
                {mission.title}
              </h3>
              <p className="mt-1" style={{ color: 'var(--sp-muted)' }}>
                {mission.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Places to land */}
        <div className="relative mt-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="sp-marquee flex gap-4 w-max">
            {[...missions.landmarks, ...missions.landmarks].map((landmark, i) => (
              <div
                key={i}
                aria-hidden={i >= missions.landmarks.length}
                className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl"
                style={{ border: '1px solid var(--sp-line)', background: 'var(--sp-surface-2)' }}
              >
                {landmark}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
