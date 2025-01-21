import { Fragment, useState } from "react";
import './home.style.css';
import HomeServicesList from "../../components/services/home-services/home-services-list.component";
import { CarouselData } from '../../assets/data/carouselData';
import Carousel from "../../components/carousel/carousel.component";

const HomePage = () => {

    const [carouselImg, setCarouselImg] = useState(CarouselData);

    return (
        <Fragment>
            <Carousel carouselImg={carouselImg}></Carousel>
            <h1 className="home-page-title">Nuestros Servicios</h1>
            <div className="gallery-container">
                <HomeServicesList></HomeServicesList>
            </div>
        </Fragment>
    );
};

export default HomePage;