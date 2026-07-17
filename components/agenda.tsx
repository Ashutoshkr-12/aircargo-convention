
import { speakers } from "@/lib/data";


// export const speakers = [
//   { initials: "MA", name: "Mireille Aoun", title: "Chief Cargo Officer", org: "Nimbus Air Cargo", track: "Keynote" },
//   { initials: "DK", name: "Daniyar Kenzhe", title: "VP Network Planning", org: "Meridian Freight Group", track: "Operations" },
//   { initials: "RS", name: "Renata Silva", title: "Head of Cool Chain", org: "Polaris Logistics", track: "Cargo Tech" },
//   { initials: "TO", name: "Tomas Okafor", title: "Director of Sustainability", org: "Vertex Air Freight", track: "Sustainability" },
//   { initials: "JL", name: "Jia Lin", title: "GM Ground Operations", org: "Orbital Handling", track: "Operations" },
//   { initials: "AH", name: "Amara Haile", title: "Head of Digital Cargo", org: "Nimbus Air Cargo", track: "Cargo Tech" },
//   { initials: "PV", name: "Pieter Van Dyk", title: "Chief Pilot, Freighter Ops", org: "Meridian Freight Group", track: "Keynote" },
//   { initials: "SC", name: "Soo-ah Choi", title: "Head of Alliances", org: "Polaris Logistics", track: "Network" },
// ];



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
              className="group flex flex-col items-center rounded-2xl border border-black/5 bg-white p-6 transition hover:border-black/10 hover:shadow-md"
            >
              {/* Avatar */}
               <img className="mb-6 flex h-28 w-28 items-center justify-center rounded-full " src={s.photo} alt="img" />
              
              <p className="font-display text-[15px] font-semibold text-[var(--ink)]">
                {s.name}
              </p>
              <p className="mt-1 text-sm text-[var(--ash)]">{s.title}</p>
              <p className="text-sm text-[var(--ash)]">{s.org}</p>
              <span className="mt-4 inline-block rounded-full bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ash)]">
                {s.track}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
