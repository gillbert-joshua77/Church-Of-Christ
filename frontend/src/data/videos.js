/**
 * DEMO video data for the Videos / YouTube library.
 *
 * IMPORTANT: These are SAMPLE videos for development only. The titles and
 * descriptions are original demo content and are NOT real Church Of Christ
 * recordings. The youtubeId values are well-known, publicly available
 * YouTube demo videos so thumbnails and embeds work during development.
 *
 * Later this module will be replaced by the backend API
 * (GET /api/videos/), so keep the shape here identical to the future
 * API contract. Components must read videos through the helpers below —
 * swapping the data source later must not require rewriting the UI.
 */

export const videoCategories = ['Sermons', 'Worship', 'Bible Study', 'Church Events'];

export const videos = [
  {
    id: 1,
    slug: 'walking-in-the-light',
    titleEn: 'Walking in the Light',
    titleTa: 'வெளிச்சத்தில் நடத்தல்',
    descriptionEn:
      'A message about living each day in the light of God’s word, even when the road ahead feels unclear. (Demo video — sample sermon for preview.)',
    descriptionTa:
      'வழி முன்னே தெளிவாகத் தெரியாதபோதும், தேவ வார்த்தையின் வெளிச்சத்தில் நாள்தோறும் வாழ்வது பற்றிய ஒரு செய்தி. (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான பிரசங்கம்.)',
    category: 'Sermons',
    youtubeId: 'M7lc1UVf-VE',
    date: '2026-08-09',
    thumbnail: '',
    duration: '31:24',
  },
  {
    id: 2,
    slug: 'grace-that-saves',
    titleEn: 'Grace That Saves',
    titleTa: 'இரட்சிக்கும் கிருபை',
    descriptionEn:
      'Understanding the free gift of grace and how it changes the way we see ourselves and others. (Demo video — sample sermon for preview.)',
    descriptionTa:
      'இலவசமாகக் கிடைக்கும் கிருபை எப்படி நம்மையும் பிறரையும் நாம் பார்க்கும் விதத்தை மாற்றுகிறது என்பதைப் புரிந்துகொள்ளுதல். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான பிரசங்கம்.)',
    category: 'Sermons',
    youtubeId: 'dQw4w9WgXcQ',
    date: '2026-08-02',
    thumbnail: '',
    duration: '28:47',
  },
  {
    id: 3,
    slug: 'hope-for-today',
    titleEn: 'Hope for Today',
    titleTa: 'இன்றைக்கான நம்பிக்கை',
    descriptionEn:
      'Where to find real hope when the news is heavy and the days feel long. (Demo video — sample sermon for preview.)',
    descriptionTa:
      'செய்திகள் கனமாகவும் நாட்கள் நீண்டதாகவும் இருக்கும்போது, உண்மையான நம்பிக்கையை எங்கே காணலாம். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான பிரசங்கம்.)',
    category: 'Sermons',
    youtubeId: 'jNQXAC9IVRw',
    date: '2026-07-26',
    thumbnail: '',
    duration: '26:10',
  },
  {
    id: 4,
    slug: 'sunday-worship-service',
    titleEn: 'Sunday Worship Service',
    titleTa: 'ஞாயிறு ஆராதனை',
    descriptionEn:
      'A full Sunday morning service — songs of praise, prayer, and a word of encouragement. (Demo video — sample worship service for preview.)',
    descriptionTa:
      'ஒரு முழு ஞாயிறு காலை ஆராதனை — துதிப் பாடல்கள், ஜெபம், ஊக்கமளிக்கும் வார்த்தை. (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான ஆராதனை.)',
    category: 'Worship',
    youtubeId: '9bZkp7q19f0',
    date: '2026-07-19',
    thumbnail: '',
    duration: '58:02',
  },
  {
    id: 5,
    slug: 'evening-praise-gathering',
    titleEn: 'Evening Praise Gathering',
    titleTa: 'மாலை துதி ஆராதனை',
    descriptionEn:
      'An intimate evening of congregational praise and thanksgiving. (Demo video — sample worship service for preview.)',
    descriptionTa:
      'சபையார் ஒன்றுகூடி நன்றியுடன் துதி செய்யும் நெருக்கமான மாலை நேரம். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான ஆராதனை.)',
    category: 'Worship',
    youtubeId: 'kJQP7kiw5Fk',
    date: '2026-07-12',
    thumbnail: '',
    duration: '42:36',
  },
  {
    id: 6,
    slug: 'worship-through-song',
    titleEn: 'Worship Through Song',
    titleTa: 'பாடலின் மூலம் வழிபாடு',
    descriptionEn:
      'Why singing together shapes our hearts and draws us closer to God. (Demo video — sample worship teaching for preview.)',
    descriptionTa:
      'ஒன்றாகப் பாடுவது ஏன் நம் இருதயங்களை வடிவமைத்து தேவனுக்கு நெருக்கமாக்குகிறது. (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான வழிபாட்டுப் போதனை.)',
    category: 'Worship',
    youtubeId: 'L_jWHffIx5E',
    date: '2026-07-05',
    thumbnail: '',
    duration: '22:18',
  },
  {
    id: 7,
    slug: 'the-word-in-our-hearts',
    titleEn: 'The Word in Our Hearts',
    titleTa: 'இருதயத்தில் வேத வசனம்',
    descriptionEn:
      'Practical ways to hide God’s word in your heart and let it shape daily decisions. (Demo video — sample Bible study for preview.)',
    descriptionTa:
      'தேவ வார்த்தையை இருதயத்தில் சேகரித்து, அது தினசரி முடிவுகளை வடிவமைக்க விடுவதற்கான நடைமுறை வழிகள். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான வேதப் பயிற்சி.)',
    category: 'Bible Study',
    youtubeId: 'JGwWNGJdvx8',
    date: '2026-06-28',
    thumbnail: '',
    duration: '35:41',
  },
  {
    id: 8,
    slug: 'psalm-23-explained',
    titleEn: 'Psalm 23 Explained',
    titleTa: 'சங்கீதம் 23 விளக்கம்',
    descriptionEn:
      'Walking verse by verse through the shepherd’s psalm and its comfort for every season. (Demo video — sample Bible study for preview.)',
    descriptionTa:
      'மேய்ப்பனின் சங்கீதத்தை வசனம் வசனமாகக் கடந்து, ஒவ்வொரு காலத்திற்கும் அது தரும் ஆறுதலைக் காணுதல். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான வேதப் பயிற்சி.)',
    category: 'Bible Study',
    youtubeId: 'fJ9rUzIMcZQ',
    date: '2026-06-21',
    thumbnail: '',
    duration: '33:19',
  },
  {
    id: 9,
    slug: 'youth-fellowship-night',
    titleEn: 'Youth Fellowship Night',
    titleTa: 'இளைஞர் சகவாச இரவு',
    descriptionEn:
      'Highlights from our monthly youth gathering — games, sharing, and a short challenge. (Demo video — sample church event for preview.)',
    descriptionTa:
      'மாதாந்திர இளைஞர் கூட்டத்தின் சிறப்பம்சங்கள் — விளையாட்டுகள், அனுபவப் பகிர்வு, ஒரு சிறிய சவால். (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான சபை நிகழ்வு.)',
    category: 'Church Events',
    youtubeId: 'kXYiU_JCYtU',
    date: '2026-06-14',
    thumbnail: '',
    duration: '14:52',
  },
  {
    id: 10,
    slug: 'new-year-celebration',
    titleEn: 'New Year Celebration',
    titleTa: 'புத்தாண்டு கொண்டாட்டம்',
    descriptionEn:
      'A look back at our New Year service of prayer, testimony and fellowship. (Demo video — sample church event for preview.)',
    descriptionTa:
      'ஜெபம், சாட்சியம், சகவாசம் ஆகியவற்றுடன் நடந்த எங்கள் புத்தாண்டு ஆராதனையின் ஒரு பார்வை. (மாதிரிக் காணொளி — முன்னோட்டத்திற்கான சபை நிகழ்வு.)',
    category: 'Church Events',
    youtubeId: 'aqz-KE-bpKQ',
    date: '2026-01-01',
    thumbnail: '',
    duration: '19:08',
  },
];

