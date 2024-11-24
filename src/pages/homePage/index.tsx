import './styles.scss';
import McLaren from "./../../../public/images/mclaren.jpeg";
import { ArrowRight, Star, Shield, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToGallery = () => {
        const servicesSection = document.getElementById('gallery');
        if (servicesSection) {
            const navHeight = document.querySelector('.navBody')?.clientHeight || 0;
            window.scrollTo({
                top: servicesSection.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className={`backgroundHome ${isVisible ? 'visible' : ''}`}>
            <div className="video-overlay"></div>
            <img src={McLaren} alt="McLaren car background" />
            
            <div className="content-wrapper">
                <div className="titleHome">
                    <h1>
                        <span className="gradient-text">Welcome to</span>
                        <br />
                        <span className="main-text">OMGWrapz</span>
                    </h1>
                    
                    <div className="textHome">
                        <h2>The best wraps in all El Paso Tx.</h2>
                        
                        <div className="features">
                            <div className="feature">
                                <Star className="icon" />
                                <span>Premium Quality</span>
                            </div>
                            <div className="feature">
                                <Shield className="icon" />
                                <span>Professional Install</span>
                            </div>
                            <div className="feature">
                                <Heart className="icon" />
                                <span>Custom Design</span>
                            </div>
                        </div>
                    </div>

                    <div className="buttonHome">
                        <button type="button" onClick={scrollToGallery}>
                            See Wrapz!
                            <ArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="scroll-text">Scroll Down</div>
            </div>
        </main>
    );
}