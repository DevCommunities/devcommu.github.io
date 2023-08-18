import "./globals.css";
import localfont from "next/font/local";
import { Inter } from "next/font/google";
import DefaultFooter from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const kanit = localfont({
  src: [
    {
      path: "../public/fonts/Kanit/Kanit-Regular.ttf",
      weight: "normal",
    },
    {
      path: "../public/fonts/Kanit/Kanit-Medium.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/Kanit/Kanit-Bold.ttf",
      weight: "bold",
    },
  ],
  variable: "--font-kanit",
});

export const metadata = {
  title: "DevCommu",
  description:
    "great free tech education communities for underdog high schooler, move society futher with tech education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kanit.variable}`}>
        {children}
        <DefaultFooter />
      </body>
    </html>
  );
}
