import React, { type ReactNode } from 'react'
import parse from 'html-react-parser';
import SpkBadge from '../reusable-uielements/spk-badge';


interface ObjectProps {
    image?: boolean;
    avatarClass?: string;
    Src?: string;
    avatartext?: string | undefined
    title?: string | any;
    titleClass?: string | any;
    description?: ReactNode;
    timestamp?: string;
    desClass?: string;
    color?: string
    media?: string | any;

}

interface SpkTimelineProps {
    obj: ObjectProps
    sharedWith?: string[];
    Textafter?: boolean
}
const SpkTimelineCard: React.FC<SpkTimelineProps> = ({ obj }) => {
    return (
        <li>
            <div>
                <span className={`avatar avatar-sm avatar-rounded profile-timeline-avatar ${obj.avatarClass}`}>
                    {obj.image ? <img src={obj.Src} alt="Emma" /> : obj.avatartext}
                </span>
                <p className={`text-muted mb-2 ${obj.titleClass}`}>
                    {parse(obj.title)}
                    <SpkBadge variant={obj.color} Customclass={`float-end fs-11 text-muted`}>
                        {obj.timestamp}
                    </SpkBadge>
                </p>
                <p className={`text-muted mb-2 fs-12 desClass ${obj.desClass}`}> {parse(obj.description)}</p>
                {parse(obj.media)}
            </div>
        </li>
    )
}

export default SpkTimelineCard