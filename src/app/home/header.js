import { ArrowRightIcon } from "@/_icons/ArrowRightIcon";
import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
import { LocationIcon } from "@/_icons/LocationIcon";
import { LogoIcon } from "@/_icons/logoIcon";
import { ShoppingCardIcon } from "@/_icons/ShoppingCardIcon";
import { UserIcon } from "@/_icons/UserIcon";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="w-full h-[196px] bg-[#18181B] p-[12px_88px] items-center justify center flex">
      <div className="w-[1440px] h-[172px] flex items-center justify-between ">
        <div className="flex gap-3 ">
          <LogoIcon />
          <div>
            <CompanyNameIcon />
            <span className="text-white text-xs">Swift delivery</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[251px] h-[36px] bg-white rounded-full ">
            <LocationIcon />
            <ArrowRightIcon />
          </div>
          <div>
            <div className="w-[36px] h-[36px] bg-white rounded-full ">
              <button>
                <ShoppingCardIcon />
              </button>

              <button className="color-white">
                <UserIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
