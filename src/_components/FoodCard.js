import * as React from "react";

export default function FoodCard() {
  return (
    <div className="w-[239px] h-[209px] border border-[#E4E4E7] p-[16px] rounded-[20px]">
      <div className="w-[200px] h-[89px] border border-[1px] rounded-[20px]">
        picture
      </div>
      <div className="flex justify-end">
        <p>Brie Crostini Appetizer</p>
        <p>$12.99</p>
      </div>
    </div>
  );
}
