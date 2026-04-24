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
    saffron: 'bg-saffron-light text-saffron border-saffron/10',
    teal: 'bg-teal-light text-teal border-teal/10',
    gold: 'bg-gold-light text-gold-dark border-gold/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-saffron transition-all duration-300 flex flex-col h-full"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${colorClasses[service.color]}`}>
        {Icon && <Icon size={28} />}
      </div>
      
      <div className="mb-2">
        <span className="font-tamil text-teal text-xs font-medium uppercase tracking-wider">{service.tamil}</span>
        <h3 className="text-xl font-semibold text-charcoal mt-1">{service.name}</h3>
      </div>
      
      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
        {service.shortDesc}
      </p>
      
      <Link 
        to={`/services/${service.slug}`}
        className="inline-flex items-center text-saffron font-semibold text-sm hover:gap-2 transition-all"
      >
        Learn More <span className="ml-1">→</span>
      </Link>
    </motion.div>
  );
}
