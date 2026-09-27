import { useState } from "react";
import { Coffee, Cake, Users, ArrowUpRight } from "lucide-react";
import { assets } from "../data/assets";

export function WhyVisitSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      word: "COFFEE",
      tagline: "For your daily caffeine ritual.",
      detail: "Signature cold coffees, dark mocha layers, iced frappes, and rich barista espresso prepared fresh each day to fuel morning focus or late-night thoughts.",
      image: assets.menu.mochaColdCoffee,
      icon: Coffee
    },
    {
      word: "BAKES",
      tagline: "For something worth treating yourself to.",
      detail: "From our warm chicken cheese donuts to celebratory cakes, brownies, and cream cupcakes beautifully displayed in the lighted bakery counter.",
      image: assets.menu.bakeryCakes,
      icon: Cake
    },
    {
      word: "MOMENTS",
      tagline: "For conversations, catch-ups and late-night cravings.",
      detail: "Open until 1:00 AM daily in Zamindara Colony, offering a welcoming atmosphere for friendly catch-ups, sweet cravings, and relaxed table moments.",
      image: assets.hero.interior,
      icon: Users
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
            Why Sensations
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#231711] dark:text-[#FAF7F2]">
            Three Reasons to Visit Us in Rahim Yar Khan
          </h2>
        </div>

        {/* 3 Large Typographic Rows / Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Typographic Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.word}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-8 rounded-3xl border cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-[#F5EFEB] dark:bg-[#1C120C] border-[#C59445]/50 shadow-md translate-x-2"
                      : "bg-[#FFFFFF] dark:bg-[#18100B] border-[#231711]/8 dark:border-[#FAF7F2]/8 hover:border-[#C59445]/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#C59445] font-semibold tracking-wider">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#231711] dark:text-[#FAF7F2]">
                        {pillar.word}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-[#FAF7F2] dark:bg-[#221812] text-[#C59445]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="font-serif text-lg text-[#8C6D58] dark:text-[#D4B69E] italic mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed max-w-xl">
                    {pillar.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visual Canvas Display */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 aspect-[3/4] bg-[#221812]">
              <img
                src={pillars[activeTab].image}
                alt={pillars[activeTab].word}
                key={pillars[activeTab].word}
                className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2]">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E5B869] block mb-1">
                  Sensations Experience · 0{activeTab + 1}
                </span>
                <h4 className="font-serif text-2xl font-semibold mb-1">
                  {pillars[activeTab].word}
                </h4>
                <p className="text-xs text-white/80 line-clamp-2">
                  {pillars[activeTab].tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
