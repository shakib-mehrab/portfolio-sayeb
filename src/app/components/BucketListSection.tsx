import { motion } from 'motion/react';
import { portfolioData } from '../data';

export function BucketListSection() {
  const { bucketList } = portfolioData;

  return (
    <section id="bucket-list" className="relative py-20 px-4 overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={bucketList.worldMapImage}
          alt="World Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-6xl opacity-30"
      >
        ✈️
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-40 left-20 text-6xl opacity-30"
      >
        🎈
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 1 }}
          className="text-center mb-16"
        >
          <h2 
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#4F7DF7] to-[#8B5CF6] text-white border-4 border-black rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
            style={{ 
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
            }}
          >
            {bucketList.title}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl"
          >
            {bucketList.subtitle}
          </motion.p>
        </motion.div>

        {/* Bucket List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bucketList.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100,
                rotate: index % 2 === 0 ? -10 : 10,
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: Math.random() > 0.5 ? 2 : -2,
              }}
              className="group"
            >
              <div 
                className="relative p-6 rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all bg-white overflow-hidden"
              >
                {/* Colored stripe */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2"
                  style={{ backgroundColor: item.color }}
                />

                {/* Checkbox */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="absolute top-4 right-4"
                >
                  <div className="w-8 h-8 border-3 border-black rounded-lg bg-white flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-4 h-4 bg-[#22C55E] rounded"
                    />
                  </div>
                </motion.div>

                <div className="flex items-start gap-4 mt-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="flex-shrink-0"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl border-3 border-black flex items-center justify-center text-3xl"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 
                      className="mb-2"
                      style={{ 
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: '1.25rem',
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Scrolling Travel Badges */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: 'linear',
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...bucketList.travelBadges, ...bucketList.travelBadges, ...bucketList.travelBadges].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.3, rotate: 360 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-4xl">
                  {badge}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Style Card */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto mt-12"
        >
          <div className="relative p-8 bg-gradient-to-br from-[#FACC15] to-[#FB7185] rounded-[2.5rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="text-6xl"
              >
                🏆
              </motion.div>
              <div className="text-center md:text-left">
                <h3 
                  className="text-white mb-2"
                  style={{ 
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                  }}
                >
                  {bucketList.achievementTitle}
                </h3>
                <p className="text-white/90 text-lg">
                  {bucketList.achievementText}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
