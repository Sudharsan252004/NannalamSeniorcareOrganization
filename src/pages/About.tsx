import { motion } from 'motion/react';
import SectionTitle from '../components/shared/SectionTitle';
import { Award, Shield, Heart, Users, MapPin, CheckCircle2 } from 'lucide-react';

const values = [
  { icon: Heart, title: "Compassion", desc: "We treat every senior with the same love and empathy we give our own parents." },
  { icon: Shield, title: "Dignity", desc: "Respecting the independence and choices of elders is at the core of our care." },
  { icon: Award, title: "Excellence", desc: "ISO certified standards ensure the highest quality of medical and personal care." },
  { icon: Users, title: "Trust", desc: "2000+ families trust us because of our transparent and reliable service." }
];

export default function About() {
  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="bg-teal text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-tamil text-gold text-lg mb-4 block"
          >
            எங்களை பற்றி
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold mb-6"
          >
            About Nannalam Senior Care
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 max-w-2xl mx-auto text-lg"
          >
            A legacy of 15+ years in providing compassionate, professional, and culturally sensitive care for the elderly in Tamil Nadu.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle title="Our Story" subtitle="Founded in Erode with a vision to redefine elder care." />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Nannalam Senior Care started as a small community initiative in Erode, driven by the personal experiences of our founders who saw the challenges families faced in finding reliable care for their aging parents.
                </p>
                <p>
                  Today, we are an ISO 9001:2015 certified organization with a team of over 120 trained professionals. We have expanded our reach across Tamil Nadu, serving families in Coimbatore, Salem, Tirupur, and beyond.
                </p>
                <div className="bg-saffron-light p-6 rounded-2xl border-l-4 border-saffron">
                  <p className="font-tamil text-saffron-dark font-medium italic">
                    "We don't just provide care; we build relationships that last a lifetime."
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" alt="Care Team" className="w-full h-[500px] object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-teal-light text-teal rounded-xl flex items-center justify-center mb-8">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To provide high-quality, professional, and compassionate care services that enable seniors to live with dignity, joy, and independence in their own homes or community settings.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-saffron-light text-saffron rounded-xl flex items-center justify-center mb-8">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">
                To be the most trusted and preferred senior care partner in South India, known for our cultural empathy, medical excellence, and unwavering commitment to the elderly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Core Values" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cream text-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <v.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold text-charcoal mb-3">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle title="Where We Serve" light />
              <p className="text-white/70 mb-8">
                While our headquarters is in Erode, we have established a strong presence across major districts in Tamil Nadu and neighboring states.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Erode', 'Namakkal', 'Karur', 'Salem', 'Tirupur', 'Coimbatore', 'Ooty', 'Dharmapuri'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gold">
                    <CheckCircle2 size={18} />
                    <span className="text-white font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={32} className="text-gold" />
                <h4 className="text-xl font-semibold">Regional Presence</h4>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Our care coordinators are strategically placed to ensure a response time of less than 4 hours in any of these districts. We are committed to expanding our reach to every corner of South India.
              </p>
              <div className="h-48 bg-white/5 rounded-2xl flex items-center justify-center italic text-white/30">
                District Map Visualization
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
