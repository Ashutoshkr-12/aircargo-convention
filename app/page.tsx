import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { Overview } from "@/components/overview";
import { Speakers } from "@/components/agenda";
import { Sponsors } from "@/components/sponsors";
import { ProgrammeSchedule } from "@/components/programme-schedule";
import { Gallery } from "@/components/gallery";
import { Register } from "@/components/register";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <Overview />
      <Speakers />
      <ProgrammeSchedule />
      <Gallery />
      <Sponsors />
      <Register />
      <SiteFooter />
    </main>
  );
}
