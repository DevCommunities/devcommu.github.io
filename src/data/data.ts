import { type SlideProjectProps } from "~/components/project/ProjectPageComponent";
import { type AboutUs } from "~/components/about/AboutUsPageComponent";
import { type DetailProps } from "~/components/homepage/HomePageComponent";

export const About: AboutUs[] = [
  {
    people: [
      {
        name: "พี่ไกด์",
        description:
          "นักศึกษาจุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์เทคโนโลยีดิจิทัลและเทคโนโลยี",
        role: "ผู้จัดการ และติวเตอร์ Python & MachineLearning",
        img: "/images/about/Guide.png",
      },
      {
        name: "พี่หมูกรอบ",
        description:
          "นักศึกษาจุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์เทคโนโลยีดิจิทัลและเทคโนโลยี",
        role: "จัดการ และติวเตอร์ Python & MachineLearning",
        img: "/images/about/Mookrob.jpeg",
      },
    ],
  },
  {
    people: [
      {
        name: "พี่แท็ค",
        description:
          "นักศึกษาจุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์เทคโนโลยีดิจิทัลและเทคโนโลยี",
        role: "ติวเตอร์ Competitive Programming",
        img: "/images/about/Tak.jpeg",
      },
      {
        name: "พี่ธาร",
        description:
          "นักศึกษาจุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์เทคโนโลยีดิจิทัลและเทคโนโลยี",
        role: "หัวหน้าฝ่ายสื่อและการโฆษณา และติวเตอร์ IOS App Development",
        img: "/images/about/Tan.jpeg",
      },
    ],
  },
  {
    people: [
      {
        name: "พี่โชคดี",
        description:
          "นักศึกษาจุฬาลงกรณ์มหาวิทยาลัย คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์เทคโนโลยีดิจิทัลและเทคโนโลยี",
        role: "ติวเตอร์ Competitive Programming",
        img: "/images/about/Chokdee.png",
      },
      {
        name: "",
        description: "",
        role: "",
        img: "",
      },
    ],
  },
];

