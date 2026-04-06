import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import services from '../data/services';
import SectionHeading from '../components/SectionHeading';

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ServicesOverview() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Engineering Services That Drive Results"
          description="We deliver end-to-end engineering solutions — from initial concept to validated design — helping companies innovate faster and build better."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.1}>
              <button
                onClick={() => scrollTo(service.id)}
                className="group block bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full text-left w-full"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent">
                  <service.icon size={26} />
                </div>
                <h3 className="font-heading font-semibold text-xl text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.shortDesc}</p>
                <div className="mt-6 flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <FiArrowRight />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
