import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="text-white pt-8 flex flex-row items-center lg:hidden">
        <Image src="images/logo.svg" alt="Logo" width={85} height={85} className="ml-8"></Image>
        <div className="ml-auto group">
          <span className="underline mr-5">Menu</span>
          <div className="hidden group-hover:block  absolute group-focus:block right-4 bg-[#403c27] text-white p-4 rounded-xl mt-4">
            <ul className="flex flex-col gap-4 text-[1.5rem] items-left ">
              <li className="hover:scale-110 transition-transform duration-300">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-150">
                <Link href={"/#services"}>Our Services</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-150">Portfilio</li>
              <li className="hover:scale-105 transition-transform duration-150 flex flex-row gap-2">
                <span>More Links</span>
                <Image src={"images/symbols/down.svg"} alt="Down Arrow" width={15} height={15}></Image>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-white pt-8 flex flex-row items-center max-lg:hidden">
        <Image src="images/logo.svg" alt="Logo" width={85} height={85} className="ml-8"></Image>
        <div className="invisible">
          <button className="bg-[#403c27] text-black px-4 py-4 text-[1rem] font-bold rounded-xl mr-8">Contact Us</button>
        </div>
        <div className="mx-auto flex items-center">
          <ul className="flex flex-row gap-4 text-[1.5rem] items-center">
            <li className="hover:scale-110 transition-transform duration-300">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-150">
              <Link href={"/#services"}>Our Services</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-150">Portfilio</li>
            <li className="hover:scale-105 transition-transform duration-150 flex flex-row gap-2">
              <span>More Links</span>
              <Image src={"images/symbols/down.svg"} alt="Down Arrow" width={15} height={15}></Image>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-[#FFD600] text-black px-4 py-4 text-[1rem] font-bold rounded-xl mr-8">Contact Us</button>
        </div>
        <Image src="images/logo.svg" alt="Logo" width={85} height={85} className="mr-8 invisible"></Image>
      </div>
    </>
  );
}
