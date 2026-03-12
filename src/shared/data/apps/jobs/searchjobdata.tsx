import comppanyLogo1 from '../../../../assets/images/company-logos/1.png';
import comppanyLogo2 from '../../../../assets/images/company-logos/2.png';
import comppanyLogo3 from '../../../../assets/images/company-logos/3.png';
import comppanyLogo5 from '../../../../assets/images/company-logos/5.png';
import comppanyLogo6 from '../../../../assets/images/company-logos/6.png';
import comppanyLogo7 from '../../../../assets/images/company-logos/7.png';
import comppanyLogo9 from '../../../../assets/images/company-logos/9.png';
import comppanyLogo10 from '../../../../assets/images/company-logos/10.png';


export interface JobOpening {

   id: number,
   image: string;
   title: string;
   companyname: string;
   jobtype: string;
   worklocation: string;
   position: string;
   location: string;
   salary: string;
   color: string;
}

export const searchJobdata: JobOpening[] = [
   {
      id: 1,
      image: comppanyLogo3,
      title: 'Marketing Manager',
      companyname: 'Global Brands Inc. ',
      jobtype: 'Contract',
      worklocation: 'On-Site',
      position: 'Managerial',
      location: ' New York, NY',
      salary: '$70k - $100k',
      color: 'primary'
   },
   {
      id: 2,
      image: comppanyLogo6,
      title: 'Marketing Manager',
      companyname: 'Global Brands Inc.',
      jobtype: 'Contract',
      worklocation: 'On-Site',
      position: 'Managerial',
      location: 'New York, NY',
      salary: '$90k - $120k',
      color: 'secondary'
   },
   {
      id: 3,
      image: comppanyLogo1,
      title: 'UI/UX Designer',
      companyname: 'Design Lab Co.',
      jobtype: 'Part-Time',
      worklocation: 'Hybrid',
      position: 'Junior Level',
      location: ' Austin, TX',
      salary: '$45k - $60k',
      color: 'danger'
   },
   {
      id: 4,
      image: comppanyLogo7,
      title: 'Senior Graphic Desig',
      companyname: 'Creative Minds Inc.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: ' San Francis, CA',
      salary: '$70k - $100k',
      color: 'warning'
   },
   {
      id: 5,
      image: comppanyLogo5,
      title: 'UI/UX Designer',
      companyname: 'Design Lab Co.',
      jobtype: 'Part-Time',
      worklocation: 'On-Site',
      position: 'Junior Level',
      location: 'Austin, TX',
      salary: '$45k - $60k',
      color: 'info'
   },
   {
      id: 6,
      image: comppanyLogo9,
      title: 'Web UI Designer',
      companyname: 'Info. Techz Company',
      jobtype: 'Freelancer',
      worklocation: 'Remote',
      position: 'Degree',
      location: ' Lo Angeles,CA.',
      salary: '$50k - $80k',
      color: 'primary'
   },
   {
      id: 7,
      image: comppanyLogo10,
      title: 'Software Engineer',
      companyname: 'Innovate Tech Solutions.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'Francisco, CA',
      salary: '$120k - $150k',
      color: 'secondary'
   },
   {
      id: 8,
      image: comppanyLogo1,
      title: 'Marketing Manager',
      companyname: 'Global Brands Inc.',
      jobtype: 'Contract',
      worklocation: 'On-Site',
      position: 'Managerial',
      location: 'New York, NY',
      salary: '$90k - $120k',
      color: 'danger'
   },
   {
      id: 9,
      image: comppanyLogo7,
      title: 'Senior Graphic Desig',
      companyname: 'Creative Minds Inc.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'San Francis,CA',
      salary: '$70k - $100k',
      color: 'warning'
   },
   {
      id: 10,
      image: comppanyLogo2,
      title: 'Marketing Specialist',
      companyname: 'Creative Solutions Co.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'San Francis, CA',
      salary: '$90k - $120k',
      color: 'info'
   },
   {
      id: 11,
      image: comppanyLogo3,
      title: 'Marketing Specialist',
      companyname: 'Creative Solutions Co.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'San Francis, CA',
      salary: '$90k - $120k',
      color: 'primary'
   },
   {
      id: 12,
      image: comppanyLogo9,
      title: 'Marketing Specialist',
      companyname: 'Creative Solutions Co.',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'San Francis, CA',
      salary: '$90k - $120k',
      color: 'danger'
   },
];
export const ListJobdata = [
   {
      id: 1,
      image: comppanyLogo3,
      title: 'Marketing Manager',
      companyname: 'Global Brands Inc. ',
      jobtype: 'Contract',
      worklocation: 'On-Site',
      position: 'Managerial',
      location: ' New York, NY',
      salary: ' $90,000 - $120,000',
      color: 'primary',
      vacancies: "30"
   },
   {
      id: 2,
      image: comppanyLogo6,
      title: 'Marketing Manager',
      companyname: 'Global Brands Inc.',
      jobtype: 'Contract',
      worklocation: 'On-Site',
      position: 'Managerial',
      location: 'San Francisco, CA',
      salary: '$70,000 - $90,000',
      color: 'secondary',
      vacancies: "12"
   },
   {
      id: 3,
      image: comppanyLogo1,
      title: 'UI/UX Designer',
      companyname: 'Design Lab Co. ',
      jobtype: 'Part-Time',
      worklocation: 'Hybrid',
      position: 'Junior Level',
      location: 'Boston, MA',
      salary: '$110,000 - $140,000',
      color: 'danger',
      vacancies: "8"
   },
   {
      id: 4,
      image: comppanyLogo7,
      title: 'Senior Graphic Desig',
      companyname: 'Creative Minds Inc. ',
      jobtype: 'Full-Time',
      worklocation: 'On-Site',
      position: 'Senior Level',
      location: 'Seattle, WA',
      salary: '$85,000 - $105,000',
      color: 'warning',
      vacancies: "20"
   },
   {
      id: 5,
      image: comppanyLogo5,
      title: 'UI/UX Designer',
      companyname: 'Design Lab Co. ',
      jobtype: ' Full Time',
      worklocation: 'On-Site',
      position: 'Junior Level',
      location: 'Austin, TX',
      salary: '$95,000 - $125,000',
      color: 'info',
      vacancies: "15"
   },

];

