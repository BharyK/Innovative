import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Shepherd from 'shepherd.js';
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import companylogo from '../../../assets/images/company-logos/3.png'

const Tour = () => {
    useEffect(() => {
        const tour = new Shepherd.Tour({
            defaultStepOptions: {
                cancelIcon: {
                    enabled: true
                },
                classes: 'className-1 className-2 border-0',
                scrollTo: { behavior: 'smooth', block: 'center' }
            },
            useModalOverlay: true
        });

        tour.addStep({
            id: 'step-1',
            title: "Welcome To Our Tour App",
            text: 'Tailor your travel experience with handpicked destinations, activities, and accommodations suited to your preferences.',
            attachTo: {
                element: '#step-1',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: () => {
                        tour.next();
                    },
                },
            ],
        });

        tour.addStep({
            id: 'step-2',
            title: "Choose a Destination",
            text: 'Select a destination that aligns with the interests and preferences of the group.',
            attachTo: {
                element: '#step-2',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-3',
            title: "Set a Budget",
            text: 'Determine a budget covering transportation, accommodation, meals, and activities.',
            attachTo: {
                element: '#step-3',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-4',
            title: "Book Transportation and Accommodation",
            text: 'Secure transportation to and from the destination, and book suitable accommodations.',
            attachTo: {
                element: '#step-4',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-5',
            title: "Plan Activities",
            text: 'Outline key activities or attractions for each day of the tour.',
            attachTo: {
                element: '#step-5',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-6',
            title: "Communicate and Confirm",
            text: 'Share the itinerary with participants, confirm bookings, and ensure everyone is prepared for the tour.',
            attachTo: {
                element: '#step-6',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next,
                },
            ],
        });

        tour.addStep({
            id: 'step-7',
            title: "Start Your Journey",
            text: 'Share the itinerary with participants, confirm bookings, and ensure everyone is prepared for the tour.',
            attachTo: {
                element: '#step-7',
                on: 'bottom',
            },
            buttons: [
                {
                    text: 'Finish',
                    action: tour.complete,
                },
            ],
        });

        tour.start();
    }, []);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Tour"} />
            <Pageheader title="Advanced Ui" currentpage="Tour" activepage="Tour" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                SHEPHERD JS
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-5 text-center">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 mb-5">
                                    <span className="avatar avatar-xl">
                                        <img src={companylogo} alt="" id="step-1" />
                                    </span>
                                    <h5 className="fw-medium">Welcome to Your Health Companion</h5>
                                    <span className="text-muted">Your all-in-one solution for booking appointments, managing health records, and staying connected with trusted healthcare professionals. </span>
                                </div>
                            </div>
                            <div className="row justify-content-center gap-4">
                                <Col xl={3}>
                                    <Card className="custom-card shadow-none p-2 primary-dash-border">
                                        <Card.Body className=" p-4 text-center bg-primary-transparent">
                                            <div className="mb-3">
                                                <span className="avatar avatar-xl avatar-rounded primary-shadow text-primary svg-primary" id="step-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="32" y="64" width="192" height="144" rx="8" opacity="0.2" /><rect x="32" y="64" width="192" height="144" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="128" y1="112" x2="128" y2="160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="152" y1="136" x2="104" y2="136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                </span>
                                            </div>
                                            <h6 className="fw-meidum mb-2">Choose Appointment Type</h6>
                                            <span className="fs-14 text-muted">Explore the care you need — general, specialist, or wellness, all in one place.</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card shadow-none p-2 secondary-dash-border">
                                        <Card.Body className=" p-4 bg-secondary-transparent">
                                            <div className="mb-3">
                                                <span className="avatar avatar-xl avatar-rounded secondary-shadow text-secondary svg-secondary" id="step-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" opacity="0.2" /><polyline points="32 136 72 136 88 112 120 160 136 136 160 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                </span>
                                            </div>
                                            <h6 className="fw-meidum mb-2">Select Doctor or Service</h6>
                                            <span className="fs-14 text-muted">Start by choosing your appointment type — your health, your way.</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card shadow-none p-2 danger-dash-border">
                                        <Card.Body className=" p-4 bg-danger-transparent">
                                            <div className="mb-3">
                                                <span className="avatar avatar-xl avatar-rounded danger-shadow text-danger svg-danger" id="step-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" opacity="0.2" /><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                </span>
                                            </div>
                                            <h6 className="fw-meidum mb-2">Choose Date and Time</h6>
                                            <span className="fs-14 text-muted">From everyday checkups to expert consultations — pick what fits your needs.</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card shadow-none p-2 warning-dash-border">
                                        <Card.Body className=" p-4 bg-warning-transparent">
                                            <div className="mb-3">
                                                <span className="avatar avatar-xl avatar-rounded warning-shadow text-warning svg-warning" id="step-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z" opacity="0.2" /><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="40" y1="88" x2="216" y2="88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                </span>
                                            </div>
                                            <h6 className="fw-meidum mb-2">Confirm Appointment Details</h6>
                                            <span className="fs-14 text-muted">Start by choosing your service — we make the rest of your healthcare journey effortless.</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="custom-card shadow-none p-2 info-dash-border">
                                        <Card.Body className=" p-4 bg-info-transparent">
                                            <div className="mb-3">
                                                <span className="avatar avatar-xl avatar-rounded info-shadow text-info svg-info" id="step-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M152,40H56a8,8,0,0,0-8,8V216H80V160h48v56h32V48A8,8,0,0,0,152,40Z" opacity="0.2" /><line x1="32" y1="216" x2="248" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M48,216V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M160,120h64a8,8,0,0,1,8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="104" y1="72" x2="104" y2="120" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><line x1="80" y1="96" x2="128" y2="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polyline points="128 216 128 160 80 160 80 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                </span>
                                            </div>
                                            <h6 className="fw-meidum mb-2"> Attend Appointment</h6>
                                            <span className="fs-14 text-muted">Pick the care that fits your needs — booking, reminders, and support, all taken care of.</span>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex justify-content-end">
                                <SpkButton Buttonvariant="primary-light" Customclass="btn me-2">Cancel</SpkButton>
                                <SpkButton Buttonvariant="secondary-light" Customclass="btn" Id="step-7">Submit</SpkButton>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Tour; 