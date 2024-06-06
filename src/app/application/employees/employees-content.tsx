import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { BsFillEnvelopeArrowUpFill } from "react-icons/bs";
import { columns } from "./data-table-components/columns";
import { DataTable } from "./data-table-components/data-table";
import { FaPersonBooth } from "react-icons/fa";

export default function Page({ dataEmployees, allRoles }: any) {
  return (
    <Tabs
      defaultValue="Employees"
      className="w-full flex max-w-[1840px] flex-col justify-center place-items-center gap-3"
    >
      <div className="w-full flex justify-between">
        <TabsList className="h-fit bg-darkComponentBg border border-lightBorder rounded-lg gap-2">
          <TabsTrigger
            value="Employees"
            className="data-[state=active]:bg- data-[state=inactive]:hover:bg-/80
            data-[state=inactive]:hover:text-slate-500
            data-[state=active]:text-slate-500 rounded-md px-4 py-2 transition-all duration-300 flex gap-2"
          >
            <FaPersonBooth />
            Employees
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="Employees" className="w-full h-full ">
        <DataTable data={dataEmployees} columns={columns} />
      </TabsContent>
    </Tabs>
  );
}

// class="inline-flex items-center justify-center p-1
// text-muted-foreground h-fit rounded-lg gap-2 bg-white"
