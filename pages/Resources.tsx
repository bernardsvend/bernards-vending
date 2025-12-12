import React, { useState, useEffect } from 'react';
import { Calendar, X, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { Button } from '../components/Button';
import { BlogPost } from '../types';

// Import all blog post JSON files from the blog-posts folder
const blogPostModules = import.meta.glob('../blog-posts/*.json', { eager: true });

export const Resources: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Load posts from JSON files
    const dynamicPosts: BlogPost[] = Object.values(blogPostModules).map((module: any) => module.default || module);

    // Combine with hardcoded posts, avoiding duplicates by id
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

  // Full article view
  if (selectedPost) {
    return (
      <div className="bg-white min-h-screen">
        <div className="bg-slate-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="flex items-center gap-2 text-slate-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to all articles
            </button>
            <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
              <span className="flex items-center gap-1"><Calendar size={14} /> {selectedPost.date}</span>
              <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">{selectedPost.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold">{selectedPost.title}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          {/* Back button at bottom */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <Button variant="outline" onClick={() => setSelectedPost(null)}>
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Blog listing view
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

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Read Full Article
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
