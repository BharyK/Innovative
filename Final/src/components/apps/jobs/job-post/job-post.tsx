import { Fragment, useState, type SetStateAction } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Data1, Data12, Data2, Data3, Data4, Data5, Data6, Data8, Data9 } from "../../../../shared/data/apps/jobs/jobpostdata";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";

const customStyles = {
    dropdownIndicator: (provided: SetStateAction<null[]>) => ({
        ...provided,
        display: 'none', // This removes the dropdown arrow
    }),
};
const JobPost = () => {
    const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
    const [startDate, endDate] = dateRange;
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Jobs-Jobpost" />

            <Pageheader title="Apps" subtitle="Jobs" currentpage="Job Post" activepage="Job Post" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Post New Job
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Title :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="Web Developer" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Company Name :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" id="job-title" placeholder="Company Name" defaultValue="Techz Info Company" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Description :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <textarea className="form-control" id="job-description" rows={4} defaultValue="We are seeking a talented Web Developer to join our team and help build dynamic, user-friendly websites. The ideal candidate will have experience with HTML, CSS, and JavaScript, and a strong understanding of responsive design principles."></textarea>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Qualification :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" option={Data9} styles={customStyles} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Data9[0], Data9[2]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Work Experience:</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Data2} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Skills :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" styles={customStyles} option={Data6} mainClass="basic-multi-select" classNameprefix="Select2"
                                        defaultvalue={[Data6[0], Data6[1], Data6[2]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Type :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Data12} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data12[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Salary :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Data5} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select" placeholder="" defaultvalue={[Data5[0]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Location :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" id="job-title" placeholder="Job Location" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Deadline :</Form.Label>
                                </Col>
                                <Col md={10} className="custom-inputfield">
                                    <SpkDatepickr className="form-control" placeholderText="Job Deadline" startDate={startDate} endDate={endDate} selectsRange={true} onChange={(update) => setDateRange(update)} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Job Category :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Data1} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Priority :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Data3} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                        placeholder="" defaultvalue={[Data3[0]]} />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Vacancies :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect name="colors" option={Data4} mainClass="basic-multi-select" classNameprefix="Select2" defaultvalue={[Data4[0]]}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Label className="mb-0 mt-2">Known Languages :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi name="colors" styles={customStyles} option={Data8} menuplacement="top" mainClass="choices__item choices__item--selectable    " classNameprefix="Select2"
                                        defaultvalue={[Data8[0], Data8[3]]} />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default JobPost;