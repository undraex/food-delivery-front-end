"use client";
import { AddDishCard } from "./AddDishCard";
import FoodCard from "@/_components/FoodCard";

export function DishesSection({ categoryName = "Appetizers" }) {
  return (
    <div className="w-[1171px] h-[582px] p-[20px] bg-white mt-[24px] rounded-[12px]">
      <p className="text-[20px] font-semibold">{categoryName}</p>
      <div className="flex items-center">
        <AddDishCard categoryName={categoryName} />
        <FoodCard />
      </div>
    </div>
  );
}
