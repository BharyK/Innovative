
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Timeadvanceoptions, Timeadvanceseries, Timecoloroptions, Timecolorseries, Timedumbeloptions, Timedumbelseries, Timegroupoptions, Timegroupseries, Timelineoptions, Timelineseries, Timemultioptions, Timemultiseries } from "../../../../shared/data/charts/apexcharts/timelinedata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const TimelineCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Timeline Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Timeline Charts" activepage="Apex Timeline Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic TImeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="timeline-basic">
                                <Spkapexcharts chartOptions={Timelineoptions} chartSeries={Timelineseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Colored TImeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="timeline-colors">
                                <Spkapexcharts chartOptions={Timecoloroptions} chartSeries={Timecolorseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multi Series Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="timeline-multi">
                                <Spkapexcharts chartOptions={Timemultioptions} chartSeries={Timemultiseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Advanced Timeline Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="timeline-advanced">
                                <Spkapexcharts chartOptions={Timeadvanceoptions} chartSeries={Timeadvanceseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Timeline-Grouped Rows</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="timeline-grouped">
                                <Spkapexcharts chartOptions={Timegroupoptions} chartSeries={Timegroupseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Dumbbell Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="dumbbell-chart">
                                <Spkapexcharts chartOptions={Timedumbeloptions} chartSeries={Timedumbelseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default TimelineCharts;