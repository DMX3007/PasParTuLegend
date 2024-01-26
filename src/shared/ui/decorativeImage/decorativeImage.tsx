import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { comfortaa, rubic } from "@/shared/assets/fonts/fonts";

interface DecorativeImageProps {
  className: string;
  alt: string;
  text: string;
  src?: StaticImageData;
  back?: ReactNode;
}

export const DecorativeImage = ({ className, src, alt, text, back }: DecorativeImageProps): JSX.Element => {
  return (
    <>
      {!back ?
        <div className={twMerge("flex flex-col items-center justify-center rounded-lg max-w-[75px] max-h-[75px] sm:max-w-[75px] sm:max-h-[75px] min-w-[75px] min-h-[85px] sm:min-w-[75px] sm:min-h-[85px]        transition-all duration-500 bg-white shadow-sm ", className)} >
          <div className="max-w-[55px] max-h-[85px] text-center">
            <Image
              className={"mt-[5px] pb-[5px] rounded-[10px]"}
              src={src!}
              alt={alt}
            ></Image>
            <p className={twMerge(comfortaa.className, "font-bold text-sm uppercase")}>{text}</p>
          </div>
        </div> :
        <div className={twMerge("flex flex-col items-center justify-center w-24 h-24 min-w-15 min-h-15 sm:w-16 sm:h-16 gap-1 bg-gray-100 shadow-sm", className)}>
          {back}
          <p className={twMerge(comfortaa.className, "uppercase text-xs font-extrabold tracking-widest  text-[#773d06] bg-clip-text transform")}>{text}</p>
        </div>
      }
    </>
  );
};
