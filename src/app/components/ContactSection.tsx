import { motion } from 'motion/react';
import { Heart, Mail } from 'lucide-react';
import { portfolioData } from '../data';

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ⭐
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, -2, 2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <h2 
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#FB7185] to-[#8B5CF6] text-white border-4 border-black rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
              style={{ 
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
              }}
            >
              {contact.title}
            </h2>
          </motion.div>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="mb-12"
        >
          <div className="relative p-8 md:p-12 bg-white rounded-[3rem] border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image with Waving Hand */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex-shrink-0 relative"
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <div className="absolute -inset-3 bg-[#FACC15] rounded-[2.5rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform rotate-6" />
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] border-4 border-black overflow-hidden">
                    <img
                      src={contact.profileImageUrl}
                      alt={contact.profileImageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Waving Hand */}
                  <motion.div
                    animate={{ rotate: [0, 20, -20, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-4 -right-4 text-5xl"
                  >
                    👋
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 
                  className="mb-4"
                  style={{ 
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                  }}
                >
                  Connect with Me!
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-700">
                  {contact.intro}
                </p>

                {/* Email Button */}
                <motion.a
                  href={`mailto:${contact.email}`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#4F7DF7] text-white border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ 
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                  }}
                >
                  <Mail className="w-6 h-6" />
                  {contact.emailLabel}
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contact.socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
              }}
              whileTap={{ scale: 0.95 }}
              className="block group"
            >
              <div 
                className="p-6 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: social.color }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl border-3 border-black flex items-center justify-center">
                    <social.icon className="w-8 h-8" style={{ color: social.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="text-white mb-1"
                      style={{ 
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {social.label}
                    </h4>
                    <p className="text-white/90">
                      {social.username}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-white text-2xl"
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block relative">
            <div className="px-12 py-6 bg-gradient-to-r from-[#FACC15] via-[#FB7185] to-[#8B5CF6] rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h3 
                  className="text-white mb-2"
                  style={{ 
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2.5rem',
                    fontWeight: 800,
                  }}
                >
                  {contact.closingTitle}
                </h3>
              </motion.div>
              <p className="text-white/95 text-xl">
                {contact.closingText}
              </p>
            </div>

            {/* Floating Hearts */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '100%',
                }}
                animate={{
                  y: [-20, -80],
                  opacity: [1, 0],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                💖
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-16 text-gray-600"
        >
          <p className="text-sm">
            {contact.footerPrimary} <Heart className="inline w-4 h-4 text-red-500 fill-red-500" /> {contact.footerSecondary}
          </p>
          <p className="text-sm mt-2">
            {contact.footerYear}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
