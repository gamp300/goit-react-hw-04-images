import React from 'react';
import { Li, Image } from './Styles.Styled';

const ImageGalleryItem = ({ imageUrl, onImageClick }) => {
  return (
    <Li className="gallery-item" onClick={onImageClick}>
      <Image src={imageUrl} alt="" />
    </Li>
  );
};

export default ImageGalleryItem;
