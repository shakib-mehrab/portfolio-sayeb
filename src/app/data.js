import { Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';

import heroImage from './assets/images/heroimae.jpg';
import dreamImage from './assets/images/dreamphoto.jpg';
import classroomImage from './assets/images/classroomphoto.jpg';
import bookReadImage from './assets/images/bookread.jpg';
import bookReadImage2 from './assets/images/bookread2.jpg';
import bookReadImage3 from './assets/images/bookread3.jpg';
import portraitImage from './assets/images/randomphoto.jpg';
import streetImage from './assets/images/randomphoto1.jpg';

import adDeenIcon from './assets/images/ad-deen/icon-192.png';
import adDeenHome from './assets/images/ad-deen/home-day.webp';
import adDeenHomeNight from './assets/images/ad-deen/home-night.webp';
import adDeenWakt from './assets/images/ad-deen/wakt-day.webp';
import adDeenTracker from './assets/images/ad-deen/tracker-day.webp';
import adDeenAzkhar from './assets/images/ad-deen/azkhar-day.webp';

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/tasnim.sayeb.2025/', color: '#4F7DF7', username: 'tasnim.sayeb.2025' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/tasnim_sayeb/', color: '#FF7AA2', username: '@tasnim_sayeb' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/8801878909306', color: '#4ADE80', username: '01878909306' },
  { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/tasnim_sayeb', color: '#9B7BFF', username: '@tasnim_sayeb' },
];

export const portfolioData = {
  site: {
    brand: "Sayeb's Universe",
  },

  // Order here is the order of the planets in the bottom navigation.
  nav: [
    { id: 'home', label: 'Home', color: 'var(--sp-gold)', size: 14, sun: true },
    { id: 'about', label: 'About', color: 'var(--sp-cyan)', size: 9 },
    { id: 'projects', label: 'Ad-Deen', color: 'var(--sp-gold)', size: 12 },
    { id: 'hobbies', label: 'Hobbies', color: 'var(--sp-pink)', size: 10 },
    { id: 'dreams', label: 'Dreams', color: 'var(--sp-violet)', size: 11 },
    { id: 'missions', label: 'Missions', color: 'var(--sp-green)', size: 9 },
    { id: 'contact', label: 'Contact', color: 'var(--sp-cyan)', size: 8 },
  ],

  hero: {
    kicker: 'Transmission #001 · Hello, Universe',
    firstLine: 'Tasnim Al Hossain',
    secondLine: 'Sayeb',
    roles: ['Student', 'App Designer', 'Future Astronomer'],
    classLabel: 'Class 7',
    schoolName: 'Radiance School & College',
    intro: 'A curious explorer who reads, learns languages, looks up at the stars, and has already helped design a real Android app.',
    profileImageUrl: heroImage,
    profileImageAlt: 'Tasnim Al Hossain Sayeb',
    moonImageUrl: adDeenIcon,
    primaryCta: { label: 'Explore my universe', target: 'about' },
    secondaryCta: { label: 'See Ad-Deen', target: 'projects' },
    socialLinks,
  },

  about: {
    index: '01',
    kicker: 'About me',
    title: 'Who is the explorer?',
    profileImageUrl: classroomImage,
    profileImageAlt: 'Sayeb sitting in his classroom',
    name: 'Tasnim Al Hossain Sayeb',
    classLabel: 'Class 7',
    schoolName: 'Radiance School & College',
    paragraphs: [
      'I love discovering new things: learning languages, reading books, exploring science, and imagining the future.',
      'I also helped design Ad-Deen, a real Android app. Working on it taught me that a good idea becomes great when it is simple, calm and easy to use.',
    ],
    facts: [
      { label: 'Class', value: '7' },
      { label: 'School', value: 'Radiance' },
      { label: 'Apps designed', value: '1' },
    ],
    traits: ['Curious', 'Creative', 'Passionate'],
    log: [
      { src: bookReadImage, caption: 'Book hunting 📚' },
      { src: bookReadImage3, caption: 'Lost in a story' },
      { src: bookReadImage2, caption: 'One more page…' },
      { src: streetImage, caption: 'Out exploring 🧭' },
    ],
  },

  projects: {
    kicker: 'The sun of my universe',
    title: "Things I've built",
    subtitle: 'Real apps, used by real people. Here is what I helped create.',
    items: [
      {
        name: 'Ad-Deen',
        tagline: 'A calm Islamic companion for Android',
        icon: adDeenIcon,
        role: 'Design & Feature Decisions',
        teammate: 'Built with developer Shakib Mehrab',
        description:
          'Ad-Deen gives accurate prayer times for all 64 districts of Bangladesh, alarms for every waqt, a daily amal tracker, azkhar and tasbih, in English and বাংলা. No ads, no tracking.',
        myPart: [
          'Helped decide how the app looks and feels: colours, screens and layout',
          'Came up with and chose many of the features inside the app',
          'Thought like a real user to keep it simple and calm',
        ],
        features: [
          { emoji: '🕌', label: 'Prayer times' },
          { emoji: '⏰', label: 'Waqt alarms' },
          { emoji: '💯', label: 'Amal tracker' },
          { emoji: '🔥', label: 'Streaks' },
          { emoji: '📿', label: 'Tasbih' },
          { emoji: '🌙', label: 'Night theme' },
          { emoji: '🌐', label: 'বাংলা' },
          { emoji: '☁️', label: 'Cloud sync' },
        ],
        stats: [
          { value: '7', label: 'prayer windows' },
          { value: '64', label: 'districts' },
          { value: '100', label: 'point tracker' },
        ],
        screenshots: [
          { src: adDeenWakt, alt: 'Ad-Deen prayer times screen', label: 'Prayer times' },
          { src: adDeenHome, alt: 'Ad-Deen home screen', label: 'Home (day)' },
          { src: adDeenHomeNight, alt: 'Ad-Deen home screen at night', label: 'Home (night)' },
          { src: adDeenTracker, alt: 'Ad-Deen amal tracker screen', label: 'Amal tracker' },
          { src: adDeenAzkhar, alt: 'Ad-Deen azkhar screen', label: 'Azkhar' },
        ],
        links: [
          { label: 'Download app', href: 'https://github.com/shakib-mehrab/ad-deen/releases/latest', primary: true },
          { label: 'See the code', href: 'https://github.com/shakib-mehrab/ad-deen' },
        ],
      },
    ],
  },

  hobbies: {
    index: '02',
    kicker: 'Hobbies',
    title: 'Planets I love visiting',
    subtitle: 'Every hobby is its own little world.',
    items: [
      { title: 'Book Reading', emoji: '📚', color: '#4F7DF7', description: 'Lost in stories', ring: true },
      { title: 'Language Learning', emoji: '🗣️', color: '#9B7BFF', description: 'Speaking the world' },
      { title: 'Watching Movies', emoji: '🎬', color: '#FF7AA2', description: 'Cinematic adventures' },
      { title: 'Badminton', emoji: '🏸', color: '#4ADE80', description: 'Smash and score', ring: true },
      { title: 'Astronomy', emoji: '🔭', color: '#FFC93C', description: 'Exploring the cosmos' },
      { title: 'Biology', emoji: '🧬', color: '#2DD4BF', description: 'How life works' },
      { title: 'Exploring Islam', emoji: '🕌', color: '#F59E0B', description: 'Faith, culture and values', ring: true },
    ],
  },

  dreams: {
    index: '03',
    kicker: 'Future me',
    title: 'Where my rocket is headed',
    subtitle: 'The journey of a thousand miles begins with a single dream.',
    image: dreamImage,
    imageAlt: 'Sayeb looking at a poster that says Let your dreams take flight',
    imageCaption: 'Let your dreams take flight ✈️',
    items: [
      { title: 'Astronomer', emoji: '🔭', color: '#9B7BFF', description: 'Discovering the secrets of the universe, one star at a time.' },
      { title: 'Doctor', emoji: '🩺', color: '#4ADE80', description: 'Healing lives and making the world healthier.' },
      { title: 'Social Influencer', emoji: '🎥', color: '#FF7AA2', description: 'Inspiring people and sharing positive vibes.' },
    ],
  },

  missions: {
    index: '04',
    kicker: 'Bucket list',
    title: 'Missions awaiting launch',
    subtitle: 'Epic experiences on my list.',
    items: [
      { title: 'Sky Diving', icon: '🪂', description: 'Feel the ultimate freedom' },
      { title: 'Travel the World', icon: '✈️', description: 'Explore every continent' },
      { title: 'Explore New Cultures', icon: '🌏', description: 'Experience diverse traditions' },
      { title: 'Learn Many Languages', icon: '🗣️', description: 'Connect with the world' },
      { title: 'Discover Space', icon: '🚀', description: 'Touch the stars' },
      { title: 'Meet Inspiring People', icon: '🤝', description: 'Learn from the best' },
    ],
    landmarks: ['🗼', '🗽', '🏰', '🗿', '🕌', '🏔️', '🏖️', '🌋', '🏛️', '⛩️'],
  },

  contact: {
    kicker: 'Ground control',
    title: 'Send a signal 📡',
    intro: 'Want to talk about space, science, books, apps, or just say hi? Pick a channel and send a message!',
    // Leave empty to hide the email button. Put a real address here to show it.
    email: '',
    profileImageUrl: portraitImage,
    profileImageAlt: 'Tasnim Al Hossain Sayeb',
    closing: 'The adventure is just getting started.',
    footer: '© 2026 Tasnim Al Hossain Sayeb · Student · App Designer · Dreamer',
    socialLinks,
  },
};
