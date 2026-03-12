import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Offersdata, Productdetailsswiper } from "../../../../shared/data/apps/ecommerce/productdetailsdata";
import SpkSwiperJs from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import parse from 'html-react-parser';
import png2 from '../../../../assets/images/ecommerce/png/2.png';
import png12 from '../../../../assets/images/ecommerce/png/12.png';
import png14 from '../../../../assets/images/ecommerce/png/14.png';
import png17 from '../../../../assets/images/ecommerce/png/17.png';
import png20 from '../../../../assets/images/ecommerce/png/20.png';
import png21 from '../../../../assets/images/ecommerce/png/21.png';
import png22 from '../../../../assets/images/ecommerce/png/22.png';
import png23 from '../../../../assets/images/ecommerce/png/23.png';
import face1 from '../../../../assets/images/faces/1.jpg';
import face2 from '../../../../assets/images/faces/2.jpg';
import type { ProductInfoType } from "../../../../shared/data/apps/ecommerce/productsdata";

// Define TypeScript interfaces for props and state
interface Product {
    id: number;
    productpicture: string;
    subImg: { sImg: string }[];
    type: string;
}

const ProductDetails = () => {
    const [searchParams] = useSearchParams();
    const { data } = useSelector((state: { product: ProductInfoType[] }) => state.product); // Ensure this selector type is correct

    const id = searchParams.get("id");
    const parsedId = id ? parseInt(id, 10) : null;
    const productInfo = parsedId ? data.find((product: Product) => product.id === parsedId) : null;

    // Initialize state
    const [currentImg, setCurrentImg] = useState<string>(productInfo?.productpicture || "");
    const [thumbImg, setThumbImg] = useState<string>(png20);
    const [_activeSlide, setActiveSlide] = useState<number>(0);

    const imageList = [
        { img: png20, color: "primary" },
        { img: png21, color: "secondary" },
        { img: png22, color: "danger" },
        { img: png23, color: "warning" }
    ];

    // Handle slide changes
    const handleSlideChange1 = (swiper: SwiperClass) => {
        const activeIndex = swiper.activeIndex;
        setActiveSlide(activeIndex);
        setCurrentImg(productInfo?.subImg[activeIndex]?.sImg || "");
    };

    const handleSlideChange = (swiper: SwiperClass) => {
        setActiveSlide(swiper.activeIndex);
        setThumbImg(imageList[swiper.activeIndex].img);
    };

    const breakpoints2 = {
        320: { slidesPerView: 1, spaceBetween: 10 },
        500: { slidesPerView: 2, spaceBetween: 10 },
        700: { slidesPerView: 3, spaceBetween: 20 },
        1400: { slidesPerView: 5, spaceBetween: 20 }
    };

    // Handle quantity increment/decrement
    const dec = (e: React.MouseEvent<HTMLElement>) => {
        const input = (e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement | null);
        if (input) {
            const val = parseInt(input.value || "0", 10);
            input.value = String(Math.max(0, val - 1));
        }
    };

    const inc = (e: React.MouseEvent<HTMLElement>) => {
        const input = (e.currentTarget.parentElement?.querySelector("input") as HTMLInputElement | null);
        if (input) {
            const val = parseInt(input.value || "0", 10);
            input.value = String(val + 1);
        }
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Productdetails" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Product Details" activepage="Product Details" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                {id && productInfo ? (
                    <Col xxl={4} xl={5}>
                        <div className="bg-white p-3 mb-4 rounded position-relative">
                            <div className="ribbon ribbon-primary ribbon-top-left"><span>30% Off</span></div>
                            <Row>
                                <Col sm={12} className="col-12">
                                    <Swiper modules={[Thumbs, Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation={true}
                                        onSlideChange={handleSlideChange1} className="swiper-preview-details product-details-page">
                                        <SwiperSlide className="custom-width" id="img-container">
                                            <img src={currentImg} className={`img-fluid bg-primary-transparent primary-dash-border`} alt="img" />
                                        </SwiperSlide>
                                        {productInfo.subImg.map((img, index: number) => (
                                            <SwiperSlide key={index} className={`swiper-slide custom-width`}>
                                                <img
                                                    className={`img-fluid bg-${img.imgclass}-transparent ${img.imgclass}-dash-border`}
                                                    src={img.sImg}
                                                    alt="product-thumbnail"
                                                    onClick={() => setCurrentImg(img.sImg)}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Col>
                                <Col sm={12} className="col-12">
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        navigation={false}
                                        loop={false}
                                        className='swiper swiper-view-details mt-3'
                                    >
                                        {productInfo.subImg.map((img, index: number) => (
                                            <SwiperSlide key={index} className={`swiper-slide w-sm-100 p-2 ${currentImg === img.sImg ? 'swiper-slide-thumb-active' : ''} `}>
                                                <img
                                                    className={`img-fluid ${img.sImgColor} p-1`}
                                                    src={img.sImg}
                                                    alt="product-thumbnail"
                                                    onClick={
                                                        () => {
                                                            setCurrentImg(img.sImg)
                                                            setActiveSlide(index);
                                                        }
                                                    }
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                ) : (
                    <Col xxl={4} xl={5}>
                        <div className="bg-white p-3 mb-4 rounded position-relative">
                            <div className="ribbon ribbon-primary ribbon-top-left"><span>30% Off</span></div>
                            <Row>
                                <Col sm={12} className="col-12">
                                    <Swiper modules={[Thumbs, Navigation]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        navigation={true}
                                        loop={false}
                                        onSlideChange={handleSlideChange} className="swiper-preview-details product-details-page">
                                        <SwiperSlide className="custom-width" id="img-container">
                                            <img className={`img-fluid bg-primary-transparent primary-dash-border`}
                                                src={thumbImg || png20} alt="img" />
                                        </SwiperSlide>
                                        <SwiperSlide className="image-container custom-width">
                                            <img className="img-fluid bg-secondary-transparent secondary-dash-border"
                                                src={png21} alt="img" />
                                        </SwiperSlide>
                                        <SwiperSlide className=" image-container custom-width">
                                            <img className="img-fluid bg-danger-transparent danger-dash-border"
                                                src={png22} alt="img" />
                                        </SwiperSlide>
                                        <SwiperSlide className=" image-container custom-width">
                                            <img className="img-fluid bg-warning-transparent warning-dash-border"
                                                src={png23} alt="img" />
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>
                                <Col sm={12} className="col-12">
                                    <Swiper
                                        modules={[Navigation]}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        navigation={false}
                                        loop={false}
                                        className='swiper swiper-view-details mt-3'
                                    >
                                        {imageList.map((image, index) => (
                                            <SwiperSlide
                                                key={`${image.img}-${thumbImg}`}
                                                className={`w-sm-100 p-2 ${thumbImg === image.img ? 'swiper-slide-thumb-active' : ''}`}
                                            >
                                                <img
                                                    className={`img-fluid p-1 `}
                                                    src={image.img}
                                                    alt={`img-${index}`}
                                                    onClick={() => {
                                                        setThumbImg(image.img);
                                                        setActiveSlide(index);
                                                    }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                )}
                <Col xxl={8} xl={7} className="">
                    <Card className="custom-card">
                        <Card.Body>
                            <div>
                                <p className="fs-20 fw-semibold mb-3">Ardentia Luxe - Premium Knit Ladies Stylish Olive Green Sweater.</p>
                                <p className="fs-16 mb-3">
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star text-warning"></i>
                                    <i className="bx bxs-star-half text-warning"></i>
                                    <span className="fw-medium ms-1 fs-13">4.7
                                        <Link className="text-muted ms-2" to="#!">(2.5k Reviews)</Link>
                                    </span>
                                </p>
                                <Row className="gy-3 gy-xl-0">
                                    <div className="col-xl-7"> <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/wishlist`}
                                        className="btn btn-outline-secondary btn-w-lg me-2 mb-3">
                                        <i className="ri-heart-line fs-16 align-middle lh-1 mb-1"></i> Add to
                                        Wishlist</Link>
                                        <div className="mb-1"><span className="text-pink fw-semibold">Save Upto 30%
                                            Off</span> on M.R.P price</div>
                                        <div className="d-flex gap-3 align-items-center flex-wrap mb-1">
                                            <h2 className="fw-semibold">$578</h2>
                                            <div className="mb-0 text-muted fs-12">
                                                <p className="mb-0"> <s>$879</s></p>
                                            </div>
                                        </div>
                                        <div className="mb-3 text-muted">Sale Ends in <span
                                            className="text-danger fw-semibold d-inline-flex align-items-center">: 3 Days Hurry Up!!!</span> </div>
                                        <div className="mb-3">
                                            <p className="fs-15 fw-semibold mb-1">Description :</p>
                                            <p className="text-muted mb-0 fs-13"> Experience the comfort of the Ardentia Luxe Knitwear Collection, crafted with premium cotton blend fabric, soft texture, and vibrant color options. Perfect for both casual and semi-formal occasions. </p>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center mb-3">
                                            <p
                                                className="mb-1 text-primary py-1 px-2 bg-primary-transparent rounded-pill fs-12">
                                                <i
                                                    className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i>
                                                Instock
                                            </p>
                                            <p
                                                className="mb-1 text-primary py-1 px-2 bg-primary-transparent rounded-pill fs-12">
                                                <i
                                                    className="ri-checkbox-circle-fill me-1 align-middle d-inline-block"></i>
                                                1-Year Warranty
                                            </p>
                                        </div>
                                        <div
                                            className="d-flex gap-4 align-items-center mb-3 justify-content-between flex-wrap">
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <p className="fs-15 fw-semibold mb-1">Product Material :</p>
                                                <div className="btn btn-light">Cotton</div>
                                                <div className="btn btn-light">Leather</div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-5 align-items-center mb-4">
                                            <div className="d-flex gap-4 align-items-center">
                                                <p className="fs-15 fw-semibold mb-1">Quantity :</p>
                                                <div className="product-quantity-container ecommerce-page-quantity">
                                                    <div
                                                        className="input-group flex-nowrap rounded-pill cart-input-group">
                                                        <SpkButton Buttonvariant="" onClickfunc={dec} Buttontype="button" Buttonlabel="button" Customclass="btn btn-icon btn-wave btn-sm btn-primary product-quantity-minus waves-effect waves-light">
                                                            <i className="ri-subtract-line"></i>
                                                        </SpkButton>
                                                        <Form.Control type="text" className="form-control text-center p-0" aria-label="quantity" defaultValue="1" />
                                                        <SpkButton Buttonvariant="" onClickfunc={inc} Buttontype="button" Buttonlabel="button" Customclass="btn btn-icon btn-wave btn-sm btn-primary product-quantity-plus waves-effect waves-light">
                                                            <i className="ri-add-line"></i>
                                                        </SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3 align-items-center flex-shrink-0 flex-wrap mb-4">
                                            <p className="fs-15 fw-semibold mb-0">Colors :</p>
                                            <p className="mb-0 d-flex align-items-center flex-wrap">
                                                <Link className="color-1 product-colors flex-shrink-0 selected" to="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link className="color-2 product-colors flex-shrink-0" to="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link className="color-3 product-colors flex-shrink-0" to="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link className="color-4 product-colors flex-shrink-0" to="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                                <Link className="color-5 product-colors flex-shrink-0" to="#!">
                                                    <i className="ri-checkbox-blank-circle-fill"></i>
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="d-flex gap-2 align-items-center flex-wrap">
                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-secondary btn-w-lg">
                                                <i className="bx bx-credit-card fs-16 align-middle"></i> Buy Now
                                            </Link>
                                            <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`} className="btn btn-primary btn-w-lg">
                                                <i className="bx bx-cart-add fs-16 align-middle"></i> Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                    <Col xl={5}>
                                        <div className="p-xl-3 text-center">
                                            <div
                                                className="d-flex gap-1 justify-content-between flex-wrap mb-3 align-items-center p-3 bg-light rounded">
                                                <div className="fw-medium">Get a Coupon :</div>
                                                <span className="badge bg-danger fs-11 ms-3">
                                                    <i className="ri-coupon-2-line me-1 align-middle d-inline-block"></i>
                                                    Coupon
                                                </span>
                                            </div>
                                            <div className="list-group list-group-flush border rounded mb-3">
                                                <div className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div className="text-muted">Free Shipping anywhere</div>
                                                    <div className="lh-1 text-danger fs-14">
                                                        <i className="ri-shake-hands-line"></i>
                                                    </div>
                                                </div>
                                                <div
                                                    className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div className="text-muted">100% secure payments</div>
                                                    <div className="lh-1 fs-14 text-primary">
                                                        <i className="ri-secure-payment-line"></i>
                                                    </div>
                                                </div>
                                                <div
                                                    className="list-group-item d-flex align-items-center justify-content-between">
                                                    <div className="text-muted">5-star rated product in good condition
                                                    </div>
                                                    <div className="lh-1 fs-14 text-warning">
                                                        <i className="ri-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="p-3 border border-dashed rounded border-secondary border-opacity-25">
                                                <h3 className="mb-1 text-secondary d-inline-flex align-items-end gap-2">30% Off
                                                    <span className="fs-13 text-danger"> Special off on cauals</span>
                                                </h3>
                                                <div className="text-muted fs-12 mb-3">check below some of the offers on
                                                </div>
                                                <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                                    <span className="avatar avatar-xl p-1 bg-light">
                                                        <img src={png14} alt="" />
                                                    </span>
                                                    <span className="avatar avatar-xl p-1 bg-light">
                                                        <img src={png17} alt="" />
                                                    </span>
                                                    <span className="avatar avatar-xl p-1 bg-light">
                                                        <img src={png12} alt="" />
                                                    </span>
                                                    <span className="avatar avatar-xl p-1 bg-light">
                                                        <img src={png2} alt="" />
                                                    </span>
                                                </div>
                                                <Link to="#!"
                                                    className="btn btn-secondary d-grid"> Check More Offers Now
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={12} className="">
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="first">
                            <Card.Header className="p-0">
                                <Nav className="nav-tabs product-details-tab scaleX mb-0 d-flex p-3 w-100 gap-2" id="myTab1"
                                    role="tablist">
                                    <Nav.Item className="me-0" role="presentation">
                                        <Nav.Link eventKey="first" className="nav-link px-3 py-2 me-3 bg-primary-transparent"
                                            id="allorders" data-bs-toggle="tab" data-bs-target="#allorders-pane"
                                            type="button" role="tab" aria-controls="allorders-pane"
                                            aria-selected="true">Product Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item me-0" role="presentation">
                                        <Nav.Link eventKey="second" className="nav-link px-3 py-2 bg-primary-transparent me-3" id="pending"
                                            data-bs-toggle="tab" data-bs-target="#pending-pane" type="button" role="tab"
                                            aria-controls="pending-pane" aria-selected="false" tabIndex={-1}>Key
                                            Features</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item me-0" role="presentation">
                                        <Nav.Link eventKey="third" className="nav-link px-3 py-2 bg-primary-transparent" id="fabric"
                                            data-bs-toggle="tab" data-bs-target="#fabric-pane" type="button" role="tab"
                                            aria-controls="fabric-pane" aria-selected="false"
                                            tabIndex={-1}>Fabric</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content className="p-0" id="myTabContent">
                                    <Tab.Pane eventKey="first" className="p-0 border-0 show" id="allorders-pane" role="tabpanel"
                                        aria-labelledby="allorders" tabIndex={0}>
                                        <p className="mb-3">
                                            ComfyChic sweaters are expertly crafted using premium materials such as
                                            cashmere, merino wool, and organic cotton blends.
                                            These fabrics are selected for their exceptional softness, durability, and
                                            ability to keep you warm without compromising on style.These fabrics are selected for their exceptional softness, durability, and
                                            ability to keep you warm without compromising on style.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="table text-nowrap table-bordered product-details-table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold"> Brand </th>
                                                        <td>Belgian Linen Sectional</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold"> Weight </th>
                                                        <td> 150 KG </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold"> Quantity </th>
                                                        <td> 1 Set </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold"> Cloth </th>
                                                        <td> Cotton </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="fw-semibold"> Additional Features </th>
                                                        <td> pillows, slipcovers for easy maintenance</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="p-0 border-0" id="pending-pane" role="tabpanel"
                                        aria-labelledby="pending" tabIndex={0}>
                                        <ul className="mb-0 ps-0 product-feature-list">
                                            <li className="mb-3"><span className="fw-semibold">Design : </span> Sleek and
                                                sophisticated design crafted from premium stainless steel for a
                                                luxurious and durable finish.</li>
                                            <li className="mb-3"><span className="fw-semibold">Water Resistance : </span> Up to 50
                                                meters of water resistance, making it perfect for daily wear and light
                                                water activities.</li>
                                            <li className="mb-3"><span className="fw-semibold">Movement : </span> Precision quartz
                                                movement ensures accurate timekeeping with minimal maintenance.</li>
                                            <li className="mb-3"><span className="fw-semibold">Strap : </span> Stainless steel
                                                wrist chain with a secure clasp for a comfortable yet elegant fit.</li>
                                            <li className="mb-3"><span className="fw-semibold">Warranty : </span> Backed by a
                                                2-year international warranty, offering peace of mind for your purchase.
                                            </li>
                                            <li className="mb-3"><span className="fw-semibold">Dial : </span> Classic round dial
                                                with minimalistic markers for a timeless and refined look.</li>
                                            <li className="mb-3"><span className="fw-semibold">Luminous Hands : </span> Features
                                                glow-in-the-dark hands for easy readability, even in low-light
                                                conditions.</li>
                                            <li className="mb-0"><span className="fw-semibold">Style : </span> Perfectly suited
                                                for both formal occasions and everyday wear, elevating your fashion game
                                                effortlessly.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="p-0 border-0" id="fabric-pane" role="tabpanel"
                                        aria-labelledby="fabric" tabIndex={0}>
                                        <p>Crafted from high-quality, durable fabric, this handbag offers both style and
                                            functionality. The smooth texture ensures a luxurious feel, while the sturdy
                                            construction provides long-lasting use.</p>
                                        <p>Whether it's a sophisticated leather-like finish or a soft yet resilient
                                            woven material, this bag is designed to complement your unique style. With a
                                            perfect blend of elegance and practicality, it’s an essential accessory for
                                            every modern woman.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
                <Col xxl={4} xl={8} className="">
                    <Card className="custom-card">
                        <Card.Body className="p-0">
                            <div>
                                <div className="d-flex gap-2 justify-content-between flex-wrap p-4 border-bottom border-block-end-dashed">
                                    <div className="flex-fill">
                                        <div className="mb-3 fw-semibold fs-16">Rating</div>
                                        <div className="mb-2 fw-medium">
                                            <span className="me-1">5 Star</span>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                        </div>
                                        <div className="mb-2 fw-medium">
                                            <span className="me-1">4 Star</span>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star text-warning"></i>
                                        </div>
                                        <div className="mb-2 fw-medium">
                                            <span className="me-1">3 Star</span>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning"></i>
                                        </div>
                                        <div className="mb-2 fw-medium">
                                            <span className="me-1">2 Star</span>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning"></i>
                                        </div>
                                        <div className="mb-0 fw-medium">
                                            <span className="me-1">1 Star</span>
                                            <i className="bi bi-star-fill text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning me-1"></i>
                                            <i className="bi bi-star text-warning"></i>
                                        </div>
                                    </div>
                                    <div className="text-center bg-light rounded p-3 pt-2 flex-fill">
                                        <div className="fs-2"> 4.7 </div>
                                        <span className="text-muted fs-13">(out of 5)</span>
                                        <p className="mb-3 mt-2">
                                            <i className="bi bi-star-fill me-1 text-warning"></i>
                                            <i className="bi bi-star-fill me-1 text-warning"></i>
                                            <i className="bi bi-star-fill me-1 text-warning"></i>
                                            <i className="bi bi-star-fill me-1 text-warning"></i>
                                            <i className="bi bi-star-half text-warning"></i>
                                        </p>
                                        <Link className="btn btn-secondary btn-sm w-100" to="#!">Leave Us a Review</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper swiper-basic productRating-swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="p-4">
                                            <div className="d-flex gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2 flex-shrink-0">
                                                    <img src={face1} alt="" />
                                                </span>
                                                <div>
                                                    <div className="mb-3">
                                                        <p className="fw-semibold mb-0 fs-14">Elegance and Durability
                                                            Combined!</p>
                                                        <span>Product Manager</span>
                                                        <p className="mb-0 fs-13 text-muted mt-2">The RoyaliX Elegance Series
                                                            watch is a perfect blend of style and
                                                            durability. The stainless steel design is
                                                            stunning, and it's comfortable for daily wear.
                                                            The water resistance is a great!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ms-auto mt-sm-0 mt-2 text-end d-flex justify-content-between">
                                                <span className="text-muted fs-12">(3rd
                                                    Mar,2024)</span>
                                                <div className="fs-11 fw-normal text-nowrap"> <i
                                                    className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    4.8
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="p-4">
                                            <div className="d-flex gap-2">
                                                <span className="avatar avatar-md avatar-rounded me-2 flex-shrink-0">
                                                    <img src={face2} alt="" />
                                                </span>
                                                <div>
                                                    <div className="mb-3">
                                                        <p className="fw-semibold mb-1 fs-14">Elegance and Durability
                                                            Combined!</p>
                                                        <span>Ui Developer</span>
                                                        <p className="mb-0 fs-13 text-muted">The RoyaliX Elegance Series
                                                            watch is a perfect blend of style and
                                                            durability. The stainless steel design is
                                                            stunning, and it's comfortable for daily wear.
                                                            The water resistance is a great!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ms-auto mt-sm-0 mt-2 text-end d-flex justify-content-between">
                                                <span className="text-muted fs-12">(12th
                                                    Jun,2024)</span>
                                                <div className="fs-11 fw-normal text-nowrap"> <i
                                                    className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    <i
                                                        className="bi bi-star-fill text-warning lh-1 me-1 fw-normal align-middle"></i>
                                                    3.2
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} xl={4} className="">
                    <Row>
                        {Offersdata.map((idx) => (
                            <Col xl={12} md={6} key={idx.id}>
                                <Card className="main-custom-card custom-card">
                                    <Card.Body>
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className={`avatar avatar-md ${idx.color} me-2`}>
                                                    {parse(idx.svg)}
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-0 fw-semibold fs-15">{idx.title}</p>
                                                <p className="mb-0 fs-13 text-muted">{idx.text}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <div className="h6 fw-medium mb-3">Related Products :</div>
                <div className="">
                    <SpkSwiperJs slides={Productdetailsswiper} breakpoint={breakpoints2} autoplay={true} loop={true} className="swiper-basic crypto-swiper" mainClass="" spaceBetween={20} slidesPerView={5} />
                </div>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default ProductDetails;