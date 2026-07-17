"use client";

import { useEffect, useState } from "react";
import type { Session } from "@/lib/data";
import { cn } from "@/lib/utils";

function statusColor(status: Session["status"]) {
  switch (status) {
    case "ON TIME":
      return "text-[var(--sky)]";
    case "BOARDING":
      return "text-[var(--signal)]";
    case "FINAL CALL":
      return "text-[#ff8a65]";
    case "DEPARTED":
      return "text-white/35";
  }
}

function Flap({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [key, setKey] = useState(0);
  useEffect(() => {
    setKey((k) => k + 1);
    // remount to retrigger the flap-in animation whenever content changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  return (
    <span className="flap inline-block align-top">
      <span
        key={key}
        className="flap-inner inline-block"
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

export function DepartureBoard({
  rows,
  compact = false,
}: {
  rows: Session[];
  compact?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--ink-2)] overflow-hidden">
      <div
        className={cn(
          "grid gap-2 border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40",
          compact
            ? "grid-cols-[3.5rem_1fr_3.5rem_3.5rem]"
            : "grid-cols-[3.5rem_1fr_3.5rem_5.5rem_6rem]"
        )}
      >
        <span>No.</span>
        <span>Session</span>
        <span>Time</span>
        {!compact && <span>Room</span>}
        <span className="text-right">Status</span>
      </div>
      <div>
        {rows.map((s, i) => (
          <div
            key={s.code}
            className={cn(
              "grid items-center gap-2 px-4 py-3 font-mono text-[12px] sm:text-[13px]",
              compact
                ? "grid-cols-[3.5rem_1fr_3.5rem_3.5rem]"
                : "grid-cols-[3.5rem_1fr_3.5rem_5.5rem_6rem]",
              i % 2 === 1 ? "bg-white/[0.02]" : ""
            )}
          >
            <span className="text-white/70">
              <Flap delay={i * 40}>{s.code}</Flap>
            </span>
            <span className="truncate text-white/90 pr-2">
              <Flap delay={i * 40 + 20}>{s.route}</Flap>
            </span>
            <span className="text-white/60">
              <Flap delay={i * 40 + 40}>{s.time}</Flap>
            </span>
            {!compact && (
              <span className="text-white/60">
                <Flap delay={i * 40 + 60}>{s.gate}</Flap>
              </span>
            )}
            <span className={cn("text-right font-semibold", statusColor(s.status))}>
              <Flap delay={i * 40 + 80}>{s.status}</Flap>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
