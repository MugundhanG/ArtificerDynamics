import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionHeading({ label, title, description, light = false, center = true }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-16`}
    >
      {label && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? 'text-gray-400' : 'text-gray-500'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