export const SlideProjectList: SlideProjectProps[] = [
  {
    slug: "dev2",
    title: "ค่าย DevCommu x โรงเรียนนวมิทร์ทราชูทิศ สตรีวิทยา 2",
    type: "DATA BOOTCAMP",
    image: "/images/project/camp/DevCommu_DataBootCamp.png",
    description:
      "Absolutely game-changing! This platform's Al-driven analysis of ElA risks is remarkable. It's so reassuring to have precise evaluations that minimize errors. ",
    date: "12",
    month: "กุมภาพันธ์",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev3",
    title: "ค่าย DevCommu x โรงเรียนนวมิทร์ทราชูทิศ สตรีวิทยา 2",
    type: "PYTHON BOOTCAMP",
    image: "/images/project/camp/DevCommu_PythonBootCamp.png",
    description:
      "Absolutely game-changing! This platform's Al-driven analysis of ElA risks is remarkable. It's so reassuring to have precise evaluations that minimize errors. ",
    date: "12",
    month: "มีนาคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev1",
    title: "ค่าย DevCommu ครั้งที่ 3 Make AI Drive Your Dream",
    type: "AI BOOTCAMP",
    image: "/images/project/camp/DevCommu3_AIBootCamp.png",
    description:
      "Absolutely game-changing! This platform's Al-driven analysis of ElA risks is remarkable. It's so reassuring to have precise evaluations that minimize errors. ",
    date: "12",
    month: "มกราคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev4",
    title: "DevCommu 4 : Intro to Natural Language Processing",
    type: "AI BOOTCAMP",
    image: "/images/project/camp/PromoteDev4.jpg",
    description:
      "ค่าย 2วันที่จะพาน้องๆไปดื่มด่ำกับโลกของ AI ด้านภาษา โดยน้องๆจะได้เริ่มตั้งแต่การเรียนการเขียนโปรแกรมพื้นฐานไปจนถึงการสร้าง AI ที่เข้าใจภาษาของมนุษย์ขึ้นมา!",
    date: "12",
    month: "มกราคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev5",
    title: "POSN Camp at PCSHS PL",
    type: "DATA BOOTCAMP",
    image: "/images/project/camp/PromotePOSN.jpeg",
    description:
      "ค่ายพื้นฐานการเขียนโปรแกรมสำหรับการสอบเข้า ค่ายสอวนคอมพิเตอร์ค่าย 2  จัดให้กับนักเรียนโรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย พิษณุโลก",
    date: "12",
    month: "กุมภาพันธ์",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev6",
    title: "Arduino Bootcamp",
    type: "PYTHON BOOTCAMP",
    image: "/images/project/camp/PromoteArduino.jpg",
    description:
      "ค่ายเรียนการพัฒนาอุปกรณ์ IOT จาก Arduino และอุปกรร์ต่างๆ เป็นค่ายออนไซต์ 2 วันที่สอนตั้งแต่เนื้อหาพื้นฐานของบอร์ดและการเขียนโปรแกรม ไปจนถึงการพัฒนาโปรเจคเล็กๆของน้องๆเอง",
    date: "12",
    month: "มีนาคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev7",
    title: "GameDev Bootcamp",
    type: "AI BOOTCAMP",
    image: "/images/project/camp/PromoteGameDev.jpg",
    description:
      "ค่ายสอนสร้างเกมด้วย Godot Engine พาน้องๆไปรู้จัก GD script รวมถึงองค์ประกอบจำเป็นต่างๆในการสร้างเกม และได้ลองสร้างเกม 2D สุดคลาสสิคในแบบของตัวเองขึ้นมา",
    date: "12",
    month: "มกราคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev2",
    title: "Machine Learning Bootcamp | Intro to Image Processing",
    type: "DATA BOOTCAMP",
    image: "/images/project/camp/PromoteML.jpg",
    description:
      "ค่าย Machine Learning สายภาพ น้องได้เรียนรู้ทักษะเขียนโปรแกรมพื้นฐาน และได้นำไปใช้ในการเรียนรู้ด้าน Image Processing และ Computer Vision และได้ทำโปรเจค Machine Learning เจ๋งไเป็นของตัวเองอีกด้วย",
    date: "12",
    month: "กุมภาพันธ์",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
  {
    slug: "dev8",
    title: "Arduino Bootcamp | Let’s Build a car",
    type: "PYTHON BOOTCAMP",
    image: "/images/project/camp/PromoteArduinoCar.jpg",
    description:
      "ค่ายอุปกรณ์ Arduino โดยในรอบนี้เรามาในหัวข้อพิเศษ Let’s build a car ซึ่งเราจะมาโฟกัสกันที่การใช้อุปกรณ์ต่างทั้ง Arduino และอื่นเพื่อใช้ในการสร้างรถบังคับผ่าน มือถือขึ้นมา โดยน้องๆ สามารถที่จะสร้างสรรค์รถสไตล์พิเศษแบบที่ไม่เหมือนใครได้เลย!",
    date: "12",
    month: "มีนาคม",
    year: "2564",
    show: false,
    imageDetail: [
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
      "/images/project/camp/dev1/1.png",
      "/images/project/camp/dev1/2.png",
      "/images/project/camp/dev1/3.png",
      "/images/project/camp/dev1/4.png",
    ],
    schedule: [
      [
        "Basic GD Script",
        "Basic GoDot",
        "Basic Nodes",
        "Physics Process",
        "Frames & Time",
      ],
      [
        "Charactor Control",
        "Background",
        "Animation",
        "Collision",
        "Interface and Health logic",
      ],
      [
        "Creating enemies",
        "Create Scene",
        "Design Level",
        "Create your own level",
      ],
    ],
    projectExam: [
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
      {
        title: "เครื่องปรับอากาศไม่ใช้ไฟฟ้า",
        author: "หิรัญกุล พิมพ์ศิริ",
        description:
          "รายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียดรายละเอียด",
        image: "/images/project/camp/dev1/archive/archive1.png",
      },
    ],
    constructor: [
      {
        img: "/images/project/camp/constructor/guide.png",
        name: "พี่ไกด์",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/mookrob.png",
        name: "พี่หมูกรอบ",
        describtion: "Chula CEDT",
      },
      {
        img: "/images/project/camp/constructor/tak.png",
        name: "พี่แท็ค",
        describtion: "Chula CEDT",
      },
    ],
  },
];

export const posterData = [
  { img: "/images/homepage/poster/poster0.png" },
  { img: "/images/homepage/poster/poster1.png" },
  { img: "/images/homepage/poster/poster2.png" },
  { img: "/images/homepage/poster/poster3.png" },
  { img: "/images/homepage/poster/poster4.png" },
  { img: "/images/homepage/poster/poster5.png" },
  { img: "/images/homepage/poster/poster6.png" },
  { img: "/images/homepage/poster/poster7.png" },
];

export const MoreDetailList: DetailProps[] = [
  {
    title: "เริ่มสงสัยในปัญหา",
    description:
      "เจอปัญหาที่อยากแก้แต่ไม่รู้จะทำยังไงดี เริ่มคิดไตร่ตรองกับปัญหานั้นๆ และรู้สึกอยากแก้ปัญหานั้น",
    image: "/images/homepageStand1.png",
    title2: "ตามความสนใจ",
  },
  {
    title: "คิดไอเดีย",
    description:
      "เริ่มค้นหาหนทางและไอเดียสำหรับการแก้ปัญหานั้นๆ คิดทบทวนไปมาและสุดท้าย คิดไอเดียออก",
    image: "/images/homepageStand2.png",
    title2: "ตามความสนใจ",
  },
  {
    title: "เรียนและพัฒนา",
    description:
      "ทดลองเรียนรู้ความรู้ที่จำเป็น ทดลองแก้ปัญหาต่างๆ เพื่อหาหนทางแก้ปัญหาให้สำเร็จ",
    image: "/images/homepageStand3.png",
    title2: "ตามความสนใจ",
  },
  {
    title: "สร้างสรรค์ผลงาน",
    description:
      "ผ่านการฝึกฝนและทดลองต่างๆ จนสร้างขึ้นมาเป็นผลงานหรือวิธีการแก้ปัญหาที่ถูกต้องและพัฒนาผลงานชิ้นใหม่ของตัวเอง",
    image: "/images/homepageStand4.png",
    title2: "ตามความสนใจ",
  },
];
