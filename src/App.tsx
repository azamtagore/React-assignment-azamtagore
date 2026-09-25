
import { Suspense, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/TechList";
import YourStack from "./components/YourStack";
import type { TTech } from "./types";

const fetchData = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

const techPromise = fetchData();

function App() {
  // Store the technologies added to the stack
  const [selectedTechs, setSelectedTechs] = useState<TTech[]>([]);

  // Add technology to stack
  const handleAddToStack = (tech: TTech) => {
    setSelectedTechs((prev) => {
      // Prevent duplicate technologies
      if (prev.some((item) => item.id === tech.id)) {
        return prev;
      }
      return [...prev, tech];
    });
  };
  // Remove one technology from stack
  const handleRemove = (id: string) => {
    setSelectedTechs((prev) =>
      prev.filter((tech) => tech.id == id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <section className="container mx-auto my-10">
          <div className="grid grid-cols-4 gap-5">

            {/* Technology Section */}
            <Suspense fallback={<div>Loading...</div>}>
              <Technologies
                techPromise={techPromise}
                onAddToStack={handleAddToStack}
              />

              {/* Reading List / Your Stack */}
              <YourStack
                selectedTechs={selectedTechs}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </Suspense>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;