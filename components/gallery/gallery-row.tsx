"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryCard } from "./gallery-card";
import { GalleryAlbum } from "@/lib/gallery";

interface GalleryRowProps {
  year: number;
  items: GalleryAlbum[];
}

export function GalleryRow({ year, items }: GalleryRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const scroll = (amount: number) => {
    rowRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = rowRef.current;
    if (!el) return;

    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const el = rowRef.current;
    if (!el) return;

    const walk = e.pageX - startX.current;
    el.scrollLeft = startScrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="group relative mb-16">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold">
            {year}
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Previous Convention Highlights
          </p>
        </div>

        <div className="hidden gap-2 opacity-0 transition group-hover:opacity-100 md:flex">
          <button
            onClick={() => scroll(-500)}
            className="rounded-full border bg-white p-2 shadow hover:bg-neutral-100"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll(500)}
            className="rounded-full border bg-white p-2 shadow hover:bg-neutral-100"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Fade */}

      <div className="pointer-events-none absolute left-0 top-20 z-20 h-[220px] w-12 bg-gradient-to-r from-white to-transparent" />

      <div className="pointer-events-none absolute right-0 top-20 z-20 h-[220px] w-12 bg-gradient-to-l from-white to-transparent" />

      {/* Cards */}

      <div
        ref={rowRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="
          flex
          gap-6
          overflow-x-auto
          scroll-smooth
          pb-4
          select-none
          cursor-grab
          active:cursor-grabbing

          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {items.map((item) => (
          <div key={item.id} className="shrink-0">
            <GalleryCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}