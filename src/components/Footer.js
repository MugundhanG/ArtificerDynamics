import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiArrowUpRight } from 'react-icons/fi';

const footerLinks = {
  Services: [
    { name: 'Conceptual Design', href: '#conceptual-design' },
    { name: 'Reverse Engineering', href: '#reverse-engineering' },
    { name: 'Layout Design', href: '#layout-design' },
    { name: '2D to 3D Conversion', href: '#2d-to-3d-conversion' },
    { name: 'FEA Analysis', href: '#fea-analysis' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-heading font-bold text-white text-lg">
                AD
              </div>
              <div>
                <span className="text-white font-heading font-semibold text-lg block leading-tight">Artificer</span>
                <span className="text-accent text-xs font-medium tracking-widest uppercase">Dynamics</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed mt-4 mb-6">
              Engineering precision for tomorrow's challenges. We deliver innovative design, analysis, and engineering solutions to clients worldwide.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <FiLinkedin size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-colors" aria-label="Twitter">
                <FiTwitter size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.name}>
                    <a href={link.href} onClick={(e) => scrollTo(e, link.href)} className="text-sm hover:text-accent transition-colors flex items-center gap-1 group">
                      {link.name}
                      <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <FiMapPin className="mt-0.5 text-accent flex-shrink-0" size={16} />
                <span>123 Engineering Boulevard,<br />Innovation District, IN 46204</span>
              </li>
              <li>
                <a href="tel:+11234567890" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <FiPhone className="text-accent flex-shrink-0" size={16} />
                  +1 (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@artificerdynamics.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                  <FiMail className="text-accent flex-shrink-0" size={16} />
                  info@artificerdynamics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Artificer Dynamics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
