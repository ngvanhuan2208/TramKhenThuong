import { motion, type Variants } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

const reasons = [
  "Cười tươi rạng rỡ và xơm ox mỗi ngày✨",
  "Dạo này ngoan hơn và xink iu hơn 🥺",
  "Vượt KPI và hoành thành xuất sắc 189%",
  "Ăn chưa ngoan nhưng vẫn iu 🍜",
  "Và đơn giản vì... anh yêu em! ❤️"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function ReasonsScreen({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto relative py-8 md:py-0 px-4"
    >
      {/* Top Left Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="absolute -top-8 -left-8 md:top-8 md:-left-24 w-20 h-28 md:w-28 md:h-40"
      >
        <img
          src="/images/hoian-street-1.jpg"
          alt="Flowers"
          className="image-decoration w-full h-full rounded-lg animate-float-gentle opacity-70"
        />
      </motion.div>

      {/* Bottom Right Decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-24 w-20 h-28 md:w-28 md:h-40"
      >
        <img
          src="/images/flower-shop-1.jpg"
          alt="Flowers"
          className="image-decoration w-full h-full rounded-lg animate-sway-gentle opacity-70"
        />
      </motion.div>

      <p className="font-sans text-xs uppercase tracking-[0.4em] mb-4 opacity-80 text-center">Bảng đánh giá thành tích</p>
      <h2 className="text-4xl md:text-6xl font-light text-[#3D2C24] mb-10 text-center font-serif leading-tight">
        Lý do bé được <br/> <span className="italic text-[#FF85A1]">khen thưởng nè:</span>
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full space-y-3 mb-12 px-4"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-4 bg-white border border-[#3D2C24]/10 p-4 md:p-5 rounded-2xl shadow-sm hover:rotate-1 transition-transform"
          >
            <div className="bg-[#FF85A1]/10 p-2 rounded-full">
              <Star className="w-5 h-5 text-[#FF85A1] fill-[#FF85A1]" />
            </div>
            <span className="text-sm md:text-base font-sans font-medium text-[#3D2C24]">{reason}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="px-8 py-4 bg-[#FF85A1] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
      >
        Dạ ox, bước tiếp theo <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}
