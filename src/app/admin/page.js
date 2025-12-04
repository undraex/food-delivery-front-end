"use client";
import { useState } from "react";
import { Sidebar } from "@/_components/SideBar";
import CategorySection from "@/_components/CategorySection";
import DishesSection from "@/_components/DishesSection";
import AvatarSection from "@/_components/AvatarSection";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "sonner";

export default function AdminPage() {
  const router = useRouter;
  const [categories, setCategories] = useState([]);
  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post("http://localhost:999/food-category", {
        categoryName: categoryName,
      });
      router.push("/home");
      setMessage(response.data.message || "amjilttai bolloo");
      alert("amjilttai bolloo");
    } catch (error) {
      // setMessage(error.response?.data?.message || "amjiltgui bolloo");
      alert("amjiltgui");
    }
  };

  const formik = useFormik({
    initialValues: {
      categoryName: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const { categoryName } = values;

        await createCategory(categoryName);
        alert(JSON.stringify(values, null, 2));

        toast.success("New Category is being added to the menu", {
          className: "bg-black text-white",
        });
        resetForm();
        setIsDialogOpen(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to add category");
      }
    },
  });

  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
      setIsDialogOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />
        <div className="w-[1171px] h-[1150px] items-center pt-[24px]">
          <AvatarSection />
          <CategorySection
            categories={categories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            handleKeyPress={handleKeyPress}
            handleAddCategory={handleAddCategory}
            formik={formik}
          />

          <DishesSection />
        </div>
      </div>
    </div>
  );
}
