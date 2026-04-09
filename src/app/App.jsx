import "./App.css";

import { Hero } from "../components/hero/hero";
import { NavBar } from "../components/navbar/navbar";
import { Biography } from "../components/biography/biography";
import { WorkExperience } from "../components/work-experience/work-experience.jsx";
import { Tools } from "../components/tools/tools";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Biography />
      <WorkExperience />
      <Tools />
    </main>
  );
}

export default App;