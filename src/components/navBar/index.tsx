import { useState, useEffect } from "react"
import { Palette, Images, Phone, Menu, X, Mail } from 'lucide-react';
import "./styles.scss"
import Logo from "./../../../public/images/logo.png"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.querySelector('.navBody')?.clientHeight || 0;
            const offsetTop = section.offsetTop - navHeight;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        setIsOpen(false); // Cierra el menú móvil después de hacer clic
    };

    return(
        <div className={`navBody ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navContent">
                {/* Logo y nombre */}
                <div className="navBrand" onClick={() => scrollToSection('home')}>
                    <img src={Logo} className="navLogo" alt="OMG Wrapz Logo" />
                </div>

                {/* Botón de menú móvil */}
                <div className="mobileMenuBtn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>

                {/* Links de navegación */}
                <div className={`navLinks ${isOpen ? 'active' : ''}`}>
                    <a href="#services" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                    }}>
                        <Palette />
                        Services
                    </a>
                    <a href="#gallery" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('gallery');
                    }}>
                        <Images />
                        Gallery
                    </a>
                    <a href="#quote" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('quote');
                    }}>
                        <Mail />
                        Get a Quote
                    </a>
                    <a href="#contact" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}>
                        <Phone />
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}