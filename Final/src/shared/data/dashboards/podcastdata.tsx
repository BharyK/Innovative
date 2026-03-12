import media77 from '../../../assets/images/media/media-77.jpg';
import media78 from '../../../assets/images/media/media-78.jpg';
import media79 from '../../../assets/images/media/media-79.jpg';
import media80 from '../../../assets/images/media/media-80.jpg';
import media81 from '../../../assets/images/media/media-81.jpg';
import media82 from '../../../assets/images/media/media-82.jpg';
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import type { ReactNode } from 'react';


// Podcast Activity
export const PodcastActivitySeries = [{
  name: 'Hours',
  data: [40, 35, 66, 28, 38, 55, 45],
  type: 'bar',
}, {
  name: 'Albums',
  data: [20, 45, 25, 60, 45, 65, 55],
  type: 'line',
}]
export const PodcastActivityOptions = {
  chart: {
    height: 380,
    fontFamily: 'Poppins, Arial, sans-serif',
    toolbar: {
      show: false
    }
  },
  grid: {
    show: false,
    borderColor: '#f2f6f7',
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'top',
    fontSize: '13px',
  },
  colors: ["var(--primary08)", "rgba(127, 103, 257,0.8)"],
  stroke: {
    width: [1, 1.8],
    curve: 'smooth',
    dashArray: [0, 4],
  },
  plotOptions: {
    bar: {
      columnWidth: "25%",
      borderRadius: 3,
      colors: {
        ranges: [{
          from: 41,
          to: 100,
          color: 'rgba(127, 103, 257, 0.8)'
        }, {
          from: 0,
          to: 40,
          color: 'var(--primary08)'
        }]
      },
    }
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
  labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
}

//*** Recently Played ***//
interface PlayedDataType {
  id: number;
  title: string;
  author: string;
  image: string;
  imageBg: string;
  time: string;
  timeColor: string;
  isLiked: boolean;
}

export const PlayedData: PlayedDataType[] = [
  {
    id: 1,
    title: "Tech Talk",
    author: "John Smith",
    image: media77,
    imageBg: "danger-transparent",
    time: "45 Mins",
    timeColor: "gray-3",
    isLiked: true,
  },
  {
    id: 2,
    title: "Science Explorers",
    author: "Emily Johnson",
    image: media78,
    imageBg: "primary-transparent",
    time: "30 Mins",
    timeColor: "danger",
    isLiked: false,
  },
  {
    id: 3,
    title: "Business Insights",
    author: "David Williams",
    image: media79,
    imageBg: "warning-transparent",
    time: "60 Mins",
    timeColor: "gray-3",
    isLiked: true,
  },
  {
    id: 4,
    title: "Health and Wellness",
    author: "Michael Brown",
    image: media80,
    imageBg: "secondary-transparent",
    time: "50 Mins",
    timeColor: "gray-3",
    isLiked: true,
  },
  {
    id: 5,
    title: "Midnight Serenade",
    author: "Alice Mumbleton",
    image: media81,
    imageBg: "info-transparent",
    time: "25 Mins",
    timeColor: "danger",
    isLiked: true,
  },
  {
    id: 6,
    title: "Electric Dreamscape",
    author: "James Patterson",
    image: media82,
    imageBg: "pink-transparent",
    time: "16 Mins",
    timeColor: "danger",
    isLiked: true,
  },
];

// Top Podcasters
interface TopPodcastersType {
  id: number;
  name: string;
  followers: string;
  avatar: string;
  avatarBg: string;
}
export const TopPodcasters: TopPodcastersType[] = [
  {
    id: 1,
    name: "Amanda Nanes",
    followers: "2,52,525",
    avatar: face10,
    avatarBg: "primary-transparent"
  },
  {
    id: 2,
    name: "Charles Achilles",
    followers: "12,563",
    avatar: face1,
    avatarBg: "secondary-transparent"
  },
  {
    id: 3,
    name: "Julia Camo",
    followers: "2,52,525",
    avatar: face2,
    avatarBg: "danger-transparent"
  },
  {
    id: 4,
    name: "Json Taylor",
    followers: "2,52,525",
    avatar: face3,
    avatarBg: "warning-transparent"
  },
  {
    id: 5,
    name: "Alice Mumbleton",
    followers: "1,76,864",
    avatar: face7,
    avatarBg: "info-transparent"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    followers: "4,87,753",
    avatar: face7,
    avatarBg: "orange-transparent"
  }
];

// Activity By Week

interface Progress {
  width: string;
  ariaValueNow: string;
  progressBg: string;
}

interface ActivityByWeekType {
  id: number;
  svg: React.ReactNode;
  avatarBg: string;
  avatarBorder: string;
  episode: string;
  title: string;
  time: number;
  progressContainerBg: string;
  progress: Progress;
  margin: string;
}
export const ActivityByWeek: ActivityByWeekType[] = [
  {
    id: 1,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-music-heart">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M9 17v-13h10v7" />
        <path d="M9 8h10" />
        <path
          d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
      </svg>
    ),
    avatarBg: "primary-transparent",
    avatarBorder: "primary",
    episode: "Episode 12",
    title: "How to Grow Your Podcast",
    time: 24,
    progressContainerBg: "primary-transparent",
    progress: {
      width: "50%",
      ariaValueNow: "50",
      progressBg: "primary",
    },
    margin: "2"
  },
  {
    id: 2,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-microphone-2">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
        <path
          d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
      </svg>
    ),
    avatarBg: "secondary-transparent",
    avatarBorder: "secondary",
    episode: "Episode 13",
    title: "Monetization Strategie",
    time: 36,
    progressContainerBg: "secondary-transparent",
    progress: {
      width: "75%",
      ariaValueNow: "75",
      progressBg: "secondary",
    },
    margin: "2"
  },
  {
    id: 3,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-wheat">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12.014 21.514v-3.75" />
        <path
          d="M5.93 9.504l-.43 1.604c-.712 2.659 .866 5.391 3.524 6.105c.997 .268 1.993 .535 2.99 .801v-3.44c-.164 -2.105 -1.637 -3.879 -3.676 -4.426l-2.408 -.644z" />
        <path
          d="M13.744 11.164c.454 -.454 .815 -.994 1.061 -1.587c.246 -.594 .372 -1.23 .372 -1.873c0 -.643 -.126 -1.279 -.372 -1.872c-.246 -.594 -.606 -1.133 -1.061 -1.588l-1.73 -1.73l-1.73 1.73c-.454 .454 -.815 .994 -1.06 1.588c-.246 .594 -.372 1.23 -.373 1.872c0 .643 .127 1.279 .373 1.873c.246 .594 .606 1.133 1.06 1.587" />
        <path
          d="M18.099 9.504l.43 1.604c.712 2.659 -.866 5.391 -3.525 6.105c-.997 .268 -1.994 .535 -2.99 .801v-3.44c.164 -2.105 1.637 -3.879 3.677 -4.426l2.408 -.644z" />
      </svg>
    ),
    avatarBg: "danger-transparent",
    avatarBorder: "danger",
    episode: "Episode 14",
    title: "Growing Your Mindset for Success",
    time: 30,
    progressContainerBg: "danger-transparent",
    progress: {
      width: "60%",
      ariaValueNow: "60",
      progressBg: "danger",
    },
    margin: "2"
  },
  {
    id: 4,
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-apple-podcast">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18.364 18.364a9 9 0 1 0 -12.728 0" />
        <path
          d="M11.766 22h.468a2 2 0 0 0 1.985 -1.752l.5 -4a2 2 0 0 0 -1.985 -2.248h-1.468a2 2 0 0 0 -1.985 2.248l.5 4a2 2 0 0 0 1.985 1.752z" />
        <path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      </svg>
    ),
    avatarBg: "warning-transparent",
    avatarBorder: "warning",
    episode: "Episode 15",
    title: "How to Collaborate",
    time: 20,
    progressContainerBg: "warning-transparent",
    progress: {
      width: "40%",
      ariaValueNow: "40",
      progressBg: "warning",
    },
    margin: "0"
  }
];

// Most Popular
interface MostPopularType {
  id: number;
  title: string;
  author: string;
  image: string;
  duration: string;
  listens: string;
}
export const MostPopular: MostPopularType[] = [
  {
    id: 1,
    title: "Midnight Serenade",
    author: "Alice Mumbleton",
    image: media78,
    duration: "2h 32m",
    listens: "67,862",

  },
  {
    id: 2,
    title: "Electric Dreamscape",
    author: "Alice Mumbleton",
    image: media80,
    duration: "2h 32m",
    listens: "27,862",

  },
  {
    id: 3,
    title: "Whispers in the Wind",
    author: "Alice Mumbleton",
    image: media77,
    duration: "2h 32m",
    listens: "35,864",

  },
  {
    id: 4,
    title: "Serendipity Symphony",
    author: "Alice Mumbleton",
    image: media79,
    duration: "2h 32m",
    listens: "13,828",

  },
  {
    id: 5,
    title: "Midnight Serenade",
    author: "Alice Mumbleton",
    image: media81,
    duration: "2h 32m",
    listens: "35,864",

  },
  {
    id: 6,
    title: "Electric Dreamscape",
    author: "Alice Mumbleton",
    image: media82,
    duration: "2h 32m",
    listens: "67,862",

  }
];

// Recently Played Full Data
interface RecentlyPlayedFullDataType {
  id: number;
  title: string;
  author: string;
  image: string;
  playTime: string;
  category: string;
  categoryBg: string;
  episode: string;
  duration: string;
  isFavorite: boolean;
}
export const RecentlyPlayedFullData: RecentlyPlayedFullDataType[] = [
  {
    id: 1,
    title: "Whimsical Wonders",
    author: "Emily Watson",
    image: media77,
    playTime: "150s",
    category: "Comedy",
    categoryBg: "secondary-transparent",
    episode: "#156: Silly Stories",
    duration: "45 mins",
    isFavorite: true,

  },
  {
    id: 2,
    title: "Mindful Meditations",
    author: "Sarah Johnson",
    image: media78,
    playTime: "1 min",
    category: "Culture",
    categoryBg: "danger-transparent",
    episode: "#82: Deep Nonsense",
    duration: "30 mins",
    isFavorite: false,

  },
  {
    id: 3,
    title: "Deep Dive Dialogues",
    author: "John Doe",
    image: media79,
    playTime: "2 min",
    category: "Personal Journal",
    categoryBg: "info-transparent",
    episode: "#30: Life's Random Moments",
    duration: "60 mins",
    isFavorite: true,

  },
  {
    id: 4,
    title: "Random Revelations",
    author: "Sophia Brown",
    image: media80,
    playTime: "3 min",
    category: "News and Politics",
    categoryBg: "warning-transparent",
    episode: "#300: Current Affairs",
    duration: "20 mins",
    isFavorite: false,

  },
  {
    id: 5,
    title: "Bite-sized Banter",
    author: "Michael Smith",
    image: media81,
    playTime: "4 min",
    category: "Food and Drink",
    categoryBg: "primary-transparent",
    episode: "#45: Culinary Capers",
    duration: "50 mins",
    isFavorite: true,

  }
];

// Top Categories
interface TopCategoriesType {
  id: number;
  title: string;
  svg: ReactNode;
  categoryColor: string;

}
export const TopCategories: TopCategoriesType[] = [
  {
    id: 1,
    title: "Art & Creativity",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 10 6.5 10s1.5.67 1.5 1.5S7.33 13 6.5 13zm3-4C8.67 9 8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5S10.33 9 9.5 9zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zm4.5 2.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
          opacity=".8" fill="#fff" />
        <path
          d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm4 13h-1.77c-1.38 0-2.5 1.12-2.5 2.5 0 .61.22 1.19.63 1.65.06.07.14.19.14.35 0 .28-.22.5-.5.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.14 8 7c0 2.21-1.79 4-4 4z" />
        <circle cx="6.5" cy="11.5" r="1.5" />
        <circle cx="9.5" cy="7.5" r="1.5" />
        <circle cx="14.5" cy="7.5" r="1.5" />
        <circle cx="17.5" cy="11.5" r="1.5" />
      </svg>
    ),
    categoryColor: "primary"
  },
  {
    id: 2,
    title: "Business",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15 17H9v-1H5v3h14v-3h-4zM4 14h5v-3h6v3h5V9H4z"
          opacity=".8" fill="#fff" />
        <path
          d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm9 14H5v-3h4v1h6v-1h4v3zm-8-4v-2h2v2h-2zm9-1h-5v-3H9v3H4V9h16v5z" />
      </svg>
    ),
    categoryColor: "secondary"
  },
  {
    id: 3,
    title: "True Crime",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
        width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M10,10h4c0.8,0,1.34-0.94,0.76-1.63c-0.87-1.04-0.26-2-0.26-2.37c0-0.41-0.24-0.77-0.62-0.92 c-0.29-0.12-0.55-0.31-0.75-0.54C12.96,4.33,12.58,4,12,4s-0.96,0.33-1.13,0.53c-0.2,0.24-0.46,0.42-0.75,0.54 C9.74,5.23,9.5,5.59,9.5,6c0,0.37,0.61,1.33-0.26,2.37C8.66,9.06,9.2,10,10,10z"
              opacity=".8" fill="#fff" />
            <path
              d="M17.48,16.34C16.29,15.73,14.37,15,12,15c-2.37,0-4.29,0.73-5.48,1.34C6.2,16.5,6,16.84,6,17.22V18h12 v-0.78C18,16.84,17.8,16.5,17.48,16.34z"
              opacity=".8" fill="#fff" />
            <path
              d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />
            <path
              d="M10,12c0.17,0,3.83,0,4,0c1.66,0,3-1.34,3-3c0-0.73-0.27-1.4-0.71-1.92C16.42,6.75,16.5,6.38,16.5,6 c0-1.25-0.77-2.32-1.86-2.77C14,2.48,13.06,2,12,2s-2,0.48-2.64,1.23C8.27,3.68,7.5,4.75,7.5,6c0,0.38,0.08,0.75,0.21,1.08 C7.27,7.6,7,8.27,7,9C7,10.66,8.34,12,10,12z M9.24,8.37C10.11,7.33,9.5,6.37,9.5,6c0-0.41,0.24-0.77,0.62-0.92 c0.29-0.12,0.55-0.31,0.75-0.54C11.04,4.33,11.42,4,12,4s0.96,0.33,1.13,0.53c0.2,0.24,0.46,0.42,0.75,0.54 C14.26,5.23,14.5,5.59,14.5,6c0,0.37-0.61,1.33,0.26,2.37C15.34,9.06,14.8,10,14,10h-4C9.2,10,8.66,9.06,9.24,8.37z" />
          </g>
        </g>
      </svg>
    ),
    categoryColor: "danger"
  },
  {
    id: 4,
    title: "Fun & Comedy",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
        width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M13,5c-2.65,0-4.79,2.06-4.97,4.67L6.7,12H8v4h3v3h3v-3.95l0.89-0.43C16.71,13.88,18,12.09,18,10 C18,7.24,15.76,5,13,5z M16.82,8.95l-0.85,0.66C15.99,9.73,16,9.86,16,10c0,0.13-0.01,0.26-0.02,0.39l0.83,0.66 c0.08,0.06,0.1,0.16,0.05,0.25l-0.8,1.39c-0.05,0.09-0.16,0.12-0.24,0.09l-0.99-0.4c-0.21,0.16-0.43,0.29-0.67,0.39L14,13.83 c-0.01,0.1-0.1,0.17-0.2,0.17h-1.6c-0.1,0-0.18-0.07-0.2-0.17l-0.15-1.06c-0.25-0.1-0.47-0.23-0.68-0.39l-0.99,0.4 c-0.09,0.03-0.2,0-0.25-0.09l-0.8-1.39c-0.05-0.08-0.03-0.19,0.05-0.25l0.84-0.66C10.01,10.26,10,10.13,10,10 c0-0.13,0.02-0.27,0.04-0.39L9.19,8.95c-0.08-0.06-0.1-0.16-0.05-0.26l0.8-1.38c0.05-0.09,0.15-0.12,0.24-0.09l1,0.4 c0.2-0.15,0.43-0.29,0.67-0.39l0.15-1.06C12.02,6.07,12.1,6,12.2,6h1.6c0.1,0,0.18,0.07,0.2,0.17l0.15,1.06 c0.24,0.1,0.46,0.23,0.67,0.39l1-0.4c0.09-0.03,0.2,0,0.24,0.09l0.8,1.38C16.91,8.78,16.89,8.89,16.82,8.95z"
              opacity=".8" fill="#fff" />
            <path
              d="M15.82,7.22l-1,0.4c-0.21-0.16-0.43-0.29-0.67-0.39L14,6.17C13.98,6.07,13.9,6,13.8,6h-1.6c-0.1,0-0.18,0.07-0.19,0.17 l-0.15,1.06c-0.24,0.1-0.47,0.23-0.67,0.39l-1-0.4c-0.09-0.03-0.2,0-0.24,0.09l-0.8,1.38c-0.05,0.09-0.03,0.2,0.05,0.26l0.85,0.66 C10.02,9.73,10,9.87,10,10c0,0.13,0.01,0.26,0.03,0.39l-0.84,0.66c-0.08,0.06-0.1,0.17-0.05,0.25l0.8,1.39 c0.05,0.09,0.15,0.12,0.25,0.09l0.99-0.4c0.21,0.16,0.43,0.29,0.68,0.39L12,13.83c0.02,0.1,0.1,0.17,0.2,0.17h1.6 c0.1,0,0.18-0.07,0.2-0.17l0.15-1.06c0.24-0.1,0.47-0.23,0.67-0.39l0.99,0.4c0.09,0.04,0.2,0,0.24-0.09l0.8-1.39 c0.05-0.09,0.03-0.19-0.05-0.25l-0.83-0.66C15.99,10.26,16,10.13,16,10c0-0.14-0.01-0.27-0.03-0.39l0.85-0.66 c0.08-0.06,0.1-0.17,0.05-0.26l-0.8-1.38C16.02,7.22,15.91,7.19,15.82,7.22z M13,11.43c-0.79,0-1.43-0.64-1.43-1.43 S12.21,8.57,13,8.57s1.43,0.64,1.43,1.43S13.79,11.43,13,11.43z" />
            <path
              d="M19.94,9.06c-0.43-3.27-3.23-5.86-6.53-6.05C13.27,3,13.14,3,13,3C9.47,3,6.57,5.61,6.08,9l-1.93,3.48 C3.74,13.14,4.22,14,5,14h1v2c0,1.1,0.9,2,2,2h1v3h7v-4.68C18.62,15.07,20.35,12.24,19.94,9.06z M14.89,14.63L14,15.05V19h-3v-3H8 v-4H6.7l1.33-2.33C8.21,7.06,10.35,5,13,5c2.76,0,5,2.24,5,5C18,12.09,16.71,13.88,14.89,14.63z" />
          </g>
        </g>
      </svg>
    ),
    categoryColor: "warning"
  },
  {
    id: 5,
    title: "Education",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px"
        viewBox="0 0 24 24" width="24px" fill="#000">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z"
          opacity=".8" fill="#fff" />
        <path
          d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z" />
      </svg>
    ),
    categoryColor: "info"
  },
  {
    id: 6,
    title: "Sports & Technology",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
        width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path
              d="M5.61,7.22C4.6,8.55,4,10.2,4,12s0.6,3.45,1.61,4.78C7.06,15.69,8,13.95,8,12S7.06,8.31,5.61,7.22z"
              opacity=".8" fill="#fff" />
            <path
              d="M14,12c0-2.52,1.17-4.77,3-6.24C15.63,4.66,13.89,4,12,4S8.37,4.66,7,5.76c1.83,1.47,3,3.71,3,6.24 s-1.17,4.77-3,6.24c1.37,1.1,3.11,1.76,5,1.76s3.63-0.66,5-1.76C15.17,16.77,14,14.52,14,12z"
              opacity=".8" fill="#fff" />
            <path
              d="M18.39,7.22C16.94,8.31,16,10.05,16,12s0.94,3.69,2.39,4.78C19.4,15.45,20,13.8,20,12S19.4,8.55,18.39,7.22 z"
              opacity=".8" fill="#fff" />
            <path
              d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M5.61,16.78C4.6,15.45,4,13.8,4,12 s0.6-3.45,1.61-4.78C7.06,8.31,8,10.05,8,12S7.06,15.69,5.61,16.78z M12,20c-1.89,0-3.63-0.66-5-1.76c1.83-1.47,3-3.71,3-6.24 S8.83,7.23,7,5.76C8.37,4.66,10.11,4,12,4s3.63,0.66,5,1.76c-1.83,1.47-3,3.71-3,6.24s1.17,4.77,3,6.24 C15.63,19.34,13.89,20,12,20z M18.39,16.78C16.94,15.69,16,13.95,16,12s0.94-3.69,2.39-4.78C19.4,8.55,20,10.2,20,12 S19.4,15.45,18.39,16.78z" />
          </g>
        </g>
      </svg>
    ),
    categoryColor: "orange"
  },
  {
    id: 7,
    title: "Health & Care",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
        width="24px" fill="#000">
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <rect height="7" opacity=".3" width="2" x="3" y="13" />
            <path
              d="M16,10.29c1.96-1.82,4-3.88,4-4.99C20,4.56,19.44,4,18.7,4c-0.44,0-0.89,0.21-1.18,0.55L16,6.34l-1.52-1.79 C14.19,4.21,13.74,4,13.3,4C12.56,4,12,4.56,12,5.3C12,6.41,14.04,8.47,16,10.29z"
              opacity=".8" fill="#fff" />
            <path
              d="M19,18h-5.35c-0.54,0-1.07-0.09-1.58-0.26l-2.38-0.79l0.63-1.9l2.38,0.79c0.31,0.1,0.63,0.15,0.95,0.15H15 c0-0.37-0.23-0.7-0.57-0.83L8.61,13H7v5.48l6.97,1.94l5.93-1.85C19.74,18.23,19.39,18,19,18z"
              opacity=".8" fill="#fff" />
            <path
              d="M16,13c3.09-2.81,6-5.44,6-7.7C22,3.45,20.55,2,18.7,2c-1.04,0-2.05,0.49-2.7,1.25C15.35,2.49,14.34,2,13.3,2 C11.45,2,10,3.45,10,5.3C10,7.56,12.91,10.19,16,13z M13.3,4c0.44,0,0.89,0.21,1.18,0.55L16,6.34l1.52-1.79 C17.81,4.21,18.26,4,18.7,4C19.44,4,20,4.56,20,5.3c0,1.12-2.04,3.17-4,4.99c-1.96-1.82-4-3.88-4-4.99C12,4.56,12.56,4,13.3,4z" />
            <path
              d="M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M5,20H3v-7h2V20z M13.97,20.41L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16h-1.35c-0.32,0-0.64-0.05-0.95-0.15l-2.38-0.79l-0.63,1.9 l2.38,0.79c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z" />
          </g>
        </g>
      </svg>
    ),
    categoryColor: "success"
  }
];

// Player
interface PlayerType {
  id: number;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  currentTime: string;
  totalTime: string;
  progress: {
    width: string;
    ariaValueNow: number;
  };
  liked: boolean;
}
export const Player: PlayerType[] = [
  {
    id: 1,
    title: "Midnight Serenade",
    artist: "Wanderlost Explorers",
    description: "Enjoy the unlimited music tracks",
    imageUrl: media78,
    currentTime: "12.25",
    totalTime: "23.45",
    progress: {
      width: "50%",
      ariaValueNow: 50,
    },
    liked: true
  }
];

// Popular Artists
interface PopularArtistsType {
  id: number;
  title: string;
  author: string;
  posts: number;
  image: string;
  imageBg: string;
  border: string;
}
export const PopularArtists: PopularArtistsType[] = [
  {
    id: 1,
    title: "Tech Trends",
    author: "Sarah Johnson",
    posts: 598,
    image: face15,
    imageBg: "primary",
    border: "primary"
  },
  {
    id: 2,
    title: "History Rewind",
    author: "James Patterson",
    posts: 598,
    image: face13,
    imageBg: "secondary",
    border: "secondary"
  },
  {
    id: 3,
    title: "Business Blow",
    author: "Sona Kivinth",
    posts: 598,
    image: face16,
    imageBg: "danger",
    border: "danger"
  },
  {
    id: 4,
    title: "Science Explorers",
    author: "Emily Johnson",
    posts: 865,
    image: face12,
    imageBg: "warning",
    border: "warning"
  },
  {
    id: 5,
    title: "Creativity",
    author: "Afrith Davis",
    posts: 598,
    image: face4,
    imageBg: "info",
    border: "info"
  }
];



