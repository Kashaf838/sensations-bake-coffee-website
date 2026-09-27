import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Check, Copy, ExternalLink, Sparkles } from "lucide-react";
import { businessInfo } from "../data/business";

interface VisitSectionProps {
  onOpenContact: () => void;
}

export function VisitSection({ onOpenContact }: VisitSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(businessInfo.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="visit"
      className="py-20 sm:py-32 bg-[#FAF7F2] dark:bg-[#120B07] text-[#231711] dark:text-[#FAF7F2] transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business & Contact Information */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8C6D58] dark:text-[#C59445] block mb-2">
              Find & Contact
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight leading-tight mb-6">
              Your Next Coffee Stop
            </h2>
            <p className="text-base text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed mb-8">
              Sensations Bake and Coffee House is conveniently located in Zamindara Colony, right near One and Subway in Rahim Yar Khan. Welcoming you daily for breakfast coffee, afternoon pastries, or late-night dessert runs.
            </p>

            {/* Information Cards Stack */}
            <div className="space-y-4 mb-8">
              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-[#F5EFEB] dark:bg-[#1A120D] border border-[#231711]/8 dark:border-[#FAF7F2]/8 flex items-start gap-4 shadow-xs">
                <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] text-[#C59445] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#B59E8D]">
                      Café Location
                    </span>
                    <button
                      onClick={handleCopyAddress}
                      className="text-xs text-[#8C6D58] dark:text-[#B59E8D] hover:text-[#231711] dark:hover:text-[#FAF7F2] flex items-center gap-1 font-medium transition-colors"
                      title="Copy full address"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#231711] dark:text-[#FAF7F2]">
                    Sensations Bake and Coffee House
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3B32] dark:text-[#DDD3C7] mt-1 leading-relaxed">
                    {businessInfo.fullAddress}
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-3xl bg-[#F5EFEB] dark:bg-[#1A120D] border border-[#231711]/8 dark:border-[#FAF7F2]/8 flex items-start gap-4 shadow-xs">
                <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] text-[#C59445] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#B59E8D] block mb-1">
                    Opening Hours
                  </span>
                  <h4 className="font-serif text-xl font-semibold text-[#231711] dark:text-[#FAF7F2]">
                    10:00 AM — 1:00 AM Daily
                  </h4>
                  <p className="text-xs text-[#4A3B32] dark:text-[#DDD3C7] mt-1">
                    Open every day of the week, including weekends and late evening gatherings.
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-[#F5EFEB] dark:bg-[#1A120D] border border-[#231711]/8 dark:border-[#FAF7F2]/8 flex items-start gap-4 shadow-xs">
                <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] text-[#C59445] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8C6D58] dark:text-[#B59E8D] block mb-1">
                    Direct Phone
                  </span>
                  <a
                    href={`tel:${businessInfo.rawPhone}`}
                    className="font-serif text-2xl font-semibold text-[#231711] dark:text-[#FAF7F2] hover:text-[#C59445] dark:hover:text-[#E5B869] transition-colors"
                  >
                    {businessInfo.phone}
                  </a>
                  <p className="text-xs text-[#4A3B32] dark:text-[#DDD3C7] mt-1">
                    Direct phone line for takeaway orders, counter status, and table availability.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#231711] dark:bg-[#C59445] hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] text-[#FAF7F2] dark:text-[#120B07] font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${businessInfo.rawPhone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FAF7F2] dark:bg-[#1A120D] hover:bg-[#F5EFEB] dark:hover:bg-[#241912] text-[#231711] dark:text-[#FAF7F2] border border-[#231711]/20 dark:border-[#FAF7F2]/20 font-semibold text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#C59445]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Map-Style Visual */}
          <div className="lg:col-span-6">
            <div className="bg-[#F5EFEB] dark:bg-[#1A120D] rounded-3xl p-6 sm:p-8 border border-[#231711]/10 dark:border-[#FAF7F2]/10 shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#C59445]">
                    Rahim Yar Khan
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#231711] dark:text-[#FAF7F2] mt-0.5">
                    Zamindara Colony Area
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                    Open Now (10 AM - 1 AM)
                  </span>
                </div>
              </div>

              {/* Styled Map Landmark Graphic */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#E8E0D5] dark:bg-[#251A13] border border-[#231711]/10 dark:border-[#FAF7F2]/10 flex flex-col items-center justify-center p-6 text-center shadow-inner">
                {/* Visual landmark pin */}
                <div className="w-16 h-16 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#E5B869] dark:text-[#120B07] flex items-center justify-center shadow-2xl mb-4 animate-bounce duration-1000">
                  <MapPin className="w-8 h-8" />
                </div>

                <span className="font-serif text-2xl font-bold text-[#231711] dark:text-[#FAF7F2] mb-1">
                  Sensations Bake and Coffee House
                </span>
                <span className="text-xs text-[#4A3B32] dark:text-[#DDD3C7] max-w-sm mb-6">
                  Colony, near One and Subway, Zamindara, Rahim Yar Khan, 64200
                </span>

                <a
                  href={businessInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#231711] dark:bg-[#C59445] text-[#FAF7F2] dark:text-[#120B07] text-xs font-semibold hover:bg-[#3A2A20] dark:hover:bg-[#DFB268] transition-colors shadow-sm"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Services Provided Strip */}
              <div className="mt-6 pt-6 border-t border-[#231711]/10 dark:border-[#FAF7F2]/10">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#8C6D58] dark:text-[#C59445] block mb-3">
                  Services Provided
                </span>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] border border-[#231711]/5 dark:border-[#FAF7F2]/5">
                    <span className="text-base block mb-0.5">🍽️</span>
                    <span className="text-xs font-semibold text-[#231711] dark:text-[#FAF7F2] block">Dine-in</span>
                    <span className="text-[10px] text-[#8C6D58] dark:text-[#B59E8D]">Warm setting</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] border border-[#231711]/5 dark:border-[#FAF7F2]/5">
                    <span className="text-base block mb-0.5">🛍️</span>
                    <span className="text-xs font-semibold text-[#231711] dark:text-[#FAF7F2] block">Takeout</span>
                    <span className="text-[10px] text-[#8C6D58] dark:text-[#B59E8D]">Quick pickup</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#FAF7F2] dark:bg-[#251A13] border border-[#231711]/5 dark:border-[#FAF7F2]/5">
                    <span className="text-base block mb-0.5">🛵</span>
                    <span className="text-xs font-semibold text-[#231711] dark:text-[#FAF7F2] block">Delivery</span>
                    <span className="text-[10px] text-[#8C6D58] dark:text-[#B59E8D]">Call to order</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
