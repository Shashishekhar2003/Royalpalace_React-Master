import images from "./images";

const dishes = [
  {
    title: "Chicken Tikka Masala",
    price: "₹150",
    tags: "Chicken | Tomato | Creamy Sauce",
  },
  {
    title: "Paneer Butter Masala",
    price: "₹180",
    tags: "Paneer | Butter | Creamy Tomato Sauce",
  },
  {
    title: "Vegetable Biryani",
    price: "₹120",
    tags: "Basmati Rice | Mixed Vegetables | Spices",
  },
  {
    title: "Butter Chicken (Murgh Makhani)",
    price: "₹220",
    tags: "Chicken | Tomato | Butter Cream Sauce",
  },
  {
    title: "Palak Paneer",
    price: "₹160",
    tags: "Spinach | Paneer | Creamy Tomato Sauce",
  },
  {
    title: "Dal Makhani",
    price: "₹150",
    tags: "Black Lentils | Kidney Beans | Cream",
  },
];

// Add Indian cocktails
const cocktails = [
  {
    title: "Mango Lassi Martini",
    price: "₹80",
    tags: "Vodka | Mango Lassi | Lime Juice",
  },
  {
    title: "Spicy Jaljeera Margarita",
    price: "₹70",
    tags: "Tequila | Jaljeera | Lime Juice | Chili Powder",
  },
  {
    title: "Tamarind Whiskey Sour",
    price: "₹60",
    tags: "Whiskey | Tamarind Syrup | Lemon Juice",
  },
  {
    title: "Mango Mint Mojito",
    price: "₹80",
    tags: "Rum | Mango Puree | Mint Leaves | Lime Juice | Soda",
  },
  {
    title: "Spiced Tamarind Margarita",
    price: "₹100",
    tags: "Tequila | Tamarind Syrup | Lime Juice | Chili Powder",
  },
  {
    title: "Coconut Lassi Cocktail",
    price: "₹100",
    tags: "Coconut Rum | Mango Lassi | Coconut Cream",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { dishes, cocktails, awards };
