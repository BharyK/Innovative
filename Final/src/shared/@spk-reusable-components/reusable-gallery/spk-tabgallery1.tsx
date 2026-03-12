import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Lightboxcomponent } from "../reusable-plugins/spk-lightbox";
import { Tabgallery1Data } from "../../data/apps/gallerydata";
import media40 from '../../../assets/images/media/media-40.jpg';
import media41 from '../../../assets/images/media/media-41.jpg';
import media42 from '../../../assets/images/media/media-42.jpg';
import media43 from '../../../assets/images/media/media-43.jpg';
import media44 from '../../../assets/images/media/media-44.jpg';
import media45 from '../../../assets/images/media/media-45.jpg';
import media46 from '../../../assets/images/media/media-46.jpg';
import media61 from '../../../assets/images/media/media-61.jpg';

export const Tabgallery1 = () => {

    const [open, setOpen] = useState(false);



    return (
        <Fragment>
            <Row>
                <Col lg={6}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media41} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media42} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media43} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media44} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6}>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media45} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media46} alt="image" className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media61} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" className="glightbox stretched-link" data-gallery="gallery1" onClick={() => setOpen(true)} >
                                    <img src={media40} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Lightboxcomponent plugins={false}
                open={open}
                close={() => setOpen(false)}
                slides={Tabgallery1Data}
            />
        </Fragment>
    )
}