"use client";
import { Navbar } from "flowbite-react";
import Image from "next/image";

type available_page = "หน้าหลัก" | "โครงการ" | "ความรู้ฟรี" | "เกี่ยวกับเรา";
type available_nav = "/" | "/project" | "knowledge" | "/about";

interface NavbarProps {
  current_page: available_page;
}

interface NavbarLinkProps {
  name: available_page;
  nav: available_nav;
}

export default function DeafaultNavbar(props: NavbarProps) {
  const pages: NavbarLinkProps[] = [
    {
      name: "หน้าหลัก",
      nav: "/",
    },
    {
      name: "โครงการ",
      nav: "/project",
    },
    {
      name: "ความรู้ฟรี",
      nav: "/project",
    },
    {
      name: "เกี่ยวกับเรา",
      nav: "/about",
    },
  ];
  return (
    <Navbar fluid={true} rounded={true} className="bg-white font-kanit mx-10 my-6">
      <Navbar.Brand href="https://flowbite.com/">
        <Image src={"/devcommu.png"} width={120} height={120} alt="DevCommu" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {pages.map((page, index) => {
          return (
            <Navbar.Link
              key={index}
              href={page.nav}
              active={props.current_page === page.name}
              className="text-lg "
            >
              {page.name}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
