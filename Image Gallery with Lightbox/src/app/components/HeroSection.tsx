import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden py-16 px-6">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30"
        >
          <Sparkles className="size-4 text-pink-400" />
          <span className="text-sm text-pink-300 font-medium">Curated Collection</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Vibrant Visual
          </span>
          <br />
          <span className="text-white">Experience</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our stunning collection of vibrant imagery from around the world. 
          Each photo tells a unique story through color, composition, and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-8 justify-center pt-6"
        >
          {[
            { label: "Categories", value: "6" },
            { label: "Images", value: "22" },
            { label: "Countries", value: "12+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
