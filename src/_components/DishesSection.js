// "use client";
// import AddDishCard from "./AddDishCard";
// import FoodCard from "./FoodCard";

// export default function DishesSection() {
//   return (
//     <div className="w-[1171px] h-[582px] p-[20px] bg-white  mt-[24px] rounded-[12px]">
//       <p className="text-[20px] font-semibold">Appetizers</p>
//       <div className="flex items-center">
//         <AddDishCard />
//         <FoodCard />
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import AddDishCard from "./AddDishCard";
import FoodCard from "./FoodCard";
import AddDishDialog from "./AddDishDialog";

export default function DishesSection({ dishes, categories, onAddDish }) {
  const [isDishDialogOpen, setIsDishDialogOpen] = useState(false);
  const [dishData, setDishData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleAddDish = () => {
    if (!dishData.name || !dishData.category || !dishData.price) {
      alert("Please fill all required fields!");
      return;
    }

    onAddDish(dishData);
    setDishData({ name: "", category: "", price: "", description: "" });
    setIsDishDialogOpen(false);
  };

  return (
    <div className="w-[1171px] p-[20px] bg-white mt-[24px] rounded-[12px]">
      <p className="text-[20px] font-semibold mb-4">All Dishes</p>

      <div className="flex flex-wrap gap-4">
        <AddDishCard onClick={() => setIsDishDialogOpen(true)} />

        {dishes.map((dish, index) => (
          <FoodCard key={index} dish={dish} />
        ))}
      </div>

      <AddDishDialog
        isOpen={isDishDialogOpen}
        onClose={() => setIsDishDialogOpen(false)}
        dishData={dishData}
        setDishData={setDishData}
        handleAddDish={handleAddDish}
        categories={categories}
      />
    </div>
  );
}
