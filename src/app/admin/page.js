"use client";
import { useEffect, useState } from "react";
import { Sidebar } from "@/_components/SideBar";
import CategorySection from "@/_components/CategorySection";
import DishesSection from "@/_components/DishesSection";
import AvatarSection from "@/_components/AvatarSection";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

export default function AdminPage() {
  const router = useRouter;
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getCategory = async () => {
    try {
      const result = await axios.get(
        "https://food-delivery-back-end-98ow.onrender.com/food-category"
      );
      setCategories(result.data);
    } catch (err) {
      toast.error("Failed to load category");
    }
  };
  useEffect(() => {
    getCategory();
  }, []);

  const createCategory = async (categoryName) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "https://food-delivery-back-end-98ow.onrender.com/food-category",
        {
          categoryName: categoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getCategory();
      router.push("/admin");
    } catch (error) {}
  };

  // const formik = useFormik({
  //   initialValues: {
  //     categoryName: "",
  //   },
  //   onSubmit: async (values, { resetForm }) => {
  //     try {
  //       const { categoryName } = values;

  //       await createCategory(categoryName);

  //       toast.success("New Category is being added to the menu", {
  //         className: "bg-black text-white",
  //       });

  //       resetForm();
  //       setIsDialogOpen(false);
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Failed to add category");
  //     }
  //   },
  // });

  const categoryFormik = useFormik({
    initialValues: { categoryName: "" },
    onSubmit: async (values, { resetForm }) => {
      try {
        await createCategory(values.categoryName);
        toast.success("New category added");
        resetForm();
        setIsCategoryDialogOpen(false);
      } catch (err) {
        toast.error("Failed to add category");
      }
    },
  });

  const dishFormik = useFormik({
    initialValues: {
      dishName: "",
      dishPrice: "",
      ingredients: "",
      image: null,
    },
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      Object.entries(values).forEach(([k, v]) => formData.append(k, v));

      await createDish(formData);
      toast.success("New dish added");
      resetForm();
      setIsDishDialogOpen(false);
    },
  });

  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />
        <div className="w-[1171px] h-full items-center pt-[24px]">
          <AvatarSection />
          <CategorySection
            categories={categories}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            formik={categoryFormik}
            // dishFormik={dishFormik}
          />

          <DishesSection categories={categories} formik={dishFormik} />
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { useFormik } from "formik";
// import { toast } from "react-toastify";
// import axios from "axios";

// import Sidebar from "@/_components/SideBar";
// import AvatarSection from "@/_components/AvatarSection";
// import CategorySection from "@/_components/CategorySection";
// import DishesSection from "@/_components/DishesSection";

// export default function AdminPage() {
//   const [categories, setCategories] = useState([]);
//   const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
//   const [isDishDialogOpen, setIsDishDialogOpen] = useState(false);

//   // Category fetch
//   const getCategory = async () => {
//     try {
//       const result = await axios.get("http://localhost:999/food-category");
//       setCategories(result.data);
//     } catch {
//       toast.error("Failed to load category");
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   const createCategory = async (name) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         "http://localhost:999/food-category",
//         { categoryName: name },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       await getCategory();
//     } catch {
//       toast.error("Failed to add category");
//     }
//   };

//   const createDish = async (formData) => {
//     try {
//       await axios.post("http://localhost:999/dish", formData);
//       await getCategory();
//     } catch {
//       toast.error("Failed to add dish");
//     }
//   };

//   // Formik objects
//   const categoryFormik = useFormik({
//     initialValues: { categoryName: "" },
//     onSubmit: async (values, { resetForm }) => {
//       await createCategory(values.categoryName);
//       toast.success("New category added");
//       resetForm();
//       setIsCategoryDialogOpen(false);
//     },
//   });

//   const dishFormik = useFormik({
//     initialValues: {
//       dishName: "",
//       dishPrice: "",
//       ingredients: "",
//       image: null,
//     },
//     onSubmit: async (values, { resetForm }) => {
//       const formData = new FormData();
//       Object.entries(values).forEach(([k, v]) => formData.append(k, v));
//       await createDish(formData);
//       toast.success("New dish added");
//       resetForm();
//       setIsDishDialogOpen(false);
//     },
//   });

//   return (
//     <div className="w-full flex justify-center bg-[#F4F4F5]">
//       <div className="max-w-[1440px] flex gap-[24px]">
//         <Sidebar />
//         <div className="w-[1171px] pt-[24px]">
//           <AvatarSection />

//           <CategorySection
//             categories={categories}
//             isDialogOpen={isCategoryDialogOpen}
//             setIsDialogOpen={setIsCategoryDialogOpen}
//             formik={categoryFormik}
//           />

//           <DishesSection
//             categories={categories}
//             isDialogOpen={isDishDialogOpen}
//             setIsDialogOpen={setIsDishDialogOpen}
//             formik={dishFormik}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
