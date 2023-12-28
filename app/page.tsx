"use client";
import CustomCakes from "@/components/CustomCakes";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main className="mt-4 z-10 space-y-16">
      <Hero />
      <Menu />
      <CustomCakes />
      <Element name="visitUs">
        <Map />
      </Element>
    </main>
  );
}
