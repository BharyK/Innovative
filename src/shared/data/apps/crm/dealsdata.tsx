import face3 from '../../../../assets/images/faces/3.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import face15 from '../../../../assets/images/faces/15.jpg';
import face16 from '../../../../assets/images/faces/16.jpg';

interface statuscardsType {
    id: number;
    ngClass: string;
    title: string;
    colorClass: string;
    amount: string;
    textClass: string;
    iconClass: string;
}

export const statusCards: statuscardsType[] = [
    {
        id: 1,
        ngClass: 'lead-discovered',
        title: 'Discovered',
        colorClass: 'bg-primary-transparent',
        amount: '$25,238',
        textClass: 'text-primary',
        iconClass: 'ri-circle-fill',
    },
    {
        id: 2,
        title: 'Qualified',
        ngClass: 'lead-qualified',
        colorClass: 'bg-secondary-transparent',
        amount: '$32,453',
        textClass: 'text-warning',
        iconClass: 'ri-circle-fill',
    },
    {
        id: 3,
        title: 'Initiated',
        ngClass: 'contact-initiated',
        colorClass: 'bg-success-transparent',
        amount: '$13,756',
        textClass: 'text-success',
        iconClass: 'ri-circle-fill',
    },
    {
        id: 4,
        ngClass: 'need-identified',
        title: 'Identified',
        colorClass: 'bg-info-transparent',
        amount: '$47,093',
        textClass: 'text-info',
        iconClass: 'ri-circle-fill',
    },
    {
        id: 5,
        title: 'Negotiation',
        ngClass: 'negotiation',
        colorClass: 'bg-danger-transparent',
        amount: '$26,146',
        textClass: 'text-danger',
        iconClass: 'ri-circle-fill',
    },
    {
        id: 6,
        title: 'Finalized',
        ngClass: 'deal-finalized',
        colorClass: 'bg-warning-transparent',
        amount: '$1,74,679',
        textClass: 'text-warning',
        iconClass: 'ri-circle-fill',
    }
];


export interface disccoveredleadsType {
    id: number;
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    text: string;
    type: string;
}

export const discoveredLeads: disccoveredleadsType[] = [
    {
        id: 1,
        title: 'John Doe',
        companyName: 'Initech Info',
        amount: ' $50,000',
        date: '21,May 2024 - 10:25AM',
        imgSrc: face11,
        text: 'Beta Innovations',
        type: 'Amount'
    },
    {
        id: 2,
        title: 'Jane Smith',
        companyName: 'TechCorp',
        amount: '$75,000',
        date: '15, April 2024 - 02:15PM',
        imgSrc: face12,
        text: 'Alpha Solutions',
        type: 'Amount'
    },
    {
        id: 3,
        title: 'Michael Johnson',
        companyName: 'NextGen Inc',
        amount: '$100,000',
        date: '05, March 2024 - 11:30AM',
        imgSrc: face13,
        text: 'Gamma Enterprises',
        type: 'Amount'
    },
    {
        id: 4,
        title: 'Emma Wilson',
        companyName: 'InnovateX',
        amount: '$120,000',
        date: '10, February 2024 - 09:45AM',
        imgSrc: face14,
        text: 'Delta Dynamics',
        type: 'Amount'
    },
];

interface qualifiedLeadsType {
    id: number;
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    text: string;
    type: string;
}


export const qualifiedLeads: qualifiedLeadsType[] = [
    {
        id: 1,
        title: 'Daniel Brown',
        companyName: 'SkyTech',
        amount: '$95,000',
        date: '18, January 2024 - 03:20PM',
        imgSrc: face15,
        text: 'Omega Solutions',
        type: 'Amount'
    },
    {
        id: 2,
        title: 'Daniel Brown',
        companyName: 'SkyTech',
        amount: '$95,000',
        date: '18, January 2024 - 03:20PM',
        imgSrc: face15,
        text: 'Omega Solutions',
        type: 'Amount'
    },
    {
        id: 3,
        title: 'James Wilson',
        companyName: 'Tech Solutions Inc.',
        amount: ' $80,000',
        date: '12, June 2024 - 09:30AM',
        imgSrc: face13,
        text: 'Gamma Enterprises',
        type: 'Amount'
    },
];

