import { AdvancedMarker, APIProvider, Map, MapCameraChangedEvent, Marker, Pin } from "@vis.gl/react-google-maps";
import './contactForm.style.css';

const MapComponent = () => {

    const keyPos = 'Gorilla Constructores';

    return (
        <div className='map-container'>
            <p style={{ marginLeft: '20%' }}>Ubicaci&oacute;n de nuestras oficinas:</p>
            <APIProvider apiKey={'AIzaSyBRRvrThSQXiFQnYfAJF7BsyI88MrZj7J4'} onLoad={() => console.log('Maps is in place')}>
                <Map
                    style={{ width: '50vw', height: '50vh'}}
                    defaultZoom={16}
                    defaultCenter={{ lat:20.542530577930282, lng:-100.40569145032858 }}
                >
                    <Marker position={{ lat:20.542530577930282, lng:-100.40569145032858 }}></Marker>
                </Map>
            </APIProvider>
        </div>
    );
};

export default MapComponent;