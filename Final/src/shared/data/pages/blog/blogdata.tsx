import blog1 from '../../../../assets/images/media/blog/1.jpg';
import blog2 from '../../../../assets/images/media/blog/2.jpg';
import blog3 from '../../../../assets/images/media/blog/3.jpg';
import blog4 from '../../../../assets/images/media/blog/4.jpg';
import blog5 from '../../../../assets/images/media/blog/5.jpg';
import blog6 from '../../../../assets/images/media/blog/6.jpg';
import blog7 from '../../../../assets/images/media/blog/7.jpg';
import blog8 from '../../../../assets/images/media/blog/8.jpg';
import blog9 from '../../../../assets/images/media/blog/9.jpg';
import blog10 from '../../../../assets/images/media/blog/10.jpg';
import blog11 from '../../../../assets/images/media/blog/11.jpg';
import blog12 from '../../../../assets/images/media/blog/12.jpg';
import blog13 from '../../../../assets/images/media/blog/13.jpg';
import blog14 from '../../../../assets/images/media/blog/14.jpg';
import blog15 from '../../../../assets/images/media/blog/15.jpg';
import blog16 from '../../../../assets/images/media/blog/16.jpg';
import blog17 from '../../../../assets/images/media/blog/17.jpg';
import blog18 from '../../../../assets/images/media/blog/18.jpg';
import blog23 from '../../../../assets/images/media/blog/23.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';

interface BlogCardType {
    id: number;
    src: string;
    tag: string;
    tagClass: string;
    descriptiontitle: string;
}
export const BlogCards: BlogCardType[] = [
    { id: 1, src: blog14, tag: 'Automation', tagClass: 'primary', descriptiontitle: 'The Future of Automation: A Robot at Work' },
    { id: 2, src: blog17, tag: 'Digital Trends', tagClass: 'secondary', descriptiontitle: 'How Platforms Digital Communication' },
    { id: 3, src: blog15, tag: 'Robotics', tagClass: 'danger', descriptiontitle: 'The Role of  Robotic Hands in Modern  Technology' },
    { id: 4, src: blog16, tag: 'Gadgets', tagClass: 'info', descriptiontitle: 'Exploring the  Latest in Headphone  Technology.' },
]

export interface CategoryType {
    id: number;
    name: string;
    icon: string;
    badgeColor: string;
    itemCount: string;
}
export const Categories: CategoryType[] = [
    { id: 1, name: 'Classics', icon: 'service-line', badgeColor: 'primary', itemCount: "21" },
    { id: 2, name: '3D Animation', icon: 'box-3-line', badgeColor: 'secondary', itemCount: "16" },
    { id: 3, name: 'History', icon: 'history-line', badgeColor: 'danger', itemCount: "06" },
    { id: 4, name: 'Techniques', icon: 'spy-line', badgeColor: 'warning', itemCount: "18" },
    { id: 5, name: 'Reviews', icon: 'honour-line', badgeColor: 'info', itemCount: "09" },
    { id: 6, name: 'Characters', icon: 'creative-commons-by-line', badgeColor: 'orange', itemCount: "11" },
];

export interface BlogCardDataType {
    id: number;
    title: string;
    src?: string;
    likes: string;
    comments: string;
    authorSrc: string;
    name: string;
    description: string;
}
export const BlogCardsData: BlogCardDataType[] = [
    { id: 1, title: 'The Magic of  Voice  Acting in Cartoons', src: blog10, likes: '02 Likes', comments: '16 Comments', authorSrc: face4, name: 'Charlotte', description: 'Dive into how animation has advanced, from hand-drawn art to computer-generated wonders, while still keeping the magic alive.' },
    { id: 2, title: 'Why Cartoons Make Us Feel Good', src: blog11, likes: '19 Likes', comments: '04 Comments', authorSrc: face12, name: 'Benjamin', description: 'Explore the science behind why cartoons bring joy, with a deep dive into humor, visual storytelling, and colorful characters.' },
    { id: 3, title: 'The Art of Creating Believable Cartoons', src: blog12, likes: '55 Likes', comments: '12 Comments', authorSrc: face2, name: 'Isabella', description: "Unveil the hidden personalities and adventures  of your  favorite animated characters when the credits roll and the  screen  goes dark" },
    { id: 4, title: 'The Magic of  Voice  Acting in Cartoons', src: blog13, likes: '14 Likes', comments: '43 Comments', authorSrc: face14, name: 'William', description: 'Explore the rise of animated superheroes and how their stories have inspired generations to believe in the power of doing good.' },
]

export const BlogCardsData3: BlogCardDataType[] = [
    { id: 1, title: 'A Journey Through Classic Cartoons', likes: '02 Likes', comments: '16 Comments', authorSrc: face11, name: 'Alister Chuk', description: 'Step into the enchanting world of animated classics that have become cultural touchstones for generations. From the magical storytelling of Disney to the quirky charm of Saturday morning cartoons, these animated treasures continue to resonate with fans of all ages.' },
]

