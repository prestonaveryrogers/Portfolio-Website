import React, { useState } from 'react';
import '../styles/ImageLightbox.css';

const ImageLightbox = ({ src, alt, className = '', caption, style = {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (e) => {
    e.preventDefault();
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = (e) => {
    e.preventDefault();
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const thumbnailClassName = className ? `${className} lightbox-thumbnail` : 'lightbox-thumbnail';

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={thumbnailClassName}
        onClick={openLightbox}
        style={{ ...style, cursor: 'pointer' }}
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
