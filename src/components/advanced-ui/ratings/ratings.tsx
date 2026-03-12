

import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import StarsIcon from "@mui/icons-material/Stars";
import { Button, Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkBadge from "../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";
import SpkRatings from "../../../shared/@spk-reusable-components/reusable-plugins/spk-ratings";

const Ratings = () => {

    const [ratingValue, setRatingValue] = useState<number | null>(0);
    const handleRatingChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue); // Update the rating value when the user clicks
    };

    const handleResetRating = () => {
        setRatingValue(0); // Clear the rating when the button is clicked
    };

    const [value, setValue] = useState<number | null>(1);
    const [hover, setHover] = useState<number>(-1);

    const labels: Record<number, string> = {
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
        2.5: "2.5",
        3: "3",
        3.5: "3.5",
        4: "4",
        4.5: "4.5",
        5: "5",
    };

    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Ratings"} />
            <Pageheader title="Advanced Ui" currentpage="Ratings" activepage="Ratings" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Rater
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Show Some <span className="text-danger">&#10084;</span> with rating :</p>
                                <SpkRatings name="half-rating" size="large" defaultValue={0} max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                5 star rater with steps
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Dont forget to rate the product :</p>
                                <SpkRatings name="half-rating" defaultValue={0} precision={0.5} max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Custom messages
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Your rating is much appreciated&#128079; :</p>
                                <SpkRatings name="full-rating" defaultValue={4} precision={1} size="large" max={5} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Unlimited number of stars readOnly
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Thanks for rating :</p>
                                <SpkRatings name="half-rating-read" defaultValue={6} precision={1} max={10} size="large" readOnly />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                5 Star rater with custom isBusyText and simulated backend
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Thanks for rating :</p>
                                <SpkRatings name="full-rating" defaultValue={0} precision={1} max={5} size="large" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                On hover event
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Please give your valuable rating :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                                        <SpkRatings
                                            name="hover-feedback"
                                            value={value}
                                            precision={0.5} // Enable half-star support
                                            getLabelText={getLabelText}
                                            onChange={(_event, newValue) => setValue(newValue)}
                                            onChangeActive={(_event, newHover) => setHover(newHover)}
                                            Icon={<StarsIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        {value !== null && (
                                            <Box sx={{ ml: 2 }}>
                                                <SpkBadge variant="secondary-transparent" Customclass="live-rating  ms-3">
                                                    {labels[hover !== -1 ? hover : value]}
                                                </SpkBadge>
                                            </Box>
                                        )}
                                    </Box>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Clear/reset rater
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed rounded m-2 mt-0">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-medium">Thank You so much for your support :</p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <SpkRatings name="clickable-rating" value={ratingValue} onChange={handleRatingChange} />
                                    <SpkTooltips placement="top" title="Reset">
                                        <Button variant='danger-light' className="btn btn-icon btn-sm ms-3" id="rater-reset-button" onClick={handleResetRating}>
                                            <i className="ri-restart-line"></i>
                                        </Button>
                                    </SpkTooltips>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Ratings;