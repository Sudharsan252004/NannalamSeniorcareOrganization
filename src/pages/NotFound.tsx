import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-display font-bold text-saffron/20 leading-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-2xl font-display font-semibold text-charcoal">Oops! Page Not Found</p>
        </div>
      </div>
      
      <div className="max-w-md space-y-6">
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-teal text-white rounded-full font-medium hover:bg-teal-dark transition-all duration-300 shadow-lg hover:shadow-teal/20"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 bg-saffron text-white rounded-full font-medium hover:bg-saffron-dark transition-all duration-300 shadow-lg hover:shadow-saffron/20"
          >
            Contact Support
          </Link>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-8 opacity-40">
         <div className="h-24 w-24 bg-gold-light rounded-full blur-2xl animate-pulse"></div>
         <div className="h-32 w-32 bg-saffron-light rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </div>
  );
}
