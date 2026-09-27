export interface BusinessInfo {
  name: string;
  subName: string;
  tagline: string;
  category: string;
  city: string;
  area: string;
  fullAddress: string;
  phone: string;
  rawPhone: string;
  rating: number;
  reviewCount: number;
  openingHours: string;
  hoursDetail: {
    days: string;
    time: string;
  };
  services: string[];
  mapsUrl: string;
  conceptCredit: string;
}

export const businessInfo: BusinessInfo = {
  name: "SENSATIONS",
  subName: "BAKE & COFFEE HOUSE",
  tagline: "Good Coffee. Fresh Bakes. Good Moments.",
  category: "Bake & Coffee House",
  city: "Rahim Yar Khan",
  area: "Zamindara",
  fullAddress: "Colony, near One and Subway, Zamindara, Rahim Yar Khan, 64200, Pakistan",
  phone: "+92 302 1555855",
  rawPhone: "+923021555855",
  rating: 4.3,
  reviewCount: 95,
  openingHours: "Daily: 10:00 AM – 1:00 AM",
  hoursDetail: {
    days: "Monday – Sunday (Open Daily)",
    time: "10:00 AM – 1:00 AM"
  },
  services: ["Dine-in", "Takeout", "Delivery"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sensations+Bake+and+Coffee+House+Colony+Zamindara+Rahim+Yar+Khan",
  conceptCredit: "Website concept by Kixel Web Studio"
};
