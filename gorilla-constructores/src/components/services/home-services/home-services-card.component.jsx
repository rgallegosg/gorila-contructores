
import { Fragment } from 'react';
import './home-services-card.style.css';

const HomeServicesCard = ( { img } ) => {
    return (
        <Fragment>
            <div className="image-container">
                <img className="service-img" src={img.img} alt={img.caption}/>
                <div className="image-title">
                    <p>{img.caption}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeServicesCard;