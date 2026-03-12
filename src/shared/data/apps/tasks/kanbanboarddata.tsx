import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';

type Badge = {
    label: string;
    bdgclass: string;
};
export interface newtaskType {
    id: string;
    badges: Badge[];
    title: string;
    description: string;
    priority: string;
    status: string;
    avatar: string;
    name: string;
    role: string;
    contacts: string;
    images: string;
    messages: string;
    startdate: string;
    enddate: string;
    cardClass: string;
    cardclass?: string
}

export const NewTaskData: newtaskType[] = [
    {
        id: "#SPRU115",
        badges: [{ label: 'Authentication', bdgclass: 'secondary-transparent' }],
        title: "Create Wireframes.",
        description:
            "Outline the project goals, objectives, and requirements.",
        priority: 'Low',
        status: '30',
        avatar: face4,
        name: 'Jessica',
        role: 'Team Lead',
        contacts: '03',
        images: '08',
        messages: '04',
        startdate: "01 Sep, 2024",
        enddate: "30 Sep, 2024",
        cardClass: 'primary'
    },
    {
        id: "#SPRU117",
        badges: [{ label: 'Marketing', bdgclass: 'secondary-transparent' }],
        title: "Optimize Query Performance.",
        description: "Improve the efficiency and speed of DB queries.",
        priority: 'High',
        status: '10',
        avatar: face11,
        name: 'Smith Ki',
        role: 'Project Manager',
        contacts: '03',
        images: '23',
        messages: '12',
        startdate: " 05 Sep, 2024",
        enddate: "25 Sep, 2024",
        cardClass: 'primary'
    },
];



export const ToDotask: newtaskType[] = [
    {
        id: "#SPRU124",
        badges: [
            { label: 'UI Design', bdgclass: 'danger-transparent' },
            { label: 'Development', bdgclass: 'secondary-transparent' },
        ],
        title: "Update User Access Permissions",
        description:
            "Revise and manage user access levels to ensure",
        priority: 'Medium',
        status: '40',
        avatar: face15,
        name: 'Daniel D',
        role: 'Team Lead',
        contacts: '03',
        images: '10',
        messages: '18',
        startdate: "10 Sep, 2024",
        enddate: "20 Oct, 2024",
        cardClass: 'secondary'
    },
    {
        id: "#SPRU247",
        badges: [{ label: 'Design', bdgclass: 'secondary-transparent' }],
        title: "Ensure Dashboard Security",
        description: "Protect the dashboard from unauthorized access to safeguard.",
        priority: 'Low',
        status: '15',
        avatar: face6,
        name: 'Sonia Nerwal',
        role: 'Team Lead',
        contacts: '03',
        images: '05',
        messages: '02',
        startdate: "15 Sep, 2024",
        enddate: "30 Oct, 2024",
        cardClass: 'secondary'
    },
];



export const OnGoingData: newtaskType[] = [
    {
        id: "#SPRU345",
        badges: [{ label: 'Review', bdgclass: 'secondary-transparent' }],
        title: "Analyze Dashboard Performance.",
        description:
            "Evaluate the efficiency and effectiveness of the dashboard.",
        priority: 'Medium',
        status: '22',
        avatar: face12,
        name: 'Monish',
        role: 'Project Lead',
        contacts: '03',
        images: '09',
        messages: '35',
        startdate: "20 Sep, 2024",
        enddate: "15 Oct, 2024",
        cardClass: 'danger'
    },
    {
        id: "#SPRU117",
        badges: [{ label: 'Marketing', bdgclass: 'secondary-transparent' }],
        title: "Optimize Query Performance.",
        description: "Improve the efficiency and speed of DB queries.",
        priority: 'High',
        status: '10',
        avatar: face11,
        name: 'Smith Ki',
        role: 'Project Manager',
        contacts: '03',
        images: '23',
        messages: '12',
        startdate: "20 Sep, 2024",
        enddate: "15 Oct, 2024",
        cardClass: 'danger'
    },
];



