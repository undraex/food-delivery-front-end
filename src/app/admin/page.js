// "use client";
// import { useState } from "react";
// import { Sidebar } from "@/_components/SideBar";
// import CategorySection from "@/_components/CategorySection";
// import DishesSection from "@/_components/DishesSection";
// import AvatarSection from "@/_components/AvatarSection";
// import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import axios from "axios";
// import { toast } from "sonner";

// export default function AdminPage() {
//   const router = useRouter;
//   const [categories, setCategories] = useState([]);
//   const createCategory = async (categoryName) => {
//     try {
//       const response = await axios.post("http://localhost:999/food-category", {
//         categoryName: categoryName,
//       });
//       router.push("/home");
//       setMessage(response.data.message);
//       alert("amjilttai bolloo");
//     } catch (error) {
//       alert("amjiltgui");
//     }
//   };

//   const formik = useFormik({
//     initialValues: {
//       categoryName: "",
//     },
//     onSubmit: async (values, { resetForm }) => {
//       try {
//         const { categoryName } = values;

//         await createCategory(categoryName);
//         alert(JSON.stringify(values, null, 2));

//         toast.success("New Category is being added to the menu", {
//           className: "bg-black text-white",
//         });
//         resetForm();
//         setIsDialogOpen(false);
//       } catch (error) {
//         console.error(error);
//         toast.error("Failed to add category");
//       }
//     },
//   });

//   const [newCategory, setNewCategory] = useState("");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleAddCategory = () => {
//     if (newCategory.trim() !== "") {
//       setCategories([...categories, newCategory.trim()]);
//       setNewCategory("");
//       setIsDialogOpen(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleAddCategory();
//     }
//   };

//   return (
//     <div className="w-full flex justify-center bg-[#F4F4F5]">
//       <div className="max-w-[1440px] flex gap-[24px]">
//         <Sidebar />
//         <div className="w-[1171px] h-[1150px] items-center pt-[24px]">
//           <AvatarSection />
//           <CategorySection
//             categories={categories}
//             newCategory={newCategory}
//             setNewCategory={setNewCategory}
//             isDialogOpen={isDialogOpen}
//             setIsDialogOpen={setIsDialogOpen}
//             handleKeyPress={handleKeyPress}
//             handleAddCategory={handleAddCategory}
//             formik={formik}
//           />

//           <DishesSection />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Sidebar } from "@/_components/SideBar";
import { AvatarIcon } from "@/_icons/AvatarIcon";
import CategorySection from "@/_components/CategorySection";
import DishesSection from "@/_components/DishesSection";

export default function AdminPage() {
  const [categories, setCategories] = useState([]);
  const [dishes, setDishes] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);

  // Fetch categories
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:1000/category");
      setCategories(response.data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      toast.error("Failed to load categories");
    }
  };

  // Fetch dishes
  const getDishes = async () => {
    try {
      const response = await axios.get("http://localhost:1000/dishes");
      setDishes(response.data);
    } catch (err) {
      console.error("Error fetching dishes:", err);
      toast.error("Failed to load dishes");
    }
  };

  useEffect(() => {
    getCategories();
    getDishes();
  }, []);

  // Add category
  const handleAddCategory = async () => {
    const name = newCategory.trim();

    if (!name) {
      toast.error("Category name cannot be empty!");
      return;
    }

    try {
      await axios.post("http://localhost:1000/category", {
        categoryName: name,
      });
      toast.success("Category added successfully!");
      setNewCategory("");
      setIsCategoryDialogOpen(false);
      getCategories(); // Refresh
    } catch (err) {
      console.error("Error adding category:", err);
      toast.error("Failed to add category");
    }
  };

  // Add dish
  const handleAddDish = async (dishData) => {
    try {
      await axios.post("http://localhost:1000/dishes", dishData);
      toast.success("Dish added successfully!");
      getDishes(); // Refresh
    } catch (err) {
      console.error("Error adding dish:", err);
      toast.error("Failed to add dish");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddCategory();
    }
  };

  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />

        <div className="w-[1300px] h-screen items-center pt-[24px]">
          <div className="flex flex-row justify-end mb-4">
            <AvatarIcon />
          </div>

          <CategorySection
            categories={categories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            isDialogOpen={isCategoryDialogOpen}
            setIsDialogOpen={setIsCategoryDialogOpen}
            handleKeyPress={handleKeyPress}
            handleAddCategory={handleAddCategory}
          />

          <DishesSection
            dishes={dishes}
            categories={categories}
            onAddDish={handleAddDish}
          />
        </div>
      </div>
    </div>
  );
}
