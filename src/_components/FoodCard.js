// import * as React from "react";

// export default function FoodCard() {
//   return (
//     <div className="w-[239px] h-[209px] border border-[#E4E4E7] p-[16px] rounded-[20px] flex flex-col gap-5">
//       <div className="w-[200px] h-[89px] border border-[1px] rounded-[20px]">
//         picture
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex justify-between">
//           <p className="text-red-500 text-[14px]">Brie Crostini Appetizer</p>
//           <p className="text-[12px]">$12.99</p>
//         </div>
//         <p className="text-[12px]">
//           Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

export default function FoodCard({ dish }) {
  return (
    <div className="w-[239px] h-[209px] border border-gray-200 rounded-[20px] p-4 hover:shadow-lg transition-shadow">
      <div className="w-full h-[120px] bg-gray-200 rounded-lg mb-2">
        {/* Image placeholder */}
      </div>
      <h3 className="font-semibold text-[16px] mb-1">{dish.name}</h3>
      <p className="text-[14px] text-gray-600 mb-2">{dish.description}</p>
      <p className="font-bold text-[16px]">${dish.price}</p>
    </div>
  );
}
