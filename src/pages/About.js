import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTarget, FiEye, FiAward, FiUsers, FiGlobe, FiShield, FiZap, FiClock } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';




function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">About Artificer Dynamics</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A global engineering consultancy delivering precision-driven design, analysis, and innovation solutions since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 lg:py-32 bg-white">
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
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800 mt-3 mb-6">
                Built on Expertise. Driven by Purpose.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Artificer Dynamics was founded with a clear vision: to make world-class engineering services accessible to companies of all sizes. What began as a small team of passionate engineers has grown into a global consultancy trusted by Fortune 500 companies and innovative startups alike.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Our name, "Artificer," reflects our identity — skilled craftspeople of engineering solutions. We don't just design parts; we engineer possibilities. Every project we undertake is approached with the same commitment to precision, innovation, and client success.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, we serve clients across automotive, aerospace, energy, medical devices, and industrial manufacturing, delivering solutions that drive competitive advantage and accelerate time-to-market.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-gray-50">
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
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Journey"
            title="A Decade of Engineering Excellence"
            description="From a small design studio to a global engineering consultancy."
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-gray-600 leading-relaxed pt-3">{item.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Artificer Dynamics"
            title="What Sets Us Apart"
            description="We combine deep engineering expertise with a client-first approach to deliver exceptional results."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-accent/10 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5">
                    <d.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-800 text-lg mb-3">{d.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Something Great Together"
        description="Join 50+ companies worldwide who trust Artificer Dynamics for their engineering needs."
      />
    </>
  );
}
