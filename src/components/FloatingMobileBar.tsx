import { Phone, Navigation, UtensilsCrossed } from "lucide-react";
import { businessInfo } from "../data/business";

export function FloatingMobileBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[env(safe-area-inset-bottom,12px)] pt-2 bg-[#FAF7F2]/95 dark:bg-[#120B07]/95 backdrop-blur-md border-t border-[#231711]/10 dark:border-[#FAF7F2]/10 transition-colors"
      aria-label="Quick mobile actions"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mb-1">
        {/* Call Button */}
        <a
          href={`tel:${businessInfo.rawPhone}`}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#231711] dark:bg-[#2C1F18] text-[#FAF7F2] font-semibold text-xs active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59445] shrink-0" />
          <span>Call</span>
        </a>

        {/* Directions Button */}
        <a
          href={businessInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#F5EFEB] dark:bg-[#1A120D] text-[#231711] dark:text-[#FAF7F2] border border-[#231711]/10 dark:border-[#FAF7F2]/10 font-semibold text-xs active:scale-95 transition-all shadow-xs"
        >
          <Navigation className="w-3.5 h-3.5 text-[#C59445] shrink-0" />
          <span>Directions</span>
        </a>

        {/* Menu Jump */}
        <a
          href="#menu"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#C59445] text-[#120B07] font-semibold text-xs active:scale-95 transition-all shadow-xs"
        >
          <UtensilsCrossed className="w-3.5 h-3.5 shrink-0" />
          <span>Menu</span>
        </a>
      </div>
    </div>
  );
}
