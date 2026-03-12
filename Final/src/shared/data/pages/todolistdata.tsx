import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';


interface NavItemType {
    id: number;
    label: string;
    icon: string;
    count?: number;
    active?: boolean;
}
export const NavItems: NavItemType[] = [
    { id: 1, label: "All Tasks", icon: "task-line", count: 167, active: true, },
    { id: 2, label: "Starred", icon: "star-line", },
    { id: 3, label: "Trash", icon: "delete-bin-5-line", },
    { id: 4, label: "Important", icon: "error-warning-line", },
    { id: 5, label: "Completed", icon: "checkbox-multiple-line", },
    { id: 6, label: "Pending", icon: "refresh-line", },
];

interface CategoryItemType {
    id: number;
    label: string;
    className: string;
}
export const CategoriesData: CategoryItemType[] = [
    { id: 1, label: "Personal", className: "primary", },
    { id: 2, label: "Work", className: "secondary", },
    { id: 3, label: "Health & Fitness", className: "danger", },
    { id: 4, label: "Daily Goals", className: "warning", },
    { id: 5, label: "Financial Management", className: "info", },
];

interface SelectType {
    label: string;
    value: string | number
}

export const ToDoListStatus: SelectType[] = [
    { label: 'In progress', value: 1 },
    { label: 'Not Started', value: 2 },
    { label: 'Completed', value: 3 },
    { label: 'Pending', value: 4 },
]
export const ToDolistPriority: SelectType[] = [
    { label: 'Critical', value: 1 },
    { label: 'High', value: 2 },
    { label: 'Medium', value: 3 },
    { label: 'Low', value: 4 },

]
export const Todolisttags: SelectType[] = [
    { value: 1, label: 'Angelina May' },
    { value: 2, label: 'Kiara advain' },
    { value: 3, label: 'Hercules Jhon' },
    { value: 4, label: 'Mayor Kim' },
]

interface ImageItem {
    src: string;
}

interface GridViewType {
    id: number;
    title: string;
    description: string;
    isChecked: boolean;
    progress: number;
    inComplete: number;
    startDate: string;
    endDate: string;
    priority: string;
    priorityClass: string;
    images: ImageItem[];
}
export const GridView: GridViewType[] = [
    {
        id: 1,
        title: 'Update project management tools',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: true,
        progress:  70 ,
        inComplete: 30,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Medium',
        priorityClass: 'warning',
        images: [
            { src: face1 },
            { src: face2 },
            { src: face3 },
            { src: face5 },

        ]
    },
    {
        id: 2,
        title: 'Gather functional and non-functional requirements',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 40,
        inComplete: 60,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'High',
        priorityClass: 'danger',
        images: [
            { src: face1 },
            { src: face2 },
            { src: face3 },
        ]
    },
    {
        id: 3,
        title: 'Analyze competitors and existing solutions.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 30,
        inComplete: 70,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Low',
        priorityClass: 'primary',
        images: [
            { src: face8 },
            { src: face7},
            { src: face1 },
            { src: face2 },
            { src: face3 },

        ]
    },
    {
        id: 4,
        title: 'Plan for secure data storage and communication.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 70,
        inComplete: 30,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Medium',
        priorityClass: 'warning',
        images: [
            { src: face2 },
            { src: face3 },

        ]
    },
    {
        id: 5,
        title: 'Implement responsive design and accessibility features.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: true,
        progress: 28,
        inComplete: 72,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'High',
        priorityClass: 'danger',
        images: [
            { src: face1 },
            { src: face2 },
            { src: face3 },
            { src: face5 },

        ]
    },
    {
        id: 6,
        title: 'Build APIs and services to handle business logic.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 44,
        inComplete: 56,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Medium',
        priorityClass: 'warning',
        images: [
            { src: face3 },


        ]
    },
    {
        id: 7,
        title: 'Test how different components of the system work together.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 52,
        inComplete: 48,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Low',
        priorityClass: 'primary',
        images: [
            { src: face5 },
            { src: face8 },
            { src: face3 },

        ]

    },
    {
        id: 8,
        title: 'Review deployment processes and documentation.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: false,
        progress: 48,
        inComplete: 52,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Low',
        priorityClass: 'primary',
        images: [
            { src: face8 },
            { src: face5 },
            { src: face8 },
            { src: face3 },

        ]
    },
    {
        id: 9,
        title: 'Ensure uptime and reliability of the software.',
        description: 'Go through the list of ongoing tasks and check their current status.',
        isChecked: true,
        progress: 75,
        inComplete: 25,
        startDate: '01 Sep, 2024',
        endDate: '30 Sep, 2024',
        priority: 'Low',
        priorityClass: 'danger',
        images: [
            { src: face1 },
            { src: face2 },
            { src: face3 },

        ]
    }
];