/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import Home from './pages/Home';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import ScrollToTop from './components/shared/ScrollToTop';
import FloatingContactWidget from './components/WA&Call icons/FloatingContactWidget';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
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
    </BrowserRouter>
  );
}