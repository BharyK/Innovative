import comppanyLogo1 from '../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../assets/images/company-logos/3.png';
import comppanyLogo4 from '../../../assets/images/company-logos/4.png';
import comppanyLogo5 from '../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../assets/images/company-logos/6.png';
import comppanyLogo7 from '../../../assets/images/company-logos/7.png';
import comppanyLogo8 from '../../../assets/images/company-logos/8.png';
import comppanyLogo9 from '../../../assets/images/company-logos/9.png';
import media13 from '../../../assets/images/media/media-13.jpg';
import media14 from '../../../assets/images/media/media-14.jpg';
import media15 from '../../../assets/images/media/media-15.jpg';
import media16 from '../../../assets/images/media/media-16.jpg';
import media17 from '../../../assets/images/media/media-17.jpg';
import media18 from '../../../assets/images/media/media-18.jpg';
import media19 from '../../../assets/images/media/media-19.jpg';
import media40 from '../../../assets/images/media/media-40.jpg';
import media41 from '../../../assets/images/media/media-41.jpg';
import media42 from '../../../assets/images/media/media-42.jpg';
import media43 from '../../../assets/images/media/media-43.jpg';
import media44 from '../../../assets/images/media/media-44.jpg';
import media45 from '../../../assets/images/media/media-45.jpg';
import media46 from '../../../assets/images/media/media-46.jpg';
import media60 from '../../../assets/images/media/media-60.jpg';
import media65 from '../../../assets/images/media/media-65.jpg';
import media66 from '../../../assets/images/media/media-66.jpg';
import media79 from '../../../assets/images/media/media-79.jpg';
import media80 from '../../../assets/images/media/media-80.jpg';
import media81 from '../../../assets/images/media/media-81.jpg';
import media82 from '../../../assets/images/media/media-82.jpg';
import media85 from '../../../assets/images/media/media-85.jpg';
import media86 from '../../../assets/images/media/media-86.jpg';
import media87 from '../../../assets/images/media/media-87.jpg';
import media88 from '../../../assets/images/media/media-88.jpg';
import book1 from '../../../assets/images/media/books/1.jpg';
import book2 from '../../../assets/images/media/books/2.jpg';
import book3 from '../../../assets/images/media/books/3.jpg';
import book4 from '../../../assets/images/media/books/4.jpg';
import book5 from '../../../assets/images/media/books/5.jpg';
import book6 from '../../../assets/images/media/books/6.jpg';

export const SearchTags = ["Designs", "Template", "Dashboard", "Admin Templates", "Templates", "Admin", "Hosting Templates", "Hosting", "Bootstrap", "Sales"];

interface SearchItemType {
  id: number;
  class: boolean;
  logoSrc: string;
  websiteName: string;
  websiteUrl: string;
  title: string;
  description: string;
  date: string;
}
export const SearchItems: SearchItemType[] = [
  {
    id: 1,
    class: true,
    logoSrc: comppanyLogo1,
    websiteName: 'TechRadar.com',
    websiteUrl: 'www.techradar.com/best/best-laptops',
    title: 'Best Laptops to Buy in 2025',
    description: 'The laptop market is booming with new releases this year. Discover the best models to help you choose the right one for work, gaming, and everyday use.',
    date: 'January 4, 2025'
  },
  {
    id: 2,
    class: true,
    logoSrc: comppanyLogo2,
    websiteName: 'WebDevDaily.com',
    websiteUrl: 'www.webdevdaily.com/2025-web-optimization',
    title: 'Web Optimization Strategies for 2025',
    description: 'As websites become more complex, optimization remains crucial. Discover the best practices and tools for improving website performance and load times in 2025.',
    date: 'July 4, 2025'
  },
  {
    id: 3,
    class: true,
    logoSrc: comppanyLogo3,
    websiteName: 'StartupTech.com',
    websiteUrl: 'www.startuptech.com/funding-trends-2025',
    title: 'Funding Trends for Startups in 2025',
    description: 'Startup funding continues to evolve. Learn about the emerging trends in venture capital, angel investments, and crowdfunding in the startup ecosystem this year.',
    date: 'March 24, 2025'
  },
  {
    id: 4,
    class: true,
    logoSrc: comppanyLogo4,
    websiteName: 'TechTrendsNow.com',
    websiteUrl: 'www.techtrendsnow.com/5g-rollout-2025',
    title: '5G Rollout: What to Expect in 2025',
    description: 'The 5G network rollout continues to expand. Get insights into the global progress of 5G implementation and its impact on industries in 2025.',
    date: 'July 12, 2025'
  },
  {
    id: 5,
    class: false,
    logoSrc: comppanyLogo5,
    websiteName: 'DevCommunity.com',
    websiteUrl: 'www.devcommunity.com/future-of-ai-2025',
    title: 'The Future of AI Development in 2025',
    description: 'AI is rapidly transforming the tech industry. Explore the cutting-edge advancements in AI technology and how they’ll shape software development in 2025.',
    date: 'January 13, 2025'
  }
];


