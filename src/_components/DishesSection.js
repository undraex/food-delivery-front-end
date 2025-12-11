"use client";
import AddDishCard from "./AddDishCard";
import FoodCard from "./FoodCard";
import { useFormik } from "formik";

const handleAddDish = async () => {
  const name = values.categoryName.trim();

  if (name !== "") {
    handleSubmit(values);
  } else {
    toast.error("Category name cannot be empty!");
  }
  handleSubmit();
  setIsDialogOpen(false);
};

const handleDeleteDish = async (id) => {
  try {
    await axios.delete(`http://localhost:999/food-category/${id}`);
    toast.success("success delete category");
  } catch (err) {
    toast.error("Something went wrong");
  }
  <button onClick={() => setIsDialogOpen(false)}>
    <CancelIcon />
  </button>;
};

export default function DishesSection({ formik, categories }) {
  const { values, handleChange, handleBlur, handleSubmit, resetForm } = formik;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  console.log(categories, "categories");
  return (
    <div>
      <div className="bg-white w-[1171px] p-6 rounded-md mt-[24px] mb-[24px]">
        {categories.map((category, index) => (
          <div key={category._id || index} className="mb-6">
            <p className="pb-[16px] text-[18px] font-semibold">
              {category.categoryName || category}
            </p>

            <div className="grid grid-cols-4 gap-3">
              <AddDishCard categoryName={category.categoryName || category} />
              {/* <FoodCard categoryId={category._id} /> */}
            </div>
          </div>
        ))}
      </div>
      <AddDishDialog
        isDialogOpen={isDialogOpen}
        newDish={values.dishName || ""}
        setNewDish={(value) =>
          handleChange({ target: { name: "dishName", value } })
        }
        setIsDialogOpen={setIsDialogOpen}
        handleAddDish={handleAddDish}
        handleDeleteDish={handleDeleteDish}
        formik={dishFormik}
      />
    </div>
  );
}
