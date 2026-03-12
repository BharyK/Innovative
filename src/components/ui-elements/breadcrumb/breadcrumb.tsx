import { breadcrumb1, breadcrumb2, breadcrumb3, breadcrumb4, breadcrumb5, breadcrumb6, reusebreadcrumb1, reusebreadcrumb2, reusebreadcrumb3, reusebreadcrumb4, reusebreadcrumb5, reusebreadcrumb6 } from "../../../shared/data/prism-code/uielements-prism";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Breadcrumb, Col } from "react-bootstrap";
import ShowCode from "../../../shared/showcode/showcode";
import SpkBreadcrumb from "../../../shared/@spk-reusable-components/reusable-uielements/spk-breadcrumb";

const Breadcrumbs = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Breadcrumb"} />
            <Pageheader title="Ui Elements" currentpage="Breadcrumb" activepage="Breadcrumb" />
            {/* <!-- Page Header Close --> */}

            {/* <!--ROW-START--> */}
            <div className="row">
                <Col xl={6}>
                    <ShowCode title="Example" customCardClass="custom-card" reactCode={breadcrumb1} reusableCode={reusebreadcrumb1} customCardBodyClass="border border-dashed m-2 mt-0 rounded-1">
                        <SpkBreadcrumb>
                            <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                        </SpkBreadcrumb>
                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb>
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="mb-0 custom-breadcrumb breadcrumb-second">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Example1" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={breadcrumb2} reusableCode={reusebreadcrumb2}>
                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="breadcrumb-example1">
                                <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="breadcrumb-example1">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="breadcrumb-example1 breadcrumb-second mb-0">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Dividers" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={breadcrumb5} reusableCode={reusebreadcrumb5}>
                        <nav
                            aria-label="breadcrumb" className='divider-breadcrumb'>
                            <SpkBreadcrumb Customclass="breadcrumb-second mb-0">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Embedded SVG icon" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={breadcrumb6} reusableCode={reusebreadcrumb6}>
                        <nav className="embedded-svg-icon">
                            <SpkBreadcrumb Customclass="breadcrumb-second mb-0">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Breadcrumb Style-1" customCardClass="custom-card" reactCode={breadcrumb3} reusableCode={reusebreadcrumb3} customCardBodyClass="border border-dashed m-2 mt-0 rounded-1">
                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="breadcrumb-style1 breadcrumb-second mb-0">
                                <Breadcrumb.Item href="#!">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#!">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Breadcrumb Style-2" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={breadcrumb4} reusableCode={reusebreadcrumb4}>
                        <nav aria-label="breadcrumb">
                            <SpkBreadcrumb Customclass="breadcrumb-style2 breadcrumb-second mb-0">
                                <Breadcrumb.Item href="#!"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#!"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                            </SpkBreadcrumb>
                        </nav>
                    </ShowCode>
                </Col>
            </div>
            {/* <!--ROW-END--> */}
        </Fragment>
    );
};

export default Breadcrumbs;