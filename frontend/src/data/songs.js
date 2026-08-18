/**
 * DEMO song data for the Songs / Lyrics library.
 *
 * NOTE: These are ORIGINAL demo lyrics written for this prototype.
 * They are not real hymns and are not copied from any source.
 * Later this module will be replaced by the backend API (GET /api/songs/),
 * so keep the shape here identical to the future API contract.
 *
 * Each song has structured lyrics — an array of sections (Verse / Chorus /
 * Bridge…), each with a label and an array of lines. This lets the UI
 * style each section separately and renders beautifully in print/PDF.
 */

export const songCategories = ['Worship', 'Praise', 'Hymns', 'Devotional'];

export const songs = [
  {
    id: 1,
    slug: 'light-of-your-word',
    songNumber: '01',
    titleEn: 'Light of Your Word',
    titleTa: 'உமது வார்த்தையின் வெளிச்சம்',
    category: 'Worship',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'When the morning wakes the skies',
          'And the shadows fade away',
          'Your word shines bright within my heart',
          'And guides me through the day',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Light of Your word, lead me on',
          'Through the night till the dawn',
          'In Your truth I find my way',
          'Lord, be with me every day',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'When I walk through valleys deep',
          'And I cannot see the road',
          'Your promises are lamp to feet',
          'And comfort for my soul',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'விடியல் வானில் ஒளி பரவிட',
          'இருள் எல்லாம் மறைந்திட',
          'உம் வார்த்தை என் உள்ளத்தில் ஒளிரும்',
          'நாள் முழுவதும் என்னை நடத்திடும்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'உம் வார்த்தை ஒளியே என்னை நடத்தும்',
          'இரவு கடந்து விடியல் வரை',
          'உம் சத்தியத்தில் நான் வழி காண்பேன்',
          'கர்த்தாவே நாளும் என்னுடன் இருப்பீர்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'ஆழமான பள்ளத்தில் நடக்கையில்',
          'வழி தெரியாது திகைக்கையில்',
          'உம் வாக்குத்தத்தம் என் காலுக்கு விளக்கு',
          'என் ஆத்துமாவுக்கு ஆறுதல் தரும்',
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'jesus-is-our-light',
    songNumber: '02',
    titleEn: 'Jesus Is Our Light',
    titleTa: 'இயேசுவே எங்கள் ஒளி',
    category: 'Praise',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Jesus is our light and hope',
          'The morning star that never dims',
          'He calms the storm and stills the sea',
          'And bids our hearts to sing',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Jesus, Jesus, precious name',
          'Every tongue His love proclaim',
          'Lift your voice, let praises ring',
          'Jesus Christ is Lord and King',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'He broke the chains of sin and death',
          'And rose in victory',
          'The gates of heaven stand open wide',
          'For all who will believe',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'இயேசுவே எங்கள் ஒளியும் நம்பிக்கையும்',
          'மங்காத காலை நட்சத்திரம்',
          'புயலை அடக்கி கடலைத் தணிப்பவர்',
          'எங்கள் இருதயம் பாட அழைப்பவர்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'இயேசு, இயேசு, இனிய நாமம்',
          'எல்லா நாவும் அவர் அன்பைப் பாடும்',
          'குரல் எழுப்பி துதி பாடுங்கள்',
          'இயேசு கிறிஸ்துவே ஆண்டவர் ராஜா',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'பாவத்தின் சங்கிலியை உடைத்தவர்',
          'வெற்றியுடன் உயிர்த்தெழுந்தவர்',
          'வானத்தின் வாசல் திறந்துள்ளது',
          'விசுவாசிப்போர் அனைவருக்கும்',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'come-let-us-worship',
    songNumber: '03',
    titleEn: 'Come, Let Us Worship',
    titleTa: 'வாருங்கள் தொழுது கொள்வோம்',
    category: 'Worship',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Come, let us worship with one heart',
          'Before the throne of grace',
          'With thankful songs and humble prayer',
          'We seek the Father’s face',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Holy, holy is the Lord',
          'Worthy of our every word',
          'Glory, glory to His name',
          'Forever we proclaim',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'He clothes the lilies of the field',
          'And feeds the birds that fly',
          'How much more will He care for us',
          'Whom He calls His own',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'வாருங்கள் ஒரே இருதயத்துடன் தொழுவோம்',
          'கிருபையின் சிங்காசனத்தின் முன்',
          'நன்றி பாடலுடன் தாழ்மை ஜெபத்துடன்',
          'பிதாவின் முகத்தை நாடுவோம்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'பரிசுத்தர், பரிசுத்தர் கர்த்தர்',
          'நம் ஒவ்வொரு வார்த்தைக்கும் தகுதியானவர்',
          'மகிமை, மகிமை அவர் நாமத்திற்கு',
          'என்றென்றும் நாம் அறிவிப்போம்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'வயலின் அல்லிகளை உடுத்துவிப்பவர்',
          'வானத்துப் பறவைகளுக்கு உணவளிப்பவர்',
          'தம்முடைய பிள்ளைகள் என்று அழைத்த',
          'நம்மை எத்தனையோ அதிகமாய் காப்பார்',
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'great-is-your-love',
    songNumber: '04',
    titleEn: 'Great Is Your Love',
    titleTa: 'உம் அன்பு மாபெரும்',
    category: 'Hymns',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Great is Your love, O Lord',
          'Higher than the stars above',
          'Deeper than the ocean floor',
          'Wider than the earth',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Your love will never fail',
          'Your mercy will not end',
          'From age to age You remain',
          'Our faithful, constant friend',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'When I was lost in sin',
          'You sought me tenderly',
          'You washed my guilt away',
          'And set my spirit free',
        ],
      },
      {
        label: 'Bridge',
        lines: [
          'Nothing can separate us',
          'From Your amazing love',
          'Neither life nor death nor powers above',
          'We are held secure',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'கர்த்தாவே உம் அன்பு மாபெரும்',
          'மேலே உள்ள நட்சத்திரங்களைவிட உயர்ந்தது',
          'கடலின் ஆழத்தைவிட ஆழமானது',
          'பூமியைவிட விசாலமானது',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'உம் அன்பு ஒருபோதும் தோல்வியடையாது',
          'உம் கிருபை முடிவடையாது',
          'தலைமுறை தலைமுறையாக நீர் நிலைத்திருப்பீர்',
          'எங்கள் உண்மையான நிலையான நண்பர்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'பாவத்தில் தொலைந்து கிடந்தபோது',
          'இரக்கத்துடன் என்னைத் தேடினீர்',
          'என் குற்றத்தைக் கழுவி',
          'என் ஆவியை விடுதலை செய்தீர்',
        ],
      },
      {
        label: 'பாலம்',
        lines: [
          'உம் அற்புத அன்பிலிருந்து',
          'நம்மைப் பிரிக்க ஒன்றுமில்லை',
          'ஜீவனும் மரணமும் மேலான வல்லமைகளும் இல்லை',
          'நாம் பத்திரமாய் காக்கப்படுகிறோம்',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'walk-with-me',
    songNumber: '05',
    titleEn: 'Walk With Me',
    titleTa: 'என்னோடு நடந்திடும்',
    category: 'Devotional',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Walk with me through the day',
          'Hold my hand along the way',
          'When my steps begin to tire',
          'Fill my heart with holy fire',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Walk with me, Lord, walk with me',
          'In the valley, by the sea',
          'Through the shadows, through the rain',
          'Let me hear Your voice again',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'When the night is long and cold',
          'And my faith grows weak and old',
          'Whisper peace into my soul',
          'Make me strong and make me whole',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'நாள் முழுவதும் என்னோடு நடந்திடும்',
          'வழி நெடுகிலும் என் கரம் பிடித்திடும்',
          'என் அடிகள் சோர்ந்து போகையில்',
          'என் உள்ளத்தைப் பரிசுத்த அனலால் நிரப்பும்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'கர்த்தாவே என்னோடு நடந்திடும்',
          'பள்ளத்திலும் கடலோரத்திலும்',
          'நிழல்களிலும் மழையிலும்',
          'உம் சத்தத்தை மீண்டும் கேட்க செய்யும்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'இரவு நீண்டு குளிர்ச்சியாக இருக்கையில்',
          'என் விசுவாசம் தளர்ந்து போகையில்',
          'என் ஆத்துமாவில் சமாதானம் பேசும்',
          'என்னைப் பலப்படுத்தி முழுமையாக்கும்',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'sing-to-the-lord',
    songNumber: '06',
    titleEn: 'Sing to the Lord',
    titleTa: 'கர்த்தருக்குப் பாடுங்கள்',
    category: 'Praise',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Sing to the Lord a brand new song',
          'Let every heart rejoice',
          'Tell of His wonders all day long',
          'Lift up a joyful voice',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Shout for joy, O earth below',
          'Let the hills and valleys know',
          'Every tongue and every land',
          'Clap your hands at His command',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'He made the heavens by His word',
          'The stars declare His name',
          'His truth and mercy are assured',
          'Forever He’s the same',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'கர்த்தருக்குப் புதிய பாடல் பாடுங்கள்',
          'ஒவ்வொரு இருதயமும் மகிழட்டும்',
          'நாள் முழுவதும் அவர் அற்புதங்களைச் சொல்லுங்கள்',
          'மகிழ்ச்சியான குரலை எழுப்புங்கள்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'பூமியே மகிழ்ச்சியுடன் கெம்பீரி',
          'மலைகளும் பள்ளங்களும் அறியட்டும்',
          'எல்லா நாவும் எல்லா தேசமும்',
          'அவர் கட்டளையில் கை தட்டுங்கள்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'வானங்களை அவர் வார்த்தையால் படைத்தார்',
          'நட்சத்திரங்கள் அவர் நாமத்தை அறிவிக்கும்',
          'அவர் சத்தியமும் கிருபையும் உறுதியானவை',
          'என்றென்றும் அவர் மாறாதவர்',
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'my-shepherds-care',
    songNumber: '07',
    titleEn: 'My Shepherd’s Care',
    titleTa: 'என் மேய்ப்பன் பராமரிப்பு',
    category: 'Hymns',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'The Lord is my shepherd, I shall not want',
          'In green pastures He leads me to rest',
          'Beside quiet waters He gently guides',
          'And He cares for my soul the best',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'My Shepherd, my Shepherd',
          'You lead me all the way',
          'Your goodness and mercy',
          'Shall follow me each day',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'Even in the valley of deepest shade',
          'I will not be afraid',
          'Your rod and Your staff, they comfort me',
          'Your presence will never fade',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'கர்த்தர் என் மேய்ப்பர், எனக்கு குறைவில்லை',
          'பசுமையான மேய்ச்சலில் என்னை இளைப்பாறச் செய்வார்',
          'அமைதியான தண்ணீர் ஓரத்தில் வழிநடத்துவார்',
          'என் ஆத்துமாவை நன்கு பராமரிப்பார்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'என் மேய்ப்பரே, என் மேய்ப்பரே',
          'வழி நெடுகிலும் என்னை நடத்துகிறீர்',
          'உம் நன்மையும் கிருபையும்',
          'நாள்தோறும் என்னைப் பின்தொடரும்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'இருள் நிறைந்த பள்ளத்தாக்கிலும்',
          'நான் பயப்படமாட்டேன்',
          'உம் தடியும் உம் கோலும் என்னைத் தேற்றும்',
          'உம் பிரசன்னம் என்றும் மறையாது',
        ],
      },
    ],
  },
  {
    id: 8,
    slug: 'morning-prayer',
    songNumber: '08',
    titleEn: 'Morning Prayer',
    titleTa: 'காலை ஜெபம்',
    category: 'Devotional',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'In the quiet of the morning',
          'Before the world awakes',
          'I lift my hands to heaven',
          'For Your mercy’s sake',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Hear my morning prayer, O Lord',
          'Let Your grace be poured',
          'Guide my thoughts and guard my ways',
          'Bless me through these coming days',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'As the sun begins to rise',
          'And fills the sky with gold',
          'Renew my strength and hope in You',
          'Your faithful love I hold',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'உலகம் விழித்தெழும் முன்',
          'காலையின் அமைதியில்',
          'உம் கிருபைக்காக',
          'வானத்தை நோக்கி என் கரங்களை ஏற்றுகிறேன்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'கர்த்தாவே என் காலை ஜெபத்தைக் கேளும்',
          'உம் கிருபையைப் பொழியும்',
          'என் எண்ணங்களை நடத்தி வழியைக் காத்திடும்',
          'வரும் நாட்களில் என்னை ஆசீர்வதிக்கும்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'சூரியன் எழுந்து வானை',
          'பொன்நிறமாக்கும்போது',
          'என் பெலனையும் உம்மீது நம்பிக்கையையும் புதுப்பியும்',
          'உம் உண்மையான அன்பைப் பற்றிக்கொள்கிறேன்',
        ],
      },
    ],
  },
  {
    id: 9,
    slug: 'the-word-is-light',
    songNumber: '09',
    titleEn: 'The Word Is Light',
    titleTa: 'வேதமே வெளிச்சம்',
    category: 'Worship',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'The word is light upon my path',
          'A lamp to show the way',
          'It speaks of hope in every line',
          'And truth that will not sway',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Word of God, shining bright',
          'Pierce the darkness with Your light',
          'Teach my heart, renew my mind',
          'In Your truth may I abide',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'When trials come and doubts arise',
          'Your promises hold fast',
          'I anchor deep in what You say',
          'A rock that always lasts',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'வேதமே என் பாதைக்கு வெளிச்சம்',
          'வழியைக் காட்டும் விளக்கு',
          'ஒவ்வொரு வரியிலும் நம்பிக்கை பேசும்',
          'அசையாத சத்தியத்தை உரைக்கும்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'தேவ வார்த்தையே பிரகாசமாக ஒளிரும்',
          'இருளை உம் ஒளியால் ஊடுருவும்',
          'என் இருதயத்தை போதித்து மனதைப் புதுப்பியும்',
          'உம் சத்தியத்தில் நான் நிலைத்திருக்க',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'சோதனைகளும் சந்தேகங்களும் வரும்போது',
          'உம் வாக்குத்தத்தங்கள் உறுதியாய் நிற்கும்',
          'நீர் சொன்னதில் ஆழமாக நங்கூரமிடுகிறேன்',
          'என்றும் நிலைக்கும் கன்மலையே',
        ],
      },
    ],
  },
  {
    id: 10,
    slug: 'gather-here',
    songNumber: '10',
    titleEn: 'Gather Here',
    titleTa: 'இங்கே கூடுவோம்',
    category: 'Praise',
    lyricsEn: [
      {
        label: 'Verse 1',
        lines: [
          'Come together, one and all',
          'Answering the Spirit’s call',
          'Young and old, we join as one',
          'In the shadow of God’s Son',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Gather here, gather here',
          'Let the love of God appear',
          'Hand in hand and heart to heart',
          'From His family we depart never',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          'Every tribe and every tongue',
          'One new song to Him is sung',
          'Broken walls are brought down low',
          'By the love He chose to show',
        ],
      },
    ],
    lyricsTa: [
      {
        label: 'சரணம் 1',
        lines: [
          'எல்லோரும் ஒன்றாகக் கூடுவோம்',
          'ஆவியின் அழைப்புக்கு பதிலளிப்போம்',
          'இளைஞரும் முதியோரும் ஒன்றாக இணைவோம்',
          'தேவனுடைய குமாரனின் நிழலில்',
        ],
      },
      {
        label: 'பல்லவி',
        lines: [
          'இங்கே கூடுவோம், இங்கே கூடுவோம்',
          'தேவ அன்பு வெளிப்படட்டும்',
          'கைகோர்த்து இருதயத்தோடு இருதயம்',
          'அவர் குடும்பத்திலிருந்து என்றும் பிரியாமல்',
        ],
      },
      {
        label: 'சரணம் 2',
        lines: [
          'எல்லா இனமும் எல்லா நாவும்',
          'அவருக்குப் புதிய பாடலைப் பாடும்',
          'இடிந்த சுவர்கள் தாழ்த்தப்படும்',
          'அவர் காட்டிய அன்பினால்',
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------
   Helpers — keep these thin so swapping in the API later is trivial.
------------------------------------------------------------------ */

/** All unique categories, in display order. */
export function getCategories() {
  return songCategories;
}

/** Find a single song by its slug. */
export function getSongBySlug(slug) {
  return songs.find((song) => song.slug === slug) ?? null;
}

/**
 * Filter + search the library.
 * `query` matches English title, Tamil title, and category.
 * `category` filters to a single category (or "All").
 */
export function filterSongs({ query = '', category = 'All' }) {
  const q = query.trim().toLowerCase();
  return songs.filter((song) => {
    const matchesCategory = category === 'All' || song.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      song.titleEn.toLowerCase().includes(q) ||
      song.titleTa.toLowerCase().includes(q) ||
      song.category.toLowerCase().includes(q)
    );
  });
}
