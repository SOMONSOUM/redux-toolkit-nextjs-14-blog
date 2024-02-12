'use client';

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navLinks } from "@/utils/utils";
import logo from "@/app/assets/logo.svg";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import Image from 'next/image';
import '@/styles/nav.css';
import CustomBtn from "@/customs/CustomBtn";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const router = usePathname();

  return (
    <>
      <div className="sticky w-full top-0 bg-grey z-10 flex justify-between items-center px-[51px] lg:px-8 py-[21px]">
        <Link className="" href={"/"}>
          <>
            <Image src={logo} alt="Credence logo" loading="lazy" />
          </>
        </Link>
        <div className="lg:flex lg:items-center gap-10 lg:w-[75%]">
          <div className="flex justify-between">
            <ul
              className={`absolute lg:static w-full lg:w-full flex justify-between p-4 ${openNav
                ? "top-[5rem] left-0 z-20 bg-grey lg:bg-transparent flex"
                : "top-[-20rem] left-0 bg-grey lg:bg-transparent"
                } flex flex-col lg:flex-row justify-center items-center lg:items-center lg:justify-start gap-4 py-4 lg:py-2 transition-all duration-700 ease-in`}
            >
              {navLinks?.map((el, index) => (
                <>
                  <li key={index}>
                    <Link
                      href={el?.link}
                      className={`text-white text-[14px] leading-[20px] font-Inter font-thick py-[15px] px-[24px] rounded-[100px] bg-contrast ${router === el?.link ? "active-link" : ""
                        }`}
                    >
                      {el?.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
            <ul className="flex flex-col justify-center items-center lg:justify-start lg:flex-row gap-8 lg:ml-auto hidden lg:flex">
              <li>
                <span className="text-white cursor-pointer"><IoSearch /></span>
              </li>
              <li>
                <span>
                  <CustomBtn text="Subscribe" className="text-white py-[14px] px-[24px] bg-mainOrange rounded-[8px]" />
                </span>
              </li>
            </ul>
          </div>
          <button
            className="lg:hidden p-2 text-2xl text-white border border-textGreen rounded-md outline-none focus:border-white"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <GrClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </>
  )
}

export default Nav