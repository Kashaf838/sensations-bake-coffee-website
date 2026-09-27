import { useRef } from "react";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { businessInfo } from "../data/business";
import { reviewsData } from "../data/menu";

export function CustomerLove() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews"
      className="py-20 sm:py-32 bg-[#F5EFEB] dark:bg-[#160E0A] text-[#231711] dark:text-[#FAF7F2] transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
              Patron Sentiments
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-tight">
              Customer Love
            </h2>
          </div>

          {/* Large Typography Rating Box */}
          <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#FAF7F2] dark:bg-[#1C120C] border border-[#231711]/10 dark:border-[#FAF7F2]/10 shadow-sm self-start lg:self-auto">
            <div className="flex flex-col pr-6 border-r border-[#231711]/10 dark:border-[#FAF7F2]/10">
              <span className="font-serif text-5xl sm:text-6xl font-bold leading-none text-[#231711] dark:text-[#FAF7F2]">
                4.3
              </span>
              <div className="flex items-center gap-1 text-[#C59445] mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C59445]" />
                ))}
              </div>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#231711] dark:text-[#FAF7F2] block">
                95 Google Reviews
              </span>
              <span className="text-xs text-[#8C6D58] dark:text-[#B59E8D] block mt-0.5">
                Verified community feedback
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <p className="text-xs text-[#8C6D58] dark:text-[#B59E8D]">
            Paraphrased praise reflecting verified Google reviews for coffee, cakes, presentation, and service.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              aria-label="Scroll reviews left"
              className="p-2.5 rounded-full bg-[#FAF7F2] dark:bg-[#1C120C] border border-[#231711]/10 dark:border-[#FAF7F2]/10 hover:border-[#C59445] text-[#231711] dark:text-[#FAF7F2] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll reviews right"
              className="p-2.5 rounded-full bg-[#FAF7F2] dark:bg-[#1C120C] border border-[#231711]/10 dark:border-[#FAF7F2]/10 hover:border-[#C59445] text-[#231711] dark:text-[#FAF7F2] transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Review Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {reviewsData.map((review, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[300px] sm:w-[360px] p-7 rounded-3xl bg-[#FAF7F2] dark:bg-[#1C120C] border border-[#231711]/8 dark:border-[#FAF7F2]/8 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C59445]">
                    {[...Array(5)].map((_, starI) => (
                      <Star key={starI} className="w-3.5 h-3.5 fill-[#C59445]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#C59445]/40" />
                </div>

                <p className="font-serif text-xl font-medium leading-snug text-[#231711] dark:text-[#FAF7F2] mb-4">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#231711]/5 dark:border-[#FAF7F2]/5 flex items-center justify-between text-xs text-[#8C6D58] dark:text-[#B59E8D]">
                <span className="font-semibold text-[#231711] dark:text-[#FAF7F2]">
                  {review.highlight}
                </span>
                <span className="font-mono text-[11px]">{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA: See all reviews */}
        <div className="mt-12 text-center">
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#FAF7F2] dark:text-[#120B07] text-xs uppercase tracking-wider font-semibold hover:bg-[#3A2A20] transition-all shadow-sm"
          >
            <span>See all reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
