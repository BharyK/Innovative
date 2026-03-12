
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Basicrangeoptions, Basicrangeseries, Rangecombooptions, Rangecomboseries } from "../../../../shared/data/charts/apexcharts/rangeareadata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RangeAreaCharts = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Rangearea Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Range Area Charts" activepage="Apex Range Area Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="rangearea-basic">
                                <Spkapexcharts chartOptions={Basicrangeoptions} chartSeries={Basicrangeseries} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Combo Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="rangearea-combo">
                                <Spkapexcharts chartOptions={Rangecombooptions} chartSeries={Rangecomboseries} type="rangeArea" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default RangeAreaCharts;