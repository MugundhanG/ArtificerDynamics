import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

export default function CTASection({ title, description, buttonText = 'Get a Quote' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollTo = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary" />
      <div className="absolute inset-0 grid-bg" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {title || 'Ready to Engineer Your Next Breakthrough?'}
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          {description || "Partner with Artificer Dynamics and bring engineering precision to your next project. Let's build something extraordinary together."}
        </p>
        <button
          onClick={scrollTo}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 group"
        >
          {buttonText}
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
