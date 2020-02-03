import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(({ description, id, urls: { regular } }) => {
        return <ImageCard description={description} key={id} url={regular} />;
    });

    return <div className="image-list">{images}</div>;
}

export default ImageList;