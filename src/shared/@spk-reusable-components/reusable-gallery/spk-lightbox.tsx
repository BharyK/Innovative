import { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Lightboxcomponent } from "../reusable-plugins/spk-lightbox";
import { GalleryListData } from "../../data/apps/gallerydata";
import media10 from '../../../assets/images/media/media-10.jpg';
import media23 from '../../../assets/images/media/media-23.jpg';
import media30 from '../../../assets/images/media/media-30.jpg';
import media34 from '../../../assets/images/media/media-34.jpg';
import media35 from '../../../assets/images/media/media-35.jpg';
import media36 from '../../../assets/images/media/media-36.jpg';
import media40 from '../../../assets/images/media/media-40.jpg';
import media47 from '../../../assets/images/media/media-47.jpg';

export const GalleryList = () => {

    const [open, setOpen] = useState(false);



    return (
        <Fragment>
            <Row className="g-2">
                <Col lg={3} sm={6}>
                    <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                        <img src={media40} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                    <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                        <img src={media36} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                    <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                        <img src={media47} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} sm={6}>
                    <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                        <img src={media30} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                    <Link to="#!" className="glightbox card custom-card mb-2"
                        data-gallery="gallery1">
                        <img src={media23} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                    <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                        <img src={media10} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={5} className="d-none d-lg-block">
                    <Row className="gx-2 gy-0">
                        <Col lg={6}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media47} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                        <Col lg={6}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media47} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                        <Col lg={12}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media47} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media34} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media35} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                        <Col lg={4}>
                            <Link to="#!" className="glightbox card custom-card mb-2" data-gallery="gallery1">
                                <img src={media36} alt="image" onClick={() => setOpen(true)} />
                            </Link>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Lightboxcomponent plugins={false}
                open={open}
                close={() => setOpen(false)}
                slides={GalleryListData}
            />
        </Fragment>
    )
}