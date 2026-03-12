
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Column1options, Column1series, Columnbasicoptions, Columnbasicseries, Columnchartoptions, Columnchartseries, Columnmakeroptions, Columnmakerseries, Columnoptions, Columnrotateoptions, Columnrotateseries, Columnseries, Columnstack1options, Columnstack1series, Columnvalueoptions, Columnvalueseries, Stackcolumnoptions, Stackcolumnseries } from "../../../../shared/data/charts/apexcharts/columnchartdata";
import { Card, Col, Row } from "react-bootstrap";

const ColumnCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Column Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Column Charts" activepage="Apex Column Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-basic">
                                <Spkapexcharts chartOptions={Columnbasicoptions} chartSeries={Columnbasicseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Datalabels</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-datalabels">
                                <Spkapexcharts chartOptions={Columnchartoptions} chartSeries={Columnchartseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-stacked">
                                <Spkapexcharts chartOptions={Stackcolumnoptions} chartSeries={Stackcolumnseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>100% Stacked Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-stacked-full">
                                <Spkapexcharts chartOptions={Columnstack1options} chartSeries={Columnstack1series} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Markers</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-markers">
                                <Spkapexcharts chartOptions={Columnmakeroptions} chartSeries={Columnmakerseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Rotated Labels</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-rotated-labels">
                                <Spkapexcharts chartOptions={Columnrotateoptions} chartSeries={Columnrotateseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-negative">
                                <Spkapexcharts chartOptions={Columnvalueoptions} chartSeries={Columnvalueseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Range Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="column-range">
                                <Spkapexcharts chartOptions={Columnoptions} chartSeries={Columnseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Distributed Columns Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="columns-distributed">
                                <Spkapexcharts chartOptions={Column1options} chartSeries={Column1series} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ColumnCharts;