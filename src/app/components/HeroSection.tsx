import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { portfolioData } from '../data';

export function HeroSection() {
  const { hero } = portfolioData;

  const scrollToAbout = () => {
    const aboutSection = document.getElementById(hero.scrollTargetId);
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Floating Elements */}
      {hero.floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl pointer-events-none"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 1.2, bounce: 0.5 }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-[#4F7DF7] rounded-[3rem] transform rotate-3 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-[3rem] border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src={hero.profileImageUrl}
                alt={hero.profileImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative stars */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -right-6 text-5xl"
            >
              ⭐
            </motion.div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 
            className="mb-4 px-6 py-3 inline-block"
            style={{ 
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            <span className="relative inline-block bg-[#FACC15] px-6 py-2 border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              {hero.name}
            </span>
          </h1>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {hero.tags.map((tag, index) => (
              <span
                key={tag}
                className="px-5 py-2 border-3 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                style={{
                  backgroundColor: index === 0 ? '#8B5CF6' : index === 1 ? '#22C55E' : '#FB7185',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <div className="inline-block bg-white px-8 py-4 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xl mb-1" style={{ fontWeight: 600 }}>{hero.classLabel}</p>
              <p className="text-lg">{hero.schoolName}</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-4 mb-12"
          >
            {hero.socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                style={{ backgroundColor: social.color }}
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="px-10 py-5 bg-[#4F7DF7] text-white border-4 border-black rounded-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all"
            style={{ 
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: '1.5rem',
              fontWeight: 700,
            }}
          >
            {hero.ctaLabel}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, y: { duration: 1.5, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-12 h-12" />
      </motion.div>
    </section>
  );
}
