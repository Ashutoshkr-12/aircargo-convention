import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  FreighterIllustration,
  ContainerLoadIllustration,
  ControlTowerIllustration,
} from "@/components/illustrations";
import Image from "next/image";

export function Overview() {
  return (
    <section id="overview" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <Badge variant="outline" className="mb-6">
            Convention Overview
          </Badge>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            Built for the people who move
            <br className="hidden sm:block" /> the world&rsquo;s cargo by air
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--ash)]">
            Need to plan freighter capacity, cut ramp turnaround times, or
            just meet the forwarders you keep emailing? Horizon puts carriers,
            ground handlers and tech providers in the same hangar for four
            focused days.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--ash)]">
            Every delegate gets access to the Cargo Allocation Exchange, a
            live dashboard of freighter space, transfer windows and
            cool-chain capacity across every carrier on the floor.
          </p>
          <Button className="mt-8" variant="dark">
            Reserve your seat <ArrowUpRight />
          </Button>
        </div>

        <div className="mt-16 ">
          {/* <FreighterIllustration className="col-span-2 h-56 w-full rounded-2xl object-cover sm:h-64" />
          <ContainerLoadIllustration className="h-44 w-full rounded-2xl object-cover" />
          <ControlTowerIllustration className="h-44 w-full rounded-2xl object-cover" /> */}
          <Image src="/images/ACAAI-2.jpg" width={900} height={900} alt=""/>
        </div>
      </div>
    </section>
  );
}
