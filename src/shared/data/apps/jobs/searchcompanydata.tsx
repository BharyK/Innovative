import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo7 from '../../../../assets/images/company-logos/7.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import comppanyLogo10 from '../../../../assets/images/company-logos/10.png';

export interface JobDataType {
    id: number;
    image: string;
    title: string;
    badge: string;
    color: string;
    text: string;
    rating: string;
}

export const jobData: JobDataType[] = [
    {
        id: 1,
        image: comppanyLogo3,
        title: "Spotech Solutions",
        badge: "Ecommerce",
        color: "primary",
        text: "Driving business success with cutting-edge data insights",
        rating: "142",
    },
    {
        id: 2,
        image: comppanyLogo6,
        title: "G Technical Solutions ",
        badge: "Developement",
        color: "secondary",
        text: "Unlocking business potential with innovative data analytics",
        rating: "134",
    },
    {
        id: 3,
        image: comppanyLogo1,
        title: "Diego Solutions ",
        badge: "Medical",
        color: "danger",
        text: "Enabling growth through intelligent data strategies",
        rating: "134",
    },
    {
        id: 4,
        image: comppanyLogo9,
        title: "Spoteck Pvt Ltd ",
        badge: "Ecommerce",
        color: "warning",
        text: "Accelerating business performance with data innovation",
        rating: "134",
    },
    {
        id: 5,
        image: comppanyLogo5,
        title: "Vehement Capital ",
        badge: "Management",
        color: "info",
        text: "Helping businesses thrive with actionable data insights.",
        rating: "134",
    },
    {
        id: 6,
        image: comppanyLogo9,
        title: "Wonka Industries ",
        badge: "Medical",
        color: "orange",
        text: "Empowering growth through smarter data analytics",
        rating: "134",
    },
    {
        id: 7,
        image: comppanyLogo7,
        title: "Spotech Solutions",
        badge: "Ecommerce",
        color: "primary",
        text: "Turning data into impactful business solutions",
        rating: "134",
    },
    {
        id: 8,
        image: comppanyLogo10,
        title: "GTechnical Solutions",
        badge: "Developement",
        color: "secondary",
        text: "Leading business growth through strategic data analysis",
        rating: "134",
    },
]
interface SelectType {
    value: string;
    label: string;
}
export const RolesData: SelectType[] = [
    { value: 'All Categories', label: 'All Categories' },
    { value: 'Software Dveloper', label: 'Software Dveloper' },
    { value: 'Web Developer', label: 'Web Developer' },
    { value: 'Software Architect', label: 'Software Architect' },
    { value: 'IT Hardware', label: 'IT Hardware' },
    { value: 'Network Engineer', label: 'Network Engineer' },
    { value: 'Angular Developer', label: 'Angular Developer' },
    { value: 'React Developer', label: 'React Developer' },
];