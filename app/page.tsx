import Hero from '../components/Hero';
import Services from '../components/Services';
import Products from '../components/Products';
import WebsiteShowcase from '../components/WebsiteShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WebsiteShowcase />
      <Services />
      <Products />
      <WhyChooseUs />
      <Process />
      <Contact />
    </>
  );
}
