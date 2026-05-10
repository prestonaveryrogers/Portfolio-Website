import React, { useState } from 'react';
import '../styles/ImageLightbox.css';

const ImageLightbox = ({ src, alt, className, caption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className} lightbox-thumbnail`}
        onClick={openLightbox}
        style={{ cursor: 'pointer' }}
      />

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-close" onClick={closeLightbox}>
            ×
          </div>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} className="lightbox-image" />
            {caption && <div className="lightbox-caption">{caption}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
