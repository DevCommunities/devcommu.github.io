import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { OursProjects } from "~/data/data";
import Footer from "./Footer";

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

export function SlideBlackArea() {
  return (
    <div className="z-40 relative text-white">
      <div className="z-[400]">
        <section className=" bg-gradient-to-t from-[#1E1E1E] to-transparent min-h-[20vh]"></section>
        <section className=" bg-[#1E1E1E] min-h-[50vh] py-10 sticky">
          <div className="sticky top-20">
            <div className="font-bold font-lineSansTH_XB text-[48px]">
              พวกเราผ่านอะไรมาแล้วบ้าง
            </div>
            <div className="font-lineSansTH font-thin text-[#FFBE5C] text-[34px]">
              ลองเลื่อนอ่านเล่นๆได้นะ
            </div>
          </div>
          <section className="bg-[#1E1E1E] min-h-[400vh]"></section>
        </section>
        <div className="bg-[#1E1E1E]">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
