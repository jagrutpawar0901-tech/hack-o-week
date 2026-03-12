import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Tag, Info } from "lucide-react";

interface LightboxProps {
  images: { id: number; url: string; title: string; caption: string; category: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:scale-110 transition-transform shadow-lg"
          >
            <X className="size-6" />
          </motion.button>

          {/* Image counter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>

          {/* Previous button */}
          {currentIndex > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-6 p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white hover:scale-110 transition-transform shadow-lg z-10"
            >
              <ChevronLeft className="size-8" />
            </motion.button>
          )}

          {/* Next button */}
          {currentIndex < images.length - 1 && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-6 p-4 rounded-full bg-gradient-to-br from-pink-500 to-orange-600 text-white hover:scale-110 transition-transform shadow-lg z-10"
            >
              <ChevronRight className="size-8" />
            </motion.button>
          )}

          {/* Image container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[85vh] mx-auto px-20"
          >
            {/* Gradient border effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-1 rounded-2xl">
                <div className="size-full bg-gray-900 rounded-2xl overflow-hidden">
                  <img
                    src={currentImage.url}
                    alt={currentImage.title}
                    className="max-w-full max-h-[80vh] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* Image info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 space-y-3"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold">
                  <Tag className="size-4" />
                  {currentImage.category}
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center text-white bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {currentImage.title}
              </h2>
              
              <div className="flex items-start gap-2 justify-center max-w-2xl mx-auto">
                <Info className="size-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-center leading-relaxed">
                  {currentImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}