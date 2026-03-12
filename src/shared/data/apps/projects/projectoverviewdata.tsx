import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';


interface teamdata {
    image: string;
    name: string;
    role: string;
}

export const TeamData: teamdata[] = [
    { image: face11, name: 'John Doe', role: 'Project Manager' },
    { image: face2, name: 'Jane Smith', role: 'Lead Developer' },
    { image: face8, name: 'Emily Johnson', role: 'UI Designer' },
    { image: face12, name: 'Michael Brown', role: 'QA Tester' },
    { image: face6, name: 'Sonia Loe', role: 'UI Developer' },
    { image: face7, name: 'David Smith', role: 'React Developer' }
];

interface documentType {
    fileName: string;
    iconClass: string;
    svgPath: string;
}

export const documents: documentType[] = [
    {
        fileName: 'Images',
        iconClass: 'primary',
        svgPath: `<svg xmlns="http://www.w3.org/2000/svg" height="24px"
                      viewBox="0 0 24 24" width="24px" fill="#000">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M5 19h14V5H5v14zm4-5.86l2.14 2.58 3-3.87L18 17H6l3-3.86z"
                          opacity=".8" fill="#fff" />
                      <path
                          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4.86-7.14l-3 3.86L9 13.14 6 17h12z" />
                  </svg>`
    },
    {
        fileName: 'Audio',
        iconClass: 'secondary',
        svgPath: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                      viewBox="0 0 24 24" width="24px" fill="#1f1f1f">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                          d="M17 18h1c.55 0 1-.45 1-1v-3h-2v4zM5 17c0 .55.45 1 1 1h1v-4H5v3z"
                          opacity=".3" />
                      <path
                          d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9zM7 14v4H6c-.55 0-1-.45-1-1v-3h2zm12 3c0 .55-.45 1-1 1h-1v-4h2v3z" />
                  </svg>`
    },
    {
        fileName: 'Documents',
        iconClass: 'danger',
        svgPath: `<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g><rect fill="none" height="24" width="24" y="0"/><path d="M5,5v14h14V5H5z M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" opacity=".3"/><path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M17,13H7v-2h10 V13z M17,9H7V7h10V9z M14,17H7v-2h7V17z"/></g></svg>  `
    },
    {
        fileName: 'Videos',
        iconClass: 'warning',
        svgPath: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h10v8H5z" opacity=".3"/><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8z"/></svg>`
    },
];
export const Projectmessagesdata = [
    { id: 1, image: face1, title: 'User Research Findings Presented', time: '02,Sep 2024 - 10:15 AM', text: 'Sarah Johnson shared insights from user surveys.', badgecolor: 'success', badge: '1 hr ago', class: 'border-bottom' },
    { id: 2, image: face14, title: 'Initial Design Concepts Approved', time: '10,Sep 2024 - 03:30 PM', text: 'David Smith approved the initial design mockups.', badgecolor: 'info', badge: '4 hrs ago', class: 'border-bottom' },
    { id: 3, image: face3, title: 'Content Review and Update', time: '15,Sep 2024 - 09:00 AM', text: 'Emily Davis completed the content audit and update.', badgecolor: 'warning', badge: '6 hrs ago', class: 'border-bottom' },
    { id: 4, image: face6, title: 'Accessibility Compliance Check', time: '25,Sep 2024 - 01:00 PM', text: 'Jessica Green initiated accessibility testing.', badgecolor: 'primary', badge: '12 hrs ago', class: '' }
]
export const Tododata = [
    { id: 1, image: comppanyLogo3, title: "Implement responsive design", text: "12/17", percentage: "12% ", status: "Not Started", enddate: "17-Jan-2024", color: 'primary' },
    { id: 2, image: comppanyLogo6, title: "Fix login authentication issue", text: "04/10", percentage: "95% ", status: "Completed", enddate: "17-Jan-2024", color: 'secondary' },
    { id: 3, image: comppanyLogo1, title: "Optimize database queries", text: "13/26", percentage: "52% ", status: "Not Started", enddate: "18-Feb-2024", color: 'danger' },
    { id: 4, image: comppanyLogo9, title: "Integrate third-party API", text: "16/43", percentage: "78% ", status: "Pending", enddate: "19-Feb-2024", color: 'warning' },
    { id: 5, image: comppanyLogo5, title: "Create user documentation", text: "03/33", percentage: "34% ", status: "Not Started", enddate: "21-Feb-2024", color: 'info' },
    { id: 6, image: comppanyLogo9, title: "Conduct security audit", text: "06/12", percentage: "70% ", status: "Completed", enddate: "27-Feb-2024", color: 'primary', borderClass: "border-bottom-0" },
]
interface Item {
    description: string;
}

interface ItemColumn {
    column: number;
    items: Item[];
}

export const ProjectKeytaskdata: ItemColumn[] = [
    {
        column: 1,
        items: [
            {
                description: "Identify the key requirements for the voting system"
            },
            {
                description: "Research blockchain technologies suitable for voting."
            },
            {
                description: "Plan for scalability, security, and privacy."
            }
        ]
    },
    {
        column: 2,
        items: [
            {
                description: "Research latest web development trends."
            },
            {
                description: "Implement additional security measures as needed."
            },
            {
                description: "Test the network’s performance and reliability."
            }
        ]
    }
];