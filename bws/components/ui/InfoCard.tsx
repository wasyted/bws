import Link from "next/link"
import Image from "next/image"

interface InfoCardObject {
  title: string,
  category: string,
  description: string
}

export default function InfoCard({ title, category, description }: InfoCardObject) {
  return (
    <div className="group aspect-square cursor-default hover:bg-primary hover:text-white text-start flex-1 p-[64px] flex items-start justify-center flex-col transition-colors duration-300">
      <h3 className="color-primary tracking-[1.5px]">{category}</h3>
      <h3 className="mt-[50px] max-w-[328px]">{title}</h3>
      <p className="transition-colors duration-300 group-hover:!text-white mt-[16px] max-w-[328px] ">
        {description}
      </p>
      <div className="mt-[80px] flex items-center justify-center h-[50px] w-[50px] border">
        <Link className="w-full h-full flex items-center justify-center" href={'#'}>
          <Image src={'/Arrow.png'} alt="arrow" width={8} height={13} />
        </Link>
      </div>
    </div>
  )
}