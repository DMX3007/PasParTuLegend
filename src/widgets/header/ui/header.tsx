//Todo fix warning witch svg?url
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavbarFilterIcon from "@/shared/assets/icons/navbarFiltersLogo.svg?url";
import NavigationLogo from "@/shared/assets/icons/paspartu-logo.svg?url";
import NavigationPaspartuTitle from "@/shared/assets/icons/paspartuNavTitle.svg?url";
import { AppRouter } from "@/shared/const/route";
import { HPopover } from "@/shared/ui/popover";
import { headerItems } from "../model/headerItem";
import { HeaderItemPopover } from "./headerItemPopover";
//Todo create feature filters

export const Header = () => {
  return (
    //Todo add border bottom header ? border-solid border-2 border-y-gray-400 rounded-lg
    <header className="w-screen h-24 px-4">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center">
          <Link href={AppRouter.main}>
            <Image src={NavigationLogo} alt="logo" className="cursor-pointer" />
          </Link>
          <Link href={AppRouter.main}>
            <Image src={NavigationPaspartuTitle} alt="navigationTitle" />
          </Link>
        </div>

        <HPopover trigger={<Image src={NavbarFilterIcon} alt="filterIcon" />}>
          <HeaderItemPopover items={headerItems} />
        </HPopover>
      </nav>
    </header>
  );
};

// <div id="mobile-menu-button" className="group peer">
//   <div className="relative top-0 h-1 w-8 rounded-full bg-black  transition-all group-open:top-2 group-open:rotate-45"></div>
//   <div className="mt-1 h-1 w-8 rounded-full bg-black opacity-100 transition-all group-open:opacity-0"></div>
//   <div className="relative top-0 mt-1 h-1 w-8 rounded-full bg-black  transition-all group-open:-top-2 group-open:-rotate-45"></div>
// </div>
