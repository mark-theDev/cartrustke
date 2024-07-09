import HeroPage from "../components/HeroPage";
import Recommendations from "../components/Recommendations";
import LandingPage1 from "../components/LandingPage1";
import LandingPage2 from "../components/LandingPage2";
import LandingPage3 from "../components/LandingPage3";
import LandingPage4 from "../components/LandingPage4";
import LandingPage5 from "../components/LandingPage5";
import CountryPage from "../components/CountryPage";
import JoinUs from "../components/JoinUs";
import Testimonials from "../components/Testimonials";
import CustomerSupportPage from "../components/CustomerSupportPage";
import Blog from "../components/Blog";



export default function Home() {
  return (
    <div className="w-full bg-white">      
      <HeroPage />      
      <LandingPage1 />
      <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <LandingPage5 />      
      <JoinUs />      
      <CustomerSupportPage />      
    </div>
  );
}
