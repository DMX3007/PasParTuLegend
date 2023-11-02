import { Inter } from "next/font/google";
import { Header } from "@/widgets";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  return (
    <div className="w-full">
      <Header />
    </div>
  );
}
