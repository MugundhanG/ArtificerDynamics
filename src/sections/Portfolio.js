import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from 'react-icons/fi';
import projects from '../data/projects';
import SectionHeading from '../components/SectionHeading';

const categories = ['All', 'Conceptual Design', 'Reverse Engineering', 'Layout Design', '2D to 3D Conversion'];

const typeColors = {
  analysis: 'from-blue-600 to-indigo-900',
  'before-after': 'from-teal to-secondary',
  layout: 'from-emerald-600 to-teal',
  concept: 'from-accent to-red-900',
};

const typeLabels = {
  analysis: 'Simulation & Analysis',
  'before-after': 'Before & After',
  layout: 'Layout Optimization',
  concept: 'Concept Visualization',
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      layout
    >
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-accent/10 transition-all duration-300 h-full flex flex-col">
        <div className={`relative aspect-[16/10] bg-gradient-to-br ${typeColors[project.type] || typeColors.concept} overflow-hidden`}>
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-white/80 text-xs font-medium mb-3">
                {typeLabels[project.type]}
              </div>
              <h4 className="text-white font-heading font-semibold text-lg">{project.title}</h4>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary">
                <FiExternalLink size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-accent/10 text-accent px-2.5 py-1 rounded-md text-xs font-medium">{project.category}</span>
            <span className="text-gray-400 text-xs">{project.client}</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.results.map(r => (
              <span key={r} className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-100">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="Portfolio"
          description="Explore a selection of projects showcasing our engineering capabilities across industries and disciplines."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-white text-gray-500 hover:text-gray-800 border border-gray-200 hover:border-accent/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
