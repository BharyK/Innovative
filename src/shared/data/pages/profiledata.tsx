import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import media8 from '../../../assets/images/media/media-8.jpg';
import media9 from '../../../assets/images/media/media-9.jpg';
import media55 from '../../../assets/images/media/media-55.jpg';
import media56 from '../../../assets/images/media/media-56.jpg';
import media57 from '../../../assets/images/media/media-57.jpg';

export const BadgeLabels = [
  'Project Management',
  'Data Analysis',
  'Marketing Strategy',
  'Graphic Design',
  'Content Creation',
  'Market Research',
  'Client Relations',
  'Event Planning',
  'Budgeting and Finance',
];
interface ContactType {
  id: number;
  icon: string;
  color: string;
  label: string;
  value: string;
  class: boolean;
}
export const ContactInfo: ContactType[] = [
  { id: 1, icon: 'mail-line', color: 'primary', label: 'Email', value: 'your.email@example.com', class: true },
  { id: 2, icon: 'phone-line', color: 'secondary', label: 'Phone', value: '+1 (555) 123-4567', class: true },
  { id: 3, icon: 'map-pin-line', color: 'danger', label: 'Website', value: 'www.yourwebsite.com', class: true },
  { id: 4, icon: 'building-line', color: 'warning', label: 'Location', value: 'City, Country', class: false },
];

interface SocialLinkType {
  id: number;
  name: string;
  icon: string;
  bg: string;
  url: string;
}
export const SocialLinks: SocialLinkType[] = [
  { id: 1, name: 'Facebook', icon: 'facebook-circle-fill', bg: 'primary', url: 'https://www.facebook.com/johndoe', },
  { id: 2, name: 'Twitter', icon: 'twitter-x-fill', bg: 'secondary', url: 'https://twitter.com/johndoe', },
  { id: 3, name: 'Linkedin', icon: 'linkedin-box-fill', bg: 'danger', url: 'https://www.linkedin.com/in/johndoe', },
  { id: 4, name: 'Instagram', icon: 'instagram-fill', bg: 'warning', url: 'https://www.instagram.com/johndoe', },
];

interface Media {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PostType {
  id: number;
  name: string;
  profileImage: string;
  message: string;
  hashtags: string;
  timestamp: string;
  media: Media[];
}
export const PostsData: PostType[] = [
  {
    id: 1,
    name: 'Ashwin Seth',
    profileImage: face14,
    message: `Enjoying a great weekend at the beach with family. The view is amazing and the weather couldn't be better!`,
    hashtags: '#WeekendVibes #BeachDay',
    timestamp: '12, Oct - 02:14PM',
    media: [],
  },
  {
    id: 2,
    name: 'Lila Emerson',
    profileImage: face7,
    message: `Had an amazing time hiking with the family over the weekend. Nature at its best!`,
    hashtags: '#HikingAdventures #FamilyTime',
    timestamp: '10, Nov - 03:30PM',
    media: [
      {
        src: media8,
        alt: 'Hiking Adventure',
        width: 307,
        height: 221
      },
      {
        src: media9,
        alt: 'Hiking Adventure1',
        width: 307,
        height: 221
      },
    ],
  },
  {
    id: 3,
    name: 'Leo Finch',
    profileImage: face9,
    message: `The city looks absolutely stunning at night. Took a stroll and captured this beauty.`,
    hashtags: '#CityNights #Photography',
    timestamp: '05, Oct - 09:00PM',
    media: [
      {
        src: media55,
        alt: 'Cakes',
        width: 200,
        height: 200
      },
      {
        src: media56,
        alt: 'Icecream',
        width: 200,
        height: 200
      },
      {
        src: media57,
        alt: 'Icecream2',
        width: 200,
        height: 200
      },
    ],
  },
];

interface FollowerType {
  id: number;
  name: string;
  email: string;
  avatar: string;
  action: string;
}
export const FollowersData: FollowerType[] = [
  { id: 1, name: 'JohnDoe', email: 'john.doe@example.com', avatar: face9, action: 'Follow', },
  { id: 2, name: 'SarahSmith', email: 'sarah.smith@example.com', avatar: face1, action: 'Follow', },
  { id: 3, name: 'MichaelBrown', email: 'michael.brown@example.com', avatar: face10, action: 'Follow', },
  { id: 4, name: 'EmmaWilson', email: 'emma.wilson@example.com', avatar: face2, action: 'Follow', },
  { id: 5, name: 'JamesTaylor', email: 'james.taylor@example.com', avatar: face11, action: 'Unfollow', },
  { id: 6, name: 'OliviaJohnson', email: 'olivia.johnson@example.com', avatar: face3, action: 'Follow', },
  { id: 7, name: 'DavidMartinez', email: 'david.martinez@example.com', avatar: face13, action: 'Follow', },
  { id: 8, name: 'SophiaGarcia', email: 'sophia.garcia@example.com', avatar: face4, action: 'Follow', },
  { id: 9, name: 'DanielLee', email: 'daniel.lee@example.com', avatar: face14, action: 'Follow', },
  { id: 10, name: 'IsabellaHarris', email: 'isabella.harris@example.com', avatar: face5, action: 'Unfollow', },
  { id: 11, name: 'WilliamClark', email: 'william.clark@example.com', avatar: face15, action: 'Follow', },
  { id: 12, name: 'MiaLewis', email: 'mia.lewis@example.com', avatar: face6, action: 'Follow', },
  { id: 13, name: 'AlexanderWalker', email: 'alexander.walker@example.com', avatar: face16, action: 'Follow', },
  { id: 14, name: 'CharlotteAllen', email: 'charlotte.allen@example.com', avatar: face7, action: 'Follow', },
  { id: 15, name: 'BenjaminYoung', email: 'benjamin.young@example.com', avatar: face8, action: 'Unfollow', }
];

interface FriendType {
  id: number;
  image: string;
  role: string;
  name: string;
  followStatus: boolean;
  bgClass: string;
}
export const FriendsData: FriendType[] = [
  { id: 1, image: face10, role: 'HR Manager', name: 'Lila Emerson', followStatus: false, bgClass: 'primary' },
  { id: 2, image: face2, role: 'Product Designer', name: 'Della Jasmine', followStatus: false, bgClass: 'secondary' },
  { id: 3, image: face14, role: 'UX Researcher', name: 'Alden Moon', followStatus: true, bgClass: 'danger' },
  { id: 4, image: face5, role: 'Software Engineer', name: 'Leo Finch', followStatus: false, bgClass: 'warning' },
  { id: 5, image: face11, role: 'Marketing Specialist', name: 'Nia Harper', followStatus: true, bgClass: 'info' },
  { id: 6, image: face7, role: 'Content Strategist', name: 'Kaiya Blake', followStatus: false, bgClass: 'primary' },
  { id: 7, image: face8, role: 'Data Analyst', name: 'Elias Quinn', followStatus: true, bgClass: 'secondary' },
  { id: 8, image: face9, role: 'Sales Executive', name: 'Zayne Foster', followStatus: false, bgClass: 'danger' },
  { id: 9, image: face11, role: 'Sales Executive', name: 'Zayne Foster', followStatus: true, bgClass: 'warning' },
  { id: 10, image: face10, role: 'Sales Executive', name: 'Zayne Foster', followStatus: false, bgClass: 'info' },
];




