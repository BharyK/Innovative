import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face10 from '../../../../assets/images/faces/10.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import type { ReactNode } from 'react';


const TotalIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>
const PaidIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g>    <rect fill="none" height="24" width="24" /></g><g>    <g>        <path d="M18.49,9.88l0.08-0.85l0.18-1.95l-1.9-0.43l-0.84-0.19l-0.44-0.74l-0.99-1.68L12.79,4.8L12,5.14L11.21,4.8 L9.42,4.03L8.43,5.71L7.99,6.45L7.15,6.64l-1.9,0.43l0.18,1.94l0.08,0.85l-0.56,0.65l-1.29,1.48l1.29,1.47l0.56,0.65l-0.08,0.85 l-0.18,1.96l1.9,0.43l0.84,0.19l0.44,0.74l0.99,1.67l1.78-0.77L12,18.85l0.79,0.34l1.78,0.77l0.99-1.68l0.44-0.74l0.84-0.19 l1.9-0.43l-0.18-1.95l-0.08-0.85l0.56-0.65l1.29-1.47l-1.29-1.47L18.49,9.88z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" opacity=".3" />        <path d="M23,11.99l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,11.99l2.44,2.79 l-0.34,3.7l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,11.99z M19.05,13.47l-0.56,0.65l0.08,0.85 l0.18,1.95l-1.9,0.43l-0.84,0.19l-0.44,0.74l-0.99,1.68l-1.78-0.77L12,18.85l-0.79,0.34l-1.78,0.77l-0.99-1.67l-0.44-0.74 l-0.84-0.19l-1.9-0.43l0.18-1.96l0.08-0.85l-0.56-0.65l-1.29-1.47l1.29-1.48l0.56-0.65L5.43,9.01L5.25,7.07l1.9-0.43l0.84-0.19 l0.44-0.74l0.99-1.68l1.78,0.77L12,5.14l0.79-0.34l1.78-0.77l0.99,1.68l0.44,0.74l0.84,0.19l1.9,0.43l-0.18,1.95l-0.08,0.85 l0.56,0.65l1.29,1.47L19.05,13.47z" />        <polygon points="10.09,13.75 7.77,11.42 6.29,12.91 10.09,16.72 17.43,9.36 15.95,7.87" />    </g></g></svg>
const UnpaidIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g>    <rect fill="none" height="24" width="24" /></g><g>    <g>        <path d="M12,4c-4.41,0-8,3.59-8,8c0,4.41,3.59,8,8,8s8-3.59,8-8C20,7.59,16.41,4,12,4z M12.88,17.76V19h-1.75v-1.29c-0.74-0.18-2.39-0.77-3.02-2.96l1.65-0.67c0.06,0.22,0.58,2.09,2.4,2.09c0.93,0,1.98-0.48,1.98-1.61 c0-0.96-0.7-1.46-2.28-2.03c-1.1-0.39-3.35-1.03-3.35-3.31c0-0.1,0.01-2.4,2.62-2.96V5h1.75v1.24c1.84,0.32,2.51,1.79,2.66,2.23 l-1.58,0.67c-0.11-0.35-0.59-1.34-1.9-1.34c-0.7,0-1.81,0.37-1.81,1.39c0,0.95,0.86,1.31,2.64,1.9c2.4,0.83,3.01,2.05,3.01,3.45 C15.9,17.17,13.4,17.67,12.88,17.76z" enableBackground="new" opacity=".3" />        <path d="M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67 c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96c0,2.27,2.25,2.91,3.35,3.31 c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75c0.63,2.19,2.28,2.78,3.02,2.96 V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />        <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z" />    </g></g></svg>
const CancelledIcon = <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#1f1f1f"><g>    <path d="M0,0h24v24H0V0z" fill="none" /></g><g>    <path d="M9.1,5L5,9.1v5.8L9.1,19h5.8l4.1-4.1V9.1L14.9,5H9.1z M16.24,14.83l-1.41,1.41 L12,13.41l-2.83,2.83l-1.41-1.41L10.59,12L7.76,9.17l1.41-1.41L12,10.59l2.83-2.83l1.41,1.41L13.41,12L16.24,14.83z" enableBackground="new" opacity=".3" />    <path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z M14.83,7.76L12,10.59L9.17,7.76L7.76,9.17L10.59,12l-2.83,2.83l1.41,1.41L12,13.41l2.83,2.83l1.41-1.41L13.41,12l2.83-2.83 L14.83,7.76z" /></g></svg>

