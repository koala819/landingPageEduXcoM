import React from 'react';
import { SquareX } from 'lucide-react';

interface LightboxContentProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const LightboxContent: React.FC<LightboxContentProps> = ({ src, alt, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="max-h-[85vh] max-w-full object-contain"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors"
            aria-label="Fermer"
          >
            <SquareX className="h-6 w-6 text-white"/>
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm py-3 px-4 mt-2 rounded-lg">
          <p className="text-white text-center">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export default LightboxContent;