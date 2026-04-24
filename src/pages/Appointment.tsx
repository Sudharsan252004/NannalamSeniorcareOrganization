import AppointmentForm from '../components/home/AppointmentForm';
import { motion } from 'motion/react';

export default function Appointment() {
  return (
    <div className="pt-12">
      <section className="bg-saffron text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-tamil text-gold-light text-lg mb-4 block"
          >
            சந்திப்பு முன்பதிவு
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            Book an Appointment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            Take the first step towards professional care. Fill out the form below and we'll handle the rest.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mt-48" />
      </section>

      <AppointmentForm />
      
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-charcoal mb-6">Need Immediate Assistance?</h3>
          <p className="text-gray-500 mb-10">
            If you have an emergency or need a service starting within 24 hours, please call us directly for priority response.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-3 bg-teal text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-teal-dark transition-all"
            >
              Call: +91 98765 43210
            </a>
            <a 
              href="https://wa.me/919876543210" 
              className="flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
