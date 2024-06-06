"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserNav } from "@/components/application/user-nav";

export function NavigationMenuDemo({ data }: any) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <NavigationMenu className="flex flex-col justify-start h-full">
          <NavigationMenuList className="flex flex-col gap-3">
            <NavigationMenuItem>
              <div className="group">
                <Link href="/application" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                  >
                    <div className="relative group flex items-center">
                      <img
                        src="/icons/dashboard-icon.png"
                        alt="Dashboard Icon"
                        className="w-6 h-6 mt-1"
                      />
                      <span className="ml-2 text-sm leading-5">Dashboard</span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="group">
                <Link href="/application/requests" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                  >
                    <div className="relative group flex items-center">
                      <img
                        src="/icons/request-icon.png"
                        alt="Requests Icon"
                        className="w-6 h-6 mt-1"
                      />
                      <span className="ml-1 text-sm leading-5 mr-3">
                        Requests
                      </span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="group">
                <Link href="/application/employees" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                  >
                    <div className="relative group flex items-center">
                      <img
                        src="/icons/employees-icon.png"
                        alt="Employees Icon"
                        className="w-6 h-6 mt-1"
                      />
                      <span className="ml-2 text-sm leading-5">Employees</span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <div className="group">
                <Link href="/application/inventory" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`bg-transparent ${navigationMenuTriggerStyle()}`}
                  >
                    <div className="relative group flex items-center">
                      <img
                        src="/icons/inventory-icon.png"
                        alt="Inventory Icon"
                        className="w-6 h-6 mt-1 mr-1"
                      />
                      <span className="ml-1 text-sm leading-5 mr-1">
                        Inventory
                      </span>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <UserNav data={data} /> */}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
