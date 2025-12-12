"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/_icons/PlusIcon";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import AddCategoryDialog from "./AddCategoryDialog";
import { CancelIcon } from "@/_icons/CancelIcon";

export default function DishesCategory({ formik, categories }) {
  const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState([]);

  const handleAddCategory = async () => {
    const name = values.categoryName.trim();

    if (name !== "") {
      handleSubmit(values);
      toast.success("Category created!");
    } else {
      toast.error("Category name cannot be empty!");
    }
    setIsDialogOpen(false);
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(
        `https://food-delivery-back-end-98ow.onrender.com/food-category/${id}`
      );
      toast.success("success delete category");
    } catch (err) {
      toast.error("Something went wrong");
    }
    <button onClick={() => setIsDialogOpen(false)}>
      <CancelIcon />
    </button>;
  };

  return (
    <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
      <p className="text-[20px] font-semibold">Dishes category</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {categories.map((category, index) => (
          <div key={category._id || index} className="relative group">
            <Button className="bg-white h-[36px] p-[8px_16px] text-black border border-[#E4E4E7] rounded-full">
              {category.categoryName || category.name || category}
              <Badge>1</Badge>
            </Button>

            <button
              onClick={() => handleDeleteCategory(category._id)}
              className="absolute top-[-5px] right-[-5px] w-5 h-5 flex items-center justify-center bg-white rounded-full border border-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50"
            >
              <CancelIcon className="w-3 h-3 text-red-500" />
            </button>
          </div>
        ))}

        <button onClick={() => setIsDialogOpen(true)}>
          <PlusIcon className="rounded-full bg-red-500   hover:bg-[#E64A19] transition-colors" />
        </button>
      </div>
      <AddCategoryDialog
        isDialogOpen={isDialogOpen}
        newCategory={values.categoryName || ""}
        setNewCategory={(value) =>
          handleChange({ target: { name: "categoryName", value } })
        }
        setIsDialogOpen={setIsDialogOpen}
        handleAddCategory={handleAddCategory}
        handleDeleteCategory={handleDeleteCategory}
        formik={formik}
      />
    </div>
  );
}
