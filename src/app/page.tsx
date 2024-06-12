/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
// import Navbar from "../app/landpage/components/Navbar";
import Pic1 from "@/images/pic1.jpeg";
import Posing from "@/images/posing.jpeg";
import Practice from "@/images/practice.jpeg";
import LandingNavbar from "@/components/layouts/landing-navbar/landing_navbar";

export default function LandingPage() {
  return (
    <div>
      <div className="bg-gray-900 relative flex place-items-start justify-center w-full max-lg:hidden">
        <LandingNavbar />
      </div>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Amlan's LDRRM Office's goal is to keep the community safe by
              managing hazards & preparing for disasters.
            </h1>
            <p className="mb-8 leading-relaxed">
              Climate Resilient & Disaster Ready
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Contact Us
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              We'll respond as soon as possible.
            </p>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative rounded"></div>
          </div>
        </div>
      </section>

      <footer className="h-auto w-full flex items-center justify-center bg-gray-900">
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                For any immediate emergency, please contact the appropriate
                office:
              </h1>
              <p className="leading-relaxed">
                Official MDRRMO No - 0955 788 4396 <br /> Amlan PNP -
                09176349162 <br /> Amlan Fire Station - 09978043965 <br />
                Ambulance - 09169100718
              </p>
            </div>

            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative h-[150%]">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={Pic1}
                  />
                  <div className="bg-gray-900 px-8 py-10 relative z-10 w-full border-4 border-gray-800 opacity-0 hover:opacity-100 h-full">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Amlan Information
                    </h2>
                    <p className="leading-relaxed">
                      Amlan People Center, F67F+VC4, Negros Oriental
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative h-[150%]">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={Posing}
                  />
                  <div className="bg-gray-900 px-8 py-10 relative z-10 w-full border-4 border-gray-800 opacity-0 hover:opacity-100 h-full">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Amlan Information
                    </h2>
                    <p className="leading-relaxed">
                      Facebook - facebook/ldrrmoamlan
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative h-[150%]">
                  <Image
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={Practice}
                  />
                  <div className="bg-gray-900 px-8 py-10 relative z-10 w-full border-4 border-gray-800 opacity-0 hover:opacity-100 h-full">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                      Amlan Information
                    </h2>
                    <p className="leading-relaxed">
                      Weekdays: 8:00AM - 5:00PM <br /> Saturday-Sunday: CLOSED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <footer className="text-gray-400 body-font pt-20 w-full bg-gray-900">
        <div className="container mx-auto px-5 py-4">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Copyright Notice
              </h2>
              <p className="leading-relaxed text-base">
                © 2023 Risk Mapping and Management System for the Municipality
                of Amlan (LDRRMO). All rights reserved. No part of this system
                may be reproduced, distributed, or transmitted in any form or by
                any means, including photocopying, recording, or other
                electronic or mechanical methods, without the prior written
                permission of the LDRRMO, except in the case of brief quotations
                embodied in critical reviews and certain other noncommercial
                uses permitted by copyright law.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
