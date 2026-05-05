import { Users, Shield, IndianRupee, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import SectionTitle from '../shared/SectionTitle';

const pillars = [
  { 
    icon: Users, 
    title: "Tamil-Speaking Staff", 
    desc: "Every caregiver speaks Tamil fluently — no language barrier for your loved ones." 
  },
  { 
    icon: Shield, 
    title: "ISO Certified", 
    desc: "Certified quality management for consistent, safe, and professional care." 
  },
  { 
    icon: IndianRupee, 
    title: "Affordable Pricing", 
    desc: "Transparent pricing with no hidden fees. Flexible EMI options available." 
  },
  { 
    icon: MapPin, 
    title: "Pan Tamil Nadu Coverage", 
    desc: "Available in Erode, Karur, Namakkal, Salem, Tirupur, Coimbatore & more." 
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-teal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          tamil="ஏன் நன்னலம் சேவையை தேர்ந்தெடுக்கணும்?"
          title="Why 2000+ Tamil Families Trust Nannalam"
          subtitle="We bridge the gap between professional medical care and emotional family support."
          centered
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/20 transition-all group"
            >
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-6 text-teal transition-transform group-hover:rotate-12">
                <pillar.icon size={28} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{pillar.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
