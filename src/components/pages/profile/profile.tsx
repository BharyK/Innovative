import { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import { BadgeLabels, ContactInfo, FollowersData, FriendsData, PostsData, SocialLinks } from "../../../shared/data/pages/profiledata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import backgrounds7 from '../../../assets/images/media/backgrounds/7.png'
import face9 from '../../../assets/images/faces/9.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import { ProfileGalleryList } from "../../../shared/@spk-reusable-components/reusable-gallery/spk-profilegallery";


const Profile = () => {
    const components = {
        DropdownIndicator: null,
    };
    const createOption = (label: string) => ({
        label,
        value: label,
    });
    const [inputValue1, setInputValue1] = useState<any>('');
    const [value1, setValue1] = useState([
        createOption("UI/UX Design"),
        createOption("Product Desig"),
        createOption("Prototyping"),
        createOption("User Research"),
        createOption("Design Systems"),
        createOption("Wireframing"),
        createOption("Agile Methodologies"),
        createOption("Collaboration"),
        createOption("Problem Solving"),
        createOption("Design Thinking"),
        createOption("Interaction Design"),
        createOption("Visual Communication"),
    ]);

    const handleKeyDown1 = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (!inputValue1) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue1((prev) => [...prev, createOption(inputValue1)]);
                setInputValue1('');
                event.preventDefault();
        }
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Profile"} />
            <Pageheader title="Pages" currentpage="Profile" activepage="Profile" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={12}>
                    <Card className="custom-card profile-card overflow-hidden bg-transparent shadow-none">
                        <div className="profile-background">
                            <img src={backgrounds7} alt="" />
                        </div>
                        <div className="main-profile-cover">
                            <Tab.Container defaultActiveKey='posts'>
                                <div className="p-xl-5 pb-xl-0 p-4 position-relative">
                                    <div>
                                        <div className="d-flex gap-3 align-items-center flex-wrap mb-4">
                                            <div className="main-avatar">
                                                <img src={face14} alt="" className="img-fluid rounded-circle p-1 shadow-sm bg-light" />
                                            </div>
                                            <div>
                                                <h4 className="fw-semibold mb-1">Ashwin Sethsing </h4>
                                                <p className="mb-3 fs-15"><i
                                                    className="ri-briefcase-fill lh-1 align-middle me-2 d-inline-block"></i>Lead
                                                    Product Designer</p>
                                                <div className="d-flex gap-3 align-items-center flex-wrap">
                                                    <p className="mb-0 fs-14 op-8"><i
                                                        className="ri-map-pin-line lh-1 align-middle me-2 d-inline-block"></i>settle,
                                                        Usa</p><span className="op-3">|</span>
                                                    <p className="mb-0 fs-14 op-8"><i
                                                        className="ri-mail-line lh-1 align-middle me-2 d-inline-block"></i>ashwinseth.mail.com
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ms-md-auto align-self-start pb-2">
                                                <div className="d-flex flex-wrap gap-xl-5 gap-2">
                                                    <div className="text-center">
                                                        <div className="d-flex gap-2 align-items-center"> <i
                                                            className="ri-user-add-line fs-11 lh-1 p-2 bg-secondary text-fixed-white rounded-circle"></i>
                                                            <div className="">
                                                                <p className="mb-0  fs-14">Followers</p>
                                                            </div>
                                                        </div>
                                                        <p className="fw-semibold fs-20 mb-0">172</p>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-start"> <i
                                                        className="ri-user-follow-line fs-11 lh-1 p-2 bg-danger text-fixed-white rounded-circle"></i>
                                                        <div className="">
                                                            <p className="mb-0  fs-14">Following</p>
                                                            <p className="fw-semibold fs-20 mb-0">37.1k</p>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 align-items-start"> <i
                                                        className="ri-heart-line fs-11 lh-1 p-2 bg-warning text-fixed-white rounded-circle"></i>
                                                        <div className="">
                                                            <p className="mb-0  fs-14">Likes</p>
                                                            <p className="fw-semibold fs-20 mb-0">12K</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <Link to={`${import.meta.env.BASE_URL}pages/profile-settings`} className="btn btn-primary btn-sm float-md-end d-inline-flex align-items-center ms-1"><i className="ti ti-edit me-1"></i>Edit Profile</Link>
                                            <Nav as='ul' className="nav-pills nav-style-1 pt-2 mb-3 profile-nav gap-2" id="myTab" role="tablist">
                                                <Nav.Item as='li' className="me-sm-3" role="presentation">
                                                    <Nav.Link as='button' eventKey='posts' className="w-100 text-start" id="posts-tab" data-bs-toggle="tab" data-bs-target="#posts-tab-pane" type="button" role="tab" aria-controls="posts-tab-pane" aria-selected="false" tabIndex={-1}>About</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as='li' className="me-sm-3" role="presentation">
                                                    <Nav.Link as='button' eventKey='edit' className="w-100 text-start " id="edit-profile-tab" data-bs-toggle="tab" data-bs-target="#edit-profile-tab-pane" type="button" role="tab" aria-controls="edit-profile-tab-pane" aria-selected="true">Edit Profile</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as='li' className="me-sm-3" role="presentation">
                                                    <Nav.Link as='button' eventKey='timeline' className="w-100 text-start" id="timeline-tab" data-bs-toggle="tab" data-bs-target="#timeline-tab-pane" type="button" role="tab" aria-controls="timeline-tab-pane" aria-selected="false" tabIndex={-1}>Followers</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as='li' className="me-sm-3" role="presentation">
                                                    <Nav.Link as='button' eventKey='gallery' className="w-100 text-start" id="gallery-tab" data-bs-toggle="tab" data-bs-target="#gallery-tab-pane" type="button" role="tab" aria-controls="gallery-tab-pane" aria-selected="false" tabIndex={-1}>Gallery</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as='li' className="" role="presentation">
                                                    <Nav.Link as='button' eventKey='friends' className="w-100 text-start" id="friends-tab" data-bs-toggle="tab" data-bs-target="#friends-tab-pane" type="button" role="tab" aria-controls="friends-tab-pane" aria-selected="false" tabIndex={-1}>Friends</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div> */}
                                    </div>
                                </div>

                                <Card.Body className=" p-0 position-relative mx-3 main-card-body mt-4">
                                    <div className="profile-content">
                                        <Tab.Content id="profile-tabs">
                                            <Tab.Pane eventKey='posts' className="fade p-0 border-0" id="posts-tab-pane" role="tabpanel" aria-labelledby="posts-tab" tabIndex={0}>
                                                <Row>
                                                    <Col xl={3}>
                                                        <Card className="custom-card overflow-hidden">
                                                            <Card.Header>
                                                                <Card.Title> Complete Your Profile </Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className="">
                                                                <div className="progress progress-sm progress-custom mt-3 mb-2 p-2 profile-progress progress-animate" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                                    <div className="progress-bar" style={{ width: '50%' }}>
                                                                        <div className="progress-bar-value">50%</div>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                        <Card className="custom-card">
                                                            <Card.Header className=" pb-0">
                                                                <Card.Title>
                                                                    Skills
                                                                </Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className="">
                                                                <div>
                                                                    {BadgeLabels.map((idx, index) => (
                                                                        <Link to="#!" key={index}> <span className="badge bg-light text-default m-1 border">{idx}</span> </Link>
                                                                    ))}
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                       
                                                       
                                                    </Col>
                                                    <Col xl={9}>
                                                        <Card className="custom-card border">
                                                            <Card.Body className=" p-0">
                                                                <ListGroup className=" list-group-flush rounded">
                                                                    <ListGroup.Item className=" p-4"> <span
                                                                        className="fw-medium fs-15 d-block mb-3"><span
                                                                            className="me-1"></span>About Me :</span>
                                                                        <p className="mb-2"> Hi, I'm
                                                                            Ashwin Sethsing. It will be as simple as
                                                                            Occidental – in fact, it will be Occidental.
                                                                            To an English speaker, it may seem like
                                                                            simplified English, as a skeptical friend
                                                                            from Cambridge once told me, since all
                                                                            European languages belong to the same
                                                                            language family.</p>
                                                                        <p className="mb-0">
                                                                            You always want to ensure that your fonts
                                                                            work well together, and try to limit the
                                                                            number of fonts you use to three or fewer.
                                                                            Experiment and play around with the fonts
                                                                            available in the software you're working
                                                                            with or explore reputable font websites.
                                                                            This is one of the most common tips I
                                                                            received from designers. They highly
                                                                            recommend using a variety of fonts in a
                                                                            single design, but caution against overdoing
                                                                            it and going overboard.
                                                                        </p>
                                                                        <div className="d-flex flex-wrap">
                                                                            <div className="d-flex gap-2 mt-3 me-5">
                                                                                <span
                                                                                    className="avatar avatar-md bg-light text-primary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-user-hexagon">
                                                                                        <path stroke="none"
                                                                                            d="M0 0h24v24H0z"
                                                                                            fill="none" />
                                                                                        <path
                                                                                            d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                                                                                        <path
                                                                                            d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                                                                                        <path
                                                                                            d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                                                                                    </svg>
                                                                                </span>
                                                                                <span>
                                                                                    <p className="mb-0 fw-semibold">
                                                                                        Designtion :</p>
                                                                                    <span className="fs-12 text-muted">Lead
                                                                                        Product Designer</span>
                                                                                </span>
                                                                            </div>
                                                                            <div className="d-flex gap-2 mt-3">
                                                                                <span
                                                                                    className="avatar avatar-md bg-light text-secondary">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                                                        width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        stroke="currentColor"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-world">
                                                                                        <path stroke="none"
                                                                                            d="M0 0h24v24H0z"
                                                                                            fill="none" />
                                                                                        <path
                                                                                            d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                                                        <path d="M3.6 9h16.8" />
                                                                                        <path d="M3.6 15h16.8" />
                                                                                        <path
                                                                                            d="M11.5 3a17 17 0 0 0 0 18" />
                                                                                        <path
                                                                                            d="M12.5 3a17 17 0 0 1 0 18" />
                                                                                    </svg>
                                                                                </span>
                                                                                <span>
                                                                                    <p className="mb-0 fw-semibold">Website
                                                                                        :</p>
                                                                                    <span
                                                                                        className="fs-12 text-muted">www.innvotiave.com</span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </ListGroup.Item>
                                                                </ListGroup>
                                                            </Card.Body>
                                                        </Card>
                                                         <Card className="custom-card">
                                                            <Card.Header className=" pb-0">
                                                                <Card.Title>
                                                                    Personal Info
                                                                </Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className="">
                                                                <div className="text-muted">
                                                                    {ContactInfo.map((idx) => (
                                                                        <div className={`mb-2 d-flex align-items-center gap-1 ${idx.class ? 'flex-wrap' : ''}`} key={idx.id}>
                                                                            <span className="avatar avatar-sm avatar-rounded text-default">
                                                                                <i className={`ri-${idx.icon} text-${idx.color} align-middle fs-15`}></i>
                                                                            </span>
                                                                            <span className="fw-medium text-default">{idx.label} :
                                                                            </span> {idx.value}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                         <Card className="custom-card overflow-hidden">
                                                            <Card.Header>
                                                                <Card.Title>
                                                                    Social Media
                                                                </Card.Title>
                                                            </Card.Header>
                                                            <Card.Body className=" p-0">
                                                                <ListGroup className=" list-group-flush profile-social-media-list">
                                                                    {SocialLinks.map((idx) => (
                                                                        <ListGroup.Item className="" key={idx.id}>
                                                                            <div className="d-flex align-items-center gap-3">
                                                                                <div>
                                                                                    <span className={`avatar avatar-md bg-${idx.bg}-transparent`}>
                                                                                        <i className={`ri-${idx.icon} fs-20`}></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div>
                                                                                    <span className="d-block fw-medium">{idx.name}</span>
                                                                                    <Link to="#!" className="text-muted">{idx.url}</Link>
                                                                                </div>
                                                                            </div>
                                                                        </ListGroup.Item>
                                                                    ))}
                                                                </ListGroup>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                           
                                            <Tab.Pane eventKey='timeline' className="px-0 pb-0 border-0" id="timeline-tab-pane" role="tabpanel" aria-labelledby="timeline-tab" tabIndex={0}>
                                                <Row>
                                                    {FollowersData.map((idx) => (
                                                        <Col xl={4} key={idx.id}>
                                                            <Card className={`custom-card ${idx.action === 'Follow' ? 'primary' : 'danger'}-dash-border`}>
                                                                <Card.Body className="">
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-lg avatar-rounded">
                                                                                <img src={idx.avatar} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="flex-fill">
                                                                            <span className="fw-semibold d-block">{idx.name}</span>
                                                                            <span className="text-muted fs-13">{idx.email}</span>
                                                                        </div>
                                                                        <div>
                                                                            <SpkButton Buttonvariant={`${idx.action === 'Follow' ? 'primary' : 'danger'}-ghost`} Customclass="btn"><i className={`ri-${idx.action === 'Follow' ? 'user-add-line' : 'user-minus-line'} me-1`}></i>{idx.action}</SpkButton>
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='gallery' className="p-0 border-0" id="gallery-tab-pane" role="tabpanel" aria-labelledby="gallery-tab" tabIndex={0}>
                                                <Card className="custom-card">
                                                    <Card.Body className="">
                                                        <Row className=" row-cols-xxl-5 row-cols-xl-4  row-cols-md-3 row-cols-sm-2 row-cols-1">
                                                            <ProfileGalleryList />
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='friends' className="p-0 border-0" id="friends-tab-pane" role="tabpanel" aria-labelledby="friends-tab" tabIndex={0}>
                                                <Row className=" row-cols-xxl-5 row-cols-xl-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                                                    {FriendsData.map((idx) => (
                                                        <Col key={idx.id}>
                                                            <Card className="custom-card shadow-none border">
                                                                <Card.Body className=" p-4">
                                                                    <div className="text-center mb-3">
                                                                        <div className={`p-1 position-relative d-inline-block bg-${idx.bgClass}-transparent rounded-circle mb-2`}>
                                                                            <img src={idx.image} alt="" className="rounded-circle frd-profile-img" />
                                                                        </div>
                                                                        <p className="fs-12 mb-1 text-muted">{idx.role}</p>
                                                                        <h6 className="fw-semibold"><a href="#!">{idx.name}</a></h6>
                                                                    </div>
                                                                    <div className="d-flex gap-2 flex-wrap justify-content-center w-100">
                                                                        <SpkButton Buttonvariant={`${idx.followStatus ? 'secondary' : 'danger'}-light`} Customclass="btn btn-sm btn-wave me-0 flex-fill waves-effect waves-light">{idx.followStatus ? 'Follow' : 'Unfollow'}</SpkButton>
                                                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-wave me-0 flex-fill waves-effect waves-light">View Profile</SpkButton>
                                                                    </div>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                </Row>
                                                <div className="text-center">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-wave waves-effect waves-light">Show  All</SpkButton>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Card.Body>
                            </Tab.Container>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Profile;