"use client";
import { CancelIcon } from "@/_icons/CancelIcon";

export default function AddCategoryDialog({
  isDialogOpen,
  newCategory,
  setNewCategory,
  setIsDialogOpen,
  handleAddCategory,
}) {
  if (!isDialogOpen) return null;

  return (
    <div className="fixed bg-white flex items-center justify-center">
      <div className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl">
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-4 font-inter text-[18px]">
            Add new category
          </p>
          <button
            onClick={() => {
              setIsDialogOpen(false);
              setNewCategory("");
            }}
            className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <CancelIcon />
          </button>
        </div>
        <div className=" flex flex-col gap-[8px]">
          <p className="font-[500]">Category name</p>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Type category name..."
            className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
            autoFocus
          />
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleAddCategory}
            className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-[E4E4E7] transition-colors"
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}
