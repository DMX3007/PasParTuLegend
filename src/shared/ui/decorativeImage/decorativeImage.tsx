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
        <div className={twMerge("flex flex-col items-center justify-center rounded-lg min-w-[65px] min-h-[65px] max-w-[75px] max-h-[75px] mob:max-w-[75px] mob:max-h-[75px] mob:min-w-[75px] mob:min-h-[85px] md:min-w-[125px] md:min-h-[125px] lg:min-w-[145px] lg:min-h-[150px] transition-all duration-500 bg-white shadow-sm", className)} >
          <div className="flex flex-col items-center max-w-[43px] max-h-[70px] mob:min-w-[51px] sm:max-w-[55px] md:max-w-[95px] md:max-h-[110px] lg:min-w-[100px] lg:max-w-[120px] lg:max-h-[130px]">
            <Image
              className={"mt-[2px] pb-[5px] sm:mt-0 rounded-[10px]"}
              src={src!}
              alt={alt}
            ></Image>
            <p className={twMerge(comfortaa.className, "font-bold text-sm  uppercase")}>{text}</p>
          </div >
        </div > :
        <div className={twMerge("flex flex-col items-center justify-center", className)}>
          {back}
          < p className={twMerge(comfortaa.className, " uppercase text-base font-extrabold tracking-widest  text-[#773d06] bg-clip-text transform")}>
          <span className="
relative after:bg-[#773d06] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer
">
            {text}
          </span>
            </p >
        </div >
      }
    </>
  );
};
