"use client";
import React from "react";
import { OrbitingCircles } from "./OrbitingCircles";
import {
  ReactIcon,
  ViteIcon,
  NextIcon,
  TailwindCSS,
  TypescriptIcon,
} from "@/docs-components/icons/icons";

function Technologies() {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-lg font-bold md:text-3xl">
          What to use when using these components ?
        </h2>
        <p>
          Our reusable components and hooks are designed to work seamlessly with
          modern React environments. Here’s what we recommend:
        </p>
      </div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          <ReactIcon />
          <ViteIcon />
          <NextIcon />
          <TailwindCSS />
          <TypescriptIcon />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <ReactIcon />
          <ViteIcon />
          <NextIcon />
          <TailwindCSS />
          <TypescriptIcon />
        </OrbitingCircles>
      </div>
    </section>
  );
}

export default Technologies;
