import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavedda | Teknoloji Üretim Üssü",
  description: "Mavedda bir teknoloji üretim üssüdür. Dünya standartlarında uzmanlığımızla, fikirlerinizi milyonlara ulaşan mobil uygulamalara dönüştürüyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased bg-black text-white`}
    >
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
