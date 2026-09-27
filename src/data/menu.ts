import { assets } from "./assets";

export interface MenuItem {
  id: string;
  name: string;
  category: "all" | "coffee" | "smoothies" | "bakes" | "desserts";
  categoryLabel: string;
  tag: string;
  description: string;
  presentationNotes?: string;
  image: string;
  isVerifiedHighlight: boolean;
  servingStyle: string;
}

export const menuCategories = [
  { id: "all", label: "All Highlights" },
  { id: "coffee", label: "Coffee & Cold Coffee" },
  { id: "smoothies", label: "Smoothies & Frappes" },
  { id: "bakes", label: "Baked Fresh & Savory" },
  { id: "desserts", label: "Desserts & Ice Cream" },
] as const;

export const signatureMenuItems: MenuItem[] = [
  {
    id: "chicken-cheese-donut",
    name: "Chicken Cheese Donut",
    category: "bakes",
    categoryLabel: "Fresh Bakes & Savory",
    tag: "Savory Specialty",
    description: "Golden-crusted savory bakery pastry filled with tender seasoned chicken and melted mozzarella cheese.",
    presentationNotes: "Served warm from the oven with a crisp, savory coating and melted cheese pull.",
    image: assets.menu.chickenCheeseDonut,
    isVerifiedHighlight: true,
    servingStyle: "Warm Baked Pastry"
  },
  {
    id: "mocha-cold-coffee",
    name: "Mocha Cold Coffee",
    category: "coffee",
    categoryLabel: "Coffee & Cold Coffee",
    tag: "Chilled Espresso",
    description: "Rich dark espresso poured over chilled milk, blended with dark chocolate drizzle and topped with velvety cold foam.",
    presentationNotes: "Layered chilled beverage served in tall glassware with cocoa dusting.",
    image: assets.menu.mochaColdCoffee,
    isVerifiedHighlight: true,
    servingStyle: "Chilled / Iced"
  },
  {
    id: "caramel-frappe",
    name: "Caramel Frappe",
    category: "smoothies",
    categoryLabel: "Smoothies & Frappes",
    tag: "Café Classic",
    description: "Chilled blended coffee and fresh milk ribbons swirled with decadent buttery caramel syrup and finished with whipped cream.",
    presentationNotes: "Topped with thick whipped cream and golden caramel sauce drizzle.",
    image: assets.menu.caramelFrappe,
    isVerifiedHighlight: true,
    servingStyle: "Blended Ice Drink"
  },
  {
    id: "chocolate-frappe",
    name: "Chocolate Frappe",
    category: "smoothies",
    categoryLabel: "Smoothies & Frappes",
    tag: "Indulgent Blend",
    description: "Velvety iced blended chocolate beverage rich in cocoa flavor, topped with a generous swirl of whipped cream and chocolate drizzle.",
    presentationNotes: "Deep chocolate flavor crafted for sweet afternoon and late-night cravings.",
    image: assets.menu.chocolateFrappe,
    isVerifiedHighlight: true,
    servingStyle: "Blended Ice Drink"
  },
  {
    id: "strawberry-smoothie",
    name: "Strawberry Smoothie",
    category: "smoothies",
    categoryLabel: "Smoothies & Frappes",
    tag: "Fruit Refreshment",
    description: "Vibrant, refreshing blended beverage made with sweet strawberries, chilled to silky smoothie consistency.",
    presentationNotes: "Served ice-cold, naturally fruity, and thirst-quenching.",
    image: assets.menu.strawberrySmoothie,
    isVerifiedHighlight: true,
    servingStyle: "Chilled Smoothie"
  },
  {
    id: "chocolate-ice-cream",
    name: "Chocolate Ice Cream",
    category: "desserts",
    categoryLabel: "Desserts & Ice Cream",
    tag: "Sweet Classic",
    description: "Creamy, decadent chocolate ice cream prepared for an authentic, rich scoop experience.",
    presentationNotes: "Served chilled in a glass bowl or dessert cup.",
    image: assets.menu.chocolateFrappe,
    isVerifiedHighlight: true,
    servingStyle: "Chilled Scoop"
  },
  {
    id: "red-velvet-cupcake",
    name: "Red Velvet Cupcake",
    category: "bakes",
    categoryLabel: "Fresh Bakes & Savory",
    tag: "Bakery Showcase",
    description: "Moist red velvet sponge topped with a classic swirl of cream cheese frosting and fine red velvet crumbs.",
    presentationNotes: "Fresh from the Sensations bakery counter showcase.",
    image: assets.menu.bakeryCakes,
    isVerifiedHighlight: false,
    servingStyle: "Fresh Individual Bake"
  },
  {
    id: "lotus-sundae",
    name: "Lotus Biscoff Sundae",
    category: "desserts",
    categoryLabel: "Desserts & Ice Cream",
    tag: "Dessert Parfait",
    description: "Layered dessert cup featuring creamy mousse, crushed Lotus caramelized biscuits, and warm spiced cookie butter.",
    presentationNotes: "Individual dessert cup served chilled from the display.",
    image: assets.menu.bakeryCakes,
    isVerifiedHighlight: false,
    servingStyle: "Chilled Dessert Cup"
  }
];

export const reviewsData = [
  {
    quote: "Coffee quality that keeps customers coming back late into the evening.",
    highlight: "Coffee Quality & Consistency",
    source: "Verified Google Reviewer"
  },
  {
    quote: "Fresh baked goods with beautiful presentation and very welcoming staff.",
    highlight: "Fresh Bakes & Presentation",
    source: "Verified Google Reviewer"
  },
  {
    quote: "One of the favourite coffee and dessert spots in Rahim Yar Khan.",
    highlight: "Overall Café Experience",
    source: "Verified Google Reviewer"
  },
  {
    quote: "Lovely ambiance with comfortable seating near Subway in Zamindara. Great cold coffee drinks.",
    highlight: "Ambiance & Location",
    source: "Verified Google Reviewer"
  }
];
