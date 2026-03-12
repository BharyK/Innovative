
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Candbasicoptions, Candbasicseries, CandeoptionsBar, Candleoptions, Candleseries, Candlineoptions, Candlineseries, CandseriesBar, Candsyncedseries, Candsyncoptions } from "../../../../shared/data/charts/apexcharts/candlestickdata";
import { Card, Col } from "react-bootstrap";


const CandlestickCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Candlesticks Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Candlestick Charts" activepage="Apex Candlestick Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row">
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Candlestick Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="candlestick-basic">
                                <Spkapexcharts chartOptions={Candbasicoptions} chartSeries={Candbasicseries} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="chart-candlestick">
                                <Spkapexcharts chartOptions={Candsyncoptions} chartSeries={Candsyncedseries} type="candlestick" width={"100%"} height={215} />
                            </div>
                            <div id="chart-bar">
                                <Spkapexcharts chartOptions={CandeoptionsBar} chartSeries={CandseriesBar} type="bar" width={"100%"} height={120} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Category X-axis</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="candlestick-categoryx">
                                <Spkapexcharts chartOptions={Candleoptions} chartSeries={Candleseries} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Candlestick With Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="candlestick-line">
                                <Spkapexcharts chartOptions={Candlineoptions} chartSeries={Candlineseries} type="candlestick" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CandlestickCharts;