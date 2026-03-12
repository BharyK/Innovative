import SpkJobdetailsCard from "@/shared/@spk-reusable-components/reusable-apps/spk-JobdetailsCard";


interface jobdataType {
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  openings: string;
  education: string;
  shift: string;
  icon: string;
  color: string;
  heartIcon: string;
}

export const jobData: jobdataType[] = [
  {
    title: " HTML Developer - Fresher",
    company: "Spotech Technical Solutions",
    location: "Hyderabad",
    experience: "Min - 2Years",
    salary: "$25,000",
    openings: '13 Openings',
    education: 'Graduate',
    shift: 'flexible-shift',
    icon: "ri-html5-fill",
    color: "primary",
    heartIcon: 'line'
  },
  {
    title: "React Lead Developer",
    company: "Infratech PVT LTD",
    location: "Hyderabad",
    experience: "Min - 2Years",
    salary: "$17,000",
    openings: '13 Openings',
    education: 'Graduate',
    shift: 'flexible-shift',
    icon: "ri-reactjs-line",
    color: "secondary",
    heartIcon: 'fill'
  },
  {
    title: "Vuejs Frontend Developer",
    company: "G Technical Solutions",
    location: "Hyderabad",
    experience: "Min - 2Years",
    salary: "$16,000",
    openings: '13 Openings',
    education: 'Graduate',
    shift: 'flexible-shift',
    icon: "ri-vuejs-line",
    color: "success",
    heartIcon: 'line'
  },
];

export const jobsdata = jobData.map((item, index) => (
  <div className="" key={index} >
    <SpkJobdetailsCard item={item} />
  </div>
))

interface infocards {
  icon: string;
  iconBackground: string;
  label: string;
  value: string;
}

export const infoCards: infocards[] = [
  {
    icon: 'ri-briefcase-line',
    iconBackground: 'bg-primary',
    label: 'Experience Level',
    value: 'Intermediate'
  },
  {
    icon: 'ri-macbook-line',
    iconBackground: 'bg-secondary',
    label: 'Job Type',
    value: 'Contract Base'
  },
  {
    icon: 'ri-home-office-line',
    iconBackground: 'bg-success',
    label: 'Work Type',
    value: 'Remote'
  },
  {
    icon: 'ri-calendar-line',
    iconBackground: 'bg-info',
    label: 'Working Days',
    value: '5 Days/week'
  },
  {
    icon: 'ri-time-line',
    iconBackground: 'bg-warning',
    label: 'Working Hours',
    value: '9:30AM-6:00PM'
  }
];

interface jobsdata {
  id:number;
  icon: string;
  iconBackground: string;
  title: string;
  company: string;
}

export const jobsData: jobsdata[] = [
  {
    id:1,
    icon: "ri-reactjs-line",
    iconBackground: "bg-primary-transparent border-primary",
    title: "React Lead Developer",
    company: "Infratech PVT LTD",
  },
  {
    id:2,
    icon: "ri-html5-line",
    iconBackground: "bg-secondary-transparent border-secondary",
    title: "HTML Developer - Fresher",
    company: "Wcsrm Software PRIVATE LIMITED",

  },
  {
    id:3,
    icon: "ri-wordpress-line",
    iconBackground: "bg-success-transparent border-success",
    title: "Wordpress Developer - Remote",
    company: "Hardware Private Solutions",

  },
  {
    id:4,
    icon: "ri-vuejs-line",
    iconBackground: "bg-info-transparent border-info",
    title: "Vuejs Frontend Developer",
    company: "G Technical Solutions",

  }
];

interface companiesdata {
  image: string;
  iconBackground: string;
  title: string;
  company: string;

}

export const CompaniesData: companiesdata[] = [
  {
    image: "/assets/images/company-logos/3.png",
    iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
    title: "React Lead Developer",
    company: "Infratech PVT LTD",

  },
  {
    image: "/assets/images/company-logos/6.png",
    iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
    title: "HTML Developer - Fresher",
    company: "Wcsrm Software PRIVATE LIMITED",

  },
  {
    image: "/assets/images/company-logos/8.png",
    iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
    title: "Wordpress Developer",
    company: "Hardware Private Solutions",

  },
  {
    image: "/assets/images/company-logos/5.png",
    iconBackground: "avatar avatar-md avatar-rounded bg-gray-300 border",
    title: "Vuejs Frontend Developer",
    company: "G Technical Solutions",

  }
];

export const tags = [
  '#UI',
  '#UX',
  '#Designer',
  '#Sketch',
  '#Remote',
  '#Office',
  '#Full Time',
  '#Partime',
  '#Job',
  '#Visa',
  '#Fresher',
  '#Experienced',
  '#Graduate',
  '#Service',
  '#Salary'
];