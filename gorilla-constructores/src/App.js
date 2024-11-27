import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './routes/contact/contact.component';
import ServicesPage from './routes/services/services.component';
import GalleryPage from './routes/gallery/gallery.component';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/home/home.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div className='app-container'>
      <Navigation></Navigation>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='contacto' element={<ContactPage />} />
        <Route path='servicios' element={<ServicesPage />} />
        <Route path='galeria' element={<GalleryPage />} />
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
