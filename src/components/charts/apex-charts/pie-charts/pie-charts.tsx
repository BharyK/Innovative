
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Basicpieoptions, Basicpieseries, Donutoptions, Donutseries, Piechartoptions, Piechartseries, Piegardientoptions, Piegradientseries, Pieimgoptions, Pieimgseries, Piemonooptions, Piemonoseries, Updatedoptions, Updatedseries } from "../../../../shared/data/charts/apexcharts/piechartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";


const PieCharts = () => {

    const [state, setState] = useState({ series: Updatedseries });

    const appendData = () => {
        const newSeries = [...state.series, Math.floor(Math.random() * 100) + 1];
        setState({ series: newSeries });
    };

    const removeData = () => {
        setState(prevState => {
            if (prevState.series.length > 0) {
                return { series: prevState.series.slice(0, -1) };
            }
            return prevState;
        });
    };

    const randomize = () => {
        const newSeries = state.series.map(() => Math.floor(Math.random() * 100) + 1);
        setState({ series: newSeries });
    };

    const reset = () => {
        setState({ series: Updatedseries });
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Pie Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Pie Charts" activepage="Apex Pie Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="pie-basic">
                                <Spkapexcharts chartOptions={Basicpieoptions} chartSeries={Basicpieseries} type="pie" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Simple Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="donut-simple">
                                <Spkapexcharts chartOptions={Donutoptions} chartSeries={Donutseries} type="donut" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Updating Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="mx-auto">
                            <div id="donut-update">
                                <Spkapexcharts chartOptions={Updatedoptions} chartSeries={state.series} type="donut" width={"100%"} height={280} />
                                <div className="text-center mt-4">
                                    <SpkButton Size="sm" Buttonvariant="primary" Customclass="m-1" onClickfunc={appendData}>
                                        + ADD
                                    </SpkButton>
                                    &nbsp;
                                    <SpkButton Size="sm" Buttonvariant="primary" Customclass="m-1" onClickfunc={removeData}>
                                        - REMOVE
                                    </SpkButton>
                                    &nbsp;
                                    <SpkButton Size="sm" Buttonvariant="primary" Customclass="m-1" onClickfunc={randomize}>
                                        RANDOMIZE
                                    </SpkButton>
                                    &nbsp;
                                    <SpkButton Size="sm" Buttonvariant="primary" Customclass="m-1" onClickfunc={reset}>
                                        RESET
                                    </SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Monochrome Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="pie-monochrome">
                                <Spkapexcharts chartOptions={Piemonooptions} chartSeries={Piemonoseries} type="pie" width={"100%"} height={280} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="donut-gradient">
                                <Spkapexcharts chartOptions={Piegardientoptions} chartSeries={Piegradientseries} type="donut" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Donut Chart With Patterns</Card.Title>
                        </Card.Header>
                        <Card.Body className="mx-auto">
                            <div id="donut-pattern">
                                <Spkapexcharts chartOptions={Piechartoptions} chartSeries={Piechartseries} type="donut" width={"100%"} height={250} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Image Filled Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="pie-image">
                                <Spkapexcharts chartOptions={Pieimgoptions} chartSeries={Pieimgseries} type="pie" width={"100%"} height={285} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default PieCharts;