import DefaultNavbar from "@/components/Navbar";
import ProjectCard from "./card";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen min-w-min items-end bg-white align-middle font-kanit text-black dark:text-white">
      <DefaultNavbar current_page="โครงการ" />
      <div className="mx-[50px] grid grid-cols-1 border-b-2 pb-[30px] sm:pb-[70px]">
        <h1 className="w-auto text-center text-[17px] leading-[40px] sm:mt-[50px]  sm:text-2xl sm:text-4xl sm:leading-[40px] md:text-5xl md:leading-[80px]">
          รับจัดอบรมแบบ Project Based Learning<br></br>
          ทั้งองค์กรและแบบส่วนตัวทั่วประเทศ
        </h1>
        <Link
          href="https://web.facebook.com/DevCommu/"
          passHref={true}
          className=" mx-auto mt-[20px] w-[200px] w-[250px] rounded border-b-4 border-gray-700 bg-gray-500 px-4 py-2 text-center text-white hover:border-gray-500 hover:bg-gray-400 sm:mt-[25px] sm:text-[24px] md:mt-[30px] md:text-xl"
        >
          ร่วมเรียนรู้ไปกับเรา
        </Link>
      </div>
      <div className="flex justify-center ">
        <div className="mx-[30px] my-[20px] grid grid-cols-1 gap-x-[40px] sm:mx-[20px] sm:grid-cols-2 md:grid-cols-3">
          <ProjectCard
            imgPath="/home/camp_pf_0.png"
            link=""
            header="ค่ายDevcommครั้งที่3: MakeAI Drive Your Dream [เปิดรับสมัคร จำนวนจำกัด]"
            detail="เปิดรับสมัครตามคำเรียกร้องสำหรับน้องๆที่ต้องการเรียนรู้การทำAI แบบProject Based Leaning สร้างAIเป็นโปรเจคต์ไปใช้งานจริงพร้อมรับคำปรึกษาจากรุ่นพี่มากความสามารถ ตลอดระยะเวลา8วัน"
          ></ProjectCard>
          <ProjectCard
            imgPath="/home/camp1.jpg"
            link="https://web.facebook.com/photo.php?fbid=131457606300919&set=pb.100083100410436.-2207520000&type=3"
            header="ค่ายDevcommu x โรงเรียนนวมินทร์ทราชูทิศ สตรีวิทยา2: DATA BOOTCAMP"
            detail="ค่ายอบรมที่น้องๆได้พบเจอกับการทำงานกับข้อมูลเบื้องต้น ไม่ว่าจะเป็นการเขียนโปรแกรมpythonจัดการข้อมูล การใช้ Numpy pandas และSklearnในการทำAIอีกด้วย"
          ></ProjectCard>
          <ProjectCard
            imgPath="/home/camp3.jpg"
            link="https://web.facebook.com/DevCommu/posts/pfbid0zURW63hiEgz6AKRiYdZj6rQn5SdA7jEcknEZNKjBc45LEbaLc6C1S77MAyXuV1gbl"
            header="ค่ายDevcommu x โรงเรียนนวมินทร์ทราชูทิศ สตรีวิทยา2: PYTHON PROGRAMING"
            detail="ต้แนรับสู่ค่ายที่จะพาย้องๆไปพบกับการเขียนโปรแกรมภาษาไพธอนพื้นฐาน ทฤษฏีการเขียนโปรแกรม และสร้างGUIหน้าตาสวยๆด้วยTkinterเพื่อทำfinal projectไปประดับportfolio"
          ></ProjectCard>
        </div>
      </div>
    </main>
  );
}
