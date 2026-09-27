import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { assets } from "../data/assets";

export function GallerySection() {
  const [filter, setFilter] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const categories = ["All", "Interior & Vibe", "Specialty Drinks", "Fresh Bakes", "Desserts & Sweets"];

  const filteredItems =
    filter === "All"
      ? assets.gallery
      : assets.gallery.filter((item) => item.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") setActiveLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % assets.gallery.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + assets.gallery.length) % assets.gallery.length
            : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex]);

  // Touch swipe support for mobile lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || activeLightboxIndex === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe Right -> Prev
        setActiveLightboxIndex(
          (activeLightboxIndex - 1 + assets.gallery.length) % assets.gallery.length
        );
      } else {
        // Swipe Left -> Next
        setActiveLightboxIndex((activeLightboxIndex + 1) % assets.gallery.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#231711]/10 dark:border-[#FAF7F2]/10 pb-6">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
              Visual Impressions
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight">
              A Glimpse Inside Sensations
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59445] ${
                  filter === cat
                    ? "bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07]"
                    : "bg-[#F5EFEB] dark:bg-[#1A120D] text-[#4A3B32] dark:text-[#DDD3C7] hover:bg-[#231711]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Varied Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            const originalIndex = assets.gallery.findIndex((g) => g.id === item.id);
            // Sizing distribution for editorial masonry look
            let spanClass = "lg:col-span-4 aspect-[4/3]";
            if (index === 0) spanClass = "sm:col-span-2 lg:col-span-8 aspect-[16/10]";
            else if (index === 1) spanClass = "lg:col-span-4 aspect-[4/5]";
            else if (index === 2) spanClass = "lg:col-span-4 aspect-[1/1]";
            else if (index === 3) spanClass = "lg:col-span-4 aspect-[4/3]";
            else if (index === 4) spanClass = "lg:col-span-4 aspect-[4/5]";

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(originalIndex)}
                className={`group relative rounded-3xl overflow-hidden bg-[#F5EFEB] dark:bg-[#1C120C] cursor-pointer border border-[#231711]/10 dark:border-[#FAF7F2]/10 shadow-xs hover:shadow-2xl transition-all duration-300 ${spanClass}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5B869] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs text-white shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Swipe and Keyboard Nav */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            aria-label="Close image modal"
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex(
                (activeLightboxIndex - 1 + assets.gallery.length) % assets.gallery.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={assets.gallery[activeLightboxIndex].src}
              alt={assets.gallery[activeLightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-5 text-center text-white max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#E5B869] font-medium block">
                {assets.gallery[activeLightboxIndex].category} · {activeLightboxIndex + 1} of {assets.gallery.length}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                {assets.gallery[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD3C7] mt-1">
                {assets.gallery[activeLightboxIndex].caption}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveLightboxIndex((activeLightboxIndex + 1) % assets.gallery.length);
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
