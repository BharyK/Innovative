import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo7 from '../../../../assets/images/company-logos/7.png';
import comppanyLogo8 from '../../../../assets/images/company-logos/8.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';

export interface contactleadsType {
    id: number;
    avatar: string;
    name: string;
    email: string;
    companyLogo: string;
    company: string;
    phone: string;
    source: string;
    status: string;
    ownername: string;
    owner: string;
    bgColor: string;
    date: string;
}

export const ContactLeads: contactleadsType[] = [
    {
        id: 1,
        avatar: face4,
        name: 'Catalina',
        email: 'Catalina2981@gmail.com',
        companyLogo: comppanyLogo1,
        company: 'Spruko Technologies',
        phone: '1678-28993-223',
        source: 'Social Media',
        status: 'New Lead',
        ownername: 'Jane Smith',
        owner: face2,
        bgColor: 'secondary',
        date: '2024-06-15'
    },
    {
        id: 2,
        avatar: face5,
        name: 'David Johnson',
        email: 'david.johnson@example.com',
        companyLogo: comppanyLogo2,
        company: 'Global Solutions Ltd.',
        phone: '+1-987-654-3210',
        source: 'Email Campaign',
        status: 'Prospect',
        ownername: 'Michael Brown',
        owner: face3,
        bgColor: 'primary',
        date: '2024-06-14'
    },
    {
        id: 3,
        avatar: face6,
        name: 'Sophia Adams',
        email: 'sophia.adams@example.com',
        companyLogo: comppanyLogo3,
        company: 'Beta Innovations',
        phone: '9876-543-210',
        source: 'Website',
        status: 'Lead',
        ownername: 'Emma Wilson',
        owner: face7,
        bgColor: 'secondary',
        date: '2024-06-13'
    },
    {
        id: 4,
        avatar: face10,
        name: 'Sophie Turner',
        email: 'sophie.turner@example.com',
        companyLogo: comppanyLogo5,
        company: 'Delta Enterprises',
        phone: '+61-9876-543-210',
        source: 'Cold Call',
        status: 'Prospect',
        ownername: 'Olivia Moore',
        owner: face11,
        bgColor: 'primary',
        date: '2024-06-11'
    },
    {
        id: 5,
        avatar: face12,
        name: 'Emma Garcia',
        email: 'emma.garcia@example.com',
        companyLogo: comppanyLogo6,
        company: 'Gamma Solutions',
        phone: '+55-1234-5678',
        source: 'Referral',
        status: 'Lead',
        ownername: 'Daniel Harris',
        owner: face13,
        bgColor: 'secondary',
        date: '2024-06-10'
    },
    {
        id: 6,
        avatar: face14,
        name: 'Sophia Lee',
        email: 'sophia.lee@example.com',
        companyLogo: comppanyLogo7,
        company: 'Omega Solutions',
        phone: '+91-987-654-3210',
        source: 'Website',
        status: 'Lead',
        ownername: 'Sophie Turner',
        owner: face15,
        bgColor: 'secondary',
        date: '2024-06-09'
    },
    {
        id: 7,
        avatar: face16,
        name: 'Lucas Martin',
        email: 'lucas.martin@example.com',
        companyLogo: comppanyLogo8,
        company: 'Phoenix Innovations',
        phone: '+1-234-567-8901',
        source: 'Cold Call',
        status: 'Prospect',
        ownername: 'Olivia Moore',
        owner: face11,
        bgColor: 'primary',
        date: '2024-06-08'
    },
    {
        id: 8,
        avatar: face4,
        name: 'Catalina',
        email: 'Catalina2981@gmail.com',
        companyLogo: comppanyLogo1,
        company: 'Spruko Technologies',
        phone: '1678-28993-223',
        source: 'Social Media',
        status: 'New Lead',
        ownername: 'Jane Smith',
        owner: face2,
        bgColor: 'secondary',
        date: '2024-06-15'
    },
    {
        id: 9,
        avatar: face5,
        name: 'Isabella Adams',
        email: 'isabella.adams@example.com',
        companyLogo: comppanyLogo9,
        company: 'Gamma Technologies',
        phone: '+7-987-654-3210',
        source: 'Advertisement',
        status: 'Lead',
        ownername: 'Sophia Lee',
        owner: face12,
        bgColor: 'secondary',
        date: '2024-06-07'
    },
];

export const Leadsstatus = [
    { label: 'New', value: 1 },
    { label: 'Follow-up', value: 2 },
    { label: 'Closed', value: 3 },
    { label: 'Contacted', value: 4 },
    { label: 'Disqualified', value: 5 },
    { label: 'Qualified', value: 6 },
]
export const Leadssource = [
    { label: 'Social Media', value: 1 },
    { label: 'Direct mail', value: 2 },
    { label: 'Blog Articles', value: 3 },
    { label: 'Affiliates', value: 4 },
    { label: 'Organic search', value: 5 },
]
export const Tags = [
    { label: 'New Lead', value: 1 },
    { label: 'Prospect', value: 2 },
    { label: 'Customer', value: 3 },
    { label: 'Hot Lead', value: 4 },
    { label: 'Partner', value: 5 },
    { label: 'LostCustomer', value: 6 },
    { label: 'Influencer', value: 4 },
    { label: 'Subscriber', value: 5 },
]


export const leadsColumn = [
    { header: "Contact Name", field: "Contact Name" },
    { header: "Email", field: "Email" },
    { header: "Phone", field: "Phone" },
    { header: "Lead Status", field: "Lead Status" },
    { header: "Company", field: "Company" },
    { header: "Lead Source", field: "Lead Source" },
    { header: "Tags", field: "Tags" },
    { header: "Actions", field: "Actions" },
]
