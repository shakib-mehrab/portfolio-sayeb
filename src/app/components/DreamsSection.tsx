import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function DreamsSection() {
  const { dreams } = portfolioData;

  return (
    <section id="dreams" className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-9xl">✨</div>
        <div className="absolute top-1/2 right-1/4 text-9xl">🌈</div>
        <div className="absolute bottom-1/4 left-1/3 text-9xl">💭</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <h2 
              className="inline-block px-10 py-5 bg-[#FACC15] text-black border-4 border-black rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1"
              style={{ 
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
              }}
            >
              {dreams.title}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl max-w-2xl mx-auto"
          >
            {dreams.subtitle}
          </motion.p>
        </motion.div>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {dreams.cards.map((dream, index) => (
            <motion.div
              key={dream.title}
              initial={{ 
                opacity: 0, 
                y: 100,
                rotate: index % 2 === 0 ? -5 : 5,
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8,
                type: 'spring',
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
              }}
              className="group cursor-pointer"
            >
              <div className="relative h-full overflow-hidden rounded-[2.5rem] border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                    src={dream.image}
                    alt={dream.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: dream.gradient }}
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between min-h-[450px]">
                  {/* Floating Decorations */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {dream.decorations.map((deco, i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ 
                          duration: 2 + i * 0.3, 
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="text-2xl"
                      >
                        {deco}
                      </motion.span>
                    ))}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    <div className="inline-block p-6 bg-white rounded-[1.5rem] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-5xl">{dream.emoji}</span>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <div>
                    <h3 
                      className="mb-4 text-white"
                      style={{ 
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        lineHeight: 1.3,
                      }}
                    >
                      {dream.title}
                    </h3>

                    <p className="text-white/95 text-lg leading-relaxed">
                      {dream.description}
                    </p>
                  </div>

                  {/* Journey Path */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                    className="mt-6 h-2 bg-white/30 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ x: '-100%' }}
                      whileInView={{ x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 1 }}
                      className="h-full bg-white rounded-full"
                      style={{ width: `${30 + index * 20}%` }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Path SVG */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-4 border-black rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-xl font-semibold">{dreams.journeyText}</span>
            <motion.span
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-2xl"
            >
              🚀
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
