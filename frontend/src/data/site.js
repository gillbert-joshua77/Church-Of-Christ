/**
 * Central place for church information that is NOT translated
 * (image paths, links, structure). Text lives in ./translations.js.
 *
 * Placeholders in square brackets are intentional — they will be
 * replaced with real details when available.
 */

import logo from '../assets/images/logo.jpeg';
import hero from '../assets/images/hero-church.jpeg';
import about from '../assets/images/congregation-group.jpeg';
import building from '../assets/images/building-front.jpeg';
import buildingAlt from '../assets/images/building-alt.jpeg';
import pastor from '../assets/images/pastor-arumugam.jpeg';
import assistantPastor from '../assets/images/assistant-pastor.jpg';
import kids from '../assets/images/kids-event.jpg';
import youth from '../assets/images/youth-group.jpg';
import newYear from '../assets/images/newyear-event.jpg';
import elders from '../assets/images/elders-group.jpg';

export const site = {
  name: 'Church Of Christ',
  nameTamil: 'கிறிஸ்துவின் சபை',
  tagline: 'The Word is Light',
  taglineTamil: 'வேதமே வெளிச்சம்',

  images: {
    logo,
    hero,
    about,
    building,
    buildingAlt,
    pastor,
    assistantPastor,
    kids,
    youth,
    newYear,
    elders,
  },

  /* Navigation — in-app links use react-router paths. Section links
     (home page anchors) point to /#anchor so they work from any page.
     Songs and Videos are real pages at /songs and /videos. */
  nav: [
    { id: 'home', key: 'home', href: '/' },
    { id: 'about', key: 'about', href: '/#about' },
    { id: 'ministries', key: 'ministries', href: '/#ministries' },
    { id: 'songs', key: 'songs', href: '/songs' },
    { id: 'videos', key: 'videos', href: '/videos' },
    { id: 'visit', key: 'visit', href: '/#visit' },
  ],

  serviceTimes: [
    { id: 'sunday', key: 'sunday', time: '9:00 AM – 11:30 AM' },
  ],

  contact: {
    phone: '9943978833',
    email: 'michell8833@gmail.com',
    address: '9X6Q+93C, Malligai St, Ram Nagar, Elil Nagar,',
    addressLine2: 'Dindigul, Tamil Nadu, India',
  },

  /* Placeholders — real URLs to be added later. */
  socials: [
    { id: 'youtube', label: 'YouTube', href: '#' },
    { id: 'facebook', label: 'Facebook', href: '#' },
    { id: 'instagram', label: 'Instagram', href: '#' },
  ],

  googleMapsDirectionsUrl: 'https://www.google.com/maps/place/Church+of+Christ+,Dindigul/@10.3607102,77.9850303,17z/data=!4m6!3m5!1s0x3b00ab7263e8da79:0x6d84ea76844a3d61!8m2!3d10.3609486!4d77.9876529!16s%2Fg%2F11pv0kttbf?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D',
};

/** LocalStorage key for the language preference. */
export const LANGUAGE_STORAGE_KEY = 'ks-church-language';
