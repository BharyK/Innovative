import { Fragment, useEffect, useState, type SetStateAction } from "react";
import { Card, Col, Collapse, Form, Pagination, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addCart, addToWishList } from "../../../../shared/common/ui/redux/action";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import { Link } from "react-router-dom";
import SpkProducts from "../../../../shared/@spk-reusable-components/reusable-apps/spk-productscard";
import LabeledTwoThumbs1 from "../../../../shared/data/apps/jobs/searchcandidatedate";
import type { ProductInfoType } from "../../../../shared/data/apps/ecommerce/productsdata";


const Products = () => {
    const { data } = useSelector((state: { product: ProductInfoType[] }) => state.product)
    const [search, setSearch] = useState('')
    const [filteredData, setFiltredData] = useState(data)
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleSearch = () => {
        const updateSearch = data.filter((item: ProductInfoType) => item.title.toLowerCase().includes(search.toLowerCase()))
        setFiltredData(updateSearch)
    }

    useEffect(() => {
        const updateSearch = data.filter((item: ProductInfoType) => (item.title.toLowerCase().includes(search.toLowerCase())))
        setFiltredData(updateSearch)
    }, [search])

    const filterSetSuggestion = data.filter((item: ProductInfoType) => item.title.toLowerCase().includes(search.toLowerCase()));
    const suggestions = filterSetSuggestion.map((item: ProductInfoType) => item.title)

    const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value)
        setShowSuggestions(value.length > 0)
    }

    const handleSuggestionCLick = (suggestion: SetStateAction<string>) => {
        setSearch(suggestion);
        setShowSuggestions(false);
    }
    const dispatch = useDispatch()

    useEffect(() => {
        setFiltredData(data)
    }, [data])

    const handleWishList = (item: ProductInfoType) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added in wishList",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch(addToWishList(item))
    }

    //  add to cart
    const handleAddToCart = (item: ProductInfoType) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to Cart",
            showConfirmButton: false,
            timer: 1500
        });
        dispatch(addCart(item))
    }

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Products" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Products" activepage="Products" />
            {/* <!-- Page Header Close --> */}


            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
                                <h6 className="mb-0"> Showing
                                    <span className="fw-semibold text-primary"> 87,949</span> products found.
                                </h6>
                                <div className="custom-form-group mb-2 w-sm-50 w-100 mb-sm-0">
                                    <Form.Control type="text" className="form-control form-control-md py-2" placeholder="Search Product.."
                                        aria-label="Search Hear.." value={search} onChange={handleToChange} />
                                    {showSuggestions && (
                                        <ul className="suggestions-list w-100 ">
                                            {suggestions.length > 0 ? (
                                                suggestions.map((suggestion: SetStateAction<string>, index: number) => (
                                                    <li key={index} onClick={() => handleSuggestionCLick(suggestion)}>
                                                        {suggestion}
                                                    </li>
                                                )).slice(0, 4)
                                            ) : (
                                                ""
                                            )}
                                        </ul>
                                    )}
                                    <SpkButton Buttonvariant="primary" Size="sm" Customclass="btn border-0 custom-form-btn px-3" Buttontype="button" onClickfunc={handleSearch}>
                                        Search
                                    </SpkButton>
                                </div>
                                <div className="text-sm-end text-start">
                                    <SpkDropdown Togglevariant="" Customtoggleclass="btn btn-outline-light border dropdown-toggle" iconPosition="before" Icon={true} IconClass="ti ti-sort-descending-2 me-1 mx-1" Toggletext="Sort By">
                                        <li><Link className="dropdown-item" to="#!">Date
                                            Published</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Most
                                            Relevant</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Price Low to
                                            High</Link></li>
                                        <li><Link className="dropdown-item" to="#!">Price High to
                                            Low</Link></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={9}>
                    <Row>
                        {filteredData.map((idx) => (
                            <Col xxl={3} lg={6} xl={4} sm={6} className="" key={idx.id}>
                                <SpkProducts
                                    imgclass={idx.imgclass}
                                    color={idx.color}
                                    discount1={idx.discount1}
                                    discount={idx.discount}
                                    productPicture={idx.productpicture}
                                    title={idx.title}
                                    status={idx.status}
                                    price={idx.price}
                                    idx={`${import.meta.env.BASE_URL}apps/ecommerce/product-details`}
                                    onclick={() => handleWishList(idx)}
                                    cartClick={() => handleAddToCart(idx)}

                                />
                            </Col>
                        ))}
                        <Col md={12}>
                            {/* <!-- Start::pagination --> */}
                            <nav aria-label="..." className="">
                                <Pagination className="pagination justify-content-end mb-4">
                                    <Pagination.Item disabled>Previous</Pagination.Item>
                                    <Pagination.Item>1</Pagination.Item>
                                    <Pagination.Item active>2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item>Next</Pagination.Item>
                                </Pagination>
                            </nav>
                            {/* <!-- End::pagination --> */}
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title className=""> Filter </Card.Title>
                            <div className="ms-auto">
                                <Link to="#!" className="btn btn-sm btn-secondary-light">Clear All</Link> </div>
                        </Card.Header>
                        <div className="card-body pt-0">
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-semibold mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="c-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-1"> Home Appliances
                                            <span className="fs-11 fw-normal text-muted ms-1 d-inline-block"> (5,894)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="c-2" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-2"> Fashion &amp;
                                            Accessories <span className="fs-11 fw-normal text-muted ms-1 d-inline-block"> (3,120)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="c-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-3"> Furniture &amp; Decor
                                            <span className="fs-11 fw-normal text-muted ms-1 d-inline-block"> (9,432)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="c-4" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-4"> Beauty &amp; Wellness
                                            <span className="fs-11 fw-normal text-muted ms-1 d-inline-block"> (6,589)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="c-5" />
                                        <label className="form-check-label text-wrap pe-3" htmlFor="c-5"> Outdoor &amp; Sports
                                            Equipment <span className="fs-11 fw-normal text-muted ms-1 d-inline-block">(4,786)</span>
                                        </label>
                                    </div>
                                    <Collapse in={open}>
                                        <div id="category-more">
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="c-6" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="c-6"> Books &amp;
                                                    Stationery
                                                    <span className="fs-11 fw-normal text-muted ms-1 d-inline-block">(3,512)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="c-7" />
                                                <label className="form-check-label text-wrap pe-3" htmlFor="c-7"> Food &amp;
                                                    Beverages
                                                    <span className="fs-11 fw-normal text-muted ms-1 d-inline-block">(1,987)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link onClick={() => setOpen(!open)} className="ecommerce-more-link mt-3 d-block collapsed" data-bs-toggle="collapse" to="#category-more" role="button" aria-expanded={open} aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-semibold mb-0">Price Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 />
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-semibold mb-0">Colors</h6>
                                <div className="py-3 pb-0">
                                    <p className="mb-0 d-flex align-items-center flex-wrap gap-1">
                                        <Link className="color-1 product-colors flex-shrink-0" to="#!">
                                            <i className="ri-checkbox-blank-circle-fill"></i>
                                        </Link>
                                        <Link className="color-2 product-colors flex-shrink-0" to="#!">
                                            <i className="ri-checkbox-blank-circle-fill"></i>
                                        </Link>
                                        <Link className="color-3 product-colors flex-shrink-0" to="#!">
                                            <i className="ri-checkbox-blank-circle-fill"></i>
                                        </Link>
                                        <Link className="color-4 product-colors flex-shrink-0 selected"
                                            to="#!"> <i className="ri-checkbox-blank-circle-fill"></i>
                                        </Link>
                                        <Link className="color-5 product-colors flex-shrink-0"
                                            to="#!"> <i className="ri-checkbox-blank-circle-fill"></i>
                                        </Link> </p>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed mb-2 rounded">
                                <h6 className="fw-semibold mb-0">Brand</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="j-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="j-1"> Zenith
                                            <span className="fs-11 fw-normal text-muted ms-1">(1,223)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="j-2" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="j-2"> FlexWear
                                            <span className="fs-11 fw-normal text-muted ms-1">(3,145)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="j-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="j-3"> OmegaTech
                                            <span className="fs-11 fw-normal text-muted ms-1">(895)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="j-4" />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="j-4"> ProActive
                                            <span className="fs-11 fw-normal text-muted ms-1">(512)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-0 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="j-5" />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="j-5"> Griffin &amp; Co.
                                            <span className="fs-11 fw-normal text-muted ms-1">(1,894)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded">
                                <h6 className="fw-semibold mb-0">Sizes</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="e-1" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="e-1"> Petite (P)
                                            <span className="fs-11 fw-normal text-muted ms-1">(432)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="e-2" />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="e-2"> Small (S)
                                            <span className="fs-11 fw-normal text-muted ms-1">(1,219)</span>
                                        </label>
                                    </div>
                                    <div className="form-check mb-2 p-0">
                                        <input className="form-check-input float-end" type="checkbox" id="e-3" defaultChecked />
                                        <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="e-3"> Regular Medium (M)
                                            <span className="fs-11 fw-normal text-muted ms-1">(10,842)</span>
                                        </label>
                                    </div>
                                    <Collapse in={open1}>
                                        <div id="sizes-more">
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="e-4" defaultChecked />
                                                <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="e-4"> Large (L)
                                                    <span className="fs-11 fw-normal text-muted ms-1">(897)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="s-5" />
                                                <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="s-5"> Extra Large (XL)
                                                    <span className="fs-11 fw-normal text-muted ms-1">(1,025)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-2 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="s-6" />
                                                <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="s-6"> XXL
                                                    <span className="fs-11 fw-normal text-muted ms-1">(156)</span>
                                                </label>
                                            </div>
                                            <div className="form-check mb-0 p-0">
                                                <input className="form-check-input float-end" type="checkbox" id="s-7" />
                                                <label className="form-check-label text-wrap pe-3 d-inline-flex" htmlFor="s-7"> XXXL
                                                    <span className="fs-11 fw-normal text-muted ms-1">(402)</span>
                                                </label>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link className="ecommerce-more-link mt-3 d-block collapsed" onClick={() => setOpen1(!open1)} data-bs-toggle="collapse" to="#sizes-more" role="button" aria-expanded={open1} aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Products;