import CatalogSection from '@/components/sections/CatalogSection';
import HeroSection from '../components/sections/HeroSection'
import InfoSection from "@/components/sections/InfoSection";
import DealerSection from '@/components/sections/DealerSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CatalogSection />
      <DealerSection />
    </>
  )
}
