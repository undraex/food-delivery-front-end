// "use client";
// import { useState, useEffect } from "react";
// import { PlusIcon } from "@/_icons/PlusIcon";
// import { AddCategoryDialog } from "./AddCategoryDialog";
// import { Badge } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";

// export function CategorySection() {
//   const [categories, setCategories] = useState([]);
//   const [newCategory, setNewCategory] = useState("");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch("/api/categories");
//       const data = await response.json();
//       setCategories(data);
//     } catch (err) {
//       //   console.error("Error fetching categories:", err);
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
//     if (newCategory.trim() === "") return;

//     setLoading(true);
//     try {
//       const response = await fetch("/api/categories", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: newCategory.trim() }),
//       });

//       if (response.ok) {
//         const addedCategory = await response.json();
//         setCategories([...categories, addedCategory]);
//         setNewCategory("");
//         setIsDialogOpen(false);
//       } else {
//         alert("Failed to add category");
//       }
//     } catch (error) {
//       console.error("Error adding category:", error);
//       alert("Error adding category");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCloseDialog = () => {
//     setIsDialogOpen(false);
//     setNewCategory("");
//   };

//   return (
//     <>
//       <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
//         <p className="text-[20px] font-semibold">Dishes category</p>

//         <div className="flex flex-wrap gap-2 mt-4">
//           {categories.map((category, index) => (
//             <Badge key={index} category={category} count={1}></Badge>
//           ))}
//           <Button onClick={() => setIsDialogOpen(true)}>
//             <PlusIcon />
//           </Button>
//         </div>
//       </div>

//       <AddCategoryDialog
//         isOpen={isDialogOpen}
//         newCategory={newCategory}
//         setNewCategory={setNewCategory}
//         onClose={handleCloseDialog}
//         onAdd={handleAddCategory}
//       />
//     </>
//   );
// }

// src/_components/CategorySection.js
"use client";
import { useState, useEffect } from "react";
import { PlusIcon } from "@/_icons/PlusIcon";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AddCategoryDialog } from "./AddCategoryDialog";

export function CategorySection() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error fetching categories:", err);
      setCategories([
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
      ]);
    }
  };

  const handleAddCategory = async () => {
    if (newCategory.trim() === "") return;

    setLoading(true);
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newCategory.trim() }),
      });

      if (response.ok) {
        const addedCategory = await response.json();
        setCategories([...categories, addedCategory]);
        setNewCategory("");
        setIsDialogOpen(false);
      } else {
        alert("Failed to add category");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Error adding category");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewCategory("");
  };

  return (
    <>
      <div className="w-[1171px] h-[176px] p-[24px] bg-white rounded-[12px] mt-[24px]">
        <p className="text-[20px] font-semibold">Dishes category</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              className="bg-white h-[36px] p-[8px_16px] text-black border border-red rounded-full"
            >
              {category}
              <Badge>1</Badge>
            </Button>
          ))}
          <button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon />
          </button>
        </div>
      </div>

      <AddCategoryDialog
        isOpen={isDialogOpen}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        onClose={handleCloseDialog}
        onAdd={handleAddCategory}
      />
    </>
  );
}
