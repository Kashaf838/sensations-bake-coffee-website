import { X, Sparkles, Check, Phone, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { businessInfo } from "../data/business";

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  if (!isOpen) return null;

  const benefits = [
    {
      title: "Mobile-First Ordering Conversion",
      desc: "Instant one-tap calling and WhatsApp order routing optimized for smartphone visitors who discover Sensations on Instagram or Google.",
      icon: Smartphone
    },
    {
      title: "Zero Dependency on Third-Party Aggregators",
      desc: "Direct customer relationships with no mandatory commission fees. Clear presentation of dine-in, takeout, and delivery channels.",
      icon: Zap
    },
    {
      title: "Centralized Visual Assets",
      desc: "Configured so photography of new seasonal bakes, cakes, and special drinks can be added or updated in seconds without touching code.",
      icon: Globe
    },
    {
      title: "Google Local SEO & Rich Schema",
      desc: "Embedded LocalBusiness structured data (ratings, verified hours, geo-coordinates) helping Sensations outrank competitors on local search.",
      icon: ShieldCheck
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Website Proposal Overview by Kixel Web Studio"
    >
      <div
        className="bg-[#FAF7F2] dark:bg-[#1C120C] text-[#231711] dark:text-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#231711]/10 dark:border-[#FAF7F2]/10 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-[#4A3B32] dark:text-[#DDD3C7] hover:bg-[#F5EFEB] dark:hover:bg-[#251A13] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#231711] dark:bg-[#FAF7F2] text-[#E5B869] dark:text-[#120B07] text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kixel Web Studio · Strategic Proposal</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#231711] dark:text-[#FAF7F2]">
            Website Concept for Sensations
          </h3>
          <p className="text-xs sm:text-sm text-[#4A3B32] dark:text-[#DDD3C7] mt-1.5 leading-relaxed">
            Prepared as an executive concept presentation demonstrating what a modern official digital storefront could achieve for Sensations Bake and Coffee House in Rahim Yar Khan.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="p-4 rounded-2xl bg-[#F5EFEB] dark:bg-[#221812] border border-[#231711]/5 dark:border-[#FAF7F2]/5 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-2 rounded-lg bg-[#FAF7F2] dark:bg-[#120B07] text-[#C59445]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-semibold text-[#231711] dark:text-[#FAF7F2] leading-snug">
                    {b.title}
                  </h4>
                </div>
                <p className="text-xs text-[#4A3B32] dark:text-[#DDD3C7] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Verified Business Confirmation */}
        <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#160E0A] border border-[#231711]/10 dark:border-[#FAF7F2]/10 text-xs text-[#4A3B32] dark:text-[#DDD3C7] mb-6 space-y-2">
          <h5 className="font-serif text-sm font-semibold text-[#231711] dark:text-[#FAF7F2]">
            Verified Information Compliance:
          </h5>
          <ul className="space-y-1.5 text-xs text-[#4A3B32] dark:text-[#DDD3C7]">
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Exact Google Listing verified: <strong>{businessInfo.rating} ★ (95 reviews)</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Real opening hours: <strong>10:00 AM – 1:00 AM daily</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>Verified location: <strong>Colony, near One & Subway, Zamindara, Rahim Yar Khan</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
              <span>No fabricated prices or unsupported business claims.</span>
            </li>
          </ul>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#231711]/10 dark:border-[#FAF7F2]/10">
          <span className="text-xs text-[#8C6D58] dark:text-[#C59445]">
            Concept presented by Kixel Web Studio
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#231711] dark:bg-[#FAF7F2] hover:bg-[#3A2A20] dark:hover:bg-white text-[#FAF7F2] dark:text-[#120B07] text-xs font-semibold transition-colors"
          >
            Explore Interactive Demo
          </button>
        </div>
      </div>
    </div>
  );
}
