// import { ArrowRightIcon } from "@/_icons/ArrowRightIcon";
// import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
// import { LocationIcon } from "@/_icons/LocationIcon";
// import { LogoIcon } from "@/_icons/LogoIcon";
// import { ShoppingCardIcon } from "@/_icons/ShoppingCardIcon";
// import { UserIcon } from "@/_icons/UserIcon";
// import { Button } from "@/components/ui/button";

// export default function Header() {
//   return (
//     <div className="w-full h-[196px] bg-[#18181B] p-[12px_88px] items-center justify center flex">
//       <div className="w-[1440px] h-[172px] flex items-center justify-between ">
//         <div className="flex gap-3 ">
//           <LogoIcon />
//           <div>
//             <CompanyNameIcon />
//             <span className="text-white text-xs">Swift delivery</span>
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="w-[251px] h-[36px] bg-white rounded-full ">
//             <LocationIcon />
//             <ArrowRightIcon />
//           </div>
//           <div>
//             <div className="w-[36px] h-[36px] bg-white rounded-full ">
//               <button>
//                 <ShoppingCardIcon />
//               </button>

//               <button className="color-white">
//                 <UserIcon />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { LogoIcon } from "@/_icons/LogoIcon";
import { CompanyNameIcon } from "@/_icons/CompanyNameIcon";
import { LocationIcon } from "@/_icons/LocationIcon";
import { ArrowRightIcon } from "@/_icons/ArrowRightIcon";
import { ShoppingCardIcon } from "@/_icons/ShoppingCardIcon";
import { UserIcon } from "@/_icons/UserIcon";



export default function Header() {
  return (
    <div className="w-full bg-[#18181B] py-6">
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {LogoIcon && <LogoIcon />}
          <div className="flex flex-col">
            {CompanyNameIcon && <CompanyNameIcon />}
            <span className="text-white text-xs">Swift delivery</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Delivery Address Button */}
          <button className="bg-white rounded-full px-4 py-2 flex items-center gap-2 min-w-[251px] h-[36px]">
            {LocationIcon && <LocationIcon />}
            <span className="text-sm text-red-500 font-medium flex-1 text-left">
              Delivery address: Add Location
            </span>
            
            {ArrowRightIcon && <ArrowRightIcon />}
          </button>

          {/* Shopping Cart Button */}
          <button className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            {ShoppingCardIcon && <ShoppingCardIcon />}
          </button>

          {/* User Button */}
          <button className="w-[36px] h-[36px] bg-[#FF5722] rounded-full flex items-center justify-center hover:bg-[#E64A19] transition-colors">
            {UserIcon && <UserIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}