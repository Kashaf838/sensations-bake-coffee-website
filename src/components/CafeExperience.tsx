import { Coffee, Cake, Heart, Clock, Compass, Users } from "lucide-react";
import { assets } from "../data/assets";

export function CafeExperience() {
  const experiences = [
    {
      pillar: "COFFEE",
      tagline: "Slow down with a cup worth savouring.",
      description: "From cold brews and rich mocha coffees to refreshing fruit blends, every beverage is made fresh for your taste.",
      icon: Coffee
    },
    {
      pillar: "BAKES",
      tagline: "Something sweet, fresh and beautifully served.",
      description: "Carefully curated sweet treats, cakes, cupcakes, and warm savory snacks displayed fresh at our counter every single day.",
      icon: Cake
    },
    {
      pillar: "MOMENTS",
      tagline: "Meet, relax, catch up or simply enjoy your own café time.",
      description: "A welcoming, comfortable space in Rahim Yar Khan designed for late evening catch-ups, dessert runs, or personal moments of quiet.",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-32 bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
            The Sensations Atmosphere
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-tight mb-5">
            Your Next Favourite Café Moment
          </h2>
          <p className="text-base sm:text-lg text-[#4A3B32] dark:text-[#DDD3C7] font-normal leading-relaxed">
            More than just coffee and pastries — a warm, modern corner in Zamindara, Rahim Yar Khan where quality, flavor, and relaxed conversation meet.
          </p>
        </div>

        {/* 3 Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.pillar}
                className="bg-[#FFFFFF] dark:bg-[#1A120D] p-8 rounded-3xl border border-[#231711]/8 dark:border-[#FAF7F2]/8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-semibold tracking-widest text-[#8C6D58] dark:text-[#C59445]">
                      0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F5EFEB] dark:bg-[#251A13] flex items-center justify-center text-[#C59445]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#C59445] block mb-2">
                    {exp.pillar}
                  </span>

                  <h3 className="font-serif text-2xl font-semibold text-[#231711] dark:text-[#FAF7F2] leading-snug mb-3">
                    {exp.tagline}
                  </h3>

                  <p className="text-sm text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#231711]/5 dark:border-[#FAF7F2]/5 flex items-center gap-2 text-xs text-[#8C6D58] dark:text-[#B59E8D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59445]" />
                  <span>Rahim Yar Khan Experience</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Wide Ambient Interior Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 aspect-[21/9] min-h-[300px] flex items-center bg-[#160E09]">
          <img
            src={assets.hero.interior}
            alt="Interior of Sensations Bake and Coffee House"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#160E09]/95 via-[#160E09]/65 to-transparent" />
          
          <div className="relative z-10 p-8 sm:p-12 max-w-xl text-[#FAF7F2]">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E5B869] block mb-2">
              Welcoming Daily
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal leading-snug mb-3">
              Open 10:00 AM – 1:00 AM Every Single Day
            </h3>
            <p className="text-xs sm:text-sm text-[#DDD3C7] leading-relaxed mb-6">
              Whether you're starting your morning with rich espresso, seeking an afternoon pick-me-up, or enjoying late-night conversations with cake and cold coffee.
            </p>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider underline decoration-[#C59445] underline-offset-4 hover:text-[#E5B869] transition-colors"
            >
              <span>Find us near Subway, Zamindara</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
