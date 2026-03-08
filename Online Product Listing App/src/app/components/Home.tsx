import { useState, useMemo } from "react";
import { Link } from "react-router";
import { Search, Filter, Sparkles } from "lucide-react";
import { getProducts, getCategories, searchProducts, filterByCategory } from "../data/products";
import { ProductCard } from "./ProductCard";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = getCategories();
  
  const filteredProducts = useMemo(() => {
    let result = getProducts();
    
    if (selectedCategory !== "all") {
      result = filterByCategory(selectedCategory);
    }
    
    if (searchQuery.trim()) {
      result = searchProducts(searchQuery);
      if (selectedCategory !== "all") {
        result = result.filter(p => p.category === selectedCategory);
      }
    }
    
    return result;
  }, [searchQuery, selectedCategory]);

  const featuredProducts = useMemo(() => {
    return getProducts().filter(p => p.featured);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Section */}
      {featuredProducts.length > 0 && selectedCategory === "all" && !searchQuery && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="size-6 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-800">Featured Items</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 3).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search and Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {selectedCategory === "all" ? "All Products" : selectedCategory}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-purple-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-5 text-purple-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent bg-white/80 backdrop-blur-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-purple-600">{filteredProducts.length}</span> {filteredProducts.length === 1 ? "item" : "items"} found
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl">
          <p className="text-gray-500 text-lg">No products found</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}