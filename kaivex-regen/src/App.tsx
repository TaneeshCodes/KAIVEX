import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import Journal from "./sections/Journal";
import Explorations from "./sections/Explorations";
import Stats from "./sections/Stats";
import Contact from "./sections/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <main>
          <Navbar />
          <Hero />
          <Works />
          <Journal />
          <Explorations />
          <Stats />
          <Contact />
        </main>
      )}
    </>
  );
}
