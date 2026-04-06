import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiEye, FiTarget } from 'react-icons/fi';

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50">
      {/* Company Overview */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-primary rounded-2xl overflow-hidden grid-bg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 border-2 border-accent/30 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-3xl text-accent">AD</span>
                    </div>
                    <p className="text-white/80 font-heading font-semibold text-xl">Engineering Precision</p>
                    <p className="text-gray-500 text-sm mt-1">Delivering Innovation</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 shadow-xl hidden sm:block">
                  <div className="text-3xl font-heading font-bold">15+</div>
                  <div className="text-sm opacity-80">Years of Excellence</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Artificer Dynamics</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800 mt-3 mb-6">
                Where Engineering Meets Innovation
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Artificer Dynamics was founded with a clear vision: to make world-class engineering services accessible to companies of all sizes. What began as a small team of passionate engineers has grown into a global consultancy trusted by Fortune 500 companies and innovative startups alike.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our name, "Artificer," reflects our identity — skilled craftspeople of engineering solutions. We don't just design parts; we engineer possibilities. Today, we serve clients across automotive, aerospace, energy, medical devices, and industrial manufacturing.
              </p>
              <ul className="space-y-3">
                {['ISO 9001:2015 Certified', 'Multidisciplinary Engineering Team', 'Global Client Base Across Industries', 'Cutting-edge CAD/CAE Technology Stack'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <FiCheck className="text-teal flex-shrink-0" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-10 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <FiEye size={26} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-500 leading-relaxed">
                  To be the world's most trusted engineering services partner — empowering companies to design, validate, and manufacture products that shape the future. We envision a world where engineering constraints are opportunities, not limitations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-10 border border-gray-100 h-full">
                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-6">
                  <FiTarget size={26} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-500 leading-relaxed">
                  To deliver engineering solutions of uncompromising quality through deep expertise, advanced technology, and a relentless focus on our clients' success. We are committed to making sophisticated engineering accessible, efficient, and impactful.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
