import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const slides = [
  {
    headline: "Caring for Your Elders Like Our Own Family",
    tamil: "நலமான வாழ்வு, அன்பான சேவை",
    sub: "Professional senior care services at your doorstep in Erode & nearby districts.",
    cta1: "Book Appointment",
    cta1Path: "/appointment",
    cta2: "Our Services",
    cta2Path: "/#services",
    bg: "bg-saffron-light",
    image: "https://i.pinimg.com/1200x/c3/b5/8a/c3b58aaa04f1b9465883ee15b1cc9bbd.jpg"
  },
  {
    headline: "Yoga, Joy & Wellness for Every Elder",
    tamil: "உடல் ஆரோக்கியம், மன அமைதி",
    sub: "Daily yoga, happy classes, and group activities keeping your loved ones active.",
    cta1: "View Yoga Classes",
    cta1Path: "/services/yoga-classes",
    cta2: "Happy Classes",
    cta2Path: "/services/happy-classes",
    bg: "bg-teal-light",
    image: "https://i.pinimg.com/1200x/7b/ac/e5/7bace54f4fedc2c2f0da719c9c9bcbe0.jpg"
  },
  {
    headline: "Safe Senior Tourism Across South India",
    tamil: "பயணம் உங்கள் சந்தோஷம்",
    sub: "Temple trails, hill stations, and pilgrimages — safely curated for seniors.",
    cta1: "View Tour Packages",
    cta1Path: "/services/senior-tourism",
    cta2: "Book a Trip",
    cta2Path: "/appointment",
    bg: "bg-gold-light",
    image: "https://i.pinimg.com/736x/ce/7e/54/ce7e54f0eae51776fc27ff12c4c9c76c.jpg"
  }
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 ${slides[current].bg}`}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <span className="font-tamil text-teal text-lg font-medium mb-4 block">
              {slides[current].tamil}
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-charcoal leading-tight mb-6">
              {slides[current].headline}
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
              {slides[current].sub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={slides[current].cta1Path}
                className="bg-saffron text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-saffron-dark transition-all transform hover:-translate-y-1"
              >
                {slides[current].cta1}
              </Link>
              <Link
                to={slides[current].cta2Path}
                className="bg-white text-teal border-2 border-teal px-8 py-4 rounded-full font-semibold hover:bg-teal hover:text-white transition-all transform hover:-translate-y-1"
              >
                {slides[current].cta2}
              </Link>
            </div>
          </motion.div>

          <motion.div
            key={`image-${current}`}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <img
                src={slides[current].image}
                alt={slides[current].headline}
                className="w-full h-[400px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-gold mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-charcoal">2000+ Happy Families</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Trusted in Erode</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-saffron' : 'w-2 bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
}
