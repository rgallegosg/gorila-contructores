
import { useState } from 'react';
import { HomeServicesData } from '../../../assets/data/homeServicesData';
import './home-services-list.style.css';
import HomeServicesCard from './home-services-card.component';

const HomeServicesList = () => {

    const [gallery, setGallery] = useState(HomeServicesData);

    return (
        <div className="list-container">
            <div className="row">
                {
                    gallery.map((g) => {
                        return (
                            <HomeServicesCard key={g.id} img={g}></HomeServicesCard>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default HomeServicesList;