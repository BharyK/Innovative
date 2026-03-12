
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Barbasicoptions, Barbasicseries, Barchartoptions, Barchartseries, Bargroupoptions, Bargroupseries, Barimgoptions, Barimgseries, Barlabelseries, Barlableoptions, Barmakeroptions, Barmakerseries, Barpatternoptions, Barpatternseries, Barreverseoptions, Barreverseseries, Barstack1options, Barstackoptions, Barstackseries, Barstck1series } from "../../../../shared/data/charts/apexcharts/barchartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col } from "react-bootstrap";

const BarCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Bar Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Bar Charts" activepage="Apex Bar Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-basic">
                                <Spkapexcharts chartOptions={Barbasicoptions} chartSeries={Barbasicseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Grouped Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-group">
                                <Spkapexcharts chartOptions={Bargroupoptions} chartSeries={Bargroupseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-stacked">
                                <Spkapexcharts chartOptions={Barstackoptions} chartSeries={Barstackseries} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>100% Stacked Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-full">
                                <Spkapexcharts chartOptions={Barstack1options} chartSeries={Barstck1series} type="bar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-negative">
                                <Spkapexcharts chartOptions={Barchartoptions} chartSeries={Barchartseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar Chart With Markers</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-markers">
                                <Spkapexcharts chartOptions={Barmakeroptions} chartSeries={Barmakerseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Reversed Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-reversed">
                                <Spkapexcharts chartOptions={Barreverseoptions} chartSeries={Barreverseseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Category DataLabels</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-categories">
                                <Spkapexcharts chartOptions={Barlableoptions} chartSeries={Barlabelseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Patterned Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-pattern">
                                <Spkapexcharts chartOptions={Barpatternoptions} chartSeries={Barpatternseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Image Fill</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="bar-image">
                                <Spkapexcharts chartOptions={Barimgoptions} chartSeries={Barimgseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default BarCharts;