"use client";
import AddDishCard from "./AddDishCard";
import FoodCard from "./FoodCard";

export default function DishesSection() {
  return (
    <div className="w-[1171px] h-[582px] p-[20px] bg-white  mt-[24px] rounded-[12px]">
      <p className="text-[20px] font-semibold">Appetizers</p>
      <div className="flex items-center">
        <AddDishCard />
        <FoodCard />
      </div>
    </div>
  );
}
