import AvatarSection from "@/_components/AvatarSection";
import { Sidebar } from "@/_components/SideBar";

export default function Order() {
  return (
    <div className="w-full flex justify-center bg-[#F4F4F5]">
      <div className="max-w-[1440px] flex gap-[24px]">
        <Sidebar />
        <div className="w-[1171px] h-[1150px] items-center pt-[24px]">
          <AvatarSection />
          <div className="flex p-4 bg-white-500">
            <div>Order</div>
            <div>Calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
