// "use client";
// import { useState } from "react";
// import { AvatarIcon } from "@/_icons/AvatarIcon";
// import { FoodMenuIcon } from "@/_icons/FoodMenuIcon";
// import { LogoIcon } from "@/_icons/logoIcon";
// import { SettingsIcon } from "@/_icons/SettingsIcon";
// import { TruckIcon } from "@/_icons/TruckIcon";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { PlusIcon } from "@/_icons/PlusIcon";
// import { CancelIcon } from "@/_icons/CancelIcon";
// import FoodCard from "@/_components/FoodCard";
// import { useRouter } from "next/navigation";
// import { useFormik } from "formik";
// import { useEffect } from "react";

// export default function AdminPage() {
//   const [categories, setCategories] = useState("");
//   const [newCategory, setNewCategory] = useState("");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await fetch("/api/categories");
//       const data = await res.json();
//       setCategories(data);
//     } catch (err) {
//       console.error("Error fetching categories:", err);
//       setCategories([
//         "Appetizers",
//         "Salads",
//         "Pizzas",
//         "Lunch favorites",
//         "Main dishes",
//         "Fish & Sea foods",
//         "Brunch",
//         "Side dish",
//         "Desserts",
//         "Beverages",
//       ]);
//     }
//   };

//   const handleAddCategory = async () => {
//     if (newCategory.trim() !== "") {
//       setLoading(true);
//       try {
//         const response = await fetch("/api/categories", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name: newCategory.trim() }),
//         });

//         if (response.ok) {
//           const addedCategory = await response.json();
//           setCategories([...categories, addedCategory]);
//           setNewCategory("");
//           setIsDialogOpen(false);
//         } else {
//           alert("Failed to add category");
//         }
//       } catch (error) {
//         console.error("Error adding category:", error);
//         alert("Error adding category");
//       } finally {
//         setLoading(false);
//       }
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
//         <div className="w-[205px] h-[1150px] p-[36px_20px] items-center bg-white">
//           <div className="flex gap-[8px]">
//             <div>
//               <LogoIcon />
//             </div>
//             <div>
//               <div className="text-[18px] font-semibold">NomNom</div>
//               <div className="text-[#71717A]">Swift delivery</div>
//             </div>
//           </div>

//           <div className="mt-[40px] gap-[26px]">
//             <Button className="bg-black w-[165px] h-[40px] rounded-full text-white items-center justify-center">
//               <FoodMenuIcon />
//               <p>Food menu</p>
//             </Button>
//             <Button className="bg-white w-[165px] h-[40px] text-black rounded-full items-center justify-center gap-[10px]">
//               <TruckIcon />
//               <p>Orders</p>
//             </Button>
//             <Button className="bg-white w-[165px] h-[40px] text-black rounded-full items-center justify-center gap-[10px]">
//               <SettingsIcon />
//               <p>Settings</p>
//             </Button>
//           </div>
//         </div>

//         <div className="w-[1300px] h-[1150px] items-center pt-[24px]">
//           <div className="flex flex-row justify-end">
//             <AvatarIcon />
//           </div>
//           <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
//             <p className="text-[20px] font-semibold">Dishes category</p>

//             <div className="flex flex-wrap gap-2 mt-4 ">
//               {categories.map((category, index) => (
//                 <Button
//                   key={index}
//                   className="bg-white h-[36px] p-[8px_16px] text-black border border-red rounded-full"
//                 >
//                   {category}
//                   <Badge>1</Badge>
//                 </Button>
//               ))}
//               <button onClick={() => setIsDialogOpen(true)}>
//                 <PlusIcon />
//               </button>
//             </div>

//             {isDialogOpen && (
//               <div className="fixed bg-white flex items-center justify-center">
//                 <div className="w-[412px] h-[224px] bg-white rounded-lg p-6 w-96 shadow-xl">
//                   <div className="flex justify-between">
//                     <p className="text-xl font-bold mb-4 font-inter text-[18px]">
//                       Add new category
//                     </p>
//                     <button
//                       onClick={() => {
//                         setIsDialogOpen(false);
//                         setNewCategory("");
//                       }}
//                       className="text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//                     >
//                       <CancelIcon />
//                     </button>
//                   </div>
//                   <div className=" flex flex-col gap-[8px]">
//                     <p className="font-[500]">Category name</p>
//                     <input
//                       type="text"
//                       value={newCategory}
//                       onChange={(e) => setNewCategory(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Type category name..."
//                       className="w-full px-4 py-2 border border-[#E4E4E7] rounded-lg mb-4"
//                       autoFocus
//                     />
//                   </div>
//                   <div className="flex gap-2 justify-end">
//                     <button
//                       onClick={handleAddCategory}
//                       className="px-4 py-2 bg-[#18181B] text-white rounded-lg hover:bg-[E4E4E7] transition-colors"
//                     >
//                       Add category
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="w-[1171px] h-[582px] p-[20px] bg-white  mt-[24px] rounded-[12px]">
//             <p className="text-[20px] font-semibold">Appetizers</p>
//             <div className="flex items-center">
//               <div className="w-[239px] h-[209px] border-dashed rounded-[20px] border border-red-500 text-[14px] font-inter flex flex-col gap-[16px]">
//                 <div className=" flex flex-col items-center justify-center">
//                   <PlusIcon className="  mt-[68px]" />
//                 </div>
//                 <p className="flex items-center justify-center">
//                   Add new Dish to Salads
//                 </p>
//               </div>

//               <FoodCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { Sidebar } from "@/_components/SideBar";
import { CategorySection } from "@/_components/CategorySection";
import { DishesSection } from "@/_components/DishesSection";

export default function AdminPage() {
  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />

        <div className="w-[1300px] h-[1150px] items-center pt-[24px]">
          {/* <Header /> */}
          <CategorySection />
          <DishesSection categoryName="Appetizers" />
        </div>
      </div>
    </div>
  );
}
