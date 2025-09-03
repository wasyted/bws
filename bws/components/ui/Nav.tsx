import Image from "next/image"

export default function Nav() {
  return (
    <nav className="sticky z-50 top-0 px-[64px] h-[60px] flex items-center justify-between w-full">
      <button className="w-[60px] h-[60px]">
        <Image alt="background" width={60} height={60} src={'/logo.svg'} />
      </button>
      <Image className='' alt="background" width={88} height={39} src={'/logo.png'} />
      <button className="w-[36px] h-[36px]">
        <Image className='' alt="background" width={60} height={60} src={'/cart.svg'} />
      </button>
    </nav>
  )
}