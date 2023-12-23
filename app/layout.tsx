import type { Metadata } from "next";
import { Inter, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-noto-serif-display",
});

export const metadata: Metadata = {
  title: "Madras Bakery",
  description:
    "Finest bakery delights, with fresh cow milk tea complimenting every bite of our savouries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoSerifDisplay.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
