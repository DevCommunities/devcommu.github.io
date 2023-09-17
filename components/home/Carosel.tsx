import { Carousel } from "flowbite-react";
import Image from "next/image";

interface IProps {
  className?: string;
}

const images_list = [
  "/home/camp5.jpg",
  "/home/camp3.jpg",
  "/home/camp2.jpg",
  "/home/camp1.jpg",
  "/home/camp4.jpg",
];

export default function HomeCarosel(props: IProps) {
  return (
    <Carousel className={props.className}>
      {images_list.map((image, index) => {
        return (
          <Image
            key={index}
            src={image}
            width={1500}
            height={3000}
            className="rounded md:h-[400px]"
            alt="Carosel Image"
          />
        );
      })}
    </Carousel>
  );
}
