import { motion } from 'motion/react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { portfolioData } from '../data';
import { SectionHeader } from './space/SectionHeader';

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="relative pt-24 md:pt-32 pb-36 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader kicker={contact.kicker} title={contact.title} subtitle={contact.intro} color="var(--sp-cyan)" />

        <div className="flex justify-center mb-12">
          {/* Signal rings around the photo */}
          <div className="relative w-36 h-36">
            {[0, 1, 2].map((ring) => (
              <motion.span
                key={ring}
                aria-hidden
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid var(--sp-cyan)' }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: ring, ease: 'easeOut' }}
              />
            ))}
            <img
              src={contact.profileImageUrl}
              alt={contact.profileImageAlt}
              className="relative w-full h-full rounded-full object-cover"
              style={{ objectPosition: '50% 25%', boxShadow: '0 0 0 4px var(--sp-bg), 0 0 0 5px var(--sp-cyan)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contact.socialLinks.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="sp-focus group sp-card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
            >
              <span
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `color-mix(in srgb, ${social.color} 20%, transparent)`, border: `1px solid ${social.color}` }}
              >
                <social.icon className="w-6 h-6" style={{ color: social.color }} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-display text-lg" style={{ fontWeight: 700 }}>
                  {social.label}
                </span>
                <span className="block truncate text-sm" style={{ color: 'var(--sp-muted)' }}>
                  {social.username}
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: 'var(--sp-muted)' }} />
            </motion.a>
          ))}
        </div>

        {contact.email && (
          <div className="flex justify-center mt-8">
            <a
              href={`mailto:${contact.email}`}
              className="sp-focus inline-flex items-center gap-2 px-7 py-3.5 rounded-full"
              style={{ background: 'var(--sp-text)', color: 'var(--sp-bg)', fontWeight: 700 }}
            >
              <Mail className="w-5 h-5" />
              {contact.email}
            </a>
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-center mt-24"
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(120deg, var(--sp-gold), var(--sp-pink) 55%, var(--sp-violet))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {contact.closing}
        </motion.p>

        <footer className="mt-12 text-center font-mono-space text-xs" style={{ color: 'var(--sp-muted)' }}>
          {contact.footer}
        </footer>
      </div>
    </section>
  );
}
