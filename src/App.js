import "./App.css";

import Navigation from "./components/Navigation";
import Heading from "./components/Heading";

import Partners from "./components/Partners";
import Features from "./components/Features";

import Mobile from "./components/Mobile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Heading />
      <Features />
      <Partners />
      <Mobile />
      <Footer />
    </div>
  );
}

export default App;
