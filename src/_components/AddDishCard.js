"use client";
import { PlusIcon } from "@/_icons/PlusIcon";

export function AddDishCard({ categoryName = "Salads" }) {
  return (
    <div className="w-[239px] h-[209px] border-dashed rounded-[20px] border border-red-500 text-[14px] font-inter flex flex-col gap-[16px]">
      <div className="flex flex-col items-center justify-center">
        <PlusIcon className="mt-[68px]" />
      </div>
      <p className="flex items-center justify-center">
        Add new Dish to {categoryName}
      </p>
    </div>
  );
}
