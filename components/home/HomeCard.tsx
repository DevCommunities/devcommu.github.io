import Image from "next/image";
interface Iprops {
  className?: string;
  imgPath: string;
  detail: string;
}
export default function HomeCards(props: Iprops) {
  return (
    <div className={props.className ?? ""}>
      <Image src={props.imgPath} width={1920} height={1080} alt={""} />
      <p className="mt-4 text-center text-base text-[24px] md:text-[20px] md:leading-[27px] leading-[37px] ">
        {props.detail}
      </p>
    </div>
  );
}
