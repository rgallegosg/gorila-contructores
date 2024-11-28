import './carousel.style.css';

const CarouselImg = ({ img }) => {
    return (
        <div className='carousel-image-container'>
            <img className='carousel-img' src={img.img} alt={img.caption}></img>
            <div className="carousel-title">{img.caption}</div>
        </div>
    );
}

export default CarouselImg;