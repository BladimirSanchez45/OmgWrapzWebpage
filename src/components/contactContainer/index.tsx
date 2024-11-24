import React from 'react';
import "./styles.scss";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

interface ContactContainerProps {
    phone: string;
    email: string;
    address: string;
    instagram: string;
    facebook: string;
    businessHours: string;
}

const ContactContainer: React.FC<ContactContainerProps> = ({
    phone,
    email,
    address,
    instagram,
    facebook,
    businessHours
}) => {
    return (
        <div className="contact-container">
            <div className="gradient-overlay"></div>
            <div className="content-wrapper">
                <div className="contact-header">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">Transform your vehicle with us</p>

                </div>

                <div className="social-media">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href={instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                <Instagram className="social-icon" />
                                <span>Instagram</span>
                            </a>
                            <a href={facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                                <Facebook className="social-icon" />
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="icon-wrapper">
                                <Phone className="icon" />
                            </div>
                            <h3>Phone</h3>
                            <p><a href={`tel:${phone}`}>{phone}</a></p>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <Mail className="icon" />
                            </div>
                            <h3>Email</h3>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <MapPin className="icon" />
                            </div>
                            <h3>Location</h3>
                            <p>{address}</p>
                        </div>

                        <div className="info-card">
                            <div className="icon-wrapper">
                                <Clock className="icon" />
                            </div>
                            <h3>Business Hours</h3>
                            <p>{businessHours}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;