/**
 * Central place for church information that is NOT translated
 * (image paths, links, structure). Text lives in ./translations.js.
 *
 * Placeholders in square brackets are intentional — they will be
 * replaced with real details when available.
 */

export const site = {
  name: 'Church Of Christ',
  nameTamil: 'கிறிஸ்துவின் சபை',
  tagline: 'The Word is Light',
  taglineTamil: 'வேதமே வெளிச்சம்',

  images: {
    logo: '/images/logo.jpeg',
    hero: '/images/hero-church.jpeg',
    about: '/images/congregation-group.jpeg',
    building: '/images/building-front.jpeg',
    buildingAlt: '/images/building-alt.jpeg',
    pastor: '/images/pastor-arumugam.jpeg',
    assistantPastor: '/images/assistant-pastor.jpg',
    kids: '/images/kids-event.jpg',
    youth: '/images/youth-group.jpg',
    newYear: '/images/newyear-event.jpg',
    elders: '/images/elders-group.jpg',
  },

  /* Navigation — hrefs point to section anchors. Songs/Videos are
     future pages and keep their anchors for when they are built. */
  nav: [
    { id: 'home', key: 'home', href: '#home' },
    { id: 'about', key: 'about', href: '#about' },
    { id: 'ministries', key: 'ministries', href: '#ministries' },
    { id: 'songs', key: 'songs', href: '#songs' },
    { id: 'videos', key: 'videos', href: '#videos' },
    { id: 'visit', key: 'visit', href: '#visit' },
  ],

  serviceTimes: [
    { id: 'sunday-1', key: 'sundayMorning', time: '9:00 AM' },
    { id: 'sunday-2', key: 'sundayLate', time: '11:00 AM' },
    { id: 'wednesday', key: 'wednesday', time: '7:00 PM' },
  ],

  contact: {
    phone: '[Phone Number]',
    email: '[Email Address]',
    address: '[Street Address]',
    addressLine2: 'Dindukkal, Tamil Nadu, India',
  },

  /* Placeholders — real URLs to be added later. */
  socials: [
    { id: 'youtube', label: 'YouTube', href: '#' },
    { id: 'facebook', label: 'Facebook', href: '#' },
    { id: 'instagram', label: 'Instagram', href: '#' },
  ],

  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Dindukkal,Tamil Nadu,India',
};

/** LocalStorage key for the language preference. */
export const LANGUAGE_STORAGE_KEY = 'ks-church-language';
