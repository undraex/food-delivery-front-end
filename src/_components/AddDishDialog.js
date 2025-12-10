// "use client";

// import React from "react";

// export default function AddDishDialog({
//   isOpen,
//   onClose,
//   dishData,
//   setDishData,
//   handleAddDish,
//   categories,
// }) {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//       onClick={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       <div
//         className="w-[500px] bg-white rounded-lg p-6 shadow-xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex justify-between items-start mb-4">
//           <p className="text-[20px] font-bold">Add new dish</p>
//           <button
//             onClick={onClose}
//             className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors p-1"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <div className="flex flex-col gap-4">
//           {/* Dish Name */}
//           <div>
//             <label className="font-medium block mb-2">Dish name</label>
//             <input
//               type="text"
//               value={dishData.name}
//               onChange={(e) =>
//                 setDishData({ ...dishData, name: e.target.value })
//               }
//               placeholder="Enter dish name..."
//               className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="font-medium block mb-2">Category</label>
//             <select
//               value={dishData.category}
//               onChange={(e) =>
//                 setDishData({ ...dishData, category: e.target.value })
//               }
//               className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select category</option>
//               {categories.map((cat, index) => (
//                 <option key={index} value={cat.categoryName || cat}>
//                   {cat.categoryName || cat}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Price */}
//           <div>
//             <label className="font-medium block mb-2">Price</label>
//             <input
//               type="number"
//               value={dishData.price}
//               onChange={(e) =>
//                 setDishData({ ...dishData, price: e.target.value })
//               }
//               placeholder="Enter price..."
//               className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="font-medium block mb-2">Description</label>
//             <textarea
//               value={dishData.description}
//               onChange={(e) =>
//                 setDishData({ ...dishData, description: e.target.value })
//               }
//               placeholder="Enter description..."
//               rows="3"
//               className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="flex gap-2 justify-end mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleAddDish}
//             className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-gray-800 transition-colors"
//           >
//             Add Dish
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
