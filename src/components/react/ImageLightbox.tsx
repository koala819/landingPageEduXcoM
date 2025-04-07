
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SquareX } from 'lucide-react';

interface ImageLightboxProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}

const ImageLightbox = ({ children, src, alt }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
    // Empêcher le défilement du corps lorsque la lightbox est ouverte
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    // Réactiver le défilement du corps
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Ce div permet de préserver la structure et les dimensions originales */}
      <div onClick={openLightbox} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={src}
                  alt={alt}
                  className="max-h-[85vh] max-w-full object-contain"
                />

                <button
                  onClick={closeLightbox}
                  className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors hover:cursor-pointer"
                  aria-label="Fermer"
                >
                  <SquareX className="h-6 w-6 text-white"/>

                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm py-3 px-4 mt-2 rounded-lg">
                <p className="text-white text-center">{alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageLightbox;