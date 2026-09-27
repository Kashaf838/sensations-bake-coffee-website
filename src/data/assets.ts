/**
 * Centralized Image Assets Configuration
 * All images are centralized here for easy maintenance and replacement.
 * Images can be placed in /public/images/sensations/ or imported.
 */

export const assets = {
  hero: {
    interior: "/images/sensations/hero_cafe_interior.jpg",
    alt: "Sensations Bake and Coffee House warm ambient interior with arch lighting and pastry counters"
  },
  menu: {
    chickenCheeseDonut: "/images/sensations/chicken_cheese_donut.jpg",
    mochaColdCoffee: "/images/sensations/mocha_cold_coffee.jpg",
    caramelFrappe: "/images/sensations/caramel_frappe.jpg",
    chocolateFrappe: "/images/sensations/chocolate_frappe.jpg",
    strawberrySmoothie: "/images/sensations/strawberry_smoothie.jpg",
    bakeryCakes: "/images/sensations/bakery_display_cakes.jpg"
  },
  gallery: [
    {
      id: "gal-1",
      src: "/images/sensations/hero_cafe_interior.jpg",
      title: "Café Counter & Arch Illumination",
      category: "Interior & Vibe",
      caption: "Warm architectural arch lighting, pendant lamps, and modern café counter"
    },
    {
      id: "gal-2",
      src: "/images/sensations/bakery_display_cakes.jpg",
      title: "Artisanal Bakery Showcase",
      category: "Fresh Bakes",
      caption: "Cakes, layered pastries, cupcakes, and dessert cups presented in the lighted showcase"
    },
    {
      id: "gal-3",
      src: "/images/sensations/mocha_cold_coffee.jpg",
      title: "Mocha Cold Coffee",
      category: "Specialty Drinks",
      caption: "Signature chilled espresso blended with velvety milk and dark chocolate drizzle"
    },
    {
      id: "gal-4",
      src: "/images/sensations/chicken_cheese_donut.jpg",
      title: "Chicken Cheese Donut",
      category: "Fresh Bakes",
      caption: "Golden warm savory pastry loaded with seasoned chicken and melted mozzarella"
    },
    {
      id: "gal-5",
      src: "/images/sensations/caramel_frappe.jpg",
      title: "Caramel Frappe",
      category: "Specialty Drinks",
      caption: "Iced blended coffee swirled with caramel and a whipped crown"
    },
    {
      id: "gal-6",
      src: "/images/sensations/strawberry_smoothie.jpg",
      title: "Strawberry Smoothie",
      category: "Specialty Drinks",
      caption: "Sun-ripened strawberry puree blended with fresh chilled base"
    },
    {
      id: "gal-7",
      src: "/images/sensations/chocolate_frappe.jpg",
      title: "Chocolate Frappe & Sundae",
      category: "Desserts & Sweets",
      caption: "Rich cocoa frappe paired with chocolate ice cream treats"
    }
  ]
};
