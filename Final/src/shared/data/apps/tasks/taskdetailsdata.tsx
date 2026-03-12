import file1 from '../../../../assets/images/media/file-manager/1.png';
import file3 from '../../../../assets/images/media/file-manager/3.png';
import face1 from '../../../../assets/images/faces/1.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';
import face11 from '../../../../assets/images/faces/11.jpg';
import face12 from '../../../../assets/images/faces/12.jpg';
import face13 from '../../../../assets/images/faces/13.jpg';
import face14 from '../../../../assets/images/faces/14.jpg';
import media17 from '../../../../assets/images/media/media-17.jpg';


export const files = [
    {
        name: 'Review Project',
        size: '0.68MB',
        image: file1,
        imgcls: "p-2"
    },
    {
        name: 'assets.zip',
        size: '0.45MB',
        image: file3,
    },
    {
        name: 'images_205',
        size: '1.2MB',
        image: file1,
        imgcls: "p-2"
    },
    {
        name: 'documentation.zip',
        size: '2MB',
        image: file3,
    },
    {
        name: 'Support-policy.doc',
        size: '0.45MB',
        image: file3,
    },
    {
        name: 'Profile-designs.zip',
        size: '3.46MB',
        image: file3,
    },
];

interface subtaskType {
    label: string;
    checked: boolean;
    details?: string;
}
export const subTaskData: subtaskType[] = [
    {
        label: "Under Standing Client Design Briefly.",
        checked: true,
        details: "The brief from client was not clear."
    },
    {
        label: "Define campaign goals and objectives.",
        checked: false
    },
    {
        label: "Schedule social media posts.",
        checked: false
    },
    {
        label: "Meeting and mind mapping with Taylor.",
        checked: true,
        details: "Some Employees have different KPI cases."
    },
    {
        label: "Modify content as needed.",
        checked: false
    },
    {
        label: "Implement customer feedback.",
        checked: false
    },
    {
        label: "Schedule social media posts.",
        checked: true
    }
];

export const commentdata = [
    {
        id: 1,
        image: face1,
        name: 'Sophia Reed',
        text: 'Reviewed the code and identified potential performance issues.',

    },
    {
        id: 2,
        image: face13,
        name: 'Alex Johnson',
        text: 'Completed initial testing of the new feature',
        mediaimg: true

    },
    {
        id: 3,
        image: face11,
        name: 'Even Williams',
        text: 'Attached the updated wireframe designs based',

    }
]
interface Item {
    description: string;
}

interface ItemColumn {
    column: number;
    items: Item[];
}

export const Keytaskdata: ItemColumn[] = [
    {
        column: 1,
        items: [
            {
                description: "Reviewing query execution plans to identify bottlenecks"
            },
            {
                description: "Minimizing unnecessary queries that retrieve data."
            },
            {
                description: "Ensuring that joins are performed on indexed columns and in the most efficient order."
            }
        ]
    },
    {
        column: 2,
        items: [
            {
                description: "Reducing the amount of data retrieved by queries."
            },
            {
                description: "Implement additional security measures as needed."
            },
            {
                description: "Using techniques like pagination or limiting results to reduce the impact on performance."
            }
        ]
    }
];
export interface TimelineItemType {
    image: boolean;
    Src?: string;
    avatarClass?: string;
    avatartext?: string;
    title: string;
    description?: string;
    timestamp: string;
    color: 'light' | 'dark' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
    media?: string;
}
export const timelineData: TimelineItemType[] = [
    {
        image: true,
        Src: face8,
        title: "<span className='text-default'> <span className='fw-medium'>Emma</span> uploaded a new wireframe design for the homepage layout. </span>",
        description: `"This wireframe covers the new responsive  layout for both mobile and desktop views. Please provide feedback."`,
        timestamp: "16, September 2024 - 09:45",
        color: 'light',
        media: `<p className='profile-activity-media mb-0'> <a aria-label='anchor' href='#!'> <img  src="${file3}" alt='Wireframe Image' className='bg-light mb-0' /> </a> <span className='fs-11 text-muted'>120.45KB</span> </p>`,
    },
    {
        image: true,
        Src: face7,
        title: "<span className='text-default'> <span className='fw-medium'>Oliver</span> updated the performance metrics document with <span className='fw-medium'>you</span>. </span",
        description: `"The updated metrics document now includes  the latest performance benchmarks and security enhancements."`,
        timestamp: "15, September 2024 - 11:30",
        color: 'light',
        media: `<div className="d-flex align-items-center gap-2"> <a aria-label="anchor" to="#!" className="avatar avatar-sm"> <img   src="${file1}" alt="Document" /> </a> <span className="fs-11 text-muted">340.76KB</span> </div>`,
    },
    {
        image: false,
        avatarClass: 'bg-secondary',
        avatartext: "S",
        title: `<span className="text-default"> <span  className="fw-medium">You</span> shared the performance improvement plan with 5 team members, including <span className="fw-medium">Ethan, Olivia, Noah, Isabella</span>. </span>`,
        description: ``,
        timestamp: "14, September 2024 - 16:05",
        color: 'light',
        media: `<p className="profile-activity-media mb-2"> <a aria-label="anchor"  to="#!"> <img src="${media17}" alt="Plan Image" className="m-0 mt-1" /> </a> </p>`,
    },
    {
        image: true,
        Src: face5,
        title: "<span className='text-default'> <span className='fw-medium'>Liam</span>  commented on the performance enhancement strategy.  </span>",
        timestamp: "13, September 2024 - 10:00",
        color: 'light',
        description: `"The new strategy looks promising.feedback by tomorrow."<span className="avatar-list-stacked ms-2"> 
        <span   className="avatar avatar-xs avatar-rounded">
         <img    src="${face3}" alt="User 1" />
          </span>
        <span className="avatar avatar-xs avatar-rounded"> <img
            src="${face9}" alt="User 2" /> </span>
        <span className="avatar avatar-xs avatar-rounded"> <img
            src="${face12}" alt="User 3" /> </span>
        <span className="avatar avatar-xs avatar-rounded"> <img
            src="${face14}" alt="User 4" /> </span> 4
        Team members reacted </span>`,
        media: ""
    },
    {
        image: false,
        avatarClass: 'bg-danger',
        avatartext: "M",
        title: `<span className="text-default"> <span className="fw-medium">Sarayu</span> Shared Opinion the performance enhancement strategy. </span>`,
        description: `The proposed plan seems to have a lot of potential. Please share your thoughts by tomorrow.`,
        timestamp: "22, December 2024 - 10:00",
        color: 'light',
        media: "",
    },
];