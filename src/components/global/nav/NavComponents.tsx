import React from "react";
import { navdata } from "~/data/data";

export default function NavContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="bg-secondary shadow fixed w-full dark:bg-dark-primary z-50">
      <div className="  mx-auto w-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <img
              src="/favicon.svg"
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
        {children}
      </div>
    </nav>
  );
}

export function NavListContainer({
  children,
  pathName,
}: {
  children: React.ReactNode;
  pathName: string;
}) {
  // get current path
  const currentPath = pathName;
  return (
    <div className="flex items-center space-x-2 text-xs sm:text-sm">
      {children ? children : null}
      {/* disabled if it's really too small to fix anything */}
      <div className="space-x-1 bg-[#E2E8F0] rounded-full px-1 xs:px-2 py-1 flex items-center">
        {/* Assuming you want these to be links */}
        {navdata.map((item, idx) => (
          <a
            key={idx}
            href={item.href.toString()}
            className={`text-gray-800 hover:text-pink-500 px-1.5 py-2 font-lineSansTH rounded-full font-medium ${
              currentPath === item.href.toString() ||
              currentPath === item.href.toString() + "/"
                ? "bg-white"
                : "bg-[#E2E8F0]"
            } ${item.low_priority ? "hidden xs:block" : ""}`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
