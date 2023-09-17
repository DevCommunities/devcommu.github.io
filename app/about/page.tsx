import DefaultNavbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-kanit min-h-screen min-w-min items-end bg-white align-middle text-black dark:text-white ">
      <DefaultNavbar current_page="เกี่ยวกับเรา" />
      <article
        id="aboutus"
        className="pb-6 pt-10 text-left font-kanit text-black sm:mx-0 md:mx-20"
      >
        <h1 className="py-5 text-3xl font-bold sm:mx-[20px]">เกี่ยวกับเรา</h1>
        <p className="text-xl font-light sm:mx-[20px]">
          DevCommu ถูกก่อตั้งขึ้น ด้วยจุดประสงค์ ที่จะมอบและส่งต่อความรู้
          ส่งต่อโอกาส ในด้านเทคโนโลยี และการเขียนโปรแกรม ให้กับนักเรียน
          โดยมีจุดมุ่งหมายที่จะเป็นเหมือน FreeCodeCamp ที่มีเนื้อหาที่ดี
          และมีคุณภาพ แต่เข้าถึงได้ง่ายสำหรับเด็กที่ไม่ได้เก่งภาษาอังกฤษ
          โดยไม่มีค่าใช้จ่ายใดๆทั้งสิ้น รวมทั้งเป็นสังคม เป็นพื้นที่
          สำหรับผู้ที่รักในการแบ่งปันความรู้ และการเรียนรู้ รวมถึงทำโปรเจ็คสนุกๆ
          ผ่านการทำเนื้อหาบน YouTube ร่วมกับผู้เชี่ยวชาญ
          จัดค่ายร่วมกับโรงเรียนและค่ายอื่นๆ ทำโปรเจ็คร่วมกันกับสมาชิก
          และไปแข่งขันกระชับมิตร
        </p>
        <h1 className="py-5 text-3xl font-bold sm:mx-[20px]">ความเชื่อ</h1>
        <p className="text-xl font-light sm:mx-[20px]">
          เราเชื่อมั่นว่าการศึกษาและเทคโนโลยีคืออนาคต
          ที่จะสามารถเปลี่ยนแปลงชีวิต หรือกระทั่งเปลี่ยนแปลงประเทศได้
          แต่การเขียนโปรแกรม ไม่ใช่สิ่งที่สามารถเรียนรู้ได้ง่าย
          ยิ่งกับผู้ที่มีความสนใจ แต่ถูกกั้นด้วยกำแพงภาษา,
          พวกเรามองว่าในขณะที่ต่างประเทศ มีเนื้อหาที่ดีและฟรีอยู่มากมาย
          แต่การเข้าถึงเนื้อหาการเขียนโปรแกรมภาษาไทยนั้น
          ยังเข้าถึงได้ง่ายกว่าผ่านคอร์สเรียนขั้นพื้นฐาน ที่จำเป็นต้องจ่ายเงิน
          พวกเราอยากจะเป็นเพื่อนร่วมทาง ให้กับนักเรียน
          ที่อยากจะเริ่มเดินในเส้นทางนี้
          ไปจนถึงจุดที่สามารถค้นคว้าหาความรู้เองได้
          โดยไม่ต้องเสียเงินให้กับคอร์สเรียนพื้นฐาน ขอแค่มีเพียงคอมพิวเตอร์
          อินเทอร์เน็ต ความตั้งใจ และเพื่อนที่เต็มไปด้วยไฟ
        </p>
      </article>
      <article
        id="contact"
        className="sm:mx-[20px] py-5 pb-20 text-left font-kanit text-black sm:mx-0 md:mx-20"
      >
        <h1 className="mx-[20px] py-5 text-3xl font-bold">ติดต่อเรา</h1>
        <p className="mx-[20px] text-xl font-light">
          หากมีข้อสงสัย อยากให้ไปจัดค่ายให้ หรือต้องการสอบถามเกี่ยวกับ DevCommu
          สามารถติดต่อได้ที่
        </p>
        <p className="text-xl mx-[20px] font-light">
          Facebook:
          <a
            href="https://www.facebook.com/devcommu"
            target="_blank"
            className="text-blue-500 mx-[20px]"
          >
            DevCommu
          </a>
        </p>
        <p className="text-xl font-light mx-[20px]">
          Email:
          <a
            href="mailto:hrnph@protonmail.com"
            target="_blank"
            className="text-blue-500"
          >
            hrnph@protonmail.com
          </a>
        </p>
        <p className="text-xl font-light mx-[20px]">
          Phone:
          <a href="tel:+66614056229" target="_blank" className="text-blue-500">
            061-405-6229
          </a>
          (หิรัญกุล)
        </p>
      </article>
    </main>
  );
}
