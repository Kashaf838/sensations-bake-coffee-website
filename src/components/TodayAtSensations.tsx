import { Clock, MapPin, Sparkles, Star } from "lucide-react";
import { businessInfo } from "../data/business";

export function TodayAtSensations() {
  return (
    <section
      aria-label="Today at Sensations"
      className="border-y border-[#231711]/10 dark:border-[#FAF7F2]/10 bg-[#F5EFEB]/80 dark:bg-[#18100B] py-5 px-4 sm:px-6 lg:px-8 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-4 text-xs">
        {/* Open Daily */}
        <div className="flex items-center gap-3">
          <div className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#B59E8D] block">
              Open Daily
            </span>
            <span className="font-serif text-sm font-semibold text-[#231711] dark:text-[#FAF7F2]">
              10:00 AM — 1:00 AM
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-8 bg-[#231711]/10 dark:bg-[#FAF7F2]/10" aria-hidden="true" />

        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#C59445] shrink-0" />
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#B59E8D] block">
              Location
            </span>
            <span className="font-serif text-sm font-semibold text-[#231711] dark:text-[#FAF7F2]">
              Zamindara, Rahim Yar Khan (near Subway & One)
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-8 bg-[#231711]/10 dark:bg-[#FAF7F2]/10" aria-hidden="true" />

        {/* Services */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#C59445] shrink-0" />
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#B59E8D] block">
              Services
            </span>
            <span className="font-serif text-sm font-semibold text-[#231711] dark:text-[#FAF7F2]">
              Dine-in • Takeout • Delivery
            </span>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden md:block w-px h-8 bg-[#231711]/10 dark:bg-[#FAF7F2]/10" aria-hidden="true" />

        {/* Rating */}
        <div className="flex items-center gap-3">
          <div className="flex items-center text-[#C59445]">
            <Star className="w-4 h-4 fill-[#C59445]" />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#B59E8D] block">
              Patron Rating
            </span>
            <span className="font-serif text-sm font-semibold text-[#231711] dark:text-[#FAF7F2]">
              4.3 ★ <span className="font-sans font-normal text-xs text-[#8C6D58] dark:text-[#B59E8D]">(95 Google Reviews)</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
