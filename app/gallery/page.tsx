
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

const categories = [
  {
    name: "navratri-celebration",
    cover: "/images/navratri-celebration/IMG_0708.JPG",
    images: [
      "/images/navratri-celebration/IMG_0708.JPG",
      "/images/navratri-celebration/IMG_0687.JPG",
      "/images/navratri-celebration/1.jpg",
      "/images/navratri-celebration/IMG_0732.JPG",
      "/images/navratri-celebration/IMG_0649.JPG",
      "/images/navratri-celebration/IMG_0653.JPG",
      "/images/navratri-celebration/IMG_0697.JPG",
      "/images/navratri-celebration/IMG_0663.JPG",
      "/images/navratri-celebration/IMG_0677.JPG",
      "/images/navratri-celebration/IMG_0679.JPG",
      "/images/navratri-celebration/IMG_0725.JPG",
    ],
  },
  {
    name: "grandparents-day",
    cover: "/images/grandparents-day/IMG_1153.JPG",
    images: [
      "/images/grandparents-day/IMG_1146.JPG",
      "/images/grandparents-day/IMG_1018.JPG",
      "/images/grandparents-day/IMG_1053.JPG",
      "/images/grandparents-day/IMG_1071.JPG",
      "/images/grandparents-day/IMG_1075.JPG",
      "/images/grandparents-day/IMG_1082.JPG",
      "/images/grandparents-day/IMG_1105.JPG",
      "/images/grandparents-day/IMG_1077.JPG",
      "/images/grandparents-day/IMG_1146.JPG",
      "/images/grandparents-day/IMG_1151.JPG",
      "/images/grandparents-day/IMG_1153.JPG",
      "/images/grandparents-day/IMG_1154.JPG",
      "/images/grandparents-day/IMG_1162.JPG",
    ],
  },
  {
    name: "graduation-day",
    cover: "/images/graduation-day/IMG_6011.JPG",
    images: [
      "/images/graduation-day/IMG_5989.JPG",
      "/images/graduation-day/IMG_5991.JPG",
      "/images/graduation-day/IMG_5999.JPG",
      "/images/graduation-day/IMG_6011.JPG",
      "/images/graduation-day/IMG_6021.JPG",
      "/images/graduation-day/IMG_6014.JPG",
      "/images/graduation-day/IMG_6021.JPG",
      "/images/graduation-day/IMG_6032.JPG",
    ],
  },
  {
    name: "republic-day",
    cover: "/images/republic-day/IMG_5085.JPG",
    images: [
      "/images/republic-day/IMG_5085.JPG",
      "/images/republic-day/IMG_5124.JPG",
      "/images/republic-day/IMG_5132.JPG",
      "/images/republic-day/IMG_5149.JPG",
      "/images/republic-day/IMG_5162.JPG",
      "/images/republic-day/IMG_5174.JPG",
      "/images/republic-day/IMG_5191.JPG",
      "/images/republic-day/IMG_5194.JPG",
      "/images/republic-day/IMG_5195.JPG",
      "/images/republic-day/IMG_5213.JPG",
      "/images/republic-day/IMG_5222.JPG",
    ],
  },
  {
    name: "children-day",
    cover: "/images/children-day/IMG_1798.JPG",
    images: [
      "/images/children-day/IMG_1813.JPG",
      "/images/children-day/IMG_1817.JPG",
      "/images/children-day/IMG_1831.JPG",
      "/images/children-day/IMG_1832.JPG",
      "/images/children-day/IMG_1842.JPG",
      "/images/children-day/IMG_1843.JPG",
      "/images/children-day/IMG_1864.JPG",
      "/images/children-day/IMG_5132.JPG",
      "/images/children-day/IMG_1798.JPG",
    ],
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<{ name: string; images: string[] } | null>(null);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-16" style={{ marginTop: "20px" }}>
        <div className="container mx-auto px-6" style={{ marginTop: "50px" }}>
          
          {/* Header Title with Underline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">
              Photo Gallery
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Back Button */}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition mb-8"
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="text-lg font-semibold">Back to Categories</span>
            </button>
          )}

          {/* Show Categories if None Selected */}
          {!selectedCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 mb-16">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => setSelectedCategory(category)}
                  className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border-4 border-white"
                >
                  <Image
                    src={category.cover}
                    alt={category.name}
                    width={600}
                    height={400}
                    className="w-full h-52 object-cover brightness-90 transition duration-300 group-hover:brightness-75"
                    unoptimized
                  />
                  {/* Category Name at the Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
                    <p className="text-xl font-bold text-white">{category.name.replace("-", " ")}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {selectedCategory.images.map((img, index) => (
                <Image key={index} src={img} alt={`${selectedCategory.name} ${index + 1}`} width={600} height={400} className="w-full h-full object-cover rounded-lg" unoptimized />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
