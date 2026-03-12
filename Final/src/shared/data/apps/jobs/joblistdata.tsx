interface jobdataType {
    id: string;
    checked: boolean,
    title: string;
    location: string;
    companyLogo: string;
    companyName: string;
    department: string;
    applied: number,
    slots: number,
    status: string;
    statusColor: string;
    jobType: string;
    startDate: string;
    endDate: string;
}


export const jobslistData: jobdataType[] = [
    {
        id: '1',
        checked: true,
        title: 'Senior Frontend Developer',
        location: ' Los Angeles, CA',
        companyLogo: '../../../assets/images/company-logos/8.png',
        companyName: 'Engineering',
        department: 'Tech Innovations Inc.',
        applied: 30,
        slots: 8,
        status: 'Open',
        statusColor: 'success',
        jobType: 'Full Time',
        startDate: '2024-09-10	',
        endDate: 'Nov 25 2024',

    },
     {
        id: '2',
        checked: false,
        title: 'Backend Developer',
        location: ' San Francisco, CA',
        companyLogo: '../../../assets/images/company-logos/9.png',
        companyName: 'IT',
        department: 'NextGen Solutions',
        applied: 45,
        slots: 6,
        status: 'Closed',
        statusColor: 'success',
        jobType: '	Part Time',
        startDate: '2024-08-20	',
        endDate: 'Oct 30 2024',

    },
     {
        id: '3',
        checked: false,
        title: 'Full Stack Developer',
        location: ' Austin, TX',
        companyLogo: '../../../assets/images/company-logos/10.png',
        companyName: 'Software',
        department: 'Innovate Solutions',
        applied: 50,
        slots: 10,
        status: 'Open',
        statusColor: 'success',
        jobType: 'Contract',
        startDate: '2024-09-05',
        endDate: 'Dec 20 2024',

    },
     {
        id: '4',
        checked: true,
        title: 'UI/UX Designer',
        location: 'New York, NY',
        companyLogo: '../../../assets/images/company-logos/6.png',
        companyName: 'Design',
        department: 'Creative Minds',
        applied: 25,
        slots: 4,
        status: 'Closed',
        statusColor: 'danger',
        jobType: 'Freelance',
        startDate: '2024-07-15',
        endDate: 'Nov 05 2024',

    },
     {
        id: '5',
        checked: false,
        title: 'DevOps Engineer',
        location: 'Seattle, WA',
        companyLogo: '../../../assets/images/company-logos/1.png',
        companyName: '	Operations',
        department: 'Tech Savvy',
        applied: 60,
        slots: 7,
        status: 'Open',
        statusColor: 'success',
        jobType: 'Full Time',
        startDate: '2024-09-12',
        endDate: 'Dec 01 2024',

    },
     {
        id: '6',
        checked: true,
        title: 'Data Scientist',
        location: 'Boston, MA',
        companyLogo: '../../../assets/images/company-logos/3.png',
        companyName: 'Engineering',
        department: 'Mobile Development',
        applied: 30,
        slots: 8,
        status: 'Open',
        statusColor: 'success',
        jobType: 'Full Time',
        startDate: '2024-09-10	',
        endDate: 'Nov 25 2024',

    },
     {
        id: '7',
        checked: false,
        title: 'Mobile App Developer',
        location: ' Denver, CO',
        companyLogo: '../../../assets/images/company-logos/4.png',
        companyName: 'Mobile Development',
        department: 'AppFusion Technologies',
        applied: 28,
        slots: 3,
        status: 'Pending',
        statusColor: 'warning',
        jobType: 'Part Time',
        startDate: '2024-09-15',
        endDate: 'Dec 15 2024',

    },
];