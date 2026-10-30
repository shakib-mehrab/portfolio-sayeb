import { motion } from 'motion/react';

type Props = {
  index?: string;
  kicker: string;
  title: string;
  subtitle?: string;
  color: string;
  align?: 'center' | 'left';
};

export function SectionHeader({ index, kicker, title, subtitle, color, align = 'center' }: Props) {
  const centered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: color, boxShadow: `0 0 14px 2px ${color}` }}
        />
        <span className="font-mono-space text-xs md:text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--sp-muted)' }}>
          {index ? `Planet ${index} · ${kicker}` : kicker}
        </span>
      </div>
      <h2
        className="font-display"
        style={{ fontSize: 'clamp(2.25rem, 6vw, 4.25rem)', fontWeight: 800, lineHeight: 1.02, letterSpacing: '-0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${centered ? 'max-w-xl mx-auto' : 'max-w-xl'}`} style={{ color: 'var(--sp-muted)' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
