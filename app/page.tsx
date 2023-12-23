"use client";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Menu from "@/components/Menu";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <main className="mt-4 bg-black">
      <Hero />
      <Menu />
      <Element name="visitUs">
        <Map />
      </Element>
    </main>
  );
}
