"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "@/_icons/PlusIcon";
import AddCategoryDialog from "./AddCategoryDialog";

export default function CategorySection({
  categories,
  newCategory,
  setNewCategory,
  isDialogOpen,
  setIsDialogOpen,
  handleKeyPress,
  handleAddCategory,
}) {
  console.log("categories", categories);

  return (
    <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
      <p className="text-[20px] font-semibold">Dishes category</p>

      <div className="flex flex-wrap gap-2 mt-4 ">
        {categories.map((category, index) => (
          <Button
            key={index}
            className="bg-white h-[36px] p-[8px_16px] text-black border border-[E4E4E7] rounded-full"
          >
            {category}
            <Badge>1</Badge>
          </Button>
        ))}

        <button onClick={() => setIsDialogOpen(true)}>
          <PlusIcon />
        </button>
      </div>

      <AddCategoryDialog
        isDialogOpen={isDialogOpen}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        setIsDialogOpen={setIsDialogOpen}
        handleKeyPress={handleKeyPress}
        handleAddCategory={handleAddCategory}
      />
    </div>
  );
}
