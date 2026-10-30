import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

export function DreamsSection() {
  const { dreams } = portfolioData;
  const pathRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: pathRef, offset: ['start 75%', 'end 60%'] });
  const rocketTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const trail = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="dreams" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={dreams.index}
          kicker={dreams.kicker}
          title={dreams.title}
          subtitle={dreams.subtitle}
          color="var(--sp-violet)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Launch pad photo */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 mx-auto max-w-[400px] w-full"
          >
            <div className="sp-card p-3" style={{ borderRadius: '2rem' }}>
              <img src={dreams.image} alt={dreams.imageAlt} className="w-full aspect-[4/5] object-cover rounded-[1.5rem]" loading="lazy" />
            </div>
            <figcaption className="mt-4 text-center font-mono-space text-sm" style={{ color: 'var(--sp-muted)' }}>
              {dreams.imageCaption}
            </figcaption>
          </motion.figure>

          {/* Trajectory */}
          <div ref={pathRef} className="relative pl-14 md:pl-20">
            <div className="absolute left-5 md:left-8 top-2 bottom-2 w-px" style={{ background: 'var(--sp-line-strong)' }} />
            <motion.div
              className="absolute left-5 md:left-8 top-2 w-px origin-top"
              style={{ height: trail, background: 'linear-gradient(var(--sp-violet), var(--sp-pink))', boxShadow: '0 0 12px var(--sp-violet)' }}
            />
            <motion.div
              aria-hidden
              className="absolute left-5 md:left-8 -translate-x-1/2 -translate-y-1/2 text-3xl"
              style={{ top: rocketTop, rotate: 135 }}
            >
              🚀
            </motion.div>

            <div className="space-y-10 md:space-y-14">
              {dreams.items.map((dream, i) => (
                <motion.div
                  key={dream.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7 }}
                  className="relative sp-card p-6 md:p-8"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[42px] md:-left-[54px] top-9 w-4 h-4 rounded-full"
                    style={{ background: dream.color, boxShadow: `0 0 16px 3px ${dream.color}` }}
                  />
                  <p className="font-mono-space text-xs uppercase tracking-[0.25em] mb-3" style={{ color: dream.color }}>
                    Destination {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ background: `color-mix(in srgb, ${dream.color} 22%, transparent)`, border: `1px solid ${dream.color}` }}
                    >
                      {dream.emoji}
                    </div>
                    <div>
                      <h3 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, lineHeight: 1.15 }}>
                        {dream.title}
                      </h3>
                      <p className="mt-2 text-lg" style={{ color: 'var(--sp-muted)', lineHeight: 1.7 }}>
                        {dream.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
