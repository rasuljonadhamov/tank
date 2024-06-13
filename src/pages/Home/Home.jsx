import Header from "../../components/Navbar";
import Countdown from "./Countdown";
import Features from "./Features";
import Hero from "./Hero";
import TankSections from "./TankSections";

const Home = () => {
  return (
    <div className="bg-blackBg ">
      <Header />
      <Hero />
      <div className="px-6">
        <Countdown />
      </div>
      <Features />
      <TankSections />
    </div>
  );
};

export default Home;
