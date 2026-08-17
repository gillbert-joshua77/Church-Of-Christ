import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import MinistryCard from '../components/MinistryCard';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Ministries — responsive image grid.
 * Image mapping uses the real available photos where fitting.
 */
const MINISTRY_IMAGES = [
  { key: 'children', image: site.images.kids },
  { key: 'youth', image: site.images.youth },
  { key: 'worship', image: site.images.newYear },
  { key: 'families', image: site.images.about },
  { key: 'bibleStudy', image: site.images.elders },
  { key: 'missions', image: site.images.buildingAlt },
];

export default function Ministries() {
  const { t } = useLanguage();

  return (
    <section id="ministries" className="scroll-mt-24 bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <SectionHeading
            eyebrow={t.ministries.eyebrow}
            title={t.ministries.heading}
            sub={t.ministries.sub}
            align="center"
          />
        </RevealAnimation>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {MINISTRY_IMAGES.map(({ key, image }, i) => (
            <MinistryCard
              key={key}
              index={i}
              image={image}
              alt={t.ministries[key].title}
              title={t.ministries[key].title}
              desc={t.ministries[key].desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
