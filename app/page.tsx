import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="mt-4">
      <Hero />
      <Menu />
      <div className="py-12">
        <p className="font-display mb-6 text-center leading-tight text-4xl md:text-5xl">
          Drop by and try them all!
        </p>
        <p className="text-lg text-muted-foreground text-center">
          They taste just as good as they look, no cap! Curious? Come find us at
          the heart of town, Masjid India in Kuala Lumpur.
        </p>
      </div>
      <Map />
    </main>
  );
}
