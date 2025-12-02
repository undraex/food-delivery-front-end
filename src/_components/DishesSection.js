// "use client";

// import { AddDishCard } from "./AddDishCard";
// import FoodCard from "./FoodCard";

// export function DishesSection({ categoryName = "Appetizers" }) {
//   return (
//     <div className="w-[1171px] h-[582px] p-[20px] bg-white mt-[24px] rounded-[12px]">
//       <p className="text-[20px] font-semibold">{categoryName}</p>
//       <div className="flex flex-wrap items-center gap-4">
//         <AddDishCard categoryName={categoryName} />
//         <FoodCard />
//         <FoodCard />
//         <FoodCard />
//         <FoodCard />
//         <FoodCard />
//         <FoodCard />
//       </div>
//     </div>
//   );
// }

"use client";
import { PlusIcon } from "@/_icons/PlusIcon";
import FoodCard from "@/_components/FoodCard";

export function DishesSection() {
  return (
    <div className="w-[1171px] h-[582px] p-[20px] bg-white  mt-[24px] rounded-[12px]">
      <p className="text-[20px] font-semibold">Appetizers</p>
      <div className="flex items-center">
        <div className="w-[239px] h-[209px] border-dashed rounded-[20px] border border-red-500 text-[14px] font-inter flex flex-col gap-[16px]">
          <div className=" flex flex-col items-center justify-center">
            <PlusIcon className="  mt-[68px]" />
          </div>
          <p className="flex items-center justify-center">
            Add new Dish to Salads
          </p>
        </div>

        <FoodCard />
      </div>
    </div>
  );
}
