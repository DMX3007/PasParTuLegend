//Todo fix warning witch svg?url

import { PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import NavbarFilterIcon from "@/shared/assets/icons/navbarFiltersLogo.svg?url";
import NavigationLogo from "@/shared/assets/icons/paspartu-logo.svg?url";
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
    <header className="h-24">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center">
          <Link href={AppRouter.main}>
            <Image src={NavigationLogo} alt="logo" className="cursor-pointer" />
          </Link>
          <Link href={AppRouter.main}>
            <Image src={NavigationPaspartuTitle} alt="navigationTitle" />
          </Link>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={"outline"} className={"rounded-3xl"}>
              <Image src={NavbarFilterIcon} alt="navbarFilterIcon" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 mr-2 rounded-xl">
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
