import type {Metadata} from "next";
import {Inter, Outfit} from "next/font/google";
import "./globals.css";
import {AppProviders} from "@/providers/AppProviders";
import {LanguageProvider} from "@/providers/LanguageProvider";

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
        <LanguageProvider>
          <AppProviders>
            {children}
          </AppProviders>
        </LanguageProvider>
      </body>
    </html>
  );
}
