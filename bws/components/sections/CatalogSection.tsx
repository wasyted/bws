import CatalogCard from "../ui/CatalogCard";
import { CATALOG_CARDS_DATA } from "@/constants/CatalogCards";

export default function CatalogSection() {
  return (
    <section className="dark:bg-black bg-gray-light lg:p-[64px] grid grid-cols-[1fr_1fr] gap-[32px]">
      {
        CATALOG_CARDS_DATA && CATALOG_CARDS_DATA.map((card, index) => <CatalogCard
          href="#"
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />)
      }
    </section>
  )
}