"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

function Carousel({
  images,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(next, autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div
        className="lg:h-[600px flex h-80 w-full transition-transform duration-500 ease-out md:h-[400px]"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`image-${item}`}
            className="min-w-full rounded-md object-cover"
          />
        ))}
      </div>
      <div className="absolute top-2 right-4 rounded bg-white px-2">
        {curr + 1} of {images.length}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 justify-center gap-1">
          {Array.from({ length: images.length }, (_, i) => (
            <button
              key={i}
              className={`mx-1 h-2 w-2 rounded-full p-0 transition-transform duration-500 ease-in-out ${
                i === curr
                  ? "scale-150 transform bg-white hover:bg-gray-300"
                  : "scale-100 bg-gray-300 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
