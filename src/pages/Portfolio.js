import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import CTASection from '../components/CTASection';

const categories = ['All', 'Conceptual Design', 'Reverse Engineering', 'Layout Design', '2D to 3D Conversion', 'FEA Analysis'];

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

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Work</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6">Portfolio</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore a selection of projects showcasing our engineering capabilities across industries and disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Before/After Showcase */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Transformations</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-800 mt-3 mb-4">Before & After</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how we transform legacy drawings and physical parts into precise digital engineering assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 2D to 3D */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-6 relative">
                  <div className="text-center">
                    <div className="w-full max-w-[120px] mx-auto mb-3">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <rect x="10" y="10" width="100" height="80" fill="none" stroke="#adb5bd" strokeWidth="1" />
                        <line x1="10" y1="50" x2="110" y2="50" stroke="#adb5bd" strokeWidth="0.5" strokeDasharray="4" />
                        <line x1="60" y1="10" x2="60" y2="90" stroke="#adb5bd" strokeWidth="0.5" strokeDasharray="4" />
                        <circle cx="60" cy="50" r="25" fill="none" stroke="#6c757d" strokeWidth="1.5" />
                        <rect x="35" y="30" width="50" height="40" fill="none" stroke="#6c757d" strokeWidth="1" strokeDasharray="3" />
                        <text x="60" y="105" textAnchor="middle" fontSize="8" fill="#adb5bd">2D Drawing</text>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-gray-200 text-gray-500 px-2 py-1 rounded text-xs font-medium">Before</div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary flex items-center justify-center p-6 relative grid-bg">
                  <div className="text-center">
                    <div className="w-full max-w-[120px] mx-auto mb-3">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#e8742b" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#0ea5a0" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>
                        <polygon points="30,80 60,20 90,80" fill="url(#grad1)" stroke="#e8742b" strokeWidth="1.5" />
                        <polygon points="30,80 10,95 60,85" fill="rgba(14,165,160,0.3)" stroke="#0ea5a0" strokeWidth="1" />
                        <polygon points="90,80 110,95 60,85" fill="rgba(232,116,43,0.2)" stroke="#e8742b" strokeWidth="1" />
                        <polygon points="30,80 90,80 60,85" fill="rgba(255,255,255,0.1)" stroke="#fff" strokeWidth="0.5" />
                        <text x="60" y="110" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">3D Model</text>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded text-xs font-medium">After</div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-heading font-semibold text-gray-800 mb-2">2D to 3D Conversion</h3>
                <p className="text-gray-500 text-sm">Legacy engineering drawings transformed into fully parametric 3D CAD models.</p>
              </div>
            </div>

            {/* Reverse Engineering */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gray-100 flex items-center justify-center p-6 relative">
                  <div className="text-center">
                    <div className="w-full max-w-[120px] mx-auto mb-3">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <circle cx="60" cy="55" r="30" fill="#dee2e6" stroke="#adb5bd" strokeWidth="1.5" />
                        <circle cx="60" cy="55" r="15" fill="#f1f3f5" stroke="#adb5bd" strokeWidth="1" />
                        <circle cx="60" cy="55" r="5" fill="#adb5bd" />
                        <rect x="40" y="85" width="40" height="15" rx="3" fill="#dee2e6" stroke="#adb5bd" strokeWidth="1" />
                        <text x="60" y="110" textAnchor="middle" fontSize="8" fill="#adb5bd">Physical Part</text>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-gray-200 text-gray-500 px-2 py-1 rounded text-xs font-medium">Before</div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-6 relative grid-bg">
                  <div className="text-center">
                    <div className="w-full max-w-[120px] mx-auto mb-3">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <ellipse cx="60" cy="55" rx="35" ry="12" fill="none" stroke="#0ea5a0" strokeWidth="1" strokeDasharray="3" />
                        <ellipse cx="60" cy="55" rx="35" ry="30" fill="none" stroke="#e8742b" strokeWidth="1.5" />
                        <line x1="25" y1="55" x2="95" y2="55" stroke="#0ea5a0" strokeWidth="0.5" strokeDasharray="4" />
                        <line x1="60" y1="25" x2="60" y2="85" stroke="#0ea5a0" strokeWidth="0.5" strokeDasharray="4" />
                        <circle cx="60" cy="55" r="10" fill="rgba(232,116,43,0.2)" stroke="#e8742b" strokeWidth="1" />
                        <text x="60" y="110" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.5)">CAD Model</text>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded text-xs font-medium">After</div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-heading font-semibold text-gray-800 mb-2">Reverse Engineering</h3>
                <p className="text-gray-500 text-sm">Physical components scanned and reconstructed into precise digital CAD models.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        description="Let's discuss how Artificer Dynamics can bring your engineering vision to life."
        buttonText="Start a Conversation"
      />
    </>
  );
}
