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

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <AboutUs />
      <TopCompanies />
      <MeetOurTeam />
      <PricingSection />
      <ReviewSection />
      {/* <ContactUs /> */}
      {/* <FAQsSection /> */}
      {/* <BookCall /> */} 
      <Feedback />
      <Footer />
    </>
  );
}
