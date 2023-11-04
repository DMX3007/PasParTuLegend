import Image from "next/image";

interface DecorativeImageProps {
  className: string;
  src: string;
  alt: string;
  text: string;
}

export const DecorativeImage = ({ className, src, alt, text }: DecorativeImageProps): JSX.Element => {
  return (
    <div className={"flex flex-col items-center justify-center rounded-lg w-15 h-15 min-w-15 min-h-15 bg-white"}>
      <Image
        className={"mt-[5px] pb-[5px] rounded-[10px]"}
        src={src}
        width={45}
        height={45}
        alt={alt}
        sizes="16vw"
        style={{
          objectFit: 'contain',
        }}
      ></Image>
      <p className={"font-bold text-[xx-small] uppercase"}>{text}</p>
    </div>
  );
};
