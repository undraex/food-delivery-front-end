"use client";
import { PlusIcon } from "@/_icons/PlusIcon";

export default function AddDishCard() {
  return (
    <div className="w-[239px] h-[209px] border-dashed rounded-[20px] border border-red-500 text-[14px] font-inter flex flex-col gap-[16px]">
      <div className=" flex flex-col items-center justify-center">
        <PlusIcon className="rounded-full bg-red-500 mt-[68px]  hover:bg-[#E64A19] transition-colors" />
      </div>
      <p className="flex items-center justify-center px-4 text-center">
        Add new Dish to
      </p>
    </div>
  );
}
