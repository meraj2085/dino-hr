import ContactUs from "@/components/ContactUs";
import MeetOurTeam from "@/components/MeetOurTeam";
import PricingSection from "@/components/PricingSection";
import TopCompanies from "@/components/TopCompanies";
import VideoSection from "@/components/VideoSection";
import ReviewSection from "@/components/Review/review";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero/Hero";
import Overview from "@/components/Overview";
import OurTeam from "@/components/OurTeam";
import ChooseSection from "@/components/Choose";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <AboutUs />
      <TopCompanies />
      {/* <MeetOurTeam /> */}
      <OurTeam />
      <Overview />
      <PricingSection />
      <ReviewSection />
      <ChooseSection />
      {/* <ContactUs /> */}
      {/* <FAQsSection /> */}
      {/* <BookCall /> */} 
      <Feedback />
      <Footer />
    </>
  );
}
