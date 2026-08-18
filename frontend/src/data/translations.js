/**
 * Centralized translations for the entire website.
 *
 * The same React components render different content based on the selected
 * language. Tamil (ta) is the default. Add new keys here — never hardcode
 * visible text inside components.
 *
 * NOTE: Tamil copy is written naturally (not machine-translated English).
 */

export const translations = {
  ta: {
    header: {
      planVisit: 'வருகையைத் திட்டமிடுங்கள்',
      openMenu: 'மெனுவைத் திற',
      closeMenu: 'மெனுவை மூடு',
    },
    nav: {
      home: 'முகப்பு',
      about: 'எங்களைப் பற்றி',
      ministries: 'ஊழியங்கள்',
      songs: 'பாடல்கள்',
      videos: 'காணொளிகள்',
      visit: 'வந்து சந்தியுங்கள்',
    },
    hero: {
      name: 'கிறிஸ்துவின் சபை',
      tagline: 'வேதமே வெளிச்சம்',
      supporting:
        'வழிபடவும், வளரவும், அன்போடு இணைந்து வாழவும் ஓர் இடம் — உங்களை அன்புடன் வரவேற்கிறோம்.',
      ctaPrimary: 'இந்த ஞாயிறு இணையுங்கள்',
      ctaSecondary: 'மேலும் அறிய',
      location: 'திண்டுக்கல், தமிழ்நாடு, இந்தியா',
      serviceTime: 'ஞாயிறு — காலை 9:00, 11:00 மணி',
    },
    about: {
      eyebrow: 'அன்புடன் வரவேற்கிறோம்',
      heading: 'நீங்கள் இங்கே வரவேற்கப்படுகிறீர்கள்',
      lead: 'கிறிஸ்துவின் சபை என்பது குடும்பங்கள், மாணவர்கள், புதியவர்கள் என அனைவருக்கும் இடமுள்ள அன்பான சபை.',
      body: 'நீங்கள் எப்படி வந்தாலும், இங்கே உங்களுக்கு இடமுண்டு. இயேசுவின் மீதான விசுவாசத்தில் வளரவும், உண்மையான சகோதரத்துவத்தை அனுபவிக்கவும், தேவனுடைய அன்பை ஒன்றாக அறிந்துகொள்ளவும் நாங்கள் உங்களை அழைக்கிறோம்.',
      storyLabel: 'எங்கள் வரலாறு',
      storyHint: 'விரைவில்',
      imageAlt: 'திண்டுக்கல் சபைக் கூட்டம் ஒன்றாக வழிபடுகிறது',
    },
    serviceTimes: {
      eyebrow: 'ஆராதனை நேரங்கள்',
      heading: 'எங்களுடன் ஆராதியுங்கள்',
      sub: 'ஒவ்வொரு ஞாயிறும் உங்களை அன்புடன் எதிர்பார்த்திருக்கிறோம்.',
      sundayMorning: { day: 'ஞாயிறு ஆராதனை', time: 'காலை 9:00 மணி' },
      sundayLate: { day: 'ஞாயிறு ஆராதனை', time: 'காலை 11:00 மணி' },
      wednesday: { day: 'வேதப் பயிற்சி', time: 'புதன் மாலை 7:00 மணி' },
      ctaDirections: 'வரும் வழி',
      ctaPlanVisit: 'வருகையைத் திட்டமிடுங்கள்',
    },
    ministries: {
      eyebrow: 'ஊழியங்கள்',
      heading: 'ஒவ்வொருவருக்கும் இங்கே இடமுண்டு',
      sub: 'குழந்தைகள் முதல் பெரியோர் வரை — அனைவரும் வளரக்கூடிய ஊழியங்கள்.',
      children: {
        title: 'குழந்தைகள்',
        desc: 'பாதுகாப்பான, மகிழ்ச்சியான சூழலில் குழந்தைகள் இயேசுவை அறிந்துகொள்கிறார்கள்.',
      },
      youth: {
        title: 'இளைஞர்',
        desc: 'இளைஞர்கள் ஒன்றுகூடி, விசுவாசத்தில் வளர்ந்து, சமுதாயத்தில் ஒளியாக வாழ்கிறார்கள்.',
      },
      worship: {
        title: 'ஆராதனை',
        desc: 'பாடலும் வசனமும் இணைந்து, இருதயத்திலிருந்து எழும் வழிபாடு.',
      },
      families: {
        title: 'குடும்பங்கள்',
        desc: 'குடும்பங்கள் ஒன்றாக வளரவும், அன்பில் பலப்படவும் உதவும் ஊழியம்.',
      },
      bibleStudy: {
        title: 'வேத பயிற்சி',
        desc: 'தேவ வசனத்தை ஆழமாக அறிந்து, வாழ்வில் நடைமுறைப்படுத்த உறுதுணை.',
      },
      missions: {
        title: 'மிஷன்',
        desc: 'நற்செய்தியை நம் சுற்றுப்புறத்திலிருந்து உலகம் முழுவதும் கொண்டு செல்வது.',
      },
    },
    latestVideo: {
      eyebrow: 'காணொளி',
      heading: 'சமீபத்திய செய்தி',
      sub: 'இந்த வாரச் செய்தியைக் காணுங்கள்.',
      speakerLabel: 'போதகர்',
      speaker: 'ஈ.ஏ. அருமுகம்',
      watchLabel: 'பார்க்க',
      comingSoon: 'விரைவில்',
      note: 'காணொளி இங்கு விரைவில் சேர்க்கப்படும்.',
      imageAlt: 'போதகர் ஈ.ஏ. அருமுகம் பிரசங்கம்',
    },
    leadership: {
      eyebrow: 'தலைமை',
      heading: 'எங்களை வழிநடத்துபவர்கள்',
      sub: 'இந்த சபையை அன்போடும் உண்மையோடும் வழிநடத்தும் தலைவர்கள்.',
      preacher: {
        name: 'ஈ.ஏ. அருமுகம்',
        role: 'பிரசங்கி',
      },
      assistantPreacher: {
        name: '[பெயர் சேர்க்கப்படும்]',
        role: 'உதவிப் பிரசங்கி',
      },
    },
    dailyVerse: {
      eyebrow: 'தினசரி தியானம்',
      heading: 'நாள்தோறும் வேத வசனம்',
      note: 'ஒவ்வொரு நாளும் தேவ வசனத்தில் தியானியுங்கள்.',
      example: {
        verse:
          '“நானே உலகத்திற்கு வெளிச்சம்; என்னைப் பின்பற்றுகிறவன் இருளிலே நடவாமல் ஜீவ வெளிச்சத்தைப் பெறுவான்.”',
        reference: 'யோவான் 8:12',
      },
    },
    prayer: {
      heading: 'ஜெபம் தேவையா?',
      text: 'எல்லாவற்றையும் நீங்கள் மட்டும் சுமக்க வேண்டியதில்லை. உங்களுக்காக நாங்கள் ஜெபிக்க விரும்புகிறோம்.',
      cta: 'ஜெபக் கோரிக்கை சமர்ப்பிக்கவும்',
    },
    visit: {
      eyebrow: 'வருகை',
      heading: 'எங்களைச் சந்திக்க வாருங்கள்',
      sub: 'ஒரு ஞாயிறு காலையில் எங்களுடன் ஆராதியுங்கள். உங்களை எதிர்பார்த்திருப்போம்.',
      location: 'திண்டுக்கல், தமிழ்நாடு, இந்தியா',
      addressLine2: 'திண்டுக்கல், தமிழ்நாடு, இந்தியா',
      sundayLabel: 'ஞாயிறு',
      ctaDirections: 'வரும் வழி',
      ctaContact: 'தொடர்பு கொள்ளுங்கள்',
      imageAlt: 'திண்டுக்கல் சபைக் கட்டிடம்',
    },
    footer: {
      description: 'திண்டுக்கல்லில் அமைந்துள்ள அன்பான சபை. வேதமே வெளிச்சம்.',
      navHeading: 'வழிசெலுத்தல்',
      servicesHeading: 'ஆராதனை நேரங்கள்',
      contactHeading: 'தொடர்பு',
      address: '[தெரு முகவரி]',
      addressLine2: 'திண்டுக்கல், தமிழ்நாடு, இந்தியா',
      city: 'திண்டுக்கல்',
      sunday9: 'ஞாயிறு — காலை 9:00 மணி',
      sunday11: 'ஞாயிறு — காலை 11:00 மணி',
      wednesday: 'வேதப் பயிற்சி — புதன் மாலை 7:00 மணி',
      rights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
    songs: {
      eyebrow: 'பாடல் நூலகம்',
      title: 'பாடல்கள்',
      subtitle: 'எங்கள் சபையின் பாடல்களைத் தேடி வாசியுங்கள்.',
      searchLabel: 'தேடு',
      searchPlaceholder: 'பாடலின் பெயர் அல்லது வகையைத் தேடுங்கள்…',
      clear: 'அழி',
      all: 'அனைத்தும்',
      categories: {
        Worship: 'வழிபாடு',
        Praise: 'துதி',
        Hymns: 'பாடல்கள்',
        Devotional: 'பக்திப் பாடல்கள்',
      },
      noResults: 'பாடல்கள் எதுவும் கிடைக்கவில்லை.',
      resetFilters: 'தேடலை மீட்டமை',
      view: 'பார்',
      backToSongs: 'பாடல்களுக்குத் திரும்பு',
      songNumberLabel: 'பாடல்',
      languageLabel: 'மொழி',
      download: 'பாடல் வரிகளைப் பதிவிறக்கு',
      print: 'பாடல் வரிகளை அச்சிடு',
      notFoundTitle: 'பாடல் கிடைக்கவில்லை',
      notFoundText: 'நீங்கள் தேடிய பாடல் கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்.',
      notFoundAction: 'பாடல் நூலகத்திற்குச் செல்லுங்கள்',
      pdfLoading: 'தயாராகிறது…',
      demoNote:
        'இவை இந்த முன்னோட்டத்திற்காக எழுதப்பட்ட மாதிரிப் பாடல் வரிகள். விரைவில் உண்மையான பாடல் வரிகள் இங்கே சேர்க்கப்படும்.',
    },
  },

  en: {
    header: {
      planVisit: 'Plan Your Visit',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    nav: {
      home: 'Home',
      about: 'About',
      ministries: 'Ministries',
      songs: 'Songs',
      videos: 'Videos',
      visit: 'Visit Us',
    },
    hero: {
      name: 'Church Of Christ',
      tagline: 'The Word is Light',
      supporting:
        'A place to worship, grow and belong — you are warmly welcome here.',
      ctaPrimary: 'Join Us This Sunday',
      ctaSecondary: 'Learn More',
      location: 'Dindigul, Tamil Nadu, India',
      serviceTime: 'Sunday — 9:00 AM & 11:00 AM',
    },
    about: {
      eyebrow: 'A warm welcome',
      heading: 'You are welcome here.',
      lead: 'Church of Christ is a loving community where families, students and newcomers all have a place.',
      body: 'However you arrive, there is room for you here. We invite you to grow in faith in Jesus, to experience genuine fellowship, and to know God’s love together.',
      storyLabel: 'Our Story',
      storyHint: 'Coming soon',
      imageAlt: 'The congregation of Church of Christ, Dindigul, worshipping together',
    },
    serviceTimes: {
      eyebrow: 'Service Times',
      heading: 'Worship with us',
      sub: 'We look forward to welcoming you every Sunday.',
      sundayMorning: { day: 'Sunday Service', note: 'Morning' },
      sundayLate: { day: 'Sunday Service', note: 'Morning' },
      wednesday: { day: 'Bible Study', note: 'Wednesday Evening' },
      ctaDirections: 'Get Directions',
      ctaPlanVisit: 'Plan Your Visit',
    },
    ministries: {
      eyebrow: 'Ministries',
      heading: 'A place for everyone',
      sub: 'From children to elders — ministries where everyone can grow.',
      children: {
        title: 'Children',
        desc: 'Children come to know Jesus in a safe, joyful environment.',
      },
      youth: {
        title: 'Youth',
        desc: 'Young people gather, grow in faith and live as light in the community.',
      },
      worship: {
        title: 'Worship',
        desc: 'Heartfelt worship rising through song and word.',
      },
      families: {
        title: 'Families',
        desc: 'A ministry that helps families grow together and be strengthened in love.',
      },
      bibleStudy: {
        title: 'Bible Study',
        desc: 'Digging deeper into God’s Word and living it out daily.',
      },
      missions: {
        title: 'Missions',
        desc: 'Carrying the good news from our neighbourhood to the world.',
      },
    },
    latestVideo: {
      eyebrow: 'Video',
      heading: 'Latest Message',
      sub: 'Watch this week’s message.',
      speakerLabel: 'Pastor',
      speaker: 'E.A. Arumugam',
      watchLabel: 'Watch',
      comingSoon: 'Coming soon',
      note: 'Videos will be added here shortly.',
      imageAlt: 'Pastor E.A. Arumugam preaching',
    },
    leadership: {
      eyebrow: 'Leadership',
      heading: 'Those who lead us',
      sub: 'Leaders who guide this church with love and faithfulness.',
      preacher: {
        name: 'E.A. Arumugam',
        role: 'Preacher',
      },
      assistantPreacher: {
        name: '[Name to be added]',
        role: 'Assistant Preacher',
      },
    },
    dailyVerse: {
      eyebrow: 'Daily Devotion',
      heading: 'Daily Bible Verse',
      note: 'Meditate on God’s Word every day.',
      example: {
        verse:
          '“I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.”',
        reference: 'John 8:12',
      },
    },
    prayer: {
      heading: 'Need Prayer?',
      text: 'You don’t have to carry everything alone. We would love to pray for you.',
      cta: 'Submit a Prayer Request',
    },
    visit: {
      eyebrow: 'Visit',
      heading: 'Come Visit Us',
      sub: 'Worship with us on a Sunday morning. We will be expecting you.',
      location: 'Dindigul, Tamil Nadu, India',
      addressLine2: 'Dindigul, Tamil Nadu, India',
      sundayLabel: 'Sunday',
      ctaDirections: 'Get Directions',
      ctaContact: 'Contact Us',
      imageAlt: 'The Church of Christ building in Dindigul',
    },
    footer: {
      description: 'A loving church in Dindigul. The Word is Light.',
      navHeading: 'Navigation',
      servicesHeading: 'Service Times',
      contactHeading: 'Contact',
      address: '[Street Address]',
      addressLine2: 'Dindigul, Tamil Nadu, India',
      city: 'Dindigul',
      sunday9: 'Sunday — 9:00 AM',
      sunday11: 'Sunday — 11:00 AM',
      wednesday: 'Bible Study — Wednesday 7:00 PM',
      rights: 'All rights reserved.',
    },
    songs: {
      eyebrow: 'Song Library',
      title: 'Songs',
      subtitle: 'Browse and read the songs of our church.',
      searchLabel: 'Search',
      searchPlaceholder: 'Search by song title or category…',
      clear: 'Clear',
      all: 'All',
      categories: {
        Worship: 'Worship',
        Praise: 'Praise',
        Hymns: 'Hymns',
        Devotional: 'Devotional',
      },
      noResults: 'No songs found.',
      resetFilters: 'Reset search',
      view: 'View',
      backToSongs: 'Back to Songs',
      songNumberLabel: 'Song',
      languageLabel: 'Language',
      download: 'Download Lyrics',
      print: 'Print Lyrics',
      notFoundTitle: 'Song Not Found',
      notFoundText: 'The song you are looking for could not be found. Please try again.',
      notFoundAction: 'Back to the song library',
      pdfLoading: 'Preparing…',
      demoNote:
        'These are demo lyrics written for this preview. Real song lyrics will be added here soon.',
    },
  },
};

export const DEFAULT_LANGUAGE = 'ta';
export const SUPPORTED_LANGUAGES = ['ta', 'en'];
