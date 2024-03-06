import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ReactPlayer from "react-player";

interface Text {
  text1: String;
  text2: String;
  text3: String;
}

export default function HomePageContainer({ text1, text2, text3 }: Text) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const side1 = useTransform(scrollYProgress, [0, 1], ["-40%", "-150%"]);
  const side2 = useTransform(scrollYProgress, [0, 1], ["83%", "130%"]);
  const side3 = useTransform(scrollYProgress, [0, 1], ["86%", "120%"]);
  console.log(side1.get());
  console.log(side2.get());

  return (
    <section className="mt-20">
      <div className=" h-4 max-w-80 bg-no-repeat mb-6 mx-auto bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain"></div>
      <section className="font-lineSansTH_XB text-[60px]">
        <h1>
          {text1} <span className="text-primary"> {text2}</span>
        </h1>
        <h1>{text3}</h1>
      </section>
      <button
        className="h-10 p-auto px-7 font-lineSansTH font-bold text-white bg-primary rounded-full my-5 hover:bg-[#c96380] transition-colors duration-200
      "
      >
        {" "}
        สนใจจัดกิจกรรม
      </button>

      {/*SideBar effect Scrolling */}
      <motion.section
        style={{ x: side1 }}
        className={`fixed top-[13%] w-[50%] h-96  bg-20 bg-[url('/images/keyboard1.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ x: side2 }}
        className={`fixed top-[25%] h-96 w-full bg-20 bg-[url('/images/arduino1.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ x: side3 }}
        className={`fixed top-[20%] h-20 w-full bg-20 bg-[url('/images/python.png')] bg-contain bg-no-repeat`}
      ></motion.section>
    </section>
  );
}

export function VideoExample() {
  return (
    <section className=" w-[78%] my-32 h-full mx-auto rounded-xl bg-[url('/images/campPromote1Thumb.png')] bg-cover bg-center bg-no-repeat ">
      <video
        controls
        width="100%"
        poster="/videos/campPromote1/campPromote1_thump.png"
        className="rounded-xl"
      >
        <source
          src="/videos/campPromote1/campPromote1.mp4#t=0.1"
          type="video/mp4"
        />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
}

export function MoreDetail() {
  return (
    <section>
      <section className="flex space-x-10  w-[90%] mx-auto ">
        <section className="flex w-[50%] text-start items-start">
          <section className="  w-full font-lineSansTH font-bold text-[48px]">
            เมื่อหลักสูตรปัจจุบัน<br></br> อาจตามไม่ทันโลกยุคดิจิทัล
          </section>
        </section>
        <section className="w-[50%]   items-start text-start">
          <section className="  w-full text-[#64748B] font-lineSansTH text-[20px]">
            เทคโนโลยีปัญญาประดิษฐ์ (AI) หุ่นยนต์ (Robotics)<br></br> หรือ
            Metaverseเข้ามามีบทบาท โลกทุกวันนี้หมุนเร็วมาก <br></br>
            ขณะเดียวกันเด็กไทยที่สนใจสาขานี้ประสบปัญหาอุปสรรคทางภาษา
            <br></br>และ กระบวนการคิดในห้องเรียนที่เน้นการท่องจำ
            <br></br>เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
          </section>
        </section>
      </section>
      <section className="flex space-x-10  w-[90%] mx-auto ">
        <section className="flex w-[50%] bg-[#E2E8F0] text-start items-start"></section>
        <section className="w-[50%]   items-start text-start">
          <section className="  w-full text-[#64748B] font-lineSansTH text-[20px]">
            เทคโนโลยีปัญญาประดิษฐ์ (AI) หุ่นยนต์ (Robotics)<br></br> หรือ
            Metaverseเข้ามามีบทบาท โลกทุกวันนี้หมุนเร็วมาก <br></br>
            ขณะเดียวกันเด็กไทยที่สนใจสาขานี้ประสบปัญหาอุปสรรคทางภาษา
            <br></br>และ กระบวนการคิดในห้องเรียนที่เน้นการท่องจำ
            <br></br>เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
          </section>
        </section>
      </section>
      <section className="flex space-x-10 bg-zinc-500 w-[90%] mx-auto ">
        <section className="flex w-[50%] text-start items-start">
          <section className="  w-full font-lineSansTH font-bold text-[48px]">
            เมื่อหลักสูตรปัจจุบัน<br></br> อาจตามไม่ทันโลกยุคดิจิทัล
          </section>
        </section>
        <section className="w-[50%]   items-start text-start">
          <section className="  w-full text-[#64748B] font-lineSansTH text-[20px]">
            เทคโนโลยีปัญญาประดิษฐ์ (AI) หุ่นยนต์ (Robotics)<br></br> หรือ
            Metaverseเข้ามามีบทบาท โลกทุกวันนี้หมุนเร็วมาก <br></br>
            ขณะเดียวกันเด็กไทยที่สนใจสาขานี้ประสบปัญหาอุปสรรคทางภาษา
            <br></br>และ กระบวนการคิดในห้องเรียนที่เน้นการท่องจำ
            <br></br>เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
          </section>
        </section>
      </section>
    </section>
  );
}
