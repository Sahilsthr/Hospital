import React from "react";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
     <section
  className="relative h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://hope.jamstacktemplates.dev/img/photos/about-bg1.jpg')",
  }}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>
          <p className="uppercase tracking-[6px] text-white text-lg mb-6">
          Hope medical center
          </p>

          <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight">
            About <span className="text-white text-6xl md:text-8xl font-light mt-2">Hope</span>
          </h1>
        </div>
      </div>
    </section>
  );
}