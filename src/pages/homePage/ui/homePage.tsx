import { Inter } from "next/font/google";
import { Header } from "@/widgets";
import { HeroSection } from "@/widgets/heroSection";

const inter = Inter({ subsets: ["latin"] });

export function HomePage() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection font="" />
    </div>
  );
}
