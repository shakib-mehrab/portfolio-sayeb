import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data';

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 text-6xl opacity-20"
      >
        📝
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-5xl opacity-20"
      >
        ✏️
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-block relative">
            <h2 
              className="relative inline-block px-8 py-4 bg-[#8B5CF6] text-white border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2"
              style={{ 
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
              }}
            >
              {about.title}
            </h2>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 -right-8 text-4xl"
            >
              <Sparkles className="w-10 h-10 text-[#FACC15]" fill="#FACC15" />
            </motion.div>
          </div>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Notebook Lines Background */}
          <div className="absolute inset-0 rounded-[2.5rem] border-4 border-black bg-white overflow-hidden">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 35px, #E5E7EB 35px, #E5E7EB 37px)',
              opacity: 0.3,
            }} />
            {/* Red vertical line like notebook */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-red-400 opacity-30" />
          </div>

          <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-[#22C55E] rounded-3xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-3" />
                  <div className="relative w-full h-full bg-white rounded-3xl border-4 border-black overflow-hidden">
                    <img
                      src={about.profileImageUrl}
                      alt={about.profileImageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="flex-1">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl leading-relaxed mb-6"
                  style={{ fontWeight: 400, lineHeight: 1.8 }}
                >
                  {about.intro} <span className="inline-block px-3 py-1 bg-[#FACC15] border-2 border-black rounded-lg font-semibold">{about.highlightedName}</span>. 
                  I study in <span className="inline-block px-3 py-1 bg-[#4F7DF7] text-white border-2 border-black rounded-lg font-semibold">{about.classLabel}</span> at 
                   {about.schoolName}.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontWeight: 400, lineHeight: 1.8 }}
                >
                  {about.curiosityParagraph} 
                  Every day is a <span className="inline-block px-3 py-1 bg-[#FB7185] text-white border-2 border-black rounded-lg font-semibold">new adventure</span> for me! 🚀
                </motion.p>

                {/* Decorative Stickers */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  {about.stickers.map((emoji, index) => (
                    <motion.div
                      key={emoji}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-4xl cursor-pointer"
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Handwritten Arrow */}
        <motion.div
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="transform rotate-90">
            <motion.path
              d="M 20 20 Q 50 50 80 80"
              stroke="#000"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.polygon
              points="80,70 90,80 80,90"
              fill="#000"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
