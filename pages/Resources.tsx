import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { Button } from '../components/Button';
import { BlogPost } from '../types';

// Import all blog post JSON files from the blog-posts folder
const blogPostModules = import.meta.glob('../blog-posts/*.json', { eager: true });

export const Resources: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts from JSON files
    const dynamicPosts: BlogPost[] = Object.values(blogPostModules).map((module: any) => module.default || module);

    // Combine with hardcoded posts, avoiding duplicates by slug/id
    const existingIds = new Set(dynamicPosts.map(p => p.id));
    const filteredHardcoded = BLOG_POSTS.filter(p => !existingIds.has(p.id));

    // Combine and sort by date (newest first)
    const allPosts = [...dynamicPosts, ...filteredHardcoded].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    setPosts(allPosts);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Vending Insights</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Tips, trends, and guides to improving your workplace culture through better breakroom experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{post.excerpt}</p>

                {/* Content preview/render simplified for this demo */}
                <div className="text-sm text-slate-500 bg-slate-50 p-4 rounded-lg mb-4 max-h-40 overflow-hidden" dangerouslySetInnerHTML={{ __html: post.content }} />

                <Button variant="outline" size="sm" className="w-full">Read Full Article</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
