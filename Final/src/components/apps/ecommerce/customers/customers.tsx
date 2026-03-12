import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import CustomerList, { CustomerCategories, Customerlistcarddata, CustomerStatusOptions } from "../../../../shared/data/apps/ecommerce/customerlistdata";
import SpkNftcard from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftcard";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";


const Customers = () => {

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [sortBy, setSortBy] = useState("");

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Customers List" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Customers List" activepage="Customers List" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="row-cols-xxl-5 row-cols-xl-3 row-cols-sm-2 row-cols-1">
                {Customerlistcarddata.map((idx) => (
                    <div className="col" key={idx.id}>
                        <SpkNftcard card={idx} cardClass={`bg-${idx.avatarclor}-transparent`} showProductList={true} MaindivClass="align-items-start gap-3 flex-wrap" titleClass="mb-2" />
                    </div>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between border-bottom-0">
                            {/* <!-- Search Bar --> */}
                            <div className="w-25">
                                <Form.Control value={search} className="form-control" type="text" id="search-input" placeholder="Search Product" aria-label="search-product" onChange={(e) => setSearch(e.target.value)} />
                            </div>

                            {/* <!-- Filters Section --> */}
                            <Row className="gy-2 w-50 justify-content-end">
                                {/* <!-- Status Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={CustomerCategories} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Active" onChange={(e) => setStatusFilter(e?.value || "")}
                                    />
                                </Col>

                                {/* <!-- Sort By Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={CustomerStatusOptions} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Sort By" onChange={(e) => setSortBy(e?.value || "")}
                                    />
                                </Col>
                            </Row>
                        </Card.Header>

                        {/* <!-- Table inside the card-body --> */}
                        <Card.Body className="pt-0">
                            <div id="orders-table" className="grid-card-table">
                                <CustomerList
                                    search={search}
                                    statusFilter={statusFilter}
                                    sortBy={sortBy}
                                />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default Customers;