import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  { src: 'https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cat 1' },
  { src: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Cat 2' },
  { src: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGltYWdlcyUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D', alt: 'Cat 3' },
  { src: 'https://plus.unsplash.com/premium_photo-1667099522600-29a75014848d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGltYWdlcyUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D', alt: 'Cat 4' }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {selectedImage && (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={selectedImage.src} alt={selectedImage.alt} className="large-image" />
          </div>
        </div>
      )}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