interface slideType {
  id: number;
  src: string;
  avatarSrc: string;
  title: string;
  company: string
}

export const SearchGalleryListdata: slideType[] = [
  { id: 1, src: media40, avatarSrc: comppanyLogo6, title: 'Tech Gadgets', company: 'Innovative Marvels' },
  { id: 2, src: media41, avatarSrc: comppanyLogo2, title: 'Healthy Recipes', company: 'Nutrient Nourish' },
  { id: 3, src: media42, avatarSrc: comppanyLogo4, title: 'Travel Explorer', company: 'Global Wander' },
  { id: 4, src: media43, avatarSrc: comppanyLogo5, title: 'Fashion Finds', company: 'Chic Styles' },
  { id: 5, src: media44, avatarSrc: comppanyLogo6, title: 'Nature Photography', company: 'Wild Beauty' },
  { id: 6, src: media45, avatarSrc: comppanyLogo7, title: 'Future Tales', company: 'Innovative Marvels' },
  { id: 7, src: media46, avatarSrc: comppanyLogo8, title: 'Science Fiction Books', company: 'Future Tales' },
  { id: 8, src: media60, avatarSrc: comppanyLogo9, title: 'Fitness Fanatics', company: 'Active Vibes' },
];




interface BookType {
  id: number;
  title: string;
  author: string;
  image: string;
  tags: string[];
  publishedOn: string;
}
export const BooksData: BookType[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', image: book6, tags: ['Classic', 'Fiction', 'Jazz Age'], publishedOn: 'May 10, 1925' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', image: book1, tags: ['Fiction', 'Legal', 'Southern Gothic'], publishedOn: 'July 11, 1960' },
  { id: 3, title: 'Nineteen Eighty-Four', author: 'George Orwell', image: book2, tags: ['Dystopian', 'Political', 'Science Fiction'], publishedOn: 'June 8, 1949' },
  { id: 4, title: 'The Hobbit', author: 'J.R.R. Tolkien', image: book3, tags: ['Fantasy', 'Adventure'], publishedOn: 'September 21, 1937' },
  { id: 5, title: 'The Da Vinci Code', author: 'Dan Brown', image: book4, tags: ['Mystery', 'Thriller', 'Conspiracy'], publishedOn: 'March 18, 2003' },
  { id: 6, title: 'Pride and Prejudice', author: 'Jane Austen', image: book5, tags: ['Classic', 'Romance'], publishedOn: 'January 28, 1813' },
];

interface NewsItemType {
  id: number;
  category: string;
  categoryClass: string;
  title: string;
  image: string;
  author: string;
  date: string;
}
export const NewsData: NewsItemType[] = [
  {
    id: 1,
    category: 'Business',
    categoryClass: 'primary',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media14,
    author: 'George Orwell',
    date: '14 Jul 2025'
  },
  {
    id: 2,
    category: 'Development',
    categoryClass: 'secondary',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media15,
    author: 'George Orwell',
    date: '14 Jul 2025'
  },
  {
    id: 3,
    category: 'Product',
    categoryClass: 'danger',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media13,
    author: 'George Orwell',
    date: '14 Jul 2025'
  },
  {
    id: 4,
    category: 'Design',
    categoryClass: 'warning',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media16,
    author: 'George Orwell',
    date: '14 Jul 2025'
  },
  {
    id: 5,
    category: 'Business',
    categoryClass: 'primary',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media18,
    author: 'George Orwell',
    date: '14 Jul 2025'
  },
  {
    id: 6,
    category: 'Development',
    categoryClass: 'secondary',
    title: 'A Bold Mix of Friends and Strangers Embarking on a Journey to Adventures.',
    image: media19,
    author: 'George Orwell',
    date: '14 Jul 2025'
  }
];

