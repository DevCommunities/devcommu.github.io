import { Carousel } from "flowbite-react";
import Image from "next/image";

interface IProps {
  className?: string;
}

const images_list = [
  "/home/camp1.jpg",
  "/home/camp2.jpg",
  "/home/camp3.jpg",
  "/home/camp4.jpg",
  "/home/camp5.jpg",
];

export default function HomeCarosel(props: IProps) {
  return (
    <Carousel className={props.className}>
      {/* <Image
        src={"/home/camp1.jpg"}
        width={1200}
        height={1200}
        alt="DevCommu"
      /> */}
      {images_list.map((image, index) => {
        return (
          <Image
            key={index}
            src={image}
            width={1200}
            height={2400}
            className="rounded-sm"
            alt="Carosel Image"
          />
        );
      })}
    </Carousel>
  );
}
