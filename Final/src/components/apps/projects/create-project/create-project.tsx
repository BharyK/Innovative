import CreatableSelect from 'react-select/creatable';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Card, Col, Form, Row } from "react-bootstrap";
import { Fragment, useState, type KeyboardEvent } from 'react';
import Seo from '../../../../shared/layouts-components/seo/seo';
import Pageheader from '../../../../shared/layouts-components/pageheader/pageheader';
import SpkSunEditor from '../../../../shared/@spk-reusable-components/reusable-plugins/spk-suneditor';
import { Data1, defaultcontent, multiselectdata } from '../../../../shared/data/apps/projects/createprojectdata';
import SpkDatepickr from '../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker';
import SpkSelect from '../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const CreateProject = () => {
    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("Project Management"),
        createOption("Quality Assurance"),
        createOption("User Experience"),
        createOption("Implementation"),
        createOption("Strategy"),

    ]);
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    //Filepond 
    const [files, setFiles] = useState<any>([]);

    //datepicker
    const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
        setDates((prevDates) => ({
            ...prevDates,
            [key]: date,
        }));
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Projects-Createproject" />
            <Pageheader title="Apps" subtitle="Projects" currentpage="Create Project" activepage="Create Project" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Create Project
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Project Name :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" placeholder="Enter Project Name" />
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Project Manager :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" placeholder="Project Manager Name" />
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Project Description :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <div id="project-descriptioin-editor">
                                        <SpkSunEditor defaulContent={defaultcontent} height="200px" />
                                    </div>
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Start Date :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Group>
                                        <div className="input-group custom-inputgroupfield">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" dateFormat="yy/MM/dd h:mm aa" selected={dates["StartDate"] ? new Date(dates["StartDate"]) : null} onChange={(date: Date | null) => handleDateChange("StartDate", date)} Timeinput="Time:" showTimeSelect placeholderText='Choose date and time' />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">End Date :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Group>
                                        <div className="input-group custom-inputgroupfield">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <SpkDatepickr className="form-control" dateFormat="yy/MM/dd h:mm aa" selected={dates["EndDate"] ? new Date(dates["EndDate"]) : null} onChange={(date: Date | null) => handleDateChange("EndDate", date)} Timeinput="Time:" showTimeSelect placeholderText='Choose date and time' />
                                        </div>
                                    </Form.Group>
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className=" mb-2 mb-md-0 mt-2">Team Members :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect multi={true} name="state" option={multiselectdata} mainClass="js-example-placeholder-multiple w-full js-states"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Inprogress" defaultvalue={[multiselectdata[0], multiselectdata[4], multiselectdata[10]]} />
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Status : </Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect searchable={true} name="colors" option={Data1} mainClass="default basic-multi-select" id="choices-multiple-default"
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data1[0]]}
                                    />
                                </Col>
                            </div>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Priority :</Form.Label>
                                </Col>
                                <div className="col-md-10 d-flex gap-xxl-5 gap-3 flex-wrap flex-xxl-nowrap">
                                    <div className="form-check">
                                        <input type="radio" id="priority-high" name="priority" value="High" className="form-check-input" required />
                                        <Form.Label htmlFor="priority-high" className="form-check-label">High</Form.Label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="priority-medium" name="priority" value="Medium" className="form-check-input" />
                                        <Form.Label htmlFor="priority-medium" className="form-check-label">Medium</Form.Label>
                                    </div>
                                    <div className="form-check">
                                        <input type="radio" id="priority-low" name="priority" value="Low" className="form-check-input" />
                                        <Form.Label htmlFor="priority-low" className="form-check-label">Low</Form.Label>
                                    </div>
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Attachments :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <Form.Label className="mb-2 mb-md-0 mt-2">Tags :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className="card-footer">
                            <button className="btn btn-secondary btn-wave ms-auto float-end">Create Project</button>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateProject;