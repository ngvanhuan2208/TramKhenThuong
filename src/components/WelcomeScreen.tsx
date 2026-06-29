import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="flex flex-col items-center justify-center text-center space-y-8 relative w-full"
    >
      {/* Left Sticker Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute -left-8 md:-left-24 top-1/4 w-20 h-28 md:w-32 md:h-40"
      >
        <img
          src="/images/hoian-street-1.jpg"
          alt="Street decoration"
          className="image-sticker w-full h-full animate-float-gentle"
        />
      </motion.div>

      {/* Right Sticker Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute -right-8 md:-right-24 bottom-1/4 w-20 h-28 md:w-32 md:h-40"
      >
        <img
          src="/images/hoian-street-2.jpg"
          alt="Street decoration"
          className="image-sticker w-full h-full animate-float-slow"
        />
      </motion.div>

      <div className="relative text-center">
        <div className="absolute -top-12 -left-10 md:-left-20 w-24 h-24 md:w-32 md:h-32 border border-[#FF85A1]/30 rounded-full flex items-center justify-center rotate-12">
          <span className="text-[8px] md:text-[10px] font-sans font-bold text-[#FF85A1] uppercase tracking-widest text-center px-2">Best Award<br/>Nguyễn Ngọc Tú Vy</span>
        </div>
        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-16 bg-[#FF85A1] text-white px-4 md:px-6 py-2 rounded-full font-sans text-[9px] md:text-[11px] font-bold uppercase tracking-tighter rotate-[-5deg] shadow-lg z-10">
          Award Winner 2026
        </div>

        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-6 opacity-80">Giấy chứng nhận danh giá nhất</p>
        <h1 className="text-6xl md:text-[110px] leading-[0.9] md:leading-[0.85] font-light mb-6 md:mb-8 font-serif">
          TRẠM KHEN <br/>
          <span className="italic font-normal text-[#FF85A1]">THƯỞNG</span>
        </h1>
        
        <p className="max-w-md mx-auto font-sans text-sm leading-relaxed opacity-70 mb-8">
          Chào mừng <strong className="text-[#3D2C24]">em bé đáng yêu nhất quả đất</strong> đã đến nhận thưởng vì những đóng góp to lớn trong việc làm anh yêu em hơn mỗi ngày.
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-[#3D2C24] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
      >
        Nhấn để bắt đầu nàooo <Heart className="w-4 h-4 fill-white" />
      </motion.button>
    </motion.div>
  );
}
