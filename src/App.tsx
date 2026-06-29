import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import WelcomeScreen from './components/WelcomeScreen';
import ReasonsScreen from './components/ReasonsScreen';
import LoveMeterScreen from './components/LoveMeterScreen';
import RewardScreen from './components/RewardScreen';

export default function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleRestart = () => {
    setStep(0);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-[#FFFBF8] text-[#3D2C24] font-serif">
      {/* Decorative Background Stamp */}
      <div className="absolute -bottom-20 -left-20 opacity-[0.03] text-[300px] md:text-[400px] font-sans font-black italic select-none pointer-events-none leading-none">
        LOVELY
      </div>

      {/* Top Navigation Mockup */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 md:p-10 z-10 pointer-events-none">
        <div className="flex flex-col hidden md:flex">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold opacity-60">The Bestie Awards • 2026</span>
          <span className="text-xl italic mt-1 font-serif"> By ox đẹp trai nhất quả đất</span>
        </div>
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="flex flex-col items-end">
            <span className="font-sans text-[10px] uppercase font-bold">Status</span>
            <span className="text-xs text-[#FF6B6B] font-sans">● Extremely Loved</span>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#3D2C24] flex items-center justify-center text-[10px] font-sans font-bold">
            SEAL
          </div>
        </div>
      </nav>

      {/* Left Sidebar (Vertical Text) */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-12 hidden md:flex pointer-events-none">
        <span className="[writing-mode:vertical-rl] uppercase tracking-[0.5em] text-[9px] opacity-40 font-sans font-bold">Yêu em, mãi yêu em</span>
        <div className="w-px h-24 bg-[#3D2C24] opacity-20"></div>
        <span className="[writing-mode:vertical-rl] uppercase tracking-[0.5em] text-[9px] opacity-40 font-sans font-bold">2 empe xink iu của ba</span>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && <WelcomeScreen key="welcome" onNext={handleNext} />}
          {step === 1 && <ReasonsScreen key="reasons" onNext={handleNext} />}
          {step === 2 && <LoveMeterScreen key="meter" onNext={handleNext} />}
          {step === 3 && <RewardScreen key="reward" onRestart={handleRestart} />}
        </AnimatePresence>
      </div>
    </main>
  );
}
