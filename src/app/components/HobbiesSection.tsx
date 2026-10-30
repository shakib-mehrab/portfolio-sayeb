import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

export function HobbiesSection() {
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="relative py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index={hobbies.index}
          kicker={hobbies.kicker}
          title={hobbies.title}
          subtitle={hobbies.subtitle}
          color="var(--sp-pink)"
        />

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-x-10">
          {hobbies.items.map((hobby, i) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.6 }}
              // Stagger planets up and down so the row feels like an orbit, not a grid.
              className={`group w-[150px] sm:w-[190px] text-center ${i % 2 ? 'md:translate-y-10' : ''}`}
            >
              <div className="relative mx-auto w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] mb-5">
                <div
                  className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${hobby.color}55, transparent 70%)` }}
                />
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="relative w-full h-full rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.75), ${hobby.color} 42%, color-mix(in srgb, ${hobby.color} 45%, #050716) 100%)`,
                    boxShadow: `0 0 40px -6px ${hobby.color}, inset -14px -18px 30px rgba(0,0,0,0.35)`,
                  }}
                >
                  {/* Surface bands */}
                  <div
                    className="absolute inset-0 rounded-full opacity-25"
                    style={{ background: 'repeating-linear-gradient(-20deg, transparent 0 14px, rgba(255,255,255,0.35) 14px 18px)' }}
                  />
                  <span className="relative text-5xl sm:text-6xl drop-shadow">{hobby.emoji}</span>
                </motion.div>
                {hobby.ring && (
                  <div
                    aria-hidden
                    className="absolute left-1/2 top-1/2 w-[160%] h-[34%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] pointer-events-none"
                    style={{ border: `2px solid ${hobby.color}`, opacity: 0.6, transform: 'translate(-50%, -50%) rotate(-14deg)' }}
                  />
                )}
              </div>
              <h3 className="font-display text-lg sm:text-xl" style={{ fontWeight: 700 }}>
                {hobby.title}
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--sp-muted)' }}>
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
