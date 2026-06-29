import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Gift, Coffee, Heart, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onRestart: () => void;
}

export default function RewardScreen({ onRestart }: Props) {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0, colors: ['#FF85A1', '#FF6B6B', '#3D2C24', '#FFFBF8'] };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', damping: 15, stiffness: 100 }}
      className="flex flex-col items-center justify-center w-full relative overflow-hidden py-8 md:py-0"
    >
      {/* Background Images - Corners & Sides */}
      
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="absolute top-4 left-4 md:top-8 md:left-8 w-20 h-28 md:w-32 md:h-44"
      >
        <img
          src="/images/hoian-street-1.jpg"
          alt="decoration"
          className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white animate-float-gentle"
        />
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-28 md:w-32 md:h-44"
      >
        <img
          src="/images/pine-forest-2.jpg"
          alt="decoration"
          className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white animate-bounce-light"
        />
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-20 h-28 md:w-32 md:h-44"
      >
        <img
          src="/images/flower-shop-1.jpg"
          alt="decoration"
          className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white animate-sway-gentle"
        />
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-20 h-28 md:w-32 md:h-44"
      >
        <img
          src="/images/hoian-street-2.jpg"
          alt="decoration"
          className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white animate-float-slow"
        />
      </motion.div>

      {/* Middle Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-16 h-24 md:w-20 md:h-32 hidden md:block"
      >
        <img
          src="/images/pine-forest-3.jpg"
          alt="side decoration"
          className="w-full h-full object-cover rounded-xl shadow-md border-2 border-white/70 animate-pulse-grow"
        />
      </motion.div>

      {/* Middle Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-16 h-24 md:w-20 md:h-32 hidden md:block"
      >
        <img
          src="/images/flower-bouquet-2.jpg"
          alt="side decoration"
          className="w-full h-full object-cover rounded-xl shadow-md border-2 border-white/70 animate-pulse-grow"
        />
      </motion.div>

      {/* Main Content */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-[#3D2C24]/10 rounded-full mb-6 shadow-sm">
          <Gift className="w-8 h-8 text-[#FF85A1]" />
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.6em] mb-4 opacity-80">Chứng nhận độc quyền</p>
        <h2 className="text-5xl md:text-[80px] font-light leading-[0.85] text-[#3D2C24] font-serif uppercase">
          PHIẾU BÉ <span className="italic text-[#FF85A1] font-normal">NGOAN</span>
        </h2>
      </div>

      {/* Main Flower Image in Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
        className="mb-8 relative z-10 px-4"
      >
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img
            src="/images/flower-bouquet-1.jpg"
            alt="Main flower bouquet"
            className="w-full h-full object-cover animate-bounce-light"
          />
        </div>
      </motion.div>

      {/* Rewards Cards */}
      <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch px-4 relative z-10 max-w-2xl mb-8">
        <div className="w-full md:w-48 h-32 bg-white border border-[#3D2C24]/10 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:rotate-2 transition-transform animate-slide-in-left">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-sans font-black bg-[#FF85A1]/10 text-[#FF85A1] px-2 py-0.5 rounded">REWARD 01</span>
            <span className="text-2xl"><Coffee className="w-6 h-6 text-[#3D2C24]" /></span>
          </div>
          <p className="font-sans text-sm font-bold leading-tight uppercase text-[#3D2C24]">1 Ly Trà Sữa<br/>Phúc Long</p>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <span className="font-sans text-[10px] font-bold text-[#3D2C24]/40 uppercase tracking-widest">Hoặc</span>
        </div>

        <div className="w-full md:w-48 h-32 bg-[#3D2C24] text-white border border-[#3D2C24]/10 rounded-2xl p-4 flex flex-col justify-between shadow-lg hover:-rotate-2 transition-transform animate-slide-in-right">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-sans font-black bg-white/20 text-white px-2 py-0.5 rounded">SPECIAL</span>
            <span className="text-2xl"><Heart className="w-6 h-6 text-[#FF85A1] fill-[#FF85A1]" /></span>
          </div>
          <p className="font-sans text-sm font-bold leading-tight uppercase">1 Cái Xơm má <br/>Thật IU</p>
        </div>
      </div>

      <p className="font-sans text-[10px] text-[#3D2C24]/50 uppercase tracking-widest text-center px-4 relative z-10">
        Phần thưởng đính kèm theo giá trị như đã hứa nhé !
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="mt-6 text-[#3D2C24]/60 hover:text-[#FF85A1] transition-colors flex items-center justify-center gap-2 mx-auto font-sans text-xs font-bold uppercase tracking-widest relative z-10"
      >
        <RefreshCw className="w-4 h-4" /> Xem lại từ đầu
      </motion.button>
    </motion.div>
  );
}
