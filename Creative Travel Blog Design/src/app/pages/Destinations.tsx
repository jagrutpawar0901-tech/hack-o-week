import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { MapPin, Calendar, DollarSign, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    continent: "Europe",
    description: "Experience the magic of blue-domed churches, stunning sunsets, and crystal-clear waters in this iconic Greek island paradise.",
    image: "https://images.unsplash.com/photo-1656677476420-7159cac2366a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzczMDIzODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Apr - Oct",
    budget: "$$$",
    rating: 4.9,
    highlights: ["Sunset in Oia", "Wine Tasting", "Black Sand Beaches"]
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    continent: "Asia",
    description: "Discover ancient temples, lush rice terraces, pristine beaches, and a vibrant culture in Indonesia's most beloved island.",
    image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc3MzA5NTY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Apr - Oct",
    budget: "$$",
    rating: 4.8,
    highlights: ["Tegalalang Rice Terraces", "Uluwatu Temple", "Surfing"]
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    continent: "Asia",
    description: "A mesmerizing blend of ultra-modern technology and ancient traditions, where neon-lit streets meet serene temples.",
    image: "https://images.unsplash.com/photo-1626946548234-a65fd193db41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMG5pZ2h0fGVufDF8fHx8MTc3MzA3NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Mar - May",
    budget: "$$$",
    rating: 4.9,
    highlights: ["Cherry Blossoms", "Shibuya Crossing", "Tsukiji Market"]
  },
  {
    id: 4,
    name: "Serengeti, Tanzania",
    continent: "Africa",
    description: "Witness the great migration and encounter Africa's magnificent wildlife in one of the world's most famous national parks.",
    image: "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB3aWxkbGlmZSUyMGFmcmljYXxlbnwxfHx8fDE3NzMwODc2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Jun - Oct",
    budget: "$$$$",
    rating: 5.0,
    highlights: ["Wildlife Safari", "Hot Air Balloon", "Great Migration"]
  },
  {
    id: 5,
    name: "Iceland",
    continent: "Europe",
    description: "Land of fire and ice, featuring dramatic landscapes, geothermal wonders, and the magical Northern Lights.",
    image: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzcyOTkyNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Sep - Mar",
    budget: "$$$$",
    rating: 4.9,
    highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle"]
  },
  {
    id: 6,
    name: "Swiss Alps",
    continent: "Europe",
    description: "Towering peaks, pristine alpine lakes, and charming mountain villages create an unforgettable outdoor paradise.",
    image: "https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NzMwMTc3Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bestTime: "Jun - Sep",
    budget: "$$$$",
    rating: 4.8,
    highlights: ["Matterhorn", "Hiking Trails", "Mountain Railways"]
  }
];

export function Destinations() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Explore the World
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            From tropical paradises to arctic wonders, discover destinations that will take your breath away
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {destination.continent}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar size={18} className="text-orange-500" />
                    <span>{destination.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <DollarSign size={18} className="text-green-500" />
                    <span>{destination.budget}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
