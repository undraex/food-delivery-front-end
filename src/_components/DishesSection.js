// "use client";
// import AddDishCard from "./AddDishCard";
// import FoodCard from "./FoodCard";

// export default function DishesSection(categories) {
//   console.log(categories, "categories");
//   return (
//     <div className="bg-white w-[1171px] p-6 rounded-md  mt-[24px] mb-[24px] ">
//       {categories.map((category, index) => (
//         <div key={index} className="mb-6">
//           <p className="pb-[16px]">{category.categoryName}</p>

//           <div className="grid grid-cols-4 gap-3">
//             <AddDishCard categories={categories} onOpen={onOpenDishDialog} />
//             <FoodCard categoryId={category._id} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// "use client";
// import AddDishCard from "./AddDishCard";
// import FoodCard from "./FoodCard";

// export default function DishesSection({ categories }) {
//   console.log(categories, "categories");
//   return (
//     <div className="bg-white w-[1171px] p-6 rounded-md mt-[24px] mb-[24px]">
//       {categories.map((category, index) => (
//         <div key={category._id || index} className="mb-6">
//           <p className="pb-[16px] text-[18px] font-semibold">
//             {category.categoryName || category}
//           </p>

//           <div className="grid grid-cols-4 gap-3">
//             <AddDishCard categoryName={category.categoryName || category} />
//             <FoodCard categoryId={category._id} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import AddDishCard from "./AddDishCard";
import FoodCard from "./FoodCard";

export default function DishesSection({ categories }) {
  if (!Array.isArray(categories)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white w-[1171px] p-6 rounded-md mt-[24px] mb-[24px]">
      {categories.map((category, index) => (
        <div key={category._id || index} className="mb-6">
          {/* ✅ String болгох */}
          <p className="pb-[16px] text-[18px] font-semibold">
            {typeof category === "string"
              ? category
              : category.categoryName || category.name || "Unknown"}
          </p>

          <div className="grid grid-cols-4 gap-3">
            <AddDishCard
              categoryName={
                typeof category === "string"
                  ? category
                  : category.categoryName || category.name
              }
            />
            <FoodCard categoryId={category._id} />
          </div>
        </div>
      ))}
    </div>
  );
}
