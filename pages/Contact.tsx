import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600">Have a question that isn't about requesting a machine? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Card */}
          <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Phone className="text-red-400" /></div>
                  <div>
                    <p className="font-semibold text-lg">Phone</p>
                    <p className="text-slate-300">630-474-5101</p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri 8am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><Mail className="text-red-400" /></div>
                  <div>
                    <p className="font-semibold text-lg">Email</p>
                    <p className="text-slate-300">bernardsvending@gmail.com</p>
                    <p className="text-xs text-slate-400 mt-1">We reply within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg"><MapPin className="text-red-400" /></div>
                  <div>
                    <p className="font-semibold text-lg">Mailing Address</p>
                    <p className="text-slate-300">P.O. Box 7804<br/>Westchester, IL, United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 h-32" placeholder="How can we help?" />
              </div>
              <Button fullWidth size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};