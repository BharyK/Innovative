import { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Form, InputGroup, Modal, Nav, Row, Tab } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import { Badgedata, BoardImages, Boardmembers, NewTaskData, OnGoingData, Option1, ReviewTaskData, simpleItems1, Tags, ToDotask } from "../../../../shared/data/apps/tasks/kanbanboarddata";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import Spkkanbancard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-kanbancard";
import SpkkanbanListcard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-kanbanlistviewcard";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import dragula from "dragula";

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const Kanbanboard = () => {
    //Modals
    const [modals, setModals] = useState<{ [key: string]: boolean }>({});
    const handleModalOpen = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
    };
    const handleModalClose = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
    };
    //filepond
    const [files, setFiles] = useState<any>([]);

    //datepicker
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
    //Dragula
    const leftContainerRef = useRef<any>(null);
    const rightContainerRef = useRef(null);
    const topContainerRef = useRef(null);
    const bottomContainerRef = useRef(null);
    const lastContainerRef = useRef(null);

    useEffect(() => {
        if (leftContainerRef.current && rightContainerRef.current) {
            dragula([leftContainerRef.current, rightContainerRef.current, topContainerRef.current, bottomContainerRef.current, lastContainerRef.current]);

            if (document.querySelector('.firstdrag')?.classList.contains('task-Null')) {

                document.querySelector('.view-more-button')?.classList.add('d-none');
            }
        }
    }, []);

    const leftButtonRef = useRef<HTMLDivElement | null>(null);
    const rightButtonRef = useRef<HTMLDivElement | null>(null);
    const topButtonRef = useRef<HTMLDivElement | null>(null);
    const bottomButtonRef = useRef<HTMLDivElement | null>(null);
    const lastButtonRef = useRef<HTMLDivElement | null>(null);

    // Store all the refs in an array
    const elementsToModify = [
        { containerRef: leftContainerRef, buttonRef: leftButtonRef },
        { containerRef: rightContainerRef, buttonRef: rightButtonRef },
        { containerRef: topContainerRef, buttonRef: topButtonRef },
        { containerRef: bottomContainerRef, buttonRef: bottomButtonRef },
        { containerRef: lastContainerRef, buttonRef: lastButtonRef }
    ];

    const OnDivChange = () => {
        elementsToModify.forEach(({ containerRef, buttonRef }) => {
            const element = containerRef.current;
            const button = buttonRef.current;

            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                if (button) {
                    button.classList.add("d-none");
                }
            } else {
                element?.classList.remove("task-Null");
                if (button) {
                    button.classList.remove("d-none");
                }
            }
        });
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Draggable Cards" />

            <Pageheader title="Apps" subtitle="Task" currentpage="Kanban Board" activepage="Kanban Board" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={2} xl={3}>
                    <Card className="custom-card">
                        <Card.Body>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <div className="fs-14 fw-medium pb-2">Menu</div>
                                </li>
                                <li className="active bg-primary-transparent px-2 py-1 mb-1 rounded-1"> <Link
                                    to="#!">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="me-2"> <i className="ri-dashboard-fill fs-16 text-primary"></i>
                                        </div> <span className="flex-fill text-nowrap text-primary"> Board Tasks
                                        </span> <span className="badge bg-primary ms-auto">78</span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1 mb-2   "> <Link to="#!"
                                    className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-history-fill fs-16"></i> </div> <span
                                            className="flex-fill text-nowrap"> Pending Tasks </span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1 mb-2   "> <Link to="#!"
                                    className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-error-warning-line fs-15 lh-1"></i>
                                        </div> <span className="flex-fill text-nowrap"> Overdue </span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1 mb-2"> <Link to="#!"
                                    className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-checkbox-circle-line fs-15 lh-1"></i>
                                        </div> <span className="flex-fill text-nowrap"> Upcoming Tasks </span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1 mb-2"> <Link to="#!"
                                    className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-timeline-view fs-15 lh-1"></i> </div>
                                        <span className="flex-fill text-nowrap"> Timeline </span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1 mb-2"> <Link to="#!"
                                    className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-equalizer-2-line fs-15 lh-1"></i> </div>
                                        <span className="flex-fill text-nowrap"> Activity </span>
                                    </div>
                                </Link> </li>
                                <li className="px-2 py-1"> <Link to="#!" className="hover-color-primary">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"> <i className="ri-hourglass-line fs-15 lh-1"></i> </div>
                                        <span className="flex-fill text-nowrap"> Priority Tasks </span>
                                    </div>
                                </Link> </li>
                            </ul>
                        </Card.Body>
                        <Card.Body className="border-top border-block-start-dashed">
                            <div className="fs-14 fw-medium pb-2">On Board Members</div>
                            <div className="p-3 bg-light rounded-3 mb-3">
                                <div>
                                    {Boardmembers.map((idx) => (
                                        <span className={`avatar avatar-sm ${idx.status} avatar-rounded me-1 align-center `} key={idx.id}>
                                            <img src={idx.image} alt="img" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="d-flex gap-2 text-nowrap flex-wrap">
                                <SpkButton Buttonvariant="primary-light" Customclass="btn flex-fill d-inline-flex align-items-center justify-content-center">
                                    <i className="ri-add-line me-1 fw-medium align-middle"></i>Member
                                </SpkButton>
                                <SpkButton Buttonvariant="secondary-light" Customclass="btn flex-fill d-inline-flex align-items-center justify-content-center" Buttontoggle="modal"
                                    Buttontarget="#add-board" onClickfunc={() => handleModalOpen('addboard')}>
                                    <i className="ri-add-line me-1 fw-semibold align-middle"></i>Board
                                </SpkButton>
                            </div>
                        </Card.Body>
                        <Card.Body className="border-top border-block-start-dashed">
                            <div className="fs-14 fw-medium pb-2">Labels</div>
                            <div className="p-3 border border-dashed rounded-3 mb-3">
                                {Badgedata.map((idx) => (
                                    <SpkBadge variant={`${idx.color}-transparent me-1`} key={idx.id}>{idx.text}</SpkBadge>
                                ))}
                            </div>
                            <SpkButton Buttonvariant="light" Customclass="btn w-100">
                                <i className="ri-add-line me-1 fw-medium align-middle"></i>Add Label
                            </SpkButton>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={10} xl={9} className="">
                    <Tab.Container defaultActiveKey="first">
                        <Card className="custom-card">
                            <Card.Body className="p-3">
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                    <Row className="kanban-board">
                                        <Col xl={5}>
                                            <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalOpen('addboard')} Customclass="btn me-2 d-inline-flex align-items-center justify-content-center"
                                                data-bs-toggle="modal" data-bs-target="#add-board">
                                                <i className="ri-add-line me-1 fw-medium align-middle"></i>New Board
                                            </SpkButton>
                                        </Col>
                                        <Col xl={7} className="mt-2 my-xxl-0">
                                            <SpkSelect name="colors" option={Option1} mainClass="w-full !rounded-md"
                                                menuplacement='auto' classNameprefix="Select2" defaultvalue={[Option1[0]]} />
                                        </Col>
                                    </Row>
                                    <div className="avatar-list-stacked">
                                        {BoardImages.map((idx) => (
                                            <span className={`avatar avatar-rounded p-1 bg-${idx.color}-transparent`} key={idx.id}>
                                                <img src={idx.image} alt="img" />
                                            </span>
                                        ))}
                                        <Link className="avatar bg-primary avatar-rounded text-fixed-white"
                                            to="#!">
                                            +8
                                        </Link>
                                    </div>
                                    <Nav className="nav nav-pills p-2 border border-primary border-opacity-25 rounded product-list-tab" role="tablist">
                                        <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                            <Nav.Link eventKey="first" className="bg-primary-transparent text-center" data-bs-toggle="tab"
                                                role="tab" aria-current="page" href="#fill-pill-home"
                                                aria-selected="true"><i className="ri-layout-grid-line me-1 fs-14"></i>Grid
                                                View</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="nav-item flex-grow-1" role="presentation">
                                            <Nav.Link eventKey="second" className="bg-primary-transparent text-center"
                                                data-bs-toggle="tab" role="tab" aria-current="page" href="#fill-pill-about"
                                                aria-selected="false" tabIndex={-1}><i
                                                    className="ri-list-check me-1 fs-14"></i>List View</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </Card>
                        <Tab.Content className="task-karbon-tab">
                            <Tab.Pane eventKey="first" className="text-muted show p-0 border-0" id="fill-pill-home" role="tabpanel">
                                <div className="Innovative-kanban-board">
                                    <div className="kanban-tasks-type todo p-3 rounded">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="d-block fw-medium fs-15 text-default">Todo Tasks <span
                                                    className="ms-1 text-muted fs-12">(52)</span></span>
                                                <div>
                                                    <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')}
                                                        className="btn btn-sm btn-primary btn-wave" data-bs-toggle="modal"
                                                        data-bs-target="#add-task">
                                                        <i className="ri-add-line align-middle fw-medium"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <SimpleBar className="kanban-tasks" id="todo-tasks">
                                            <div id="todo-tasks-draggable" data-view-btn="todo-tasks" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                                                {NewTaskData.map((idx, index) => (
                                                    <Spkkanbancard key={index} obj={idx} />
                                                ))}
                                            </div>
                                        </SimpleBar>
                                        <div className="d-grid view-more-button mt-3 me-0" ref={leftButtonRef}>
                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-wave">View More</SpkButton>
                                        </div>
                                    </div>
                                    <div className="kanban-tasks-type in-progress p-3 rounded">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="d-block fw-medium fs-15 text-default">In Progress Tasks <span
                                                    className="ms-1 text-muted fs-12">(25)</span></span>
                                                <div>
                                                    <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')}
                                                        className="btn btn-sm btn-secondary btn-wave" data-bs-toggle="modal"
                                                        data-bs-target="#add-task">
                                                        <i className="ri-add-line align-middle fw-medium"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <SimpleBar className="kanban-tasks" id="inprogress-tasks">
                                            <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                                                {ToDotask.map((idx, index) => (
                                                    <Spkkanbancard key={index} obj={idx} />
                                                ))}
                                            </div>
                                        </SimpleBar>
                                        <div className="d-grid view-more-button mt-3 me-0" ref={rightButtonRef}>
                                            <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave">View More</SpkButton>
                                        </div>
                                    </div>
                                    <div className="kanban-tasks-type inreview p-3 rounded">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="d-block fw-medium fs-15 text-default">In Review Tasks <span
                                                    className="ms-1 text-muted fs-12">(13)</span></span>
                                                <div>
                                                    <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')}
                                                        className="btn btn-sm btn-danger btn-wave" data-bs-toggle="modal"
                                                        data-bs-target="#add-task">
                                                        <i className="ri-add-line align-middle fw-medium"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <SimpleBar className="kanban-tasks" id="inreview-tasks">
                                            <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" ref={topContainerRef} onMouseEnter={OnDivChange}>
                                                {OnGoingData.map((idx, index) => (
                                                    <Spkkanbancard key={index} obj={idx} />
                                                ))}
                                            </div>
                                        </SimpleBar>
                                        <div className="d-grid view-more-button mt-3 me-0" ref={topButtonRef}>
                                            <SpkButton Buttonvariant="danger" Customclass="btn btn-wave">View More</SpkButton>
                                        </div>
                                    </div>
                                    <div className="kanban-tasks-type completed p-3 rounded">
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="d-block fw-medium fs-15 text-default">Completed Tasks <span
                                                    className="ms-1 text-muted fs-12">(46)</span></span>
                                                <div>
                                                    <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')}
                                                        className="btn btn-sm btn-warning btn-wave" data-bs-toggle="modal"
                                                        data-bs-target="#add-task">
                                                        <i className="ri-add-line align-middle fw-medium"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <SimpleBar className="kanban-tasks" id="completed-tasks">
                                            <div id="completed-tasks-draggable" data-view-btn="completed-tasks" ref={bottomContainerRef} onMouseEnter={OnDivChange}>
                                                {ReviewTaskData.map((idx, index) => (
                                                    <Spkkanbancard key={index} obj={idx} />
                                                ))}
                                            </div>
                                        </SimpleBar>
                                        <div className="d-grid view-more-button mt-3 me-0" ref={bottomButtonRef}>
                                            <SpkButton Buttonvariant="warning" Customclass="btn btn-wave">View More</SpkButton>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="text-muted rounded border-0 bg-white mb-3"
                                role="tabpanel">
                                <SimpleBar id="fill-pill-about" className="">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="d-block fw-medium fs-15 text-default">Todo Tasks <span className="ms-1 text-muted fs-12">(52)</span></span>
                                        <div>
                                            <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')} className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-task">
                                                <i className="ri-add-line align-middle fw-medium me-1"></i>Add New
                                            </Link>
                                        </div>
                                    </div>
                                    {NewTaskData.map((idx, index) => (
                                        <SpkkanbanListcard key={index} obj={idx} />
                                    ))}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="d-block fw-medium fs-15 text-default">In Progress Taks <span className="ms-1 text-muted fs-12">(25)</span></span>
                                        <div>
                                            <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')} className="btn btn-sm btn-secondary-light btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-task">
                                                <i className="ri-add-line align-middle fw-medium me-1"></i>Add New
                                            </Link>
                                        </div>
                                    </div>
                                    {ToDotask.map((idx, index) => (
                                        <SpkkanbanListcard key={index} obj={idx} />
                                    ))}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="d-block fw-medium fs-15 text-default">In Review Taks <span className="ms-1 text-muted fs-12">(13)</span></span>
                                        <div>
                                            <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')} className="btn btn-sm btn-danger-light btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-task">
                                                <i className="ri-add-line align-middle fw-medium me-1"></i>Add New
                                            </Link>
                                        </div>
                                    </div>
                                    {OnGoingData.map((idx, index) => (
                                        <SpkkanbanListcard key={index} obj={idx} />
                                    ))}
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="d-block fw-medium fs-15 text-default">Completed Tasks  <span className="ms-1 text-muted fs-12">(54)</span></span>
                                        <div>
                                            <Link aria-label="anchor" to="#!" onClick={() => handleModalOpen('modal')} className="btn btn-sm btn-warning-light btn-wave waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#add-task">
                                                <i className="ri-add-line align-middle fw-medium me-1"></i>Add New
                                            </Link>
                                        </div>
                                    </div>
                                    {ReviewTaskData.map((idx, index) => (
                                        <SpkkanbanListcard key={index} obj={idx} cardClass={idx.cardclass} />
                                    ))}
                                </SimpleBar>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::add board modal --> */}
            <Modal centered show={modals["addboard"] || false} onHide={() => handleModalClose('addboard')} className="fade" aria-labelledby="contained-modal-title-vcenter" id="add-board" tabIndex={-1}>
                <Modal.Header closeButton className="">
                    <h6 className="modal-title">Add Board</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row>
                        <Col xl={12}>
                            <label htmlFor="board-title" className="form-label">Task Board Title</label>
                            <Form.Control type="text" className="form-control" id="board-title"
                                placeholder="Board Title" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="">
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn" Buttondismiss="modal" onClickfunc={() => handleModalClose('addboard')}>Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn">Add Board</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End::add board modal --> */}

            {/* <!-- Start::add task modal --> */}
            <Modal show={modals["modal"] || false} onHide={() => handleModalClose('modal')} className="fade" id="add-task" tabIndex={-1} centered  >
                <Modal.Header className="" closeButton>
                    <h6 className="modal-title">Add Task</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-2">
                        <Col xl={6}>
                            <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-name" placeholder="Task Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-id" placeholder="Task ID" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                            <textarea className="form-control" id="text-area" rows={2}
                                placeholder="Write Description"></textarea>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
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
                            <Form.Label className="form-label">Assigned To</Form.Label>
                            <SpkSelect multi={true} name="colors" option={simpleItems1} mainClass=""
                                menuplacement='auto' classNameprefix="Select2" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label className="form-label">Target Date</Form.Label>
                            <Form.Group>
                                <InputGroup>
                                    <InputGroup.Text className="input-group-text text-muted">
                                        <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <SpkDatepickr className="form-control" Timeinput="Time:" dateFormat="yy/MM/dd h:mm aa" selected={dates["TargetDate"] ? new Date(dates["TargetDate"]) : null} onChange={(date: Date | null) => handleDateChange("TargetDate", date)} placeholderText='Choose date and time' showTimeInput />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col xl={6}>
                            <Form.Label className="form-label">Tags</Form.Label>
                            <SpkSelect multi name="colors" option={Tags} mainClass="w-full !rounded-md" menuplacement='top' classNameprefix="Select2" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="">
                    <SpkButton Buttontype="button" Buttonvariant="light" Customclass="btn my-0" Buttondismiss="modal" onClickfunc={() => handleModalClose('modal')}>Cancel</SpkButton>
                    <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn my-0">Add Task</SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End::add task modal --> */}
        </Fragment>
    );
};

export default Kanbanboard;