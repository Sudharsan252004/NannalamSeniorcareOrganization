import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { services } from '../../data/services';
import SectionTitle from '../shared/SectionTitle';
import { useState } from 'react';

interface AppointmentFormData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentFormData>();

  const onSubmit = (data: AppointmentFormData) => {
    console.log('Form Data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="appointment" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionTitle 
              tamil="சந்திப்பு முன்பதிவு"
              title="Book a Care Consultation"
              subtitle="Fill out the form and our care coordinator will call you within 2 hours to discuss your needs."
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-saffron text-white flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Tell us about your needs</h4>
                  <p className="text-sm text-gray-500">Select the service and preferred time for our visit.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Expert Consultation</h4>
                  <p className="text-sm text-gray-500">Our coordinator will call to understand the medical history.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold text-charcoal flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-charcoal mb-1">Care Begins</h4>
                  <p className="text-sm text-gray-500">We match the right caregiver and start the service.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-charcoal mb-2">✓ Request Sent!</h3>
                <p className="text-gray-500">நாங்கள் 2 மணி நேரத்தில் தொடர்பு கொள்வோம்.</p>
                <p className="text-gray-500 text-sm mt-2">We'll call you within 2 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-saffron font-semibold hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name / பெயர்</label>
                    <input 
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                      placeholder="Your Name"
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-1">{errors.name.message}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Phone / எண்</label>
                    <input 
                      {...register("phone", { 
                        required: "Phone is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Valid 10-digit number required" }
                      })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                      placeholder="10-digit Mobile"
                    />
                    {errors.phone && <span className="text-red-500 text-[10px] mt-1">{errors.phone.message}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Service / சேவை</label>
                  <select 
                    {...register("service", { required: "Select a service" })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select Service</option>
                    {services.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                  </select>
                  {errors.service && <span className="text-red-500 text-[10px] mt-1">{errors.service.message}</span>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Date</label>
                    <input 
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Preferred Time</label>
                    <select 
                      {...register("time", { required: "Time is required" })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all bg-white"
                    >
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">City / Area</label>
                  <input 
                    {...register("city", { required: "City is required" })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                    placeholder="e.g. Perundurai, Erode"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Notes (Optional)</label>
                  <textarea 
                    {...register("notes")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all h-24 resize-none"
                    placeholder="Any specific medical conditions..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-saffron text-white py-4 rounded-xl font-bold shadow-lg hover:bg-saffron-dark transition-all transform hover:-translate-y-1"
                >
                  Submit Appointment Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
