import { Heart, Instagram, Twitter, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Wanderlust Tales
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sharing travel stories, tips, and inspiration from around the globe. 
              Join us on our journey to explore the world's hidden gems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="/destinations" className="hover:text-orange-400 transition-colors">Destinations</a></li>
              <li><a href="/stories" className="hover:text-orange-400 transition-colors">Travel Stories</a></li>
              <li><a href="/about" className="hover:text-orange-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-400">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for travel tips and exclusive content!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> for travelers everywhere
          </p>
          <p className="mt-2">© 2026 Wanderlust Tales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
