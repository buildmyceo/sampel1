import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 dark:text-white mb-2">
                    Latest Insights
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Market trends, design inspiration, and expert advice.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-gold-500 font-medium hover:text-gold-600 transition-colors">
                View All Articles <ArrowRight size={18} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="rounded-lg overflow-hidden mb-4 relative h-64">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-navy-900/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white font-serif mb-3 group-hover:text-gold-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-gold-500 text-sm font-medium hover:gap-2 transition-all">
                Read More <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;