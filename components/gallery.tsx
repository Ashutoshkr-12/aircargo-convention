"use client";

import { Badge } from "@/components/ui/badge";
import { GalleryRow } from "@/components/gallery/gallery-row";
import { gallery } from "@/lib/gallery";

export function Gallery() {
  // Get unique years in descending order
  const years = [...new Set(gallery.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  return (
    <section
      id="gallery"
      className="bg-[var(--paper)] px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-[var(--ink)] sm:text-5xl">
            GLIMPSES FROM PAST EDITIONS
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-[var(--ash)]">
            Explore keynote sessions, networking events, exhibition halls,
            award ceremonies, and behind-the-scenes moments from previous
            editions of the convention.
          </p>
        </div>

        {/* Gallery Rows */}

        <div className="space-y-8">
          {years.map((year) => (
            <GalleryRow
              key={year}
              year={year}
              items={gallery.filter((item) => item.year === year)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}