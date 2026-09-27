import { useState } from "react";
import { Sparkles, X, ExternalLink, ArrowRight } from "lucide-react";

interface ProposalBannerProps {
  onOpenProposalInfo: () => void;
}

export function ProposalBanner({ onOpenProposalInfo }: ProposalBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside aria-label="Website Concept Notice" className="bg-[#1C140F] text-[#FAF7F2] border-b border-[#3A2A20] text-xs py-2 px-4 transition-all z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-[#D4A359] animate-pulse shrink-0" />
          <span className="text-[#D4A359] font-medium tracking-wide shrink-0">Kixel Web Studio Concept</span>
          <span className="text-[#A3836C] hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-[#DDD3C7] truncate hidden sm:inline">
            Modern website proposal crafted for Sensations Bake and Coffee House (Rahim Yar Khan)
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenProposalInfo}
            className="text-xs text-[#FAF7F2] hover:text-[#D4A359] underline decoration-[#D4A359]/60 underline-offset-4 font-medium flex items-center gap-1 transition-colors"
          >
            <span>View Concept Proposal Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-[#A3836C] hover:text-[#FAF7F2] p-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
