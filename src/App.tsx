import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LevelUpSection from "./components/LevelUpSection";
import MobileAppWorkoutSection from "./components/MobileAppWorkoutSection";
import OurProfessionalTrainers from "./components/TrainersSection";
import ServicesSection from "./components/ServicesSection";
import ChooseUsSection from "./components/ChooseUsSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUsSection />
      <MobileAppWorkoutSection />
      <ServicesSection />
      <OurProfessionalTrainers />
      <LevelUpSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
