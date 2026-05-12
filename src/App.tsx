/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import ScrollToTop from './components/shared/ScrollToTop';
import FloatingContactWidget from './components/WA&Call icons/FloatingContactWidget';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Nannalam Senior Care | Elderly Home Care in Erode";
    
    if (path === '/about') title = "About Us | Nannalam Senior Care Erode";
    if (path === '/contact') title = "Contact Us | Nannalam Senior Care Erode";
    if (path === '/appointment') title = "Book Appointment | Nannalam Senior Care Erode";
    
    // Check if the current route matches any defined route, otherwise set 404 title
    const knownRoutes = ['/', '/about', '/appointment', '/contact'];
    const isServiceRoute = path.startsWith('/services/');
    const isKnownRoute = knownRoutes.includes(path) || isServiceRoute;

    if (!isKnownRoute) {
      title = "Page Not Found | Nannalam Senior Care";
    }

    if (path.startsWith('/services/')) {
      const slug = path.split('/').pop()?.replace(/-/g, ' ');
      if (slug) {
        title = `${slug.charAt(0).toUpperCase() + slug.slice(1)} | Nannalam Senior Care`;
      }
    }
    
    document.title = title;
  }, [location]);

  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <main className="min-h-screen">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-10 h-10 border-4 border-saffron border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* Floating widget (global) */}
      <FloatingContactWidget
        phoneNumber="9942037837"
        whatsappMessage="Hello 
Welcome to Nannalam Senior Care!

We provide:
• Home Care Services 
• Hospital Care 
• Tourism Assistance 
• Yoga Classes 
• Happy Classes 
• Hospital Appointments 
• Caretaker Services 

Feel free to contact us for more details. We are happy to assist you!"
      />
    </div>
  );
}