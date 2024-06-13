import Contact from "./components/Contact";
import Countdown from "./components/Countdown";
import Features from "./components/Features";
import Hero from "./components/Hero";
import TankSections from "./components/TankSections";

const Home = () => {
  return (
    <div className="bg-blackBg ">
      <Hero />
      <div className="px-6">
        <Countdown />
      </div>
      <Features />
      <TankSections />
      <Contact />
    </div>
  );
};

export default Home;
