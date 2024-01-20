// LeftNav component
import React, { Fragment, useContext } from "react";
import { Context } from "../context/contextApi";
import { useRouter } from "next/navigation";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";

export default function LeftNav() {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);
  const router = useRouter();
  
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
      case "home":
        setSelectedCategory(name);
        router.push("/");
        break;
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] h-full py-4 dark:bg-black bg-white fixed z-10 ${
        mobileMenu ? "left-0" : "-left-240px"
      } transition-all overflow-y-auto`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => (
          <Fragment key={item.name}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => clickHandler(item.name, item.type)}
              className={`${
                selectedCategory === item.name ? "dark:bg-white/[0.15] bg-black/[0.15]" : ""
              }`}
            />
            {item.divider && (
              <hr className="my-5 dark:border-white/[0.2] border-black/[0.2]" />
            )}
          </Fragment>
        ))}
        <hr className="my-5 dark:border-white/[0.2] border-black/[0.2]" />
        <div className="dark:text-white/[0.5] text-black/[0.5] text-[12px]">
          Clone by: JS Dev Hindi
        </div>
      </div>
    </div>
  );
}
