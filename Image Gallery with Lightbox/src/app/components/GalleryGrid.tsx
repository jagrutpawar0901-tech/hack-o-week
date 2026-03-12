import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  caption: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  viewMode: "grid" | "masonry";
}

export function GalleryGrid({ images, onImageClick, viewMode }: GalleryGridProps) {
  const ImageCard = ({ image, index }: { image: GalleryImage; index: number }) => (
    <motion.div
      key={image.id}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      onClick={() => onImageClick(index)}
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 p-[3px] rounded-xl">
        <div className="size-full bg-gray-900 rounded-xl overflow-hidden">
          <img
            src={image.url}
            alt={image.title}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Category badge */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold shadow-lg">
            {image.category}
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
            <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{image.caption}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (viewMode === "masonry") {
    return (
      <div className="p-6">
        <Masonry columnsCount={4} gutter="24px">
          {images.map((image, index) => (
            <ImageCard key={image.id} image={image} index={index} />
          ))}
        </Masonry>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {images.map((image, index) => (
        <ImageCard key={image.id} image={image} index={index} />
      ))}
    </div>
  );
}