import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';
import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import comppanyLogo10 from '../../../../assets/images/company-logos/10.png';



interface Avatar {
    img: string;
}

interface Listdata {
    id: number;
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
    progress1: number;
    priority: string;
    task: string;
    color: string;
    avatars: Avatar[];
}
export interface ProjectType {
    id: number;
    logo: string;
    title: string;
    startDate: string;
    endDate: string;
    progress1: string;
    priority: string;
    task: string;
    color: string;
    avatars: Avatar[];
}

export const Projectdata: ProjectType[] = [
    {
        id: 1,
        logo: comppanyLogo3,
        title: 'AI-powered responses for common',
        startDate: '07, Dec 2024',
        endDate: '30 Sep, 2024',
        progress1: '70',
        priority: 'Medium',
        task: '18/22',
        color: 'primary',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 2,
        logo: comppanyLogo6,
        title: 'Live chat with human representativ',
        startDate: '07 Jan, 2024',
        endDate: '09 Sep, 2024',
        progress1: '52',
        priority: 'Low',
        task: '05/20',
        color: 'secondary',
        avatars: [
            { img: face1 },
            { img: face2 },
        ]
    },
    {
        id: 3,
        logo: comppanyLogo1,
        title: 'Personalized chat experiences ba',
        startDate: '11 Nov, 2024',
        endDate: ' 30 Jul, 2024',
        progress1: '20',
        priority: 'Normal',
        task: '3/26 ',
        color: 'danger',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 4,
        logo: comppanyLogo9,
        title: 'Image optimization and lazy loadin',
        startDate: '12 Jul, 2024',
        endDate: '19 Feb, 2024',
        progress1: '90',
        priority: 'Medium',
        task: '10/52',
        color: 'warning',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 5,
        logo: comppanyLogo5,
        title: 'Mobile-first responsive design',
        startDate: '13 Nov, 2024',
        endDate: '18 Mar, 2024',
        progress1: '80',
        priority: 'High',
        task: '04/13',
        color: 'info',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 6,
        logo: comppanyLogo9,
        title: 'Dynamic layout changes based on',
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        progress1: '70',
        priority: 'Medium',
        task: '18/22',
        color: 'primary',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 7,
        logo: comppanyLogo10,
        title: 'Subtitles for videos and multimedia co',
        startDate: '19 Dec, 2024',
        endDate: '12 Jun, 2024',
        progress1: '30',
        priority: 'Low',
        task: '72/110',
        color: 'secondary',
        avatars: [
            { img: face1 },
        ]
    },
    {
        id: 8,
        logo: comppanyLogo1,
        title: 'Product filtering and sorting based o',
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        progress1: '70',
        priority: 'Normal',
        task: '11/34',
        color: 'danger',
        avatars: [
            { img: face1 },
            { img: face2 },
        ]
    },
]
export const ListTabdata: Listdata[] = [
    {
        id: 1,
        logo: comppanyLogo3,
        title: 'AI-powered responses for common',
        startDate: '07, Dec 2024',
        endDate: '30 Sep, 2024',
        progress1: 70,
        priority: 'Medium',
        task: '18/22',
        color: 'primary',
        avatars: [
            { img: face1 },
            { img: face2 },
            { img: face3 },
        ]
    },
    {
        id: 2,
        logo: comppanyLogo6,
        title: 'Option to search by images, text',
        startDate: '07 Jan, 2024',
        endDate: '09 Sep, 2024',
        progress1: 70,
        priority: 'Low',
        task: '12/17',
        color: 'secondary',
        avatars: [
            { img: face4 },
            { img: face5 },
            { img: face6 },
        ]
    },
    {
        id: 3,
        logo: comppanyLogo1,
        title: 'AI-powered responses for com',
        startDate: '11 Nov, 2024',
        endDate: ' 30 Jul, 2024',
        progress1: 50,
        priority: 'High',
        task: '05/10 ',
        color: 'danger',
        avatars: [
            { img: face7 },
            { img: face8 },
            { img: face9 },
        ]
    },
    {
        id: 4,
        logo: comppanyLogo9,
        title: 'Mobile-first responsive design',
        startDate: '12 Jul, 2024',
        endDate: '19 Feb, 2024',
        progress1: 80,
        priority: 'Normal',
        task: '18/22',
        color: 'warning',
        avatars: [
            { img: face10 },
            { img: face11 },
            { img: face12 },
        ]
    },
    {
        id: 5,
        logo: comppanyLogo5,
        title: 'Subtitles for videos and multim',
        startDate: '13 Nov, 2024',
        endDate: '18 Mar, 2024',
        progress1: 65,
        priority: 'High',
        task: '19/22',
        color: 'info',
        avatars: [
            { img: face13 },
            { img: face14 },
            { img: face15 },
        ]
    },
]

