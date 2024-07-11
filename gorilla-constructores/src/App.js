import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './routes/contact/contact.component';
import ServicesPage from './routes/services/services.component';
import GalleryPage from './routes/gallery/gallery.component';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/home/home.component';

const App = () => {
  return (
    <div className='app-container'>
      <Routes>
        <Route path='/' exact element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='contacto' element={<ContactPage />} />
          <Route path='servicios' element={<ServicesPage />} />
          <Route path='galeria' element={<GalleryPage />} />
        </Route>
      </Routes>
      <div>
        HERE GOES THE FOOTER
      </div>
    </div>
  );
};

export default App;
