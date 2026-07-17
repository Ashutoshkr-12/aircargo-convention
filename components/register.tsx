import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowUpRight } from "lucide-react";
import { tickets } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Register() {
  return (
    <section className="bg-[var(--ink)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <Badge variant="signal" className="mb-6">
            Boarding is Open
          </Badge>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Choose your pass, reserve your seat
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/55">
            Prices in USD. Group and exhibitor rates available on request.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tickets.map((t) => (
            <div
              key={t.name}
              className={cn(
                "flex flex-col rounded-2xl border p-8",
                t.featured
                  ? "border-[var(--signal)]/50 bg-[var(--ink-2)]"
                  : "border-white/10 bg-[var(--ink-2)]/40"
              )}
            >
              {t.featured && (
                <Badge variant="signal" className="mb-5 w-fit">
                  Most booked
                </Badge>
              )}
              <h3 className="font-display text-xl font-semibold text-white">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-white/50">{t.blurb}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold text-white">
                  {t.price}
                </span>
                <span className="text-sm text-white/40">{t.cadence}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 size-4 shrink-0 text-[var(--signal)]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8"
                variant={t.featured ? "default" : "outline"}
              >
                Reserve {t.name} <ArrowUpRight />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
