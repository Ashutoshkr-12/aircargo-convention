import { Badge } from "@/components/ui/badge";
import { sponsors, type Sponsor } from "@/lib/data";

const tierStyles: Record<Sponsor["tier"], string> = {
  Platinum: "border-[var(--signal)]/40 bg-[var(--signal)]/[0.06]",
  Gold: "border-black/10 bg-black/[0.02]",
  Silver: "border-black/5 bg-white",
};

const tierBadge: Record<Sponsor["tier"], "signal" | "sky" | "outline"> = {
  Platinum: "signal",
  Gold: "sky",
  Silver: "outline",
};

function tierSize(tier: Sponsor["tier"]) {
  switch (tier) {
    case "Platinum":
      return "size-16 text-lg";
    case "Gold":
      return "size-14 text-base";
    case "Silver":
      return "size-12 text-sm";
  }
}

export function Sponsors() {
  const tiers: Sponsor["tier"][] = ["Platinum", "Gold", "Silver"];

  return (
    <section id="sponsors" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <Badge variant="outline" className="mb-6">
            Backed by the Network
          </Badge>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            Sponsors keeping the hangar lights on
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--ash)]">
            AEROVA Horizon is made possible by the carriers, handlers and
            technology partners investing in the future of air cargo.
          </p>
        </div>

        <div className="flex flex-col gap-14">
          {tiers.map((tier) => {
            const rows = sponsors.filter((s) => s.tier === tier);
            if (rows.length === 0) return null;
            return (
              <div key={tier}>
                <div className="mb-5 flex items-center gap-3">
                  <Badge variant={tierBadge[tier]}>{tier} sponsor</Badge>
                  <div className="h-px flex-1 bg-black/5" />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rows.map((s) => (
                    <div
                      key={s.name}
                      className={`flex items-center gap-4 rounded-2xl border p-6 transition hover:shadow-md ${tierStyles[s.tier]}`}
                    >
                      <span
                        className={`flex shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] font-mono font-bold tracking-wide text-[var(--signal)] ${tierSize(
                          s.tier
                        )}`}
                      >
                        {s.short}
                      </span>
                      <div>
                        <p className="font-display text-[15px] font-semibold text-[var(--ink)]">
                          {s.name}
                        </p>
                        <p className="mt-1 text-sm text-[var(--ash)]">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
