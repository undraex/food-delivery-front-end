// "use client";
// import { X } from "lucide-react";
// import { useFormik } from "formik";
// import { useState } from "react";

// export default function AddDishDialog({
//   isOpen,
//   onClose,
//   dishData,
//   setDishData,
//   onSubmit,
//   categoryName,
//   formik,
// }) {
//   const [fieldValue, setFieldValue] = useState();
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="w-[472px] h-[596px] bg-white rounded-lg p-6 shadow-xl">
//         <div className="flex justify-between items-start mb-4">
//           <p className="text-[18px] font-semibold">
//             Add new dish to {categoryName}
//           </p>
//           <button onClick={onClose}>
//             <X size={20} />
//           </button>
//         </div>

//         <div className="flex flex-col gap-4">
//           <div className="flex w-[194px] h-[38px] gap-6">
//             <div>
//               <p className="text-sm">Food name</p>
//               <input
//                 type="text"
//                 value={dishData.name}
//                 onChange={(e) =>
//                   setDishData({ ...dishData, name: e.target.value })
//                 }
//                 placeholder="Type food name..."
//                 className="p-[8px] p-[12px] border rounded-lg"
//               />
//             </div>
//             <div>
//               <p className="text-sm">Food price</p>
//               <input
//                 type="number"
//                 value={dishData.price}
//                 onChange={(e) =>
//                   setDishData({ ...dishData, price: e.target.value })
//                 }
//                 placeholder="Price..."
//                 className="p-[8px] p-[12px] border rounded-lg"
//               />
//             </div>
//           </div>
//           <p className="text-sm mt-6">Ingredients</p>
//           <input
//             value={dishData.ingredients}
//             onChange={(e) =>
//               setDishData({ ...dishData, ingredients: e.target.value })
//             }
//             placeholder="List ingredients..."
//             rows="3"
//             className="w-[412px] h-[90px] px-4 py-2 border rounded-lg"
//           />
//           <p className="text-sm">Image</p>
//           <input
//             type="file"
//             accept="image/*"
//             name="image"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               formik.setFieldValue("image", file);
//             }}
//             className="w-[412px] h-[138px] px-4 py-2 border border-gray-300 rounded-lg"
//           />
//         </div>

//         <div className="flex gap-2 justify-end mt-6">
//           <button
//             onClick={onSubmit}
//             className="px-4 py-2 bg-black text-white rounded-lg"
//           >
//             Add Dish
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { X } from "lucide-react";

export default function AddDishDialog({
  isOpen,
  onClose,
  formik, // ✅ formik prop
  categoryName,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[500px] bg-white rounded-lg p-6 shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <p className="text-[20px] font-bold">
            Add new dish to {categoryName}
          </p>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Dish name..."
            className="w-full px-4 py-2 border rounded-lg"
          />

          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            placeholder="Price..."
            className="w-full px-4 py-2 border rounded-lg"
          />

          <textarea
            name="ingredients"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            placeholder="Ingredients..."
            rows="3"
            className="w-full px-4 py-2 border rounded-lg"
          />

          {/* ✅ File input */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              formik.setFieldValue("image", file);
            }}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="flex gap-2 justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={formik.handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-lg"
          >
            Add Dish
          </button>
        </div>
      </div>
    </div>
  );
}
