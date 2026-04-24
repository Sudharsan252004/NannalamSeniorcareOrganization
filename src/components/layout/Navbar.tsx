import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="font-display text-2xl font-semibold text-saffron leading-tight">Nannalam Senior Care</span>
            <span className="font-tamil text-teal text-[10px] md:text-xs font-medium tracking-wide">நன்னலம் மூத்தோர் சேவை</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-saffron ${location.pathname === link.path ? 'text-saffron border-b-2 border-saffron' : 'text-charcoal'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-saffron ${location.pathname.startsWith('/services') ? 'text-saffron' : 'text-charcoal'}`}
              >
                Services <ChevronDown size={16} />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-3 text-sm text-charcoal hover:bg-saffron-light hover:text-saffron transition-colors"
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="font-tamil text-[10px] opacity-70">{service.tamil}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/appointment"
              className="bg-saffron text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-saffron-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-3 text-base font-medium text-charcoal hover:text-saffron hover:bg-saffron-light rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-2 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Our Services</div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="block px-3 py-2 text-sm text-charcoal hover:text-saffron hover:bg-saffron-light rounded-lg"
                >
                  {service.name}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  to="/appointment"
                  className="block w-full text-center bg-saffron text-white py-3 rounded-xl font-semibold shadow-md"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
