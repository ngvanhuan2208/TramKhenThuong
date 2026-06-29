import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function LoveMeterScreen({ onNext }: Props) {
  const [clicks, setClicks] = useState(0);
  const maxClicks = 5;

  const handleClick = () => {
    if (clicks < maxClicks) {
      setClicks(clicks + 1);
    }
    if (clicks + 1 === maxClicks) {
      setTimeout(() => {
        onNext();
      }, 1000);
    }
  };

  const progress = (clicks / maxClicks) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="flex flex-col items-center justify-center text-center space-y-8 relative w-full py-8 md:py-0"
    >
      {/* Left Image - Large & Symmetrical */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-24 h-32 md:w-48 md:h-64"
      >
        <img
          src="/images/pine-forest-2.jpg"
          alt="Left decoration"
          className="image-decoration w-full h-full rounded-3xl shadow-xl border-4 border-white animate-sway-gentle"
        />
      </motion.div>

      {/* Right Image - Large & Symmetrical */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-24 h-32 md:w-48 md:h-64"
      >
        <img
          src="/images/pine-forest-3.jpg"
          alt="Right decoration"
          className="image-decoration w-full h-full rounded-3xl shadow-xl border-4 border-white animate-bounce-light"
        />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10">
        <p className="font-sans text-xs uppercase tracking-[0.4em] mb-4 opacity-80 text-center">Nạp năng lượng</p>
        <h2 className="text-4xl md:text-5xl font-light text-[#3D2C24] mb-4 font-serif">
          Sạc đầy <span className="italic text-[#FF85A1]">tình yêu!</span>
        </h2>
        <p className="font-sans text-sm opacity-70 max-w-xs mx-auto">
          Nhấn vào trái tim {maxClicks} lần để mở hộp quà nhé.
        </p>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center z-10">
        <motion.div
          className="absolute inset-0 bg-[#FF85A1]/20 rounded-full border border-[#FF85A1]/30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.button
          onClick={handleClick}
          whileTap={{ scale: 0.8 }}
          className="relative z-20 p-8 bg-white rounded-full shadow-xl border border-[#3D2C24]/10 flex items-center justify-center"
        >
          <Heart
            className={`w-20 h-20 transition-colors duration-300 ${
              clicks > 0 ? 'text-[#FF85A1] fill-[#FF85A1]' : 'text-[#3D2C24]/20'
            }`}
          />
        </motion.button>

        <AnimatePresence>
          {clicks > 0 && Array.from({ length: clicks }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 0, x: 0, scale: 0.5 }}
              animate={{
                opacity: 0,
                y: -100 - Math.random() * 50,
                x: (Math.random() - 0.5) * 100,
                scale: 1.5,
              }}
              transition={{ duration: 1 }}
              className="absolute pointer-events-none z-30"
            >
              <Heart className="w-6 h-6 text-[#FF6B6B] fill-[#FF6B6B]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="w-64 h-2 bg-[#3D2C24]/10 rounded-full overflow-hidden mt-8 z-10">
        <motion.div
          className="h-full bg-[#FF85A1]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </div>
      
      <p className="font-sans text-[10px] font-bold tracking-widest text-[#FF85A1] uppercase mt-2 z-10">
        Mức độ nạp: {clicks}/{maxClicks}
      </p>
    </motion.div>
  );
}
