import React, { useState } from 'react';
import { ShoppingBag, Star, ExternalLink, Filter } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';

export const Products: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Snack', 'Drink', 'Office', 'Healthy'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const handleAffiliateClick = (productId: string, productName: string) => {
    try {
      const STORAGE_KEY = 'bernards_affiliate_clicks';
      const existingLogs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      
      const newLog = {
        productId,
        productName,
        timestamp: new Date().toISOString(),
      };

      const updatedLogs = [...existingLogs, newLog];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLogs));
      
      // Optional: Log to console for development verification
      console.log('Affiliate click tracked:', newLog);
    } catch (error) {
      console.error('Error tracking affiliate click:', error);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Recommended Products</h1>
          <p className="text-slate-600">
            Curated bulk supplies for your office breakroom. We've hand-picked the best deals from top retailers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 items-center">
          <Filter size={20} className="text-slate-400 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="relative pt-[100%] bg-white group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-slate-900 shadow-sm border border-slate-100">
                  {product.priceRange}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">{product.category}</span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs text-slate-500 font-medium">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-slate-900 mb-2 line-clamp-2 flex-grow">{product.name}</h3>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <a 
                    href={product.affiliateLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => handleAffiliateClick(product.id, product.name)}
                  >
                    <Button variant="primary" fullWidth size="sm" className="flex items-center justify-center gap-2">
                      Check Price <ExternalLink size={14} />
                    </Button>
                  </a>
                  <p className="text-[10px] text-center text-slate-400 mt-2">Ad • Amazon Affiliate</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};