import jpg1 from '../../../assets/images/ecommerce/jpg/1.jpg';
import jpg2 from '../../../assets/images/ecommerce/jpg/2.jpg';
import jpg4 from '../../../assets/images/ecommerce/jpg/4.jpg';
import jpg5 from '../../../assets/images/ecommerce/jpg/5.jpg';
import png9 from '../../../assets/images/ecommerce/jpg/9.jpg';
import china from '../../../assets/images/flags/china_flag.jpg';
import french from '../../../assets/images/flags/french_flag.jpg';
import germany from '../../../assets/images/flags/germany_flag.jpg';
import italy from '../../../assets/images/flags/italy_flag.jpg';
import russia from '../../../assets/images/flags/russia_flag.jpg';
import spain from '../../../assets/images/flags/spain_flag.jpg';
import uae from '../../../assets/images/flags/uae_flag.jpg';
import usa from '../../../assets/images/flags/us_flag.jpg';
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';




interface LanguageOptionType {
    id: number;
    code: string;
    label: string;
    flag: string;
}
interface NotificationType {
    id: number;
    avatar?: string;
    icon?: string;
    user?: string;
    message: string;
    comment?: string;
    timestamp: string;
    timeAgo: string;
    statusColor: string;
    content?: string;
    someContent?: boolean
}

