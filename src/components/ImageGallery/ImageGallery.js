import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.scss';

const ImageGallery = ({ images, onClick }) => (
  <ul className="ImageGallery" onClick={e => onClick(e)}>
    {images.map(image => (
      <ImageGalleryItem key={image.id} item={image} />
    ))}
  </ul>
);

export default ImageGallery;
