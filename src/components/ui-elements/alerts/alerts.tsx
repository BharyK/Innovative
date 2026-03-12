import { dataAlert10, dataAlert11, dataAlert12, dataAlert13, dataAlert15, dataAlert16, dataAlert17, dataAlert3, dataAlert4, dataAlert5, dataAlert7, dataAlert8, dataAlert9, reactAlert1, reactAlert10, reactAlert11, reactAlert13, reactAlert14, reactAlert15, reactAlert16, reactAlert17, reactAlert2, reactAlert3, reactAlert4, reactAlert5, reactAlert6, reactAlert7, reactAlert8, reactAlert9, reuseAlert1, reuseAlert10, reuseAlert11, reuseAlert12, reuseAlert13, reuseAlert14, reuseAlert15, reuseAlert16, reuseAlert17, reuseAlert2, reuseAlert3, reuseAlert4, reuseAlert5, reuseAlert6, reuseAlert7, reuseAlert8, reuseAlert9 } from "../../../shared/data/prism-code/uielements-prism";
import { Additionalcontentalerts, avatarsizealert, Customizedalert1, Defaultsolidalerts, Imagealerts, Linkalerts, Outlinealerts, Roundedefaultalerts, Roundedoutlinealerts, Roundedsolidalerts, Roundewithbtnalerts, Shadowsolidalerts, Solidalerts, Svgalert, Svgalert1 } from "../../../shared/data/ui-elements/alertsdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ShowCode from "../../../shared/showcode/showcode";
import SpkAlert from "../../../shared/@spk-reusable-components/reusable-uielements/spk-alert";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";

