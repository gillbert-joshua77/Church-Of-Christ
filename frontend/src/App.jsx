import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import ScrollManager from './components/ScrollManager';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SongsPage from './pages/SongsPage';
import SongDetailPage from './pages/SongDetailPage';
import VideosPage from './pages/VideosPage';
import VideoDetailPage from './pages/VideoDetailPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * App shell — shared chrome (header/footer) with routed pages.
 *
 * Routes:
 *   /              → Homepage
 *   /songs         → Songs library
 *   /songs/:slug   → Song detail (reusable, driven by the slug)
 *   /videos        → Videos library
 *   /videos/:slug  → Video detail (reusable, driven by the slug)
 *   *              → 404
 */
export default function App() {
  return (
    <LanguageProvider>
      <ScrollManager />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/songs/:slug" element={<SongDetailPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/videos/:slug" element={<VideoDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
