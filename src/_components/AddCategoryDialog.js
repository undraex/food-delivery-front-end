// "use client";
// import { CancelIcon } from "@/_icons/CancelIcon";

// export default function AddCategoryDialog({
//   isDialogOpen,
//   newCategory,
//   setNewCategory,
//   setIsDialogOpen,
//   handleKeyPress,
//   handleAddCategory,
// }) {
//   if (!isDialogOpen) return null;

//   return (
//     <div className="fixed bg-white flex items-center justify-center">
//       <div className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl">
//         <div className="flex justify-between">
//           <p className="text-xl font-bold mb-4 font-inter text-[18px]">
//             Add new category
//           </p>
//           <button
//             onClick={() => {
//               setIsDialogOpen(false);
//               setNewCategory("");
//             }}
//             className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//           >
//             <CancelIcon />
//           </button>
//         </div>
//         <div className=" flex flex-col gap-[8px]">
//           <p className="font-[500]">Category name</p>
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type category name..."
//             className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
//             autoFocus
//           />
//         </div>
//         <div className="flex gap-2 justify-end">
//           <button
//             onClick={handleAddCategory}
//             className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-[E4E4E7] transition-colors"
//           >
//             Add category
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { CancelIcon } from "@/_icons/CancelIcon";

// export default function AddCategoryDialog({
//   isDialogOpen,
//   newCategory,
//   setNewCategory,
//   setIsDialogOpen,
//   handleKeyPress,
//   handleAddCategory,
// }) {
//   if (!isDialogOpen) return null;

//   return (
//     // ✅ Overlay - бүтэн дэлгэцийг бүрхэх + z-index нэмэх
//     <div
//       className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"
//       onClick={(e) => {
//         // ✅ Overlay дээр дарахад хаана (dialog дээр биш)
//         if (e.target === e.currentTarget) {
//           setIsDialogOpen(false);
//           setNewCategory("");
//         }
//       }}
//     >
//       {/* ✅ Dialog box */}
//       <div
//         className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl"
//         onClick={(e) => e.stopPropagation()} // ✅ Dialog дээр дарахад overlay event зогсооно
//       >
//         <div className="flex justify-between items-start">
//           <p className="text-[18px] font-bold font-inter">Add new category</p>
//           <button
//             onClick={() => {
//               setIsDialogOpen(false);
//               setNewCategory("");
//             }}
//             className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors p-1"
//           >
//             <CancelIcon />
//           </button>
//         </div>

//         <div className="flex flex-col gap-[8px] mt-4">
//           <p className="font-[500]">Category name</p>
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type category name..."
//             className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             autoFocus
//           />
//         </div>

//         <div className="flex gap-2 justify-end mt-6">
//           <button
//             type="button" // ✅ type="button" нэмэх
//             onClick={() => {
//               console.log("Add button clicked!", newCategory); // ✅ Debug
//               handleAddCategory();
//             }}
//             className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-gray-800 transition-colors"
//           >
//             Add category
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { CancelIcon } from "@/_icons/CancelIcon";

// export default function AddCategoryDialog({
//   isDialogOpen,
//   newCategory,
//   setNewCategory,
//   setIsDialogOpen,
//   handleKeyPress,
//   handleAddCategoryButton,
// }) {
//   if (!isDialogOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="w-[412px] bg-white rounded-lg p-6 shadow-xl">
//         <div className="flex justify-between">
//           <p className="text-xl font-bold mb-4">Add new category</p>
//           <button
//             onClick={() => {
//               setIsDialogOpen(false);
//               setNewCategory("");
//             }}
//             className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//           >
//             <CancelIcon />
//           </button>
//         </div>

//         <div className="flex flex-col gap-[8px]">
//           <p className="font-[500]">Category name</p>
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type category name..."
//             className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
//             autoFocus
//           />
//         </div>

//         <div className="flex gap-2 justify-end">
//           <button
//             onClick={handleAddCategoryButton}
//             className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-gray-800 transition-colors"
//           >
//             Add category
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { X } from "lucide-react";

export default function AddCategoryDialog({
  isDialogOpen,
  newCategory,
  setNewCategory,
  setIsDialogOpen,
  handleKeyPress,
  handleAddCategory,
}) {
  if (!isDialogOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsDialogOpen(false);
          setNewCategory("");
        }
      }}
    >
      <div
        className="w-[412px] bg-white rounded-lg p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <p className="text-[18px] font-bold">Add new category</p>
          <button
            onClick={() => {
              setIsDialogOpen(false);
              setNewCategory("");
            }}
            className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors p-1"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-[8px] mt-4">
          <p className="font-medium">Category name</p>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type category name..."
            className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        </div>

        <div className="flex gap-2 justify-end mt-6">
          <button
            type="button"
            onClick={handleAddCategory}
            className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}
