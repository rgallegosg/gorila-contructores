import { Fragment } from "react";
import ServiceCard from "../../components/gallery/gallery-page.component";


const GalleryPage = () => {
    return (
        <Fragment>
            <div>
                <h2 className="h2-services">Galer&iacute;a</h2>
                <ServiceCard></ServiceCard>
            </div>
        </Fragment>
    );
};

export default GalleryPage;