interface projectcard {
    title: string;
    svgIcon: string;
    text: string;
    avatarclor: string;
}

export const projectCards: projectcard[] = [
    {
        title: "Total Projects",
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                    width="24px" fill="#000">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 8h16v11H4z" opacity=".8" fill="#fff" />
                    <path
                        d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z" />
                </svg>`,
        text: "12,432",
        avatarclor: "primary shipping-icon mx-2"
    },
    {
        title: "New Projects",
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                    width="24px" fill="#000">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M13 4H6v16h12V9h-5V4zm3 10v2h-3v3h-2v-3H8v-2h3v-3h2v3h3z"
                        opacity=".8" fill="#fff" />
                    <path
                        d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
                </svg>`,
        text: "23,875",
        avatarclor: "secondary shipping-icon mx-2"
    },
    {
        title: "Completed Projects",
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                    <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                    </g>
                    <g>
                        <path
                            d="M13,9V4H6v16h12V9H13z M10.94,18L7.4,14.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L10.94,18z"
                            opacity=".8" fill="#fff" />
                        <path
                            d="M14,2H6C4.9,2,4.01,2.9,4.01,4L4,20c0,1.1,0.89,2,1.99,2H18c1.1,0,2-0.9,2-2V8L14,2z M18,20H6V4h7v5h5V20z M8.82,13.05 L7.4,14.46L10.94,18l5.66-5.66l-1.41-1.41l-4.24,4.24L8.82,13.05z" />
                    </g>
                </svg>`,
        text: "7,865",
        avatarclor: "danger shipping-icon mx-2"
    },
    {
        title: "On going Projects",
        svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000">
                    <g>
                        <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                        <g>
                            <path
                                d="M4,8v11h7.08C11.03,18.67,11,18.34,11,18c0-3.87,3.13-7,7-7c0.7,0,1.37,0.1,2,0.29V8H4z"
                                opacity=".8" fill="#fff" />
                            <path
                                d="M4,19V8h16v3.29c0.72,0.22,1.4,0.54,2,0.97V8c0-1.11-0.89-2-2-2h-4V4c0-1.11-0.89-2-2-2h-4C8.89,2,8,2.89,8,4v2H4 C2.89,6,2.01,6.89,2.01,8L2,19c0,1.11,0.89,2,2,2h7.68c-0.3-0.62-0.5-1.29-0.6-2H4z M10,4h4v2h-4V4z" />
                        </g>
                        <path
                            d="M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M19.65,20.35l-2.15-2.15V15h1v2.79l1.85,1.85 L19.65,20.35z" />
                    </g>
                </svg>`,
        text: "345",
        avatarclor: "warning shipping-icon mx-2"
    },
    {
        title: "In Review Projects",
        svgIcon: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                    width="24px" fill="#000">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 8v11h13.74l-11-11zm8.4 0l7.6 7.6V8z" opacity=".8"
                        fill="#fff" />
                    <path
                        d="M10 4h4v2h-3.6l2 2H20v7.6l2 2V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-.99 0-1.8.7-1.96 1.64L10 5.6V4zM3.4 1.84L1.99 3.25 4.74 6H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h15.74l2 2 1.41-1.41L3.4 1.84zM4 19V8h2.74l11 11H4z" />
                </svg>`,
        text: "2,754",
        avatarclor: "info shipping-icon mx-2"
    }
];