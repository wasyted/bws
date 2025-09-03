import Image from "next/image"

export default function HeroSection() {
  return (
    <header className="relative min-h-screen overflow-hidden">
      <nav className="sticky top-0 px-[64px] h-[60px] flex items-center justify-between w-full">
        <button className="w-[60px] h-[60px]">
          <Image alt="background" width={60} height={60} src={'/logo.svg'} />
        </button>
        <Image className='' alt="background" width={88} height={39} src={'/logo.png'} />
        <button className="w-[36px] h-[36px]">
          <Image className='' alt="background" width={60} height={60} src={'/cart.svg'} />
        </button>
      </nav>
      <Image className='grayscale top-0 left-0 right-0 aspect-16/9 object-cover absolute z-[-1]' alt="background" width={2088} height={2880} src={'/8ea76b9677d02f7d295a8ce87d077f329388637e.jpg'} />
      <div className="px-[144px] mt-[112px]">
        <h1 className="max-w-[968px]">
          Upscale Your Home
          With Natural Stone
        </h1>
        <h2 className="mt-[30px] max-w-[624px]">
          We help you to choose suitable pavers for your home and
          invite you to shop in our store.
        </h2>
        <button className="mt-[50px] w-[196px] h-[54px] bg-primary flex items-center justify-center">
          Shop Now
        </button>
      </div>
    </header>
  )
}