import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';

interface EmailType {
    id: number;
    starred: boolean;
    important: boolean;
    sender: string;
    avatar: string;
    subject: string;
    content: string;
    receivedTime: string;
    badge?: string;
    color?: string;
    selected?: boolean;
    borderClass?: string
}

export const EmailsData: EmailType[] = [
    {
        id: 1,
        starred: true,
        important: false,
        sender: 'Amelia Turner',
        avatar: face7,
        subject: '[Reminder] Client Meeting at 3 PM Today',
        content: 'Hi John, just a quick reminder about our meeting with ABC Corp at 3 PM. Let me know if you need any changes. Regards, Sarah.',
        receivedTime: '10:15 AM'
    },
    {
        id: 2,
        starred: false,
        important: false,
        sender: 'Sarah Smith',
        avatar: face6,
        subject: 'Invoice #45678 – Payment Due Soon',
        content: 'Dear Sarah, your invoice for February services is attached. Kindly process the payment before the due date. Let me know if you have any questions. Best, Finance Team.',
        receivedTime: '09:45 AM',
        selected: true
    },
    {
        id: 3,
        starred: true,
        important: true,
        sender: 'David Johnson',
        avatar: face14,
        subject: 'Project Alpha – Weekly Update & Next Steps',
        content: 'Hi David, please find attached the latest updates on Project Alpha. Let’s connect tomorrow to discuss the next steps. Regards, James.',
        badge: 'Personal',
        color: 'primary',
        receivedTime: '01 Mar'
    },
    {
        id: 4,
        starred: true,
        important: false,
        sender: 'Emily Carter',
        avatar: face4,
        subject: 'HR Policy Changes Effective Next Month',
        content: 'Hello Emily, please review the attached HR policy changes regarding annual leaves and remote work. Let us know if you have any concerns. HR Department.',
        receivedTime: '01 Mar'
    },
    {
        id: 5,
        starred: false,
        important: false,
        sender: 'Mark Wilson',
        avatar: face13,
        subject: 'Your Subscription is Expiring',
        content: 'Hi Mark, your premium subscription is set to expire on March 5. Click here to renew and continue enjoying premium features.',
        badge: 'Social',
        color: 'secondary',
        receivedTime: '29 Feb'
    },
    {
        id: 6,
        starred: true,
        important: false,
        sender: 'Olivia Brown',
        avatar: face3,
        subject: 'Job Application for Marketing Analyst',
        content: 'Dear Olivia, thank you for applying to our company. Your application is under review, and we will get back to you soon. Best regards, HR Team.',
        badge: 'Promotion',
        color: 'warning',
        receivedTime: '29 Feb'
    },
    {
        id: 7,
        starred: false,
        important: false,
        sender: 'Daniel Lee',
        avatar: face12,
        subject: 'Top Industry News & Trends',
        content: 'Hello Daniel, this week’s newsletter covers the latest trends in technology and business. Don’t miss out on our expert insights! Read more inside.',
        receivedTime: '29 Feb'
    },
    {
        id: 8,
        starred: false,
        important: true,
        sender: 'Sophia Miller',
        avatar: face2,
        subject: 'Unusual Login Attempt Detected',
        content: 'Hi Sophia, we detected an unusual login attempt on your account from a new device. If this wasn’t you, please reset your password immediately.',
        receivedTime: '29 Feb'
    },
    {
        id: 9,
        starred: false,
        important: false,
        sender: 'Michael Adams',
        avatar: face15,
        subject: 'Your Order #98765 Has Been Shipped!',
        content: 'Hi Michael, your order has been dispatched and is expected to arrive within 3-5 business days. Track your order using the link inside.',
        receivedTime: '29 Feb'
    },
    {

        id: 10,
        starred: true,
        important: false,
        sender: 'Emma White',
        avatar: face5,
        subject: 'Annual Tech Conference 2025',
        content: 'Dear Emma, you’re invited to our exclusive Tech Conference 2025. Join industry leaders to discuss upcoming trends. Reserve your spot today!',
        receivedTime: '28 Feb',
        borderClass: 'border-bottom-0'
    }]

interface MailType {
    id: number;
    label: string;
    iconClass: string;
    badge?: string;
    badgeClass?: string;
}
export const MailTypes: MailType[] = [
    { id: 1, label: 'Inbox', iconClass: 'inbox-archive-line', badge: '26', badgeClass: 'secondary' },
    { id: 2, label: 'Sent', iconClass: 'send-plane-2-line' },
    { id: 3, label: 'Drafts', iconClass: 'draft-line' },
    { id: 4, label: 'Spam', iconClass: 'spam-2-line', badge: '6', badgeClass: 'danger' },
    { id: 5, label: 'Important', iconClass: 'bookmark-line' },
    { id: 6, label: 'Trash', iconClass: 'delete-bin-line' },
    { id: 7, label: 'Archive', iconClass: 'archive-line' },
    { id: 8, label: 'Starred', iconClass: 'star-line', badge: '16', badgeClass: 'warning' }
];

interface LabelType {
    id: number;
    name: string;
    iconClass: string;
}
export const Labels: LabelType[] = [
    { id: 1, name: 'Mail', iconClass: 'secondary' },
    { id: 2, name: 'Home', iconClass: 'danger' },
    { id: 3, name: 'Work', iconClass: 'success' },
    { id: 4, name: 'Friends', iconClass: 'dark' }
];

interface RecipientType {
    id: number;
    name: string;
    image: string;
    status: string;
}
export const Recipients: RecipientType[] = [
    { id: 1, name: 'Abigail Scott', image: face5, status: 'online' },
    { id: 2, name: 'Amelia Turner', image: face7, status: 'online' },
    { id: 3, name: 'Aria Robinson', image: face4, status: 'offline' },
    { id: 4, name: 'Harper Wilson', image: face8, status: 'offline' },
    { id: 5, name: 'Olivia Davis', image: face3, status: 'offline' },
    { id: 6, name: 'Sophia White', image: face11, status: 'offline' },
    { id: 7, name: 'Nathan Bennett', image: face16, status: 'online' },
    { id: 8, name: 'Henry Morgan', image: face10, status: 'offline' },
    { id: 9, name: 'Leo Phillips', image: face15, status: 'offline' }
];

interface Countryoptions1 {
    value: string;
    label: string;
}
export const Maildata: Countryoptions1[] = [
    { value: 'jay@gmail.com', label: 'jay@gmail.com' },
    { value: 'kia@gmail.com', label: 'kia@gmail.com' },
    { value: 'don@gmail.com', label: 'don@gmail.com' },
    { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
]