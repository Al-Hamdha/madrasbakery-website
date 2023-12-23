import Link from "next/link";
import Logo from "./Logo";
import { Separator } from "./ui/Separator";

const Footer = () => {
  return (
    <footer className="space-y-8 py-8">
      <div className="container flex flex-col md:flex-row gap-12 justify-between items-center">
        <div className="flex gap-2 items-center">
          <Logo className="w-28 h-28" />
          <div className="font-display text-4xl leading-none">
            Madras <br /> Bakery
          </div>
        </div>
        <div className="flex items-start gap-12 flex-col md:flex-row">
          <div>
            <h2 className="font-medium text-muted-foreground tracking-widest text-sm mb-3">
              SOCIALS
            </h2>
            <nav>
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/madrasbakerykl"
                    className="hover:text-muted-foreground cursor-pointer"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/madrasbakerykl/#"
                    className="hover:text-muted-foreground cursor-pointer"
                  >
                    Instagram
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h2 className="font-medium text-muted-foreground tracking-widest text-sm mb-3">
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
      <div className="container text-xs text-center">
        Designed and developed by{" "}
        <Link
          className="underline hover:text-muted-foreground"
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
