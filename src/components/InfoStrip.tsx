import { Coffee, Cake, Clock, MapPin, Sparkles } from "lucide-react";
import { businessInfo } from "../data/business";

export function InfoStrip() {
  const infoCards = [
    {
      icon: Coffee,
      title: "Coffee & Drinks",
      desc: "Chilled espresso, frappes & refreshing fruit smoothies",
      sub: "Prepared to Order"
    },
    {
      icon: Cake,
      title: "Fresh Bakes",
      desc: "Chicken cheese donuts, cakes, cupcakes & brownies",
      sub: "Daily Bakery Counter"
    },
    {
      icon: Clock,
      title: "Open Daily",
      desc: "10:00 AM — 1:00 AM",
      sub: "Late-night café hours"
    },
    {
      icon: MapPin,
      title: "Rahim Yar Khan",
      desc: "Zamindara Colony, near One & Subway",
      sub: "Dine-in · Takeout · Delivery"
    },
  ];

  return (
    <section aria-label="Café Highlights & Information" className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF7F2] rounded-2xl shadow-xl border border-[#231711]/8 p-5 sm:p-7 backdrop-blur-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#231711]/10">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`flex items-start gap-4 ${idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div className="p-3 rounded-xl bg-[#F5EFEB] text-[#C59445] shrink-0 border border-[#231711]/5 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D58] block mb-0.5">
                    {card.sub}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-[#231711] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#4A3B32] mt-1 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
