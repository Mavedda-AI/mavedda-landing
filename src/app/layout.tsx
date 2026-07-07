import type {Metadata} from "next";
import {Outfit, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {AppProviders} from "@/providers/AppProviders";
import {LanguageProvider} from "@/providers/LanguageProvider";
import {FloatingControls} from "@/components/layout/FloatingControls";

const inter = Plus_Jakarta_Sans({
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
            <FloatingControls />
          </AppProviders>
        </LanguageProvider>
      </body>
    </html>
  );
}
