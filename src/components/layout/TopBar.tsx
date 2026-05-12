import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-teal text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a 
          href="https://www.google.com/maps/search/?api=1&query=2nd+nachiappa+Street,+RR+complex,+Near+varnam+Plate+decor+Erode-638001" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-gold transition-colors"
        >
          <MapPin size={14} />
          <span>2nd nachiappa Street,RR complex, Near varnam Plate decor Erode-638001</span>
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a href="tel:+919942037837" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Phone size={14} />
          <span>+91 9942037837</span>
        </a>
        <a href="mailto:nannalamseniorcare@gmail.com" className="flex items-center gap-1 hover:text-gold transition-colors">
          <Mail size={14} />
          <span>nannalamseniorcare@gmail.com</span>
        </a>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>Mon–Sat: 9 AM – 6 PM</span>
        </div>
      </div>
    </div>
  );
}
