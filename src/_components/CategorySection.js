"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import axios from "axios";

import { useFormik } from "formik";
import AddCategoryDialog from "./AddCategoryDialog";
import AddDishCard from "./AddDishCard";
import DishesSection from "./DishesSection";

export default function DishesCategory({ formik }) {
  const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;

  const [categories, setCategories] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState([]);

  const getCategory = async () => {
    try {
      const result = await axios.get("http://localhost:999/food-category");
      setCategories(result.data);
    } catch (err) {
      toast.error("Failed to load category");
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const handleAddCategory = async () => {
    handleSubmit(values);
    const name = values.categoryName.trim();

    if (name !== "") {
      setCategories([...categories, { name }]);
    } else {
      toast.error("Category name cannot be empty!");
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:999/food-category/${id}`);
      toast.success("success delete category");
      getCategory();
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
      <p className="text-[20px] font-semibold">Dishes category</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {/* {categories.map((category, index) => (
          <Button
            key={category._id || index}
            className="bg-white h-[36px] p-[8px_16px] text-black border border-[#E4E4E7] rounded-full"
          >
            {category.categoryName || category.name || category}
            <Badge>1</Badge>
          </Button>
        ))}

        <button onClick={() => setIsDialogOpen(true)}>
          <PlusIcon />
        </button> */}

        {categories.map((category, index) => (
          <Button
            key={category._id || index}
            className="bg-white h-[36px] p-[8px_16px] text-black border border-[#E4E4E7] rounded-full"
          >
            {/* ✅ String болгох */}
            {typeof category === "string"
              ? category
              : category.categoryName || category.name || "Unknown"}
            <Badge>1</Badge>
          </Button>
        ))}
      </div>

      <AddCategoryDialog
        isDialogOpen={isDialogOpen}
        newCategory={values.categoryName || ""}
        setNewCategory={(value) =>
          handleChange({ target: { name: "categoryName", value } })
        }
        setIsDialogOpen={setIsDialogOpen}
        // handleKeyPress={handleKeyPress}
        handleAddCategory={handleAddCategory}
        handleDeleteCategory={handleDeleteCategory}
        formik={formik}
      />
      <div className="space-y-6">
        <DishesSection categories={categories} />
      </div>
    </div>
  );
}
