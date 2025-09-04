import Hero from "./Hero/Hero";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import Benefits from "./Benefits/Benefits";
import Testimonials from "./testimonials/Testimonials";
import CTA from "./CTA/CTA";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";
import Partners from "./Partners/Partners";
import Stats from "./Stats/Stats";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <FeaturesSection></FeaturesSection>
      <Benefits></Benefits>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Pricing></Pricing>
      <Contact></Contact>
      <Partners></Partners>
      <Stats></Stats>
    </div>
  );
};

export default Home;
