import Image from "next/image"
import HeroTitle from "../ui/hero/HeroTitle"
import HeroSubtitle from "../ui/hero/HeroSubtitle"
import Button from "../ui/Button"

export default function HeroSection() {
  return (
    <header className="text-white min-h-screen overflow-hidden">
      <Image
        alt="background of houses"
        src={'/8ea76b9677d02f7d295a8ce87d077f329388637e.jpg'}
        placeholder="blur"
        blurDataURL="data:..."
        quality={80}
        fill
        priority
        className="object-cover grayscale absolute z-[-1]"
      />
      <div className="px-[144px] mt-[112px]">
        <HeroTitle />
        <HeroSubtitle />
        <Button>Shop Now</Button>
      </div>
    </header>
  )
}