import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ item }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        url={item.urls.full}
        src={item.urls.small}
        alt={item.description}
      ></img>
    </li>
  );
};

export default ImageGalleryItem;
