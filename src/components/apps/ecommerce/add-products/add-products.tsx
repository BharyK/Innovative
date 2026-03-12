import { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { FilePond } from "react-filepond";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Link } from "react-router-dom";
import SpkSunEditor from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import SpkDatepickr from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import { avaialabilityTagOptions, brandTagOptions, categoryTagOption, colorTagOptions, genderTagOption, productTagOptions, PublishedStatusTagOptions, sizeTagOptions, subCategoryTagOptions } from "../../../../shared/data/apps/ecommerce/editproductsdata";
import png1 from '../../../../assets/images/ecommerce/png/1.png';
import png4 from '../../../../assets/images/ecommerce/png/4.png';
import png12 from '../../../../assets/images/ecommerce/png/12.png';
import png16 from '../../../../assets/images/ecommerce/png/16.png';

const AddProduct = () => {

    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);

    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    const [updateImages, setUpdateImages] = useState([
        {
            id: 1,
            imageUrl: png1,
            altText: "",
            badgeClass: "bg-danger",
            badgeIcon: "fe fe-x"
        },
        {
            id: 2,
            imageUrl: png4,
            altText: "",
            badgeClass: "bg-danger",
            badgeIcon: "fe fe-x"
        },
        {
            id: 3,
            imageUrl: png12,
            altText: "",
            badgeClass: "bg-danger",
            badgeIcon: "fe fe-x"
        },
        {
            id: 4,
            imageUrl: png16,
            altText: "",
            badgeClass: "bg-danger",
            badgeIcon: "fe fe-x"
        }
    ])

    const deleteFunction = (id: number) => {
        const updatedAvatars = updateImages.filter(images => images.id !== id);
        setUpdateImages(updatedAvatars);
    }
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Ecommerce-Addproducts" />

            <Pageheader title="Apps" subtitle="Ecommerce" currentpage="Add Product" activepage="Add Product" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card p-0">
                        <Card.Header className="border-bottom justify-content-between">
                            <Card.Title>
                                Add Product
                            </Card.Title>
                            <SpkButton Buttonvariant="secondary" Customclass="btn">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                        </Card.Header>
                        <Card.Body className="py-0">
                            <Row>
                                <Tab.Container defaultActiveKey="first">
                                    <Col xxl={3} xl={4} className="">
                                        <Nav as="ul" className="nav flex-column nav-pills add-product-details-nav pt-3" role="tablist">
                                            <Nav.Item as="li" className="nav-item m-1" role="presentation">
                                                <Nav.Link eventKey="first" className="d-inline-flex w-100 mb-3 gap-2 align-items-center"
                                                    id="account" data-bs-toggle="tab" data-bs-target="#account-pane"
                                                    href="#personal-info" aria-selected="true" role="tab">
                                                    <span className="avatar avatar-lg border avatar-rounded bg-white">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path
                                                                    d="M8 16h12V4H8v12zm2-10h8v2h-8V6zm0 3h8v2h-8V9zm0 3h4v2h-4v-2z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2zM6 4v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2zm14 12H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <p className="mb-1 fs-15 fw-semibold">Basic Information</p>
                                                        <span className="text-muted fs-13">Add Basic Product Details</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item m-1" role="presentation">
                                                <Nav.Link eventKey="second" className="d-inline-flex w-100 gap-2 mb-3" id="images-tab"
                                                    data-bs-toggle="tab" data-bs-target="#images-tab-pane" role="tab"
                                                    aria-controls="images-tab-pane" href="#personal-info"
                                                    aria-selected="false" tabIndex={-1}>
                                                    <span className="avatar avatar-lg border avatar-rounded bg-white">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path d="M10.21 16.83l-1.96-2.36L5.5 18h11l-3.54-4.71z" />
                                                                <path
                                                                    d="M16.5 18h-11l2.75-3.53 1.96 2.36 2.75-3.54L16.5 18zM17 7h-3V6H4v14h14V10h-1V7z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M20 4V1h-2v3h-3v2h3v2.99h2V6h3V4zm-2 16H4V6h10V4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2v10z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <p className="mb-1 fs-15 fw-semibold">Product Images</p>
                                                        <span className="text-muted fs-13">Add Product Images</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item m-1" role="presentation">
                                                <Nav.Link eventKey="third" className="d-inline-flex w-100 gap-2 mb-3" id="notification-tab"
                                                    data-bs-toggle="tab" data-bs-target="#notification-tab-pane" role="tab"
                                                    aria-controls="notification-tab-pane" href="#personal-info"
                                                    aria-selected="false" tabIndex={-1}>
                                                    <span className="avatar avatar-lg border avatar-rounded bg-white">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path
                                                                    d="M13 17c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6V5H5v14h14v-2h-6z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.38-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                                                <circle cx="16" cy="12" r="1.5" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <p className="mb-1 fs-15 fw-semibold">Pricing</p>
                                                        <span className="text-muted fs-13">Add Product Pricing Details</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item m-1" role="presentation">
                                                <Nav.Link eventKey="fourth" className="d-inline-flex w-100 mb-3 gap-2" id="security-tab"
                                                    data-bs-toggle="tab" data-bs-target="#security-tab-pane" role="tab"
                                                    aria-controls="security-tab-pane" aria-selected="false"
                                                    href="#personal-info" tabIndex={-1}>
                                                    <span className="avatar avatar-lg border avatar-rounded bg-white">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path d="M6.26 9L12 13.47 17.74 9 12 4.53z" opacity=".8"
                                                                    fill="#fff" />
                                                                <path
                                                                    d="M19.37 12.8l-7.38 5.74-7.37-5.73L3 14.07l9 7 9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9l-9-7zm0 11.47L6.26 9 12 4.53 17.74 9 12 13.47z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <p className="mb-1 fs-15 fw-semibold">Specification</p>
                                                        <span className="text-muted fs-13">Add Product Specification</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li" className="nav-item m-1" role="presentation">
                                                <Nav.Link eventKey="fifth" className="d-inline-flex w-100 mb-0 gap-2" id="otherinfo-tab"
                                                    data-bs-toggle="tab" data-bs-target="#otherinfo-tab-pane" role="tab"
                                                    aria-controls="otherinfo-tab-pane" aria-selected="false"
                                                    href="#other-info" tabIndex={-1}> <span
                                                        className="avatar avatar-lg border avatar-rounded bg-white">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path
                                                                    d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <div>
                                                        <p className="mb-1 fs-15 fw-semibold">Other Information</p>
                                                        <span className="text-muted fs-13">Add Any Other Information</span>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col xxl={9} xl={8} className="add-product-content">
                                        <Card className="custom-card shadow-none">
                                            <Tab.Content className="p-3 border-bottom border-block-end-dashed tab-content">
                                                <Tab.Pane eventKey="first" className="show p-0 border-0" id="account-pane"
                                                    role="tabpanel" aria-labelledby="account" tabIndex={0}>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                                        <div className="fw-semibold d-block fs-15">General Information :</div>
                                                    </div>
                                                    <Row className="gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="product-name-add" className="">Product
                                                                Name</Form.Label>
                                                            <Form.Control type="text" className="" id="product-name-add"
                                                                placeholder="Name" />
                                                            <Form.Label htmlFor="product-name-add"
                                                                className="form-label mt-1 fs-12 text-muted mb-0">*Product
                                                                Name should not exceed 30 characters</Form.Label>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-size-add" className="">Size</Form.Label>
                                                            <SpkSelect name="colors" option={sizeTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-brand-add" className="">Brand</Form.Label>
                                                            <SpkSelect name="colors" option={brandTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-category-add"
                                                                className="">Category</Form.Label>
                                                            <SpkSelect name="colors" option={categoryTagOption} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Category"
                                                            />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-category-add1" className="">Sub
                                                                Category</Form.Label>
                                                            <SpkSelect name="colors" option={subCategoryTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Category"
                                                            />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-gender-add"
                                                                className="">Gender</Form.Label>
                                                            <SpkSelect name="colors" option={genderTagOption} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={6} className="color-selection">
                                                            <Form.Label htmlFor="product-color-add" className="">Colors</Form.Label>
                                                            <SpkSelect multi name="colors" option={colorTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="product-description-add1" className="">Product
                                                                Description</Form.Label>
                                                            <textarea className="form-control" id="product-description-add1"
                                                                rows={2}></textarea>
                                                            <Form.Label htmlFor="product-description-add1"
                                                                className="form-label mt-1 fs-12 text-muted mb-0">*Description
                                                                should not exceed 500 letters</Form.Label>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second" className="p-0 border-0" id="images-tab-pane"
                                                    role="tabpanel" aria-labelledby="images-tab" tabIndex={0}>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                                        <div className="fw-semibold d-block fs-15">Pricing Details:</div>
                                                    </div>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="product-tags" className="">Product Tags</Form.Label>
                                                            <SpkSelect name="colors" multi option={productTagOptions} defaultvalue={[productTagOptions[3], productTagOptions[1]]} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="product-dropzone">
                                                                <p className="fw-medium mb-3 fs-14">Select Images :</p>
                                                                <div className="mb-3">
                                                                    {updateImages.map((idx, index) => (
                                                                        <span className="avatar avatar-xl border me-2 bg-light" key={index} >
                                                                            <img src={idx.imageUrl} alt="" className="w-100 h-100" />
                                                                            <Link to="#!" className="badge rounded-pill bg-danger avatar-badge" onClick={() => deleteFunction(idx.id)} ><i className="fe fe-x"></i></Link>
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third" className="p-0 border-0" id="notification-tab-pane"
                                                    role="tabpanel" aria-labelledby="notification-tab" tabIndex={0}>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                                        <div className="fw-semibold d-block fs-15">Pricing Details:</div>
                                                    </div>
                                                    <div className="row gy-3">
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-cost-add" className="">Enter Actual
                                                                Price</Form.Label>
                                                            <Form.Control type="text" className="" id="product-cost-add"
                                                                placeholder="Cost" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-cost-add1" className="">Enter Dealer
                                                                Price</Form.Label>
                                                            <Form.Control type="text" className="" id="product-cost-add1"
                                                                placeholder="Cost" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label className="">Discount Type</Form.Label>
                                                            <div className="row gy-2">
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card mb-0 border card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    No Discount
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address1"
                                                                                            name="default-address"
                                                                                            defaultChecked />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card border mb-0 card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    Percentage %
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address5"
                                                                                            name="default-address" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card border mb-0 card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    Fixed Price
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address3"
                                                                                            name="default-address" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            </div>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-discount" className="">Discount
                                                                Percentage</Form.Label>
                                                            <Form.Control type="text" className="" id="product-discount"
                                                                placeholder="Discount in %" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="Stock-quantity" className="">Stock
                                                                Quantity</Form.Label>
                                                            <Form.Control type="text" className="" id="Stock-quantity"
                                                                placeholder="Enter Quanity" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="shiping-cost" className="">Shipping
                                                                Cost</Form.Label>
                                                            <Form.Control type="text" className="" id="shiping-cost"
                                                                placeholder="Enter Shipping Cost" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="product-avaialability"
                                                                className="">Availability Status</Form.Label>
                                                            <SpkSelect name="colors" option={avaialabilityTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fourth" className="p-0 border-0" id="security-tab-pane" role="tabpanel"
                                                    aria-labelledby="security-tab" tabIndex={0}>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                                        <div className="fw-semibold d-block fs-15">Product Specification :</div>
                                                    </div>
                                                    <Row className="gy-3">
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-type" className="">Packaging
                                                                Type</Form.Label>
                                                            <Form.Control type="text" className="" id="product-type"
                                                                placeholder="Type" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-discount" className="">Item
                                                                Weight</Form.Label>
                                                            <Form.Control type="text" className="" id="product-discount1"
                                                                placeholder="Weight in gms" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label className="">Product Features</Form.Label>
                                                            <div id="product-features">
                                                                <SpkSunEditor />
                                                            </div>
                                                        </Col>
                                                        <Col xl={4} className="custom-inputfield">
                                                            <Form.Label htmlFor="publish-date" className="">Publish
                                                                Date</Form.Label>
                                                            <SpkDatepickr className="form-control" selected={dates["PublishDate"] ? new Date(dates["PublishDate"]) : null} onChange={(date: Date | null) => handleDateChange("PublishDate", date)} placeholderText='Choose date' />
                                                        </Col>
                                                        <Col xl={4} className="custom-inputfield">
                                                            <Form.Label htmlFor="publish-time" className="">Publish
                                                                Time</Form.Label>
                                                            <SpkDatepickr className="form-control" showTimeSelect dateFormat="h:mm aa" showTimeSelectOnly selected={dates["PublishTime"] ? new Date(dates["PublishTime"]) : null} onChange={(date: Date | null) => handleDateChange("PublishTime", date)} placeholderText='Choose time' />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="product-status-add" className="">Published
                                                                Status</Form.Label>
                                                            <SpkSelect name="colors" option={PublishedStatusTagOptions} mainClass="basic-multi-select"
                                                                menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                            />
                                                        </Col>
                                                        <Col xl={12} className="col-xl-12 product-documents-container">
                                                            <p className="fw-medium mb-2 fs-14">Warrenty Documents :</p>
                                                            <FilePond className="multiple-filepond"
                                                                files={files1}
                                                                onupdatefiles={setFiles1}
                                                                allowMultiple={true}
                                                                maxFiles={6}
                                                                server="/api"
                                                                name="files" /* sets the file input name, it's filepond by default */
                                                                labelIdle='Drag & Drop your file here or click '
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="fifth" className="p-0 border-0" id="otherinfo-tab-pane" role="tabpanel"
                                                    aria-labelledby="otherinfo-tab" tabIndex={0}>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1">
                                                        <div className="fw-semibold d-block fs-15">Product Shipping & Handling :
                                                        </div>
                                                    </div>
                                                    <Row className="gy-3">
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-type1" className="">Product
                                                                Type</Form.Label>
                                                            <Form.Control type="text" className="" id="product-type1"
                                                                placeholder="Type" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="product-discount" className="">Packaging
                                                                Details</Form.Label>
                                                            <Form.Control type="text" className="" id="Packaging-Details"
                                                                placeholder="Enter Packaging Details" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label className="">Handling Instructions</Form.Label>
                                                            <textarea className="form-control" id="product-description-add"
                                                                rows={2}></textarea>
                                                        </Col>
                                                        <Col xl={7} className="product-documents-container">
                                                            <p className="fw-medium mb-2 fs-14">Shipping Methods :</p>
                                                            <Row className="gy-2">
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card mb-0 border card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    Standard Shipping
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address2"
                                                                                            name="default-address1"
                                                                                            defaultChecked />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card border mb-0 card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    Expedited Shipping
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address4"
                                                                                            name="default-address1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col xxl={4}>
                                                                    <Card className="custom-card border mb-0 card-style-6">
                                                                        <Card.Body className="px-3 py-2">
                                                                            <div
                                                                                className="d-flex align-items-center justify-content-between mb-0 flex-wrap">
                                                                                <div className="flex-grow-1">
                                                                                    Overnight Shipping
                                                                                </div>
                                                                                <div className="min-w-fit-content">
                                                                                    <div className="d-flex gap-2">
                                                                                        <input className="form-check-input m-0"
                                                                                            type="radio" id="address6"
                                                                                            name="default-address1" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                        <Col xl={5} className="product-documents-container">
                                                            <Form.Label className="">Shipping Restrictions</Form.Label>
                                                            <Form.Control type="text" className="" id="product-shipping"
                                                                placeholder="Enter Shipping Restrictions" />
                                                        </Col>
                                                    </Row>
                                                    <div
                                                        className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-1 mt-4">
                                                        <div className="fw-semibold d-block fs-15">Compliance and Legal :</div>
                                                    </div>
                                                    <div className="row gy-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="Return-Policy" className="">Return
                                                                Policy</Form.Label>
                                                            <Form.Control type="text" className="" id="Return-Policy"
                                                                placeholder="Enter Return Policy" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label className="">Safety Information</Form.Label>
                                                            <textarea className="form-control" id="product-description-add5"
                                                                rows={2}></textarea>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label className="">Certifications</Form.Label>
                                                            <Form.Control className="" type="file" id="formFile" />
                                                        </Col>
                                                    </div>
                                                </Tab.Pane>
                                            </Tab.Content>
                                            <Card.Footer className="border-top-0">
                                                <div className="btn-list float-end">
                                                    <SpkButton Buttonvariant="primary" Customclass="btn">Save Product
                                                        <i className="bi bi-download ms-2"></i>
                                                    </SpkButton>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Tab.Container>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default AddProduct;