interface BlogCardData1Type {
    id: number;
    image: string;
    title: string;
    description: string;
    authorImage: string;
    authorName: string;
    date: string;
}
export const BlogCardsData1: BlogCardData1Type[] = [
    { id: 1, image: blog8, title: 'Iconic Cartoons That Changed the World Wide', description: 'Examine the cartoons that broke boundaries, changed cultural narratives, and forever altered the landscape of animated entertainment.', authorImage: face6, authorName: 'Abigail', date: '16,Sep 2024 - 11:25' },
    { id: 2, image: blog9, title: 'From Silly to Serious: Cartoons with Hidden Messages', description: 'Discover the deeper lessons and social commentary hidden within beloved animated series that go beyond their colorful exteriors.', authorImage: face16, authorName: 'Anthony', date: '25,Sep 2024 - 11:25' },
    { id: 3, image: blog23, title: 'The Power of Animation: Cartoons That Inspire', description: 'Highlight animated series that inspire positive change, creativity, and hope, showing how cartoons can influence both young and old minds.', authorImage: face14, authorName: 'Charlotte', date: '25,Sep 2024 - 11:25' },
]

interface FeaturedBlogType {
    id: number;
    image: string;
    author: string;
    content: string;
    date: string;
    isLast: boolean;
}
export const FeaturedBlogs: FeaturedBlogType[] = [
    { id: 1, image: blog14, author: 'Christopher Jack', content: 'There are many variations of passages of Lorem Ipsum available', date: '24,Jul 2024 - 18:27', isLast: false },
    { id: 2, image: blog15, author: 'Sophia Sam', content: 'Latin words, combined with a handful of model sentence', date: '28,Jul 2024 - 10:45', isLast: false },
    { id: 3, image: blog16, author: 'Anthony Karon', content: 'Ipsum omnis non fugit ad voluptate consequuntur, sed veritatis nesciunt, asperiores, provident temporibus!', date: '28,Sep 2024 - 08:32', isLast: false },
    { id: 4, image: blog17, author: 'Amelia Jackson', content: 'Contrary to popular belief, Lorem Ipsum is not simply random', date: '30,Jul 2024 - 08:32', isLast: false },
    { id: 5, image: blog18, author: 'Matthew Stuart', content: 'It was popularised in the 1960s with the release of Letraset sheets containing', date: '3,Aug 2024 - 11:56', isLast: true },
];

export const Tags = ["#Travel", "#Fitness", "#Fashion", "#FoodBlog", "#Crafting", "#BookReview", "#TechTalk", "#Parenting", "#Finance", "#SelfCare", "#Photography"];

interface Tag {
    text: string;
    color: 'primary' | 'secondary' | 'danger' | 'warning';
}
interface BlogPostType {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    tags: Tag[];
    textColor: 'primary' | 'secondary' | 'danger' | 'warning';
}
export const BlogPostsListView: BlogPostType[] = [
    { id: 1, category: 'Robotics', title: 'Autonomous Systems and Self-Driving Vehicles', description: "Artificial intelligence is evolving rapidly to make personal assistants smarter and more intuitive. Virtual assistants, powered by AI, will become increasingly capable of understanding complex tasks and personal preferences. Whether it's scheduling appointments, managing emails, or providing personalized recommendations, AI will become a more integral part of our daily lives.", image: blog4, tags: [{ text: 'Robotics', color: 'primary' }, { text: 'Technology', color: 'secondary' }, { text: 'Human', color: 'danger' }], textColor: 'primary', },
    { id: 2, category: 'Digital Trends', title: 'Navigating the Digital Future: Trends Shaping Tomorrow.', description: "Stay ahead of the curve with the latest insights into the digital world. From emerging technologies and industry innovations to digital marketing strategies and social media trends, our blog explores the ever-evolving landscape of the digital era. Join us as we dive deep into what's next for tech, business, and online culture—helping you stay informed, adaptable, and ready for the future.", image: blog5, tags: [{ text: 'FutureOfTech', color: 'primary' }, { text: 'TechTrends', color: 'secondary' }, { text: 'Blockchain', color: 'danger' }], textColor: 'secondary', },
    { id: 3, category: 'Automation', title: 'The Rise of Automation: Transforming Industries and Workflows', description: 'Explore the rapidly growing world of automation and its transformative impact on industries worldwide. From robotic process automation (RPA) to AI-driven systems, discover how automation is revolutionizing business operations, increasing efficiency, and reducing costs. Stay informed about the latest tools, trends.', image: blog6, tags: [{ text: 'Automation', color: 'primary' }, { text: 'Business', color: 'secondary' }, { text: 'Workflow', color: 'danger' }], textColor: 'danger', },
    { id: 4, category: 'Gadget', title: 'Gadgets of Tomorrow: Innovation at Your Fingertips', description: "Dive into the exciting world of cutting-edge gadgets and tech innovations that are shaping our daily lives. From the latest smart devices to wearables, home automation tools, and futuristic gadgets, our blog brings you up to speed on what's new, what's next, and what's worth your attention in the tech world.Stay ahead of the curve with in-depth reviews, unboxings, and expert insights on the most sought-after gadgets on the market. ", image: blog7, tags: [{ text: 'TechGadgets', color: 'primary' }, { text: 'FutureTech', color: 'secondary' }, { text: 'SmartHome', color: 'danger' }], textColor: 'warning', },
];

export const BlogSlidecarousel = [
    <div>
        <img src={blog2} className="d-block w-100 h-100 card-img" alt="..." />
    </div>,
    <div>
        <img src={blog3} className="d-block w-100 h-100 card-img" alt="..." />
    </div>,
    <div>
        <img src={blog1} className="d-block w-100 h-100 card-img" alt="..." />
    </div>
]
