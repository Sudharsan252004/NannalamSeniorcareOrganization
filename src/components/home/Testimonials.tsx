import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../shared/SectionTitle';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          tamil="வாடிக்கையாளர் கருத்துக்கள்"
          title="What Families Say About Us"
          subtitle="Real stories from families who trusted us with their most precious members."
          centered
        />

        <div className="flex overflow-x-auto pb-12 gap-8 no-scrollbar snap-x snap-mandatory">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all snap-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                  item.color === 'saffron' ? 'bg-saffron' :
                  item.color === 'teal' ? 'bg-teal' :
                  'bg-gold'
                }`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal">{item.name}</h4>
                  <p className="text-xs text-saffron font-medium">{item.service}</p>
                </div>
              </div>

              <div className="flex text-gold mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{item.review}"
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-gray-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
