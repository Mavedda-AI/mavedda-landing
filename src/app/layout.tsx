import type {Metadata} from "next";
import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import "./webflow.css";
import {AppProviders} from "@/providers/AppProviders";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavedda | AI Solutions & Turnkey Software Development",
  description: "Mavedda provides advanced AI services and delivers end-to-end software projects, including web, mobile, and backend development tailored to your business needs.",
  icons: {
    icon: "/assets/logo/logo_mavedda_dd.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <AppProviders>
          {children}
        </AppProviders>
        
        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66b34f2ad59081546d14c723" strategy="beforeInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/js/webflow.schunk.f2efb3c5440a81cf.js" strategy="afterInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/js/webflow.schunk.b8e2fe60f292f63f.js" strategy="afterInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/js/webflow.schunk.a3706067fad6072f.js" strategy="afterInteractive" crossOrigin="anonymous" />
        <Script src="https://cdn.prod.website-files.com/66b34f2ad59081546d14c723/js/webflow.72266a5d.39b916739de17552.js" strategy="afterInteractive" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
