import Card from "@/Card/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-red-400 max-w-100vw h-screen flex justify-center items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
