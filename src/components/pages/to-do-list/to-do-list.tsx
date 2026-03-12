import { Fragment, useState } from "react";
import { Card, Col, Modal, Nav, ProgressBar, Row, Tab } from "react-bootstrap";
import SpkDatepickr from "../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { CategoriesData, GridView, NavItems, ToDolistPriority, ToDoListStatus, Todolisttags } from "../../../shared/data/pages/todolistdata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import media3 from '../../../assets/images/media/png/3.png'
import face15 from '../../../assets/images/faces/15.jpg';

const ToDoList = () => {
    const [todos, setTodos] = useState(GridView);
    const [todos1, setTodos1] = useState(GridView);

    const toggleCheckbox = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
            )
        );
    };

    const toggleCheckbox1 = (id: number) => {
        setTodos1((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
            )
        );
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Todo List"} />
            <Pageheader title="Pages" currentpage="Todo List" activepage="Todo List" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 d-flex flex-wrap gap-2 align-items-center border-bottom border-block-end-dashed">
                                <span className="avatar avatar-lg p-1 bg-light">
                                    <img alt="" src={face15} />
                                </span>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0 fw-semibold">Aria Robinson</h6>
                                    <span className="fs-13 text-muted">ariarobinson125@gmail.com</span>
                                </div>
                                <button className="btn btn-secondary-light btn-icon d-flex align-items-center justify-content-center" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#addtask">
                                    <i className="ri-add-circle-line fs-16 align-middle"></i>
                                </button>
                                <Modal show={show} onHide={handleClose} centered className="modal fade" id="addtask" tabIndex={-1} aria-hidden="true">
                                    <div className="">
                                        <div className="">
                                            <Modal.Header>
                                                <Modal.Title as="h6" className="modal-title" id="mail-ComposeLabel">Create Task</Modal.Title>
                                                <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close" onClickfunc={handleClose} ></SpkButton>
                                            </Modal.Header>
                                            <Modal.Body className="px-4">
                                                <Row className="gy-2">
                                                    <Col xl={12}>
                                                        <label htmlFor="task-name" className="form-label">Task Name</label>
                                                        <input type="text" className="form-control" id="task-name"
                                                            placeholder="Task Name" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label className="form-label">Assigned To</label>
                                                        <SpkSelect multi name="colors" option={Todolisttags} mainClass="basic-multi-select"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" defaultvalue={[Todolisttags[0]]} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Assigned Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group datepicker-inputwraper">
                                                                <div className="input-group-text text-muted"> <i
                                                                    className="ri-calendar-line"></i> </div>
                                                                <SpkDatepickr className="form-control" selected={dates["AssignedDate"] ? new Date(dates["AssignedDate"]) : null} onChange={(date: Date | null) => handleDateChange("AssignedDate", date)} Timeinput="Time:" dateFormat="yyyy-MM-dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Target Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group datepicker-inputwraper">
                                                                <div className="input-group-text text-muted"> <i
                                                                    className="ri-calendar-line"></i> </div>
                                                                <SpkDatepickr className="form-control" selected={dates["TargetDate"] ? new Date(dates["TargetDate"]) : null} onChange={(date: Date | null) => handleDateChange("TargetDate", date)} Timeinput="Time:" dateFormat="yyyy-MM-dd h:mm aa" placeholderText='Choose date with time' showTimeInput />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Status</label>
                                                        <SpkSelect name="colors" option={ToDoListStatus} mainClass="basic-multi-select"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <label className="form-label">Priority</label>
                                                        <SpkSelect name="colors" option={ToDolistPriority} mainClass="basic-multi-select"
                                                            menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                    </Col>
                                                </Row>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}>
                                                    Cancel
                                                </SpkButton>
                                                <SpkButton Buttonvariant="primary" Buttontype="button">
                                                    Create
                                                </SpkButton>
                                            </Modal.Footer>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0 category">
                                        <span className="fs-11 text-muted op-7 fw-medium">TASKS</span>
                                    </li>
                                    {NavItems.map((idx) => (
                                        <li className={`${idx.active ? 'active' : ''}`} key={idx.id}>
                                            <Link to="#!">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-2 lh-1">
                                                        <i className={`ri-${idx.icon} align-middle fs-14`}></i>
                                                    </span>
                                                    <span className="flex-fill text-nowrap">
                                                        {idx.label}
                                                    </span>
                                                    {idx.count ? (<span className="badge bg-primary rounded-pill">{idx.count}</span>) : ''}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="px-0 pt-2 category">
                                        <span className="fs-11 text-muted op-7 fw-medium">CATEGORIES</span>
                                    </li>
                                    {CategoriesData.map((idx) => (
                                        <li className={idx.className} key={idx.id}>
                                            <Link to="#!">
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <span className="me-2 lh-1">
                                                        <i className={`ri-price-tag-line align-middle fs-14 fw-medium text-${idx.className}`}></i>
                                                    </span>
                                                    <span className="flex-fill text-nowrap">
                                                        {idx.label}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-3 text-center">
                                <div className="px-2 py-3 bg-primary-transparent rounded">
                                    <img alt="" src={media3} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey='ListView'>
                            <div className="card-header justify-content-between">
                                <div className="flex-grow-1">
                                    <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                                        <Nav as='ul' className="nav-pills d-flex flex-nowrap" role="tablist">
                                            <Nav.Item as='li' className="flex-grow-1" role="presentation">
                                                <Nav.Link as='a' eventKey='ListView' className="bg-primary-transparent text-center" data-bs-toggle="tab" role="tab" aria-current="page" href="#fill-pill-about" aria-selected="true"><i className="ri-list-check me-1 fs-14"></i>List View</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' className="flex-grow-1" role="presentation">
                                                <Nav.Link as='a' eventKey='GridView' className="bg-primary-transparent text-center" data-bs-toggle="tab" role="tab" aria-current="page" href="#fill-pill-home" aria-selected="false" tabIndex={-1}><i className="ri-layout-grid-line me-1 fs-14"></i>Grid View</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <div className="d-flex gap-2 flex-grow-1 align-items-center flex-grow-1">
                                            <input className="form-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-secondary btn-wave text-nowrap no-caret" Icon={true} Toggletext="Sort By" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                                <li><Link className="dropdown-item" to="#!">New</Link></li>
                                                <li><Link className="dropdown-item" to="#!">Popular</Link> </li>
                                                <li><Link className="dropdown-item" to="#!">Relevant</Link></li>
                                            </SpkDropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Tab.Content className="todo-list-tab" id="todo-content">
                                <Tab.Pane eventKey='ListView' className="tab-pane text-muted p-0 border-0" id="fill-pill-about" role="tabpanel">
                                    <Card.Body className=" border-top" id="todo-drag">
                                        {todos.map((idx) => (
                                            <div className={`p-3 rounded d-flex justify-content-between align-items-center  flex-wrap todo-handle mb-2 ${idx.isChecked ? 'checked-todo' : ''}`} key={idx.id}>
                                                <div>
                                                    <div className="form-check form-check-md d-flex align-items-center">
                                                        <input className="form-check-input todo-check form-checked-outline" type="checkbox" value="" id="checkebox-md1" defaultChecked={idx.isChecked} onChange={() => toggleCheckbox(idx.id)} />
                                                        <label className="form-check-label fw-medium todo-list-title main-text text-truncate" htmlFor="checkebox-md1">
                                                            {idx.title}
                                                        </label>
                                                    </div>
                                                    <div className="ps-4">
                                                        <span className="fs-13 text-muted d-block todo-list-title">{idx.description}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex gap-1 flex-wrap">
                                                    <ProgressBar className="progress-stacked progress-xs flex-grow-1 w-100 flex-shrink-0 my-auto gap-1">
                                                        <ProgressBar variant="primary" className="rounded" now={idx.progress} key={1} />
                                                        <ProgressBar variant="danger" className="rounded" now={100 - idx.progress} key={2} />
                                                    </ProgressBar>
                                                    <div className="flex-shrink-0"><span className="text-primary fw-medium">{idx.progress}%</span>   Completed</div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <div className="fs-12"><span className="fw-semibold">Priority Level:</span></div>
                                                    <div className={`badge bg-${idx.priorityClass}`}>{idx.priority}</div>
                                                </div>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <Link to="#!"><i className="ri-star-line fs-16 text-warning"></i></Link>
                                                    <div className="avatar-list-stacked">
                                                        {idx.images.map((img, index) => (
                                                            <span className="avatar avatar-xs avatar-rounded align-center" key={index}> <img src={img.src} alt="img" /> </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Card.Body>
                                </Tab.Pane>
                                <Tab.Pane eventKey='GridView' className="tab-pane text-muted p-0 border-0" id="fill-pill-home" role="tabpanel">
                                    <Card.Body className=" border-top" id="todo-drag">
                                        <Row className="gy-3">
                                            {todos1.map((idx) => (
                                                <Col xxl={4} xl={4} md={6} key={idx.id}>
                                                    <div className={`p-3 rounded todo-handle mb-2 ${idx.isChecked ? 'checked-todo' : ''}`}>
                                                        <div>
                                                            <div className="form-check form-check-md d-flex align-items-center">
                                                                <input className="form-check-input todo-check me-2 form-checked-outline" type="checkbox" value="" id="checkebox-md8" defaultChecked={idx.isChecked} onChange={() => toggleCheckbox1(idx.id)} />
                                                                <label className="form-check-label fw-medium todo-list-title main-text text-truncate m-0" htmlFor="checkebox-md8">
                                                                    {idx.title}
                                                                </label>
                                                            </div>
                                                            <div className="ps-4">
                                                                <span className="fs-13 text-muted d-block todo-list-title">{idx.description}</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="d-flex mb-3 mt-3 justify-content-between gap-2 p-3  bg-white border rounded flex-wrap">
                                                            <div className="flex-shrink-0">
                                                                <div className="fs-12 mb-2"><span className="fw-semibold">Start Date:</span> {idx.startDate}</div>
                                                                <div className="fs-12"><span className="fw-semibold">End Date:</span> {idx.endDate}</div>
                                                            </div>
                                                            <div className="flex-shrink-0 text-end">
                                                                <div className="fs-12 mb-2"><span className="fw-semibold">Priority Level:</span></div>
                                                                <div className={`badge bg-${idx.priorityClass}`}>{idx.priority}</div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex gap-1 flex-wrap">
                                                            <div> <span className="mb-2 "><span
                                                                className="text-primary fw-medium me-1 mx-1">{idx.progress}%</span>
                                                                Completed</span>
                                                                <ProgressBar className="progress-stacked progress-xs my-auto gap-1 mt-1">
                                                                    <ProgressBar variant="primary" className="rounded" now={idx.progress} key={1} />
                                                                    <ProgressBar variant="danger" className="rounded" now={100 - idx.progress} key={2} />
                                                                </ProgressBar>
                                                            </div>
                                                            <div className="d-flex gap-1 ms-auto">
                                                                <Link to="#!"><i className="ri-star-line fs-16 text-warning"></i></Link>
                                                                <div className="avatar-list-stacked">
                                                                    {idx.images.map((img, index) => (
                                                                        <span className="avatar avatar-xs avatar-rounded" key={index}>
                                                                            <img src={img.src} alt="img" />
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Card.Body>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ToDoList;