export const cartProduct = [
    {
        id: 1,
        src: jpg1,
        name: 'SoundSync Headphones',
        qty: '1',
        color: 'Ocean Blue',
        oldpr: '99',
        newpr: '75',
        class: 'cart-headset',
    },
    {
        id: 2,
        src: jpg2,
        name: 'Western Ladies Bag',
        qty: '2',
        color: 'Blush Pink',
        oldpr: "149",
        newpr: '120',
        class: 'cart-handbag',
    },
    {
        id: 3,
        src: png9,
        name: 'Elite Shoe',
        qty: '1',
        color: 'Sky Blue',
        oldpr: '49',
        newpr: '30',
        class: 'cart-alaramclock',
    },
    {
        id: 4,
        src: jpg4,
        name: 'Aus Polo Assn Laptop',
        qty: '3',
        color: ' Soft Peach',
        oldpr: '129',
        newpr: '70',
        class: 'cart-sweatshirt',
    },
    {
        id: 5,
        src: jpg5,
        name: 'Wooden Sofa Set',
        qty: '2',
        color: 'Crimson Red',
        oldpr: '249',
        newpr: '200',
        class: 'cart-smartwatch',
    },
],
    Languages: LanguageOptionType[] = [
        { id: 1, code: "en", label: "English", flag: usa },
        { id: 2, code: "es", label: "español", flag: spain },
        { id: 3, code: "fr", label: "français", flag: french },
        { id: 4, code: "ar", label: "عربي", flag: uae },
        { id: 5, code: "de", label: "Deutsch", flag: germany },
        { id: 6, code: "zh", label: "中国人", flag: china },
        { id: 7, code: "it", label: "Italiano", flag: italy },
        { id: 8, code: "ru", label: "Русский", flag: russia },
    ],
    NotificationsViewall: NotificationType[] = [
        {
            id: 1,
            avatar: face1,
            message: `<a href="javascript:void(0);"><span class="fw-semibold me-1">@Williams Jhon</span>Following You</a>`,
            timestamp: "Wednesday 3:42 PM",
            timeAgo: "4 Sec",
            statusColor: "danger",

        },
        {
            id: 2,
            avatar: face2,
            message: `<a href="javascript:void(0);"><span class="fw-semibold me-1">@JasonSam</span>Commented On your  post.</a>`,
            comment: "Amazing! Fast, to the point, really amazing to work with them!!!",
            timestamp: "Wednesday 3:42 PM",
            timeAgo: "12 Sec",
            statusColor: "primary",
            someContent: true
        },
        {
            id: 3,
            icon: "ri-shopping-bag-3-line fs-18",
            message: `<a href="javascript:void(0);">Successfully purchages a business plan for <span class="text-danger fw-medium">$19,269</span></a>`,
            timestamp: "Monday 11:30 AM",
            timeAgo: "15 Min",
            statusColor: "danger",
        },
        {
            id: 4,
            avatar: face4,
            message: `<a href="javascript:void(0);"><span class="fw-semibold me-1">@Khabib Hussain</span>Liked Your  Post.</a>`,
            timestamp: "Saturday 9:30 PM",
            timeAgo: "2 Days",
            statusColor: "primary",
        },
    ],
    NotificationsMentions: NotificationType[] = [
        {
            id: 1,
            avatar: face6,
            user: "@Meisha Kerr",
            message: "Liked Your Post",
            timestamp: "Friday 11.19 PM",
            timeAgo: "5 Sec",
            statusColor: "danger",
        },
        {
            id: 2,
            avatar: face7,
            user: "@Jessica",
            message: "Commented On your post.",
            comment: "It sounds like you had a great experience! What specifically?",
            timestamp: "Thursday 4.55 PM",
            timeAgo: "12 Sec",
            statusColor: "primary",
            someContent: true
        },
        {
            id: 3,
            avatar: face8,
            user: "@Khabib Hussain",
            message: "Added You on Story..",
            timestamp: "Monday 8.30 AM",
            timeAgo: "2 Hours",
            statusColor: "danger",
        },
        {
            id: 4,
            avatar: face8,
            user: "@Simon Cowall",
            message: "Reply Your Story.",
            comment: "Shall We Meet On Meeting Today?",
            timestamp: "Tuesday 12.17 PM",
            timeAgo: "1 Day",
            statusColor: "danger",
        },
    ],
    NotificationsFollow: NotificationType[] = [
        {
            id: 1,
            avatar: face2,
            user: "@Kakashi Si",
            message: "Started Following You",
            timestamp: "Friday 11.19 PM",
            timeAgo: "2 Sec",
            statusColor: "primary",
        },
        {
            id: 2,
            avatar: face3,
            user: "@RoboRhythms",
            message: "Accepted Your Request.",
            timestamp: "Thursday 4.55 PM",
            timeAgo: "11 Sec",
            statusColor: "danger",
        },
        {
            id: 3,
            avatar: face4,
            user: "@Sarah Brown",
            message: "Started Following You",
            timestamp: "Monday 8.30 AM",
            timeAgo: "12 Min",
            statusColor: "primary",
        },
        {
            id: 4,
            avatar: face8,
            user: "@Jane Smith",
            message: "Sent A Friend Request.",
            timestamp: "Tuesday 12.17 PM",
            timeAgo: "5 Days",
            statusColor: "danger",
        },
    ],
    NotificationsInvites = [
        {
            id: 1,
            iconClass: "ri-shopping-bag-3-line",
            iconBg: "primary",
            message: `<a href="javascript:void(0);">Successfully purchages a business plan for <span class="text-danger fw-medium">$19,269</span></a>`,
            timestamp: "Monday 11.30 AM",
            timeAgo: "Yesterday",
            statusColor: "primary",
        },
        {
            id: 2,
            iconClass: "ri-wallet-3-line",
            iconBg: "secondary",
            message: `<a href="javascript:void(0);">You Withdraw a<span class="fw-semibold text-primary"> $500 </span>From SBI ATM</a>`,
            timestamp: "Monday 11.30 AM",
            timeAgo: "2 Days",
            statusColor: "danger",
        },
        {
            id: 3,
            iconClass: "ri-slideshow-3-line",
            iconBg: "danger",
            message: `<a href="javascript:void(0);" class="d-flex">Your Inviting to the meeting<span class="fw-semibold text-orange"> Tommorow</span></a>`,
            timestamp: "Monday 8.30 AM",
            timeAgo: "12 Min",
            statusColor: "primary",
        },
        {
            id: 4,
            iconClass: "ri-article-line",
            iconBg: "warning",
            message: `<a href="javascript:void(0);"><span class="fw-semibold me-1 text-warning d-inline-block">@ Jane Smith</span>Assign a work to you</a>`,
            timestamp: "Tuesday 12.17 PM",
            timeAgo: "5 Days",
            statusColor: "danger",
        },
    ];





