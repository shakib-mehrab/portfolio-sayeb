import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function HobbiesSection() {
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="relative py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-spin-slow">🌟</div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-bounce">🎨</div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="inline-block px-10 py-5 bg-[#FB7185] text-white border-4 border-black rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform rotate-2"
            style={{ 
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
            }}
          >
            {hobbies.title}
          </h2>
        </motion.div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.cards.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ y: 100, opacity: 0, rotate: -5 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                rotate: Math.random() > 0.5 ? 2 : -2,
                scale: 1.05,
              }}
              className="group cursor-pointer"
            >
              <div 
                className="relative h-full p-8 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                style={{ backgroundColor: hobby.color }}
              >
                <div className="mb-6 overflow-hidden rounded-[1.5rem] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="h-36 w-full object-cover"
                  />
                </div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 inline-block absolute top-28 left-8"
                >
                  <div className="relative w-20 h-20 bg-white rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                    <span className="text-4xl">{hobby.emoji}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <h3 
                  className="mb-2 text-white"
                  style={{ 
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '1.75rem',
                    fontWeight: 700,
                  }}
                >
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-lg">
                  {hobby.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute top-4 right-4 text-2xl"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center gap-4 mt-16 flex-wrap"
        >
          {hobbies.badges.map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
              className="px-6 py-3 bg-white border-3 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              style={{ fontWeight: 600, fontSize: '1.1rem' }}
            >
              {badge} ⭐
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
}
