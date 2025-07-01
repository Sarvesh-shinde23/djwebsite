"use client";
import React, { useEffect, useRef } from "react";

export function ScrollingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const clone = container.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      container.parentElement?.appendChild(clone);
    }
  }, []);

  return (
    <section className="relative overflow-hidden w-full h-[198px] max-md:h-[120px] max-sm:h-20">
      <div
        ref={containerRef}
        className="whitespace-nowrap flex gap-10 items-center h-full animate-infinite-scroll"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <React.Fragment key={i}>
            <h1 className="text-blue-300 leading-[198px] text-[165px] shrink-0 max-md:text-8xl max-md:leading-[120px] max-sm:text-6xl max-sm:leading-[80px]">
              FEMME BY DEJA DES
            </h1>
            <h1 className="text-blue-300 leading-[198px] text-[165px] shrink-0 max-md:text-8xl max-md:leading-[120px] max-sm:text-6xl max-sm:leading-[80px]">
              FEIN
            </h1>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default ScrollingText;
