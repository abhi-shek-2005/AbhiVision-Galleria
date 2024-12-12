import React, { useState } from 'react';
import { X, Share2 } from 'lucide-react';
import { FurnitureItem } from '../types';

interface PhotoGalleryProps {
  item: FurnitureItem;
}

export const PhotoGallery = ({ item }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const shareImage = async (imageUrl: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: item.description,
          url: imageUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      window.open(`https://wa.me/?text=${encodeURIComponent(`${item.title}: ${imageUrl}`)}`, '_blank');
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {item.images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${item.title} ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <Share2 className="text-white w-6 h-6" onClick={(e) => {
                e.stopPropagation();
                shareImage(image);
              }} />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage}
            alt="Selected furniture"
            className="max-w-full max-h-[90vh] object-contain"
          />
          <button
            className="absolute bottom-4 right-4 text-white bg-blue-600 p-2 rounded-full"
            onClick={() => shareImage(selectedImage)}
          >
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};