export const ReviewTaskData: newtaskType[] = [
    {
        id: "#SPRU553",
        badges: [{ label: 'Review', bdgclass: 'secondary-transparent' }],
        title: "Test Dashboard Usability",
        description:
            "Assess the ease of use, accessibility, and overall user experience.",
        priority: 'High',
        status: '100',
        avatar: face7,
        name: 'Arora',
        role: 'Team Manager',
        contacts: '03',
        images: '09',
        messages: '35',
        startdate: "20 Sep, 2024",
        enddate: "15 Oct, 2024",
        cardClass: 'warning'
    },
    {
        id: "#SPRU665",
        badges: [{ label: 'Development', bdgclass: 'secondary-transparent' }],
        title: "Update Security Certifications",
        description: "Ensure that all security certifications are current and meet.",
        priority: 'Low',
        status: '100',
        avatar: face13,
        name: 'kerindh',
        role: 'Project Lead',
        contacts: '03',
        images: '22',
        messages: '12',
        startdate: "12 Nov, 2024",
        enddate: "23 Dec, 2024",
        cardClass: 'warning'
    },
    {
        id: "#SPRU205",
        badges: [{ label: 'Discussion', bdgclass: 'secondary-transparent' }],
        title: "Test Integration Stability",
        description: "Ensure that integrated components or systems work together.",
        priority: 'High',
        status: '100',
        avatar: face14,
        name: 'Iswar',
        role: 'Project Manager',
        contacts: '03',
        images: '11',
        messages: '12',
        startdate: "23 Jan, 2024",
        enddate: "15 Jul, 2024",
        cardClass: 'warning',
        cardclass: 'mb-1'
    },
];

export const Boardmembers = [
    { id: 1, image: face2, status: "" },
    { id: 2, image: face11, status: "" },
    { id: 3, image: face8, status: "online" },
    { id: 4, image: face12, status: "" },
    { id: 5, image: face1, status: "" },
    { id: 6, image: face15, status: "online" },
    { id: 7, image: face4, status: "" },
    { id: 8, image: face6, status: "online" },
]
export const BoardImages = [
    { id: 1, image: face2, color: 'primary' },
    { id: 2, image: face8, color: 'secondary' },
    { id: 3, image: face2, color: 'danger' },
    { id: 4, image: face10, color: 'warning' },
    { id: 5, image: face4, color: 'info' },
    { id: 6, image: face13, color: 'primary' }
]




export const Tags = [
    // { value: 1, label: 'Select Tag' },
    { value: 1, label: 'UI/UX' },
    { value: 2, label: 'Marketing' },
    { value: 3, label: 'Finance' },
    { value: 4, label: 'Designing' },
    { value: 5, label: 'Admin' },
    { value: 6, label: 'Authentication' },
    { value: 7, label: 'Product' },
    { value: 8, label: 'Development' },
];
export const Badgedata = [
    { id: 1, text: 'Development', color: 'secondary' },
    { id: 2, text: 'Marketing', color: 'secondary' },
    { id: 3, text: 'UX Design', color: 'primary' },
    { id: 4, text: 'UX Design', color: 'info' },
    { id: 5, text: 'Design', color: 'purple' },
    { id: 6, text: 'UI', color: 'warning' },
    { id: 7, text: 'Development', color: 'danger' },
    { id: 8, text: 'UX Design', color: 'primary' },
    { id: 9, text: 'React', color: 'pink' },
    { id: 10, text: 'Front end', color: 'info' },
];
export const simpleItems1 = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Kairar Advin' },
    { value: 3, label: 'Hercules Jhon' },
    { value: 4, label: 'Mayour Kim' },
];
export const Option1 = [
    { value: 'Sort By', label: 'Sort By' },
    { value: 'Newest', label: 'Newest' },
    { value: 'Date Added', label: 'Date Added' },
    { value: 'Type', label: 'Type' },
    { value: 'A - Z', label: 'A - Z' },
];