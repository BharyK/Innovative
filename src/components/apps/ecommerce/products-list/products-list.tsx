import { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Productlisttable, { CategoriesOptions, productlistcarddata, ProductlistStatusOptions, Productoptions, StackOptions } from "../../../../shared/data/apps/ecommerce/productlistdata";
import SpkNftcard from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftcard";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";


const ProductsList = () => {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [stock, setStock] = useState("");
    const [sortBy, setSortBy] = useState("");


    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Productlist" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products List" activepage="Products List" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row className="row-cols-xxl-5 row-cols-xl-3 row-cols-sm-2 row-cols-1">
                {productlistcarddata.map((idx) => (
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
                            <div className="w-sm-25">
                                <Form.Control className="form-control mb-1" type="text" id="search-input" placeholder="Search Product" aria-label="search-product" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>

                            {/* <!-- Filters Section --> */}
                            <Row className="gy-2 w-sm-50">
                                {/* <!-- Category Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={CategoriesOptions} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Payment Status" onChange={(e) => setCategory(e?.value || "")}
                                    />
                                </Col>

                                {/* <!-- Status Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={ProductlistStatusOptions} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Status" onChange={(e) => setStatus(e?.value || "")}
                                    />
                                </Col>

                                {/* <!-- Stock Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={StackOptions} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Stock" onChange={(e) => setStock(e?.value || "")}
                                    />
                                </Col>

                                {/* <!-- Sort By Filter --> */}
                                <Col xl={3}>
                                    <SpkSelect name="colors" option={Productoptions} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Sort By" onChange={(e) => setSortBy(e?.value || "")}
                                    />
                                </Col>
                            </Row>
                        </Card.Header>

                        {/* <!-- Table inside the card-body --> */}
                        <Card.Body className="pt-0">
                            <div id="product-table" className="grid-card-table border">
                                <Productlisttable
                                    search={search}
                                    category={category}
                                    status={status}
                                    stock={stock}
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

export default ProductsList;