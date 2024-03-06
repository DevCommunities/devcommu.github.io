import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    <section>
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
          {" "}
          สนใจจัดกิจกรรม
        </motion.button>

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
    </section>
  );
}

export function VideoExample() {
  return (
    <section className=" w-[78%] my-32 h-full mx-auto rounded-xl bg-[url('/images/campPromote1Thumb.png')] bg-cover bg-center bg-no-repeat ">
      <video controls width="100%" className="rounded-xl">
        <source src="/videos/campPromote1/campPromote1.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
}

export function MoreDetail() {
  return (
    <section>
      <section className="flex space-x-10  w-[90%] mx-auto my-10 ">
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
      </section>
      <section className="w-[90%] mx-auto rounded-lg min-h-[30vh] px-10 py-10  mt-10 bg-[#E2E8F0]">
        <div className=" mb-4 font-lineSansTH font-bold text-[30px] text-start">
          ฝากนักเรียนให้คิดและลงมือทำ<br></br>ผ่าน Project Based Learning
        </div>
        <div className="flex space-x-9 my-8">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="h-72 w-72 bg-white rounded-xl shadow-lg"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="h-72 w-72 bg-white rounded-xl shadow-lg"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="h-72 w-72 bg-white rounded-xl shadow-lg"
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="h-72 w-72 bg-white rounded-xl shadow-lg"
          ></motion.div>
        </div>
      </section>
    </section>
  );
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

export function FeedBack() {
  const number = DataFB.length / 3;
  var now = 0;
  console.log(number);
  return (
    <section className=" mt-40 w-[90%] mx-auto min-h-[100vh] px-10 py-10 text-start">
      <div className=" font-lineSansTH text-primary text-[22px]">รีวิว</div>
      <div className=" font-lineSansTH font-bold text-[44px]">
        น้องๆ นักเรียนในโครงการ<br></br>พูดถึงเราว่ายังไงบ้าง?
      </div>
      <section className="flex  min-h-[50vh] w-full my-10 space-x-5 justify-center">
        <section className=" w-[30%]  min-h-[40vh]">
          {DataFB.map((item, index) => {
            if (index >= (number % 3 == 0 ? number - 1 : number)) return;
            now = index;
            return (
              <FeedBackPage
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackPage>
            );
          })}
        </section>
        <section className=" w-[30%]  min-h-[40vh]">
          {DataFB.map((item, index) => {
            return index > now && index <= now + number ? (
              <FeedBackPage
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackPage>
            ) : null;
          })}
        </section>
        <section className=" w-[30%]  min-h-[40vh]">
          {DataFB.map((item, index) => {
            return index >= DataFB.length - number ? (
              <FeedBackPage
                key={index}
                name={item.name}
                social={item.social}
                image={item.image}
                feedback={item.feedback}
              ></FeedBackPage>
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

export function FeedBackPage({ feedback, name, social, image }: FBPage) {
  return (
    <motion.section
      whileHover={{ scale: 1.05 }}
      className="w-full h-auto bg-white font-lineSansTH rounded-xl px-6 py-6 mb-5"
    >
      <div className=" mb-5 text-[22px]">{feedback}</div>
      <div className="flex space-x-6 items-center ">
        <div className="h-10 w-10 rounded-full bg-primary"></div>
        <div>
          <div className="font-bold text-[22px]">{name}</div>
          <div className="font-[18px] text-[#989DA5]">@{social}</div>
        </div>
      </div>
    </motion.section>
  );
}
