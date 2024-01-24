import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface DecorativeImageProps {
  className: string;
  alt: string;
  text: string;
  src?: StaticImageData;
  back?: boolean;
}

export const DecorativeImage = ({ className, src, alt, text, back }: DecorativeImageProps): JSX.Element => {
  return (
    <>
      {!back ?
        <div className={twMerge("flex flex-col items-center justify-center rounded-lg w-24 h-24 min-w-15 min-h-15 bg-white shadow-sm", className)} >
          <Image
            className={"mt-[5px] pb-[5px] rounded-[10px]"}
            src={src!}
            width={65}
            height={65}
            alt={alt}
            style={{
              objectFit: 'contain',
            }}
          ></Image>
          <p className={"font-bold text-sm uppercase"}>{text}</p>
        </div> :
        <div className={twMerge("flex flex-col items-center justify-center rounded-lg w-24 h-24 min-w-15 min-h-15 shadow-sm", className)} >
          <p className={"font-bold text-sm uppercasetext-4xl tracking-widest bg-gray-600  bg-clip-text text-transparent transform "} style={{ textShadow: "1px 1px 1px hsla(1,1%,1%,0.3)", filter: "grayscale(0%) invert(1) brightness(1) contrast(1.5) saturate(0.2)", }}>{text}</p>
        </div>
      }
    </>
  );
};
