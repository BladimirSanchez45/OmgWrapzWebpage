import React, { useState } from 'react';
import "./styles.scss";

interface GalleryContainerProps {
    images: {
        src: string;
        title: string;
        description: string;
    }[];
}

const GalleryContainer: React.FC<GalleryContainerProps> = ({ images }) => {
    const [activeImage, setActiveImage] = useState<number | null>(null);

    return (
        <div className="gallery-container">
            <div className="gradient-overlay"></div>
            <div className="content-wrapper">
                <div className="gallery-header">
                    <h2 className="section-title">Our Latest Projects</h2>
                    <p className="section-subtitle">Discover our premium car wrapping transformations</p>
                </div>

                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="gallery-item"
                            onClick={() => setActiveImage(index)}
                        >
                            <div className="image-wrapper">
                                <img src={image.src} alt={image.title} />
                                <div className="image-overlay">
                                    <h3>{image.title}</h3>
                                    <p>{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {activeImage !== null && (
                <div className="modal" onClick={() => setActiveImage(null)}>
                    <div className="modal-content">
                        <img src={images[activeImage].src} alt={images[activeImage].title} />
                        <div className="modal-text">
                            <h3>{images[activeImage].title}</h3>
                            <p>{images[activeImage].description}</p>
                        </div>
                        <button className="close-button" onClick={() => setActiveImage(null)}>×</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryContainer;