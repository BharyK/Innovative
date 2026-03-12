import face2 from '../../../../assets/images/faces/2.jpg';
import face3 from '../../../../assets/images/faces/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';
import face5 from '../../../../assets/images/faces/5.jpg';
import face6 from '../../../../assets/images/faces/6.jpg';
import face7 from '../../../../assets/images/faces/7.jpg';
import face8 from '../../../../assets/images/faces/8.jpg';
import face9 from '../../../../assets/images/faces/9.jpg';


interface SelectType {
  value: string;
  label: string;
}

export const RecruiterType: SelectType[] = [
  { value: 'Agency', label: 'Agency' },
  { value: 'Direct Company', label: 'Direct Company' },
]

export const Data: SelectType[] = [
  { value: 'All Categories', label: 'All Categories' },
  { value: 'Software Dveloper', label: 'Software Dveloper' },
  { value: 'Web Developer', label: 'Web Developer' },
  { value: 'Software Architect', label: 'Software Architect' },
  { value: 'IT Hardware', label: 'IT Hardware' },
  { value: 'Network Engineer', label: 'Network Engineer' },
  { value: 'Angular Developer', label: 'Angular Developer' },
  { value: 'React Developer', label: 'React Developer' },
];
export const Data2: SelectType[] = [
  { value: 'Experience Level', label: 'Experience Level' },
  { value: 'Fresher', label: 'Fresher' },
  { value: '1 Year Experience', label: '1 Year Experience' },
  { value: '2 Year Experience', label: '2 Year Experience' },
  { value: '3 Year Experience', label: '3 Year Experience' },
  { value: '4 Year Experience', label: '4 Year Experience' },
  { value: '5 Year Experience', label: '5 Year Experience' },
];


import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const LabeledTwoThumbs1 = ({ rtl }: boolean) => {
  const STEP = 100;
  const MIN = 0;
  const MAX = 100000;

  const [values, setValues] = useState([8000, 40000]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangesdlier-thumb"
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['var(--default-body-bg-color)', 'var(--primary-color)', 'var(--default-body-bg-color)'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <Fragment key={Math.random()}>
            <div
              {...props}

              key={index}

              style={{
                ...props.style,
                top: "14px",
                height: '20px',
                width: '24px',
                borderRadius: '4px',
                backgroundColor: 'var(--custom-white)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'rgba(170, 170, 170, 0.3) 0px 2px 6px'
              }}

            >
              <Fragment key={Math.random()}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-28px',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                    padding: '4px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--primary-color)',
                  }}
                >
                  {values[index].toFixed(1)}
                </div>
                <div
                  style={{
                    height: '16px',
                    width: '5px',
                    backgroundColor: isDragged ? 'var(--primary-color)' : 'var(--primary-color)',
                  }}
                />
              </Fragment>
            </div>
          </Fragment>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs1;


interface jobcandidateType {
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
    qualification: 'Degree in Design',
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
    qualification: "Bachelor's in Degree",
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
    qualification: "Degree in Science",
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
  {
    id: 7,
    name: 'Emily Clark',
    image: face8,
    role: 'Marketing Specialist',
    location: 'Austin, TX',
    qualification: "Bachelor's in Marketing",
    salary: ' $85,000',
    jobtype: 'Part-Time',
    badge1: 'Hybrid',
    badge2: 'Junior Level',
    badge3: 'Marketing',
    avatarcolor: 'secondary'
  },
  {
    id: 8,
    name: 'Michael',
    image: face2,
    role: 'Front-End Developer',
    location: 'New York, NY',
    qualification: "Master's in Science",
    salary: '$120,000',
    jobtype: 'Full Time',
    badge1: 'Remote',
    badge2: 'Senior Level',
    badge3: 'Software',
    avatarcolor: 'primary'
  },
  {
    id: 9,
    name: 'Michael',
    image: face3,
    role: 'Front-End Developer',
    location: 'New York, NY',
    qualification: "Bachelor's in Marketing",
    salary: ' $85,000',
    jobtype: 'Part-Time',
    badge1: 'Hybrid',
    badge2: 'Junior Level',
    badge3: 'Marketing',
    avatarcolor: 'danger'
  },
  {
    id: 10,
    name: 'Michael',
    image: face9,
    role: 'Front-End Developer',
    location: 'New York, NY',
    qualification: 'MSC',
    salary: '$120,000',
    jobtype: 'Full Time',
    badge1: 'Remote',
    badge2: 'Senior Level',
    badge3: 'Software',
    avatarcolor: 'warning'
  },
];
