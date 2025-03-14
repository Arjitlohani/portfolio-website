import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Skills />
      <Achievements />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
