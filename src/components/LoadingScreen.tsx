import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 900ms display, then 400ms smooth fadeout
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 400);
      return () => clearTimeout(removeTimer);
    }, 950);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#120B07] text-[#FAF7F2] transition-opacity duration-400 ease-in-out pointer-events-none select-none ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center px-4">
        {/* Brand Monogram / Accent */}
        <div className="w-12 h-12 rounded-full border border-[#C59445]/40 flex items-center justify-center mb-5 animate-pulse">
          <span className="font-serif text-xl font-light text-[#E5B869] italic">S</span>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-semibold text-[#FAF7F2] uppercase">
          SENSATIONS
        </h1>

        {/* Subtitle */}
        <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#C59445] font-medium mt-2">
          BAKE & COFFEE HOUSE
        </p>

        {/* Subtle Line Accent */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C59445] to-transparent mt-6 opacity-80" />

        <span className="text-[10px] tracking-widest uppercase text-[#B59E8D] mt-3 font-mono">
          Rahim Yar Khan
        </span>
      </div>
    </div>
  );
}
