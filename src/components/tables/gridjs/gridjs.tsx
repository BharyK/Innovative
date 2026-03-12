
import SpkGridjstables from "../../../shared/@spk-reusable-components/reusable-plugins/spk-gridjstables";
import { Columns, Data, Data1, Data2, Data3 } from "../../../shared/data/tables/gridjstablesdata";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const GridjsTables = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Grid Js"} />
            <Pageheader title="Tables" currentpage="Grid Js" activepage="Grid Js" />
            {/* <!-- Page Header Close --> */}

            {/* <!--Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-example1">
                                <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table With Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-pagination">
                                <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!--Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table With Search
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-search">
                                <SpkGridjstables Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End:: row-3 --> */}

            {/* <!--Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table Sorting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-sorting">
                                <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End:: row-4 --> */}

            {/* <!--Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table Loading
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-loading">
                                <SpkGridjstables Sort={true} Search={true} Data={Data1} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End:: row-5 --> */}

            {/* <!--Start:: row-6 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Wide Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-wide">
                                <SpkGridjstables reSizable={true} Sort={true} Search={true} Data={Data2} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End:: row-6 --> */}

            {/* <!--Start:: row-7 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Fixed Header
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-header-fixed">
                                <SpkGridjstables fixedHeader={true} Height="350px" Sort={true} Search={true} Data={Data3} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End:: row-7 --> */}

            {/* <!--    Start:: row-8 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Hidden Columns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-hidden-column">
                                <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={Columns} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-8 --> */}
        </Fragment>
    );
};

export default GridjsTables;