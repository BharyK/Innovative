import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import png16 from "../../../assets/images/media/png/16.png";

const Error401 = () => {
    return (
        <div>
            <div className="page error-bg">
                {/* <!-- Start::error-page --> */}
                <div className="error-page my-3">
                    <div className="container">
                        <div className="my-auto">
                            <Row className="justify-content-center">
                                <Col xl={7}>
                                    <div className="bg-white p-5 error-img text-center rounded primary-dash-border">
                                        <div className="row align-items-center mx-0 g-0">
                                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="col-12">
                                                <div className="row align-items-center justify-content-center text-center h-100">
                                                    <Col xl={10} lg={10} md={12} className="col-12">
                                                        <img src={png16} alt="" className="error-main-img" />
                                                        <p className="error-text mb-4">401</p>
                                                        <p className="fs-5  fw-medium mb-2">Oops, the page you are trying to access
                                                            does not
                                                            exist?</p>
                                                        <p className="fs-15 mb-4 text-muted">The requested page is not available. It might have been relocated, deleted, or never existed.</p>
                                                        <div className='d-flex flex-column flex-md-row justify-content-center text-center'>
                                                            <Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="btn btn-lg btn-w-lg mb-2 border-0 btn-primary me-md-3">Home Page</Link>
                                                            <Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="btn btn-lg btn-w-lg mb-2 border-0 btn-secondary">Visit Help Center</Link>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error401