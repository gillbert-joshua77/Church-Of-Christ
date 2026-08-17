import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import ServiceTimes from './sections/ServiceTimes';
import Ministries from './sections/Ministries';
import LatestVideo from './sections/LatestVideo';
import Leadership from './sections/Leadership';
import DailyVerse from './sections/DailyVerse';
import PrayerCTA from './sections/PrayerCTA';
import VisitUs from './sections/VisitUs';

/**
 * Homepage body — the complete visual design system for
 * கிறிஸ்துவின் சபை / Church Of Christ, Dindukkal.
 *
 * Future pages (Songs, Videos library, etc.) will be added
 * alongside this homepage without rebuilding it.
 */
export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceTimes />
        <Ministries />
        <LatestVideo />
        <Leadership />
        <DailyVerse />
        <PrayerCTA />
        <VisitUs />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
