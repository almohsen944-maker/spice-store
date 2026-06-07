import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const imageRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((prev) => {
      const next = prev - e.deltaY * 0.001;
      return Math.max(1, Math.min(4, next));
    });
  };

  const resetZoom = () => setZoom(1);

  return (
    <>
      <div className="space-y-4">
        <div
          ref={imageRef}
          className="relative aspect-square rounded-luxury overflow-hidden bg-brand-brown/5 group cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={images[selectedIndex]}
            alt={productName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-brand-cream/90 p-2 rounded-full">
              <ZoomIn size={20} className="text-brand-brown" />
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  'w-20 h-20 rounded-premium overflow-hidden flex-shrink-0 border-2 transition-colors',
                  index === selectedIndex
                    ? 'border-brand-gold'
                    : 'border-transparent hover:border-brand-brown/20'
                )}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50"
              onClick={() => { setLightboxOpen(false); resetZoom(); }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <button
                onClick={() => { setLightboxOpen(false); resetZoom(); }}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); resetZoom(); }}
                    className="absolute left-4 text-white/80 hover:text-white transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); resetZoom(); }}
                    className="absolute right-4 text-white/80 hover:text-white transition-colors z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={32} />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); resetZoom(); }}
                        className={cn(
                          'w-2 h-2 rounded-full transition-colors',
                          i === selectedIndex ? 'bg-white' : 'bg-white/40'
                        )}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div
                className="max-w-3xl max-h-[80vh] overflow-hidden"
                onWheel={handleWheel}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedIndex]}
                  alt={productName}
                  className="w-full h-full object-contain transition-transform duration-200"
                  style={{ transform: `scale(${zoom})` }}
                  draggable={false}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
