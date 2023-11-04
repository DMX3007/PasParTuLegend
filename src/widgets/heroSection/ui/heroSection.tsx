import Image from "next/image";
import { DecorativeImage } from '@/shared/ui/decorativeImage/decorativeImage';
import { MainProps } from "../types/types";

export const HeroSection = ({ font }: MainProps): JSX.Element => {
  return (
    <div className={"flex justify-center"}>
      <DecorativeImage
        className={"mr-[-50px] shadow-[15px_-25px_1px_1px_rgba(105, 193, 179, 1),2px_2px_9px_rgb(183,178,178)] rotate-[5deg] transition-all duration-[0.8s] ease-[ease] mt-[100px] hover:shadow-[0px_0px_0px_0px_rgba(105, 193, 179, 1)] hover:transition-all hover:duration-[0.8s] hover:ease-[ease] hover:translate-x-[15px] hover:translate-y-[-25px];"}
        text="париж"
        src="/src/shared/assets/pictures/eiffel_tiny.jpeg"
        alt="Париж"
      />
      <DecorativeImage
        className={"shadow-[15px_25px_1px_1px_rgba(236, 226, 177, 1),-2px_-2px_9px_rgb(183,178,178)] rotate-[5deg] transition-all duration-[0.8s] ease-[ease] mr-5 mt-[210px] hover:shadow-[0px_0px_0px_0px_rgba(236, 226, 177, 1)] hover:transition-all hover:duration-[0.8s] hover:ease-[ease] hover:translate-x-[15px] hover:translate-y-[25px]"}
        text="ницца"
        src="/src/shared/assets/pictures/turkish.jpeg"
        alt="Ницца"
      />
      <Image
        className={"mt-4vh"}
        src="/src/shared/assets/pictures/main-logo.png"
        width={400}
        height={400}
        sizes="100vw"
        alt="туристическое агентство Паспарту логотип"
        priority
        style={{
          objectFit: 'contain',
          width: 'auto', height: 'auto', minHeight: '200px', minWidth: '200px', maxWidth: '400px', maxHeight: '400px'
        }}
      ></Image>
      <DecorativeImage
        className={"shadow-[-15px_-25px_1px_1px_rgba(105, 193, 179, 1);,2px_2px_9px_rgb(183,178,178)] rotate-[5deg] transition-all duration-[0.8s] ease-[ease] mt-[95px] hover:shadow-[0px_0px_0px_0px_rgba(105, 193, 179, 1);] hover:transition-all hover:duration-[0.8s] hover:ease-[ease] hover:delay-[forwards] hover:translate-x-[-15px] hover:translate-y-[-25px]"}
        text="мале"
        src="/src/shared/assets/pictures/mald.jpeg"
        alt="Мале"
      />
      <DecorativeImage
        className={"ml-[-50px] shadow-[15px_-25px_1px_1px_rgba(239,198,128,1),2px_2px_9px_rgb(183,178,178)] rotate-[5deg] transition-all duration-[0.8s] ease-[ease] mt-[250px] hover:shadow-[0px_0px_0px_0px_rgba(239,198,128,1)] hover:transition-all hover:duration-[0.8s] hover:ease-[ease] hover:translate-x-[15px] hover:translate-y-[-25px]"}
        text="пхукет"
        src="/src/shared/assets/pictures/phuket.jpg"
        alt="Пхукет"
      />
    </div >
  );
};
