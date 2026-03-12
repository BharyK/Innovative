
import React, { Fragment } from "react";
import { connect } from "react-redux";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import RangeSlider from "react-range-slider-input";
import { Card, Col, Form, Row } from "react-bootstrap";
import LabeledTwoThumbs, { Marks } from "../../../../shared/data/forms/rangesliderdata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { rangeslider1, rangeslider2, rangeslider3, rangeslider4 } from "../../../../shared/data/prism-code/forms-prism";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import ShowCode from "../../../../shared/showcode/showcode";
import type { ProductInfoType } from "../../../../shared/data/apps/ecommerce/productsdata";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "var(--primaru-color)",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
        height: 27,
        width: 27,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
        },
        "& .airbnb-bar": {
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    "& .MuiSlider-track": {
        height: 3,
    },
    "& .MuiSlider-rail": {
        color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
        opacity: theme.palette.mode === "dark" ? undefined : 1,
        height: 3,
    },
}));

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> { }
function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

interface RangeSlidersProps {
    local_varaiable: number
}

const RangeSliders: React.FC<RangeSlidersProps> = ({ local_varaiable }) => {

    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Forms-Rangeslider" />

            <Pageheader title="Forms" subtitle="Form Elements" currentpage="Range Slider" activepage="Range Slider" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <h6 className="mb-3">Default:</h6>
            <Row>
                <Col xl={6}>
                    <ShowCode title="Default Range" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded-1 m-2 mt-0" reactCode={rangeslider1}>
                        <Form.Range className="" id="customRange1" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Disabled Range" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded-1 m-2 mt-0" reactCode={rangeslider2}>
                        <Form.Range className="" id="disabledRange" disabled />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Range With Min and Max Values" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded-1 m-2 mt-0" reactCode={rangeslider3}>
                        <Form.Range className="" min="0" max="5" id="customRange2" />
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode title="Range With Steps" customCardClass="custom-card" customCardBodyClass="border border-dashed rounded-1 m-2 mt-0" reactCode={rangeslider4}>
                        <Form.Range className="" min="0" max="5" step="0.5" id="customRange3" />
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <h6 className="mb-3">noUiSlider:</h6>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Default-Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0 pb-2 pt-0">
                            <div id="slider">
                                <Box sx={{ m: 3 }} />
                                <AirbnbSlider slots={{ thumb: AirbnbThumbComponent }} getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")} defaultValue={[30, 80]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Fit Handles
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="slider-fit">
                                <AirbnbSlider slots={{ thumb: AirbnbThumbComponent }} getAriaLabel={(index) => (index === 0 ? "Minimum price" : "Maximum price")} defaultValue={[50, 90]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Rounded Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="slider-round">
                                <RangeSlider className="single-thumb" defaultValue={[0, 50]} thumbsDisabled={[true, false]} rangeSlideDisabled={true} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Square Styling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="slider-square">
                                <RangeSlider className="square-thumb" defaultValue={[0, 40]} thumbsDisabled={[true, false]} rangeSlideDisabled={true} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Soft Limits</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-5 border border-dashed rounded-1 m-2 mt-0">
                            <div id="soft">
                                <Marks rtl={local_varaiable.dir == "rtl"} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Toggle Movement By Clicking Pips</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-5 border border-dashed rounded-1 m-2 mt-0">
                            <div id="slider-pips">
                                <LabeledTwoThumbs rtl={local_varaiable.dir == "rtl"} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}

            {/* <!-- Start:: row-6 --> */}
            <h6 className="mb-3">noUiSlider Colors:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Primary
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="primary-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "var(--primary-color)" }} className='' /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Secondary
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="secondary-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "rgb(var(--secondary-rgb))" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Warning
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="warning-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "rgb(var(--warning-rgb))" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Info
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="info-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "rgb(var(--info-rgb))" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Success
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="success-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "rgb(var(--success-rgb))" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Danger
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded-1 m-2 mt-0">
                            <div id="danger-colored-slider">
                                <Slider aria-label="Temperature" defaultValue={30} getAriaValueText={valuetext} style={{ color: "rgb(var(--danger-rgb))" }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-6 --> */}
        </Fragment>
    )
};

const mapStateToProps = (state: ProductInfoType[]) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, {})(RangeSliders);