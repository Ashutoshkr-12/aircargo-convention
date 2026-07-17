"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryAlbum } from "@/lib/gallery";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface GalleryCardProps {
  item: GalleryAlbum;
}

export function GalleryCard({ item }: GalleryCardProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % item.images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? item.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Card */}

      <button
         onPointerDown={(e) => e.stopPropagation()}
  onClick={(e) => {
    e.stopPropagation();
    setCurrent(0);
    setOpen(true);
  }}
        className="group relative w-[320px] shrink-0 overflow-hidden rounded-3xl bg-neutral-100 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            unoptimized
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/10" />
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-xl font-semibold text-white">
            {item.title}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Camera className="h-4 w-4" />
              {item.images.length} Photos
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </button>

      {/* Dialog */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-6xl border-none bg-black p-4">
          <DialogTitle className="text-white text-xl">
            {item.title}
          </DialogTitle>

          <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
            <Image
              src={item.images[current]}
              alt={`${item.title} ${current + 1}`}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Prev */}

          <button
            onClick={prev}
            className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30"
          >
            <ChevronLeft />
          </button>

          {/* Next */}

          <button
            onClick={next}
    
            className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur hover:bg-white/30"
          >
            <ChevronRight />
          </button>

          {/* Thumbnails */}

          <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
            {item.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg border-2 ${
                  current === index
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          <div className="text-center text-sm text-white/70">
            {current + 1} / {item.images.length}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}