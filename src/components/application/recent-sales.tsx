import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 1</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 2</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 3</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 4</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 5</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
      <div className="flex items-start">
        <Avatar className="h-9 w-9">
          <AvatarImage src="" alt="Avatar" />
          <AvatarFallback>
            <FaUser></FaUser>
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User 6</p>
          <div className="font-normal text-sm text-green-400">Active</div>
        </div>
      </div>
    </div>
  );
}
