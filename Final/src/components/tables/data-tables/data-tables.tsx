
import BasicDatatable from "../../../shared/data/tables/datatables/basicDatatable";
import CustomizedTables from "../../../shared/data/tables/datatables/customizedTables";
import StickyHeadTable from "../../../shared/data/tables/datatables/stickyHeadTable";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

const DataTables = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Data Tables"} />
            <Pageheader title="Tables" currentpage="Data Tables" activepage="Data Tables" />

            {/* <!-- Page Header Close --> */}
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="basic-datatable">
                                <div className="table-responsive">
                                    <BasicDatatable />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sticky header Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="responsive-datatable">
                            <StickyHeadTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}

            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Customization Table</Card.Title>
                        </Card.Header>
                        <Card.Body className="customization-tables">
                            <CustomizedTables />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}

            {/* <!-- End:: row-5 --> */}
        </Fragment>
    );
};

export default DataTables;