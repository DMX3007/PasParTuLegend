import { PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { rubic } from "@/shared/assets/fonts/fonts";
import NavbarFilterIcon from "@/shared/assets/icons/navbarFiltersLogo.svg?url";
import NavigationLogo from "@/shared/assets/icons/paspartu-logo.png";
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
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={AppRouter.main}>
            <Image src={NavigationLogo} width={81} height={81} alt="logo" className="cursor-pointer" />
          </Link>
          <Link className={rubic.className} href={AppRouter.main}>
            <h2 className={"text-primary text-2xl"}>
              ПасПарТу
              <br></br>
              <span className="text-secondary">
                travel</span>
            </h2>
          </Link>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"link"}>
              <div id="mobile-menu-button" className="group peer">
                <div className="relative top-0 h-2 w-8 rounded-full bg-primary  transition-all group-open:top-2 group-open:rotate-45"></div>
                <div className="mt-1 h-2 w-8 rounded-full bg-primary opacity-100 transition-all group-open:opacity-0"></div>
                <div className="relative top-0 mt-1 h-2 w-8 rounded-full bg-primary  transition-all group-open:-top-2 group-open:-rotate-45"></div>
              </div>
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

