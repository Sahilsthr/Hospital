
import BookAppointment from "../components/BookAppointment";
import Doctors from "../components/Doctors";
import Features from "../components/Features";
import HealthResources from "../components/HealthResources";
import Hero from "../components/Hero";
import LogoSection from "../components/LogoSection";

import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
    
      <Hero />
      <Features />
      <WhyChoose />
      <BookAppointment />
      <Doctors />
      <Testimonials />
      <div className="max-w-7xl mx-auto px-6">
  <div className="h-px bg-gray-200"></div>
</div>
      <LogoSection />
      <HealthResources />

    </>
  );
}