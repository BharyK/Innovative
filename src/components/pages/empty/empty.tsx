import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Row } from "react-bootstrap";


const Empty = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Empty"} />
            <Pageheader title="Pages" subtitle={false} currentpage="Empty" activepage="Empty" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="mb-0">EMPTY CARD</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Empty;