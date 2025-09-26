import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAiSearching, setIsAiSearching] = useState(false);

  const blogPosts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn advanced patterns and best practices for building large-scale React applications that are maintainable and performant.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Future of Web Development: AI-Enhanced Coding",
      excerpt: "Exploring how AI tools are revolutionizing the development process and what it means for frontend developers.",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["AI", "Development", "Future"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt: "A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox with real-world examples.",
      date: "2024-01-05",
      readTime: "12 min read",
      tags: ["CSS", "Layout", "Responsive"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Performance Optimization Techniques for React Apps",
      excerpt: "Practical strategies to improve your React application's performance, from code splitting to memory optimization.",
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["React", "Performance", "Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleAiSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsAiSearching(true);
    // Simulate AI search processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsAiSearching(false);
    
    // In a real implementation, this would integrate with an AI search API
    console.log("AI searching for:", searchQuery);
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Sharing insights, tutorials, and thoughts about frontend development, 
            emerging technologies, and the future of web development.
          </p>

          {/* AI-Enhanced Search */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles with AI assistance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-16 h-12 rounded-xl border-2 border-border/50 focus:border-primary/50"
                onKeyPress={(e) => e.key === 'Enter' && handleAiSearch()}
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 gap-1"
                onClick={handleAiSearch}
                disabled={isAiSearching}
              >
                <Sparkles className={`h-4 w-4 ${isAiSearching ? 'animate-spin' : ''}`} />
                AI
              </Button>
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground mt-2">
                {isAiSearching ? "AI is analyzing content..." : `Found ${filteredPosts.length} relevant articles`}
              </p>
            )}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="card-elegant overflow-hidden hover-lift animate-fade-in-delay group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary/50 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found for "{searchQuery}". Try different keywords or let AI help you find related content.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;