interface ContinueListingItemType {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  buttonClass: string;
}
export const ContinueListing: ContinueListingItemType[] = [
  {
    id: 1,
    title: 'Business Of Fashion',
    description: 'A collection that views fashion as an art form',
    image: media14,
    progress: 50,
    buttonClass: 'primary'
  },
  {
    id: 2,
    title: 'Inspired by Nature\'s Rhythms',
    description: 'Inspiration in the soothing sounds of the sea',
    image: media16,
    progress: 50,
    buttonClass: 'secondary'
  },
  {
    id: 3,
    title: 'The Rhythm of the Ocean',
    description: 'Just as the waves crash in a natural rhythm',
    image: media17,
    progress: 50,
    buttonClass: 'danger'
  }
];

interface TopSongType {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const TopSongsData: TopSongType[] = [
  {
    id: 1,
    title: 'Breathing in Harmony',
    description: 'A practice of aligning your breath with your body’s rhythm.',
    image: media65
  },
  {
    id: 2,
    title: 'Serenity in Stillness',
    description: 'A focus on the quiet moments that allow the mind.',
    image: media66
  },
  {
    id: 3,
    title: 'Echoes of Tranquility',
    description: 'Like the faint echo of distant sounds, this concept.',
    image: media80
  },
  {
    id: 4,
    title: 'Breath of Nature',
    description: 'A meditation practice that connects you to the natural.',
    image: media81
  },
  {
    id: 5,
    title: 'Whispering Winds',
    description: 'Practicing meditation and relaxation techniques',
    image: media82
  },
  {
    id: 6,
    title: 'Whispering Winds',
    description: 'Practicing meditation and relaxation techniques',
    image: media79
  }
];

interface SuggestedTrackType {
  id: number;
  title: string;
  description: string;
  image: string;
}
export const YourSuggestedTracks: SuggestedTrackType[] = [
  {
    id: 1,
    title: 'Epic Urban Vibes',
    description: 'Authentic, high-energy beats straight from the heart of the city.',
    image: media85
  },
  {
    id: 2,
    title: 'City Lights Soundtrack',
    description: 'The soundtrack of a city that never sleeps. Each beat lights up the night.',
    image: media86
  },
  {
    id: 3,
    title: 'Heartbeat of the City',
    description: 'The intense, undeniable rhythm that defines the city’s core. With every beat.',
    image: media87
  },
  {
    id: 4,
    title: 'Rhythms of the Concrete',
    description: 'Bold, raw, and electric beats inspired by the unpolished beauty of city life.',
    image: media88
  }
];

interface VideoItemType {
  id: number;
  videoSrc: string;
  title: string;
  link: string;
}
export const VideosData: VideoItemType[] = [
  {
    id: 1,
    videoSrc: 'https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5',
    title: 'YNEX - HTML Installation & Usage process',
    link: 'https://spruko.com/demo/ynex/',
  },
  {
    id: 2,
    videoSrc: 'https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius',
    title: 'Sash - Admin and Dashboard Multipurpose HTML Advanced Template',
    link: 'https://spruko.com/demo/sash/',
  },
  {
    id: 3,
    videoSrc: 'https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0',
    title: 'Valex - Bootstrap 5 Admin & Dashboard HTML Template',
    link: 'https://www.spruko.com/demo/valex/',
  },
  {
    id: 4,
    videoSrc: 'https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy',
    title: 'Azea - Admin & Dashboard Bootstrap 5 HTML5 Template',
    link: 'https://spruko.com/demo/azea/',
  },
  {
    id: 5,
    videoSrc: 'https://www.youtube.com/embed/prSkLfxlFDY?si=IKoJ0AUUYA9-UToN',
    title:
      'Uhelp - Installation Process - Helpdesk Technical Assistance Laravel Support Ticketing System',
    link: 'https://spruko.com/demo/uhelp/',
  },
  {
    id: 6,
    videoSrc: 'https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y',
    title: 'Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template',
    link: 'https://spruko.com/demo/zanex/',
  },
  {
    id: 7,
    videoSrc: 'https://www.youtube.com/embed/HyFRnNIovUA?si=F--5ve0s5zfLuZK5',
    title: 'Dayone - Bootstrap 5 HRM, Employee & Project Admin Dashboard HTML Template',
    link: 'https://spruko.com/demo/dayone/',
  },
  {
    id: 8,
    videoSrc: 'https://www.youtube.com/embed/Yk6xPgb3cfk?si=JmFGOtV5jjFvDCbS',
    title: 'Nowa - Admin and Dashboard Multipurpose HTML Advanced Template',
    link: 'https://spruko.com/demo/nowa/',
  },
]