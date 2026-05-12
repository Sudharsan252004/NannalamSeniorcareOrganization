import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { IconMap } from '../../lib/icons';

interface ServiceCardProps {
  key?: string | number;
  service: {
    slug: string;
    icon: string;
    color: string;
    name: string;
    tamil: string;
    shortDesc: string;
    [key: string]: any;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = IconMap[service.icon];

  const colorClasses: Record<string, string> = {
    saffron: 'bg-saffron text-white shadow-saffron/20',
    teal: 'bg-teal text-white shadow-teal/20',
    gold: 'bg-gold text-charcoal shadow-gold/20',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-saffron/30 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <picture>
          <source srcSet={service.image.replace(/\.(png|jpg|jpeg)$/, '.webp')} type="image/webp" />
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${service.imageAlignment || 'object-center'}`}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon Overlay */}
        <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2 ${colorClasses[service.color]}`}>
          {Icon && <Icon size={24} />}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="font-tamil text-saffron text-xs font-bold uppercase tracking-widest">{service.tamil}</span>
          <h3 className="text-2xl font-bold text-charcoal mt-1 group-hover:text-saffron transition-colors">
            {service.name}
            <span className="block text-sm text-gray-400 font-tamil mt-1">{service.tamil}</span>
          </h3>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
          {service.shortDesc}
        </p>

        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-charcoal font-bold text-sm group/btn"
        >
          <span className="relative">
            Learn More
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover/btn:w-full" />
          </span>
          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover/btn:bg-saffron group-hover/btn:border-saffron group-hover/btn:text-white transition-all">
            <span className="text-lg">→</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

