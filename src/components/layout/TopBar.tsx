import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-teal text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <MapPin size={14} />
          <span>Erode, Tamil Nadu | Tamil Nadu · Kerala · Karnataka</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone size={14} />
          <span>+91 98765 43210</span>
        </a>
        <a href="mailto:care@nannalam.in" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Mail size={14} />
          <span>care@nannalam.in</span>
        </a>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>Mon–Sat: 9 AM – 6 PM</span>
        </div>
      </div>
    </div>
  );
}
