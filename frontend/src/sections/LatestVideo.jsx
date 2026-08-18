import { Link } from 'react-router-dom';
import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import VideoThumbnail from '../components/videos/VideoThumbnail';
import { useLanguage } from '../context/LanguageContext';
import { getLatestVideo } from '../data/videos';
import { formatDate } from '../utils/date';

/**
 * Latest Video / Sermon preview — home page.
 *
 * Driven by the SAME data source as the Videos library (src/data/videos.js):
 * it shows the featured (first) demo video and links through to its detail
 * page at /videos/:slug. There is no second video data source.
 */
export default function LatestVideo() {
  const { t, lang } = useLanguage();
  const video = getLatestVideo();

  if (!video) return null;

  const title = lang === 'ta' ? video.titleTa : video.titleEn;
  const categoryLabel = t.videos.categories[video.category] ?? video.category;

  return (
    <section id="videos" className="scroll-mt-24 bg-charcoal py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Video thumbnail — links to the detail page */}
          <RevealAnimation>
            <Link
              to={`/videos/${video.slug}`}
              className="group relative block overflow-hidden rounded-3xl shadow-2xl shadow-black/40"
              aria-label={`${t.latestVideo.watchLabel}: ${title}`}
            >
              <div className="aspect-video w-full overflow-hidden">
                <VideoThumbnail
                  youtubeId={video.youtubeId}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Soft overlay + play button */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/30"
                aria-hidden="true"
              />
              <span
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-cream/50 bg-charcoal/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/90">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8 text-cream">
                    <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                  </svg>
                </span>
              </span>

              {/* Category chip */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
                <span className="rounded-full bg-charcoal/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-soft backdrop-blur-sm">
                  {categoryLabel}
                </span>
              </div>
            </Link>
          </RevealAnimation>

          {/* Text */}
          <div>
            <RevealAnimation>
              <SectionHeading
                eyebrow={t.latestVideo.eyebrow}
                title={t.latestVideo.heading}
                tone="dark"
              />
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                {t.latestVideo.sub}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.18}>
              <div className="mt-8">
                <p className="font-display text-2xl font-semibold leading-snug text-cream sm:text-3xl">
                  {title}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-cream/55">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
                    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
                  </svg>
                  <time dateTime={video.date}>{formatDate(video.date, lang)}</time>
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.26}>
              <div className="mt-8">
                <Button to="/videos" variant="light" size="md">
                  {t.latestVideo.viewAll}
                </Button>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
