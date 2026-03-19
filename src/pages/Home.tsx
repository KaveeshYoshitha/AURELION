import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Collection from "../sections/Collection";
import CTA from "../sections/CTA";
import Founder from "../sections/Founder";
import Hero from "../sections/Hero";
import Showcase from "../sections/Showcase";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Collection />
      </div>
      <div className="relative z-30">
        <Founder />
        <Showcase />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
