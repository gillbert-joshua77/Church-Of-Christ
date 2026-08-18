import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollManager from './components/ScrollManager';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * App shell — shared chrome (header/footer) with routed pages.
 *
 * Routes:
 *   /   → Homepage
 *   *   → 404
 */
export default function App() {
  return (
    <LanguageProvider>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
