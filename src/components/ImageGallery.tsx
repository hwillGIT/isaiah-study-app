import React, { useState } from 'react';
import { SectionImage } from '../types';
import { Image, FileText, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: SectionImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<SectionImage | null>(null);
  const [zoomed, setZoomed] = useState(false);

  if (!images || images.length === 0) return null;

  const isPdf = (src: string) => src.toLowerCase().endsWith('.pdf');
  const isImage = (src: string) => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(src);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Image className="text-gray-400" size={20} />
        <h3 className="text-lg font-semibold text-gray-200">Images & Infographics</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="glass-panel rounded-xl overflow-hidden cursor-pointer group hover:border-white/20 transition-all"
            onClick={() => setSelectedImage(img)}
          >
            {isPdf(img.src) ? (
              <div className="flex items-center gap-3 p-6">
                <FileText className="text-amber-400" size={32} />
                <div>
                  <div className="text-sm text-white font-medium">{img.alt}</div>
                  <div className="text-xs text-gray-400">PDF Document</div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </div>
            )}
            {img.caption && (
              <div className="p-3 text-xs text-gray-400">{img.caption}</div>
            )}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => { setSelectedImage(null); setZoomed(false); }}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setSelectedImage(null); setZoomed(false); }}
              className="absolute -top-2 -right-2 z-10 bg-gray-800 rounded-full p-2 text-gray-300 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {isPdf(selectedImage.src) ? (
              <iframe
                src={selectedImage.src}
                className="w-full h-[80vh] rounded-xl bg-white"
                title={selectedImage.alt}
              />
            ) : (
              <div
                className={`overflow-auto max-h-[85vh] rounded-xl cursor-zoom-in ${zoomed ? 'cursor-zoom-out' : ''}`}
                onClick={() => setZoomed(!zoomed)}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className={`rounded-xl transition-transform duration-300 ${zoomed ? 'scale-150' : 'w-full'}`}
                />
              </div>
            )}

            {selectedImage.caption && (
              <div className="text-center text-sm text-gray-400 mt-3">{selectedImage.caption}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
