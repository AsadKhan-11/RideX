import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Featured />
      <Contact />
    </div>
  );
}

export default App;
