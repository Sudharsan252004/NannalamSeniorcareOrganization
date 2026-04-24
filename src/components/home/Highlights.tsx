import { Award, Clock, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  { 
    icon: Award, 
    title: "Qualified Caregivers", 
    desc: "Trained Tamil-speaking certified staff with medical expertise.", 
    color: "saffron" 
  },
  { 
    icon: Clock, 
    title: "24/7 Emergency Support", 
    desc: "Round-the-clock help anytime you need it in Erode district.", 
    color: "teal" 
  },
  { 
    icon: Heart, 
    title: "Home Comfort Care", 
    desc: "Personalized care provided in the familiar surroundings of home.", 
    color: "gold" 
  }
];

export default function Highlights() {
  return (
    <section className="py-12 bg-white relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all flex items-start gap-6 group"
          >
            <div className={`p-4 rounded-xl shrink-0 transition-transform group-hover:scale-110 ${
              item.color === 'saffron' ? 'bg-saffron-light text-saffron' :
              item.color === 'teal' ? 'bg-teal-light text-teal' :
              'bg-gold-light text-gold-dark'
            }`}>
              <item.icon size={32} />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
