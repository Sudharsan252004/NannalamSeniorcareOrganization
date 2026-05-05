import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle 
              tamil="எங்களை பற்றி"
              title="Best Senior Care Organization in Erode"
            />
            <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
              <p>
Nannalam Senior Care is a new initiative launched this year with a heartfelt mission — to provide dependable, compassionate, and respectful care for seniors in Erode. We understand that caring for elderly loved ones is not just a responsibility, but an emotional commitment.              </p>
              <p className="font-tamil text-teal font-medium text-lg">
“உங்கள் பெற்றோரை எங்கள் பெற்றோராக கருதுகிறோம்”              </p>
              <p>
                At Nannalam, we truly believe in treating every senior with the same love, patience, and dignity we would offer our own parents. Our services are designed to support both seniors and their families, ensuring comfort, safety, and peace of mind at every step.
              </p>
            </div>
            <Link 
              to="/about"
              className="inline-flex items-center bg-teal text-white px-8 py-3.5 rounded-full font-semibold hover:bg-teal-dark transition-all shadow-md"
            >
              About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.pinimg.com/1200x/a2/50/d1/a250d17f65e882251e3d54e2c0c0ae95.jpg" 
                alt="Happy Seniors" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="text-charcoal font-display text-xl font-semibold mb-2 italic">
                "Dignity in every step of aging."
              </p>
              <p className="text-charcoal/70 text-sm">— Nannalam Philosophy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

