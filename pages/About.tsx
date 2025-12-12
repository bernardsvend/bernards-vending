import React from 'react';
import { Users, Heart, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">More Than Just Snacks</h1>
          <p className="text-xl text-slate-600">
            We believe a well-stocked breakroom is the heart of a happy workplace. Bernards Vending was founded to remove the friction of hunger from the workday.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Employee Focused</h3>
            <p className="text-slate-600">We curate product mixes based on what your specific team actually wants, not just what's cheapest.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Service First</h3>
            <p className="text-slate-600">Our business isn't vending machines; it's service. We are obsessive about cleanliness and uptime.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-red-600">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern & Fresh</h3>
            <p className="text-slate-600">We retire old clunkers. We only install modern, LED-lit machines with sure-vend technology.</p>
          </div>
        </div>
      </div>
    </div>
  );
};