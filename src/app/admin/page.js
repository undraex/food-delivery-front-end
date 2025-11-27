"use client";
import { AvatarIcon } from "@/_icons/AvatarIcon";
import { FoodMenuIcon } from "@/_icons/FoodMenuIcon";
import { LogoIcon } from "@/_icons/logoIcon";
import { SettingsIcon } from "@/_icons/SettingsIcon";
import { TruckIcon } from "@/_icons/TruckIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
  "Fish & Sea foods",
  "Brunch",
  "Side dish",
  "Desserts",
  "Beverages",
];

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

export default function AdminPage() {
  return (
    <div className="w-100% flex justify-center">
      <div className="max-w-[1440px] flex gap-[24px]">
        <div className="w-[205px] h-[1150px] p-[36px_20px] items-center ">
          <div className="flex gap-[8px]">
            <div>
              <LogoIcon />
            </div>
            <div>
              <div className="text-[18px] font-semibold">NomNom</div>
              <div className="text-[#71717A]">Swift delivery</div>
            </div>
          </div>

          <div className="mt-[40px] gap-[26px]">
            <Button className="bg-black w-[165px] h-[40px] rounded-full text-white items-center justify-center">
              <FoodMenuIcon />
              <p>Food menu</p>
            </Button>
            <Button className="bg-white w-[165px] h-[40px] text-black rounded-full items-center justify-center gap-[10px]">
              <TruckIcon />
              <p>Orders</p>
            </Button>
            <Button className="bg-white w-[165px] h-[40px] text-black rounded-full items-center justify-center gap-[10px]">
              <SettingsIcon />
              <p>Settings</p>
            </Button>
          </div>
        </div>

        <div className="w-[1300px] h-[1150px] bg-[#F4F4F5] items-center pt-[24px] pl-[24px]">
          <div className="flex flex-row justify-end">
            <AvatarIcon />
          </div>
          <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
            <p className="text-[20px] font-semibold">Dishes category</p>

            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button key={index} className="bg-white h-[36px] p-[8px_16px]">
                  <Badge>{category}</Badge>
                </Button>
              ))}
            </div>
          </div>

          <div className="w-[1171px] h-[582px] p-[20px] bg-white items-center justify-center mt-[24px] rounded-[12px]">
            <p className="text-[20px] font-semibold">Appetizers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from 'react';

// export default function CategoryManager() {
//   const [categories, setCategories] = useState([
//     'Appetizers',
//     'Salads',
//     'Pizzas',
//     'Lunch favorites',
//     'Main dishes',
//     'Fish & Sea foods',
//     'Brunch',
//     'Side dish',
//     'Desserts',
//     'Beverages'
//   ]);

//   const [newCategory, setNewCategory] = useState('');
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleAddCategory = () => {
//     if (newCategory.trim() !== '') {
//       setCategories([...categories, newCategory.trim()]);
//       setNewCategory('');
//       setIsDialogOpen(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleAddCategory();
//     }
//   };

//   const handleDeleteCategory = (index) => {
//     setCategories(categories.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Menu Categories</h2>

//       {/* Categories Display */}
//       <div className="flex flex-wrap gap-2">
//         {categories.map((category, index) => (
//           <div key={index} className="relative group">
//             <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors">
//               <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
//                 {category}
//               </span>
//             </button>
//             <button
//               onClick={() => handleDeleteCategory(index)}
//               className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs hover:bg-red-600"
//             >
//               ×
//             </button>
//           </div>
//         ))}

//         {/* Add Category Button */}
//         <button
//           onClick={() => setIsDialogOpen(true)}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium flex items-center gap-2"
//         >
//           <span className="text-xl">+</span>
//           Add Category
//         </button>
//       </div>

//       {/* Dialog/Modal */}
//       {isDialogOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
//             <h3 className="text-xl font-bold mb-4">Add New Category</h3>

//             <input
//               type="text"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Enter category name..."
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//               autoFocus
//             />

//             <div className="flex gap-2 justify-end">
//               <button
//                 onClick={() => {
//                   setIsDialogOpen(false);
//                   setNewCategory('');
//                 }}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCategory}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
