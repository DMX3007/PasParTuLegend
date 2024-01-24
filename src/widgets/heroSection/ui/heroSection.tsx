import Image, { StaticImageData } from "next/image";
import PaspartuLogo from "@/shared/assets/icons/paspartu-logo.png";
import PaspartuMainImage from '@/shared/assets/pictures/1.png'
import EgyptImage from '@/shared/assets/pictures/egypt.png';
import MaldImage from '@/shared/assets/pictures/maldives.png';
import FranceImage from '@/shared/assets/pictures/paris.png';
import RomeImage from '@/shared/assets/pictures/rome.png';
import { EmblaCarousel } from "@/shared/ui/carousel/carousel";
import { DecorativeImage } from '@/shared/ui/decorativeImage/decorativeImage';
import { MainProps } from "../types/types";
import Link from "next/link";
import { AppRouter } from "@/shared/const/route";

export const HeroSection = ({ font }: MainProps): JSX.Element => {

  return (
    <div className={"grid grid-cols-3"}>
      <div className={"flex flex-col justify-between justify-self-end shrink-0"}>
        <DecorativeImage
          className={"justify-self-center rotate-12 shadow-lg shadow-slate-400 mr-4"}
          text="париж"
          src={FranceImage}
          alt="мультипликационное изображение города Париж"
        />
        <Link href={AppRouter.main}>
          <DecorativeImage
            src={PaspartuLogo}
            className={'transform rotate-[05deg] translate-y-1 shadow-amber-800'}
            text="ПасПарТу"
            alt={"Обратная сторона карточки с логотипом Паспарту"}
            back
          />
        </Link>
        <DecorativeImage
          src={EgyptImage}
          className={'-rotate-12 shadow-amber-800'}
          text="Гиза"
          alt={"мультипликационное изображение города Гиза"}
        />
      </div>
      <div className="rounded-lg bg-white justify-self-center shadow-lg shadow-slate-400">
        <div className="bg-slate-600" style={{ clipPath: 'circle(45.2%)' }}>
          <video className="transform scale-.5 rounded-full justify-self-center " style={{ clipPath: 'circle(45.1%)' }} width="520" height="320" autoPlay muted loop>
            <source src="video/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={"flex flex-col justify-between justify-self-start"}>
        <DecorativeImage
          className={'shrink-0 rotate-12 shadow-cyan-500 ml-4'}
          text="Мале"
          src={MaldImage}
          alt="мультипликационное изображение города Мале"
        />
        <DecorativeImage
          className={'shrink-0 rotate-12 shadow-amber-800 ml-4'}
          text="Рим"
          src={RomeImage}
          alt="мультипликационное изображение города Рим"
        />
      </div>
    </div >
  );
};

