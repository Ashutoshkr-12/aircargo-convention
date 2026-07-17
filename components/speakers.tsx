import { Badge } from "@/components/ui/badge";
import { speakers } from "@/lib/data";
import Image from "next/image";

export function Speakers() {
  return (
    <section id="speakers" className="bg-[var(--paper)] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            Speakers flying in from across the network
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {speakers.map((s) => (
        <div
  key={s.initials}
  className="group flex h-80 flex-col items-center rounded-2xl border border-black/5 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-lg"
>
  {/* Avatar */}
  <Image className="mb-6 flex h-28 w-28 items-center justify-center rounded-full " src={s.photo} alt="img" />
  
  {/* Content */}
  <div className="flex flex-1 flex-col items-center">
    <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
      {s.name}
    </h3>

    <p className="mt-2 line-clamp-2 text-sm text-[var(--ash)]">
      {s.title}
    </p>

    <p className="mt-1 line-clamp-1 text-sm text-[var(--ash)]">
      {s.org}
    </p>

    {/* Badge at bottom */}
    <div className="mt-auto pt-6">
      <span className="inline-flex rounded-full bg-black/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--ash)]">
        {s.track}
      </span>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
