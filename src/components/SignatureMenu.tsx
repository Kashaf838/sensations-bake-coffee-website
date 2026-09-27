import { useState } from "react";
import { ArrowUpRight, Phone, Sparkles, X, Info } from "lucide-react";
import { signatureMenuItems, MenuItem } from "../data/menu";
import { businessInfo } from "../data/business";

interface SignatureMenuProps {
  onOpenContact: () => void;
}

export function SignatureMenu({ onOpenContact }: SignatureMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: "ALL", label: "All Items" },
    { id: "COFFEE", label: "Coffee" },
    { id: "COLD DRINKS", label: "Cold Drinks" },
    { id: "BAKES", label: "Bakes" },
    { id: "DESSERTS", label: "Desserts" },
  ];

  const filteredItems = signatureMenuItems.filter((item) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "COFFEE") return item.category === "coffee";
    if (activeCategory === "COLD DRINKS") return item.category === "smoothies";
    if (activeCategory === "BAKES") return item.category === "bakes";
    if (activeCategory === "DESSERTS") return item.category === "desserts";
    return true;
  });

  return (
    <section id="menu" className="py-20 sm:py-32 bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
            Handcrafted Selections
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-tight mb-4">
            Signature Picks
          </h2>
          <p className="text-sm sm:text-base text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed">
            From chilled barista espresso to warm savory bakery highlights, explore the signature offerings known and requested at Sensations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center mb-12 overflow-x-auto pb-2 no-scrollbar">
          <div className="inline-flex items-center p-1.5 bg-[#F5EFEB] dark:bg-[#1A120D] rounded-full border border-[#231711]/10 dark:border-[#FAF7F2]/10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445] ${
                    isActive
                      ? "bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07] shadow-sm"
                      : "text-[#4A3B32] dark:text-[#DDD3C7] hover:text-[#231711] dark:hover:text-[#FAF7F2]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid (Responsive, Editorial Hover Animations) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-[#FFFFFF] dark:bg-[#1A120D] rounded-3xl overflow-hidden border border-[#231711]/8 dark:border-[#FAF7F2]/8 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container with subtle zoom on hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5EFEB] dark:bg-[#221812]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                {/* Category label revealed / highlighted */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF7F2]/90 dark:bg-[#120B07]/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-[#231711] dark:text-[#FAF7F2] shadow-xs">
                  {item.categoryLabel}
                </div>

                {/* Subtle bottom serving badge */}
                <div className="absolute bottom-3 left-3 text-xs text-white/90 drop-shadow-sm font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869]" />
                  <span>{item.servingStyle}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#231711] dark:text-[#FAF7F2] group-hover:text-[#8C6D58] dark:group-hover:text-[#E5B869] transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <div className="p-1 rounded-full text-[#8C6D58] dark:text-[#B59E8D] group-hover:text-[#231711] dark:group-hover:text-[#FAF7F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#231711]/5 dark:border-[#FAF7F2]/5 flex items-center justify-between text-xs text-[#8C6D58] dark:text-[#B59E8D]">
                  <span className="font-mono text-[11px] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="font-medium text-[#231711] dark:text-[#FAF7F2] group-hover:text-[#C59445] transition-colors flex items-center gap-1">
                    <span>Tasting Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Verified Menu Disclaimer (No fake prices) */}
        <div className="mt-14 p-5 rounded-2xl bg-[#F5EFEB] dark:bg-[#1A120D] border border-[#231711]/10 dark:border-[#FAF7F2]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4A3B32] dark:text-[#DDD3C7]">
          <div className="flex items-start sm:items-center gap-3">
            <Info className="w-4 h-4 text-[#C59445] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>Verified Menu Selections:</strong> Listed items reflect verified public highlights from Sensations Bake and Coffee House. For daily pricing, seasonal specials, or celebration cake bookings, please contact the counter directly.
            </span>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07] font-semibold text-xs hover:bg-[#3A2A20] transition-colors"
          >
            Inquire at Counter
          </button>
        </div>
      </div>

      {/* Tasting Notes Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.name}
        >
          <div
            className="bg-[#FAF7F2] dark:bg-[#1C120C] text-[#231711] dark:text-[#FAF7F2] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#221812]">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 text-xs text-white/90 drop-shadow">
                <span>{selectedItem.categoryLabel}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#C59445] mb-1">
                <span>{selectedItem.tag}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedItem.servingStyle}</span>
              </div>

              <h3 className="font-serif text-3xl font-semibold mb-3">
                {selectedItem.name}
              </h3>

              <p className="text-sm text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed mb-4">
                {selectedItem.description}
              </p>

              {selectedItem.presentationNotes && (
                <div className="p-4 rounded-xl bg-[#F5EFEB] dark:bg-[#251A13] border border-[#231711]/5 dark:border-[#FAF7F2]/5 text-xs text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed mb-6">
                  <strong className="text-[#231711] dark:text-[#FAF7F2] block mb-1">
                    Serving & Presentation Notes:
                  </strong>
                  {selectedItem.presentationNotes}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#231711]/10 dark:border-[#FAF7F2]/10">
                <a
                  href={`tel:${businessInfo.rawPhone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#231711] dark:bg-[#C59445] hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] text-[#FAF7F2] dark:text-[#120B07] font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Order ({businessInfo.phone})</span>
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 text-xs font-medium text-[#4A3B32] dark:text-[#DDD3C7] hover:underline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
