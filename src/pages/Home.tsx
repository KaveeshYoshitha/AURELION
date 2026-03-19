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
      <About />
      <Collection />
      <Founder />
      <Showcase />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
