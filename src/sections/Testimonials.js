import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiStar } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';

const testimonials = [
  {
    quote: "Artificer Dynamics transformed our legacy designs into production-ready 3D models with remarkable accuracy. Their attention to detail is unmatched.",
    name: 'Sarah Mitchell',
    role: 'VP Engineering, TechForge Industries',
  },
  {
    quote: "The FEA analysis team identified critical stress points we'd missed entirely. They saved us months of prototyping costs and potential field failures.",
    name: 'Raj Patel',
    role: 'CTO, Nexus Manufacturing',
  },
  {
    quote: "Their conceptual design work helped us secure Series B funding. The engineering visuals and technical depth in their deliverables were exceptional.",
    name: 'Elena Rodriguez',
    role: 'Founder, AeroVenture Labs',
  },
];

const clientLogos = ['Siemens', 'Boeing', 'Tesla', 'GE', 'Honeywell', 'ABB'];

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      {/* Client Logos */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-10">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clientLogos.map(logo => (
              <div key={logo} className="text-gray-300 font-heading font-bold text-2xl hover:text-gray-500 transition-colors cursor-default">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Our commitment to engineering excellence has earned the trust of leading companies worldwide."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <FiStar key={j} size={16} className="text-accent" style={{ fill: '#e8742b' }} />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed mb-6 flex-1">"{t.quote}"</blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-semibold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
