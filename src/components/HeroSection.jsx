import Carousel from 'react-bootstrap/Carousel';
import img1 from '/assets/images/banner/banner-1.jpg';
import img2 from '/assets/images/banner/banner-2.jpg';
import img3 from '/assets/images/banner/banner-3.jpg';
import img4 from '/assets/images/banner/banner-4.jpg';
import img5 from '/assets/images/banner/banner-5.jpg';
import ProductCard from './ProductCard';
import data from '../data/cards.json';


function HeroSection() {
    const images = [img1, img2, img3, img4, img5];
    const cards = data.cards;


    return (
        <>
            <div id="top" className="hero-container mb-3">

                <div className="hero-wrapper">
                    <Carousel controls={true} indicators={false} interval={3000}>

                        {images.map((img, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100 hero-img"
                                    src={img}
                                    alt={`slide-${index}`}
                                />
                            </Carousel.Item>
                        ))}

                    </Carousel>


                    <div className="hero-overlay"></div>
                </div>
                <div className="container-fluid hero-cards">
                    <div className="row">
                        {cards.map((card, index) => (
                            <div className="col-md-3" key={index}>
                                <ProductCard {...card} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default HeroSection;
