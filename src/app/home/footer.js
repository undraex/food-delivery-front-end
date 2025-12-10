import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
import { LogoIcon } from "@/_icons/logoIcon";

export default function Footer() {
  return (
    <div className="flex flex-col w-full h-[755px] bg-[#18181B] justify-center items-center">
      <div className="bg-red-500 w-full h-[92px] text-[30px] font-semibold text-white ">
        Fresh fast delivered
      </div>

      <div className="flex flex-col">
        <div className="w-[1440px] h-[250px] flex-justify-between">
          <div>
            <div className="flex flex-col gap-3">
              <LogoIcon />
              <CompanyNameIcon />
            </div>
            <span className="text-[12px] text-white flex flex-col">
              Swift delivery
            </span>
          </div>

          <div className="flex flex-col gap-4 text-[16px]">
            <p className="text-[#71717A] ">NOMNOM </p>
            <p className="text-white inter ">Home </p>
            <p className="text-white inter ">Contact us </p>
            <p className="text-white inter ">Delivery zone </p>

            <div className="flex gap-4">
              <div className="flex flex-col">
                <p className="text-[#71717A] text-[16px]">MENU </p>
                <p className="text-white inter text-[16px]">Appetizers </p>
                <p className="text-white inter text-[16px]">Salads</p>
                <p className="text-white inter text-[16px]">Pizzas </p>
                <p className="text-white inter text-[16px]">Main dishes </p>
                <p className="text-white inter text-[16px]">Desserts </p>
              </div>

              <div className="flex flex-col">
                <p className="text-white inter text-[16px]">Side dish </p>
                <p className="text-white inter text-[16px]">Brunch</p>
                <p className="text-white inter text-[16px]">Desserts </p>
                <p className="text-white inter text-[16px]">Beverages </p>
                <p className="text-white inter text-[16px]">
                  Fish & Sea foods{" "}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[#71717A] text-[16px]">FOLLOW US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
