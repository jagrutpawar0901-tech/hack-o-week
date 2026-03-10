import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Clock, User, Heart, MessageCircle } from "lucide-react";

const stories = [
  {
    id: 1,
    title: "Chasing Northern Lights in Iceland",
    author: "Sarah Mitchell",
    date: "March 5, 2026",
    readTime: "8 min read",
    excerpt: "After three nights of cloudy skies, we finally witnessed the aurora borealis dancing across the Icelandic sky. Here's how we made it happen...",
    image: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzcyOTkyNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 324,
    comments: 42,
    category: "Adventure"
  },
  {
    id: 2,
    title: "Finding Peace in Bali's Rice Terraces",
    author: "James Chen",
    date: "February 28, 2026",
    readTime: "6 min read",
    excerpt: "The emerald green rice paddies of Tegalalang taught me more about mindfulness than any meditation retreat ever could...",
    image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc3MzA5NTY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 567,
    comments: 89,
    category: "Culture"
  },
  {
    id: 3,
    title: "A Week in Tokyo: Where Tradition Meets Future",
    author: "Emma Rodriguez",
    date: "February 20, 2026",
    readTime: "12 min read",
    excerpt: "From ancient temples at sunrise to neon-lit streets at midnight, Tokyo is a city that never stops surprising you...",
    image: "https://images.unsplash.com/photo-1626946548234-a65fd193db41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMG5pZ2h0fGVufDF8fHx8MTc3MzA3NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 892,
    comments: 156,
    category: "City Guide"
  },
  {
    id: 4,
    title: "Safari Dreams: My First African Adventure",
    author: "Michael Okonkwo",
    date: "February 15, 2026",
    readTime: "10 min read",
    excerpt: "Nothing prepares you for the moment you see a pride of lions in the wild. My journey through Tanzania's Serengeti...",
    image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NzMwODc2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 1205,
    comments: 203,
    category: "Wildlife"
  },
  {
    id: 5,
    title: "Sunset Magic in Santorini",
    author: "Sofia Papadopoulos",
    date: "February 8, 2026",
    readTime: "5 min read",
    excerpt: "Why the sunsets in Oia live up to the hype, and where to watch them without the crowds...",
    image: "https://images.unsplash.com/photo-1656677476420-7159cac2366a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzczMDIzODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 743,
    comments: 98,
    category: "Photography"
  },
  {
    id: 6,
    title: "Hiking the Alps: A Solo Journey",
    author: "Lucas Weber",
    date: "January 30, 2026",
    readTime: "15 min read",
    excerpt: "Three weeks, four countries, and countless mountain peaks. What I learned about myself while hiking alone through the Swiss Alps...",
    image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzMwMTc3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    likes: 456,
    comments: 67,
    category: "Solo Travel"
  }
];

const categories = ["All", "Adventure", "Culture", "City Guide", "Wildlife", "Photography", "Solo Travel"];

export function Stories() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Travel Stories
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real adventures, honest experiences, and inspiring tales from travelers around the globe
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 font-medium hover:from-pink-200 hover:to-purple-200 transition-all hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-96 lg:h-auto">
            <ImageWithFallback
              src={stories[3].image}
              alt={stories[3].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Featured Story
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-sm text-purple-600 font-semibold mb-2">{stories[3].category}</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {stories[3].title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {stories[3].excerpt}
            </p>
            <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User size={16} />
                {stories[3].author}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {stories[3].readTime}
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all self-start hover:scale-105">
              Read Full Story
            </button>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Latest Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.filter((_, index) => index !== 3).map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-purple-600">
                  {story.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {story.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {story.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-pink-500 transition-colors">
                    <Heart size={16} />
                    {story.likes}
                  </button>
                  <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle size={16} />
                    {story.comments}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
