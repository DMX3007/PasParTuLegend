import { Info, HelpCircle, Star, Globe } from 'lucide-react'
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import PaspartuLogo from "@/shared/assets/icons/paspartu-logo.png";
import PaspartuMainImage from '@/shared/assets/pictures/1.png'
import EgyptImage from '@/shared/assets/pictures/egypt.png';
import MaldImage from '@/shared/assets/pictures/maldives.png';
import FranceImage from '@/shared/assets/pictures/paris.png';
import RomeImage from '@/shared/assets/pictures/rome.png';
import { AppRouter } from "@/shared/const/route";
import { DecorativeImage } from '@/shared/ui/decorativeImage/decorativeImage';
import { MainProps } from "../types/types";

export const HeroSection = ({ font }: MainProps): JSX.Element => {

  return (
    <div className={"grid grid-cols-3 gap-10 bg-[url('./../../shared/assets/pictures/header_bl_back.jpg')] bg-cover bg-center"}>
      <div className={"flex flex-col justify-between justify-self-center"}>
        <DecorativeImage
          className={"justify-self-center rotate-12 shadow-lg shadow-slate-400"}
          text="париж"
          src={FranceImage}
          alt="мультипликационное изображение города Париж"
        />
        {/* <div className='m-auto'>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={' rounded-ss-2xl rounded-se-2xl hover:bg-[#e9d9c2] active:bg-[#e6ceae] focus:outline-none focus:ring focus:ring-violet-300 shadow-amber-800 '}
              text="туры"
              alt={"Ссылка для перехода к поиску туров"}
              back={<Globe className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={'hover:bg-[#e9d9c2] active:bg-[#e6ceae] focus:outline-none focus:ring  focus:ring-violet-300 shadow-amber-800 '}
              text="Отзывы"
              alt={"Отзывы"}
              back={<Star className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={'rounded-es-2xl rounded-ee-2xl  hover:bg-[#e9d9c2] active:bg-[#e6ceae] focus:outline-none focus:ring focus:ring-violet-300 shadow-amber-800 '}
              text="О нас"
              alt={"О нас"}
              back={<HelpCircle className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
        </div> */}
        <DecorativeImage
          src={EgyptImage}
          className={'-rotate-12 shadow-amber-800'}
          text="Гиза"
          alt={"мультипликационное изображение города Гиза"}
        />

      </div>
      <div className="rounded-full bg-white shadow-lg shadow-slate-400 justify-self-center max-w-[425px] max-h-[425px] ">
        <div className="bg-slate-600" style={{ clipPath: 'circle(45.2%)' }}>
          <video className="rounded-full justify-self-center min-w-[300px]"
            style={{ clipPath: 'circle(45.1%)' }} autoPlay muted loop>
            <source src="video/vid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={"flex flex-col justify-between justify-self-center sm:justify-self-start"}>
        <DecorativeImage
          className={'shrink-0 -rotate-12 shadow-cyan-500'}
          text="Мале"
          src={MaldImage}
          alt="мультипликационное изображение города Мале"
        />
        {/* <div className='m-auto'>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={'rounded-ss-2xl rounded-se-2xl  hover:bg-[#e9d9c2] active:bg-[#e6ceae] m-auto focus:outline-none focus:ring focus:ring-violet-300 shadow-amber-800 '}
              text="О нас"
              alt={"О нас"}
              back={<HelpCircle className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={'hover:bg-[#e9d9c2] active:bg-[#e6ceae] m-auto focus:outline-none focus:ring  focus:ring-violet-300 shadow-amber-800 '}
              text="Отзывы"
              alt={"Отзывы"}
              back={<Star className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
          <Link className='opacity-1 transition-opacity ease-linear duration-300 sm:opacity-100' href={AppRouter.about}>
            <DecorativeImage
              src={PaspartuLogo}
              className={'rounded-es-2xl rounded-ee-2xl hover:bg-[#e9d9c2] active:bg-[#e6ceae] m-auto focus:outline-none focus:ring focus:ring-violet-300 shadow-amber-800 '}
              text="туры"
              alt={"Обратная сторона карточки с логотипом Паспарту"}
              back={<Globe className=' hover:animate-spin' color='#773d06' />}
            />
          </Link>
        </div> */}
        <DecorativeImage
          className={'shrink-0 rotate-12 shadow-amber-800'}
          text="Рим"
          src={RomeImage}
          alt="мультипликационное изображение города Рим"
        />
      </div>
    </div >
  );
};

