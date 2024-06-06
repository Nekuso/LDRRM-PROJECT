import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuDemo } from "../layouts/nav-bar/Navigation-menu";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <nav className={cn("", className)} {...props}>
          <h1 className="font-black text-lg text-blue-600 text-center mb-4">
            LDRRMS
          </h1>
          <NavigationMenuDemo />
        </nav>
      </div>
    </div>
  );
}
