import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
import { LogoIcon } from "@/_icons/logoIcon";

export default function Footer() {
  return (
    <div className="w-full h-[755px] bg-[#18181B] justify-center items-center">
      <p className="bg-red-500 w-full h-[92px] text-[30px] font-semibold text-white items-center ">
        Fresh fast delivered
      </p>

      <div className="flex flex-col justify-center items-center">
        <div className="w-[1440px] h-[250px]">
          <div>
            <div className="flex flex-col gap-3">
              <LogoIcon />
              <CompanyNameIcon />
            </div>
            <span className="text-[12px] text-white flex flex-col">
              Swift delivery
            </span>
          </div>

          <div>
            <p className="text-[#71717A] text-[16px]">NOMNOM </p>
            <p className="text-white inter text-[16px]">Home </p>
            <p className="text-white inter text-[16px]">Contact us </p>
            <p className="text-white inter text-[16px]">Delivery zone </p>
          </div>
        </div>
      </div>
    </div>
  );
}
