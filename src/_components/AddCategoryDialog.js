"use client";
import { CancelIcon } from "@/_icons/CancelIcon";

export function AddCategoryDialog({
  isOpen,
  newCategory,
  setNewCategory,
  onClose,
  onAdd,
}) {
  if (!isOpen) return null;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="fixed bg-white flex items-center justify-center">
      <div className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl">
        {/* Header */}
        <div className="flex justify-between">
          <p className="text-xl font-bold mb-4 font-inter text-[18px]">
            Add new category
          </p>
          <button
            onClick={onClose}
            className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <CancelIcon />
          </button>
        </div>

        {/* Input Field */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-[500]">Category name</p>
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type category name..."
            className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
            autoFocus
          />
        </div>

        {/* Action Button */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-[E4E4E7] transition-colors"
          >
            Add category
          </button>
        </div>
      </div>
    </div>
  );
}
