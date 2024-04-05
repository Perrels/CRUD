import Image from "next/image";
import Navbar from "./components/navbar";
import ClientCards from "./components/clientCards";

export default function Home() {
  return (
    <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ClientCards />
      <ClientCards />
      <ClientCards />
      <ClientCards />
      <ClientCards />
      <ClientCards />
    </div>
  );
}
