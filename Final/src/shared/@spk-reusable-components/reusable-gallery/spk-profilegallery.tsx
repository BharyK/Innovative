import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import media27 from '../../../assets/images/media/media-27.jpg';
import media28 from '../../../assets/images/media/media-28.jpg';
import media29 from '../../../assets/images/media/media-29.jpg';
import media30 from '../../../assets/images/media/media-30.jpg';
import media31 from '../../../assets/images/media/media-31.jpg';
import media40 from '../../../assets/images/media/media-40.jpg';
import media41 from '../../../assets/images/media/media-41.jpg';
import media42 from '../../../assets/images/media/media-42.jpg';
import media43 from '../../../assets/images/media/media-43.jpg';
import media44 from '../../../assets/images/media/media-44.jpg';
import media45 from '../../../assets/images/media/media-45.jpg';
import media46 from '../../../assets/images/media/media-46.jpg';
import media59 from '../../../assets/images/media/media-59.jpg';
import media60 from '../../../assets/images/media/media-60.jpg';

export const ProfileGalleryList = () => {
    const [open, setOpen] = useState(false);

    const slide = [
        { src: media40, alt: 'Image 1' },
        { src: media41, alt: 'Image 2' },
        { src: media42, alt: 'Image 3' },
        { src: media43, alt: 'Image 4' },
        { src: media44, alt: 'Image 5' },
        { src: media45, alt: 'Image 6' },
        { src: media46, alt: 'Image 7' },
        { src: media60, alt: 'Image 9' },
        { src: media46, alt: 'Image 10' },
        { src: media59, alt: 'Image 11' },
        { src: media27, alt: 'Image 12' },
        { src: media28, alt: 'Image 13' },
        { src: media29, alt: 'Image 14' },
        { src: media30, alt: 'Image 15' },
        { src: media31, alt: 'Image 15' },
    ];

    return (
        <Fragment>
            {slide.map((idx, index) => (
                <Col key={index}>
                    <Link to="#!" className="glightbox card" data-gallery="gallery1">
                        <img
                            src={idx.src}
                            alt={idx.alt}
                            onClick={() => setOpen(true)}
                        />
                    </Link>
                </Col>
            ))}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slide}
            />
        </Fragment>
    );
};