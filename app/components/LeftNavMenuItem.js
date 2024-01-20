import React from "react";

export default function LeftNavMenuItem({ text, icon, className, action }) {
  return (
    <div
            className={
                "dark:text-white text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg dark:hover:bg-white/[0.15] hover:bg-black/[0.15] " +
                className
            }
            onClick={action}
        >
            <span className="text-xl mr-5">{icon}</span>
            {text}
        </div>
  );
}
