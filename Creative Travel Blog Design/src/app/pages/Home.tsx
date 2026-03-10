import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Compass, Map, Camera, Award } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

const featuredDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description: "Rice terraces and spiritual temples",
    image: "https://images.unsplash.com/photo-1656247203824-3d6f99461ba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwcmljZSUyMHRlcnJhY2VzfGVufDF8fHx8MTc3MzA5NTY2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    description: "Whitewashed villages and sunset views",
    image: "https://images.unsplash.com/photo-1656677476420-7159cac2366a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzczMDIzODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    description: "Neon nights and ancient traditions",
    image: "https://images.unsplash.com/photo-1626946548234-a65fd193db41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMHN0cmVldCUyMG5pZ2h0fGVufDF8fHx8MTc3MzA3NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-500 to-orange-500"
  },
  {
    id: 4,
    name: "Iceland",
    description: "Northern lights and volcanic landscapes",
    image: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbm9ydGhlcm4lMjBsaWdodHN8ZW58MXx8fHwxNzcyOTkyNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-cyan-500 to-blue-600"
  }
];

export function Home() {
  const [countriesCount, setCountriesCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [photosCount, setPhotosCount] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const animateCount = (setter: (val: number) => void, target: number) => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 30);
    };

    animateCount(setCountriesCount, 47);
    animateCount(setCitiesCount, 183);
    animateCount(setPhotosCount, 2456);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczMDY2NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tropical paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 via-pink-600/70 to-purple-600/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Adventure Awaits
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover stories from the road less traveled
          </p>
          <Link
            to="/destinations"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl"
          >
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Travel Stats - Creative Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <Map className="text-white" size={32} />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {countriesCount}
            </div>
            <div className="text-gray-600 mt-1">Countries Explored</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center transform -rotate-6 hover:-rotate-12 transition-transform">
              <Compass className="text-white" size={32} />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              {citiesCount}
            </div>
            <div className="text-gray-600 mt-1">Cities Visited</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
              <Camera className="text-white" size={32} />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {photosCount}
            </div>
            <div className="text-gray-600 mt-1">Photos Captured</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center transform -rotate-6 hover:-rotate-12 transition-transform">
              <Award className="text-white" size={32} />
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
              12
            </div>
            <div className="text-gray-600 mt-1">Travel Awards</div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Featured Destinations
          </h3>
          <p className="text-gray-600 text-lg">
            Handpicked places that will steal your heart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination) => (
            <Link
              key={destination.id}
              to="/destinations"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] relative">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl font-bold mb-2">{destination.name}</h4>
                <p className="text-sm text-gray-100">{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Join our community of explorers and share your own travel tales
          </p>
          <Link
            to="/stories"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Read Travel Stories
          </Link>
        </div>
      </section>
    </div>
  );
}
