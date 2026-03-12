import { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import { BooksData, ContinueListing, NewsData, SearchItems, SearchTags, TopSongsData, VideosData, YourSuggestedTracks } from "../../../shared/data/pages/searchdata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import media84 from "../../../assets/images/media/media-84.jpg"
import media35 from "../../../assets/images/media/media-35.jpg"
import { SearchGalleryList } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-searchgallery";

const Search = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Search"} />
            <Pageheader title="Pages" currentpage="Search" activepage="Search" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="">
                            <div className="p-3 bg-light rounded-3">
                                <div className="d-flex flex-wrap flex-xl-nowrap mb-3 search-result-input gap-2 align-items-center">
                                    <input type="text" className="form-control form-control-lg w-100 mb-sm-0 mb-2" placeholder="Search Here ..." aria-label="Search Here ..." aria-describedby="button-addon1" />
                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-icon btn-wave waves-effect waves-light" Buttontype="button" Id="button-addon1"> <i className="ri-mic-line fs-15"></i></SpkButton>
                                    <SpkButton Buttonvariant="primary" Customclass="btn  btn-wave btn-w-sm waves-effect waves-light" Buttontype="button" Id="button-addon11"> Search</SpkButton>
                                </div>
                                <p className="text-muted ms-2 fw-medium">Recommended for You!</p>
                                <div className="d-flex gap-2 flex-wrap">
                                    {SearchTags.map((idx, index) => (
                                        <span key={index} className="badge bg-white border border-primary border-opacity-25 text-default rounded-pill fs-11">{idx}
                                            <Link to="#!"><i className="ri-close-line"></i></Link>
                                        </span>
                                    ))}
                                    <div className="ms-auto">
                                        <Link to="#!" className="text-secondary text-decoration-underline fw-medium mx-2"> Clear
                                            All
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Tab.Container defaultActiveKey='all'>
                        <Nav as='ul' className="nav-tabs tab-style-1 justify-content-center scaleX bg-transparent gap-2" role="tablist">
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='all' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-all" aria-selected="true"><i className="ri-search-line me-2"></i>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='images' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-images" aria-selected="false" tabIndex={-1}><i className="ri-image-line me-2"></i>Images</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='books' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-books" aria-selected="false" tabIndex={-1}><i className="ri-book-line me-2"></i>Books</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='news' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-news" aria-selected="false" tabIndex={-1}><i className="ri-newspaper-line me-2"></i>News</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='audio' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-audio" aria-selected="false" tabIndex={-1}><i className="ri-folder-music-line me-2"></i>Audio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as='li' role="presentation">
                                <Nav.Link as='a' eventKey='videos' className="px-4 py-2 bg-primary-transparent fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-videos" aria-selected="false" tabIndex={-1}><i className="ri-live-line me-2"></i>Videos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='all' className="p-0 border-0" id="search-all" role="tabpanel">
                                <Row>
                                    <Col xl={9}>
                                        <Card className="custom-card overflow-hidden">
                                            <Card.Body className=" p-0">
                                                <ListGroup className="list-group-flush">
                                                    {SearchItems.map((idx) => (
                                                        <ListGroup.Item className={`${idx.class ? 'p-4 border-bottom border-block-end-dashed' : 'p-4'}`} key={idx.id}>
                                                            <div className="d-flex align-items-start justify-content-between">
                                                                <div>
                                                                    <div className="position-relative">
                                                                        <Link to="#!" className="stretched-link"></Link>
                                                                        <div className="d-flex align-items-center gap-2 mb-2 position-relative">
                                                                            <div className="lh-1">
                                                                                <span className="avatar avatar-md avatar-rounded bg-light border p-1">
                                                                                    <img src={idx.logoSrc} alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div>
                                                                                <span className="d-block fw-medium lh-1"><Link to="#!">{idx.websiteName}</Link></span>
                                                                                <span className="fs-12 text-muted">{idx.websiteUrl}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <h6 className="fw-medium mb-1">
                                                                            <Link to="#!" className="searched-item-main-link">{idx.title}</Link>
                                                                        </h6>
                                                                        <span className="d-block text-muted">{idx.date} - {idx.description}</span>
                                                                    </div>
                                                                </div>
                                                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light btn-icon no-caret" Icon={true} IconClass="ri-more-fill align-middle d-inline-block fs-15 fw-medium lh-1">
                                                                    <li><Dropdown.Item href="#!">Read More</Dropdown.Item> </li>
                                                                    <li><Dropdown.Item href="#!">Report</Dropdown.Item></li>
                                                                </SpkDropdown>
                                                            </div>
                                                        </ListGroup.Item>
                                                    ))}
                                                </ListGroup>
                                            </Card.Body>
                                        </Card>
                                        <div className="d-flex justify-content-end mb-4">
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <ul className="pagination mb-0">
                                                    <li className="page-item me-2 disabled"> <Link className="page-link" to="#!"> Prev</Link></li>
                                                    <li className="page-item me-2 active"><Link className="page-link" to="#!">1</Link></li>
                                                    <li className="page-item me-2"><Link className="page-link" to="#!">2</Link></li>
                                                    <li className="page-item me-2"><Link className="page-link" to="#!">3</Link></li>
                                                    <li className="page-item"><Link className="page-link text-primary" to="#!">next</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </Col>
                                    <Col xl={3}>
                                        <Row>
                                            <Col xl={12} md={6}>
                                                <Card className="custom-card bg-dark overlay-card text-fixed-white border-0 blog-first-cards">
                                                    <img src={media35} className="card-img rounded-0" alt="..." />
                                                    <div className="card-img-overlay d-flex flex-column p-0 over-content-top justify-content-between">
                                                        <Card.Body className=" pb-0">
                                                            <span className="fs-11 badge bg-pink mb-2">Books &amp;  Literature</span>
                                                        </Card.Body>
                                                        <Card.Footer className=" border-top-0 text-fixed-white overflow-y-scroll">
                                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="text-fixed-white fw-medium mb-2">
                                                                The Magic of
                                                                Books: How
                                                                Stories Shape Our World
                                                            </Link>
                                                            <div className="d-flex text-fixed-white gap-1">
                                                                <div>
                                                                    <i className="ti ti-writing text-fixed-white me-1 align-middle"></i>By
                                                                </div>
                                                                <Link to="#!" className="text-fixed-white">
                                                                    <i className="ti ti-user-circle mx-1 lh-1 text-fixed-white"></i>Book Enthusiast
                                                                </Link>
                                                            </div>
                                                            <div className="d-flex gap-2 mt-2 fs-11">
                                                                <div className="text-fixed-white op-8"><i className="ti ti-message me-1"></i>52</div>
                                                                <div className="text-fixed-white op-8"><i className="ti ti-thumb-up me-1"></i>18</div>
                                                                <div className="text-fixed-white op-8"><i className="ti ti-calendar me-1"></i>3rd October, 2024</div>
                                                            </div>
                                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="text-success text-decoration-underline float-end">
                                                                Read  More <i className="ri-arrow-right-double-line d-inline-block rtl-icon-transform align-middle ms-1 d-inline-block"></i>
                                                            </Link>
                                                        </Card.Footer>
                                                    </div>
                                                </Card>
                                            </Col>
                                            <Col xl={12} md={6}>
                                                <Card className="custom-card">
                                                    <Card.Body className="">
                                                        <Row>
                                                            <Col xl={12} className="custom-width">
                                                                <img src={media84} alt="" className="rounded w-100 h-auto" />
                                                                <h6 className="mb-2 fw-semibold mt-2">Epic Urban Vibes</h6>
                                                                <p className="mb-0">Authentic, high-energy beats straight from the heart of the city.</p>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <Link to="#!" className="btn btn-icon text-danger rounded-pill"><i className="ri-heart-line fs-18"></i></Link>
                                                                    <Link to="#!" className="btn btn-icon rounded-pill bg-secondary text-fixed-white d-inline-flex align-items-center justify-content-center"><i className="ri-play-large-line fs-16"></i></Link>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={12} md={6}>
                                                <Card className="custom-card">
                                                    <Card.Body className="">
                                                        <Row>
                                                            <Col xl={12}>
                                                                <div className="ratio ratio-16x9">
                                                                    <iframe
                                                                        src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5"
                                                                        title="YouTube video player"
                                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                        allowFullScreen></iframe>
                                                                </div>
                                                                <div className="p-2">
                                                                    <div className="d-flex align-items-center gap-1">
                                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">
                                                                            YNEX - HTML Installation & Usage process
                                                                        </div>
                                                                    </div>
                                                                    <Link to="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='images' className="border-0 p-0" id="search-images" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className=" pb-0">
                                        <Row>
                                            <SearchGalleryList />
                                            <Col xl={12} className=" mb-4">
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey='books' className="border-0 p-0" id="search-books" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className="">
                                        <Row>
                                            {BooksData.map((idx) => (
                                                <Col xl={6} key={idx.id}>
                                                    <Card className="custom-card border shadow-none">
                                                        <Card.Body className="">
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border">
                                                                            <img src={idx.image} alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <h6 className="fw-medium mb-0 d-flex align-items-center">
                                                                            <Link to="#!">{idx.title}</Link>
                                                                        </h6>
                                                                        <Link to="#!">{idx.author}</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-list">
                                                                    <SpkTooltips placement="top" title="Add to favourite">
                                                                        <Link to="#!" className="btn btn-sm btn-icon btn-primary-light"><span><i className="ri-heart-3-fill align-middle"></i></span></Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips placement="top" title="Featured Book">
                                                                        <Link to="#!" className="btn btn-sm btn-icon btn-secondary-light"><span><i className="ri-star-fill"></i></span></Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                            <div className="popular-tags my-3">
                                                                {idx.tags.map((data, index) => (
                                                                    <Link to="#!" key={index} className="badge rounded-pill bg-light text-default me-1">{data}</Link>
                                                                ))}
                                                            </div>
                                                            <div className="d-flex justify-content-between flex-wrap gap-2">
                                                                <div>
                                                                    <span className="text-muted">Published On</span> - <span className="fw-medium mb-0">{idx.publishedOn}</span>
                                                                </div>
                                                                <Link to="#!" className="text-primary fw-semibold fs-14"> Preview <i className="fe fe-arrow-right"></i></Link>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            <Col xl={12}>
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey='news' className="border-0 p-0" id="search-news" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className="">
                                        <Row>
                                            {NewsData.map((idx) => (
                                                <Col xl={6} key={idx.id}>
                                                    <Card className="custom-card border shadow-none">
                                                        <Card.Body className="">
                                                            <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div>
                                                                        <span className="avatar avatar-xxl bg-primary bg-opacity-10 border">
                                                                            <img src={idx.image} alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="ms-2">
                                                                        <span className={`badge bg-${idx.categoryClass}-transparent`}>{idx.category}</span>
                                                                        <h6 className="fw-medium mb-0 mt-2 d-flex align-items-center">
                                                                            <Link to="#!">{idx.title}</Link>
                                                                        </h6>
                                                                        <div className="mt-2 d-flex gap-2">
                                                                            <span className="fs-13 text-muted fw-semibold me-2">
                                                                                <i className="ri-user-line fs-13 text-primary me-1"></i>{idx.author}
                                                                            </span>
                                                                            <span className="fs-13 text-muted fw-semibold">
                                                                                <i className="ri-chat-4-line fs-13 text-primary me-1"></i>{idx.date}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            <Col xl={12}>
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled"><Link to='#!' className="page-link">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">Next</Link></li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey='audio' className="border-0 p-0" id="search-audio" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className="">
                                        <h6 className="mb-3">Continue Listing :</h6>
                                        <Row>
                                            {ContinueListing.map((idx) => (
                                                <Col xl={4} key={idx.id}>
                                                    <Card className="custom-card border shadow-none">
                                                        <Card.Body className="">
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <span className="avatar avatar-xl bg-primary bg-opacity-10 border">
                                                                        <img src={idx.image} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="ms-2 flex-grow-1">
                                                                    <div className="fw-medium mb-0 mt-2">
                                                                        <Link to="#!" className="fs-16 mb-1 fw-semibold">{idx.title}</Link>
                                                                        <span className="fs-13 text-muted d-block">{idx.description}</span>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex gap-2 justify-content-between align-items-center">
                                                                        <div className="progress progress-sm progress-custom progress-animate w-75" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                            <div className={`progress-bar progress-bar-striped bg-${idx.buttonClass}`} style={{ width: '50%' }} ></div>
                                                                        </div>
                                                                        <SpkButton Buttonvariant={idx.buttonClass} Customclass="btn  btn-sm btn-icon rounded-pill d-flex align-items-center justify-content-center"><i className="ri-play-large-line"></i></SpkButton>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                            <h6 className="mb-3">Top Songs :</h6>
                                            <Row>
                                                {TopSongsData.map((idx) => (
                                                    <Col xxl={4} lg={6} key={idx.id}>
                                                        <Card className="custom-card border">
                                                            <Card.Body className="">
                                                                <div className="d-flex gap-2 flex-wrap">
                                                                    <div className="avatar avatar-md">
                                                                        <img src={idx.image} alt="" />
                                                                    </div>
                                                                    <div className="flex-grow-1">
                                                                        <h6 className="mb-1">{idx.title}</h6>
                                                                        <span className="fs-13 text-muted">{idx.description}</span>
                                                                    </div>
                                                                    <SpkButton Buttonvariant="light" Customclass="btn  btn-sm btn-icon rounded-pill my-auto d-flex align-items-center justify-content-center"><i className="ri-play-large-line"></i></SpkButton>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <h6 className="mb-3">Your Suggested Tracks :</h6>
                                            <Row>
                                                {YourSuggestedTracks.map((idx) => (
                                                    <Col xl={3} md={6} key={idx.id}>
                                                        <Card className="custom-card border">
                                                            <Card.Body className="custom-width">
                                                                <img src={idx.image} alt="" className="rounded w-100 h-auto" />
                                                                <h6 className="mb-2 fw-semibold mt-2">{idx.title}</h6>
                                                                <p className="mb-0">{idx.description}</p>
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <Link to="#!" className="btn btn-icon text-danger rounded-pill"><i className="ri-heart-line fs-18"></i></Link>
                                                                    <Link to="#!" className="btn btn-icon rounded-pill bg-secondary text-fixed-white d-inline-flex align-items-center justify-content-center"><i className="ri-play-large-line fs-16"></i></Link>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <Col xl={12}>
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled"><Link to='#!' className="page-link">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#!">Next</Link></li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey='videos' className="border-0 p-0" id="search-videos" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className=" pb-0">
                                        <Row className="gy-4">
                                            {VideosData.map((idx) => (
                                                <Col lg={3} md={3} sm={6} className="col-12" key={idx.id}>
                                                    <div className="ratio ratio-16x9">
                                                        <iframe
                                                            src={idx.videoSrc}
                                                            title="YouTube video player"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                            allowFullScreen></iframe>
                                                    </div>
                                                    <div className="p-2">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <div className="figure-caption fs-13 fw-medium text-default text-truncate">  {idx.title}</div>
                                                        </div>
                                                        <Link to={idx.link} target="_blank" className="fs-12 link-primary text-decoration-underline">{idx.link}</Link>
                                                    </div>
                                                </Col>
                                            ))}
                                            <Col xl={12} className=" my-4">
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default Search;