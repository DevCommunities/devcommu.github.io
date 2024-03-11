import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

import { About } from "~/data/data";
import Marquee from "react-fast-marquee";

interface AboutUsPageComponentProps {
  text1: string;
}

export interface AboutUs {
  people: {
    name: String;
    description: String;
    role: String;
    img: String;
  }[];
}

export default function AboutUsPageComponent(props: AboutUsPageComponentProps) {
  const { text1 } = props;
  return (
    <section className="mt-20">
      <div className=" h-4 max-w-80 bg-no-repeat mb-6 mx-auto bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain"></div>
      <section className="font-lineSansTH_XB text-[60px]">
        <h1>{text1}</h1>
      </section>
    </section>
  );
}

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 300,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  const containerRef = useRef<any>(null);
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("max-h-[30vh] relative", className)}
      animate={{
        backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-secondary bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        <div className="absolute inset-0   h-full w-full z-0 opacity-" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-4xl mx-auto text-center text-black  text-4xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-white">
        {revealText}
      </div>
    </motion.div>
  );
};

export function MaskEffectDevCommu() {
  return (
    <MaskContainer
      revealText={
        <p className="max-w-4xl mx-auto h-20 w-52 bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain bg-no-repeat  text-4xl font-bold"></p>
      }
      className="h-[40rem]"
    >
      <div className=" w-[800px] h-52 bg-[url('/images/about/bg_word.png')] bg-center bg-cover bg-no-repeat">
        <p className=" max-w-4xl my-32 mx-auto h-20 w-52 bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain bg-no-repeat  text-4xl font-bold"></p>
      </div>
    </MaskContainer>
  );
}

export function TextDetail() {
  return (
    <>
      <p className=" font-lineSansTH text-[18px] w-[50%] mx-auto font-bold text-center">
        DevCommu ถูกก่อตั้งขึ้น ด้วยจุดประสงค์ ที่จะมอบและส่งต่อความรู้
        ส่งต่อโอกาส ในด้านเทคโนโลยี และการเขียนโปรแกรม ให้กับนักเรียน
        โดยมีจุดมุ่งหมายที่จะเป็นเหมือน FreeCodeCamp ที่มีเนื้อหาที่ดี
        และมีคุณภาพ แต่เข้าถึงได้ง่ายสำหรับเด็กที่ไม่ได้เก่งภาษาอังกฤษ
        โดยไม่มีค่าใช้จ่ายใดๆทั้งสิ้น<br></br> รวมทั้งเป็นสังคม เป็นพื้นที่
        สำหรับผู้ที่รักในการแบ่งปันความรู้ และการเรียนรู้ รวมถึงทำโปรเจ็คสนุกๆ
        ผ่านการทำเนื้อหาบน YouTube ร่วมกับผู้เชี่ยวชาญ
        จัดค่ายร่วมกับโรงเรียนและค่ายอื่นๆ<br></br> ทำโปรเจ็คร่วมกันกับสมาชิก
        และไปแข่งขันกระชับมิตร
      </p>
    </>
  );
}

export function PeopleCard(props: { people: AboutUs }) {
  return (
    <section className="flex flex-col space-y-3">
      {props.people.people.map((people, index) => (
        <div key={index} className="w-full h-[15rem] p-5  flex space-x-5">
          <div
            className={`h-full w-48 bg-cover bg-center rounded-lg`}
            style={{ backgroundImage: `url(${people.img})` }}
          ></div>
          <div className="w-full ">
            <p className=" text-start font-lineSansTH text-primary font-bold text-[18px]">
              {people.role}
            </p>
            <p className="text-start font-lineSansTH font-[900] text-[39px]">
              {people.name}
            </p>
            <div className="flex font-lineSansTH font-bold text-[#989DA5] text-[20px] text-start">
              <p className="text-[33px]">“</p>
              <p className="mt-3">{people.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export function SlidingPeople() {
  return (
    <Marquee
      gradient={false}
      speed={50}
      pauseOnHover={true}
      className={`w-screen mb-80`}
    >
      {About?.map((people, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className=" w-[40rem]  mt-20  rounded-3xl  mx-5 group"
        >
          <PeopleCard people={people} />
        </motion.div>
      ))}
    </Marquee>
  );
}
