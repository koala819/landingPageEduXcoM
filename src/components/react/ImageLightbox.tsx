import React, { useState, useEffect } from 'react';
import LightboxContent from './LightboxContent';
import { createPortal } from 'react-dom';

interface ImageLightboxProps {
  children: React.ReactNode;
  src: string;
  alt: string;
}

const ImageLightbox = ({ children, src, alt }: ImageLightboxProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // S'assurer que le composant n'est rendu que côté client
  useEffect(() => {
    setMounted(true);
    return () => {
      // Nettoyer le overflow si le composant est démonté pendant que lightbox est ouvert
      if (isOpen) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen]);

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
      <div onClick={openLightbox} className="cursor-pointer h-full w-full">
        {children}
      </div>
      {mounted && isOpen && createPortal(
        <LightboxContent src={src} alt={alt} onClose={closeLightbox} />,
        document.body
      )}
    </>
  );
};

export default ImageLightbox;