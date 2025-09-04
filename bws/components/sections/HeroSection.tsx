import Image from "next/image"
import HeroTitle from "../ui/hero/HeroTitle"
import HeroSubtitle from "../ui/hero/HeroSubtitle"
import Button from "../ui/Button"

export default function HeroSection() {
  return (
    <header className="pt-[80px] mt-[-80px] text-white min-h-screen overflow-hidden relative">
      <Image
        alt="background of houses"
        src={'/8ea76b9677d02f7d295a8ce87d077f329388637e.jpg'}
        placeholder="blur"
        blurDataURL="data:..."
        quality={80}
        fill
        priority
        className="brightness-80 saturate-95 contrast-90 darken-20 object-cover grayscale absolute z-[-1]"
      />
      <div className="px-8 md:px-16 lg:px-[144px] mt-[190px]">
        <HeroTitle />
        <HeroSubtitle />
        <div className="mt-[50px]">
          <Button type={'filled'}>Shop Now</Button>
        </div>
      </div>
    </header>
  )
}