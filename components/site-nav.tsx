import { Button } from "@/components/ui/button";
import { ArrowUpRight, PlaneTakeoff } from "lucide-react";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Programme", href: "#programme" },
  { label: "Venue", href: "#venue" },
  { label: "FAQ", href: "#faq" },
];

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-2 text-white">
          <PlaneTakeoff className="size-5 text-[var(--signal)]" strokeWidth={2.2} />
          <span className="font-display text-lg font-semibold tracking-tight">
            HORIZON <span className="text-white/40">// 26</span>
          </span>
        </a>
        <ul className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-8 py-2.5 backdrop-blur-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button size="sm" className="hidden md:inline-flex">
          Register <ArrowUpRight />
        </Button>
        <Button size="sm" variant="outline" className="md:hidden">
          Menu
        </Button>
      </nav>
    </header>
  );
}
