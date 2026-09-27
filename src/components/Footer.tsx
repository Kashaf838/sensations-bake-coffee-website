import { ArrowUp, Clock, Phone, MapPin } from "lucide-react";
import { businessInfo } from "../data/business";

interface FooterProps {
  onOpenProposalInfo: () => void;
  onOpenContact: () => void;
}

export function Footer({ onOpenProposalInfo, onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#120B07] text-[#FAF7F2] border-t border-[#FAF7F2]/10 pt-20 pb-28 md:pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Massive Brand Statement */}
        <div className="border-b border-[#FAF7F2]/10 pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] font-semibold text-[#FAF7F2] block leading-none">
                {businessInfo.name}
              </span>
              <span className="text-xs sm:text-sm tracking-[0.38em] font-medium text-[#E5B869] uppercase block mt-3">
                {businessInfo.subName}
              </span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl text-[#DDD3C7] italic max-w-md font-light leading-snug">
              Coffee. <br />
              Bakes. <br />
              Good moments.
            </p>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF7F2]/10">
          {/* Col 1: About & Location */}
          <div className="lg:col-span-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5B869] block mb-4">
              The Café
            </span>
            <p className="text-xs sm:text-sm text-[#DDD3C7] leading-relaxed mb-6">
              Sensations Bake and Coffee House is a cozy, modern destination in Rahim Yar Khan for freshly baked artisan treats, chilled specialty espresso, and late-night gatherings.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-xs text-[#E5B869]">
              <Clock className="w-3.5 h-3.5" />
              <span>Hours: 10:00 AM — 1:00 AM Daily</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5B869] block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#DDD3C7]">
              <li>
                <a href="#home" className="hover:text-[#FAF7F2] transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#bakery" className="hover:text-[#FAF7F2] transition-colors">Bakery</a>
              </li>
              <li>
                <a href="#drinks" className="hover:text-[#FAF7F2] transition-colors">Coffee</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#FAF7F2] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF7F2] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF7F2] transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FAF7F2] transition-colors">Visit</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5B869] block mb-4">
              Contact Us
            </span>
            <div className="space-y-3 text-xs text-[#DDD3C7]">
              <div>
                <span className="text-[10px] text-[#A3836C] uppercase block mb-0.5">Phone:</span>
                <a
                  href={`tel:${businessInfo.rawPhone}`}
                  className="font-serif text-xl font-semibold text-[#FAF7F2] hover:text-[#E5B869] transition-colors"
                >
                  {businessInfo.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-[#A3836C] uppercase block mb-0.5">Location:</span>
                <p className="leading-relaxed">
                  Colony, near One & Subway, Zamindara, Rahim Yar Khan, 64200, Pakistan
                </p>
              </div>

              <div>
                <span className="text-[10px] text-[#A3836C] uppercase block mb-0.5">Services:</span>
                <span>Dine-in • Takeout • Delivery</span>
              </div>
            </div>
          </div>

          {/* Col 4: Website Concept by Kixel Web Studio */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E5B869] block mb-4">
              Website Concept
            </span>
            <div className="p-5 rounded-2xl bg-[#FAF7F2]/5 border border-[#FAF7F2]/10 text-xs text-[#DDD3C7] space-y-3">
              <p className="leading-relaxed">
                Website concept by <strong>Kixel Web Studio</strong>. Prepared as a high-end digital presence proposal for Sensations Bake and Coffee House.
              </p>
              <button
                onClick={onOpenProposalInfo}
                className="w-full py-2.5 px-3 rounded-xl bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] font-semibold text-xs transition-colors"
              >
                View Concept Specs
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3836C]">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Sensations Bake and Coffee House.</span>
            <span aria-hidden="true">·</span>
            <span>Rahim Yar Khan, Pakistan</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#A3836C]">
              Concept demo proposal. Not an official website.
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-full bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 text-[#FAF7F2] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
