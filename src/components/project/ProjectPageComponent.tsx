import { motion, useScroll } from "framer-motion";
import Marquee from "react-fast-marquee";
import { OursProjects, SlideProjectList } from "~/data/data";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";

interface ProjectPageComponentProps {
  text1: string;
  text2: string;
  text3: string;
  buttonText: string;
}

export default function ProjectPageComponent(props: ProjectPageComponentProps) {
  const { text1, text2, text3, buttonText } = props;
  return (
    <section className="mt-20">
      <div className=" h-4 max-w-80 bg-no-repeat mb-6 mx-auto bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain"></div>
      <section className="font-lineSansTH_XB text-[60px]">
        <h1>
          {text1} <span className="text-primary"> {text2}</span>
        </h1>
        <h1>{text3}</h1>
      </section>
      <motion.button
        whileHover={{ scale: 1.04 }}
        className="h-10 p-auto px-7 font-lineSansTH font-bold text-white bg-primary rounded-full my-5 hover:bg-[#c96380] transition-colors duration-200
      "
      >
        {buttonText}
      </motion.button>
    </section>
  );
}

export function ProjectCard(props: { project: Project; className?: string }) {
  return (
    // crop fill
    <div className={`h-full group ${props.className}`}>
      <div
        className="h-full bg-cover bg-center bg-no-repeat rounded-3xl group"
        style={{ backgroundImage: `url(${props.project.image})` }}
      >
        {/* explanation card */}
        <a
          href="#"
          className="group-hover:bg-opacity-90 group-hover:block h-full bg-accent-secondary bg-opacity-0 rounded-3xl trasition-all duration-500"
        >
          <div className="flex flex-col justify-center h-full p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <h1 className="text-2xl font-bold text-primary">
              {props.project.title}
            </h1>
            <p className="text-cutoff">{props.project.description}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export interface Project {
  title: string;
  description: string;
  image: string;
}

export function SlidingProjects({ className }: { className?: string }) {
  return (
    <div className="sticky top-20 z-10">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className={`w-screen${className ?? ""}`}
      >
        {OursProjects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-72 h-96 bg-white rounded-3xl shadow-lg mx-5 group"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}

export interface SlideProjectProps {
  title: string;
  description: string;
  image: string;
  type: string;
}

export function SlideProjectCard(props: { project: SlideProjectProps }) {
  return (
    <motion.div className="flex space-x-12 mb-10 snap-center">
      <div
        className=" h-56 w-[30rem] rounded-lg bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${props.project.image})` }}
      ></div>
      <div className="py-3">
        <h1 className="font-lineSansTH text-primary font-bold text-[18px]">
          {props.project.type}
        </h1>
        <h1 className="font-lineSansTH text-white font-bold text-[30px]">
          {props.project.title}
        </h1>
        <button className="h-8 min-w-24 px-4 bg-[#334155] mt-7 rounded-full transition-colors hover:bg-[#475d78]">
          <div className="flex items-center space-x-3">
            <div className="h-4 w-3 bg-[url('/images/project/arrow.png')] bg-contain bg-center bg-no-repeat"></div>
            <p className=" font-lineSansTH font-bold text-[17px]">
              อ่านเพิ่มเติม
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );
}

export function SlideBlackArea() {
  return (
    <div className="z-40 relative text-white">
      <div className="z-[400]">
        <section className=" bg-gradient-to-t from-[#1E1E1E] to-transparent min-h-[20vh]"></section>
        <section className=" bg-[#1E1E1E]  py-10">
          <div className="">
            <div className="font-bold font-lineSansTH_XB text-[42px]">
              พวกเราผ่านอะไรมาแล้วบ้าง
            </div>
            <div className="font-lineSansTH font-thin text-[#FFBE5C] text-[30px]">
              ลองเลื่อนอ่านเล่นๆได้นะ
            </div>
          </div>
        </section>
        <section className="bg-[#1E1E1E] flex space-x-10 p-10 ">
          <div className="  min-w-[13%] ">
            <div className=" bg-gradient-to-b from-white w-3 h-full mx-auto "></div>
          </div>
          <div
            className=" w-full p-10 h-[80vh] text-start snap-y overflow-y-scroll snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {SlideProjectList.map((project, index) => {
              return (
                <SlideProjectCard
                  key={index}
                  project={project}
                ></SlideProjectCard>
              );
            })}
          </div>
          <div></div>
        </section>
      </div>
      <div className="bg-[#1E1E1E]">
        <Footer></Footer>
      </div>
    </div>
  );
}
