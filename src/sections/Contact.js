import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';

const serviceOptions = [
  'Conceptual Design',
  'Reverse Engineering',
  'Layout Design',
  '2D to 3D Conversion',
  'FEA Analysis',
  'Multiple Services',
  'Other',
];

function FadeIn({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (value && !/^[6-9]\d{0,9}$/.test(digits)) {
        setPhoneError('Enter a valid Indian mobile number (starts with 6–9, 10 digits)');
      } else {
        setPhoneError('');
      }
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (form.phone && !/^[6-9]\d{9}$/.test(digits)) {
      setPhoneError('Enter a valid 10-digit Indian mobile number (e.g. 98765 43210)');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get in Touch"
          title="Contact Us"
          description="Ready to start your next engineering project? Get in touch and let's discuss how we can help."
        />

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <FadeIn className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-800 mb-2">Let's Talk Engineering</h3>
                <p className="text-gray-500 leading-relaxed">
                  Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Phone</h4>
                    <a href="tel:+11234567890" className="text-gray-500 hover:text-accent transition-colors">+1 (123) 456-7890</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Email</h4>
                    <a href="mailto:info@artificerdynamics.com" className="text-gray-500 hover:text-accent transition-colors">info@artificerdynamics.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">Location</h4>
                    <p className="text-gray-500">123 Engineering Boulevard,<br />Innovation District, IN 46204</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 grid-bg">
                <h4 className="font-heading font-semibold text-white mb-2">Working Hours</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-white">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiCheck size={32} className="text-teal" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                    className="mt-8 text-accent font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium select-none">+91</span>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            maxLength={10}
                            className={`w-full pl-12 pr-4 py-3 bg-white border rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${phoneError ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-accent focus:ring-accent'}`}
                            placeholder="98765 43210"
                          />
                        </div>
                        {phoneError && (
                          <p className="mt-1.5 text-xs text-red-500">{phoneError}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Required Service *</label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                      <textarea
                        id="message"
                        name="message"                        
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                        placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 group w-full sm:w-auto justify-center"
                    >
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
