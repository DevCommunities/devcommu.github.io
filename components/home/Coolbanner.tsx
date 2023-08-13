import Typewriter from "typewriter-effect";
interface Iprops {
  className?: string;
}
export default function Coolbanner(props: Iprops) {
  return (
    <div className={props.className ?? ""}>
      <div className="text-right text-2xl sm:text-5xl">
        <h1 className="flex flex-row flex-wrap justify-start pt-5">
          <span>ที่ๆคนชอบ&nbsp;</span>
          <span className="text-emerald-500 underline">
            <Typewriter
              options={{
                strings: ["เขียนโปรแกรม", "ทำเอไอ", "เทคโนโลยี"],
                autoStart: true,
                loop: true,
                delay: 200,
                deleteSpeed: 10,
              }}
            />
          </span>
        </h1>
        <h1 className="flex flex-row flex-wrap justify-start pt-5">
          <span>มาเจอกันเพื่อ&nbsp;</span>
          <span className="text-fuchsia-400 underline">
            <Typewriter
              options={{
                strings: ["พัฒนาตนเอง", "เรียนรู้", "ทำโปรเจ็ค", "เจอเพื่อน"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 100,
              }}
            />
          </span>
        </h1>
      </div>
      <p className="mt-4">
        เราเชื่อว่าความรู้ด้านเทคโนโลยีจะเป็นรากฐาน ของการพัฒนาประเทศในอนาคต
        เราจึงมุ่งมั่นในการสร้างฐาน
        ความรู้ทางด้านเทคโนโลยีควบคู่ไปกับการจัดการสอนแบบ Project based
        learningให้กับโรงเรียนและเยาวชนทั่วไป
      </p>
      <button className="mt-4 w-2/5 rounded border-b-4 border-gray-700 bg-gray-500 px-4 py-2 font-bold text-white hover:border-gray-500 hover:bg-gray-400">
        สนใจจัดกิจกรรมอบรม
      </button>
    </div>
  );
}
