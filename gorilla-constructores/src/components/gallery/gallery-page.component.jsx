import './gallery-page.style.css';
import ArqImage from '../../assets/images/carrusel/arquitectura-Gorila.png';
import closetImage from '../../assets/images/carrusel/closets-Gorila.png';
import persianasImage from '../../assets/images/carrusel/persinas-Gorila.png';
import cocinasImage from '../../assets/images/carrusel/cocinas-Gorila.png';
import pisosImage from '../../assets/images/carrusel/piso-Laminado-Gorila.png';
import follajeImage from '../../assets/images/carrusel/follaje-Artificial-Gorila.png';

const GalleryPage =()=>{
     const servObj = [
            {
                    entryId: 1,
                    imgName: ArqImage,
                    serviceName: 'Arquitectura',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
            {
                    entryId: 2,
                    imgName: closetImage,
                    serviceName: 'Closets',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
            {
                    entryId: 3,
                    imgName: persianasImage,
                    serviceName: 'Persianas',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
            {
                    entryId: 4,
                    imgName: cocinasImage,
                    serviceName: 'Cocinas',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
            {
                    entryId: 5,
                    imgName: pisosImage,
                    serviceName: 'Pisos',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
            {
                    entryId: 6,
                    imgName: follajeImage,
                    serviceName: 'Pasto y Follaje Sintetico',
                    serviceDesc: 'TestLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum fermentum risus, id posuere felis hendrerit eu. Nullam nec luctus augue, a ultrices neque. Suspendisse.'
            },
        ];
        
        return(
            <>
                <div className='container-gallery-sections grid-gallery'>
                    {servObj.map(element => (
                        <div className="section-gallery-card" key={element.entryId}>
                            <div className='section-gallery-img'>
                                <img src={element.imgName} className="footer-logo" alt={element.serviceName} />
                            </div>
                        </div>
                    ))}
                </div>
            </>
    );
}
export default GalleryPage;