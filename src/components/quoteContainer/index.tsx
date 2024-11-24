import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Car, CheckCircle } from 'lucide-react';
import "./styles.scss";

interface FormData {
    name: string;
    email: string;
    phone: string;
    carMake: string;
    carModel: string;
    carYear: string;
    wrapType: string;
    message: string;
}

const QuoteContainer = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        carMake: '',
        carModel: '',
        carYear: '',
        wrapType: '',
        message: ''
    });

    useEffect(() => {
        try {
            emailjs.init("wGtc2ZYeMb34VoiIo");
            console.log("EmailJS initialized successfully");
        } catch (error) {
            console.error("EmailJS initialization error:", error);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
    
        setIsSubmitting(true);
    
        try {
            const templateParams = {
                name: formData.name,          
                email: formData.email,        
                phone: formData.phone,        
                carMake: formData.carMake,    
                carModel: formData.carModel,   
                carYear: formData.carYear,     
                wrapType: formData.wrapType,   
                message: formData.message      
            };

            console.log('Sending email with data:', templateParams);
            
            const result = await emailjs.send(
                'service_z80l8me',
                'template_683nb17',
                templateParams,
                'wGtc2ZYeMb34VoiIo'
            );
            
            console.log('Email sent successfully:', result.text);
            setIsSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                carMake: '',
                carModel: '',
                carYear: '',
                wrapType: '',
                message: ''
            });
    
            setTimeout(() => {
                setIsSuccess(false);
            }, 5000);
    
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="quote-container">
            <div className="gradient-overlay"></div>
            <div className="content-wrapper">
                <div className="quote-header">
                    <h2 className="section-title">Get Your Quote</h2>
                    <p className="section-subtitle">Transform your vehicle with us</p>
                </div>

                <div className="form-wrapper">
                    <form ref={form} onSubmit={handleSubmit} className="quote-form">
                        <div className="form-columns">
                            <div className="form-column">
                                <h3>Personal Information</h3>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-column">
                                <h3>Vehicle Information</h3>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="carMake"
                                        placeholder="Car Make"
                                        value={formData.carMake}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="carModel"
                                        placeholder="Car Model"
                                        value={formData.carModel}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="carYear"
                                        placeholder="Car Year"
                                        value={formData.carYear}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="wrap-selection">
                            <h3>Service Needed</h3>
                            <select
                                name="wrapType"
                                value={formData.wrapType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a Sevice</option>
                                <option value="Full Wrap">Full Wrap</option>
                                <option value="Partial Wrap">Partial Wrap</option>
                                <option value="Color Change">Color Change</option>
                                <option value="Paint Protection">Paint Protection</option>
                                <option value="Custom Design">Custom Design</option>
                            </select>
                        </div>

                        <div className="message-group">
                            <h3>Additional Details</h3>
                            <textarea
                                name="message"
                                placeholder="Tell us more about your project..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={`submit-button ${isSubmitting ? 'submitting' : ''} ${isSuccess ? 'success' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSuccess ? (
                                <>
                                    <CheckCircle className="icon" />
                                    Sent Successfully!
                                </>
                            ) : isSubmitting ? (
                                <>
                                    <Car className="icon spinning" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="icon" />
                                    Get Quote
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default QuoteContainer;