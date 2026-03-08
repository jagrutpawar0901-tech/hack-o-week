import { Product } from "../types/product";
import { MapPin, Tag, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group border border-purple-100 hover:border-purple-300 transform hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <Sparkles className="size-3" />
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <span className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs rounded-full whitespace-nowrap capitalize">
            {product.condition}
          </span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">
          {product.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Tag className="size-4 text-purple-400" />
          <span>{product.category}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ₹{product.price.toLocaleString()}
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="size-4 text-purple-400" />
            <span className="line-clamp-1">{product.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}