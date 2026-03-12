
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Circleoptions, Circleseries, Customoptions, Customseries, Gaugeoptions, Gaugeseries, Gradientoptions, Gradientseries, Multiroptions, Multirseries, Pieoptions, Pieseries, Storkeseries, Strokeoptions } from "../../../../shared/data/charts/apexcharts/radialbardata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RadialbarCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Radialbar Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Radialbar Charts" activepage="Apex Radialbar Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="radialbar-basic">
                                <Spkapexcharts chartOptions={Pieoptions} chartSeries={Pieseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Radialbar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="radialbar-multiple">
                                <Spkapexcharts chartOptions={Multiroptions} chartSeries={Multirseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart - Custom Angle</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="circle-custom">
                                <Spkapexcharts chartOptions={Customoptions} chartSeries={Customseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Circle Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="gradient-circle">
                                <Spkapexcharts chartOptions={Gradientoptions} chartSeries={Gradientseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stroked Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="circular-stroked">
                                <Spkapexcharts chartOptions={Strokeoptions} chartSeries={Storkeseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart With Image</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="circle-image">
                                <Spkapexcharts chartOptions={Circleoptions} chartSeries={Circleseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Semi Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="circular-semi">
                                <Spkapexcharts chartOptions={Gaugeoptions} chartSeries={Gaugeseries} type="radialBar" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default RadialbarCharts;