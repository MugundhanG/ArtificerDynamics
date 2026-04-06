import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/Hero';
import StatsSection from './sections/Stats';
import ServicesOverview from './sections/ServicesOverview';
import AboutSection from './sections/About';
import ServiceDetails from './sections/ServiceDetails';
import PortfolioSection from './sections/Portfolio';
import TestimonialsSection from './sections/Testimonials';
import ContactSection from './sections/Contact';
import CTASection from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <AboutSection />
        <ServiceDetails />
        <PortfolioSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
