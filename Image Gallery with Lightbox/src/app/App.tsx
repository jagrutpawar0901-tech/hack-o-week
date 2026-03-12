import { useState, useMemo } from "react";
import { Logo } from "./components/Logo";
import { HeroSection } from "./components/HeroSection";
import { FilterBar } from "./components/FilterBar";
import { GalleryGrid } from "./components/GalleryGrid";
import { Lightbox } from "./components/Lightbox";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1705254613735-1abb457f8a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY29sb3JmdWwlMjBhYnN0cmFjdCUyMGFydHxlbnwxfHx8fDE3NzMyOTcwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Abstract Waves",
    caption: "A mesmerizing blend of vibrant colors flowing in harmonious waves, creating a dynamic visual symphony.",
    category: "Abstract",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1673008197052-a7545007b8c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MzIyNjQ5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Neon Dreams",
    caption: "Urban nightlife illuminated by electric neon lights, painting the cityscape in brilliant colors.",
    category: "Urban",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1723624718353-249499b852fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHN1bnNldCUyMGJlYWNofGVufDF8fHx8MTc3MzI5NzAyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tropical Paradise",
    caption: "Golden hour on a pristine beach where the sky meets the ocean in a spectacular display of warm colors.",
    category: "Nature",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1615046526364-ccfd92cd45bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZsb3dlcnMlMjBnYXJkZW58ZW58MXx8fHwxNzczMjQ2NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Blooming Beauty",
    caption: "A vibrant garden bursting with colorful flowers, showcasing nature's incredible palette.",
    category: "Nature",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1643077613339-7212a5b5f38d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluYm93JTIwbGFuZHNjYXBlJTIwbmF0dXJlfGVufDF8fHx8MTc3MzI5NzAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Rainbow Valley",
    caption: "Nature's own canvas painted with the full spectrum of colors across majestic landscapes.",
    category: "Nature",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1590968802291-f1e1f86cde34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwc3RyZWV0JTIwYXJ0JTIwbXVyYWx8ZW58MXx8fHwxNzczMjk3MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Street Canvas",
    caption: "Bold street art mural transforming urban walls into vibrant expressions of creativity and culture.",
    category: "Art",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1623770203836-71db5fc396ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGhvdCUyMGFpciUyMGJhbGxvb25zfGVufDF8fHx8MTc3MzI5NzAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Sky Symphony",
    caption: "Colorful hot air balloons floating gracefully against the sky, creating a whimsical aerial display.",
    category: "Adventure",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1766534396504-026028021336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBjb3JhbCUyMHJlZWYlMjB1bmRlcndhdGVyfGVufDF8fHx8MTc3MzI5NzAzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Underwater Wonderland",
    caption: "Vibrant coral reef teeming with life, showcasing the ocean's most spectacular natural architecture.",
    category: "Nature",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1573399968917-bfc283b885b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGF1dHVtbiUyMGZvcmVzdHxlbnwxfHx8fDE3NzMyOTcwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Autumn Palette",
    caption: "Forest ablaze with autumn colors, nature's grand finale before winter's arrival.",
    category: "Nature",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1663659327805-ee486187579d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwcGFpbnQlMjBzcGxhc2h8ZW58MXx8fHwxNzczMjk3MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Color Explosion",
    caption: "Dynamic paint splash frozen in time, capturing the raw energy and beauty of pure color.",
    category: "Abstract",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1738680981649-3f81bdfe225d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG1hcmtldCUyMHNwaWNlc3xlbnwxfHx8fDE3NzMyOTcwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Spice Market",
    caption: "A rainbow of aromatic spices displayed in traditional market stalls, a feast for the senses.",
    category: "Culture",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1741660421029-0b2c13f61075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBub3J0aGVybiUyMGxpZ2h0cyUyMGF1cm9yYXxlbnwxfHx8fDE3NzMyOTcwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Aurora Borealis",
    caption: "The ethereal northern lights dancing across the night sky in brilliant ribbons of color.",
    category: "Nature",
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBnYWxheHklMjBzcGFjZXxlbnwxfHx8fDE3NzMxOTUxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Cosmic Galaxy",
    caption: "A mesmerizing view of distant galaxies, showcasing the universe's infinite beauty and mystery.",
    category: "Space",
  },
  {
    id: 14,
    url: "https://images.unsplash.com/photo-1728163161783-f01c38faee32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MzI5NzU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modern Architecture",
    caption: "Striking contemporary building design featuring bold colors and innovative geometric patterns.",
    category: "Urban",
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1772499924315-ac64944b345e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY2Fybml2YWwlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzMyOTc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Festival Vibes",
    caption: "Vibrant carnival celebration filled with colorful costumes, music, and joyful energy.",
    category: "Culture",
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1548003760-eae062571510?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBuZW9uJTIwc2lnbnN8ZW58MXx8fHwxNzczMjk3NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Neon Nights",
    caption: "Glowing neon signs illuminating the urban landscape with electric vibrancy and retro charm.",
    category: "Urban",
  },
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1695736338019-d9258f713e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcmQlMjBwYXJyb3R8ZW58MXx8fHwxNzczMTk5NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tropical Wings",
    caption: "Majestic parrot displaying its brilliant plumage, a living testament to nature's artistry.",
    category: "Wildlife",
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1746199192246-d88677bee147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXZpZCUyMHN1bnNldCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NzMyOTc1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mountain Majesty",
    caption: "Breathtaking sunset over mountain peaks, painting the sky in vivid shades of orange and purple.",
    category: "Nature",
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1700147390896-389657782cfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJ1dHRlcmZseSUyMHdpbmdzfGVufDF8fHx8MTc3MzI5NzU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Butterfly Grace",
    caption: "Delicate butterfly wings adorned with intricate patterns and vibrant colors, a marvel of natural design.",
    category: "Wildlife",
  },
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1769870704097-4b027c85bb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwc3RyZWV0JTIwdG9reW98ZW58MXx8fHwxNzczMjk3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tokyo Lights",
    caption: "The vibrant streets of Tokyo alive with neon signs and bustling energy after dark.",
    category: "Urban",
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1598838105721-570a97f2fe28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGplbGx5ZmlzaCUyMG9jZWFufGVufDF8fHx8MTc3MzI5NzU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Jellyfish Ballet",
    caption: "Graceful jellyfish gliding through the ocean, their translucent bodies glowing with bioluminescent beauty.",
    category: "Wildlife",
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1752586893104-a38a3d940b9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBmaXJld29ya3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzMyOTc1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Fireworks Finale",
    caption: "Spectacular fireworks display lighting up the night sky in a dazzling celebration of color and light.",
    category: "Celebration",
  },
];

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(galleryImages.map((img) => img.category))];
    return cats;
  }, []);

  // Filter images based on category and search
  const filteredImages = useMemo(() => {
    let filtered = galleryImages;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((img) => img.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (img) =>
          img.title.toLowerCase().includes(query) ||
          img.caption.toLowerCase().includes(query) ||
          img.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      {/* Animated background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800/50 backdrop-blur-sm bg-gray-900/50">
        <div className="container mx-auto px-6 py-8">
          <Logo />
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

      {/* Filter Bar */}
      <div className="relative z-10 container mx-auto px-6 py-6">
        <FilterBar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          imageCount={filteredImages.length}
        />
      </div>

      {/* Gallery Grid */}
      <main className="relative z-10 container mx-auto">
        {filteredImages.length > 0 ? (
          <GalleryGrid
            images={filteredImages}
            onImageClick={handleImageClick}
            viewMode={viewMode}
          />
        ) : (
          <div className="text-center py-20 px-6">
            <p className="text-2xl text-gray-400">No images found matching your criteria.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 backdrop-blur-sm bg-gray-900/50 mt-12">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Chromatic Gallery. A vibrant visual experience.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <span>{galleryImages.length} Total Images</span>
              <span>•</span>
              <span>{categories.length - 1} Categories</span>
              <span>•</span>
              <span>Worldwide Collection</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
