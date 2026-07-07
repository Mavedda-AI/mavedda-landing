import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Interviews from "./components/Interviews";
import Awards from "./components/Awards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Portfolio />
        <Technologies />
        <Interviews />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
