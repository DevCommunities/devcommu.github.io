import React from "react";

type Data = {
  title: String;
  href: String; //incase using href
  nowAt: boolean;
}[];

const data: Data = [
  { title: "หน้าหลัก", href: "", nowAt: true },
  { title: "โครงการ", href: "", nowAt: false },
  { title: "สถานะ", href: "", nowAt: false },
  { title: "เกี่ยวกับเรา", href: "", nowAt: false },
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
  return (
    <div className="flex items-center space-x-2 ">
      {children ? children : null}
      <div className="flex space-x-1 bg-[#E2E8F0] rounded-full px-2 py-1">
        {/* Assuming you want these to be links */}
        {data.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className={`text-gray-800 hover:text-pink-500 0 px-3 py-2 font-lineSansTH  rounded-full  text-sm font-medium ${item.nowAt ? "bg-white" : ""}`}
            style={{ transition: "color 0.3s" }}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
