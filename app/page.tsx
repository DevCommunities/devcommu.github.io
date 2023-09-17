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
    <main className="font-kanit min-h-screen min-w-min items-end bg-white align-middle text-black dark:text-white">
      <DefaultNavbar current_page="หน้าหลัก" />
      <section className="mx-0 mt-10 h-100 p-2 sm:grid sm:grid-cols-1  md:grid-cols-2 md:gap-4 md:px-20 md:py-10s ">
        <div className="hidden mx-auto sm:flex-wrap sm:flex h-96 sm:w-5/6 md:w-5/6 flex-col items-center self-center rounded align-middle flex">
          <HomeCarosel/>
        </div>
        <Coolbanner className="mx-6 mt-[10px] mx-[10%] mb-[35px]" />
      </section>
      <h2 className="mb-3 mt-10  text-center text-4xl text-black font-kanit">
        เมื่อหลักสูตรในปัจจุบัน
      </h2>
      <section className="bg-black border-0">
        <h2 className="mb-3 pt-6 text-center text-3xl text-white md:text-4xl">
          อาจตามไม่ทันโลกยุคดิจิตอล
        </h2>
        <p className="mx-[35px] md:mx-[100px] mt-8 text-center text-base text-white lg:mx-80  border-0">
          โลกในปัจจุบันหมุนไปไวมาก เทคโนโลยีปัญญาประดิษฐ์(AI) หุ่นยนต์(Robotics)
          หรือ เมต้าเวิร์ส(Metaverse) เข้ามามีบทบาท ในชีวิตมากขึ้นเรื่อยๆ
          แต่การศึกษาในปัจจุบันไม่ได้สอนในเรื่องของทักษะโค้ดดิ้งและความรู้เกี่ยวกับเทคโนโลยีมากนัก
          ในขณะเดียวกันเด็กไทยที่สนใจด้านนี้กลับติดปัญหาด้านกำแพงภาษาและกระบวนการคิดแบบในห้องเรียนที่เน้นท่องจำ
          เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
        </p>
      </section>
      <div className="flex flex-row justify-center flex-wrap md:flex-nowrap bg-black pb-14 md:pt-[50px] pt-0 text-white md:px-40">
        <HomeCards 
          className="mx-6 md:mx-16 w-6/12 md:w-full items-center my-6 "
          imgPath="/home/homecards/acomputer.png"
          detail="สร้างสื่อการสอนการเขียน
            โปรแกรมที่เข้าถึงได้ทุกที่"
        />     
        <HomeCards
          className="mx-6 md:mx-16 md:w-full sm:w-[400px] items-center w-6/12 my-6"
          imgPath="/home/homecards/groupchat.png"
          detail="สร้างคอมมูนิตี้แบบไฮบริดจ์
            ในการเรียนรู้ร่วมกัน"
        />
        <HomeCards
          className="mx-6 md:mx-16 md:w-full items-center w-6/12 my-6"
          imgPath="/home/homecards/lights.png"
          detail="สอนนักเรียนให้คิดไอเดียและลงมือทำ
            ผ่าน Project Based Learning"
        />
      </div>
      <section className="min-h mt-12 bg-white px-0 pb-28 md:px-28">
        <section className="mx-0 mt-10 flex flex-wrap flex flex-col align-item items-center p-2 md:grid md:grid-cols-2 md:gap-4">
          {/* cneter vertical */}
          <div className="mt-16">
            <div className="justify-center self-center md:text-left text-center font-kanit md:text-4xl  text-2xl md:mx-16 md:my-10">
              “ได้ลองทำโปรเจคที่อยากทำ
              <span>
                <br></br>โดยมีพี่ๆคอยซัพพอร์ต
              </span>
              <span>
                <br></br>ทำให้การทำโปรเจคต์ไม่น่ากลัว”
              </span>
            </div>
            <div className="md:pl-14 md:pr-28 md:text-left mt-[20px] font-kanit text-md md:text-lg text-center">
              ทันรวี คำแหงพล
              <span>
                <br></br>นักเรียนในโครงการความร่วมมือระหว่าง DEVCOMMU
              </span>
              <span>
                <br></br>และโรงเรียนนวมินทร์ทราชูทิศ สตรีวิทยา2
              </span>
            </div>
          </div>
          <div className="mt-[50px] flex justify-center self-center md:mx-16 text-center">
            <Image
              src="/home/reviews/sun.webp"
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
