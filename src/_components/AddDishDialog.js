"use client";
import { CancelIcon } from "@/_icons/CancelIcon";

export default function AddDishDialog({
  isDialogOpen,
  newCategory,
  setNewDish,
  setIsDialogOpen,
  handleAddDish,
}) {
  if (!isDialogOpen) return null;

  return (
    <div className="fixed bg-white flex items-center justify-center">
      <div className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-4 font-inter text-[18px]">
            Add new dish
          </p>
          <button
            onClick={() => {
              setIsDialogOpen(false);
              setNewDish("");
            }}
            className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <CancelIcon />
          </button>
        </div>
        <div className=" flex flex-col gap-[8px]">
          <p className="text-[14px]">Food name</p>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewDish(e.target.value)}
            placeholder="Type food name"
            className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
            autoFocus
          />

          <p className="text-[14px]">Food price</p>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewDish(e.target.value)}
            placeholder="Enter price..."
            className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
            autoFocus
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleAddDish}
            className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-[E4E4E7] transition-colors"
          >
            Add category
          </button>
        </div>
      </div>
      <AddCategoryDialog
        isDialogOpen={isDialogOpen}
        newCategory={values.categoryName || ""}
        setNewDish={(value) =>
          handleChange({ target: { name: "categoryName", value } })
        }
        setIsDialogOpen={setIsDialogOpen}
        handleAddDish={handleAddDish}
        handleDeleteCategory={handleDeleteCategory}
        formik={formik}
      />
    </div>
  );
}

// "use client";

// import { CancelIcon } from "@/_icons/CancelIcon";

// export default function AddDishDialog({
//   isDialogOpen,
//   setIsDialogOpen,
//   formik, // ---- Formik object дамжуулна
// }) {
//   if (!isDialogOpen) return null;

//   const closeDialog = () => {
//     setIsDialogOpen(false);
//     formik.resetForm();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
//       <div className="w-[412px] bg-white rounded-lg p-6 shadow-xl">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-xl font-bold">Add new dish</p>
//           <button
//             onClick={closeDialog}
//             className="hover:bg-gray-200 p-1 rounded"
//           >
//             <CancelIcon />
//           </button>
//         </div>

//         {/* Inputs */}
//         <div className="flex flex-col gap-3">
//           {/* Dish Name */}
//           <div>
//             <p className="text-sm">Food name</p>
//             <input
//               type="text"
//               name="dishName"
//               value={formik.values.dishName}
//               onChange={formik.handleChange}
//               placeholder="Type food name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//               autoFocus
//             />
//           </div>

//           {/* Dish Price */}
//           <div>
//             <p className="text-sm">Food price</p>
//             <input
//               type="number"
//               name="dishPrice"
//               value={formik.values.dishPrice}
//               onChange={formik.handleChange}
//               placeholder="Enter price..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div>
//             <p className="text-sm">Ingredients</p>
//             <input
//               type="text"
//               name="ingredients"
//               value={formik.values.ingredients}
//               onChange={formik.handleChange}
//               placeholder="List ingredients..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             />
//           </div>

//           <div>
//             <p className="text-sm">Dish image</p>

//             {/* Image preview */}
//             {formik.values.image && (
//               <img
//                 src={URL.createObjectURL(formik.values.image)}
//                 alt="preview"
//                 className="w-32 h-32 object-cover rounded mb-3"
//               />
//             )}

//             <input
//               type="file"
//               accept="image/*"
//               name="image"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 formik.setFieldValue("image", file); // ✔ Formik file save
//               }}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={() => {
//               formik.handleSubmit();
//               closeDialog();
//             }}
//             className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
//           >
//             Add dish
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
