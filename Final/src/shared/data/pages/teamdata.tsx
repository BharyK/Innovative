import team1 from '../../../assets/images/faces/team/1.png'
import team2 from '../../../assets/images/faces/team/2.png'
import team3 from '../../../assets/images/faces/team/3.png'
import team4 from '../../../assets/images/faces/team/4.png'
import team5 from '../../../assets/images/faces/team/5.png'
import team6 from '../../../assets/images/faces/team/6.png'
import team7 from '../../../assets/images/faces/team/7.png'
import team8 from '../../../assets/images/faces/team/8.png'


interface CategoriesType {
    color: string;
    icon: string;
    label: string;
    isActive?: boolean;
    id: number
}

export const CategoriesData: CategoriesType[] = [
    { id: 1, color: 'primary', icon: 'list-check', label: 'All Team', isActive: true },
    { id: 2, color: 'secondary', icon: 'star-line', label: 'Ui Developer' },
    { id: 3, color: 'warning', icon: 'computer-line', label: 'React Developer' },
    { id: 4, color: 'danger', icon: 'image-line', label: 'Manual Tester' },
    { id: 5, color: 'info', icon: 'paint-brush-line', label: 'Human Resources' },
    { id: 6, color: 'orange', icon: 'paint-brush-line', label: 'Backend Developer' },
    { id: 7, color: 'dark', icon: 'gift-line', label: 'Accountent' },
];

interface TeamMemberType {
    id: number;
    cardClass: string;
    src: string;
    name: string;
    position: string;
}
export const TeamMembers: TeamMemberType[] = [
    { id: 1, cardClass: 'primary', src: team1, name: 'Selena Rivera', position: 'MARKETING DIRECTOR' },
    { id: 2, cardClass: 'secondary', src: team2, name: 'Ariana Wolfe', position: 'CHIEF OPERATIONS OFFICER' },
    { id: 3, cardClass: 'danger', src: team3, name: 'Xavier Holt', position: 'CHIEF FINANCIAL OFFICER' },
    { id: 4, cardClass: 'warning', src: team5, name: 'Mateo Cruz', position: 'HEAD OF PRODUCT DEVELOPMENT' },
    { id: 5, cardClass: 'orange', src: team7, name: 'Rowan Elara', position: 'CHIEF DESIGN OFFICER' },
    { id: 6, cardClass: 'info', src: team4, name: 'Alina Vargas', position: 'CHIEF TECHNOLOGY OFFICER' },
    { id: 7, cardClass: 'pink', src: team6, name: 'Isabella Grey', position: 'HEAD OF HUMAN RESOURCES' },
    { id: 8, cardClass: 'teal', src: team8, name: 'Oliver Grayson', position: 'HEAD OF ENGINEERING' },
];