interface contactInitiatedLeads {
    id: number;
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    text: string;
}

// Contact Initiated Leads
export const contactInitiatedLeads = [
    {
        id: 1,
        title: 'Sarah Martinez',
        companyName: 'InnovateX',
        amount: '$75,000',
        date: '05, June 2024 - 10:45AM',
        imgSrc: face14,
        text: 'AlphaTech Solutions',
        type: 'Amount'
    },
    {
        id: 2,
        title: 'Robert Lee',
        companyName: 'NextGen Tech',
        amount: ' $90,000',
        date: '30, May 2024 - 02:00PM',
        imgSrc: face15,
        text: 'Omega Ventures',
        type: 'Amount'
    },
];

interface needsIdentifiedLeadsType {
    id: number;
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    text: string;
    type: string;
}

// Needs Identified Leads
export const needsIdentifiedLeads: needsIdentifiedLeadsType[] = [
    {
        id: 1,
        title: 'David Wilson',
        companyName: 'Tech Innovations',
        amount: '$70,000',
        date: '08, June 2024 - 09:45AM',
        imgSrc: face11,
        text: 'Alpha Solutions',
        type: 'Amount'
    },
    {
        id: 2,
        title: 'Emma Clark',
        companyName: 'TechStar Solutions',
        amount: '$85,000',
        date: '20, May 2024 - 03:30PM',
        imgSrc: face16,
        text: 'Zeta Dynamics',
        type: 'Amount'
    },
    {
        id: 3,
        title: 'David Wilson',
        companyName: 'Tech Innovations',
        amount: '$100,000',
        date: '07, June 2024 - 09:45AM',
        imgSrc: face11,
        text: 'AlphaTech Solutions',
        type: 'Budget'
    },
    {
        id: 4,
        title: 'Sophie Adams',
        companyName: 'InnovateX',
        amount: '$120,000',
        date: '14, June 2024 - 11:30AM',
        imgSrc: face15,
        text: 'GammaTech Solutions',
        type: "Estimated Revenue",
    },
];

interface negotiationLeadsType {
    id: number;
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    type: string;
    text: string;
}

// Negotiation Leads
export const negotiationLeads: negotiationLeadsType[] = [
    {
        id: 1,
        title: 'Olivia Moore',
        companyName: 'TechStar Solutions',
        amount: '$90,000',
        date: '25, May 2024 - 02:15PM',
        imgSrc: face9,
        text: 'Delta Dynamics',
        type: 'Expected Investment'
    },
    {
        id: 2,
        title: 'Michael Johnson',
        companyName: 'Tech Innovations',
        amount: '$120,000',
        date: '15, June 2024 - 11:00AM',
        imgSrc: face15,
        text: 'AlphaTech Solutions',
        type: 'Proposed Amount'
    },
    {
        id: 3,
        title: 'Emily Davis',
        companyName: 'Tech Solutions Ltd.',
        amount: '$150,000',
        date: '10, June 2024 - 09:30AM',
        imgSrc: face16,
        text: 'BetaTech Innovations',
        type: 'Estimated Budget'
    },
];

interface dealFinalizedLeadsType {
    id: number
    title: string;
    companyName: string;
    amount: string;
    date: string;
    imgSrc: string;
    type: string;
    text: string;
}

// Deal Finalized Leads
export const dealFinalizedLeads: dealFinalizedLeadsType[] = [
    {
        id: 1,
        title: 'Emma Thompson',
        companyName: 'TechStar Innovations',
        amount: '$120,000',
        date: '25, June 2024 - 03:45PM',
        imgSrc: face12,
        text: 'Delta Dynamics',
        type: 'Amount '
    },
    {
        id: 2,
        title: 'Sophia Garcia',
        companyName: 'TechSolutions Inc.',
        amount: '$85,000',
        date: '18, June 2024 - 09:30AM',
        imgSrc: face3,
        text: 'Completed Gamma Technologies',
        type: 'Investment'
    },
];
