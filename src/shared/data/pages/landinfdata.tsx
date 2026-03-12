import SpkLandingswiper from "../../@spk-reusable-components/reusable-pages/spk-landingswiper";
import face1 from '../../../assets/images/faces/1.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import team1 from '../../../assets/images/faces/team/1.png'
import team2 from '../../../assets/images/faces/team/2.png'
import team3 from '../../../assets/images/faces/team/3.png'
import type { ReactNode } from "react";


const UsersIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M12 4c-4.42 0-8 3.58-8 8 0 1.95.7 3.73 1.86 5.12C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C19.3 15.73 20 13.95 20 12c0-4.42-3.58-8-8-8zm0 9c-1.93 0-3.5-1.57-3.5-3.5S10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13z" enableBackground="new" opacity=".3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.34-.56-4.65-1.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5zm6.14-2.88C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12z" /><path d="M12 5.93c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /></g></g></svg>
const ElementsIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g><rect fill="none" height="24" width="24" /></g><g><g><rect height="4" opacity=".3" width="4" x="5" y="5" /><rect height="4" opacity=".3" width="4" x="5" y="15" /><rect height="4" opacity=".3" width="4" x="15" y="15" /><rect height="4" opacity=".3" width="4" x="15" y="5" /><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z" /><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z" /><path d="M13,21h8v-8h-8V21z M15,15h4v4h-4V15z" /><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z" /></g></g></svg>
const ProfitIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"> <path d="M0 0h24v24H0V0z" fill="none"></path> <path d="M4 17h16v2H4zm13-7h-2V8H9v2H7V8H4v6h16V8h-3z" opacity=".3"></path> <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path> </svg>
const DownloadsIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19.21 12.04l-1.53-.11-.3-1.5C16.88 7.86 14.62 6 12 6 9.94 6 8.08 7.14 7.12 8.96l-.5.95-1.07.11C3.53 10.24 2 11.95 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3 0-1.55-1.22-2.86-2.79-2.96zM12 17l-4-4h2.55v-3h2.91v3H16l-4 4z" opacity=".3" /><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-5.55-8h-2.9v3H8l4 4 4-4h-2.55z" /></svg>

interface LandingCardType {
    id: number;
    class: string;
    svg: ReactNode;
    number: number;
    title: string;
}
export const LandingCards: LandingCardType[] = [
    { id: 1, class: "primary", svg: UsersIcon, number: 2000, title: "Total Users", },
    { id: 2, class: "secondary", svg: ElementsIcon, number: 123, title: "Total Elements", },
    { id: 3, class: "danger", svg: ProfitIcon, number: 12753, title: "Total Profit", },
    { id: 4, class: "info", svg: DownloadsIcon, number: 2634, title: "Total Downloads", },
]

const ExperienceIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" /></svg>
const ProfessionalsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
const SolutionsIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-apps"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" /><path d="M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z" /></svg>

interface FeatureType {
    id: number;
    svgClass: string;
    title: string;
    description: string;
    svg: ReactNode;
}
export const FeatureData: FeatureType[] = [
    {
        id: 1,
        svgClass: 'primary',
        title: 'Extensive Industry Experience',
        description: 'With over 4 years in the industry, we have honed our skills and built a reputation for delivering quality and reliability.',
        svg: ExperienceIcon,
    },
    {
        id: 2,
        svgClass: 'secondary',
        title: 'Dedicated Professionals',
        description: 'Our team comprises skilled professionals committed to providing exceptional service and innovative solutions.',
        svg: ProfessionalsIcon,
    },
    {
        id: 3,
        svgClass: 'danger',
        title: 'Customized Solutions',
        description: 'We believe in a personalized approach, tailoring our services to fit the unique requirements and preferences of each client.',
        svg: SolutionsIcon,
    },
];

const CustomizationIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>    <path d="M0,0h24v24H0V0z" fill="none" /></g><g>    <g>        <path d="M12,4C8.97,4,6.5,6.47,6.5,9.5c0,2.47,1.49,3.89,2.35,4.5h6.3 c0.86-0.61,2.35-2.03,2.35-4.5C17.5,6.47,15.03,4,12,4z" enableBackground="new" opacity=".8" fill="#fff" />        <path d="M12,22c1.1,0,2-0.9,2-2h-4C10,21.1,10.9,22,12,22z" />        <rect height="2" width="8" x="8" y="17" />        <path d="M12,2C7.86,2,4.5,5.36,4.5,9.5c0,3.82,2.66,5.86,3.77,6.5h7.46c1.11-0.64,3.77-2.68,3.77-6.5C19.5,5.36,16.14,2,12,2z M15.15,14h-6.3C7.99,13.39,6.5,11.97,6.5,9.5C6.5,6.47,8.97,4,12,4s5.5,2.47,5.5,5.5C17.5,11.97,16.01,13.39,15.15,14z" />    </g></g></svg>
const SupportIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>    <rect fill="none" height="24" width="24" /></g><g>    <path d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z" opacity=".8" fill="#fff" />    <path d="M12.22,19.85c-0.18,0.18-0.5,0.21-0.71,0c-0.18-0.18-0.21-0.5,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39 c-0.19,0.2-0.51,0.19-0.71,0c-0.21-0.21-0.18-0.53,0-0.71l3.39-3.39l-1.41-1.41l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0 c-0.19-0.19-0.19-0.51,0-0.71l3.39-3.39L9.24,10.1l-3.39,3.39c-0.18,0.18-0.5,0.21-0.71,0c-0.19-0.2-0.19-0.51,0-0.71L9.52,8.4 l1.87,1.86c0.95,0.95,2.59,0.94,3.54,0c0.98-0.98,0.98-2.56,0-3.54l-1.86-1.86l0.28-0.28c0.78-0.78,2.05-0.78,2.83,0l4.24,4.24 c0.78,0.78,0.78,2.05,0,2.83L12.22,19.85z M21.83,13.07c1.56-1.56,1.56-4.09,0-5.66l-4.24-4.24c-1.56-1.56-4.09-1.56-5.66,0 l-0.28,0.28l-0.28-0.28c-1.56-1.56-4.09-1.56-5.66,0L2.17,6.71c-1.42,1.42-1.55,3.63-0.4,5.19l1.45-1.45 C2.83,9.7,2.96,8.75,3.59,8.12l3.54-3.54c0.78-0.78,2.05-0.78,2.83,0l3.56,3.56c0.18,0.18,0.21,0.5,0,0.71 c-0.21,0.21-0.53,0.18-0.71,0L9.52,5.57l-5.8,5.79c-0.98,0.97-0.98,2.56,0,3.54c0.39,0.39,0.89,0.63,1.42,0.7 c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7c0.07,0.52,0.3,1.02,0.7,1.42c0.4,0.4,0.9,0.63,1.42,0.7 c0.07,0.54,0.31,1.03,0.7,1.42c0.47,0.47,1.1,0.73,1.77,0.73c0.67,0,1.3-0.26,1.77-0.73L21.83,13.07z" /></g></svg>
const InnovativeIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><g>    <rect fill="none" height="24" width="24" /></g><g>    <g opacity=".8" fill="#fff">        <g>            <path d="M7.98,18.25c-0.29-0.9-0.57-1.94-0.76-3L6,16.07v2.98L7.98,18.25z M12,4.36c0,0-3,2.02-3,8.64c0,2.25,1,5,1,5h4 c0,0,1-2.75,1-5C15,6.38,12,4.36,12,4.36z M12,13c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C14,12.1,13.1,13,12,13z M18,19.05 v-2.98l-1.22-0.81c-0.19,1.05-0.47,2.1-0.76,3L18,19.05z" />        </g>    </g>    <g>        <g>            <path d="M14,11c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14,12.1,14,11z M7.98,18.25c-0.29-0.9-0.57-1.94-0.76-3L6,16.07v2.98 L7.98,18.25z M12,2c0,0,5,2,5,11l2.11,1.41c0.56,0.37,0.89,1,0.89,1.66V22l-5-2H9l-5,2v-5.93c0-0.67,0.33-1.29,0.89-1.66L7,13 C7,4,12,2,12,2z M12,4.36c0,0-3,2.02-3,8.64c0,2.25,1,5,1,5h4c0,0,1-2.75,1-5C15,6.38,12,4.36,12,4.36z M18,19.05v-2.98 l-1.22-0.81c-0.19,1.05-0.47,2.1-0.76,3L18,19.05z" />        </g>    </g></g></svg>
const ReliableIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /><path d="M5 6.3V11c0 4.52 2.98 8.69 7 9.93 4.02-1.23 7-5.41 7-9.93V6.3l-7-3.11L5 6.3zM18 9l-8 8-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z" opacity=".8" fill="#fff" /></svg>

interface ServiceType {
    id: number;
    title: string;
    description: string;
    borderColor: string;
    svg: ReactNode;
}
export const ServicesData: ServiceType[] = [
    {
        id: 1,
        title: 'Design and Customization',
        description: 'We provide tailored designs to meet your business needs.',
        borderColor: 'primary',
        svg: CustomizationIcon
    },
    {
        id: 2,
        title: '24/7 Support',
        description: 'Our support team is available round the clock for your assistance.',
        borderColor: 'secondary',
        svg: SupportIcon
    },
    {
        id: 3,
        title: 'Innovative Solutions',
        description: 'We offer cutting-edge solutions to ensure business growth.',
        borderColor: 'danger',
        svg: InnovativeIcon
    },
    {
        id: 4,
        title: 'Reliable Performance',
        description: 'Our services guarantee stable and high-performance results.',
        borderColor: 'warning',
        svg: ReliableIcon
    }
]

