import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { Ul } from './Styles.Styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <Ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          onImageClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </Ul>
  );
};

export default ImageGallery;
