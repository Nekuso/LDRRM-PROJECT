"use client";
import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  addVehicleToCart,
  removeVehicleFromCart,
} from "@/redux/slices/orderCartSlice";
import { cn } from "@/lib/utils";
import { IoMdRemove } from "react-icons/io";

type option = {
  id: number;
  name: string;
  description: string;
  status: string;
  image_url: string;
  plate_number: string;
  created_at: string;
  stock_quantity: number;
};

export const initiateColumns = (dispatch: any, vehiclesCart: any) => {
  const columns: ColumnDef<option>[] = [
    {
      id: "vehicles",
      header: "Vehicles",
      cell: ({ row }) => {
        return (
          <div className="flex place-items-between gap-4">
            <Avatar className="w-10 h-10 cursor-pointer z-0 rounded-md">
              <AvatarImage
                src={row.original.image_url}
                alt={row.original.image_url}
              />
              <AvatarFallback className="bg-slate-500 rounded-md text-white">
                {row.original.name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col justify-between 2xl:py-2">
              <p className="text-xs max-w-[100px] 2xl:max-w-[200px] truncate font-semibold ">
                {row.original.name}
              </p>
              <p className="text-xs max-w-[181px] truncate text-slate-500">
                Plate Number: {row.original.plate_number}
                <span
                  className={cn(
                    "",
                    row.original.stock_quantity === 0 ? "text-red-500" : ""
                  )}
                >
                  {" "}
                  {row.original.stock_quantity}
                </span>
              </p>
            </div>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: () => <div className="text-right pr-8">Actions</div>,
      cell: ({ row }) => {
        return (
          <div className="w-full flex gap-4 justify-end items-center">
            {vehiclesCart.some(
              (vehicle: any) => vehicle.vehicle_id === row.original.id
            ) ? (
              <Button
                className="text-xs font-bold rounded-md flex gap-2 hover:text-white transition-all duration-300 px-4 py-2 cursor-pointer bg-red-500 hover:bg-red-00"
                type="button"
                onClick={() => {
                  dispatch(removeVehicleFromCart(row.original.id));
                }}
              >
                <IoMdRemove />
              </Button>
            ) : (
              <Button
                className={cn(
                  "text-xs font-bold rounded-md flex gap-2 hover:text-white transition-all duration-300 px-6 py-2 cursor-pointer",
                  row.original.stock_quantity === 0
                    ? "bg-blue-600"
                    : "bg-applicationPrimary hover:bg-applicationPrimary/70"
                )}
                type="button"
                disabled={row.original.stock_quantity === 0}
                onClick={() => {
                  dispatch(
                    addVehicleToCart({
                      vehicle_id: row.original.id,
                      plate_number: row.original.plate_number,
                      name: row.original.name,
                      description: row.original.description,
                      image: row.original.image_url,
                      quantity: 1,
                    })
                  );
                }}
              >
                <div
                  className={cn(
                    "rounded-md text-white bg-blue-600 px-4 py-2 text-base",
                    row.original.stock_quantity === 0 ? "Out of Stock" : "Add"
                  )}
                >
                  {row.original.stock_quantity === 0 ? "Out of Stock" : "Add"}
                </div>
              </Button>
            )}
          </div>
        );
      },
    },
  ];
  return columns;
};
