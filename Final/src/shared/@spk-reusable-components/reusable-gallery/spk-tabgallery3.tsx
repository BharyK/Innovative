import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Lightboxcomponent } from "../reusable-plugins/spk-lightbox";
import { Tabgallery3Data } from "../../data/apps/gallerydata";
import media23 from '../../../assets/images/media/media-23.jpg';
import media30 from '../../../assets/images/media/media-30.jpg';
import media40 from '../../../assets/images/media/media-40.jpg';
import media64 from '../../../assets/images/media/media-64.jpg';

export const Tabgallery3 = () => {

    const [open, setOpen] = useState(false);


    return (
        <Fragment>
            <Row>
                <Col sm={4} className="col-auto">
                    <Card className=" custom-card overflow-hidden gallery-cards animate-fade">
                        <Link to="#!" onClick={() => setOpen(true)}
                            className="glightbox stretched-link" data-gallery="gallery1">
                            <img src={media64} alt="image"
                                className="img-fluid gallery-tab-img" />
                        </Link>
                    </Card>
                    <Card className=" custom-card overflow-hidden gallery-cards animate-fade">
                        <Link to="#!" onClick={() => setOpen(true)}
                            className="glightbox stretched-link" data-gallery="gallery1">
                            <img src={media23} alt="image"
                                className="img-fluid gallery-tab-img" />
                        </Link>
                    </Card>
                </Col>
                <Col sm={8} className="">
                    <Row>
                        <Col lg={6} className="col-6">
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="glightbox stretched-link" data-gallery="gallery1">
                                    <img src={media30} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                            <Card className="custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="glightbox stretched-link" data-gallery="gallery1">
                                    <img src={media40} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                        </Col>
                        <Col lg={6} className="col-6">
                            <Card className=" custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="glightbox stretched-link" data-gallery="gallery1">
                                    <img src={media40} alt="image"
                                        className="img-fluid gallery-tab-img" />
                                </Link>
                            </Card>
                            <Card className=" custom-card overflow-hidden gallery-cards animate-fade">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="glightbox stretched-link" data-gallery="gallery1">
                                    <img src={media30} alt="image"
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
                slides={Tabgallery3Data}
            />
        </Fragment>
    )
}