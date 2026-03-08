import { useParams, Link, useNavigate } from "react-router";
import { getProductById } from "../data/products";
import { MapPin, Tag, User, Calendar, ArrowLeft, MessageCircle, Sparkles } from "lucide-react";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product not found
        </h2>
        <Link
          to="/"
          className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-2"
        >
          <ArrowLeft className="size-5" />
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-6 transition-colors"
      >
        <ArrowLeft className="size-5" />
        Back to listings
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg border border-purple-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-xl">
              <Sparkles className="size-4" />
              Featured Item
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full capitalize font-medium">
                {product.condition}
              </span>
            </div>

            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              ₹{product.price.toLocaleString()}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Tag className="size-5 text-purple-600" />
                </div>
                <span>Category: {product.category}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <MapPin className="size-5 text-pink-600" />
                </div>
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <User className="size-5 text-blue-600" />
                </div>
                <span>Seller: {product.seller}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Calendar className="size-5 text-green-600" />
                </div>
                <span>Listed: {new Date(product.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105">
              <MessageCircle className="size-5" />
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}