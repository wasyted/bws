import InfoCard from "../ui/InfoCard";
import { INFO_CARDS_DATA } from "@/constants/InfoCards";

export default function InfoSection() {
  return (
    <section className="flex relative">
      {
        INFO_CARDS_DATA && INFO_CARDS_DATA.map((infoCard, index) =>
          <InfoCard key={index} title={infoCard.title} description={infoCard.description} category={infoCard.category} />)
      }
    </section>
  )
}