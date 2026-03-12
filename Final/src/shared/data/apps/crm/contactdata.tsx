import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo4 from '../../../../assets/images/company-logos/4.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo7 from '../../../../assets/images/company-logos/7.png';
import comppanyLogo8 from '../../../../assets/images/company-logos/8.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';


export interface contactsType {
    id: number;
    avatar: string;
    name: string;
    lastContacted: string;
    score: string;
    email: string;
    companyLogo: string;
    company: string;
    phone: string;
    source: string;
    tags: string;
    priority?: string;
    bgColor: string;
    bgColor1?: string;
}


export const leads = [
    { label: 'Social Media', value: 1 },
    { label: 'Direct mail', value: 2 },
    { label: 'Blog Articles', value: 3 },
    { label: 'Affiliates', value: 4 },
    { label: 'Organic search', value: 5 },
]

export const Tags = [
    // { label: 'Select Tag', value: 1 },
    { label: 'New Lead', value: 1 },
    { label: 'Prospect', value: 2 },
    { label: 'Customer', value: 3 },
    { label: 'Hot Lead', value: 4 },
    { label: 'Partner', value: 5 },
    { label: 'LostCustomer', value: 6 },
    { label: 'Influencer', value: 7 },
    { label: 'Subscriber', value: 8 },
]

export const contacts: contactsType[] = [
    {
        id: 1,
        avatar: face4,
        name: 'John Doe',
        lastContacted: 'Jun, 15 2024 - 10:30 AM',
        score: '380',
        email: 'john.doe@example.com',
        companyLogo: comppanyLogo2,
        company: 'Example Corp',
        phone: '123-456-7890',
        priority: 'High Priority',
        tags: 'VIP Client',
        source: 'Referral',
        bgColor: 'danger',
    },
    {
        id: 2,
        avatar: face5,
        name: 'Alice Smith',
        lastContacted: 'Jun, 14 2024 - 3:15 PM',
        score: '425',
        email: 'alice.smith@example.com',
        companyLogo: comppanyLogo3,
        company: 'Smith & Co',
        phone: '987-654-3210',
        source: 'LinkedIn',
        priority: 'Medium Priority',
        tags: 'Regular Client',
        bgColor: 'warning',
    },
    {
        id: 3,
        avatar: face6,
        name: 'Michael Johnson',
        lastContacted: 'Aug,10 2024 - 3:25 PM',
        score: '685',
        email: 'michael.johnson@example.com ',
        companyLogo: comppanyLogo4,
        company: 'Johnson Enterprises',
        phone: '555-123-4567',
        source: 'Website',
        priority: 'Low Priority',
        tags: 'Potential Client',
        bgColor: 'warning',
    },
    {
        id: 4,
        avatar: face8,
        name: 'Sophia Martinez',
        lastContacted: 'Jun, 12 2024 - 2:00 PM',
        score: '500',
        email: 'sophia.martinez@example.com',
        companyLogo: comppanyLogo5,
        company: 'Martinez Enterprises',
        phone: '234-567-8901',
        source: 'Cold Call',
        priority: 'Medium Priority',
        tags: 'Potential Lead',
        bgColor: 'warning',
    },
    {
        id: 5,
        avatar: face9,
        name: 'David Wilson',
        lastContacted: 'Jun, 11 2024 - 11:45 AM',
        score: '320',
        email: 'david.wilson@example.com',
        companyLogo: comppanyLogo6,
        company: 'Wilson & Sons',
        phone: '345-678-9012',
        source: 'Email Campaign',
        priority: 'Low Priority',
        tags: 'Regular Client',
        bgColor: 'warning',
    },
    {
        id: 6,
        avatar: face10,
        name: 'Emma Brown',
        lastContacted: 'Jun, 10 2024 - 1:30 PM',
        score: '280',
        email: 'emma.brown@example.com',
        companyLogo: comppanyLogo7,
        company: 'Brown Solutions',
        phone: '456-789-0123',
        source: 'Trade Show',
        priority: 'High Priority',
        tags: 'Hot Lead',
        bgColor: 'danger',
    },
    {
        id: 7,
        avatar: face12,
        name: 'Olivia Davis',
        lastContacted: 'Jun, 9 2024 - 9:15 AM',
        score: '350',
        email: 'olivia.davis@example.com',
        companyLogo: comppanyLogo8,
        company: 'Davis Consulting',
        phone: '567-890-1234',
        source: 'Direct mail',
        priority: 'Medium Priority',
        tags: 'Regular Client',
        bgColor: 'warning',
    },
    {
        id: 8,
        avatar: face13,
        name: 'William Clark',
        lastContacted: 'Jun, 8 2024 - 4:30 PM',
        score: '350',
        email: 'william.clark@example.com',
        companyLogo: comppanyLogo9,
        company: 'Clark Solutions',
        phone: '678-901-2345',
        source: 'Advertisement',
        priority: 'High Priority',
        tags: 'VIP Client',
        bgColor: 'danger',
    },
];