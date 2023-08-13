"use client";
import "./globals.css";
import DefaultNavbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Typewriter from "typewriter-effect";
import Coolbanner from "@/components/home/Coolbanner";
import HomeCarosel from "@/components/home/Carosel";
import HomeCards from "@/components/home/HomeCard";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <main className="min-h-screen min-w-min items-end bg-white align-middle text-black dark:text-white">
      <DefaultNavbar current_page="หน้าหลัก" />
      <section className="mx-0 mt-10 flex flex-wrap p-2 md:grid md:grid-cols-2 md:gap-4 md:px-20 md:py-10">
        <div className="mx-16 hidden h-72 w-5/6 flex-col items-center self-center rounded-sm align-middle md:flex">
          <HomeCarosel />
        </div>
        <Coolbanner className="mx-6" />
      </section>
      <h2 className="mb-3 mt-10 text-center font-serif text-4xl text-black">
        เมื่อหลักสูตรในปัจจุบัน
      </h2>
      <section className="bg-black">
        <h2 className="mb-3 pt-6 text-center font-serif text-3xl text-white md:text-4xl">
          อาจตามไม่ทันโลกยุคดิจิตอล
        </h2>
        <p className="mx-4 mt-8 text-center text-base text-white md:mx-80">
          โลกในปัจจุบันหมุนไปไวมาก เทคโนโลยีปัญญาประดิษฐ์(AI) หุ่นยนต์(Robotics)
          หรือ เมต้าเวิร์ส(Metaverse) เข้ามามีบทบาท ในชีวิตมากขึ้นเรื่อยๆ
          แต่การศึกษาในปัจจุบันไม่ได้สอนในเรื่องของทักษะโค้ดดิ้งและความรู้เกี่ยวกับเทคโนโลยีมากนัก
          ในขณะเดียวกันเด็กไทยที่สนใจด้านนี้กลับติดปัญหาด้านกำแพงภาษาและกระบวนการคิดแบบในห้องเรียนที่เน้นท่องจำ
          เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
        </p>
      </section>
      <div className="flex flex-row bg-black pb-14 pt-16 text-white md:px-40">
        <HomeCards
          className="mx-6 md:mx-16"
          imgPath="/home/homecards/acomputer.png"
          detail="สร้างสื่อการสอนการเขียน
            โปรแกรมที่เข้าถึงได้ทุกที่"
        />
        <HomeCards
          className="mx-6 md:mx-16"
          imgPath="/home/homecards/groupchat.png"
          detail="สร้างคอมมูนิตี้แบบไฮบริดจ์
            ในการเรียนรู้ร่วมกัน"
        />
        <HomeCards
          className="mx-6 md:mx-16"
          imgPath="/home/homecards/lights.png"
          detail="สอนนักเรียนให้คิดไอเดียและลงมือทำ
            ผ่าน Project Based Learning"
        />
      </div>
      <section className="min-h mt-12 min-h-screen bg-white px-0 md:px-56">
        <h1>dadad</h1>
      </section>
    </main>
  );
}
