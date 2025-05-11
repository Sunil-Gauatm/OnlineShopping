import { create } from "zustand";
import Product from "../assets/Product.png";

export const useProduct = create((set) => {
  // Initial Product Data
  const initialProducts = {
    "Men’s Fashion": [
      {
        img: Product,
        name: "White Dress",
        brandname: "Al Karam",
        Review: "4.1",
        price: "95.50",
      },
      {
        img: Product,
        name: "Black T-Shirt",
        brandname: "Zara",
        Review: "4.5",
        price: "35.20",
      },
         {
        img: Product,
        name: "White Dress",
        brandname: "Al Karam",
        Review: "4.1",
        price: "95.50",
      },
      {
        img: Product,
        name: "Black T-Shirt",
        brandname: "Zara",
        Review: "4.5",
        price: "35.20",
      },
         {
        img: Product,
        name: "White Dress",
        brandname: "Al Karam",
        Review: "4.1",
        price: "95.50",
      },
      {
        img: Product,
        name: "Black T-Shirt",
        brandname: "Zara",
        Review: "4.5",
        price: "35.20",
      },
              {
        img: Product,
        name: "White Dress",
        brandname: "Al Karam",
        Review: "4.1",
        price: "95.50",
      },
      {
        img: Product,
        name: "Black T-Shirt",
        brandname: "Zara",
        Review: "4.5",
        price: "35.20",
      },        {
        img: Product,
        name: "White Dress",
        brandname: "Al Karam",
        Review: "4.1",
        price: "95.50",
      },
      {
        img: Product,
        name: "Black T-Shirt",
        brandname: "Zara",
        Review: "4.5",
        price: "35.20",
      },
    ],
    "Women’s Fashion": [
      {
        img: Product,
        name: "Red Gown",
        brandname: "Versace",
        Review: "4.8",
        price: "150.00",
      },
    ],
    "Kids’ Fashion": [
      {
        img: Product,
        name: "Blue Hoodie",
        brandname: "H&M",
        Review: "4.2",
        price: "45.00",
      },
    ],
    Accessories: [
      {
        img: Product,
        name: "Leather Belt",
        brandname: "Gucci",
        Review: "4.6",
        price: "55.00",
      },
    ],
    Footwear: [
      {
        img: Product,
        name: "Sneakers",
        brandname: "Nike",
        Review: "4.7",
        price: "120.00",
      },
    ],
  };

  // Get the first category dynamically
  const firstCategory = Object.keys(initialProducts)[0];

  return {
    allProducts: initialProducts,
    selectedCategories: [firstCategory], // Default to the first category
    setSelectedCategories: (categories) => set({ selectedCategories: categories }),
  };
});
