import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative w-16 h-16 rounded-full overflow-hidden border-2 border-white",
        className
      )}
    >
      <Image
        sizes="256px"
        className="object-cover"
        src="/images/logo.png"
        alt="Madras Bakery Logo"
        fill
      />
    </div>
  );
};
export default Logo;
