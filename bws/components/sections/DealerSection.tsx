import Button from "../ui/Button";

export default function DealerSection() {
  return (
    <section className="flex items-center justify-center text-start px-[16px] py-[100px] dark:text-black text-white bg-black dark:bg-white gap-[64px]">
      <div>
        <h3 className="uppercase">Find a Dealer</h3>
        <p className="mt-[20px] max-w-[72ch]">Our dealers located throughout Ontario, Quebec, and North-East Michigan can help you visualize your stone solution and pair the right tiles for your project to build a customized solution. </p>
      </div>
      <Button type={'filled'}>Get in touch</Button>
    </section>
  )
}