"use client";
import React, { useContext, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Context } from "../context/contextApi";
import Loader from "./Loader";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      router.push(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const pathname = usePathname();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 bg-white h-14 flex flex-row items-center justify-between px-4 md:px-5 shadow dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] cursor-pointer "
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="dark:text-white text-black text-xl" />
            ) : (
              <SlMenu className="dark:text-white text-black text-xl" />
            )}
          </div>
        )}
        <Link href="/" className="h-5 flex items-center cursor-pointer">
          <img
            className="h-full hidden md:block dark:hidden"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt="Youtube"
          />
          <img
            className="h-full hidden dark:md:block  "
            src="/yt-logo.png"
            alt="Youtube"
          />
          <img
            className="h-full md:hidden ml-2"
            src="/ytMobile.png"
            alt="Youtube"
          />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="dark:text-white text-black text-xl" />
          </div>
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onKeyUp={searchQueryHandler}
            className="bg-transparent outline-none text-black dark:text-white pr-5 pl-5 md:pl-0 md:group-focus-within:pl-0 w-44 md:w-64 lg:w-[500px]"
            placeholder="Search"
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center rounded-r-3xl border border-l-0 border-[#303030] bg-black/[0.1]"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="dark:text-white text-black text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="dark:text-white text-black text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
            <FiBell className="dark:text-white text-black text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
          <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
        </div>
      </div>
      
    </div>
  );
}
