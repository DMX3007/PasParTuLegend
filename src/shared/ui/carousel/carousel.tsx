import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel = ({ children }: { children: ReactNode }) => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({ delay: 10000 })])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}
      </div>
    </div>
  )
}
