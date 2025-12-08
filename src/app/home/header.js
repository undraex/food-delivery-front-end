import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
import { LogoIcon } from "@/_icons/logoIcon";

export default function Header() {
  return (
    <div className="w-full h-[196px] bg-[#18181B] p-[12px_88px] items-center justify center">
      <div className="w-[1440px] h-[172px] justify-between ">
        <div className="flex gap-3 justify-center ">
          <LogoIcon />
          <div>
            <CompanyNameIcon />
            <span className="text-white text-xs">Swift delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}
