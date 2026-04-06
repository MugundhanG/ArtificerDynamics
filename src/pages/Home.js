import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import services from '../data/services';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Global Clients' },
];

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 blueprint-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 border border-accent/10 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 border border-teal/10 rounded-full animate-pulse hidden lg:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm font-medium">Engineering Excellence Since 2010</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Engineering Precision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal">
                Delivering Innovation.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              From conceptual design to advanced simulation, we help visionary companies engineer products that define the future. Precision-driven. Innovation-led.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 group"
              >
                Get a Quote
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-1 bg-primary-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Engineering Services That Drive Results"
            description="We deliver end-to-end engineering solutions — from initial concept to validated design — helping companies innovate faster and build better."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.1}>
                <Link
                  to={`/services#${service.id}`}
                  className="group block bg-gray-50 hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 text-accent">
                    <service.icon size={26} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{service.shortDesc}</p>
                  <div className="mt-6 flex items-center gap-2 text-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <FiArrowRight />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-primary rounded-2xl overflow-hidden grid-bg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 border-2 border-accent/30 rounded-full flex items-center justify-center">
                      <span className="font-heading font-bold text-2xl text-accent">AD</span>
                    </div>
                    <p className="text-gray-400 text-sm">Engineering Precision Since 2010</p>
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
              <p className="text-gray-500 leading-relaxed mb-6">
                Founded in 2010, Artificer Dynamics has grown into a trusted engineering partner for companies worldwide. We combine deep technical expertise with cutting-edge tools to deliver solutions that push the boundaries of what's possible.
              </p>
              <ul className="space-y-3 mb-8">
                {['ISO 9001:2015 Certified', 'Multidisciplinary Engineering Team', 'Global Client Base Across Industries', 'Cutting-edge CAD/CAE Technology Stack'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <FiCheck className="text-teal flex-shrink-0" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <FiArrowRight />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

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

      <CTASection />
    </>
  );
}
