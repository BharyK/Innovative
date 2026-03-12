import { datatooltip1, datatooltip3, reusabletooltip1, reusabletooltip2, reusabletooltip3, reusabletooltip4, reusabletooltip5, reusabletooltip6, tooltip1, tooltip2, tooltip3, tooltip4, tooltip5, tooltip6 } from "../../../shared/data/prism-code/uielements-prism";
import { SVGtooltip, Tooltipdirtooltip } from "../../../shared/data/ui-elements/tooltipsdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import ShowCode from "../../../shared/showcode/showcode";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import faces12 from "../../../assets/images/faces/12.jpg";
import faces3 from "../../../assets/images/faces/3.jpg";
import faces15 from "../../../assets/images/faces/15.jpg";

const Tooltips = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Tooltips"} />
            <Pageheader title="Ui Elements" currentpage="Tooltips" activepage="Tooltips" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Tooltip Directions" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" dataCode={datatooltip1} reactCode={tooltip1} reusableCode={reusabletooltip1}>
                        <div className="btn-list">
                            {Tooltipdirtooltip.map((idx, index) => (
                                <SpkTooltips placement={idx.text} title={`Tooltip on ${idx.text}`} key={index} >
                                    <SpkButton Buttontype="button" Buttonvariant="primary">
                                        Tooltip on {idx.text}
                                    </SpkButton>
                                </SpkTooltips>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode title="Colored Tooltips" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={tooltip4} reusableCode={reusabletooltip4}>
                        <div className="btn-list">
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="primary Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='primary'>
                                    Primary Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-secondary" title="Secondary Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='secondary'>
                                    Secondary Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-warning" title="Warning Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='warning'>
                                    Warning Tooltip
                                </SpkButton>
                            </SpkTooltips>

                            <SpkTooltips placement="top" tooltipClass="tooltip-info" title="Info Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='info'>
                                    Info Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-success" title="Success Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='success'>
                                    Success Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-danger" title="Danger Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='danger'>
                                    Danger Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-light" title="Light Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='light'>
                                    Light Tooltip
                                </SpkButton>
                            </SpkTooltips>
                            <SpkTooltips placement="top" tooltipClass="tooltip-dark" title="Dark Tooltip " trigger={['hover', 'focus']} >
                                <SpkButton Buttontype="button" Buttonvariant='dark'>
                                    Dark Tooltip
                                </SpkButton>
                            </SpkTooltips>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode title="Tooltips on links" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={tooltip2} reusableCode={reusabletooltip2}>
                        <p className="text-muted mb-0">
                            Hover on the link to view the
                            <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Link Tooltip ">
                                <Link to="#!" className="text-primary ms-1 d-inline-flex">Tooltip</Link>
                            </SpkTooltips>
                        </p>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="With an SVG's" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" dataCode={datatooltip3} reactCode={tooltip3} reusableCode={reusabletooltip3}>
                        {SVGtooltip.map((idx, index) => (
                            <SpkTooltips key={index} placement="top" tooltipClass={`tooltip-${idx.color}`} title={idx.text}>
                                <Link to="#!" className={`me-3 svg-${idx.color}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path
                                            d={idx.class} /></svg>
                                </Link>
                            </SpkTooltips>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Disabled elements" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={tooltip5} reusableCode={reusabletooltip5}>
                        <SpkTooltips id="tooltip-disabled" title="Disabled tooltip" trigger={['hover', 'focus']} >
                            <span className="d-inline-block">
                                <SpkButton Disabled={true} Style={{ pointerEvents: "none" }}>
                                    Disabled button
                                </SpkButton>
                            </span>
                        </SpkTooltips>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Tooltip For Images" customCardClass="custom-card" customCardBodyClass="border border-dashed m-2 mt-0 rounded-1" reactCode={tooltip6} reusableCode={reusabletooltip6}>
                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Alex Carey">
                            <Link to="#!"
                                className="avatar avatar-md me-2 online avatar-rounded">
                                <img src={faces12} alt="img" />
                            </Link>
                        </SpkTooltips>

                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Marina Kai">
                            <Link to="#!"
                                className="avatar avatar-lg me-2 online avatar-rounded">
                                <img src={faces3} alt="img" />
                            </Link>
                        </SpkTooltips>
                        <SpkTooltips placement="top" tooltipClass="tooltip-primary" title="Tim Cook">
                            <Link to="#!"
                                className="avatar avatar-xl me-2 offline avatar-rounded">
                                <img src={faces15} alt="img" />
                            </Link>
                        </SpkTooltips>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Tooltips;