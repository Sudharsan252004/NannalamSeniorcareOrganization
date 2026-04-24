import { services } from '../../data/services';
import ServiceCard from '../shared/ServiceCard';
import SectionTitle from '../shared/SectionTitle';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          tamil="எங்கள் சேவைகள்"
          title="Our Prime Services"
          subtitle="Comprehensive care for every senior need in Erode. From medical support to joyful activities."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
          
          {/* Special Caretaker Card Badge */}
          <div className="lg:col-span-3 mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              12/7 Available
            </div>
            <div className="flex items-center gap-2 bg-saffron-light text-saffron px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-saffron rounded-full animate-pulse" />
              24/7 Available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
