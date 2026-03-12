
import { Link } from "react-router-dom";
import Spkapexcharts from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Areabasicoptions, Areabasicseries, Areagithuboptions, Areagithubseries, Areanulloptions, Areanullseries, Areasplineoptions, Areasplineseries, Areastackoptions, Areastackseries, Areatimeoptions, Areatimeseries, Areavalueoptions, Areavalueseries, Dateoptions, Dateseries, optionsYears, seriesYears } from "../../../../shared/data/charts/apexcharts/areachartdata";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../../shared/layouts-components/seo/seo";
import face1 from "../../../../assets/images/faces/1.jpg";
import { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import ApexCharts from 'apexcharts';


const AreaCharts = () => {

    const [_selection, setSelection] = useState('one_year');

    const updateData = (timeline: string) => {
        setSelection(timeline);

        switch (timeline) {
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('01 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            default:
                break;
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Area Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Area Charts" activepage="Apex Area Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Basic Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-basic">
                                <Spkapexcharts chartOptions={Areabasicoptions} chartSeries={Areabasicseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Spline Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-spline">
                                <Spkapexcharts chartOptions={Areasplineoptions} chartSeries={Areasplineseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-negative">
                                <Spkapexcharts chartOptions={Areavalueoptions} chartSeries={Areavalueseries} type="area" width={"100%"} height={325} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Selection-Github Style Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="chart-months">
                                <Spkapexcharts chartOptions={Areagithuboptions} chartSeries={Areagithubseries} type="area" width={"100%"} height={130} />
                            </div>
                            <div className="github-style d-flex align-items-center">
                                <div className="me-2">
                                    <img className="userimg rounded" src={face1} data-hovercard-user-id="634573" alt="" width="38" height="38" />
                                </div>
                                <div className="userdetails lh-1">
                                    <Link to="#!" className="username fw-medium fs-14">coder</Link>
                                    <span className="cmeta d-block mt-1">
                                        <span className="commits"></span> commits
                                    </span>
                                </div>
                            </div>
                            <div id="chart-years">
                                <Spkapexcharts chartOptions={optionsYears} chartSeries={seriesYears} type="area" width={"100%"} height={140} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-stacked">
                                <Spkapexcharts chartOptions={Areastackoptions} chartSeries={Areastackseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Irregular Time Series Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-irregular">
                                <Spkapexcharts chartOptions={Areatimeoptions} chartSeries={Areatimeseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Null Values</Card.Title>
                        </Card.Header>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-null">
                                <Spkapexcharts chartOptions={Areanulloptions} chartSeries={Areanullseries} type="area" width={"100%"} height={365} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="card custom-card">
                        <div className="card-header d-flex">
                            <Card.Title>Area Chart-Datetime X-Axis Chart</Card.Title>
                            <div className="btn-group ms-auto">
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('one_month')}>1M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('six_months')}>6M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('one_year')}>1Y</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('all')}>ALL</SpkButton>
                            </div>
                        </div>
                        <Card.Body className="border border-dashed m-2 mt-0 rounded-1">
                            <div id="area-datetime">
                                <Spkapexcharts chartOptions={Dateoptions} chartSeries={Dateseries} type='area' height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default AreaCharts;