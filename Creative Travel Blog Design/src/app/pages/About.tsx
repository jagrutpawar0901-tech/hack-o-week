import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Plane, Heart, Camera, Users, Award, Globe2 } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
            <Globe2 size={48} className="text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Wanderlust Tales started with a backpack, a camera, and an insatiable curiosity 
            about the world. What began as a personal travel journal has grown into a community 
            of passionate explorers sharing their adventures.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              We believe that travel is more than just visiting new places—it's about 
              connecting with different cultures, challenging perspectives, and growing 
              as individuals.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Our mission is to inspire and empower travelers to explore the world 
              responsibly, share authentic experiences, and build meaningful connections 
              across borders.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Through honest storytelling and practical guides, we help you turn your 
              travel dreams into unforgettable realities.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3MzAxMzAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Paris Eiffel Tower"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            What We Value
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Authenticity</h3>
              <p className="text-gray-600 leading-relaxed">
                We share real experiences, both the magical moments and the challenges. 
                No filters, no fake itineraries—just honest travel stories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Travel connects us all. We've built a supportive community where 
                explorers share tips, advice, and encouragement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Adventure</h3>
              <p className="text-gray-600 leading-relaxed">
                From backpacking to luxury travel, we celebrate all forms of exploration 
                and encourage stepping outside comfort zones.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center">
                <Globe2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We promote responsible travel practices that protect our planet and 
                benefit local communities for generations to come.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Storytelling</h3>
              <p className="text-gray-600 leading-relaxed">
                Every destination has a story. We capture and share these narratives 
                through words and images that inspire wanderlust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for quality in everything we do—from photography to writing 
                to the practical advice we share with fellow travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Join Our Journey
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Whether you're a seasoned globetrotter or planning your first adventure, 
          we'd love to have you be part of our community. Share your stories, 
          get inspired, and let's explore this beautiful world together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all hover:scale-105 shadow-xl">
            Subscribe to Newsletter
          </button>
          <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all hover:scale-105">
            Follow on Instagram
          </button>
        </div>
      </section>
    </div>
  );
}
