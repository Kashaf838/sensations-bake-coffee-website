import { ArrowDown, ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { businessInfo } from "../data/business";
import { assets } from "../data/assets";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] pt-12 pb-16 lg:py-20 transition-colors"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C59445]/10 dark:bg-[#C59445]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#8C6D58]/10 dark:bg-[#8C6D58]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Editorial Typography & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C59445] animate-pulse" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold text-[#8C6D58] dark:text-[#E5B869]">
                SENSATIONS BAKE & COFFEE HOUSE
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#231711] dark:text-[#FAF7F2] leading-[1.02] mb-6">
              Coffee. <br />
              <span className="italic font-light text-[#8C6D58] dark:text-[#E5B869]">Bakes.</span> <br />
              Moments <br />
              Worth Savoring.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4A3B32] dark:text-[#DDD3C7] font-normal leading-relaxed mb-8 max-w-lg">
              Discover coffee, fresh bakes and sweet favourites in the heart of Rahim Yar Khan. From morning espresso to late-night frappes and artisan pastries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#231711] dark:bg-[#C59445] hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] text-[#FAF7F2] dark:text-[#120B07] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FAF7F2] dark:bg-[#1A120D] hover:bg-[#F5EFEB] dark:hover:bg-[#241912] text-[#231711] dark:text-[#FAF7F2] border border-[#231711]/20 dark:border-[#FAF7F2]/20 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4 text-[#C59445]" />
                <span>Visit Us</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-[#8C6D58] dark:text-[#E5B869] hover:underline underline-offset-4 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Order</span>
              </button>
            </div>

            {/* Micro Location Marker */}
            <div className="flex items-center gap-2 text-xs text-[#8C6D58] dark:text-[#B59E8D] border-t border-[#231711]/10 dark:border-[#FAF7F2]/10 pt-4">
              <MapPin className="w-3.5 h-3.5 text-[#C59445]" />
              <span>Colony, near One & Subway, Zamindara, Rahim Yar Khan</span>
            </div>
          </div>

          {/* RIGHT: Cinematic Composition Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 bg-[#160E09] aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5]">
              <img
                src={assets.hero.interior}
                alt={assets.hero.alt}
                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Editorial Floating Label 1: Rating */}
              <div className="absolute top-6 left-6 p-3 sm:p-4 rounded-2xl bg-[#FAF7F2]/90 dark:bg-[#120B07]/90 backdrop-blur-md border border-[#231711]/10 dark:border-[#FAF7F2]/10 shadow-lg text-[#231711] dark:text-[#FAF7F2]">
                <div className="flex items-center gap-1 text-[#C59445] mb-0.5">
                  <Star className="w-4 h-4 fill-[#C59445]" />
                  <span className="font-serif text-lg font-bold">4.3 ★</span>
                </div>
                <span className="text-[11px] font-medium text-[#8C6D58] dark:text-[#B59E8D] block">
                  95 Google Reviews
                </span>
              </div>

              {/* Editorial Floating Label 2: Hours */}
              <div className="absolute bottom-6 right-6 p-3 sm:p-4 rounded-2xl bg-[#FAF7F2]/90 dark:bg-[#120B07]/90 backdrop-blur-md border border-[#231711]/10 dark:border-[#FAF7F2]/10 shadow-lg text-[#231711] dark:text-[#FAF7F2] text-right">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C59445] block mb-0.5">
                  Welcoming Daily
                </span>
                <span className="font-serif text-lg font-bold block">
                  Open until 1:00 AM
                </span>
                <span className="text-[11px] text-[#8C6D58] dark:text-[#B59E8D] block">
                  Dine-in · Takeout · Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="#today"
            className="group flex flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] font-medium text-[#8C6D58] dark:text-[#B59E8D] hover:text-[#231711] dark:hover:text-[#FAF7F2] transition-colors"
          >
            <span>Scroll to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C59445] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
