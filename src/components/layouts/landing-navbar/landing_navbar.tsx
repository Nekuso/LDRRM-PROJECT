import { LandingNavbarContents } from "./landing_navbar_contents";

export default function Navbar() {
  return (
    <div className="flex w-full h-fit justify-center place-items-center items-center px-5 py-4 bg-gray-900 text-white sticky top-0 z-[20]">
      <div className="w-full flex justify-between place-items-center">
        <LandingNavbarContents />
      </div>
    </div>
  );
}
