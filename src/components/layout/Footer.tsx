import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { services } from '../../data/services';

export default function Footer() {
  return (
    <footer className="bg-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gold leading-tight">Nannalam Senior Care</span>
              <span className="font-tamil text-white/80 text-xs font-medium tracking-wide">நன்னலம் மூத்தோர் சேவை</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Caring for your elders with love and dignity. We treat your parents as our own, providing professional care in Erode and across South India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-teal transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-teal transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-teal transition-all">
                <Youtube size={20} />
              </a>
              <a href="https://wa.me/919876543210" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
            <div className="pt-4">
              <div className="inline-block px-3 py-1 border border-white/20 rounded text-[10px] font-semibold uppercase tracking-widest">
                ISO 9001:2015 Certified
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-gold text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-gold text-sm transition-colors">About Us</Link></li>
              <li><Link to="/appointment" className="text-white/70 hover:text-gold text-sm transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold text-sm transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-white/70 hover:text-gold text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-gold text-sm transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">Locations Served</h4>
            <div className="flex flex-wrap gap-2">
              {['Erode', 'Namakkal', 'Karur', 'Salem', 'Tirupur', 'Coimbatore', 'Ooty', 'Dharmapuri'].map((city) => (
                <span key={city} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>349/444, EVN Road, Surampatti, Erode - 638001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="text-gold shrink-0" />
                <span>care@nannalam.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>Copyright © 2026 Nannalam Senior Care, Erode. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> in Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
