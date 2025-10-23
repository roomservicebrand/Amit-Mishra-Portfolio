
import React, { useState, useEffect } from 'react';
import ShareButtons from './ShareButtons';
import BlogSkeleton from './BlogSkeleton';

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  thumbnail: string;
  description: string;
  content: string; // The full content, often containing images
}

// Helper function to extract a text snippet from HTML
const createSnippet = (html: string, length: number = 120): string => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  const text = tempDiv.textContent || tempDiv.innerText || '';
  return text.length > length ? text.substring(0, length).trim() + '...' : text;
};

// Helper function to format date
const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogPostCard: React.FC<{ post: BlogPost; delay: number }> = ({ post, delay }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col" data-aos="fade-up" data-aos-delay={delay}>
      <a href={post.link} target="_blank" rel="noopener noreferrer" className="block">
        <img className="w-full h-48 object-cover" src={post.thumbnail} alt={post.title} />
      </a>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formatDate(post.pubDate)}</p>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 flex-grow">
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {post.title}
            </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{createSnippet(post.description)}</p>
        <div className="mt-auto">
          <a href={post.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
            Read More <i className="fas fa-arrow-right ml-1"></i>
          </a>
          <ShareButtons url={post.link} title={post.title} />
        </div>
      </div>
    </div>
  );
};


const Blog: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    // Medium username from user profile URL
    const MEDIUM_USERNAME = 'roomservicebranding';
    const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const API_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(API_ENDPOINT);
                if (!response.ok) {
                    throw new Error('Network response was not ok. Could not reach RSS service.');
                }
                const data = await response.json();
                if (data.status !== 'ok') {
                    throw new Error(`Failed to fetch Medium feed: ${data.message}`);
                }
                
                const extractImageFromContent = (html: string): string | null => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = html;
                    const image = tempDiv.querySelector('img');
                    return image ? image.src : null;
                };

                const processedPosts = data.items.slice(0, 3).map((item: BlogPost) => {
                    let image = item.thumbnail;
                    
                    // If no thumbnail, try to find one in the content
                    if (!image || image.length === 0) {
                        image = extractImageFromContent(item.content);
                    }
                    
                    // If still no image, use a placeholder
                    if (!image || image.length === 0) {
                        const firstWord = item.title.split(' ')[0] || 'Article';
                        image = `https://placehold.co/600x400/14b8a6/FFFFFF/png?text=${encodeURIComponent(firstWord)}`;
                    }

                    return {
                        ...item,
                        thumbnail: image,
                    };
                });

                setPosts(processedPosts);

            } catch (err) {
                console.error("Error fetching blog posts:", err);
                setError(err instanceof Error ? err.message : 'An unknown error occurred while fetching posts.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [API_ENDPOINT]);

    return (
        <section id="blog" className="py-20 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Latest Articles</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Insights, trends, and thoughts on healthcare innovation and business strategy from my Medium blog.</p>
                    <div className="mt-8">
                         <a 
                            href={`https://medium.com/@${MEDIUM_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:bg-gray-800 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white hover:scale-105"
                         >
                            <i className="fab fa-medium"></i>
                            Follow on Medium
                        </a>
                    </div>
                </div>

                {isLoading && <BlogSkeleton />}
                {error && <p className="text-center text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-500/10 p-4 rounded-lg">{error}</p>}
                {!isLoading && !error && posts.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <BlogPostCard key={post.title} post={post} delay={index * 100} />
                        ))}
                    </div>
                )}
                 {!isLoading && !error && posts.length === 0 && (
                    <p className="text-center text-gray-600 dark:text-gray-400">No articles found on the Medium feed. Please publish an article to see it here.</p>
                )}
            </div>
        </section>
    );
};

export default Blog;