import React from 'react';

export const Gallery: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">See Our Machines in Action</h2>
          <p className="mt-4 text-lg text-slate-600">
            Sleek, modern, and fully stocked. Here is what your breakroom could look like.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Machine 1 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[3/4]">
            <img 
              src="/machine-1.jpg" 
              alt="Bernard's Combo Vending Machine - Fully Stocked" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback if user hasn't added the file yet
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1605218427368-35b88bb8cb59?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <p className="font-bold text-lg">Premium Combo Machine</p>
                <p className="text-sm text-slate-200">Snacks & Drinks</p>
              </div>
            </div>
          </div>

          {/* Machine 2 */}
          <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-white aspect-[3/4]">
            <img 
              src="/machine-2.jpg" 
              alt="Bernard's Vending Machine - Modern Glass Front" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback if user hasn't added the file yet
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1576089255855-8939c086d42a?q=80&w=800&auto=format&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <p className="font-bold text-lg">High Capacity Selection</p>
                <p className="text-sm text-slate-200">Sure-Vend Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};