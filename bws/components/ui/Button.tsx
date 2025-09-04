export default function Button({
  type,
  children,
}: {
  children: React.ReactNode,
  type: 'filled' | 'outline',
}) {
  let buttonStyling = 'cursor-pointer w-[196px] h-[54px] hover:bg-primary-light transition-bg duration-300 flex items-center justify-center';

  if (type === 'outline') {
    buttonStyling += ' bg-transparent border';
  } else {
    buttonStyling += ' bg-primary';
  }

  return (
    <button className={buttonStyling}>
      {children}
    </button>
  )
}