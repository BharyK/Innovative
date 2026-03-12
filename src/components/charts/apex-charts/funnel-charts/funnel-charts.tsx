
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Funneloptions, Funnelseries, Pyramidoptions, Pyramidseries } from "../../../../shared/data/charts/apexcharts/funnelchartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";


const FunnelCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Funnel Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Funnel Charts" activepage="Apex Funnel Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Funnel Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="funnel-chart">
                                <Spkapexcharts chartOptions={Funneloptions} chartSeries={Funnelseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Pyramid Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="pyramid-chart">
                                <Spkapexcharts chartOptions={Pyramidoptions} chartSeries={Pyramidseries} type="bar" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default FunnelCharts;