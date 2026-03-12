import { Fragment, useEffect } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import LightGallery from 'lightgallery/react';

// Plugins - You can still keep zoom if needed
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Descriptiondata, } from "../../../shared/data/apps/gallerydata";
import { GalleryList } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-lightbox";
import { Tabgallery1 } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-tabgallery1";
import { Tabgallery2 } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-tabgallery2";
import { Tabgallery3 } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-tabgallery3";
import media34 from '../../../assets/images/media/media-34.jpg';
import media35 from '../../../assets/images/media/media-35.jpg';
import media36 from '../../../assets/images/media/media-36.jpg';


const Gallery = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Gallery"} />
            <Pageheader title="Apps" currentpage="Gallery" activepage="Gallery" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="justify-content-center">
                <Col xl={10}>
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Grid View</p>
                        </div>
                    </div>
                    {/* <!-- Start::row-1 --> */}
                    <GalleryList />
                    {/* <!--End::row-1 --> */}
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Tabs View</p>
                        </div>
                    </div>
                    {/* <!-- Start::row-2 --> */}
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <div className="text-center mb-4">
                                <div className="tab-style-5 p-1 rounded d-inline-block bg-white shadow-sm">
                                    <Nav className="nav-pills justify-content-center" role="tablist">
                                        <Nav.Item className="nav-item flex-fill" role="presentation">
                                            <Nav.Link eventKey="first" className="btn nav-link gallery-nav-link rounded w-100 fs-15 px-5 me-2 "
                                                data-bs-toggle="pill" data-bs-target="#All" aria-selected="true"
                                                role="tab">All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item flex-fill" role="presentation">
                                            <Nav.Link eventKey="second" className="btn nav-link gallery-nav-link rounded w-100 fs-15 px-5"
                                                data-bs-toggle="pill" data-bs-target="#Popular" aria-selected="false"
                                                role="tab" tabIndex={-1}>Popular</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item flex-fill" role="presentation">
                                            <Nav.Link eventKey="third" className="btn nav-link gallery-nav-link rounded w-100 fs-15 px-5"
                                                data-bs-toggle="pill" data-bs-target="#Recent" aria-selected="false"
                                                role="tab" tabIndex={-1}>Latest</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="gallery-tab-pane p-0 border-0 fade  show" id="All" role="tabpanel">
                                    <Tabgallery1 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="gallery-tab-pane fade p-0 border-0" id="Popular" role="tabpanel">
                                    <Tabgallery2 />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="gallery-tab-pane fade p-0 border-0" id="Recent" role="tabpanel">
                                    <Tabgallery3 />
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Tab.Container>
                    {/* <!-- End::row-2 --> */}
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Images with Description</p>
                        </div>
                    </div>
                    <LightGallery plugins={[lgZoom]} selector="a"
                        elementClassNames="custom-gallery"
                        mode="lg-fade">
                        <Row className="gy-4 mb-4">
                            {Descriptiondata.map(({ src, subHtml }, index) => (
                                <Col lg={3} md={3} sm={6} key={index}>
                                    <a href={src} data-sub-html={subHtml} className="custom-width">
                                        <img className="img-fluid rounded" src={src} alt={`Image ${index + 1}`} />
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </LightGallery>
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4">
                        <div>
                            <p className="fw-semibold fs-18 mb-0">Glightbox Videos Gallery</p>
                        </div>
                    </div>
                    <LightGallery speed={500} plugins={[lgZoom, lgVideo]} selector="a" elementClassNames="custom-gallery" mode="lg-fade">
                        <div className="row gy-4 mb-4">
                            <Col lg={4} md={4} sm={4}>
                                <a href="#!" data-src="https://vimeo.com/115041822">
                                    <img src={media34} alt="" className="img-fluid rounded" />
                                </a>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <a href="#!" data-src="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk">
                                    <img src={media35} alt="" className="img-fluid rounded" />
                                </a>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <a href="#!" data-src='https://vimeo.com/115041822'>
                                    <img src={media36} alt="" className="img-fluid rounded" />
                                </a>
                            </Col>
                        </div>
                    </LightGallery>

                </Col>
            </Row>

        </Fragment>
    );
};

export default Gallery;