import { Fragment } from "react";
import ServiceCard from "../../components/services/services/service-card.component";

const ServicesPage = () => {
    return (
        <Fragment>
            <div className="services-container">
                <h2 className="h2-services">Nuestros Servicios</h2>
                <ServiceCard></ServiceCard>
            </div>
        </Fragment>
    );
};

export default ServicesPage; 