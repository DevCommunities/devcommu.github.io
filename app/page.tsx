"use client";
import "./globals.css";
import DefaultNavbar from "@/components/Navbar";
import { useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Coolbanner from "@/components/home/Coolbanner";
import HomeCarosel from "@/components/home/Carosel";
import HomeCards from "@/components/home/HomeCard";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <main className="min-h-screen min-w-min items-end bg-white align-middle font-kanit text-black dark:text-white">
      <DefaultNavbar current_page="หน้าหลัก" />
      <section className="h-100 md:py-10s mx-0 mt-10 p-2 sm:grid  sm:grid-cols-1 md:grid-cols-2 md:gap-4 md:px-20 ">
        <div className="mx-auto flex hidden h-96 flex-col items-center self-center rounded align-middle sm:flex sm:w-5/6 sm:flex-wrap md:w-5/6">
          <HomeCarosel />
        </div>
        <Coolbanner className="mx-6 mx-[10%] mb-[35px] mt-[10px]" />
      </section>
      <h2 className="mb-3 mt-10  text-center font-kanit text-4xl text-black">
        เมื่อหลักสูตรในปัจจุบัน
      </h2>
      <section className="border-0 bg-black">
        <h2 className="mb-3 pt-6 text-center text-3xl text-white md:text-4xl">
          อาจตามไม่ทันโลกยุคดิจิตอล
        </h2>
        <p className="mx-[35px] mt-8 border-0 text-center text-base text-white md:mx-[100px]  lg:mx-80">
          โลกในปัจจุบันหมุนไปไวมาก เทคโนโลยีปัญญาประดิษฐ์(AI) หุ่นยนต์(Robotics)
          หรือ เมต้าเวิร์ส(Metaverse) เข้ามามีบทบาท ในชีวิตมากขึ้นเรื่อยๆ
          แต่การศึกษาในปัจจุบันไม่ได้สอนในเรื่องของทักษะโค้ดดิ้งและความรู้เกี่ยวกับเทคโนโลยีมากนัก
          ในขณะเดียวกันเด็กไทยที่สนใจด้านนี้กลับติดปัญหาด้านกำแพงภาษาและกระบวนการคิดแบบในห้องเรียนที่เน้นท่องจำ
          เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
        </p>
      </section>
      <div className="flex flex-row flex-wrap justify-center bg-black pb-14 pt-0 text-white md:flex-nowrap md:px-40 md:pt-[50px]">
        <HomeCards
          className="mx-6 my-6 w-6/12 items-center md:mx-16 md:w-full "
          imgPath="/home/homecards/acomputer.png"
          detail="สร้างสื่อการสอนการเขียน
            โปรแกรมที่เข้าถึงได้ทุกที่"
        />
        <HomeCards
          className="mx-6 my-6 w-6/12 items-center sm:w-[400px] md:mx-16 md:w-full"
          imgPath="/home/homecards/groupchat.png"
          detail="สร้างคอมมูนิตี้แบบไฮบริดจ์
            ในการเรียนรู้ร่วมกัน"
        />
        <HomeCards
          className="mx-6 my-6 w-6/12 items-center md:mx-16 md:w-full"
          imgPath="/home/homecards/lights.png"
          detail="สอนนักเรียนให้คิดไอเดียและลงมือทำ
            ผ่าน Project Based Learning"
        />
      </div>
      <section className="min-h mt-12 bg-white px-0 pb-28 md:px-28">
        <section className="align-item mx-0 mt-10 flex flex flex-col flex-wrap items-center p-2 md:grid md:grid-cols-2 md:gap-4">
          {/* cneter vertical */}
          <div className="mt-16">
            <div className="justify-center self-center text-center font-kanit text-2xl md:mx-16  md:my-10 md:text-left md:text-4xl">
              “ได้ลองทำโปรเจคที่อยากทำ
              <span>
                <br></br>โดยมีพี่ๆคอยซัพพอร์ต
              </span>
              <span>
                <br></br>ทำให้การทำโปรเจคต์ไม่น่ากลัว”
              </span>
            </div>
            <div className="text-md mt-[20px] text-center font-kanit md:pl-14 md:pr-28 md:text-left md:text-lg">
              ทันรวี คำแหงพล
              <span>
                <br></br>นักเรียนในโครงการความร่วมมือระหว่าง DEVCOMMU
              </span>
              <span>
                <br></br>และโรงเรียนนวมินทร์ทราชูทิศ สตรีวิทยา2
              </span>
            </div>
          </div>
          <div className="mt-[50px] flex justify-center self-center text-center md:mx-16">
            <Image
              src="/home/reviews/sun.png"
              className="h-96 w-96 items-center rounded-full"
              width={1200}
              height={1200}
              alt="reviewer profile"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
