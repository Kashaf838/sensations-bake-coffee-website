import { useState } from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { assets } from "../data/assets";
import { businessInfo } from "../data/business";

interface ProductSpotlightProps {
  onOpenContact: () => void;
}

export function ProductSpotlight({ onOpenContact }: ProductSpotlightProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const spotlights = [
    {
      themeLabel: "THE COFFEE BREAK",
      name: "Mocha Cold Coffee",
      tagline: "Dark espresso meet velvety chilled cocoa and cold milk foam.",
      copy: "One of the featured coffee favourites on the Sensations menu. Poured cold over crystal ice with delicate cocoa dusting, perfectly balanced for afternoon and late-night cravings.",
      image: assets.menu.mochaColdCoffee,
      serving: "Served Chilled in Glassware",
      category: "Cold Coffee Specialty"
    },
    {
      themeLabel: "THE SAVORY BAKE",
      name: "Chicken Cheese Donut",
      tagline: "Golden, crisp bakery crust loaded with seasoned chicken & melted mozzarella.",
      copy: "An iconic savory hallmark of the Sensations counter. Baked warm until the cheese pulls effortlessly, delivering a comforting twist on artisan baking in Rahim Yar Khan.",
      image: assets.menu.chickenCheeseDonut,
      serving: "Served Warm from the Oven",
      category: "Artisan Savory Bake"
    },
    {
      themeLabel: "THE SWEET INDULGENCE",
      name: "Caramel Frappe",
      tagline: "Iced blended coffee ribbons swirled with rich golden caramel.",
      copy: "Indulgent and refreshing, crowned with freshly whipped cream and golden butterscotch drizzle. A beloved cold drink for sweet afternoon gatherings.",
      image: assets.menu.caramelFrappe,
      serving: "Blended Ice & Whipped Crown",
      category: "Frappe Beverage"
    },
    {
      themeLabel: "THE FRESH REFRESHMENT",
      name: "Strawberry Smoothie",
      tagline: "Pure sun-ripened strawberry puree blended with chilled velvet base.",
      copy: "Vibrant, naturally refreshing, and smoothly blended to soothe warm evenings in Rahim Yar Khan. Handcrafted to order at the drinks bar.",
      image: assets.menu.strawberrySmoothie,
      serving: "Chilled Smoothie Glass",
      category: "Fruit Refreshment"
    }
  ];

  const current = spotlights[selectedIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFEB] dark:bg-[#160E0A] text-[#231711] dark:text-[#FAF7F2] transition-colors relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 select-none pointer-events-none opacity-5 dark:opacity-10 text-[18vw] font-serif font-black text-[#231711] dark:text-[#FAF7F2] leading-none whitespace-nowrap">
        SPOTLIGHT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-[#231711]/10 dark:border-[#FAF7F2]/10 pb-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
              Featured Item Spotlight
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#231711] dark:text-[#FAF7F2] tracking-tight">
              {current.themeLabel}
            </h2>
          </div>

          {/* Interactive Switcher */}
          <div className="flex items-center gap-2">
            {spotlights.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setSelectedIndex(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  selectedIndex === idx
                    ? "bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#231711] font-semibold shadow-xs"
                    : "bg-[#FAF7F2] dark:bg-[#221812] text-[#8C6D58] dark:text-[#B59E8D] hover:bg-[#231711]/10"
                }`}
                aria-label={`View ${item.name}`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Big Composition Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Product Information */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C59445] dark:text-[#E5B869] block mb-2">
              {current.category}
            </span>

            <h3 className="font-serif text-3xl sm:text-5xl font-semibold text-[#231711] dark:text-[#FAF7F2] leading-tight mb-4">
              {current.name}
            </h3>

            <p className="font-serif text-lg text-[#8C6D58] dark:text-[#D4B69E] italic mb-6 leading-snug">
              "{current.tagline}"
            </p>

            <p className="text-sm text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed mb-8">
              {current.copy}
            </p>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#221812] border border-[#231711]/8 dark:border-[#FAF7F2]/8 mb-8 text-xs text-[#8C6D58] dark:text-[#B59E8D] flex items-center justify-between">
              <span>{current.serving}</span>
              <span className="font-medium text-[#231711] dark:text-[#FAF7F2]">Freshly Prepared</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#231711] dark:bg-[#C59445] hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] text-[#FAF7F2] dark:text-[#120B07] text-xs font-semibold tracking-wide transition-all shadow-md"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${businessInfo.rawPhone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FAF7F2] dark:bg-[#221812] border border-[#231711]/15 dark:border-[#FAF7F2]/15 text-[#231711] dark:text-[#FAF7F2] text-xs font-semibold hover:border-[#C59445] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59445]" />
                <span>Call to Order</span>
              </a>
            </div>
          </div>

          {/* Right: Large Editorial Photograph */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 bg-[#FAF7F2] dark:bg-[#1A120D] aspect-[4/3] group">
              <img
                src={current.image}
                alt={current.name}
                key={current.image}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

              {/* Floating Editorial Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[#FAF7F2] text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5B869] animate-pulse" />
                  <span className="font-medium tracking-wide">Sensations Feature Pick</span>
                </div>
                <span className="text-white/80 font-mono">0{selectedIndex + 1} / 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
