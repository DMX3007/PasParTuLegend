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
        <div className={twMerge("flex flex-col items-center justify-center rounded-lg min-w-[65px] min-h-[65px] max-w-[75px] max-h-[75px] sm:max-w-[75px] sm:max-h-[75px] sm:min-w-[75px] sm:min-h-[85px] transition-all duration-500 bg-white shadow-sm", className)} >
          <div className="flex flex-col items-center max-w-[43px] max-h-[70px] sm:max-w-[55px]">
            <Image
              className={"mt-[5px] pb-[5px] sm:mt-0 rounded-[10px]"}
              src={src!}
              alt={alt}
            ></Image>
            <p className={twMerge(comfortaa.className, "font-bold text-sm uppercase")}>{text}</p>
          </div >
        </div > :
        <div className={twMerge("flex flex-col items-center justify-center", className)}>
          {back}
          < p className={twMerge(comfortaa.className, "uppercase text-xs font-extrabold tracking-widest  text-[#773d06] bg-clip-text transform")}>{text}</p >
        </div >
      }
    </>
  );
};
