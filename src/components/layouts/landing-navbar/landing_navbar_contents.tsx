import Image from "next/image";

import Amlanlogo from "@/images/amlanlogo.png";

export function LandingNavbarContents() {
  return (
    <nav className="bg-opacity-75 backdrop-blur-lg fixed w-full top-0 z-10 p-4">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <a href="/" className="hover:text-blue-600">
              <Image
                alt="gallery"
                className=" w-[25%] h-[25%]"
                src={Amlanlogo}
              />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="text-white hover:text-blue-600 transition duration-300 text-xl font-medium relative inline-block"
            >
              Home
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50 rounded-md"></span>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-600 transition duration-300 text-xl font-medium relative inline-block"
            >
              About
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50 rounded-md"></span>
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-600 transition duration-300 text-xl font-medium relative inline-block"
            >
              Contact
              <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 hover:opacity-50 rounded-md"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
