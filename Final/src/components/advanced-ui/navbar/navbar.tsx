import { Fragment, useState } from "react";
import { Card, Col, Collapse, Container, Dropdown, Form, InputGroup, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Link } from "react-router-dom";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import logo from '../../../assets/images/brand-logos/toggle-logo.png';
import dark from '../../../assets/images/brand-logos/toggle-dark.png';


const Navbars = () => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Navbar"} />
            <Pageheader title="Advanced Ui" currentpage="Navbar" activepage="Navbar" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card custom-navbar-basic">
                        <Card.Header>
                            <Card.Title>
                                Navbar with sub-component
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar defaultValue="" expand="lg" className="navbar navbar-expand-lg bg-light">
                                <Container fluid>
                                    <Navbar.Brand as='a'>
                                        <img src={logo} alt="" className="d-inline-block align-text-top desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-top desktop-dark" />
                                    </Navbar.Brand>

                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="" id="navbarSupportedContent">
                                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link className="active" href="#!">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Link</Nav.Link>
                                            </Nav.Item>
                                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Something else
                                                    here
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Item>
                                                <Nav.Link className="disabled">Disabled</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="primary" Buttontype="button" >Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Brand With And Without Links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light mb-3">
                                <Container fluid>
                                    <Link aria-label="anchor" className="navbar-brand" to="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-top desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-top desktop-dark" />
                                    </Link>

                                </Container>
                            </Navbar>
                            <Navbar className="bg-light">
                                <Container fluid>
                                    <span className="navbar-brand mb-0 h1">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </span>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Image and text
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand text-default d-flex gap-2 align-items-center" to="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                        Bootstrap
                                    </Link>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Nav with lists, links and dropdowns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand="lg" className="navbar navbar-expand-lg bg-light mb-3">
                                <Container fluid>
                                    <Navbar.Brand href="#!" >
                                        <img src={logo} alt="" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarNav">
                                        <Nav className="navbar-nav">
                                            <Nav.Item>
                                                <Nav.Link className="active" aria-current="page">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="disabled">Disabled</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar navbar-expand-lg bg-light mb-3">
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        <img src={logo} alt="" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <Nav className="navbar-nav">
                                            <Nav.Link className="active" aria-current="page" >Home</Nav.Link>
                                            <Nav.Link >Features</Nav.Link>
                                            <Nav.Link >Pricing</Nav.Link>
                                            <Nav.Link className="disabled" >Disabled</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
                                <Container fluid>
                                    <Navbar.Brand href='#!'>
                                        <img src={logo} alt="" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <Nav className="navbar-nav">
                                            <Nav.Item>
                                                <Nav.Link className="active" aria-current="page">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="dropdown">
                                                <NavDropdown title="Dropdown link" id="basic-nav-dropdown">
                                                    <NavDropdown.Item>Action</NavDropdown.Item>
                                                    <NavDropdown.Item>
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item>Something else here</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Forms In Navbar
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light mb-3">
                                <Container fluid>
                                    <Form className="d-flex" role="search">
                                        <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                            aria-label="Search" />
                                        <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                    </Form>
                                </Container>
                            </Navbar>
                            <Navbar className="bg-light mb-3">
                                <Container fluid>
                                    <Link aria-label="anchor" className="navbar-brand" to="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </Link>
                                    <Form className="d-flex" role="search">
                                        <Form.Control className=" me-2" type="search" placeholder="Search"
                                            aria-label="Search" />
                                        <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                    </Form>
                                </Container>
                            </Navbar>
                            <h6 className="mb-3 fw-medium">Input groups in navbar forms</h6>
                            <Navbar className="navbar bg-light mb-3">
                                <Container fluid>
                                    <InputGroup>
                                        <InputGroupText className="input-group-text" id="basic-addon1">@</InputGroupText>
                                        <Form.Control type="text" className="" placeholder="Username"
                                            aria-label="Username" aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </Container>
                            </Navbar>
                            <h6 className="mb-3 fw-medium"> Variation buttons are supported as part of the navbar forms</h6>
                            <Navbar className="bg-light">
                                <Form className="container-fluid justify-content-start">
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-primary m-1" Buttontype="submit">Main
                                        button</SpkButton>
                                    <SpkButton Buttonvariant="btn btn-sm btn-outline-secondary m-1" Buttontype="button">Smaller
                                        button</SpkButton>
                                </Form>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}

            {/* <!-- Start:: row-6 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Navbar With Text
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light mb-3">
                                <Container fluid>
                                    <span className="navbar-text">
                                        Navbar text with an inline element
                                    </span>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar navbar-expand-lg bg-light">
                                <Container fluid>
                                    <Navbar.Brand href="#!">Navbar with text</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarText">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link className="nav-link active" aria-current="page">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">Pricing</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <span className="navbar-text">
                                            Navbar text with an inline element
                                        </span>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-6 --> */}

            {/* <!-- Start:: row-7 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Transparent Color Schemes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-primary-transparent mb-3">
                                <Container fluid>
                                    <Navbar.Brand aria-label="anchor" href="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="navbar-collapse" id="navbarColor01">
                                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Features</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Pricing</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">About</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-secondary-transparent mb-3">
                                <Container fluid>
                                    <Navbar.Brand aria-label="anchor" className="navbar-brand" href="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor02">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link className="nav-link active" aria-current="page" href="#!">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link" href="#!">Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link" href="#!">Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link" href="#!">About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="secondary" Customclass="btn" Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-dark-transparent">
                                <Container fluid>
                                    <Link aria-label="anchor" className="navbar-brand" to="#!">
                                        <img src={logo} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor03">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Features</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Pricing</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">About</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant='dark'
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Solid Color Schemes
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-primary mb-3">
                                <Container fluid>
                                    <Link aria-label="anchor" className="navbar-brand" to="#!">
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-logo" />
                                        <img src={dark} alt="" className="d-inline-block align-text-center desktop-dark" />
                                    </Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor04">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Features</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Pricing</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">About</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="light" Customclass="btn btn-light" Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-secondary mb-3">
                                <Container fluid>
                                    <Navbar.Brand aria-label="anchor" className="navbar-brand" href="#!"><img src={dark} alt="" /></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor05">
                                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Features</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Pricing</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">About</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="light" Customclass="btn btn-light" Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-dark">
                                <Container fluid>
                                    <Navbar.Brand aria-label="anchor" className="navbar-brand" href="#!">
                                        <img src={dark} alt="" className="toggle-dark" />
                                        <img src={logo} alt="" className="toggle-logo" />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarColor06">
                                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Features</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Pricing</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">About</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control className="form-control me-2 border-0" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant=" light" Customclass="btn btn-light"
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-7 --> */}

            {/* <!-- Start:: row-8 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Containers
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h6>Too center</h6>
                            <div className="container">
                                <Navbar expand="lg" className="navbar-expand-lg bg-light mb-3">
                                    <Container fluid>
                                        <Link className="navbar-brand" to="#!">Navbar</Link>
                                    </Container>
                                </Navbar>
                            </div>
                            <h6>Change the responsive container to how to wide the content</h6>
                            <Navbar expand="lg" className="navbar-expand-lg bg-light">
                                <div className="container-md">
                                    <Link className="navbar-brand" to="#!">Navbar</Link>
                                </div>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-8 --> */}

            {/* <!-- Start:: row-9 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Placement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand" to="#!">Default</Link>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-9 --> */}

            {/* <!-- Start:: row-10 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Placement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="fixed-top bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand" to="#!">Fixed top</Link>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-10 --> */}

            {/* <!-- Start:: row-11 --> */}
            <Row>
                <div className="'col-xl-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Placement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="fixed-bottom navbar-light bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand" to="#!">Fixed bottom</Link>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End:: row-11 --> */}

            {/* <!-- Start:: row-12 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Placement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="sticky-top navbar-light bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand" to="#!">Sticky top</Link>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-12 --> */}

            {/* <!-- Start:: row-13 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Scrolling
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-light bg-light">
                                <Container fluid>
                                    <Link className="navbar-brand" to="#!">Navbar scroll</Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarScroll">
                                        <Nav className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                        // style="--bs-scroll-height: 100px;"
                                        >
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Link</Link>
                                            </Nav.Item>
                                            <SpkDropdown Togglevariant="" Toggletext="Link" Customclass="nav-item dropdown" Id="navbarScrollingDropdown"
                                                Customtoggleclass="nav-link dropdown-toggle" Menulabel="navbarScrollingDropdown">
                                                <Dropdown.Item as="li" className="dropdown-item">Action</Dropdown.Item>
                                                <Dropdown.Item as="li" className="dropdown-item">Another action</Dropdown.Item>
                                                <Dropdown.Item as="li" className="dropdown-item">Something else
                                                    here</Dropdown.Item>
                                            </SpkDropdown>
                                            <Nav.Item>
                                                <Link className="nav-link disabled" to="#!" tabIndex={-1}
                                                    aria-disabled="false">Link</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex mt-3">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn"
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-13 --> */}

            {/* <!-- Start:: row-14 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Responsive behaviors Toggler
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-light bg-light mb-3">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                        <Link className="navbar-brand text-default" to="#!">Hidden brand</Link>
                                        <Nav as="ul" className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Link</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link disabled" to="#!" tabIndex={-1}
                                                    aria-disabled="false">Disabled</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn btn-"
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <h6>With a brand name shown on the left and toggler on the right:</h6>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-light bg-light mb-3">
                                <Container fluid>
                                    <Link className="navbar-brand text-default" to="#!">Navbar</Link>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse className="navbar-collapse" id="navbarTogglerDemo02">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Link</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link disabled" to="#!" tabIndex={-1}
                                                    aria-disabled="false">Disabled</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn"
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <h6>With a toggler on the left and brand name on the right:</h6>
                            <Navbar expand="lg" className="navbar-expand-lg navbar-light bg-light">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Brand className="navbar-brand text-default" href="#!">Navbar</Navbar.Brand>
                                    <Navbar.Collapse className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Link className="nav-link active" aria-current="page" to="#!">Home</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link" to="#!">Link</Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Link className="nav-link disabled" to="#!" tabIndex={-1}
                                                    aria-disabled="false">Disabled</Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control className="form-control me-2" type="search" placeholder="Search"
                                                aria-label="Search" />
                                            <SpkButton Customclass="btn" Buttonvariant="primary"
                                                Buttontype="submit">Search</SpkButton>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-14 --> */}

            {/* <!-- Start:: row-15 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                External content
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Collapse in={open}>
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Collapsed content</h5>
                                    <span className="text-white op-7">Toggleable via the navbar brand.</span>
                                </div>
                            </Collapse>
                            <Navbar className="navbar navbar-dark bg-dark rounded-0">
                                <Container fluid>
                                    <SpkButton Buttonvariant=''
                                        onClickfunc={() => setOpen(!open)} Customclass="nav-toggle navbar-dark-btn-toggler p-1"
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}>
                                        <span className="navbar-toggler-icon"></span>
                                    </SpkButton>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-15 --> */}

            {/* <!-- Start:: row-16 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Offcanvas
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Navbar expand={false} className="navbar bg-light custom-navbar">
                                <Container fluid>
                                    <Navbar.Brand className="navbar-brand" href="#!">Offcanvas navbar</Navbar.Brand>
                                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='dark-filter-img' />
                                    <Navbar.Offcanvas className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
                                        aria-labelledby="offcanvasNavbarLabel" placement="end">
                                        <Offcanvas.Header closeButton className="offcanvas-header" >
                                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas
                                            </h5>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav as="ul" className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                                <Nav.Item>
                                                    <Link className="nav-link px-2 active" aria-current="page"
                                                        to="#!">Home</Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Link className="nav-link px-2" to="#!">Link</Link>
                                                </Nav.Item>
                                                <NavDropdown
                                                    title="Dropdown"
                                                    id="offcanvasNavbarDropdown-expand-false"
                                                    className="ps-2"
                                                >
                                                    <NavDropdown.Item className="border-bottom-0">Action</NavDropdown.Item>
                                                    <NavDropdown.Item className="border-bottom-0">
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item>
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            <Form className="d-flex mt-3" role="search">
                                                <Form.Control className="form-control me-2" type="search"
                                                    placeholder="Search" aria-label="Search" />
                                                <SpkButton Buttonvariant="primary" Customclass="btn"
                                                    Buttontype="submit">Search</SpkButton>
                                            </Form>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-16 --> */}
        </Fragment>
    );
};

export default Navbars;