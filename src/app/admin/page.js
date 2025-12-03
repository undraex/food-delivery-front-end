"use client";
import { useState } from "react";
import { AvatarIcon } from "@/_icons/AvatarIcon";
import { Sidebar } from "@/_components/SideBar";
import CategorySection from "@/_components/CategorySection";
import DishesSection from "@/_components/DishesSection";
import AvatarSection from "@/_components/AvatarSection";

export default function AdminPage() {
  const [categories, setCategories] = useState([
    "All dishes",
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Brunch",
    "Side dish",
    "Desserts",
    "Beverages",
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setIsDialogOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />
        <div className="w-[1171px] h-[1150px] items-center pt-[24px]">
          <AvatarSection />
          <CategorySection
            categories={categories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            handleKeyPress={handleKeyPress}
            handleAddCategory={handleAddCategory}
          />

          <DishesSection />
        </div>
      </div>
    </div>
  );
}
