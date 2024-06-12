import Header from "../../components/Navbar";
import Countdown from "./Countdown";
import Features from "./Features";
import Hero from "./Hero";

const Home = () => {
  return (
    <div className="bg-blackBg ">
      <Header />
      <Hero />
      <div className="px-6">
        <Countdown />
      </div>
      <Features />
    </div>
  );
};

export default Home;
