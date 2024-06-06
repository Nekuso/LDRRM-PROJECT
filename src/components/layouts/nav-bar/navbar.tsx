import { MainNav } from "@/components/application/main-nav";
import { UserNav } from "@/components/application/user-nav";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Search } from "lucide-react";
import { NavigationMenuDemo } from "./Navigation-menu";

export default function Navbar({ data }: any) {
  return (
    <div className="h-[805px] 2xl:h-[882px] py-4 sticky top-0 z-10">
      <div className="flex flex-col place-items-center justify-between h-full py-8 border border-lightBorder gap-20 rounded-xl bg-white shadow-lg">
        <MainNav />
        <UserNav data={data} />
      </div>
    </div>
  );
}
