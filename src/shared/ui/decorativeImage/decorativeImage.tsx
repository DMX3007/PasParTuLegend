import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface DecorativeImageProps {
  className: string;
  src: StaticImageData;
  alt: string;
  text: string;
}

export const DecorativeImage = ({ className, src, alt, text }: DecorativeImageProps): JSX.Element => {
  return (
    <>
      <div className={twMerge("flex flex-col items-center justify-center rounded-lg w-24 h-24 min-w-15 min-h-15 bg-white shadow-sm", className)} >
        <Image
          className={"mt-[5px] pb-[5px] rounded-[10px]"}
          src={src}
          width={65}
          height={65}
          alt={alt}
          style={{
            objectFit: 'contain',
          }}
        ></Image>
        <p className={"font-bold text-sm uppercase"}>{text}</p>
      </div>
      {/* <div className="w-[100px] h-[100px] shadow-lg bg-slate-900 absolute"></div> */}
    </>
  );
};
