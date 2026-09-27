import { useState } from "react";
import { Coffee, ArrowRight, Phone, Sparkles } from "lucide-react";
import { assets } from "../data/assets";
import { businessInfo } from "../data/business";

interface DrinksSectionProps {
  onOpenContact: () => void;
}

export function DrinksSection({ onOpenContact }: DrinksSectionProps) {
  const [activeDrink, setActiveDrink] = useState<number>(0);

  const drinks = [
    {
      name: "Mocha Cold Coffee",
      tagline: "Bold espresso meets chilled dark chocolate and velvety milk foam.",
      detail: "Layered chilled beverage crafted with premium espresso shots, bittersweet chocolate sauce, and cold velvety foam with delicate cocoa dusting.",
      image: assets.menu.mochaColdCoffee,
    },
    {
      name: "Caramel Frappe",
      tagline: "Rich buttery caramel ribbons blended with iced coffee and whipped cream.",
      detail: "Decadent blended ice drink swirled with real caramel drizzle and crowned with a generous swirl of fresh whipped cream.",
      image: assets.menu.caramelFrappe,
    },
    {
      name: "Chocolate Frappe",
      tagline: "Velvety iced blended cocoa indulgence crafted for chocolate lovers.",
      detail: "Deep Belgian chocolate frappe blended to an icy smooth consistency and finished with rich chocolate curls.",
      image: assets.menu.chocolateFrappe,
    },
    {
      name: "Strawberry Smoothie",
      tagline: "Chilled sun-ripened strawberry blend for refreshing fruit moments.",
      detail: "Silky, revitalizing fruit smoothie crafted fresh with pure strawberry puree and chilled to smooth perfection.",
      image: assets.menu.strawberrySmoothie,
    },
  ];

  return (
    <section
      id="drinks"
      className="py-20 sm:py-32 bg-[#120B07] text-[#FAF7F2] relative overflow-hidden transition-colors"
    >
      {/* Subtle decorative background watermark typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-5 text-[15vw] font-serif font-black tracking-widest text-[#FAF7F2] leading-none whitespace-nowrap">
        COFFEE · BAKES · MOMENTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E5B869] block mb-3">
            Specialty Beverages
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-tight mb-4">
            Stay for the Coffee.
          </h2>
          <p className="text-sm sm:text-base text-[#DDD3C7] font-normal leading-relaxed">
            From chilled barista espresso to refreshing fruit blends, make your next café moment in Rahim Yar Khan a little more special.
          </p>
        </div>

        {/* Big Composition Beverage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Beverage List / Switcher */}
          <div className="lg:col-span-5 space-y-3">
            {drinks.map((drink, index) => {
              const isSelected = activeDrink === index;
              return (
                <div
                  key={drink.name}
                  onClick={() => setActiveDrink(index)}
                  className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#FAF7F2]/10 border-[#C59445]/60 shadow-xl translate-x-2"
                      : "bg-transparent border-[#FAF7F2]/5 hover:bg-[#FAF7F2]/5 hover:border-[#FAF7F2]/15"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs text-[#E5B869] font-medium">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60">
                      Cold Bar
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#FAF7F2]">
                    {drink.name}
                  </h3>

                  <p className="text-xs text-[#DDD3C7] mt-1 line-clamp-1">
                    {drink.tagline}
                  </p>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#FAF7F2]/10 text-xs text-[#E5B869] flex items-center justify-between">
                      <span className="line-clamp-1">{drink.detail}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Feature Visual */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-[#1C120C] border border-[#FAF7F2]/15 shadow-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px]">
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E5B869]">
                    Sensations Handcrafted Drink
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF7F2] mt-0.5">
                    {drinks[activeDrink].name}
                  </h3>
                </div>

                <a
                  href={`tel:${businessInfo.rawPhone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 border border-[#FAF7F2]/20 text-xs text-[#FAF7F2] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C59445]" />
                  <span>Call to Order</span>
                </a>
              </div>

              {/* Large Image Showcase with Warm Glow */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] w-full my-auto bg-black/40 shadow-inner">
                <img
                  src={drinks[activeDrink].image}
                  alt={drinks[activeDrink].name}
                  key={drinks[activeDrink].image}
                  className="w-full h-full object-cover object-center animate-in fade-in zoom-in-95 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#FAF7F2] flex items-center justify-between">
                  <span className="font-light italic text-[#E5B869]">{drinks[activeDrink].tagline}</span>
                  <span className="text-[#FAF7F2]/70 font-mono">Sensations Barista</span>
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#DDD3C7] max-w-lg leading-relaxed">
                  {drinks[activeDrink].detail}
                </p>
                <button
                  onClick={onOpenContact}
                  className="shrink-0 px-6 py-2.5 rounded-full bg-[#C59445] hover:bg-[#DFB268] text-[#120B07] text-xs uppercase tracking-wider font-semibold transition-all shadow-md"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
