export default function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="cursor-pointer hover: mt-[50px] w-[196px] h-[54px] hover:bg-primary-light bg-primary transition-bg duration-100 flex items-center justify-center">
      {children}
    </button>
  )
}