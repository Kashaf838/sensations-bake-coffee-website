import { ArrowRight, Sparkles, Cake } from "lucide-react";
import { assets } from "../data/assets";

interface BakedFreshSectionProps {
  onOpenContact: () => void;
}

export function BakedFreshSection({ onOpenContact }: BakedFreshSectionProps) {
  return (
    <section
      id="bakery"
      className="py-20 sm:py-32 bg-[#F5EFEB] dark:bg-[#160E0A] text-[#231711] dark:text-[#FAF7F2] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Photography */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              {/* Main Showcase Image */}
              <div className="col-span-8 rounded-3xl overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 bg-[#FAF7F2] dark:bg-[#1C120C]">
                <img
                  src={assets.menu.bakeryCakes}
                  alt="Sensations boutique pastry showcase with cakes and sweet treats"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlapping Savory Pastry Image */}
              <div className="col-span-7 -ml-16 sm:-ml-24 -mt-16 z-10">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F5EFEB] dark:border-[#160E0A] bg-[#FAF7F2] dark:bg-[#1C120C]">
                  <img
                    src={assets.menu.chickenCheeseDonut}
                    alt="Artisan chicken cheese donut freshly baked"
                    loading="lazy"
                    className="w-full aspect-square object-cover hover:scale-106 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Editorial Tag Floating */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07] text-[11px] font-semibold tracking-wide shadow-md">
                  <Sparkles className="w-3 h-3 text-[#E5B869] dark:text-[#C59445]" />
                  <span>Fresh daily from the oven</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-3">
              The Sensations Bakery
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-[1.05] mb-6">
              Fresh Bakes. <br />
              <span className="italic font-light text-[#8C6D58] dark:text-[#E5B869]">Sweet Moments.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed mb-6 font-normal">
              From beautifully presented cakes and baked favourites to indulgent desserts, there is always something worth discovering.
            </p>

            <p className="text-xs sm:text-sm text-[#8C6D58] dark:text-[#B59E8D] leading-relaxed mb-8">
              Whether grabbing our acclaimed Chicken Cheese Donut for a savory afternoon craving, choosing a rich chocolate fudge sundae, or ordering handcrafted celebration cakes, every item is finished with dedicated craftsmanship and pride.
            </p>

            {/* Editorial highlights list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C59445] mt-2 shrink-0" />
                <div>
                  <h4 className="font-serif text-lg font-semibold">Artisan Counter Presentation</h4>
                  <p className="text-xs text-[#8C6D58] dark:text-[#B59E8D]">
                    Illuminated showcase featuring cupcakes, layered gateaux, and sweet dessert cups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#C59445] mt-2 shrink-0" />
                <div>
                  <h4 className="font-serif text-lg font-semibold">Savory & Sweet Balance</h4>
                  <p className="text-xs text-[#8C6D58] dark:text-[#B59E8D]">
                    Pairs seamlessly with specialty cold coffee or refreshing fruit smoothies.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07] text-xs uppercase tracking-wider font-semibold hover:bg-[#3A2A20] transition-all shadow-md"
            >
              <span>Inquire for Pre-Orders & Cakes</span>
              <ArrowRight className="w-4 h-4 text-[#C59445]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
