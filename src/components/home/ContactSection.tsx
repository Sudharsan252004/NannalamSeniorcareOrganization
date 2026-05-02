import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import SectionTitle from '../shared/SectionTitle';

const contactInfo = [
  { icon: MapPin, title: "Erode Office", content: "2nd nachiappa Street,RR complex,Near varnam Plate decor Erode-638001" },
  { icon: Phone, title: "Phone / WhatsApp", content: "+91 9942037837" },
  { icon: Mail, title: "Email", content: "nannalamseniorcare@gmail.com" },
  { icon: Clock, title: "Office Hours", content: "Mon–Sat: 9 AM – 6 PM" }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              tamil="தொடர்பு கொள்ள"
              title="Get in Touch with Us"
              subtitle="Have questions? We're here to help. Visit our office or call us anytime."
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-saffron-light text-saffron flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[450px] border-8 border-cream"
          >
            {/* Placeholder for Google Map */}
            <div className="w-full h-full bg-gray-100 relative flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-saffron mx-auto mb-4" />
                <p className="text-charcoal font-semibold">Erode Office Location</p>
                <p className="text-xs text-gray-400 mt-2">Interactive map would load here</p>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.4116548177!2d77.6521568461914!3d11.331046162353516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0x1e197673068d22ec!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712621829000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-70"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
