import "./styles.scss";

interface FirstContainerProps {
    image: string;
    text?: string;
}

const FirstContainer: React.FC<FirstContainerProps> = ({ image, text }) => {
    return (
        <div className="first-container">
            <div className="gradient-overlay"></div>
            <div className="content-wrapper">
                <div className="text-container">
                    <div className="text-wrapper">
                        <h2 className="section-title">About Our Services</h2>
                        <div className="text-content">
                            <p>{text}</p>
                        </div>
                        <div className="features">
                            <div className="feature-item">
                                <h2>Wraps</h2>
                            </div>
                            <div className="feature-item">
                                <h2>PPF</h2>
                            </div>
                            <div className="feature-item">
                                <h2>Printed Wraps</h2>
                            </div>
                            <div className="feature-item">
                                <h2>Tinting</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="image-container">
                    <img 
                        src={image} 
                        alt="content image" 
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstContainer;