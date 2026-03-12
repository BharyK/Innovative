import blog14 from '../../../../assets/images/media/blog/14.jpg'
import blog4 from '../../../../assets/images/media/blog/4.jpg'
import blog5 from '../../../../assets/images/media/blog/5.jpg'
import blog6 from '../../../../assets/images/media/blog/6.jpg'
import blog18 from '../../../../assets/images/media/blog/18.jpg'
import blog15 from '../../../../assets/images/media/blog/15.jpg'
import blog24 from '../../../../assets/images/media/blog/24.jpg'
import blog25 from '../../../../assets/images/media/blog/25.jpg'



export interface RecentPostType {
  id: number;
  avatar: string;
  category: string;
  categoryClass: string;
  title: string;
  date: string;
}
export const RecentPosts: RecentPostType[] = [
  { id: 1, avatar: blog14, category: 'Technology', categoryClass: 'primary', title: 'Introduction to AI in Web Development', date: '2024-02-19 10:30 AM', },
  { id: 2, avatar: blog4, category: 'Travel', categoryClass: 'secondary', title: 'Exploring Beautiful Landscapes in New Zealand', date: '2024-02-18 03:45 PM', },
  { id: 3, avatar: blog18, category: 'Health & Wellness', categoryClass: 'warning', title: '10 Tips for a Healthy Lifestyle', date: '2024-02-17 08:15 AM', },
  { id: 4, avatar: blog15, category: 'Food & Cooking', categoryClass: 'danger', title: 'Delicious Recipes for a Summer BBQ', date: '2024-02-16 01:00 PM', },
];

export const PopularTags = [
  '#blogger',
  '#styleblogger',
  '#livecolorfully',
  '#amwriting',
  '#analytics',
  '#designblogger',
  '#picoftheday',
  '#adventure',
  '#landscape',
  '#fitnessgoals',
  '#foodblogger',
  '#vegan',
  '#portrait',
  '#canonphotography',
  '#fineart',
  '#trending',
  '#lifestyle',
  '#animation',
  '#classiccartoons',
  '#3Danimation',
  '#cartoonart',
  '#voiceacting',
  '#animationreviews',
  '#animatedfilms',
  '#animationtechniques',
  '#animationhistory',
  '#animatedseries',
];

export const BlogGalleryData = [
  { src: blog24},
  { src: blog25 },
  { src: blog5 },
  { src: blog4 },
  { src: blog6 },
]