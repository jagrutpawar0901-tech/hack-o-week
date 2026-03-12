import { motion } from "motion/react";
import { Search, Grid3x3, LayoutGrid } from "lucide-react";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  viewMode: "grid" | "masonry";
  onViewModeChange: (mode: "grid" | "masonry") => void;
  imageCount: number;
}

export function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange,
  imageCount,
}: FilterBarProps) {
  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search images..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Category Filters and View Mode */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm font-medium">
            {imageCount} {imageCount === 1 ? "image" : "images"}
          </span>
          
          <div className="flex gap-2 bg-gray-800/50 border border-gray-700/50 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange("grid")}
              className={`p-2 rounded transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Grid3x3 className="size-5" />
            </button>
            <button
              onClick={() => onViewModeChange("masonry")}
              className={`p-2 rounded transition-all ${
                viewMode === "masonry"
                  ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
