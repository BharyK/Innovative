import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond } from "react-filepond";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Selectdata1, Selectdata2, Selectdata3 } from "../../../../shared/data/pages/blog/createblogdata";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSunEditor from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-suneditor";

const CreateBlog = () => {

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    const [files, setFiles] = useState<any>([]);

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Blog Create"} />
            <Pageheader title="Pages" subtitle='Blog' currentpage="Blog Create" activepage="Blog Create" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>New Blog</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" >Blog Title</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-category" >Blog Category</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata1} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author" >Blog Author</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author-email" >Email</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6} className="custom-inputfield">
                                    <Form.Label htmlFor="publish-date" >Publish Date</Form.Label>
                                    <SpkDatepickr className="form-control" selected={dates["PublishDate"] ? new Date(dates["PublishDate"]) : null} onChange={(date: Date | null) => handleDateChange("PublishDate", date)} placeholderText='Choose Date' />
                                </Col>
                                <Col xl={6} className="custom-inputfield">
                                    <Form.Label htmlFor="publish-time" >Publish Time</Form.Label>
                                    <SpkDatepickr className="form-control" showTimeSelect dateFormat="h:mm aa" showTimeSelectOnly selected={dates["PublishTime"] ? new Date(dates["PublishTime"]) : null} onChange={(date: Date | null) => handleDateChange("PublishTime", date)} placeholderText='Choose time' />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="product-status-add" >Published Status</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata2} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-tags" >Blog Tags</Form.Label>
                                    <SpkSelect multi name="colors" option={Selectdata3} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label >Blog Content</Form.Label>
                                    <div id="blog-content"><SpkSunEditor height={'200px'} /></div>
                                </Col>
                                <Col xl={12} className="blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" >Blog Images</Form.Label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Blog Type</Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                                            <Form.Label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list text-end">
                                <button type="button" className="btn btn-sm btn-light">Save As Draft</button>
                                <button type="button" className="btn btn-sm btn-primary">Post Blog</button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateBlog;