import { Inter } from "next/font/google";
import Image from "next/image";
import { Header, SearchBar } from "@/widgets";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
    </div>
  );
}