export interface TeamMemberType {
    id: number;
    name: string;
    role: string;
    image: string;
    colorClass: string;
}
export const TeamMembersData: TeamMemberType[] = [
    { id: 1, name: 'Selena Rivera', role: 'MARKETING DIRECTOR', image: team1, colorClass: 'primary' },
    { id: 2, name: 'Emily Johnson', role: 'PRODUCT MANAGER', image: team2, colorClass: 'secondary' },
    { id: 3, name: 'Sarah Davis', role: 'MARKETING SPECIALIST', image: team3, colorClass: 'danger' },
    { id: 4, name: 'Sarah Davis', role: 'LEAD DESIGNER', image: team1, colorClass: 'warning' },
];

export interface FaqItemType {
    id: number;
    title: string;
    content: string;
    bodyClass: string;
}
export const FaqsQuestionsAnswers: FaqItemType[] = [
    {
        id: 1,
        title: '1. How do I update my account settings?',
        content: 'You can update your account settings by going to the settings page, where you can change your personal information, password, and notification preferences.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 2,
        title: '2. How can I reset my password?',
        content: 'To reset your password, go to the login page and click on the "Forgot Password" link. You will receive an email with instructions to reset your password.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 3,
        title: '3. How do I change my email address?',
        content: 'To change your email address, navigate to the account settings page, where you can enter a new email address and verify it through a confirmation email.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 4,
        title: '4. How can I enable two-factor authentication?',
        content: 'To enable two-factor authentication, go to your account settings and click on the "Security" tab. You can enable two-factor authentication using an authenticator app or SMS.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 5,
        title: '5. How do I delete my account?',
        content: 'If you want to delete your account, please visit the account settings page and follow the instructions under the "Delete Account" section. Note that this action is irreversible.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    }
];

export const FaqsQuestionsAnswers1: FaqItemType[] = [
    {
        id: 1,
        title: '1. How can I update my privacy settings?',
        content: 'To update your privacy settings, navigate to the "Privacy & Security" section in your account settings. Here, you can manage data sharing options, control who sees your profile information, and adjust permissions for third-party apps.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 2,
        title: '2. How do I enable two-factor authentication?',
        content: 'To enable two-factor authentication, go to the "Security Settings" and choose the two-factor authentication option. You can set it up using an authenticator app or receive codes via SMS for enhanced account security.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 3,
        title: '3. How do I manage my data sharing preferences?',
        content: 'You can manage your data sharing preferences by visiting the "Privacy Settings" page. Here, you can control how your data is shared with third-party services.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 4,
        title: '4. How do I secure my account if I suspect unauthorized access?',
        content: 'If you suspect unauthorized access to your account, go to the "Security" section and review your recent activity. You can log out of all devices, reset your password, and enable two-factor authentication for added protection.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    },
    {
        id: 5,
        title: '5. How can I delete my personal data from the platform?',
        content: 'You can request the deletion of your personal data by navigating to the "Privacy Settings" page and selecting the option to delete your data. Note that this action is irreversible, and your data will be permanently removed from the platform.',
        bodyClass: ' ps-3 m-3 mt-1 border-primary border-3 border-start text-default bg-primary bg-opacity-10',
    }
];

export interface TestimonialType {
    id: number;
    category: string;
    description: string;
    name: string;
    title: string;
    image: string;
    theme: string;
}
export const Testimonial: TestimonialType[] = [
    {
        id: 1,
        category: 'User Experience',
        description: 'The customizable templates and clean, user-friendly interface make designing creative assets a breeze. It has boosted our team’s efficiency and allowed us to meet tight deadlines with ease.',
        name: 'Clara Johnson',
        title: 'Senior Graphic Designer',
        image: face1,
        theme: 'primary'
    },
    {
        id: 2,
        category: 'Customer Support',
        description: 'Amazing customer support team—always available and ready to resolve issues. Their prompt responses and dedication to fixing problems have made our experience exceptional.',
        name: 'Kevin Brown',
        title: 'Customer Relations Manager',
        image: face14,
        theme: 'danger'
    },
    {
        id: 3,
        category: 'Product Quality',
        description: 'This product has revolutionized our marketing strategy by providing real-time analytics and a seamless experience. We’ve seen significant improvements in our customer engagement.',
        name: 'John Thompson',
        title: 'Marketing Director',
        image: face9,
        theme: 'warning'
    }
];

export const LandingSwiperCard = Testimonial.map((idx) => (
    <div key={idx.id}>
        <SpkLandingswiper card={idx} />
    </div>
))