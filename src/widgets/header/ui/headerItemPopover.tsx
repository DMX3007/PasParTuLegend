import Image from "next/image";
import Link from "next/link";
import { HeaderItemTypes } from "../types/headerItem";

type HeaderItemPopoverType = {
  items: HeaderItemTypes[];
};
export const HeaderItemPopover = (props: HeaderItemPopoverType) => {
  const { items } = props;
  return (
    <div className="mr-2 mt-2">
      <div className=" rounded-xl relative border-2 border-solid border-red-200 bg-white p-2 sm:grid-cols-2 w-60">
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
      </div>
    </div>
  );
};