/* ------------------------------------------------------------------
   Helpers — keep these thin so swapping in the API later is trivial.
   Components must only use these helpers (never `videos` directly
   where a selector exists), so GET /api/videos/ can replace this
   module without rewriting the UI.
------------------------------------------------------------------ */

/** All unique categories, in display order. */
export function getCategories() {
  return videoCategories;
}

/** Find a single video by its slug. */
export function getVideoBySlug(slug) {
  return videos.find((video) => video.slug === slug) ?? null;
}

/** The featured / newest video (used on the home page preview). */
export function getLatestVideo() {
  return videos[0] ?? null;
}

/**
 * Filter + search the library.
 * `query` matches English title, Tamil title, category, and both
 * descriptions. `category` filters to a single category (or "All").
 */
export function filterVideos({ query = '', category = 'All' }) {
  const q = query.trim().toLowerCase();
  return videos.filter((video) => {
    const matchesCategory = category === 'All' || video.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      video.titleEn.toLowerCase().includes(q) ||
      video.titleTa.toLowerCase().includes(q) ||
      video.category.toLowerCase().includes(q) ||
      video.descriptionEn.toLowerCase().includes(q) ||
      video.descriptionTa.toLowerCase().includes(q)
    );
  });
}

/**
 * Related videos for a detail page — same category first, then other
 * categories, never including the current video. Max `limit` results.
 */
export function getRelatedVideos(slug, limit = 3) {
  const current = videos.find((video) => video.slug === slug);
  if (!current) return [];
  const sameCategory = videos.filter(
    (video) => video.slug !== slug && video.category === current.category,
  );
  const others = videos.filter(
    (video) => video.slug !== slug && video.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/* ------------------------------------------------------------------
   YouTube URL builders — the only place YouTube URL formats live.
------------------------------------------------------------------ */

/** Standard thumbnail served by YouTube (no local downloads needed). */
export function getYouTubeThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

/** Embed URL used by the responsive <iframe> player. */
export function getYouTubeEmbedUrl(youtubeId) {
  return `https://www.youtube.com/embed/${youtubeId}`;
}

/** "Watch on YouTube" link — opens the video's own page in a new tab. */
export function getYouTubeWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
