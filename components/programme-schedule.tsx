"use client";

import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DepartureBoard } from "@/components/departure-board";
import { sessions, conventionDays } from "@/lib/data";

export function ProgrammeSchedule() {
  return (
    <section id="programme" className="bg-[var(--ink)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Badge variant="sky" className="mb-6">
              The Full Board
            </Badge>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Programme schedule
              <br className="hidden sm:block" /> four days, zero dead time
            </h2>
          </div>
          <p className="max-w-xs text-sm text-white/50">
            Every session below updates in real time on-site — the board you
            see in the hangar is this exact list, 25–28 September 2026.
          </p>
        </div>

        <Tabs defaultValue="1">
          <TabsList className="mb-6 h-auto w-full flex-wrap gap-1 py-1.5 sm:h-11 sm:w-auto sm:flex-nowrap sm:py-1">
            {conventionDays.map((d) => (
              <TabsTrigger key={d.day} value={String(d.day)}>
                {d.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {conventionDays.map((d) => (
            <TabsContent key={d.day} value={String(d.day)}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/40">
                {d.weekday}, {d.date} · {d.sub}
              </p>
              <DepartureBoard
                rows={sessions.filter((s) => s.day === d.day)}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
