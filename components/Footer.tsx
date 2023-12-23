import Link from "next/link";
import Logo from "./Logo";
import { Separator } from "./ui/Separator";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="space-y-8 py-8 bg-primary-foreground border-t sticky bottom-0 -z-50">
      <div className="container flex flex-col md:flex-row gap-12 justify-between items-center">
        <div className="flex gap-2 items-center">
          <Logo className="w-28 h-28" />
          <div className="font-display text-4xl leading-none">
            Madras <br /> Bakery
          </div>
        </div>
        <div className="flex gap-12 flex-col items-center text-center md:text-start md:flex-row md:items-start">
          <div>
            <h2 className="font-medium text-muted-foreground tracking-widest text-xs mb-3">
              SOCIALS
            </h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/madrasbakerykl"
                    className="flex gap-2 items-center underline hover:text-muted-foreground cursor-pointer"
                  >
                    <Facebook /> <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/madrasbakerykl/#"
                    className="flex gap-2 items-center underline hover:text-muted-foreground cursor-pointer"
                  >
                    <Instagram /> <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-medium text-muted-foreground tracking-widest text-xs mb-3">
              ADDRESS
            </h2>
            <p>
              No 92, Ground Floor,
              <br />
              Jalan Medan Bunus, Masjid India,
              <br />
              50100 Kuala Lumpur, Malaysia.
              <br />
              <br />
              Tel: +60 11-6062 4244
            </p>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container text-xs text-muted-foreground text-center">
        Made with ❤️ by{" "}
        <Link
          className="underline text-primary hover:text-muted-foreground"
          href="https://github.com/sheikhameen"
        >
          Sheikh Ameen
        </Link>
        .
      </div>
    </footer>
  );
};
export default Footer;
