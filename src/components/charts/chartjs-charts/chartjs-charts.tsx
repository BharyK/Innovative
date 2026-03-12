import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import * as chartjsdata from "../../../shared/data/charts/chartjsdata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkChartJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-chartjs";


const ChartjsCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Chartjs Charts"} />

            <Pageheader title="Charts" currentpage="Chartjs" activepage="Chartjs" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Line Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-line" type="line" chartOptions={chartjsdata.Option} chartSeries={chartjsdata.Data} height='120px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-bar" type="bar" chartOptions={chartjsdata.Option1} chartSeries={chartjsdata.Data1} height='120px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-pie" type="pie" chartOptions={chartjsdata.Option2} chartSeries={chartjsdata.Data2} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Doughnut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-doughnut" type="doughnut" chartOptions={chartjsdata.Option3} chartSeries={chartjsdata.Data3} height='300px' />

                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Mixed Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-mixed" type="bar" chartOptions={chartjsdata.Options9} chartSeries={chartjsdata.Data9} height='300px' width={'763px'} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Polar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-polar" type="polarArea" chartOptions={chartjsdata.Option5} chartSeries={chartjsdata.Data5} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Radial Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-radar" type="radar" chartOptions={chartjsdata.Option6} chartSeries={chartjsdata.Data6} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-charts" type="scatter" chartOptions={chartjsdata.Option7} chartSeries={chartjsdata.Data7} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Chartjs Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <SpkChartJs id="chartjs-bubble" type="bubble" chartOptions={chartjsdata.Option8} chartSeries={chartjsdata.Data8} height='300px' />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ChartjsCharts;