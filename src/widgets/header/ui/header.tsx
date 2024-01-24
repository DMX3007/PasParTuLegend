//Todo fix warning with svg?url

import { PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import NavigationLogo from "@/shared/assets/icons/paspartu-logo.svg?url";
import NavbarFilterIcon from "@/shared/assets/icons/navbarFiltersLogo.svg?url";
import NavigationPaspartuTitle from "@/shared/assets/icons/paspartuNavTitle.svg?url";
import { AppRouter } from "@/shared/const/route";
import { Button } from "@/shared/ui/button";
import { Popover, PopoverContent } from "@/shared/ui/popover";
import { Separator } from "@/shared/ui/separator";
import { headerItems } from "../model/headerItem";
import { HeaderItemPopover } from "./headerItemPopover";
//Todo create feature filters

export const Header = () => {
  return (
    //Todo add border bottom header ? border-solid border-2 border-y-gray-400 rounded-lg
    <header className="w-full h-24 px-4">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center">
          <Link href={AppRouter.main}>
            <Image src={NavigationLogo} alt="logo" className="cursor-pointer" />
          </Link>
          <Link href={AppRouter.main}>
            <h2 className={"text-[#36747E]"}>
              ПасПарТу
              <br></br>
              <span style={{ color: "rgba(119, 61, 6, 1)" }
              }>travel</span>
            </h2>
          </Link>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"}>
              <Image src={NavbarFilterIcon} alt="navbarFilterIcon" />
            </Button>
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

// <div id="mobile-menu-button" className="group peer">
//   <div className="relative top-0 h-1 w-8 rounded-full bg-black  transition-all group-open:top-2 group-open:rotate-45"></div>
//   <div className="mt-1 h-1 w-8 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
//   <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-black  transition-all group-open:-top-2 group-open:-rotate-45"></div>
// </div>
