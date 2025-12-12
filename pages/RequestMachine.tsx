import React, { useState } from 'react';
import { Button } from '../components/Button';
import { LeadForm } from '../types';

export const RequestMachine: React.FC = () => {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    employees: '',
    locationType: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="py-20 flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎉</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h2>
          <p className="text-slate-600 mb-6">
            Thanks for your interest, {formData.name}. We'll review your details and get back to you within 24 hours to schedule a site visit.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Request a Free Vending Machine</h1>
          <p className="mt-2 text-slate-600">Fill out the details below to see if your location qualifies.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-2 bg-red-600 w-full"></div>
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-1">Business Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Acme Corp"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-slate-700 mb-1">Number of Employees</label>
                <select
                  id="employees"
                  name="employees"
                  required
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select...</option>
                  <option value="1-20">1-20 (May not qualify)</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
              <div>
                <label htmlFor="locationType" className="block text-sm font-medium text-slate-700 mb-1">Location Type</label>
                <select
                  id="locationType"
                  name="locationType"
                  required
                  value={formData.locationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select...</option>
                  <option value="Office">Office / Corporate</option>
                  <option value="Warehouse">Warehouse / Industrial</option>
                  <option value="School">School / University</option>
                  <option value="Retail">Retail / Public Space</option>
                  <option value="Apartment">Apartment Complex</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" fullWidth size="lg">Submit Request</Button>
              <p className="text-xs text-center text-slate-500 mt-4">
                By submitting this form, you agree to be contacted by Bernard's Vending regarding this request. Your information is kept private.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};