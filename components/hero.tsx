import Image from "next/image";
import { SiteNav } from "@/components/site-nav";
import { DepartureBoard } from "@/components/departure-board";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { sessions } from "@/lib/data";

export function Hero() {
  const boardRows = sessions.slice(0, 5);

  return (
    <section className="bg-[radial-gradient(120%_100%_at_50%_0%,#1b3157_0%,#0a1628_55%,#0a1628_100%)] px-3 pb-10 pt-3 sm:px-6 sm:pt-6">
      {/* <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 shadow-2xl"> */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cargo.jpg"
            alt="Air cargo pallets being loaded onto a freighter aircraft at sunset"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Layered scrims so the copy stays legible on any screen size */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/45 to-[var(--ink)]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 via-[var(--ink)]/20 to-transparent sm:from-[var(--ink)]/70" />
        <div className="absolute inset-0 bg-[var(--ink)]/10 sm:hidden" />

        <SiteNav />

        <div className="relative z-10 grid gap-10 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-12 lg:pb-20 lg:pt-40">
          <div>
            <Badge variant="signal" className="mb-6">
              25–28 Sept 2026 ·Taj Cidade De Horizon
GOA
            </Badge>
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4rem]"> 
                ACAAI 50th Convention 
              <br />Made in India,
              <br /> Moved by India
            </h1>
            <p className="mt-6 max-w-md text-base text-white/65 sm:text-lg">
              Building the Logistics Ecosystem for a trillion dollar trade.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg">
                Reserve your seat <ArrowUpRight />
              </Button>
              <Button size="lg" variant="outline">
                <CalendarDays /> View the agenda
              </Button>
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="mb-3 flex items-center justify-between px-1">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                Session Board · Day 1
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--sky)]">
                <span className="size-1.5 rounded-full bg-[var(--sky)]" />
                Live
              </span>
            </div>
            {/* <DepartureBoard rows={boardRows} compact /> */}
            <p className="mt-3 px-1 font-mono text-[11px] text-white/35">
              Full 4-day programme with 20 sessions across 5 tracks — see below.
            </p>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}
