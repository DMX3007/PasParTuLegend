import { PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { rubic } from "@/shared/assets/fonts/fonts";
import NavbarFilterIcon from "@/shared/assets/icons/navbarFiltersLogo.svg?url";
import NavigationLogo from "@/shared/assets/icons/paspartu-logo.png";
import { AppRouter } from "@/shared/const/route";
import { Popover, PopoverContent } from "@/shared/ui/popover";
import { headerItems } from "../model/headerItem";
import { HeaderItemPopover } from "./headerItemPopover";
//Todo create feature filters

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="min-w-[450px] min-[450px]:h-24 h-20 px-4 pt-2">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={AppRouter.main}>
            <Image src={NavigationLogo} width={81} height={81} alt="logo" className="cursor-pointer drop-shadow-md" />
          </Link>
          <Link className={rubic.className} href={AppRouter.main}>
            <h2 className={"text-primary text-2xl"}>
              ПасПарТу
              <span className="text-secondary">
                travel</span>
            </h2>
          </Link>
        </div>

        <Popover onOpenChange={() => setIsOpen(!isOpen)}>
          <PopoverTrigger asChild>
            <div className={`px-4 group ${isOpen ? 'open' : ''}`}>
              <div className={`relative h-2 w-8 rounded-full bg-primary transition-all ${isOpen ? 'top-2 rotate-45' : ''}`}></div>
              <div className={`mt-1 h-2 w-8 rounded-full bg-primary transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
              <div className={`relative top-0 mt-1 h-2 w-8 rounded-full bg-primary transition-all ${isOpen ? '-top-4 -rotate-45' : ''}`}></div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-64 mr-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <HeaderItemPopover items={headerItems} />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
};

