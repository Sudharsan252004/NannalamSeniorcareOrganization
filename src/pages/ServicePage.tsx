import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { services } from '../data/services';
import { IconMap } from '../lib/icons';
import { CheckCircle2, ArrowRight, Calendar } from 'lucide-react';
import SectionTitle from '../components/shared/SectionTitle';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <Navigate to="/" />;

  const Icon = IconMap[service.icon];

  return (
    <div className="pt-12">
      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-tamil text-gold text-lg mb-4 block">{service.tamil}</span>
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
              {service.name}
            </h1>
            <p className="text-white/80 text-xl max-w-xl italic">
              "{service.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-400 font-medium uppercase tracking-wider flex items-center gap-2">
          <Link to="/" className="hover:text-saffron">Home</Link>
          <ArrowRight size={12} />
          <span className="text-gray-600">Services</span>
          <ArrowRight size={12} />
          <span className="text-saffron">{service.name} <span className="font-tamil text-[10px]">/ {service.tamil}</span></span>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <SectionTitle title="Service Overview" />
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {service.fullDesc}
                </p>
              </div>

              <div className="bg-cream rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-charcoal mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal text-white flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-gold bg-gold-light/30 p-8 rounded-r-3xl">
                <h4 className="font-semibold text-gold-dark mb-2 uppercase tracking-widest text-xs">Who is this for?</h4>
                <p className="text-gray-700 font-medium">{service.forWhom}</p>
              </div>
            </div>

            {/* Sidebar / Quick Action */}
            <div className="space-y-8">
              <div className="bg-teal rounded-3xl p-8 text-white shadow-xl sticky top-32">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  {Icon && <Icon size={32} className="text-gold" />}
                </div>
                <h3 className="text-2xl font-semibold mb-4">Book this Service</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed">
                  Ready to provide the best care for your loved ones? Schedule a free consultation today.
                </p>
                <Link
                  to="/appointment"
                  className="block w-full bg-gold text-charcoal text-center py-4 rounded-xl font-bold hover:bg-gold-dark transition-all shadow-lg"
                >
                  Book Appointment
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={18} className="text-gold" />
                    <span>Next available: Tomorrow</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span>ISO Certified Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Related Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Other Services You Might Need" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.filter(s => s.slug !== slug).slice(0, 3).map((s, i) => {
              const RelatedIcon = IconMap[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-cream/50 rounded-2xl p-6 border border-transparent hover:border-saffron transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-saffron shadow-sm group-hover:scale-110 transition-transform">
                      {RelatedIcon && <RelatedIcon size={24} />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal group-hover:text-saffron transition-colors leading-tight">
                        {s.name}
                        <span className="block text-[10px] font-tamil text-gray-400 mt-0.5">{s.tamil}</span>
                      </h4>
                      <p className="text-xs text-gray-400 font-tamil">{s.tamil}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
