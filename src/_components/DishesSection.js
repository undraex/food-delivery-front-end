// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import AddDishCard from "./AddDishCard";
// import AddDishDialog from "./AddDishDialog";
// import FoodCard from "./FoodCard";

// export default function DishesSection({ categories, dishes, refreshDishes }) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [dishData, setDishData] = useState({
//     name: "",
//     price: "",
//     ingredients: "",
//     image: null,
//   });

//   // ✅ Card дарахад dialog нээх
//   const handleOpenDialog = (categoryName) => {
//     setSelectedCategory(categoryName);
//     setIsDialogOpen(true);
//   };

//   // ✅ Dialog хаах
//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//     setDishData({ name: "", price: "", description: "" });
//     setSelectedCategory("");
//   };

//   // ✅ Dish нэмэх - API call
//   const handleAddDish = async () => {
//     if (!dishData.name || !dishData.price) {
//       toast.error("Please fill required fields!");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:999/dishes", {
//         ...dishData,
//         category: selectedCategory,
//       });

//       toast.success("Dish added successfully!");
//       handleCloseDialog();
//       refreshDishes(); // Parent-с refresh функц дуудах
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to add dish");
//     }
//   };

//   const categoryList = Array.isArray(categories) ? categories : [];

//   return (
//     <div className="bg-white w-[1171px] p-6 rounded-md mt-[24px] mb-[24px]">
//       {categoryList.map((category, index) => {
//         const categoryName = category.categoryName || category.name || category;

//         return (
//           <div key={category._id || index} className="mb-6">
//             <p className="pb-[16px] text-[18px] font-semibold">
//               {categoryName}
//             </p>

//             <div className="grid grid-cols-4 gap-3">
//               {/* Add Dish Card */}
//               <AddDishCard
//                 categoryName={categoryName}
//                 onClick={() => handleOpenDialog(categoryName)}
//               />

//               {/* Existing Dishes */}
//               {dishes
//                 ?.filter((dish) => dish.category === categoryName)
//                 .map((dish, idx) => (
//                   <FoodCard key={idx} dish={dish} />
//                 ))}
//             </div>
//           </div>
//         );
//       })}

//       {/* Dialog */}
//       <AddDishDialog
//         isOpen={isDialogOpen}
//         onClose={handleCloseDialog}
//         dishData={dishData}
//         setDishData={setDishData}
//         onSubmit={handleAddDish}
//         categoryName={selectedCategory}
//       />
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import AddDishCard from "./AddDishCard";
import AddDishDialog from "./AddDishDialog";
import FoodCard from "./FoodCard";

export default function DishesSection({ categories, dishes, refreshDishes }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      ingredients: "",
      image: null,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        // ✅ FormData үүсгэх (image-тай)
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("price", values.price);
        formData.append("ingredients", values.ingredients);
        formData.append("category", selectedCategory);
        if (values.image) {
          formData.append("image", values.image);
        }

        await axios.post("http://localhost:999/dishes", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        toast.success("Dish added successfully!");
        resetForm();
        setIsDialogOpen(false);
        refreshDishes();
      } catch (err) {
        console.error(err);
        toast.error("Failed to add dish");
      }
    },
  });

  // ✅ Card дарахад dialog нээх
  const handleOpenDialog = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsDialogOpen(true);
  };

  // ✅ Dialog хаах
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    formik.resetForm();
    setSelectedCategory("");
  };

  const categoryList = Array.isArray(categories) ? categories : [];

  return (
    <div className="bg-white w-[1171px] p-6 rounded-md mt-[24px] mb-[24px]">
      {categoryList.map((category, index) => {
        const categoryName = category.categoryName || category.name || category;

        return (
          <div key={category._id || index} className="mb-6">
            <p className="pb-[16px] text-[18px] font-semibold">
              {categoryName}
            </p>

            <div className="grid grid-cols-4 gap-3">
              {/* Add Dish Card */}
              <AddDishCard
                categoryName={categoryName}
                onClick={() => handleOpenDialog(categoryName)}
              />

              {/* Existing Dishes */}
              {dishes
                ?.filter((dish) => dish.category === categoryName)
                .map((dish, idx) => (
                  <FoodCard key={idx} dish={dish} />
                ))}
            </div>
          </div>
        );
      })}

      {/* Dialog */}
      <AddDishDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        formik={formik} // ✅ formik дамжуулах
        categoryName={selectedCategory}
      />
    </div>
  );
}
