"use client";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, PlaneTakeoff } from "lucide-react";
import { partners } from "@/lib/data";
import Image from "next/image";

export function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const speed = 1;

  const startAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const animate = () => {
      const el = trackRef.current;
      if (!el) return;

      el.scrollLeft += speed;

      // Loop seamlessly because the array is duplicated.
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  function scrollByAmount(amount: number) {
    trackRef.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  }

  // Drag-to-scroll support
  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!el) return;

    stopAnimation();

    const startX = e.pageX;
    const startScroll = el.scrollLeft;

    el.setPointerCapture(e.pointerId);
    el.classList.add("cursor-grabbing");

    function handleMove(ev: PointerEvent) {
      el!.scrollLeft = startScroll - (ev.pageX - startX);
    }

    function handleUp() {
      el?.classList.remove("cursor-grabbing");

      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);

      startAnimation();
    }

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  }

  return (
    <section className="border-b border-black/5 bg-white px-6 py-14 lg:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="font-mono text-xl uppercase text-[var(--ash)]">
          Carriers &amp; partners on the manifest
        </p>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Scroll partners left"
            onClick={() => scrollByAmount(-320)}
            className="flex size-8 items-center justify-center rounded-full border border-black/10 text-[var(--ink)] transition hover:bg-black/5"
          >
            <ChevronLeft className="size-4" />
          </button>

          <button
            type="button"
            aria-label="Scroll partners right"
            onClick={() => scrollByAmount(320)}
            className="flex size-8 items-center justify-center rounded-full border border-black/10 text-[var(--ink)] transition hover:bg-black/5"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-16" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-16" />

        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onMouseEnter={stopAnimation}
          onMouseLeave={startAnimation}
          className="flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {[...partners, ...partners].map((partner, index) => (
           <div
  key={`${partner.partner}-${index}`}
  className="flex h-52 w-56 shrink-0 select-none flex-col items-center justify-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/10 hover:shadow-md"
>
              

             <div className="flex flex-col items-center justify-center gap-4">
  <span className="flex h-20 w-20 items-center justify-center rounded-xl border">
    <img
    src={partner.photo}      
    alt="img"
    className=""
      // strokeWidth={2.2}
    />
  </span>

  <div className="space-y-1">
    <p className="font-display text-lg font-semibold text-[var(--ink)]">
      {partner.name}
    </p>

    <p className="text-xs uppercase tracking-widest text-[var(--ash)]">
      {partner.partner}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-center font-mono text-[11px] text-[var(--ash)]/70 sm:hidden">
        Swipe to see all partners →
      </p>
    </section>
  );
}