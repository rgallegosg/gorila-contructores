import './App.css';
import whatsappLogo from '../src/assets/images/general/WA.png';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './routes/contact/contact.component';
import ServicesPage from './routes/services/services.component';
import GalleryPage from './routes/gallery/gallery.component';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/home/home.component';
import Footer from './components/footer/footer.component';
import UploadPage from './routes/upload/upload.component';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='contacto' element={<ContactPage />} />
        <Route path='servicios' element={<ServicesPage />} />
        <Route path='galeria' element={<GalleryPage />} />
        <Route path='upload' element={<UploadPage />} />
      </Routes>
      <a className='whatsapp-icon' href='https://wa.me/442XXXXXXX' target='_blank'>
        <img className='wa-img' src={whatsappLogo} width='60' alt='WhatsApp'></img>
      </a>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
