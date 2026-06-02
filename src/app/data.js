import { BookOpen, Languages, Film, Wind, Telescope, Microscope, Stethoscope, Video, Facebook, Instagram, MessageCircle, Twitter } from 'lucide-react';

import heroImage from './assets/images/heroimae.jpg';
import dreamImage from './assets/images/dreamphoto.jpg';
import classroomImage from './assets/images/classroomphoto.jpg';
import bookReadImage from './assets/images/bookread.jpg';
import bookReadImage2 from './assets/images/bookread2.jpg';
import bookReadImage3 from './assets/images/bookread3.jpg';

const profileImageUrl = heroImage;

export const portfolioData = {
  hero: {
    name: 'Tasnim Al Hossain Sayeb',
    tags: ['Student', 'Explorer', 'Future Dreamer'],
    classLabel: 'Class 7',
    schoolName: 'Radiance School & College',
    profileImageUrl,
    profileImageAlt: 'Tasnim Al Hossain Sayeb',
    ctaLabel: 'Start My Journey ✨',
    scrollTargetId: 'about',
    floatingElements: [
      { emoji: '🪐', delay: 0, duration: 3 },
      { emoji: '⭐', delay: 0.5, duration: 2.5 },
      { emoji: '📚', delay: 1, duration: 3.5 },
      { emoji: '✈️', delay: 1.5, duration: 2.8 },
      { emoji: '🔬', delay: 2, duration: 3.2 },
      { emoji: '🏸', delay: 0.8, duration: 2.9 },
    ],
    socialLinks: [
      { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/tasnim.sayeb.2025/', color: '#4F7DF7' },
      { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/tasnim_sayeb/', color: '#FB7185' },
      { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/01878909306', color: '#22C55E' },
      { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/tasnim_sayeb', color: '#000000' },
    ],
  },
  about: {
    title: 'Who Am I? 🤔',
    profileImageUrl: classroomImage,
    profileImageAlt: 'Tasnim',
    intro: "Hi! I'm",
    highlightedName: 'Tasnim Al Hossain Sayeb',
    classLabel: 'Class 7',
    schoolName: 'Radiance School & College',
    curiosityParagraph: 'I love discovering new things, learning languages, reading books, exploring science, and imagining the future.',
    adventureParagraph: 'Every day is a new adventure for me! 🚀',
    stickers: ['🎓', '🌟', '💡', '🎯'],
  },
  hobbies: {
    title: 'Things I Love Doing 💝',
    cards: [
      { title: 'Book Reading', icon: BookOpen, emoji: '📚', color: '#4F7DF7', description: 'Lost in stories', image: bookReadImage },
      { title: 'Language Learning', icon: Languages, emoji: '🗣️', color: '#8B5CF6', description: 'Speaking the world', image: bookReadImage2 },
      { title: 'Watching Movies', icon: Film, emoji: '🎬', color: '#FB7185', description: 'Cinematic adventures', image: bookReadImage3 },
      { title: 'Playing Badminton', icon: Wind, emoji: '🏸', color: '#22C55E', description: 'Smash and score', image: classroomImage },
      { title: 'Astronomy', icon: Telescope, emoji: '🔭', color: '#FACC15', description: 'Exploring the cosmos', image: dreamImage },
      { title: 'Biology', icon: Microscope, emoji: '🧬', color: '#22C55E', description: 'Life sciences', image: heroImage },
      { title: 'Exploring Islam', icon: BookOpen, emoji: '🕌', color: '#F59E0B', description: 'Learning about faith, culture, and values', image: bookReadImage2 },
    ],
    badges: ['Curious', 'Creative', 'Passionate'],
  },
  dreams: {
    title: 'My Future Dreams 🌟',
    subtitle: 'The journey of a thousand miles begins with a single dream ✨',
    cards: [
      {
        title: 'Astrologer / Astronomy Enthusiast',
        icon: Telescope,
        emoji: '🔭',
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF6 0%, #4F7DF7 100%)',
        description: 'Discovering the secrets of the universe, one star at a time',
        image: dreamImage,
        decorations: ['🌟', '🪐', '🌙', '✨'],
      },
      {
        title: 'Doctor',
        icon: Stethoscope,
        emoji: '⚕️',
        color: '#22C55E',
        gradient: 'linear-gradient(135deg, #22C55E 0%, #10B981 100%)',
        description: 'Healing lives and making the world healthier',
        image: classroomImage,
        decorations: ['💊', '🩺', '🧬', '💉'],
      },
      {
        title: 'Social Influencer',
        icon: Video,
        emoji: '📱',
        color: '#FB7185',
        gradient: 'linear-gradient(135deg, #FB7185 0%, #F472B6 100%)',
        description: 'Inspiring millions and sharing positive vibes',
        image: heroImage,
        decorations: ['📸', '🎥', '🎤', '💬'],
      },
    ],
    journeyText: 'The journey continues...',
  },
  bucketList: {
    title: 'Adventures Waiting For Me 🗺️',
    subtitle: 'My bucket list of epic experiences! 🌟',
    worldMapImage: dreamImage,
    items: [
      { title: 'Sky Diving', icon: '🪂', color: '#4F7DF7', description: 'Feel the ultimate freedom' },
      { title: 'Travel Around The World', icon: '✈️', color: '#FB7185', description: 'Explore every continent' },
      { title: 'Explore New Cultures', icon: '🌏', color: '#22C55E', description: 'Experience diverse traditions' },
      { title: 'Learn Many Languages', icon: '🗣️', color: '#8B5CF6', description: 'Connect with the world' },
      { title: 'Discover Space', icon: '🚀', color: '#FACC15', description: 'Touch the stars' },
      { title: 'Meet Inspiring People', icon: '🤝', color: '#FB7185', description: 'Learn from the best' },
    ],
    travelBadges: ['🗼', '🗽', '🏰', '🗿', '🕌', '🏔️', '🏖️', '🌋', '🏛️', '⛩️'],
    achievementTitle: 'Adventure Unlocked!',
    achievementText: "Every journey starts with a dream. Let's make them reality! 🌈",
  },
  contact: {
    title: "Let's Be Friends! 🤗",
    intro: "I'd love to hear from you! Whether you want to talk about space, science, books, or just say hi - drop me a message on any platform! 💬",
    email: 'tasnim@example.com',
    emailLabel: 'Send a Message',
    profileImageUrl: heroImage,
    profileImageAlt: 'Tasnim',
    closingTitle: 'The Adventure is Just Getting Started! 🚀',
    closingText: 'Thanks for visiting my world! ✨',
    footerPrimary: 'Made with',
    footerSecondary: 'by Tasnim Al Hossain Sayeb',
    footerYear: '© 2026 • Student • Explorer • Dreamer',
    socialLinks: [
      { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/tasnim.sayeb.2025/', color: '#4F7DF7', username: 'tasnim.sayeb.2025' },
      { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/tasnim_sayeb/', color: '#FB7185', username: '@tasnim_sayeb' },
      { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/01878909306', color: '#22C55E', username: '01878909306' },
      { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/tasnim_sayeb', color: '#000000', username: '@tasnim_sayeb' },
    ],
  },
};