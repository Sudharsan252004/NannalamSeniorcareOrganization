import ContactSection from '../components/home/ContactSection';
import { motion } from 'motion/react';
import { MessageSquare, Phone, MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-12">
      <section className="bg-gold text-charcoal py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-tamil text-teal text-lg mb-4 block"
          >
            தொடர்பு கொள்ள
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-charcoal/70 max-w-2xl mx-auto text-lg"
          >
            We're here to listen and support. Reach out to us for any queries about our senior care services.
          </motion.p>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mb-48" />
      </section>

      <ContactSection />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-saffron-light text-saffron rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Support</h3>
              <p className="text-gray-500 text-sm mb-4">Available Mon-Sat, 9am-6pm</p>
              <a href="tel:+919876543210" className="text-saffron font-bold text-lg">+91 98765 43210</a>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-light text-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-4">We'll respond within 24 hours</p>
              <a href="mailto:care@nannalam.in" className="text-teal font-bold text-lg">care@nannalam.in</a>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="w-16 h-16 bg-gold-light text-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-500 text-sm mb-4">Quick chat for inquiries</p>
              <a href="https://wa.me/919876543210" className="text-gold-dark font-bold text-lg">Chat with Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
