import HeroBanner from '../components/home/HeroBanner';
import Highlights from '../components/home/Highlights';
import ServicesGrid from '../components/home/ServicesGrid';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import OfferBanner from '../components/home/OfferBanner';
import AppointmentForm from '../components/home/AppointmentForm';
import ContactSection from '../components/home/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Highlights />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <OfferBanner />
      <AppointmentForm />
      <ContactSection />
    </div>
  );
}
