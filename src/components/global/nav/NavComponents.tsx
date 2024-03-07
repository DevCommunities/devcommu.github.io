import React from "react";
import { useState } from "react";

type Data = {
  title: String;
  href: String; //incase using href
}[];

const data: Data = [
  { title: "หน้าหลัก", href: "/#" },
  { title: "โครงการ", href: "/project" },
  { title: "สถานะ", href: "" },
  { title: "เกี่ยวกับเรา", href: "" },
];

export default function NavContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <nav className="bg-secondary shadow fixed w-full ">
      <div className="  mx-auto w-full px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-purple-600">
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

export function NavListContainer({ children }: { children: React.ReactNode }) {
  const [nowAt, setNowAt] = useState(0);
  return (
    <div className="flex items-center space-x-2 ">
      {children ? children : null}
      <div className="flex space-x-1 bg-[#E2E8F0] rounded-full px-2 py-1">
        {/* Assuming you want these to be links */}
        {data.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setNowAt(idx);
              console.log(idx);
            }}
            className={`text-gray-800 hover:text-pink-500 transition-all duration-300 0 px-3 py-2 font-lineSansTH  rounded-full   text-sm font-medium ${nowAt == idx ? "bg-white" : ""}`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
