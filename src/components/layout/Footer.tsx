import { Link } from 'react-router-dom';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { services } from '../../data/services';

export default function Footer() {
  return (
    <footer className="bg-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Instagram QR */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gold leading-tight">Nannalam Senior Care</span>
              <span className="font-tamil text-white/80 text-xs font-medium tracking-wide">நன்னலம் மூத்தோர் சேவை</span>
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Caring for your elders with love and dignity. We treat your parents as our own, providing professional care in Erode and across South India.
            </p>

            {/* Instagram QR Code Section - Enhanced Size */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gold/80">Follow us on Instagram</span>
              <div className="flex items-center gap-5">
                <div className="bg-white p-2 rounded-xl w-40 h-40 shadow-lg shrink-0">
                  <img 
                    src="/images/Logo/Insta-Qr1.jpeg" 
                    alt="Instagram QR Code" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://wa.me/919942037837" 
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full text-xs font-medium transition-all shadow-md"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                  <p className="text-[10px] text-white/40 italic leading-tight max-w-[80px]">
                    Scan to view our daily updates
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
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
                  <Link to={`/services/${service.slug}`} className="text-white/70 hover:text-gold text-sm transition-colors flex flex-col">
                    <span>{service.name}</span>
                    <span className="font-tamil text-[10px] opacity-50">{service.tamil}</span>
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
              {['Erode'].map((city) => (
                <span key={city} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60">
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>2nd nachiappa Street, RR complex, Near varnam Plate decor, Erode-638001</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+91 9942037837</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={18} className="text-gold shrink-0" />
                <span>nannalamseniorcare@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-white/20 leading-relaxed">
          <p>
            Popular Searches: Nannalam Senior Care Erode | Old Age Home in Erode | Home Care Services Tamil Nadu | Hospital Bedside Attendant Erode | 
            Patient Care Services Erode | Home Nurse Erode | Senior Citizen Yoga Classes | Geriatric Care Tamil Nadu | Elderly Assistance Erode | 
            Best Caretaker Services in Erode District | Assisted Living Erode | முதியோர் பராமரிப்பு ஈரோடு | ஈரோடு முதியோர் இல்லம்
          </p>
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