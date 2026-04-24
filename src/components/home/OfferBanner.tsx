import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function OfferBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-teal rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-white text-2xl md:text-4xl font-display font-semibold mb-4">
            20% Off on Your First Booking!
          </h3>
          <p className="text-white/75 text-lg max-w-xl mb-8">
            Limited time offer — valid for all services in Erode district. Experience the Nannalam difference today.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/appointment"
              className="bg-gold text-charcoal px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition-all shadow-lg"
            >
              Book Now →
            </Link>
            <div className="text-white/90 font-mono text-sm bg-white/10 px-4 py-2 rounded-lg border border-white/20">
              Use code: <span className="text-gold font-bold">NANNALAM20</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden lg:block">
          <div className="w-48 h-48 rounded-full bg-gold flex flex-col items-center justify-center text-charcoal shadow-2xl transform rotate-12">
            <span className="text-4xl font-bold">20%</span>
            <span className="text-xl font-bold uppercase tracking-widest">OFF</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
