import Hero from '../sections/Hero';
import About from '../sections/About';
import ServiceTimes from '../sections/ServiceTimes';
import Ministries from '../sections/Ministries';
import LatestVideo from '../sections/LatestVideo';
import Leadership from '../sections/Leadership';
import DailyVerse from '../sections/DailyVerse';
import PrayerCTA from '../sections/PrayerCTA';
import VisitUs from '../sections/VisitUs';

/**
 * Homepage — the complete visual design system for
 * கிறிஸ்துவின் சபை / Church Of Christ, Dindigul.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServiceTimes />
      <Ministries />
      <LatestVideo />
      <Leadership />
      <DailyVerse />
      <PrayerCTA />
      <VisitUs />
    </>
  );
}
