import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiTool, FiTarget } from 'react-icons/fi';
import services from '../data/services';

function ServiceSection({ service, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div id={service.id} className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={`grid lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
        >
          <div className={!isEven ? 'lg:col-start-2' : ''}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <service.icon size={24} />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Service</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800 mb-6">{service.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-lg">{service.description}</p>

            <div className="mb-8">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiCheck className="text-teal" /> Key Benefits
              </h3>
              <ul className="space-y-3">
                {service.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="font-heading font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiTool className="text-teal" /> Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tools.map(tool => (
                  <span key={tool} className="bg-secondary/5 text-secondary px-3 py-1.5 rounded-lg text-xs font-medium border border-secondary/10">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FiTarget className="text-teal" /> Use Cases
              </h3>
              <ul className="space-y-2">
                {service.useCases.map(uc => (
                  <li key={uc} className="flex items-start gap-3 text-gray-600">
                    <span className="text-accent mt-0.5">&#9656;</span>
                    <span className="text-sm">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={!isEven ? 'lg:col-start-1' : ''}>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden grid-bg flex items-center justify-center">
                <div className="text-center p-8">
                  <service.icon size={64} className="text-accent/30 mx-auto mb-4" />
                  <h4 className="text-white/80 font-heading font-semibold text-xl">{service.title}</h4>
                  <p className="text-gray-500 text-sm mt-2">Engineering Excellence</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/10 rounded-2xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServiceDetails() {
  return (
    <section>
      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}
    </section>
  );
}
