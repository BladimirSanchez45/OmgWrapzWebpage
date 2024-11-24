// Imports
import './App.css';

// Images
import GTR from "./../public/images/gtr.jpeg";
import Camaro from "./../public/images/camaroo.png";
import Corvette from "./../public/images/corvette.jpeg";
import Charger from "./../public/images/charger.jpeg";
import Lamborghini from "./../public/images/lamborghini.jpeg";
import Lambo from "./../public/images/lambo.jpeg";
import Porsche from "./../public/images/porsche.jpeg";

//Components
import GalleryContainer from './components/galleryContainer';
import NavBar from './components/navBar';
import HomePage from './pages/homePage';
import FirstContainer from './components/firstContainer';
import ContactContainer from './components/contactContainer';
import QuoteContainer from  './components/quoteContainer';

function App() {
  const images = [
    {
        src: GTR,
        title: "GTR Performance",
        description: "Premium matte black wrap with chrome delete"
    },
    {
        src: Camaro,
        title: "Camaro",
        description: "Full Orange And Black Matte Wrap"
    },
    {
        src: Charger,
        title: "Dodge Charger",
        description: "Custom performance wrap"
    },
    {
        src: Corvette,
        title: "Corvette",
        description: "Sport design edition"
    },
    {
        src: Lamborghini,
        title: "Lamborghini",
        description: "Premium exotic wrap"
    },
    {
        src: Porsche,
        title: "Porsche",
        description: "Custom Full Wrap"
    },
];

  return (
    <div className="main-wrapper">
      <NavBar />
      <div className="page-wrapper">
        <section id='home' className="home-section">
          <HomePage />
        </section>
        <section id='services' className="content-section">
          <FirstContainer
            image={Lambo}
            text="Transform your vehicle with premium wraps and professional installation. We specialize in high-end automotive customization."
          />
        </section>
        <section id='gallery' className="gallery-section">
          <GalleryContainer images={images} />
        </section>
        <section id="quote" className="quote-section">
          <QuoteContainer />
        </section>
        <section id='contact' className="contact-section">
          <ContactContainer
            phone="9565299749"
            email="omgwrapz@gmail.com"
            address="El Paso, TX"
            instagram="https://www.instagram.com/omgwrapz/"
            facebook="https://www.facebook.com/omgwrapz?locale=es_LA"
            businessHours="ONLY BY APPOINTMENT"
          />
        </section>
      </div>
    </div>
  );
}

export default App;