import { Fragment } from "react";
import { Card, Col, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import { BlogCards, BlogCardsData, BlogCardsData1, BlogCardsData3, BlogPostsListView, Categories, FeaturedBlogs, Tags } from "../../../../shared/data/pages/blog/blogdata";
import SpkBlogCard from "../../../../shared/@spk-reusable-components/reusable-pages/spk-blogcard";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkBlogCategories from "../../../../shared/@spk-reusable-components/reusable-pages/spk-blogcategories";

const Blog = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Blog"} />
            <Pageheader title="Pages" subtitle='Blog' currentpage="Blog" activepage="Blog" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Tab.Container defaultActiveKey='grid'>
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card calendar-card">
                                    <Card.Body className=" p-3 d-flex align-items-center gap-3 flex-wrap justify-content-between">
                                        <Nav as='ul' className="nav-pills product-list-tab" role="tablist">
                                            <Nav.Item as='li' className="flex-grow-1" role="presentation">
                                                <Nav.Link as='a' eventKey='grid' className="border border-primary border-opacity-35 text-primary text-center" data-bs-toggle="tab" role="tab" aria-current="page" href="#blog-grid-view" aria-selected="false" tabIndex={-1}><i className="ri-layout-grid-line me-1 fs-14"></i>Grid View</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' className="flex-grow-1" role="presentation">
                                                <Nav.Link as='a' eventKey='list' className="border border-primary border-opacity-35 text-primary text-center" data-bs-toggle="tab" role="tab" aria-current="page" href="#blog-list-view" aria-selected="true"><i className="ri-list-check me-1 fs-14"></i>List View</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <div className="custom-form-group mb-0 w-sm-50 w-100">
                                            <input type="text" className="form-control form-control-md  py-2" placeholder="Search Blog.." aria-label="Search Hear.." />
                                        </div>
                                        <div className="text-sm-end text-start">
                                            <div className="d-flex flex-wrap blog-filter">
                                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-white border me-2" Toggletext="Filter" iconPosition="before" Icon={true} IconClass="ti ti-sort-descending-2 me-1 mx-1">
                                                    <li><Link to="#!" className="dropdown-item" >Date Published</Link></li>
                                                    <li><Link to="#!" className="dropdown-item" >Most  Relevant</Link></li>
                                                    <li><Link to="#!" className="dropdown-item" >Price Low to High</Link></li>
                                                    <li><Link to="#!" className="dropdown-item" >Price High to Low</Link></li>
                                                </SpkDropdown>
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/create-blog`} className="btn btn-primary text-nowrap"><i className="ri-add-line me-1 fw-medium align-middle"></i>Create  Blog</Link>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Tab.Content className="project-list-tab">
                            <Tab.Pane eventKey='grid' className="text-muted p-0 border-0" id="blog-grid-view" role="tabpanel">
                                <Row>
                                    <Col xl={7}>
                                        {BlogCardsData3.slice(0, 1).map((idx) => (
                                            <Col xl={12} key={idx.id}>
                                                <SpkBlogCard card={idx} CustomCardClass="overflow-hidden blog-card" Title={true} />
                                            </Col>
                                        ))}
                                    </Col>
                                    <Col xl={5}>
                                        <Row>
                                            {BlogCards.map((idx) => (
                                                <Col sm={6} key={idx.id}>
                                                    <Card className="custom-card border-0 blog-card">
                                                        <Card.Body className=" p-2">
                                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="stretched-link"></Link>
                                                            <div className="blog-image custom-width">
                                                                <img src={idx.src} className="card-img img-fluid" alt="..." />
                                                            </div>
                                                            <div className="p-2">
                                                                <SpkBadge variant={`${idx.tagClass}-transparent`}>{idx.tag}</SpkBadge>
                                                                <h6 className="mb-0 blog-title lh-base">{idx.descriptiontitle}</h6>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                    {BlogCardsData.map((idx) => (
                                        <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12" key={idx.id}>
                                            <SpkBlogCard card={idx} CustomCardClass="blog-card" />
                                        </Col>
                                    ))}
                                </Row>
                                {/* <!-- Start::row-2 --> */}
                                <Row>
                                    <Col xl={12}>
                                        <Row>
                                            {BlogCardsData1.map((idx) => (
                                                <Col xxl={4} xl={4} lg={4} md={4} sm={6} key={idx.id}>
                                                    <Card className="custom-card p-2 blog-card">
                                                        <Link to="#!">
                                                            <div className="blog-image custom-width">
                                                                <img src={idx.image} className="card-img-top rounded card-img" alt="..." />
                                                            </div>
                                                        </Link>
                                                        <Card.Body className="">
                                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="h6 fw-semibold mb-2 d-block lh-base">{idx.title}</Link>
                                                            <p className="mb-4">
                                                                {idx.description}
                                                                <Link to="#!" className="fw-medium text-muted ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">Read  More ?</Link>
                                                            </p>
                                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="avatar avatar-xs avatar-rounded me-2">
                                                                        <img src={idx.authorImage} alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="mb-0 fw-medium">{idx.authorName}</p>
                                                                    </div>
                                                                </div>
                                                                <span className="text-muted fs-12 mb-0">{idx.date}</span>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            ))}
                                        </Row>
                                        <div className=" mb-3">
                                            <SpkButton Buttonvariant="primary-light" Customclass="btn mx-auto btn-loader">
                                                <span className="me-2">Older Blogs</span>
                                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                            </SpkButton>
                                        </div>
                                    </Col>
                                </Row>
                                {/* <!--End::row-2 --> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey='list' className="text-muted p-0 border-0" id="blog-list-view" role="tabpanel">
                                {BlogPostsListView.map((idx) => (
                                    <Card className="custom-card border-0 blog-card p-2" key={idx.id}>
                                        <Card.Body className=" p-0 border rounded">
                                            <Row>
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/blog-details`} className="stretched-link"></Link>
                                                <Col xxl={2} md={3} sm={4} className="col-4">
                                                    <div className="blog-image m-2 me-0 custom-width">
                                                        <img src={idx.image} alt="img" className="w-100 h-100 rounded card-img" />
                                                    </div>
                                                </Col>
                                                <Col xxl={10} md={9} sm={8} className="col-8">
                                                    <div className="p-2 pt-3 ps-0">
                                                        <span className={`text-${idx.textColor} fw-medium`}>{idx.category}</span>
                                                        <h5 className="fw-semibold mt-1"> {idx.title}</h5>
                                                        <div className="d-flex gap-2 flex-wrap">
                                                            <span className="fs-12 text-muted border-end pe-2"><i className="ti ti-calendar me-1 mx-1"></i>05 Jul,2025</span>
                                                            <span className="fs-12 text-muted border-end pe-2"><i className="ti ti-eye me-1 mx-1"></i>12 Likes</span>
                                                            <span className="fs-12 text-muted"><i className="ti ti-message-2 me-1 mx-1"></i>14 Comments</span>
                                                        </div>
                                                        <p className="mb-0 mt-2">{idx.description}</p>
                                                        <div className="d-flex gap-2 mt-3 flex-wrap">
                                                            {idx.tags.map((tag, index) => (
                                                                <SpkBadge variant={`${tag.color}-transparent`} key={index}>{tag.text}</SpkBadge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}
                                <div className="mb-4 d-flex justify-content-end">
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"><Link to='#!' className="page-link">Previous</Link> </li>
                                            <li className="page-item"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item active" aria-current="page"><Link className="page-link" to="#!">2</Link> </li>
                                            <li className="page-item"><Link className="page-link" to="#!">3</Link></li>
                                            <li className="page-item"> <Link className="page-link" to="#!">Next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                CATEGORIES
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ListGroup>
                                {Categories.map((idx) => (
                                    <SpkBlogCategories card={idx} key={idx.id} />
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" pb-0">
                            <Card.Title>
                                POPULAR TAGS
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" py-4">
                            <div className="d-flex align-items-center gap-2 flex-wrap">
                                {Tags.map((idx, index) =>
                                    <SpkBadge variant="light" Customclass="text-default border" key={index}>
                                        {idx}
                                    </SpkBadge>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" d-flex align-items-center justify-content-between">
                            <Card.Title>
                                FEATURED BLOGS
                            </Card.Title>
                            <div>
                                <SpkBadge variant="primary-transparent">32 Blogs</SpkBadge>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className=" list-group-flush">
                                {FeaturedBlogs.map((idx) => (
                                    <ListGroup.Item className={` ${idx.isLast ? 'border-bottom-0' : ''}`} key={idx.id}>
                                        <div className="d-flex flex-wrap align-items-center gap-3">
                                            <span className="avatar avatar-xl">
                                                <img src={idx.image} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill">
                                                <Link to="#!" className="fs-14 fw-medium mb-0">{idx.author}</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    {idx.content}
                                                </p>
                                                <span className="text-muted fs-11">{idx.date}</span>
                                            </div>
                                            <div>
                                                <SpkButton Buttonvariant="light" Customclass="btn btn-icon btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Blog;