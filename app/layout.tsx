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
  description: "Mavedda bir teknoloji üretim üssüdür. Dünya standartlarında uzmanlığımızla, fikirlerinizi milyonlara ulaşan mobil uygulamalara, web platformlarına ve IoT sistemlerine dönüştürüyoruz.",
  keywords: ["yazılım şirketi", "mobil uygulama geliştirme", "web ajansı", "yazılım", "Mavedda", "teknoloji şirketi", "dijital ajans", "kurumsal yazılım", "IoT"],
  authors: [{ name: "Mavedda" }],
  creator: "Mavedda",
  publisher: "Mavedda",
  openGraph: {
    title: "Mavedda | Teknoloji Üretim Üssü",
    description: "Sıradan olsaydık, Mavedda olamazdık. Dünya standartlarında dijital çözümler üreten teknoloji stüdyosu.",
    url: "https://mavedda.com",
    siteName: "Mavedda",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavedda | Teknoloji Üretim Üssü",
    description: "Sıradan olsaydık, Mavedda olamazdık.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Mavedda",
  "alternateName": "Mavedda Teknoloji",
  "url": "https://mavedda.com",
  "logo": "https://mavedda.com/logo.png",
  "slogan": "Sıradan olsaydık, Mavedda olamazdık.",
  "description": "Mavedda, mobil uygulama, web platformları ve IoT sistemleri geliştiren global standartlarda bir teknoloji üretim üssü ve yazılım şirketidir.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "partnerships@mavedda.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["Turkish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Quartier Industriel Ouled Saleh Pro.",
    "addressLocality": "Nouaceur",
    "addressRegion": "Casablanca",
    "addressCountry": "MA"
  },
  "sameAs": [
    "https://www.linkedin.com/company/mavedda",
    "https://twitter.com/mavedda",
    "https://www.instagram.com/mavedda"
  ]
};

import CookieConsent from "./components/CookieConsent";

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
