import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Stacks from "./components/Stacks/Stacks";
import Porfolio from "./components/Porfolio/Porfolio";
import Resume from "./components/Resume/Resume";
import Recommendation from "./components/Recommendation/Recommendation";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Stacks />
      <Porfolio />
      <Resume />
      <Recommendation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
