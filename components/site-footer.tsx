import { PlaneTakeoff } from "lucide-react";

const columns = [
  {
    title: "Convention",
    links: ["Overview", "Agenda", "Sponsors", "Programme", "Venue"],
  },
  {
    title: "Passes",
    links: ["Delegate", "Carrier Alliance", "Exhibitor", "Group rates"],
  },
  {
    title: "Company",
    links: ["About AEROVA", "Newsroom", "Careers", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--ink)] px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-white">
              <PlaneTakeoff className="size-5 text-[var(--signal)]" />
              <span className="font-display text-lg font-semibold tracking-tight">
                HORIZON <span className="text-white/40">// 26</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              An AEROVA Cargo convention, held annually for the carriers,
              forwarders and ground teams who keep freight moving by air.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
                {c.title}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 transition hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/35 sm:flex-row">
          <span>&copy; 2026 AEROVA Cargo Group. All rights reserved.</span>
          <span className="font-mono">SIN · 25–28 SEP 2026</span>
        </div>
      </div>
    </footer>
  );
}