interface InvoiceCardType {
    id: number;
    title: string;
    svgContent: ReactNode;
    amount: number;
    percentageChange: string;
    invoiceCount: string;
    invoiceStatus: string;
    bgClass: string;
    badgeIconClass: 'up' | 'down';
}
export const InvoiceCards: InvoiceCardType[] = [
    { id: 1, title: 'Total Sent', svgContent: TotalIcon, amount: 471, percentageChange: '3.25%', invoiceCount: '2,345', invoiceStatus: 'Invoices Sent', bgClass: 'primary', badgeIconClass: 'up', },
    { id: 2, title: 'Paid Invoices', svgContent: PaidIcon, amount: 320, percentageChange: '1.45%', invoiceCount: '345', invoiceStatus: 'Paid by clients', bgClass: 'secondary', badgeIconClass: 'down', },
    { id: 3, title: 'Unpaid Invoices', svgContent: UnpaidIcon, amount: 679, percentageChange: '1.45%', invoiceCount: '1,234', invoiceStatus: 'Unpaid by clients', bgClass: 'danger', badgeIconClass: 'up', },
    { id: 4, title: 'Cancelled Invoices', svgContent: CancelledIcon, amount: 134, percentageChange: '1.45%', invoiceCount: '783', invoiceStatus: 'Cancelled by clients', bgClass: 'warning', badgeIconClass: 'down', },
];

interface InvoiceType {
    id: number;
    clientName: string;
    email: string;
    avatar: string;
    invoiceNumber: string;
    dateIssued: string;
    amountDue: string;
    badgecolor: string;
    paymentStatus: string;
    dueDate: string;
}
export const InvoicesListData: InvoiceType[] = [
    { id: 1, clientName: 'Neha Gupta', email: 'nehagupta101@gmail.com', avatar: face10, invoiceNumber: '#INV20258903', dateIssued: '20 Jun 2024', amountDue: "$1,050.40", badgecolor: 'primary', paymentStatus: 'Paid', dueDate: '30 Jun 2024' },
    { id: 2, clientName: 'Henry Milo', email: 'henrymilo2416@gmail.com', avatar: face11, invoiceNumber: '#INV20241323', dateIssued: '13 Mar 2024', amountDue: "$898.12", badgecolor: 'primary', paymentStatus: 'Paid', dueDate: '25 May 2024' },
    { id: 3, clientName: 'Rohit Sharma', email: 'rohitsharma0012@gmail.com', avatar: face8, invoiceNumber: '#INV20251234', dateIssued: '05 Jun 2024', amountDue: "$540.75", badgecolor: 'danger', paymentStatus: 'Overdue', dueDate: '20 Jun 2024' },
    { id: 4, clientName: 'Rajesh Patel', email: 'rajeshpatel523@gmail.com', avatar: face13, invoiceNumber: '#INV20257654', dateIssued: '10 Jul 2024', amountDue: "$3,600.89", badgecolor: 'danger', paymentStatus: 'Overdue', dueDate: '25 Jul 2024' },
    { id: 5, clientName: 'Anjali Mehra', email: 'anjalimehra9901@gmail.com', avatar: face9, invoiceNumber: '#INV20251789', dateIssued: '12 May 2024', amountDue: "$860.30", badgecolor: 'primary', paymentStatus: 'Paid', dueDate: '25 May 2024' },
    { id: 6, clientName: 'Vikram Desai', email: 'vikram.desai1024@gmail.com', avatar: face12, invoiceNumber: '#INV20252345', dateIssued: '30 Jun 2024', amountDue: "$1,200.50", badgecolor: 'warning', paymentStatus: 'Pending', dueDate: '15 Jul 2024' },
    { id: 7, clientName: 'Priya Riva', email: 'priyariva3214@gmail.com', avatar: face7, invoiceNumber: '#INV20244578', dateIssued: '26 Apr 2024', amountDue: "$235.52", badgecolor: 'warning', paymentStatus: 'Pending', dueDate: '13 May 2024' },
];