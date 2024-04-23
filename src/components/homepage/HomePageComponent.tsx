import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import { MoreDetailList, posterData } from "~/data/data";

interface Text {
  text1: String;
  text2: String;
  text3: String;
}

export default function HomePageContainer({ text1, text2, text3 }: Text) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const side1 = useTransform(scrollYProgress, [0, 1], ["-79%", "-200%"]);
  const side2 = useTransform(scrollYProgress, [0, 1], ["120%", "200%"]);
  const side3 = useTransform(scrollYProgress, [0, 1], ["120%", "200%"]);

  return (
    <section id="Home" className="flex flex-col items-center">
      <section className="mt-20 w-full flex flex-col items-center">
        <div className="h-16 w-32 bg-no-repeat  bg-[url('/images/DarkDevCommuWord.png')] bg-center bg-contain"></div>
        <section className="font-lineSansTH_XB text-2xl sm:text-3xl md:mb-3 mb-1 md:text-4xl lg:text-5xl text-center text-cutoff">
          <h1 className="md:mb-5">
            {text1} <span className="text-primary"> {text2}</span>
          </h1>
          <h1 className="">{text3}</h1>
        </section>
        <motion.button
          whileHover={{ scale: 1.04 }}
          className="h-10 p-auto px-7 font-lineSansTH font-bold text-white bg-primary rounded-full my-3 hover:bg-[#c96380] transition-colors duration-200"
        >
          สนใจจัดกิจกรรม
        </motion.button>

        {/*SideBar effect Scrolling */}
        <motion.section
          style={{ x: side1 }}
          className={`  hidden fixed top-[13%] w-[50%] h-96 bg-[url('/images/keyboard1.png')] bg-contain bg-no-repeat md:block`}
        ></motion.section>
        <motion.section
          style={{ x: side2 }}
          className={` hidden fixed top-[25%] h-96 w-[50%] bg-[url('/images/arduino1.png')] bg-contain bg-no-repeat md:block`}
        ></motion.section>
        <motion.section
          style={{ x: side3 }}
          className={` hidden fixed top-[20%] h-20 w-[50%] bg-[url('/images/python.png')] bg-contain bg-no-repeat md:block`}
        ></motion.section>
      </section>
    </section>
  );
}

