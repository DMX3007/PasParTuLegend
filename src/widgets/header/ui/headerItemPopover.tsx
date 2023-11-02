import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/shared/ui/separator";
import { HeaderItemTypes } from "../types/headerItem";

type HeaderItemPopoverType = {
  items: HeaderItemTypes[];
};
export const HeaderItemPopover = (props: HeaderItemPopoverType) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <Link
          className="flex p-3 lg:hover:bg-orange-300 rounded-xl"
          href={item.href}
          key={item.href}
        >
          <Image className="mr-2" src={item.icon} alt={item.text} />
          <p>{item.text}</p>
        </Link>
      ))}
    </>
  );
};
