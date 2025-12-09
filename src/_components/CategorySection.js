// "use client";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { PlusIcon } from "@/_icons/PlusIcon";

// // export default function CategorySection({
// //   categories,
// //   newCategory,
// //   setNewCategory,
// //   isDialogOpen,
// //   setIsDialogOpen,
// //   handleKeyPress,
// //   handleAddCategory,
// // })

// ("use client");

// import CancelIcon from "@/_icons/CancelIcon";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { PlusIcon } from "lucide-react";
// import { useState, useEffect } from "react";
// import { toast } from "sonner";
// import axios from "axios";
// import AddCategoryDialog from "./AddCategoryDialog";

// export default function DishesCategory({ formik }) {
//   const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;

//   const [categories, setCategories] = useState([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [newCategory, setNewCategory] = useState([]);

//   const getCategory = async () => {
//     try {
//       const result = await axios.get("http://localhost:1000/category");
//       setCategories(result.data);
//     } catch (err) {
//       toast.error("Failed to load category");
//     }
//   };
//   useEffect(() => {
//     getCategory();
//   }, []);

//   const handleAddCategory = async () => {
//     handleSubmit(values);
//     const name = values.categoryName.trim();

//     if (name !== "") {
//       setCategories([...categories, { name }]);
//     } else {
//       toast.error("Category name cannot be empty!");
//     }
//   };

//   const handleDeleteCategory = async (id) => {
//     try {
//       await axios.delete(`http://localhost:1000/category/${id}`);
//       toast.success("success delete category");
//       getCategory();
//     } catch (err) {
//       toast.error("Something went wrong");
//     }
//   };

//   {
//     console.log("categories", categories);

//     return (
//       <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
//         <p className="text-[20px] font-semibold">Dishes category</p>

//         <div className="flex flex-wrap gap-2 mt-4 ">
//           {categories.map((category, index) => (
//             <Button
//               key={index}
//               className="bg-white h-[36px] p-[8px_16px] text-black border border-[E4E4E7] rounded-full"
//             >
//               {category}
//               <Badge>1</Badge>
//             </Button>
//           ))}

//           <button onClick={() => setIsDialogOpen(true)}>
//             <PlusIcon />
//           </button>
//         </div>

//         <AddCategoryDialog
//           isDialogOpen={isDialogOpen}
//           newCategory={newCategory}
//           setNewCategory={setNewCategory}
//           setIsDialogOpen={setIsDialogOpen}
//           handleKeyPress={handleKeyPress}
//           handleAddCategory={handleAddCategory}
//         />
//       </div>
//     );
//   }
// }

// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { PlusIcon } from "lucide-react";
// import { useState, useEffect } from "react";
// import { toast } from "sonner";
// import axios from "axios";

// import { useFormik } from "formik";
// import AddCategoryDialog from "./AddCategoryDialog";

// export default function DishesCategory({ formik }) {
//   const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;

//   const [categories, setCategories] = useState([]);
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [newCategory, setNewCategory] = useState([]);

//   const getCategory = async () => {
//     try {
//       const result = await axios.get("http://localhost:999/food-category");
//       setCategories(result.data);
//     } catch (err) {
//       toast.error("Failed to load category");
//     }
//   };
//   useEffect(() => {
//     getCategory();
//   }, []);

//   const handleAddCategory = async () => {
//     handleSubmit(values);
//     const name = values.categoryName.trim();

//     if (name !== "") {
//       setCategories([...categories, { name }]);
//     } else {
//       toast.error("Category name cannot be empty!");
//     }
//   };

//   const handleDeleteCategoryButton = async (id) => {
//     try {
//       await axios.delete(`http://localhost:999/food-category/${id}`);
//       toast.success("success delete category");
//       getCategory();
//     } catch (err) {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
//       <p className="text-[20px] font-semibold">Dishes category</p>

//       <div className="flex flex-wrap gap-2 mt-4">
//         {categories.map((category, index) => (
//           <Button
//             key={category._id || index}
//             className="bg-white h-[36px] p-[8px_16px] text-black border border-[#E4E4E7] rounded-full"
//           >
//             {category.categoryName || category.name || category}
//             <Badge>1</Badge>
//           </Button>
//         ))}

//         <button onClick={() => setIsDialogOpen(true)}>
//           <PlusIcon />
//         </button>
//       </div>

//       <AddCategoryDialog
//         isDialogOpen={isDialogOpen}
//         newCategory={values.categoryName || ""}
//         setNewCategory={(value) =>
//           handleChange({ target: { name: "categoryName", value } })
//         }
//         setIsDialogOpen={setIsDialogOpen}
//         handleKeyPress={handleKeyPress}
//         handleAddCategory={handleAddCategory}
//         formik={formik}
//       />
//     </div>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "../_icons/PlusIcon";
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
  return (
    <div className="w-[1171px] p-[24px] bg-white rounded-[12px] mt-[24px]">
      <p className="text-[20px] font-semibold">Dishes category</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {categories.map((category, index) => (
          <Button
            key={category._id || index}
            className="bg-white h-[36px] p-[8px_16px] text-black border border-[#E4E4E7] rounded-full"
          >
            {category.categoryName || category.name || category}
            <Badge>1</Badge>
          </Button>
        ))}

        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center justify-center w-[36px] h-[36px] border border-dashed border-gray-400 rounded-full hover:bg-gray-50"
        >
          <PlusIcon size={20} />
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
