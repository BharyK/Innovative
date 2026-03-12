import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo4 from '../../../../assets/images/company-logos/4.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo8 from '../../../../assets/images/company-logos/8.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import face4 from '../../../../assets/images/faces/4.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';


interface companycontactType {
    id: number;
    companyName: string;
    companyLogo: string;
    email: string;
    phone: string;
    businessSize: string;
    industry: string;
    name: string;
    avatar: string;
    dealsCount: number;
    bgColor: string;
}

export const Tags=[
    {label:'Information Technology',value:1},
    {label:'Telecommunications',value:2},
    {label:'Logistics',value:3},
    {label:'Professional Services',value:4},
    {label:'Education',value:5},
    {label:'Manufacturing',value:6},
    {label:'Healthcare',value:7},
  ]
export const companiesSize=[
    {label:'Company Size',value:1},
    {label:'Corporate',value:2},
    {label:'Small Business',value:3},
    {label:'Micro Business',value:4},
    {label:'Startup',value:5},
    {label:'Large Enterprise',value:6},
    {label:'Medium Size',value:7},
  ]

export const CompanyContacts: companycontactType[] = [
    {
        id: 0,
        companyName: "Alpha Solutions",
        companyLogo: comppanyLogo2,
        email: "alpha.solutions@example.com",
        phone: "1234-567-890",
        businessSize: "Enterprise",
        industry: "Software Development",
        name: "Michael",
        avatar: face4,
        dealsCount: 350,
        bgColor:'primary-transparent'
    },

    {
        id: 1,
        companyName: "Beta Innovations",
        companyLogo: comppanyLogo3,
        email: "contact@betainnovations.com",
        phone: "9876-543-210",
        businessSize: "Startup",
        industry: "Biotechnology",
        name: "Sophia",
        avatar: face6,
        dealsCount: 420,
        bgColor:'secondary-transparent'
    },
    {
        id: 2,
        companyName: "Gamma Solutions",
        companyLogo: comppanyLogo4,
        email: "info@gammasolutions.com",
        phone: "555-123-4567",
        businessSize: "Enterprise",
        industry: "Consulting Services",
        name: "Oliver",
        avatar: face7,
        dealsCount: 390,
        bgColor:'primary-transparent'
    },
    {
        id: 3,
        companyName: " Delta Tech Solutions",
        companyLogo: comppanyLogo5,
        email: "contact@deltatech.com",
        phone: "678-987-6543",
        businessSize: "Startup",
        industry: "Technology Solutions",
        name: "Sophie",
        avatar: face8,
        dealsCount: 280,
        bgColor:'secondary-transparent'
    },
    {
        id: 4,
        companyName: "Epsilon Innovations",
        companyLogo: comppanyLogo6,
        email: "info@epsiloninnovations.com",
        phone: "111-222-3333",
        businessSize: "Startup",
        industry: "	Innovation Services",
        name: "Emma",
        avatar: face9,
        dealsCount: 320,
        bgColor:'secondary-transparent'
    },


    {
        id: 5,
        companyName: "Theta Systems",
        companyLogo: comppanyLogo8,
        email: "info@thetasystems.com",
        phone: "456-789-0123",
        businessSize: "Enterprise",
        industry: "Software Solutions",
        name: "Liam",
        avatar: face10,
        dealsCount: 410,
        bgColor:'primary-transparent'
    },
    {
        id: 6,
        companyName: "Iota Innovations",
        companyLogo: comppanyLogo9,
        email: "contact@iotainnovations.com",
        phone: "333-444-5555",
        businessSize: "Startup",
        industry: "Digital Marketing",
        name: "Ava",
        avatar: face11,
        dealsCount: 290,
        bgColor:'secondary-transparent'
    },
    {
        id: 7,
        companyName: "Alpha Solutions",
        companyLogo: comppanyLogo4,
        email: "info@alphasolutions.com",
        phone: "1234-567-890",
        businessSize: "Enterprise",
        industry: "Technology Services",
        name: "John",
        avatar: face7,
        dealsCount: 570,
        bgColor:'primary-transparent'
    },
    {
        id: 8,
        companyName: "Gamma Industries",
        companyLogo: comppanyLogo5,
        email: "contact@gammatech.com",
        phone: "8765-432-109",
        businessSize: "Startup",
        industry: "Engineering",
        name: "Emily",
        avatar: face9,
        dealsCount: 320,
        bgColor:'secondary-transparent'
    },
   
];
