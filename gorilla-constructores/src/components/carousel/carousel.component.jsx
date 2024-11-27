import { useEffect, useState } from 'react';
import './carousel.style.css';
import CarouselImg from './carousel-img.component';

const Carousel = ({ carouselImg }) => {
    const [currentImg, setCurrentImg] = useState(0);
    const length = carouselImg.length;
    const delay = 100000;

    useEffect(() => {
        setTimeout(() => setCurrentImg((currentImg) =>
            currentImg === length - 1 ? 0 : currentImg + 1
        ), delay);
        
        return () => {};
    }, [currentImg]);

    return (
        <div className="carousel-container">
            {
                carouselImg.map((img, index) => {
                    return (
                        <div key={index}>
                            {
                                index === currentImg && (
                                    <CarouselImg img={img} key={img.id}></CarouselImg>
                                )
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Carousel;