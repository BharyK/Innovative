import { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import { PopularTags, RecentPosts } from "../../../../shared/data/pages/blog/blogdetailsdata";
import SpkBlogCategories from "../../../../shared/@spk-reusable-components/reusable-pages/spk-blogcategories";
import face12 from '../../../../assets/images/faces/12.jpg'
import face3 from '../../../../assets/images/faces/3.jpg'
import face13 from '../../../../assets/images/faces/13.jpg'
import face6 from '../../../../assets/images/faces/6.jpg'
import blog19 from '../../../../assets/images/media/blog/19.jpg'
import { BlogGallery } from "../../../../shared/data/pages/blog/bloggallerydata";
import { Categories } from "../../../../shared/data/pages/blog/blogdata";

const BlogDetails = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Blog Details"} />
            <Pageheader title="Pages" subtitle='Blog' currentpage="Blog Details" activepage="Blog Details" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={8}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div>
                                            <p className="h5 fw-semibold mb-1">The Evolution of Cartoons: From TV to Streaming Platforms</p>
                                            <span className="text-muted">Track the journey of cartoons from traditional
                                                TV broadcasts to digital streaming, and how they’ve adapted to
                                                modern audiences.</span>
                                        </div>
                                        <SpkBadge variant="secondary">Cartoon Images</SpkBadge>
                                    </div>
                                    <div className="d-sm-flex align-items-cneter mb-3">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar avatar-sm avatar-rounded me-3">
                                                <img src={face12} alt="" />
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-medium">Christopher - <span
                                                    className="fs-12 text-muted fw-normal">Tue,25 Dec 2024 -
                                                    11:45</span></p>
                                                <p className="mb-0 text-muted"></p>
                                            </div>
                                        </div>
                                        <div className="btn-list mt-sm-0 mt-2">
                                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave"><i className="ri-thumb-up-line me-1"></i>12 Likes</SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-wave"><i className="ri-share-line me-1"></i>23 Comments</SpkButton>
                                        </div>
                                    </div>
                                    <Link to="#!">
                                        <img src={blog19} className="card-img rounded blog-details-img img-fluid" alt="..." />
                                    </Link>
                                    <div className="mt-3">
                                        <p className="mb-4">
                                            The evolution of cartoons has been a fascinating journey, transforming
                                            from traditional television broadcasts to the world of streaming
                                            platforms. In the early days, cartoons were primarily limited to
                                            Saturday morning airings on TV, where they became an essential part of
                                            children's weekend routines.
                                        </p>
                                        <p className="mb-4">
                                            Over time, technological advancements allowed for more innovative
                                            animation techniques, and networks began to experiment with different
                                            formats, like prime-time animated shows and cable channels dedicated
                                            solely to cartoons.
                                        </p>
                                        <p className="mb-2">
                                            With the rise of streaming platforms like Netflix, Disney+, and Hulu,
                                            the landscape of animated content has shifted dramatically. These
                                            platforms have given rise to a new era of on-demand viewing, allowing
                                            animated shows to reach global audiences at any time, and giving
                                            creators the freedom to explore more diverse and mature themes.
                                        </p>
                                        <p className="mb-4">
                                            As a result, we’ve seen the rise of critically acclaimed series that
                                            push the boundaries of animation, such as BoJack Horseman, Rick and
                                            Morty, and Adventure Time, while continuing the legacy of classic
                                            cartoons. Streaming has also brought back beloved shows for reboots or
                                            spin-offs, making animation a dynamic and ever-evolving genre with
                                            endless possibilities for the future.
                                        </p>
                                        <blockquote className="blockquote custom-blockquoteblog secondary mb-4 text-center">
                                            <h6 className="lh-base px-5">Dive into a universe where cartoons break free
                                                from the page, coming to life in stunning Cartoon, where every
                                                character and scene feels like a vibrant dream..</h6>
                                            <footer
                                                className="blockquote-footer mt-3 fs-14 text-secondary fw-medium mb-0">
                                                Someone famous as <cite title="Source Title">- Maxwell Quasar</cite>
                                            </footer>
                                        </blockquote>
                                        <p className="mb-0">
                                            From enchanting nature's beauty quotes that evoke visions of lush
                                            meadows full of brilliantly-colored flowers or dense forests with
                                            sky-high trees to famous quotes about nature's ever-present—and
                                            absolutely fundamental—role in our lives, these 101 quotes about nature
                                            will have you itching to get off your couch and get outside. For famous
                                            <b>quotes about nature</b>, we have them here!
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header>
                                    <Card.Title>
                                        COMMENTS
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <SimpleBar id="blog-details-comment-list">
                                        <ListGroup className=" list-group-flush">
                                            <ListGroup.Item className=" border-0 border-bottom">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src={face3} alt="User Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <div className="fw-semibold mb-1">Sarah Johnson</div>
                                                        <p className="mb-3">I absolutely love this cake recipe! It turned
                                                            out so delicious, and my family couldn't get enough of it.
                                                            Thank you for sharing!</p>
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-up fs-14"></i></SpkButton>
                                                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light "><i className="ti ti-thumb-down"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i></SpkButton>
                                                        <SpkButton Buttonvariant="warning" Customclass="btn btn-sm btn-wave btn-icon waves-effect waves-light custom-error-icon"><i className="ri-error-warning-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-start gap-3 flex-wrap ms-5 p-3 mt-3 mb-1 bg-light rounded">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src={face13} alt="User Image" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <div className="fw-semibold mb-1">James Smith</div>
                                                        <p className="mb-3">Your cake decoration tips are fantastic! I tried
                                                            the buttercream technique you mentioned, and it made all the
                                                            difference. Can't wait to bake again!</p>
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-up fs-14"></i></SpkButton>
                                                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-down"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i></SpkButton>
                                                        <SpkButton Buttonvariant="warning" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light"><i className="ri-error-warning-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className=" border-0 border-bottom">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src={face13} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">ArtsyExplorer</span>
                                                        <span className="d-block mb-3">The 3D images on your blog are a
                                                            visual feast! I love how they bring a new level of
                                                            engagement and interactivity. It's like art coming to life.
                                                            Can't wait to see more creative uses of 3D in the
                                                            future!</span>
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-up fs-14"></i></SpkButton>
                                                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-down"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i></SpkButton>
                                                        <SpkButton Buttonvariant="warning" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light"><i className="ri-error-warning-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className=" border-0">
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">FutureTechGeek</span>
                                                        <span className="d-block mb-3">These 3D images are the future! The
                                                            level of detail and immersion is unmatched. It's exciting to
                                                            see how technology is evolving, and your blog does a
                                                            fantastic job of capturing the essence of 3D
                                                            innovation.</span>
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-up fs-14"></i></SpkButton>
                                                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ti ti-thumb-down"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ti ti-send fs-14 ms-1 d-inline-block"></i></SpkButton>
                                                        <SpkButton Buttonvariant="warning" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light"><i className="ri-error-warning-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </SimpleBar>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        LEAVE A COMMENT
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <Row className="gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="blog-first-name" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="blog-first-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="blog-last-name" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="blog-last-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="blog-email" className="form-label">Email ID</label>
                                            <input type="text" className="form-control" id="blog-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                                            <textarea className="form-control" id="blog-comment" rows={5}></textarea>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <div className="text-end">
                                        <SpkButton Buttonvariant="primary-light" Customclass="btn">Post Comment</SpkButton>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <Card.Title>
                                        RECENT POSTS
                                    </Card.Title>
                                    <Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </div>
                                <Card.Body className=" p-0">
                                    <ListGroup className=" list-group-flush p-3">
                                        {RecentPosts.map((idx) => (
                                            <ListGroup.Item className={` ${idx.categoryClass}-dash-border rounded mb-3`} key={idx.id}>
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <img src={idx.avatar} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link to="#!" className={`badge bg-${idx.categoryClass}-transparent`}>{idx.category}</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate fw-medium">
                                                            {idx.title}
                                                        </p>
                                                        <span className="text-muted fs-12">{idx.date}</span>
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
                        <Col xl={12}>
                            <Card className="custom-card bg-primary-transparent border border-primary border-opacity-25 shadow-none">
                                <Card.Body className=" text-center">
                                    <span className="avatar avatar-md bg-primary rounded-circle border border-success border-opacity-25"><i className="ri-send-plane-fill fs-18 lh-1 align-middle"></i></span>
                                    <h6 className="mt-3">Join Our Community</h6>
                                    <label className="form-check-label mb-3 px-3 text-muted"> Subscribe for Delicious Milkshake Recipes and Updates </label>
                                    <div className="input-group text-start">
                                        <input type="email" className="form-control" placeholder="Enter_Your_Email" aria-label="milkshake-email" aria-describedby="milkshake-subscribe" required />
                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-wave waves-effect waves-light" Buttontype="button" Id="milkshake-subscribe">Subscribe</SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        EXPLORE TOPICS
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <ListGroup className="">
                                        {Categories.map((idx) => (
                                            <SpkBlogCategories card={idx} key={idx.id} />
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        POPULAR TAGS
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className=" pt-2">
                                    <div className="blog-popular-tags">
                                        {PopularTags.map((idx, index) => (
                                            <Link to="#!" key={index}>
                                                <span className="badge bg-light text-muted">{idx}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header pb-0">
                                    <Card.Title>
                                        GALLERY
                                    </Card.Title>
                                </div>
                                <Card.Body className="">
                                    <BlogGallery />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default BlogDetails;