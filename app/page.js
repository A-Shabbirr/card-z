import Card from "@/Card/page";

export default function Home() {
  return (
    <div className="bg-red-400 w-full min-h-screen flex flex-col xl:flex-row justify-center items-center overflow-auto p-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>


  );
}