const Alerts = () => {
    interface AlertProps {
        id: number;
    }

    const [alerts, setAlerts] = useState<AlertProps[]>([]);

    const handleShowAlert = () => {
        const newAlert = {
            id: new Date().getTime(), // Unique ID for each alert
        };

        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
    };

    // Function to close the alert when the close button is clicked
    const handleCloseAlert = (id: number) => {
        setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    };

    ///
    const [alert, setAlert] = useState<{ [key: string]: boolean }>({});

    const handleRemoveAlert = (alertName: string) => {
        setAlert((prevAlert) => ({ ...prevAlert, [alertName]: false }));
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Alerts"} />

            <Pageheader title="Ui Elements" currentpage="Alerts" activepage="Alerts" />
            {/* <!-- Page Header Close --> */}

            {/* <!--ROW-START--> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Basic Alert" customCardClass="custom-card" reactCode={reactAlert1} reusableCode={reuseAlert1} customCardBodyClass="border border-dashed rounded m-2 mt-0" >
                        <SpkAlert variant="warning" Dismiss={true} show={alert['basicAlert']} >
                            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                            <SpkButton Buttonvariant='' Customclass="btn-close" onClickfunc={() => handleRemoveAlert('basicAlert')}><i className="bi bi-x"></i></SpkButton>
                        </SpkAlert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Live example" customCardClass="custom-card" customCardBodyClass=" border border-dashed rounded m-2 mt-0" reactCode={reactAlert2} reusableCode={reuseAlert2}>
                        {alerts.map((alert) => (
                            <SpkAlert variant="success" CustomClass="alert-dismissible mb-2" key={alert.id}>
                                <strong>Nice, </strong> you triggered this alert message!
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" onClickfunc={() => handleCloseAlert(alert.id)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                        <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="mt-1" Buttonlabel="Close" onClickfunc={handleShowAlert}>
                            Show live alert
                        </SpkButton>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Outline Alerts" customCardBodyClass="border border-dashed rounded m-2 mt-0" customCardClass="custom-card" reactCode={reactAlert3} reusableCode={reuseAlert3} dataCode={dataAlert3}>
                        {Outlinealerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} CustomClass="alert-dismissible" key={idx.id} show={alert[`outline${index}`]} >
                                {idx.text}
                                <SpkButton Buttonvariant={idx.color} Buttontype="button" Customclass={`btn-close ${idx.color}`} Buttonlabel="Close" onClickfunc={() => handleRemoveAlert(`outline${index}`)} Buttondismiss="alert" >
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Links in alerts" customCardBodyClass="border border-dashed rounded m-2 mt-0" customCardClass="custom-card" reactCode={reactAlert7} reusableCode={reuseAlert7} dataCode={dataAlert7}>
                        {Linkalerts.map((idx) => (
                            <SpkAlert variant={idx.class} key={idx.id}>{idx.text1}
                                <Link to="#!" className="alert-link">{idx.text2}</Link>{idx.text3}
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Solid Alerts With Different Shadows" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert4} reusableCode={reuseAlert4} dataCode={dataAlert4}>
                        {Shadowsolidalerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} CustomClass={`${idx.size} alert-dismissible`} key={idx.id} show={alert[`shadows${index}`]}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`shadows${index}`)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Default Alerts With Different Shadows" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert5} reusableCode={reuseAlert5} dataCode={dataAlert5}>
                        {Defaultsolidalerts.map((idx) => (
                            <SpkAlert variant={idx.class} CustomClass={idx.size} key={idx.id}>{idx.text}</SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Default alerts" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert6} reusableCode={reuseAlert6}>
                        <SpkAlert variant="primary">A simple primary alert—check it out!</SpkAlert>
                        <SpkAlert variant="secondary">A simple secondary alert—check it out!</SpkAlert>
                        <SpkAlert variant="success">A simple success alert—check it out!</SpkAlert>
                        <SpkAlert variant="danger">A simple danger alert—check it out!</SpkAlert>
                        <SpkAlert variant="warning">A simple warning alert—check it out!</SpkAlert>
                        <SpkAlert variant="info">A simple info alert—check it out!</SpkAlert>
                        <SpkAlert variant="light">A simple light alert—check it out!</SpkAlert>
                        <SpkAlert variant="dark">A simple dark alert—check it out!</SpkAlert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Solid Colored Alerts" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert8} reusableCode={reuseAlert8} dataCode={dataAlert8}>
                        {Solidalerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} key={idx.id} CustomClass={`alert-dismissible ${idx.color}`} show={alert[`solid${index}`]}>{idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Buttonlabel="Close" Buttondismiss="alert" Customclass={`btn-close ${idx.color}`}
                                    onClickfunc={() => handleRemoveAlert(`solid${index}`)}><i className="bi bi-x"></i></SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Solid Alerts" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert9} reusableCode={reuseAlert9} dataCode={dataAlert9}>
                        {Roundedsolidalerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} key={idx.id} CustomClass="rounded-pill alert-dismissible" show={alert[`round${index}`]}>{idx.text}
                                <SpkButton Buttontype="button" Buttonvariant={idx.class} Buttonlabel="Close" Buttondismiss="alert" Customclass="btn-close"
                                    onClickfunc={() => handleRemoveAlert(`round${index}`)}><i className="bi bi-x"></i></SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Outline Alerts" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert10} reusableCode={reuseAlert10} dataCode={dataAlert10}>
                        {Roundedoutlinealerts.map((idx, index) => (
                            <SpkAlert show={alert[`rounded${index}`]} variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={idx.id}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`rounded${index}`)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Default Alerts" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert11} reusableCode={reuseAlert11} dataCode={dataAlert11}>
                        {Roundedefaultalerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} CustomClass="rounded-pill alert-dismissible" key={idx.id} show={alert[`default${index}`]}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`default${index}`)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Rounded Alerts With Custom Close Button" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={dataAlert12} reusableCode={reuseAlert12} dataCode={dataAlert12}>
                        {Roundewithbtnalerts.map((idx, index) => (
                            <SpkAlert variant={idx.class} CustomClass="rounded-pill alert-dismissible custom-rounded-alerts" key={idx.id} show={alert[`close${index}`]}>
                                {idx.text}
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close custom-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`close${index}`)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Customized Alerts With SVG's" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert13} reusableCode={reuseAlert13} dataCode={dataAlert13}>
                        {Customizedalert1.map((idx, index) => (
                            <SpkAlert show={alert[`svg${index}`]} variant={idx.color} CustomClass={`alert-dismissible custom-svg-alert custom-alert-icon shadow-sm svg-${idx.color}`} key={idx.id}>
                                <svg className={`me-2 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
                                A customized {idx.color} alert with an icon
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass={`btn-close ${idx.btnclass}`} Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`svg${index}`)}>
                                    <i className="bi bi-x"></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts with icons" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert14} reusableCode={reuseAlert14}>
                        <SpkAlert variant='primary' CustomClass="alert d-flex align-items-center svg-primary">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                            <div>
                                An example alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant='success' CustomClass="alert  d-flex align-items-center svg-success">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                            <div>
                                An example success alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant='warning' CustomClass="alert  d-flex align-items-center svg-warning">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
                            <div>
                                An example warning alert with an icon
                            </div>
                        </SpkAlert>
                        <SpkAlert variant='danger' CustomClass="alert  d-flex align-items-center svg-danger">
                            <svg className="flex-shrink-0 me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
                            <div>
                                An example danger alert with an icon
                            </div>
                        </SpkAlert>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts With Images" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert15} reusableCode={reuseAlert15} dataCode={dataAlert15}>
                        {Imagealerts.map((idx, index) => (
                            <SpkAlert show={alert[`images${index}`]} variant={idx.color} CustomClass="alert-img alert-dismissible rounded-pill flex-wrap" key={idx.id}>
                                <div className="avatar avatar-sm me-3 avatar-rounded">
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`images${index}`)}>
                                    <i className={`bi bi-x  ${idx.class}`}></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Alerts With Different size Images" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert16} reusableCode={reuseAlert16} dataCode={dataAlert16}>
                        {avatarsizealert.map((idx, index) => (
                            <SpkAlert show={alert[`different${index}`]} variant={idx.color} CustomClass="alert-img alert-dismissible flex-wrap" key={idx.id}>
                                <div className={`avatar avatar-${idx.class} me-3`}>
                                    <img src={idx.src1} alt="img" />
                                </div>
                                <div>A simple {idx.color} alert with image—check it out!</div>
                                <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`different${index}`)}>
                                    <i className={`bi bi-x ${idx.class1}`}></i>
                                </SpkButton>
                            </SpkAlert>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode title="Additional content" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded m-2 mt-0" reactCode={reactAlert17} reusableCode={reuseAlert17} dataCode={dataAlert17}>
                        <Row className="gy-3">
                            {Additionalcontentalerts.map((idx, index) => (
                                <Col xl={6} key={idx.id}>
                                    <SpkAlert show={alert[`additional${index}`]} variant={idx.class} CustomClass="overflow-hidden p-0" key={idx.id}>
                                        <div className={`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`}>
                                            <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close p-0 text-fixed-white" Buttonlabel="Close" Buttondismiss="alert" onClickfunc={() => handleRemoveAlert(`additional${index}`)}>
                                                <i className="bi bi-x"></i>
                                            </SpkButton>
                                        </div>
                                        <hr className="my-0" />
                                        <div className="p-3">
                                            <p className="mb-0">{idx.text2} <Link to="#!" className="fw-medium  text-decoration-underline">
                                                {idx.text3}</Link></p>
                                        </div>
                                    </SpkAlert>
                                </Col>
                            ))}
                        </Row>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Row>
                        {Svgalert1.map((idx, index) => (
                            <Col xl={3} key={idx.id}>
                                <div className="card border-0">
                                    <SpkAlert show={alert[`card${index}`]} variant={`solid-${idx.color}`} CustomClass={`mb-0 p-2 alert alert-solid-primary border border-${idx.color} mb-0 p-2`}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2 svg-white">
                                                {idx.class1}
                                            </div>
                                            <div className="text-fixed-white w-100">
                                                <div className="fw-medium  d-flex justify-content-between">{idx.text1}<SpkButton Buttonvariant=''
                                                    onClickfunc={() => handleRemoveAlert(`card${index}`)}
                                                    Buttontype="button" Customclass="btn-close p-0" Buttonlabel="Close" Buttondismiss="alert">
                                                    <i className="bi bi-x"></i></SpkButton></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#!" className="text-fixed-white fw-medium  me-2 op-7 mx-1">{idx.btn1}</Link>
                                                    <Link to="#!" className="text-fixed-white fw-medium ">{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SpkAlert>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={12}>
                    <Row>
                        {Svgalert.map((idx, index) => (
                            <Col xl={3} key={idx.id}>
                                <Card className="border-0">
                                    <SpkAlert show={alert[`svgalert${index}`]} variant={idx.color} CustomClass={`alert alert-primary border border-${idx.color} mb-0 p-2`}>
                                        <div className="d-flex align-items-start">
                                            <div className={`me-2 svg-${idx.color}`}>
                                                {idx.class1}
                                            </div>
                                            <div className={`text-${idx.color} w-100`}>
                                                <div className="fw-medium  d-flex justify-content-between">{idx.text1}
                                                    <SpkButton Buttonvariant='' Buttontype="button" Customclass="btn-close p-0" Buttondismiss="alert" Buttonlabel="Close"
                                                        onClickfunc={() => handleRemoveAlert(`svgalert${index}`)}>
                                                        <i className="bi bi-x"></i></SpkButton></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#!" className={`text-${idx.textcolor} fw-medium  me-2 d-inline-block`}>cancel</Link>
                                                    <Link to="#!" className={`text-${idx.color} fw-medium `}>open</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SpkAlert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert CustomClass="alert custom-alert1 alert-primary " show={alert['primary']}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttondismiss="alert" Buttonlabel="Close" onClickfunc={() => handleRemoveAlert('primary')}><i className="bi bi-x"></i></SpkButton>
                                    <div className="text-center px-5 pb-0 svg-primary">
                                        <svg className="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                        <h5>Information?</h5>
                                        <p className="">This alert is created to just show the related information.</p>
                                        <div className="">
                                            <button className="btn btn-sm btn-outline-danger m-1">Decline</button>
                                            <button className="btn btn-sm btn-primary m-1">Accept</button>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert CustomClass="alert custom-alert1 alert-secondary" show={alert['secondary']}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttondismiss="alert" Buttonlabel="Close" onClickfunc={() => handleRemoveAlert('secondary')}><i className="bi bi-x"></i></SpkButton>
                                    <div className="text-center px-5 pb-0 svg-secondary">
                                        <svg className="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <h5>Confirmed</h5>
                                        <p className="">This alert is created to just show the confirmation message.</p>
                                        <div className="">
                                            <button className="btn btn-sm btn-secondary m-1">Close</button>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert CustomClass="alert alert-warning custom-alert1 alert-warning" show={alert['warning']}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttondismiss="alert" Buttonlabel="Close" onClickfunc={() => handleRemoveAlert('warning')}><i className="bi bi-x"></i></SpkButton>
                                    <div className="text-center px-5 pb-0 svg-warning">
                                        <svg className="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                                        <h5>Warning</h5>
                                        <p className="">This alert is created to just show the warning message.</p>
                                        <div className="">
                                            <button className="btn btn-sm btn-outline-secondary m-1">Back</button>
                                            <button className="btn btn-sm btn-warning m-1">Continue</button>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <SpkAlert CustomClass="alert custom-alert1 alert-danger" show={alert['danger']}>
                                    <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close ms-auto" Buttondismiss="alert" Buttonlabel="Close" onClickfunc={() => handleRemoveAlert('danger')}><i className="bi bi-x"></i></SpkButton>
                                    <div className="text-center px-5 pb-0 svg-danger">
                                        <svg className="custom-alert-icon" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" /></svg>
                                        <h5>danger</h5>
                                        <p className="">This alert is created to just show the danger message.</p>
                                        <div className="">
                                            <button className="btn btn-sm btn-danger m-1">Delete</button>
                                        </div>
                                    </div>
                                </SpkAlert>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--ROW-END--> */}
        </Fragment>
    );
};

export default Alerts;