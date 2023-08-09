"use client";
import "./globals.css";
import DefaultNavbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import Coolbanner from "@/components/home/Coolbanner";
import HomeCarosel from "@/components/home/Carosel";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <main className="min-w-scre min-h-screen items-end bg-white px-20 pb-80 align-middle text-black dark:text-white">
      <DefaultNavbar current_page="หน้าหลัก" />
      <section className="grid grid-cols-2 gap-4 py-10">
        <div className="mx-16 flex h-72 w-5/6 flex-col items-center self-center rounded-sm align-middle">
          <HomeCarosel />
        </div>
        <Coolbanner className="mx-6" />
      </section>
    </main>
  );
}
