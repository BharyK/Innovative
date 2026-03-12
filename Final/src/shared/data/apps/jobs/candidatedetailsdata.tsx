import Spksearchcandidate from "../../../@spk-reusable-components/reusable-apps/spksearchcandidate";
import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';


export interface jobcandidateType {
  id: number;
  name: string;
  image: string;
  role: string;
  location: string;
  qualification: string;
  salary: string;
  jobtype: string;
  badge1: string;
  badge2: string;
  badge3: string;
  avatarcolor: string;
}

export const jobCandidates: jobcandidateType[] = [
  {
    id: 1,
    name: 'Michael',
    image: face2,
    role: 'Front-End Developer',
    location: 'New York, NY',
    qualification: 'MSC',
    salary: '$120,000',
    jobtype: 'Full Time',
    badge1: 'Remote',
    badge2: 'Senior Level',
    badge3: 'Software',
    avatarcolor: 'primary'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    image: face3,
    role: 'UI/UX Designer',
    location: 'New York, NY',
    qualification: 'MSC',
    salary: '$100,000',
    jobtype: 'Contract',
    badge1: 'Remote',
    badge2: 'Mid Level',
    badge3: 'Design',
    avatarcolor: 'secondary'
  },
  {
    id: 3,
    name: 'John Doe',
    image: face4,
    role: 'Backend Developer',
    location: 'Austin, TX',
    qualification: 'MSC',
    salary: '$120,000',
    jobtype: 'Full Time',
    badge1: 'On-Site',
    badge2: 'Senior Level',
    badge3: 'Programming',
    avatarcolor: 'danger'
  },
  {
    id: 4,
    name: 'Emily Johnson',
    image: face5,
    role: 'Marketing Specialist',
    location: 'New York, NY',
    qualification: 'MSC',
    salary: '$70,000',
    jobtype: 'Full Time',
    badge1: 'Remote',
    badge2: 'Entry Level',
    badge3: 'Marketing',
    avatarcolor: 'warning'
  },
  {
    id: 5,
    name: 'Alex Martinez',
    image: face6,
    role: 'Data Scientist',
    location: 'Seattle, WA',
    qualification: "Degree Science",
    salary: '$130,000',
    jobtype: 'Full Time',
    badge1: 'Hybrid',
    badge2: 'Mid Level',
    badge3: 'Data Analysis',
    avatarcolor: 'info'
  },
  {
    id: 6,
    name: 'Olivia Brown',
    image: face7,
    role: 'Project Manager',
    location: 'Boston, MA',
    qualification: 'MBA in Management',
    salary: '$150,000',
    jobtype: 'Full Time',
    badge1: 'On-Site',
    badge2: 'Senior Level',
    badge3: 'Management',
    avatarcolor: 'primary'
  },

];

export const jobCandidatesdata = jobCandidates.map((idx, index) => (
  <div className="" key={index} >
    <Spksearchcandidate obj={idx} />
  </div>
))