import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const side1 = useTransform(scrollYProgress, [0, 1], ["-270%", "-19%"]);
  const side2 = useTransform(scrollYProgress, [0, 1], ["200%", "82%"]);
  const side3 = useTransform(scrollYProgress, [0, 1], ["-140%", "7%"]);
  const side4 = useTransform(scrollYProgress, [0, 1], ["200%", "120%"]);
  const side5 = useTransform(scrollYProgress, [0, 1], ["600%", "436%"]);

  const handleClickScrollHome = () => {
    const element = document.getElementById("Home");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="mb-32 mt-24">
        <motion.button
          onClick={handleClickScrollHome}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" mx-auto  h-36 w-36 bg-[url('/images/footer/DevKey.png')] bg-contain bg-no-repeat bg-center"
        ></motion.button>
        <section className="font-lineSansTH font-bold text-[60px]">
          <h1>สนใจกิจกรรมหรอ?</h1>
          <h1 className="text-primary">
            กดปุ่มข้างบน<span className="text-black"> ได้เลย!</span>
          </h1>
        </section>
      </section>
      <motion.section
        style={{ x: side1 }}
        className={`fixed top-[30%]  h-[45%] w-[50%] bg-20 bg-[url('/images/footer/arduino2.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ x: side2 }}
        className={`fixed top-[20%] h-[70%] w-[100%] bg-20 bg-[url('/images/footer/keyboard2.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ x: side3 }}
        className={`fixed top-[70%]  h-16 w-full bg-20 bg-[url('/images/python.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ y: side4 }}
        className={`fixed top-[3%] left-[20%]  h-[70%] w-full bg-20 bg-[url('/images/footer/devCommuPage.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <motion.section
        style={{ y: side5 }}
        className={`fixed top-[3%] left-[47%]  h-[20%] w-full bg-20 bg-[url('/images/footer/macTerminal.png')] bg-contain bg-no-repeat`}
      ></motion.section>
      <section className="flex justify-between items-center pb-5">
        <div className="h-24 w-32  mx-5   bg-[url('images/footer/pagename.png')] bg-no-repeat bg-center bg-contain"></div>
        <div className="flex mx-5 items-center">
          <a
            href=""
            className="bg-[url('/images/footer/youtube.png')] bg-center bg-contain h-8 w-8 bg-no-repeat mx-1"
          ></a>
          <a
            href=""
            className="bg-[url('/images/footer/github.png')] bg-center bg-contain h-8 w-8 bg-no-repeat mx-1"
          ></a>
          <a
            href=""
            className="bg-[url('/images/footer/facebook.png')] bg-center bg-contain h-8 w-8 bg-no-repeat mx-1"
          ></a>
        </div>
      </section>
    </div>
  );
}
