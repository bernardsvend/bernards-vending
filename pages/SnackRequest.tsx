import React, { useState } from 'react';
import { Button } from '../components/Button';

export const SnackRequest: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl text-blue-600">👍</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Request Added!</h2>
          <p className="text-slate-600 mb-6">
            We've added this to your route driver's notes. We'll do our best to stock it on the next refill visit!
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">Make Another Request</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Client Product Request</h1>
        <p className="mt-2 text-slate-600">Missing your favorite snack? Let us know and we'll stock it.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Company / Location Name</label>
            <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="e.g. TechFlow Breakroom 2" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Product Name & Brand</label>
            <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="e.g. Doritos Cool Ranch" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes (Optional)</label>
            <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 h-24" placeholder="Specific flavor? Low sugar version?" />
          </div>

          <div className="pt-2">
            <Button type="submit" fullWidth>Send Request</Button>
          </div>
        </form>
      </div>
    </div>
  );
};