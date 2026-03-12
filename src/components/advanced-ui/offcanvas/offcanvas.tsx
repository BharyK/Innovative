import { offcanvas1, offcanvas2, offcanvas3, offcanvas4, offcanvas5 } from "../../../shared/data/prism-code/advanced-ui-prism";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment, useState, } from "react";
import { Col, ListGroup, Offcanvas, Row } from "react-bootstrap";
import ShowCode from "../../../shared/showcode/showcode";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkListgroup from "../../../shared/@spk-reusable-components/reusable-uielements/spk-listgroup";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import face1 from '../../../assets/images/faces/1.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face14 from '../../../assets/images/faces/14.jpg';


const Offcanvases = () => {
    const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
    const handleOffcanvasOpen = (offcanvasName: string) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
    };
    const handleOffcanvasClose = (offcanvasName: string) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Offcanvas"} />
            <Pageheader title="Advanced Ui" currentpage="Offcanvas" activepage="Offcanvas" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title=" Live demo" customCardClass="custom-card" customCardBodyClass="card-body border border-dashed rounded m-2 mt-0" reactCode={offcanvas1}>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontoggle="offcanvas" Navigate="#offcanvasExample" onClickfunc={() => handleOffcanvasOpen('liveOffcanvas')}
                            Role="button" Buttoncontrols="offcanvasExample">
                            Link with href
                        </SpkButton>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('liveOffcanvas')}
                            Buttontarget="#offcanvasExample" Buttoncontrols="offcanvasExample">
                            Button with data-bs-target
                        </SpkButton>
                        <Offcanvas show={offcanvas['liveOffcanvas'] || false} onHide={() => handleOffcanvasClose('liveOffcanvas')} backdrop={true} className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <SpkListgroup as="ul" CustomClass="list-group list-group-flush mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Body scrolling" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={offcanvas2}>
                        <SpkButton Buttonvariant='primary' Customclass="" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('bodyOffcanvas')}
                            Buttontarget="#offcanvasScrolling" Buttoncontrols="offcanvasScrolling">Enable
                            body scrolling
                        </SpkButton>
                        <Offcanvas show={offcanvas['bodyOffcanvas']} onHide={() => handleOffcanvasClose('bodyOffcanvas')} backdrop={false} className="offcanvas offcanvas-start" data-bs-scroll="true"
                            data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling"
                            aria-labelledby="offcanvasScrollingLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <SpkListgroup as="ul" CustomClass="list-group list-group-flush mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Static backdrop" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={offcanvas3}>
                        <SpkButton Buttonvariant='primary' Customclass="" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('staticOffcanvas')}
                            Buttontarget="#staticBackdrop" Buttoncontrols="staticBackdrop">
                            Toggle static offcanvas
                        </SpkButton>
                        <Offcanvas show={offcanvas['staticOffcanvas'] || false} onHide={() => handleOffcanvasClose('staticOffcanvas')} backdrop="static" className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex={-1}
                            id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="staticBackdropLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <SpkListgroup as="ul" CustomClass="list-group list-group-flush mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Body scrolling and backdrop" customCardClass="custom-card" customCardBodyClass="card-body border border-dashed rounded m-2 mt-0" reactCode={offcanvas4}>
                        <SpkButton Customclass="btn btn-primary" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('backdropOffcanvas')}
                            Buttontarget="#offcanvasWithBothOptions"
                            Buttoncontrols="offcanvasWithBothOptions">Enable both scrolling &amp;
                            backdrop</SpkButton>
                        <Offcanvas show={offcanvas['backdropOffcanvas'] || false} onHide={() => handleOffcanvasClose('backdropOffcanvas')} backdrop={true} className="offcanvas-start" data-bs-scroll="true" tabIndex={-1}
                            id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="p-0">
                                <div>
                                    <SpkListgroup as="ul" CustomClass="list-group list-group-flush mb-0">
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2024</span></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <div className="col-xl-12">
                    <ShowCode title="Placement" customCardClass="custom-card" customCardBodyClass="card-body border border-dashed rounded m-2 mt-0" reactCode={offcanvas5}>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('placementOffcanvas')}
                            Buttontarget="#offcanvasTop" Buttoncontrols="offcanvasTop">Toggle top
                            offcanvas</SpkButton>
                        <Offcanvas placement='top' show={offcanvas['placementOffcanvas'] || false} onHide={() => handleOffcanvasClose('placementOffcanvas')} className="offcanvas-top" tabIndex={-1} id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('rightOffcanvas')}
                            Buttontarget="#offcanvasRight" Buttoncontrols="offcanvasRight">Toggle right
                            offcanvas</SpkButton>
                        <Offcanvas placement='end' show={offcanvas['rightOffcanvas'] || false} onHide={() => handleOffcanvasClose('rightOffcanvas')} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel1">
                            <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
                                </h5>
                            </Offcanvas.Header>

                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <SpkListgroup as="ul" CustomClass="list-group-flush mb-0">
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary avatar-rounded">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">New Website Created<SpkBadge variant="light" Customclass="text-muted float-end">20 Nov 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face12} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 Dec 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 Dec 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face1} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Brenda New product launching<SpkBadge variant="light" Customclass="text-muted float-end">1 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Medeleine Hey! there i'm available<SpkBadge variant="light" Customclass="text-muted float-end">5 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Olivia New schedule release<SpkBadge variant="light" Customclass="text-muted float-end">6 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning avatar-rounded">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Kamala Preparing for new admin launch<SpkBadge variant="light" Customclass="text-muted float-end">7 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face6} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Oisha Meeting with clinet for dinner<SpkBadge variant="light" Customclass="text-muted float-end">10 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger avatar-rounded">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for the new project<SpkBadge variant="light" Customclass="text-muted float-end">3 Jan 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info avatar-rounded">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Decide the live discussion<SpkBadge variant="light" Customclass="text-muted float-end">17 Feb 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face14} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Meeting at 3:00 pm<SpkBadge variant="light" Customclass="text-muted float-end">29 Dec 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success avatar-rounded">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <p className="fw-medium mb-0">Prepare for presentation<SpkBadge variant="light" Customclass="text-muted float-end">31 Dec 2024</SpkBadge></p>
                                                    <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </SpkListgroup>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <SpkButton Buttonvariant='primary' Customclass="m-1" Buttontype="button" Buttontoggle="offcanvas" onClickfunc={() => handleOffcanvasOpen('bottomOffcanvas')}
                            Buttontarget="#offcanvasBottom" Buttoncontrols="offcanvasBottom">Toggle
                            bottom
                            offcanvas</SpkButton>
                        <Offcanvas placement='bottom' show={offcanvas['bottomOffcanvas'] || false} onHide={() => handleOffcanvasClose('bottomOffcanvas')} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel">
                            <Offcanvas.Header closeButton className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className="small">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </div>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Offcanvases;