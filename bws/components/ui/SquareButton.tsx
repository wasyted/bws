import Image from "next/image"
import Link from "next/link"

interface SquareButtonProps{
  href: string,
}

export default function SquareButton({href}: SquareButtonProps) {
  return (
    <button className="flex items-center justify-center h-8 w-8 lg:h-[50px] lg:w-[50px] border">
      <Link className="w-full h-full flex items-center justify-center" href={href}>
        <Image className="transition-invert duration-300 invert dark:invert-0 group-hover:invert-0" src={'/Arrow.png'} alt="arrow" width={8} height={13} />
      </Link>
    </button>
  )
}