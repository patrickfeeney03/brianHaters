import localFont from "next/font/local";
import { HomeText } from "@/components/HomeText";

// Fonts imported by default by NextJs
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <HomeText></HomeText>
  );
}
