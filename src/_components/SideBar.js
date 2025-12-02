"use client";
import { LogoIcon } from "@/_icons/logoIcon";
import { FoodMenuIcon } from "@/_icons/FoodMenuIcon";
import { TruckIcon } from "@/_icons/TruckIcon";
import { SettingsIcon } from "@/_icons/SettingsIcon";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="w-[205px] h-[1150px] p-[36px_20px] items-center bg-white">
      <div className="flex gap-[8px]">
        <div>
          <LogoIcon />
        </div>
        <div>
          <div className="text-[18px] font-semibold">NomNom</div>
          <div className="text-[#71717A]">Swift delivery</div>
        </div>
      </div>

      <div className="mt-[40px] flex flex-col gap-[24px]">
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
  );
}
