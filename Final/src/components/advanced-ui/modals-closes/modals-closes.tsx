import { Fragment, useState } from "react";
import { CloseButton, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import ShowCode from "../../../shared/showcode/showcode";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkPopovers from "../../../shared/@spk-reusable-components/reusable-uielements/spk-popovers";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import { modal1, modal10, modal11, modal13, modal14, modal15, modal2, modal3, modal4, modal5, modal6, modal7 } from "../../../shared/data/prism-code/advanced-ui-prism";
import Seo from "../../../shared/layouts-components/seo/seo";


const ModalsCloses = () => {

    const [modals, setModals] = useState<{ [key: string]: boolean }>({});
    const handleModalOpen = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
    };
    const handleModalClose = (modalName: string) => {
        setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
    };

    //fullscreen modals
    const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down",];
    const colors = ["primary", "secondary", "warning", "info", "success", "danger"];
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [showf, setShowf] = useState(false);

    function handleShowf(breakpoint: number, _color: string | boolean) {
        setFullscreen(breakpoint);
        setShowf(true);
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Modal & Closes"} />
            <Pageheader title="Advanced Ui" currentpage="Modal & Closes" activepage="Modal & Closes" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal1}>
                        <SpkButton Buttontype="button" Customclass="btn btn-primary" Buttontoggle="modal" onClickfunc={() => handleModalOpen('demoModal')}
                            Buttontarget="#exampleModal">
                            Launch demo modal
                        </SpkButton>
                        <Modal show={modals["demoModal"] || false} onHide={() => handleModalClose('demoModal')} className="fade" id="exampleModal">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalLabel1">Modal title</h6>
                            </Modal.Header>
                            <Modal.Body className="">
                                ...
                            </Modal.Body>
                            <Modal.Footer className="">
                                <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn btn-secondary" onClickfunc={() => handleModalClose('demoModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn btn-primary">Save
                                    changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Static backdrop" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal2}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={() => handleModalOpen('staticModal')}>
                            Launch static backdrop modal
                        </SpkButton>
                        <Modal show={modals["staticModal"] || false} onHide={() => handleModalClose('staticModal')} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <p className="mb-0">I will not close if you click outside me. Don't even try to
                                    press
                                    escape key.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="" onClickfunc={() => handleModalClose('staticModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="">Understood</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Scrolling long content" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal3}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" onClickfunc={() => handleModalOpen('scrollModal')}>
                            Scrolling long content
                        </SpkButton>
                        <Modal show={modals['scrollModal'] || false} onHide={() => handleModalClose('scrollModal')} keyboard={false} scrollable={true}>
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel1">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Libero
                                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                    nisi
                                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                    ex
                                    tempore fuga similique ipsa blanditiis et accusamus
                                    temporibus
                                    commodi voluptas! Nobis veniam illo architecto expedita quam
                                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                                    deleniti
                                    quis ad nemo ipsam officia temporibus, doloribus fuga
                                    asperiores
                                    ratione distinctio velit alias hic modi praesentium aperiam
                                    officiis eaque, accusamus aut. Accusantium assumenda,
                                    commodi
                                    nulla provident asperiores fugit inventore iste amet aut
                                    placeat
                                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                                    aperiam dolores magni iusto distinctio voluptatibus minus a
                                    unde
                                    at! Consequatur voluptatum in eaque obcaecati, impedit
                                    accusantium ea soluta, excepturi, quasi quia commodi
                                    blanditiis?
                                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                                    accusamus recusandae est consequuntur iure.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="" onClickfunc={() => handleModalClose('scrollModal')}>Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button">Save
                                    Changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Vertically centered modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal4}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('verticalcenterModal')}
                            Buttontarget="#exampleModalScrollable2">
                            Vertically centered modal
                        </SpkButton>
                        <Modal centered show={modals['verticalcenterModal']} onHide={() => handleModalClose('verticalcenterModal')} keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel2">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Libero
                                    ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                    nisi
                                    ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="btn" onClickfunc={() => handleModalClose('verticalcenterModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button">Save
                                    Changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Vertical Centered Scrollable" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal5}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('verticalModal')}
                            Buttontarget="#exampleModalScrollable3">
                            Vertically centered scrollable modal
                        </SpkButton>
                        <Modal centered show={modals['verticalModal'] || false} onHide={() => handleModalClose('verticalModal')}
                            keyboard={false} className="modal fade">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel3">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                    ex
                                    tempore fuga similique ipsa blanditiis et accusamus
                                    temporibus
                                    commodi voluptas! Nobis veniam illo architecto expedita quam
                                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                                    deleniti
                                    quis ad nemo ipsam officia temporibus, doloribus fuga
                                    asperiores
                                    ratione distinctio velit alias hic modi praesentium aperiam
                                    officiis eaque, accusamus aut. Accusantium assumenda,
                                    commodi
                                    nulla provident asperiores fugit inventore iste amet aut
                                    placeat
                                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                                    aperiam dolores magni iusto distinctio voluptatibus minus a
                                    unde
                                    at! Consequatur voluptatum in eaque obcaecati, impedit
                                    accusantium ea soluta, excepturi, quasi quia commodi
                                    blanditiis?
                                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                                    accusamus recusandae est consequuntur iure.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <p>Lorem ipsum dolor sit amet.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="" onClickfunc={() => handleModalClose('verticalModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button">Save
                                    Changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Tooltips and popovers" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal4}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('tooltipModal')}>
                            Launch demo modal
                        </SpkButton>
                        <Modal show={modals['tooltipModal'] || false} onHide={() => handleModalClose('tooltipModal')} centered className='popover-modal' id="exampleModalScrollable4" aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
                        >
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel4">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>Popover in a modal</h5>
                                <p>This <SpkPopovers title={`Popover title`} placement='right' trigger="click" content={'Popover body content is set in this attribute.'}  >
                                    <Link to="#!" role="button" className="btn btn-secondary">button</Link>
                                </SpkPopovers> triggers a popover on click.</p>
                                <hr />
                                <h5>Tooltips in a modal</h5>
                                <p className="mb-0">
                                    <SpkTooltips placement="top" title="Tooltip">
                                        <Link to="#!" className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This link </Link>
                                    </SpkTooltips>
                                    and
                                    <SpkTooltips placement="top" title="Tooltip">
                                        <Link to="#!" className="text-primary ms-1" data-bs-toggle="tooltip" title="Tooltip"> that link </Link>
                                    </SpkTooltips> have tooltips on hover.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('tooltipModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button" >Save
                                    Changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Using the grid" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal7}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Buttontoggle="modal" onClickfunc={() => handleModalOpen('gridModal')}
                            Buttontarget="#exampleModalScrollable5">
                            Launch demo modal
                        </SpkButton>
                        <Modal show={modals['gridModal'] || false} onHide={() => handleModalClose('gridModal')} centered>
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="staticBackdropLabel5">Modal title
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                <Container fluid>
                                    <Row>
                                        <Col md={4} className=" bg-light border">.col-md-4</Col>
                                        <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                            .ms-auto</Col>
                                        <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                            .ms-auto</Col>
                                    </Row>
                                    <Row className="row mt-3">
                                        <Col sm={9} className=" bg-light border">
                                            Level 1: .col-sm-9
                                            <Row>
                                                <Col sm={6} className="col-8 bg-light border">
                                                    Level 2: .col-8 .col-sm-6
                                                </Col>
                                                <Col sm={6} className="col-4 bg-light border">
                                                    Level 2: .col-4 .col-sm-6
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='secondary' Buttontype="button" onClickfunc={() => handleModalClose('gridModal')}
                                    Buttondismiss="modal">Close</SpkButton>
                                <SpkButton Buttonvariant='primary' Buttontype="button">Save
                                    Changes</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Toggle between modals" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal6}>
                        <SpkButton Buttonvariant="primary" Buttontoggle="modal" onClickfunc={() => handleModalOpen('firstModal')}
                        >Open first modal
                        </SpkButton>
                        <Modal id="m1" className="fade"
                            aria-labelledby="contained-modal-title-vcenter" centered show={modals['firstModal']} onHide={() => handleModalClose('firstModal')}>
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                Show a second modal and hide this one with the button below.
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='primary'
                                    Buttontarget="#exampleModalToggle2" onClickfunc={() => handleModalOpen('secondModal')}
                                    Buttontoggle="modal">Open second modal</SpkButton>
                            </Modal.Footer>
                        </Modal>
                        <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                            centered show={modals['secondModal']} onHide={() => handleModalClose('secondModal')}>
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                Hide this modal and show the first with the button below.
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant='primary' Buttontarget="#exampleModalToggle" onClickfunc={() => handleModalClose('secondModal')}
                                    Buttontoggle="modal">Back to first</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Optional sizes" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0 custom-btn-active" reactCode={modal10}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('extraLargeModal')}
                            Buttontarget="#exampleModalXl">Extra large modal</SpkButton>
                        <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('largeModal')}
                            Buttontarget="#exampleModalLg">Large modal</SpkButton>
                        <SpkButton Buttonvariant='warning' Buttontype="button" Customclass="mb-1 me-2" Buttontoggle="modal" onClickfunc={() => handleModalOpen('smallModal')}
                            Buttontarget="#exampleModalSm">Small modal</SpkButton>
                        <Modal size="xl" show={modals['extraLargeModal']} onHide={() => handleModalClose('extraLargeModal')}
                            aria-labelledby="example-modal-sizes-title-sm">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalXlLabel">Extra large
                                    modal</h6>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>
                        <Modal size="lg" show={modals['largeModal']} onHide={() => handleModalClose('largeModal')} aria-labelledby="example-modal-sizes-title-lg">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalLgLabel">Large modal
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>
                        <Modal size="sm" show={modals['smallModal']} onHide={() => handleModalClose('smallModal')}
                            aria-labelledby="example-modal-sizes-title-sm">
                            <Modal.Header closeButton>
                                <h6 className="modal-title" id="exampleModalSmLabel">Small modal
                                </h6>
                            </Modal.Header>
                            <Modal.Body>
                                ...
                            </Modal.Body>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Fullscreen modal" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0 custom-btn-active" reactCode={modal10}>
                        {values.map((v, idx) => (
                            <SpkButton Buttonvariant=""
                                key={idx}
                                Customclass={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
                                onClickfunc={() => handleShowf(v, colors[idx % colors.length])}
                            >
                                Full screen  {typeof v === "string" && `below ${v.split("-")[0]}`}
                            </SpkButton>
                        ))}
                        <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">Full screen {typeof fullscreen === "string" ? `below ${fullscreen.split("-")[0]}` : ''}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Modal body content</Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant="secondary" onClickfunc={() => setShowf(false)}>
                                    Close
                                </SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Varying modal content" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal11}>
                        <SpkButton Buttonvariant='primary' Buttontype="button" Customclass="btn  mb-1 me-2" onClickfunc={() => handleModalOpen('@mdoModal')}>Open modal for
                            @mdo</SpkButton>
                        <Modal show={modals['@mdoModal']} onHide={() => handleModalClose('@mdoModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @mdo
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" defaultValue="@mdo" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@mdoModal')}>
                                    Close
                                </SpkButton>
                                <SpkButton Buttonvariant="primary">Send message</SpkButton>
                            </Modal.Footer>
                        </Modal>
                        <SpkButton Buttonvariant='secondary' Buttontype="button" Customclass="btn mb-1 me-2" onClickfunc={() => handleModalOpen('@fatModal')}>Open modal for
                            @fat</SpkButton>
                        <Modal show={modals['@fatModal'] || false} onHide={() => handleModalClose('@fatModal')}>
                            <Modal.Header closeButton>
                                <Modal.Title as="h6">New message to @fat
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control type="email" defaultValue="@fat" autoFocus />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@fatModal')}>
                                    Close
                                </SpkButton>
                                <SpkButton Buttonvariant="primary">Send message</SpkButton>
                            </Modal.Footer>
                        </Modal>
                        <SpkButton Buttonvariant='light' Buttontype="button" Customclass="btn btn-light mb-1" onClickfunc={() => handleModalOpen('@getModal')}>Open modal for
                            @getbootstrap</SpkButton>
                        <Modal show={modals['@getModal'] || false} onHide={() => handleModalClose('@getModal')}>
                            <Modal.Header closeButton >
                                <Modal.Title as="h6">Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Recipient:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            defaultValue=" @getbootstrap"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Message:</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <SpkButton Buttonvariant="secondary" onClickfunc={() => handleModalClose('@getModal')}>
                                    Close
                                </SpkButton>
                                <SpkButton Buttonvariant="primary">Send message</SpkButton>
                            </Modal.Footer>
                        </Modal>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}



            {/* <!-- Start:: row-6 --> */}
            <h6 className="mb-3">Close Buttons:</h6>
            <Row>
                <Col xl={4}>
                    <ShowCode title="Basic Close" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal13}>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="Disable state" customCardClass="custom-card" customCardHeaderClass="" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={modal14}>
                        <button type="button" className="btn-close" disabled aria-label="Close"></button>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode title="White variant" customCardClass="custom-card overflow-hidden" customCardHeaderClass="" customCardBodyClass="bg-black" reactCode={modal15}>
                        <CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
                        <CloseButton type="button" className="btn-close btn-close-white" disabled aria-label="Close"></CloseButton>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-6 --> */}
        </Fragment>
    );
};

export default ModalsCloses;