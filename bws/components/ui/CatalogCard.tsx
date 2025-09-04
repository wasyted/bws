import Image from "next/image"
import SquareButton from "./SquareButton"

interface CatalogCardObject {
  title: string,
  description: string,
  image: {
    url: string,
    width: number,
    height: number,
    alt: string
  }
  href: string
}

export default function CatalogCard({ title, description, image, href }: CatalogCardObject) {
  return (
    <div className="relative grid grid-rows-[360px_1fr] shadow-xl">
      <Image className="h-full w-full object-cover grayscale brightness-80 saturate-95 contrast-90" width={image.width} height={image.height} alt={image.alt} src={image.url} />
      <div className="p-[40px] dark:bg-gray bg-white">
        <h4 className="dark:text-white text-primary uppercase">
          {title}
        </h4>
        <p className="dark:!text-white h-[96px] mt-[30px] mb-[16px]">
          {description}
        </p>
        <SquareButton href={href} />
      </div>
    </div>
  )
}