export function VideoExample() {
  return (
    <section className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 lg:my-4 md:mx-auto rounded-xl bg-[url('/images/campPromote1Thumb.png')] bg-cover bg-center bg-no-repeat">
      <video controls width="100%" className="rounded-xl">
        <source src="/videos/campPromote1/campPromote1.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
}

export function MarqueePoster() {
  return (
    <section className=" flex space-x-4 md:h-96 h-60 w-[90%] mx-auto bg-zinc-100">
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        className="space-x-4"
      >
        {posterData.map((poster, index) => {
          return (
            <div
              key={index}
              className=" md:h-96 md:w-96 h-60 w-60 mx-3 bg-white"
            >
              <div
                className=" bg-cover bg center h-full w-full"
                style={{ backgroundImage: `url(${poster.img})` }}
              ></div>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}

export function MoreDetail() {
  return (
    <section>
      <section className="md:flex md:space-x-10 space-y-3  w-[90%] mx-auto my-10 ">
        <section className="flex md:w-[50%] w-full text-start items-start">
          <section className="  w-full font-lineSansTH md:space-y-5 font-bold md:text-5xl text-2xl">
            <p>เมื่อหลักสูตรปัจจุบัน</p>
            <p>อาจตามไม่ทันโลกยุคดิจิทัล</p>
          </section>
        </section>
        <section className="md:w-[50%]   items-start text-start">
          <section className="  w-full text-[#64748B] font-lineSansTH text-sm md:text-xl">
            เทคโนโลยีปัญญาประดิษฐ์ (AI) หุ่นยนต์ (Robotics)หรือ
            Metaverseเข้ามามีบทบาท โลกทุกวันนี้หมุนเร็วมาก
            ขณะเดียวกันเด็กไทยที่สนใจสาขานี้ประสบปัญหาอุปสรรคทางภาษา และ
            กระบวนการคิดในห้องเรียนที่เน้นการท่องจำ
            เราจึงพยายามนำเสนอการเรียนในด้านที่ใหม่กว่า
          </section>
        </section>
      </section>
      {/* <section className="flex space-x-10  w-[90%] mx-auto ">
        <section className=" relative overflow-hidden w-[50%] min-h-[50vh] bg-[#E2E8F0] py-10 px-10 text-start rounded-lg items-start">
          <div className=" mb-4 font-lineSansTH font-bold text-[30px]">
            สร้างสื่อการสอนการเขียน<br></br>เข้าถึงการสอนได้ทุกที่
          </div>
          <section className=" absolute w-full h-full mx-auto rounded-xl bg-[url('/images/pictureExample1.png')] bg-cover bg-center bg-no-repeat ">
            <video controls width="100%" className="rounded-xl">
              <source
                src="/videos/campPromote1/campPromote1.mp4#t=0.1"
                type="video/mp4"
              />
              Sorry, your browser doesn't support videos.
            </video>
          </section>
        </section>
        <section className=" relative overflow-hidden w-[50%] min-h-[50vh] bg-[#E2E8F0] bg-[url('/images/BackgroundWeAre.png')] bg-cover bg-center py-10 px-10 text-start rounded-lg items-start">
          <div className=" mb-4 font-lineSansTH font-bold text-[30px] h-full w-full ">
            สร้างคอมมูนิตี้แบบไฮบริดจ์ <br></br>ในการเรียนรู้ร่วมกัน
          </div>
        </section>
      </section> */}
    </section>
  );
}

export function MoreDetailPopup() {
  return (
    <section className="w-[90%] md:block hidden md:h-auto   mx-auto rounded-lg h-0 px-10 py-10  mt-10 bg-[#E2E8F0]">
      <div className=" mb-4 font-lineSansTH font-bold text-[30px] text-start">
        ฝากนักเรียนให้คิดและลงมือทำ<br></br>ผ่าน Project Based Learning
      </div>
      <div className="flex space-x-9 my-8 relative overflow-hidden">
        {MoreDetailList.map((item, index) => {
          if (index == 3) return;
          return (
            <MoreDetailCard
              key={index}
              detail={item}
              index={index}
            ></MoreDetailCard>
          );
        })}
        <MoreDetailCard3
          key={3}
          detail={MoreDetailList[3]}
          index={3}
        ></MoreDetailCard3>
      </div>
    </section>
  );
}

function MoreDetailCard(props: { detail: DetailProps; index: number }) {
  return (
    <div className={` w-72 h-72  relative `}>
      <motion.div
        initial={{ width: "18rem", zIndex: 20 - props.index }}
        whileHover={{ width: "39rem", zIndex: 20 }}
        className={`h-full  rounded-xl absolute   bg-white flex shadow-lg  group space-x-7 `}
      >
        <div
          className="w-72 h-full bg-contain bg-no-repeat absolute  "
          style={{ backgroundImage: `url(${props.detail.image})` }}
        ></div>
        <motion.div className=" opacity-0 absolute group-hover:opacity-100 transition-all duration-400 invisible group-hover:visible  space-y-3 font-lineSansTH text-start pl-72 w-[39rem] h-full pr-10 py-5">
          <p className="text-3xl font-lineSansTH_XB ">{props.detail.title}</p>
          <p>{props.detail.description}</p>
          <p className="text-primary text-3xl font-lineSansTH_XB">
            {props.detail.title2}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MoreDetailCard3(props: { detail: DetailProps; index: number }) {
  return (
    <div className={` w-72 h-72  relative`}>
      <motion.div
        initial={{ width: "18rem", right: "-1rem", zIndex: 1 }}
        whileHover={{
          width: "39rem",
          right: "-1rem",
          zIndex: 20,
        }}
        className={`h-full  rounded-xl absolute   bg-white flex shadow-lg  group space-x-7 `}
      >
        <div
          className="w-72 h-full bg-contain bg-no-repeat absolute  "
          style={{ backgroundImage: `url(${props.detail.image})` }}
        ></div>
        <motion.div className=" opacity-0 absolute group-hover:opacity-100 transition-all duration-400 invisible group-hover:visible  space-y-3 font-lineSansTH text-start pl-72 w-[39rem] h-full pr-10 py-5">
          <p className="text-3xl font-lineSansTH_XB ">{props.detail.title}</p>
          <p>{props.detail.description}</p>
          <p className="text-primary text-3xl font-lineSansTH_XB">
            {props.detail.title2}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export interface DetailProps {
  title: string;
  description: string;
  image: string;
  title2: string;
}

//generate by Gimini. Gonna Change for sure

const DataFB: FBPage[] = [
  {
    feedback:
      "บรรยากาศของค่ายอบอุ่นและเป็นกันเอง ทุกคนที่ผมได้พูดคุยด้วย ตั้งแต่เจ้าหน้าที่ไปจนถึงผู้เข้าร่วม ต่างก็ให้ความช่วยเหลือและเข้าถึงได้ง่าย",
    name: "Eva Elle",
    social: "@evaelle",
    image: "",
  },
  {
    feedback:
      "วิทยากรแสดงความอดทนและเข้าใจตลอดทั้งโปรแกรม สร้างสภาพแวดล้อมการเรียนรู้ที่สนับสนุน",
    name: "John Doe",
    social: "@johndoe",
    image: "",
  },
  {
    feedback:
      "ผู้เข้าร่วมมีส่วนร่วมในกิจกรรมต่างๆ อย่างสร้างสรรค์และทำงานร่วมกัน ก่อให้เกิดความรู้สึกเป็นอันหนึ่งอันเดียวกัน",
    name: "Jane Smith",
    social: "@janesmith",
    image: "",
  },
  {
    feedback:
      "โปรแกรมค่ายอำนวยความสะดวกในการสื่อสารแบบเปิดเผยและส่งเสริมการให้ความช่วยเหลือซึ่งกันและกันระหว่างผู้เข้าร่วม นำไปสู่ประสบการณ์โดยรวมที่ดี",
    name: "Michael Lee",
    social: "@michaellee",
    image: "",
  },
  {
    feedback:
      "โปรแกรมค่ายอำนวยความสะดวกในการสื่อสารแบบเปิดเผยและส่งเสริมการให้ความช่วยเหลือซึ่งกันและกันระหว่างผู้เข้าร่วม นำไปสู่ประสบการณ์โดยรวมที่ดี",
    name: "Sarah Williams",
    social: "@sarahwilliams",
    image: "",
  },
  {
    feedback:
      "ผู้จัดงานค่ายประสบความสำเร็จในการสร้างบรรยากาศที่ครอบคลุมและต้อนรับ  ซึ่งผู้เข้าร่วมรู้สึกสบายใจที่จะติดต่อกับผู้อื่นและเรียนรู้จากวิทยากร",
    name: "Suppawit SeeSagul",
    social: "@supawit",
    image: "",
  },
];

export function FeedBackPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % DataFB.length);
        setIsTransitioning(false);
      }, 1000); // Change image after 1 second (transition duration)
    }, 4000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [DataFB]);

  const number = DataFB.length / 3;
  var now = 0;
  console.log(number);
  return (
    <section className=" mt-10 w-[90%] mx-auto  pt-10 text-start">
      <div className=" font-lineSansTH text-primary md:text-2xl text-lg">
        รีวิว
      </div>
      <div className=" font-lineSansTH md:space-y-3 font-bold md:text-5xl text-2xl">
        <p>น้องๆ นักเรียนในโครงการ</p>
        <p>พูดถึงเราว่ายังไงบ้าง?</p>
      </div>
      <section className="md:hidden block min-h-[25vh] mt-5 ">
        <div
          className={`${isTransitioning ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}
        >
          <FeedBackCard
            name={DataFB[currentIndex].name}
            social={DataFB[currentIndex].social}
            image={DataFB[currentIndex].image}
            feedback={DataFB[currentIndex].feedback}
          ></FeedBackCard>
        </div>
      </section>
      <section className="flex invisible md:visible md:max-h-screen max-h-0 overflow-hidden w-full my-10 space-x-5 justify-center">
        <section className="w-1/3">
          {DataFB.map((item, index) => {
            if (index >= (number % 3 == 0 ? number - 1 : number)) return;
            now = index;
            return (
              <FeedBackCard
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackCard>
            );
          })}
        </section>
        <section className=" w-1/3 ">
          {DataFB.map((item, index) => {
            return index > now && index <= now + number ? (
              <FeedBackCard
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackCard>
            ) : null;
          })}
        </section>
        <section className=" w-1/3 ">
          {DataFB.map((item, index) => {
            return index >= DataFB.length - number ? (
              <FeedBackCard
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackCard>
            ) : null;
          })}
        </section>
      </section>
    </section>
  );
}

interface FBPage {
  feedback: String;
  name: String;
  social: String;
  image: String;
}

export function FeedBackCard({ feedback, name, social, image }: FBPage) {
  return (
    <motion.section
      whileHover={{ scale: 1.05 }}
      className="w-full h-auto bg-white font-lineSansTH   rounded-xl px-6 py-6 mb-5"
    >
      <div className=" mb-5 md:text-xl text-lg">{feedback}</div>
      <div className="flex space-x-6 items-center ">
        <div className="h-10 w-10 rounded-full bg-primary"></div>
        <div>
          <div className="font-bold md:text-xl text-lg">{name}</div>
          <div className="md:text-lg text-[#989DA5]">@{social}</div>
        </div>
      </div>
    </motion.section>
  );
}
