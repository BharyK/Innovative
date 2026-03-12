import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { data$, getState, setState } from "../../../shared/services/switcherServices";
import { Link } from "react-router-dom";
import Seo from "../../../shared/layouts-components/seo/seo";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { Card, Col, Nav, Row, Tab } from "react-bootstrap";
import { FaqsQuestionsAnswers, FaqsQuestionsAnswers1, FeatureData, LandingCards, LandingSwiperCard, ServicesData, TeamMembersData } from "../../../shared/data/pages/landinfdata";
import CountUp from "react-countup";
import { Plans, Plans1 } from "../../../shared/data/pages/pricingdata";
import SpkPricingCard from "../../../shared/@spk-reusable-components/reusable-pages/spk-pricingcard";
import SpkAccordions from "../../../shared/@spk-reusable-components/reusable-advancedui/spk-accordions";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import LandingSwitcher from "../../../shared/layouts-components/switcher/landing-switcher";
import media8 from '../../../assets/images/media/png/8.png'
import dark from '../../../assets/images/brand-logos/desktop-dark.png'
import logo from '../../../assets/images/brand-logos/desktop-logo.png'
import backgrounds7 from '../../../assets/images/media/backgrounds/7.png'
import backgrounds3 from '../../../assets/images/media/backgrounds/3.png'
import media7 from '../../../assets/images/media/png/7.png'
import media6 from '../../../assets/images/media/png/6.png'
import togglelogo from '../../../assets/images/brand-logos/toggle-logo.png'
import toggledark from '../../../assets/images/brand-logos/toggle-dark.png'

interface LandingProps { }

const Landing: React.FC<LandingProps> = () => {

    type LandingType = any;

    // State hooks for menu expansion
    const [expandState, setExpandState] = useState({
        expande: false,
        expande1: false,
        expande2: false,
        isActive: false,
    });

    useEffect(() => {

        const newState = {
            dataNavStyle: "menu-click",
            dataNavLayout: "horizontal",
            dataMenuStyles: "",
            dataVerticalStyle: "",
            dataWidth: "",

        }
        setState(newState);

        return () => {
            const newState = {
                dataNavStyle: "",
                dataVerticalStyle: "overlay",
                dataNavLayout: `${localStorage.InnovativeLayout == "horizontal" ? "horizontal" : "vertical"}`,
                dataMenuStyles: "dark"
            }
            setState(newState)
        }

    }, [])



    let [variable, setVariable] = useState(getState());

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            // No need to manually update component state, the UI will re-render automatically
            setVariable(e);
        });

        return () => subscription.unsubscribe(); // Clean up the subscription
    }, [variable]);

    function toggleNavigation() {
        if (window.innerWidth <= 992) {
            const currentToggled = variable
            const newState = {
                toggled: currentToggled === 'open' ? 'close' : 'open',
                dataNavLayout: "horizontal",
            };
            setState(newState);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', toggleNavigation);
        return () => {
            window.removeEventListener('resize', toggleNavigation);
        };
    }, []);




    useEffect(() => {
        window.addEventListener('resize', menuClose);
        return () => {
            window.removeEventListener('resize', menuClose);
        };
    }, []);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 992) {
                const newState = {
                    toggled: 'close',
                    dataNavLayout: 'horizontal'
                }
                setState(newState)
            } else {
                const newState = {
                    toggled: 'open',
                    dataNavLayout: 'horizontal'
                }
                setState(newState)
            }
        }

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);
        // handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const landingpages = () => {
            if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                let Scolls = document?.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", landingpages);
        }
    });

    function handleClick1() {
        setExpandState(prev => ({
            ...prev,
            expande: false,
            expande1: false,
            expande2: false,
        }));

        const newState = {
            toggled: 'close',
            dataNavLayout: 'horizontal',
        };

        setState(newState);
    }

    const sideMenuItems = useRef<HTMLAnchorElement[]>([]);

    const handleClick = useCallback((e: MouseEvent) => {
        e.preventDefault();

        const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (!target) return;

        const id = target.substring(1);
        const element = document.getElementById(id);
        const location = element?.offsetTop;

        if (location !== undefined) {
            window.scrollTo({
                left: 0,
                top: location - 64,
                behavior: "smooth",
            });
        }
    }, []);



    useEffect(() => {
        sideMenuItems.current.forEach((elem) => {
            elem.addEventListener("click", handleClick);
        });

        return () => {
            sideMenuItems.current.forEach((elem) => {
                elem.removeEventListener("click", handleClick);
            });
        };
    }, []);


    //  switcher offcanvas

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1112: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }

    const documentSelector = (selector: string) => document.querySelector<HTMLElement>(selector);

    useEffect(() => {
        // Check localStorage for initial state
        if (localStorage.getItem('data-menu-styles') === 'light') {
            documentSelector('html')?.setAttribute('data-menu-styles', 'light');
        }
    }, []);





    useEffect(() => {
        // Check localStorage for initial state
        if (localStorage.getItem('data-menu-styles') === 'light') {
            documentSelector('html')?.setAttribute('data-menu-styles', 'light');
        }
    }, []);

    const toggleExpand = () => {
        setExpandState(prev => ({
            ...prev,
            expande: !prev.expande,
        }));

        // Ensure you're only setting light theme once
        if (localStorage.getItem('data-menu-styles') === 'light') {
            document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
        }
    };

    const handleSubMenuToggle1 = () => {
        setExpandState(prev => ({
            ...prev,
            expande1: !prev.expande1,
        }));
    };
    const handleSubMenuToggle2 = () => {
        setExpandState(prev => ({
            ...prev,
            expande2: !prev.expande2,
        }));
    };

    // closing the menu when widnow width is <= 992

    const overlayElementRef = useRef<HTMLDivElement | null>(null);

    function menuClose() {
        if (window.innerWidth <= 992) {
            const newState = {
                toggled: "close"
            }
            setState(newState);
        }
        if (overlayElementRef.current) {
            overlayElementRef.current?.classList.remove("active");
        }
    }


    const [activeLink, setActiveLink] = useState<string>('home');

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    const onScroll = () => {
        const sections = document.querySelectorAll(".side-menu__item");
        const scrollPos =
            window.scrollY ||
            document.documentElement.scrollTop ||
            (document.querySelector("body")?.scrollTop || 0);

        sections.forEach((elem) => {
            const value = elem.getAttribute("href") ?? "";
            const fragmentIndex = value.indexOf("#");
            const fragment = fragmentIndex !== -1 ? value.substring(fragmentIndex + 1) : "";

            if (fragment) {
                const refElement = document.getElementById(fragment);

                if (refElement) {
                    const scrollTopMinus = scrollPos + 73;
                    if (
                        refElement.offsetTop <= scrollTopMinus &&
                        refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
                    ) {
                        elem.classList.add("active");
                    } else {
                        elem.classList.remove("active");
                    }
                }
            }
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);



    return (
        <Fragment>
            <Seo title="Landing-Page" />
            {/* <div id="responsive-overlay" onClick={menuClose}></div> */}
            {/* <!-- app-header --> */}
            <header className="app-header">

                {/* <!-- Start::main-header-container --> */}
                <div className="main-header-container container-fluid">

                    {/* <!-- Start::header-content-left --> */}
                    <div className="header-content-left">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/sales`} className="header-logo">
                                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                                    <img src={toggledark} alt="logo" className="toggle-white" />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            {/* <!-- Start::header-link --> */}
                            <Link to="#!" className="sidemenu-toggle header-link" data-bs-toggle="sidebar" onClick={() => toggleNavigation()} >
                                <span className="open-toggle">
                                    <i className="ri-menu-3-line fs-20"></i>
                                </span>
                            </Link>
                            {/* <!-- End::header-link --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-left --> */}

                    {/* <!-- Start::header-content-right --> */}
                    <div className="header-content-right">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element align-items-center">
                            {/* <!-- Start::header-link|switcher-icon --> */}
                            <div className="btn-list d-lg-none d-flex">
                                <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="btn btn-primary-light">
                                    Sign Up
                                </Link>
                                <SpkButton Buttonvariant="success" Customclass="btn btn-icon btn-primary switcher-icon d-flex align-items-center justify-content-center rounded-circle" data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas" onClickfunc={handleShow} >
                                    <i className="ri-settings-3-line"></i>
                                </SpkButton>
                            </div>
                            {/* <!-- End::header-link|switcher-icon --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-right --> */}

                </div>
                {/* <!-- End::main-header-container --> */}

            </header>
            {/* <!-- /app-header --> */}


            {/* <!-- Start::app-sidebar --> */}
            <div ref={overlayElementRef} id="responsive-overlay" onClick={() => menuClose()}></div>
            <aside className="app-sidebar custom-landpage sticky" id="sidebar">

                <div className="container-xl">
                    {/* <!-- Start::main-sidebar --> */}
                    <div className="main-sidebar">

                        {/* <!-- Start::nav --> */}
                        <nav className="main-menu-container nav nav-pills sub-open">
                            <div className="landing-logo-container">
                                <div className="horizontal-logo">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                                        <img src={logo} alt="logo" className="desktop-logo" />
                                        <img src={dark} alt="logo" className="desktop-dark" />
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                            <ul className="main-menu">
                                <li className="slide">
                                    <a className={`side-menu__item ${activeLink === 'home' ? 'active' : ''}`} href="#home" ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('home')}
                                    >
                                        <span className="side-menu__label">Home</span>
                                    </a>
                                </li>
                                <li className="slide">
                                    <a href="#about" className={`side-menu__item ${activeLink === 'about' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('about')}
                                    >
                                        <span className="side-menu__label">About</span>
                                    </a>
                                </li>
                                <li className={`slide has-sub ${expandState.expande ? 'open' : ''} `}>
                                    <a href="#!" ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }} className={`side-menu__item ${expandState.expande ? 'active' : ''} ${expandState.isActive ? 'active' : ''} `} onClick={toggleExpand} >
                                        <span className="side-menu__label me-2">More</span>
                                        <i className="fe fe-chevron-right side-menu__angle op-8"></i>
                                    </a>
                                    <ul className={`slide-menu child1 ${expandState.expande ? 'active' : ''}`}
                                        style={{ display: expandState.expande ? 'block' : 'none' }}
                                    >
                                        <li className="slide">
                                            <a ref={(el: LandingType) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }}
                                                onClick={() => handleLinkClick('services')}
                                                href="#services" className={`side-menu__item ${activeLink === 'services' ? 'active' : ''}`}>Services</a>
                                        </li>
                                        <li className="slide">
                                            <a ref={(el: LandingType) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }} href="#expectations"
                                                onClick={() => handleLinkClick('expectations')}
                                                className={`side-menu__item ${activeLink === 'expectations' ? 'active' : ''}`}>Expectations</a>
                                        </li>
                                        <li className="slide">
                                            <a ref={(el: LandingType) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }}
                                                onClick={() => handleLinkClick('features')}
                                                href="#features" className={`side-menu__item ${activeLink === 'features' ? 'active' : ''}`}>Features</a>
                                        </li>
                                        <li className={`slide has-sub ${expandState.expande1 ? 'open' : ''}`}>
                                            <a href="#!" ref={(el: LandingType) => {
                                                if (el) {
                                                    sideMenuItems.current.push(el);
                                                }
                                            }} className="side-menu__item" onClick={handleSubMenuToggle1} >Level-2
                                                <i className="ri-arrow-right-s-line side-menu__angle"></i></a>
                                            <ul className={`slide-menu child2 ${expandState.expande1 ? 'active' : ''}`}
                                                style={{ display: expandState.expande1 ? 'block' : 'none' }}>
                                                <li className="slide">
                                                    <a href="#!" ref={(el: LandingType) => {
                                                        if (el) {
                                                            sideMenuItems.current.push(el);
                                                        }
                                                    }} className="side-menu__item">Level-2-1</a>
                                                </li>
                                                <li className={`slide has-sub ${expandState.expande2 ? 'open' : ''}`}>
                                                    <a href="#!" ref={(el: LandingType) => {
                                                        if (el) {
                                                            sideMenuItems.current.push(el);
                                                        }
                                                    }} className="side-menu__item" onClick={handleSubMenuToggle2} >Level.2.2
                                                        <i className="ri-arrow-right-s-line side-menu__angle"></i></a>
                                                    <ul className={`slide-menu child3 ${expandState.expande2 ? 'active' : ''}`}
                                                        style={{ display: expandState.expande2 ? 'block' : 'none' }}>
                                                        <li className="slide">
                                                            <a href="#!" ref={(el: LandingType) => {
                                                                if (el) {
                                                                    sideMenuItems.current.push(el);
                                                                }
                                                            }}
                                                                className="side-menu__item">Level-2-2-1</a>
                                                        </li>
                                                        <li className="slide has-sub">
                                                            <a href="#!" ref={(el: LandingType) => {
                                                                if (el) {
                                                                    sideMenuItems.current.push(el);
                                                                }
                                                            }}
                                                                className="side-menu__item">Level-2-2-2</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide">
                                    <a href="#pricing" className={`side-menu__item ${activeLink === 'pricing' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('pricing')}
                                    >
                                        <span className="side-menu__label">Pricing</span>
                                    </a>
                                </li>
                                <li className="slide">
                                    <a href="#team" className={`side-menu__item ${activeLink === 'team' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('team')}
                                    >
                                        <span className="side-menu__label">Team</span>
                                    </a>
                                </li>
                                <li className="slide">
                                    <a href="#faqs" className={`side-menu__item ${activeLink === 'faqs' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('faqs')}
                                    >
                                        <span className="side-menu__label">FAQ's</span>
                                    </a>
                                </li>
                                <li className="slide">
                                    <a href="#testimonials" className={`side-menu__item ${activeLink === 'testimonials' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('testimonials')}
                                    >
                                        <span className="side-menu__label">Testimonials</span>
                                    </a>
                                </li>
                                <li className="slide">
                                    <a href="#contact" className={`side-menu__item ${activeLink === 'contact' ? 'active' : ''}`} ref={(el: LandingType) => {
                                        if (el) {
                                            sideMenuItems.current.push(el);
                                        }
                                    }}
                                        onClick={() => handleLinkClick('contact')}
                                    >
                                        <span className="side-menu__label">Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                            <div className="d-lg-flex d-none">
                                <div className="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                    <Link to={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} className="btn btn-wave btn-secondary btn-w-md">
                                        Sign Up
                                    </Link>
                                    <SpkButton Buttonvariant="light" Customclass="btn btn-wave btn-icon btn-primary switcher-icon d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" onClickfunc={handleShow} data-bs-target="#switcher-canvas">
                                        <i className="ri-settings-3-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </nav>
                        {/* <!-- End::nav --> */}

                    </div>
                    {/* <!-- End::main-sidebar --> */}
                </div>

            </aside>
            {/* <!-- End::app-sidebar --> */}

            {/* <!-- Start::app-content --> */}
            <div className="main-content landing-main px-0" onClick={handleClick1} >
                {/* <!-- Start:: Section-1 --> */}
                <div className="landing-banner" id="home">
                    <div className="img-container">
                        <img src={backgrounds7} alt="" />
                    </div>
                    <section className="section main-banner-section">
                        <div className="container main-banner-container pb-lg-0">
                            <Row className=" pt-xl-5 mt-5">
                                <Col xxl={7} xl={7} lg={7} md={8}>
                                    <div className="banner-content">
                                        <p className="fs-14 fw-medium text-primary mb-3">
                                            <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Optimized and Accessible</span>
                                        </p>
                                        <p className="landing-banner-heading fw-semibold mb-3">Simplify Your Design with the
                                            <span className="fw-semibold text-primary">Innovative</span> Template for Unique Needs.
                                        </p>
                                        <div className="fs-16 mb-5">Discover an intuitive admin template crafted for efficiency,
                                            featuring a sleek and modern interface that streamlines management tasks and
                                            boosts productivity.
                                        </div>
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="m-1 btn px-4 text-fixed-white bg-primary">  View Demos<i className="ri-eye-line ms-2 align-middle"></i></Link>
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="m-1 btn px-4 btn-secondary btn-wave waves-effect waves-light">
                                            Learn More
                                            <i className="ri-arrow-right-line ms-2 align-middle"></i>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xxl={5} xl={5} lg={5} md={4} className="my-auto">
                                    <div className="text-end landing-main-image landing-heading-img">
                                        <img src={media7} alt="" className="img-fluid" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>
                </div>
                {/* <!-- End:: Section-1 --> */}

                <section className="section bg-white" id="about">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-14 fw-medium text-primary mb-1">
                                <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Why Choose Us?</span>
                            </p>
                            <h4 className="fw-semibold mb-1 mt-3">To Reasons to choose our template</h4>
                            <Row className=" justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-14 mb-5 fw-normal">Our mission is to empower you to reach your goals through innovative solutions and dedicated support.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row className=" gy-4 why-choose-us-card">
                            {LandingCards.map((idx) => (
                                <Col lg={3} sm={6} key={idx.id}>
                                    <div className={`p-3 d-flex align-items-center gap-3 rounded ${idx.class}`}>
                                        <span className={`avatar avatar-lg bg-white svg-${idx.class} avatar-rounded`}>
                                            {idx.svg}
                                        </span>
                                        <div>
                                            <p className="fw-semibold mb-1 fs-20"><CountUp end={idx.number} />+</p>
                                            <span className="fs-14">{idx.title}</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>

                {/* <!-- Start:: Section-3 --> */}
                <section className="section overflow-hidden section-bg" id="expectations">
                    <div className="container">
                        <Row className=" gx-5 mx-0 align-items-end">
                            <Col xl={5} className="d-none d-xl-block">
                                <div className="home-proving-image">
                                    <img src={media6} alt="" className="img-fluid about-image" />
                                </div>
                                <div className="proving-pattern-1"></div>
                            </Col>
                            <Col xl={7} className="my-auto">
                                <div className="heading-section text-start mb-4">
                                    <p className="fs-14 fw-medium text-default mb-1">
                                        <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>About  Us</span>
                                    </p>
                                    <h4 className="mt-3 fw-semibold mb-2">Our Commitment to Excellence</h4>
                                    <div className="heading-description fs-14">Welcome to rixzo, where our commitment transcends
                                        mere words; it forms the foundation of all our endeavors. We strive for excellence
                                        in every interaction, project, and outcome, ensuring they reflect our dedication to
                                        quality.
                                    </div>
                                </div>
                                <ul className="list-unstyled mb-0 about-list">
                                    {FeatureData.map((idx) => (
                                        <li className="d-flex" key={idx.id}>
                                            <div className={`shadow-icon svg-${idx.svgClass} flex-shrink-0 me-3`}>
                                                {idx.svg}
                                            </div>
                                            <div className="flex-grow-1">
                                                <div className="d-flex flex-wrap gap-1">
                                                    <div className="flex-grow-1">
                                                        <p className="mb-1 fs-15 fw-semibold">{idx.title}</p>
                                                        <p className="text-muted fs-14 mb-0">{idx.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-3 --> */}

                {/* <!-- Start:: Section-2 --> */}
                <section className="section bg-white" id="services">
                    <div className="container position-relative">
                        <div className="text-center">
                            <p className="fs-14 fw-medium text-primary mb-1">
                                <span className="landing-section-heading text-default"> <i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Our  Services</span>
                            </p>
                            <h4 className="fw-semibold mb-1 mt-3">Explore Our Premier Services</h4>
                            <Row className=" justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-14 mb-5 fw-normal">Welcome to Innovative, where our commitment goes
                                        beyond mere words; its the foundation of everything we do. We are dedicated.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            {ServicesData.map((idx) => (
                                <Col xl={3} md={6} key={idx.id}>
                                    <Card className={`custom-card main-custom-card  border border-${idx.borderColor} border-opacity-10 ${idx.borderColor}`}>
                                        <Card.Body className=" p-4">
                                            <div className="mb-4">
                                                <span className={`avatar avatar-lg ${idx.borderColor}-dash-border avatar-rounded`}>
                                                    <span className={`avatar avatar-md avatar-rounded ${idx.borderColor}`}>
                                                        {idx.svg}
                                                    </span>
                                                </span>
                                            </div>
                                            <h6 className="fw-semibold">{idx.title}</h6>
                                            <p className="text-muted">{idx.description}</p>
                                            <Link to="#!" className={`fw-semibold text-${idx.borderColor}`}>Read More<i className="ti ti-arrow-narrow-right ms-1 fs-16 lh-1 align-middle d-inline-block rtl-icon-transform"></i></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-2 --> */}

                {/* <!-- Start:: Section-5 --> */}
                <section className="section landing-Features" id="features">
                    <div className="img-container">
                        <img src={backgrounds3} alt="" />
                    </div>
                    <div className="container">
                        <Row className=" justify-content-center">
                            <Col xl={8}>
                                <div className="heading-section text-center mb-0">
                                    <p className="fs-14 fw-medium text-default mb-1">
                                        <span className="landing-section-heading landing-section-heading-dark text-default">
                                            <i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Features
                                        </span>
                                    </p>
                                    <h4 className="text-center mt-3 fw-semibold">Key Features of Our Services </h4>
                                    <div className="fs-14 text-center mb-4">Discover the unique features
                                        that set us apart, designed to enhance your experience and deliver exceptional
                                        value.
                                    </div>
                                </div>
                            </Col>
                            <div className="mb-5 d-flex align-items-center justify-content-center">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="btn btn-primary me-3 mb-sm-0">Get Started  Now</Link>
                                <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="btn btn-outline-primary btn-wave waves-effect waves-light">Discover  More<i className="fe fe-arrow-right rtl-transform-icon fs-14 align-text-bottom ms-1 d-inline-block"></i></Link>
                            </div>
                            <Col xl={10} className="my-auto">
                                <div className="d-flex align-items-center justify-content-center trusted-companies sub-card-companies flex-wrap mb-3 mb-xl-0 gap-4">
                                    <div className="trust-img primary"><i className="ri-bootstrap-fill text-primary"></i></div>
                                    <div className="trust-img secondary"><i className="ri-html5-fill text-secondary"></i></div>
                                    <div className="trust-img danger"><i className="ri-css3-fill text-danger"></i></div>
                                    <div className="trust-img warning"><i className="ri-javascript-fill text-warning"></i></div>
                                    <div className="trust-img info"><i className="ri-npmjs-fill text-info"></i></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-5 --> */}

                {/* <!-- Start:: Section-6 --> */}
                <section className="section bg-white" id="team">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-14 fw-medium text-default mb-1">
                                <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Our Team</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">Meet the Dedicated Individuals Behind Our Success</h4>
                            <Row className=" justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-14 mb-5 fw-normal">Our team comprises talented professionals who are committed to excellence and passionate about driving results.</p>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            {TeamMembersData.map((idx) => (
                                <Col xl={3} lg={3} md={6} sm={6} className="col-12" key={idx.id}>
                                    <Card className={`custom-card team-member ${idx.colorClass}`}>
                                        <Card.Body className=" text-center p-4">
                                            <span className={`avatar avatar-xxl p-1 bg-${idx.colorClass}-transparent avatar-rounded`}>
                                                <img src={idx.image} alt="" />
                                            </span>
                                            <div className="text-center profile-cantainer mt-3">
                                                <div>
                                                    <h6 className="mb-2 fw-medium">{idx.name}</h6>
                                                    <p className={`mb-0 text-${idx.colorClass} fw-semibold`}>{idx.role}</p>
                                                    <div className="d-flex justify-content-center mt-4">
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-circle btn-primary rounded-circle btn-wave btn-sm waves-effect waves-light"><i className="ri-twitter-x-fill"></i></Link>
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-circle btn-secondary rounded-circle btn-wave btn-sm ms-2 waves-effect waves-light"><i className="ri-facebook-fill"></i></Link>
                                                        <Link aria-label="anchor" to="#!" className="btn btn-icon rounded-circle btn-danger rounded-circle btn-wave btn-sm ms-2 waves-effect waves-light"><i className="ri-linkedin-fill"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-6 --> */}

                {/* <!-- Start:: Section-7 --> */}
                <section className="section section-bg" id="pricing">
                    <div className="container">
                        <div className="text-center">
                            <p className="fs-14 fw-medium text-default mb-1">
                                <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Pricing</span>
                            </p>
                            <h4 className="fw-semibold mt-3 mb-2">Flexible Plans Tailored to Your Needs</h4>
                            <Row className=" justify-content-center">
                                <Col xl={7}>
                                    <p className="text-muted fs-14 mb-5 fw-normal">Choose from a range of adaptable plans
                                        designed to meet your evolving needs, giving you the freedom to scale your services
                                        effortlessly.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        <Row className=" justify-content-center">
                            <Col xl={12}>
                                <Tab.Container defaultActiveKey='monthly'>
                                    <div className="text-center mb-5">
                                        <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                            <Nav as='ul' className="nav-pills" role="tablist">
                                                <Nav.Item as='li' className="" role="presentation">
                                                    <Nav.Link as='button' eventKey='monthly' type="button" className="nav-link rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly" aria-selected="true" role="tab">Monthly</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as='li' className="" role="presentation">
                                                    <Nav.Link as='button' eventKey='yearly' type="button" className="nav-link rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly" aria-selected="false" tabIndex={-1} role="tab">Annually </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                    <Tab.Content>
                                        <Tab.Pane eventKey='monthly' className="p-0 border-0" id="pills-monthly" role="tabpanel">
                                            <Row className=" justify-content-center">
                                                {Plans.map((idx) => (
                                                    <Col xxl={4} xl={6} key={idx.id}>
                                                        <SpkPricingCard card={idx} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='yearly' className="p-0 border-0" id="pills-yearly" role="tabpanel">
                                            <Row className=" justify-content-center">
                                                {Plans1.map((idx) => (
                                                    <Col xxl={4} xl={6} key={idx.id}>
                                                        <SpkPricingCard card={idx} />
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-7 --> */}

                {/* <!-- Start:: Section-8 --> */}
                <section className="section bg-white" id="faqs">
                    <div className="container text-center">
                        <p className="fs-14 fw-medium text-default mb-1">
                            <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>FAQ's</span>
                        </p>
                        <h4 className="fw-semibold mt-3 mb-2">Common Questions and Answers</h4>
                        <Row className=" justify-content-center">
                            <Col xl={7}>
                                <p className="text-muted fs-14 mb-5 fw-normal">Weve compiled a list of the most common questions  to assist you in finding the information you need.</p>
                            </Col>
                        </Row>
                        <Row className=" text-start">
                            <Col xl={12}>
                                <Row className=" gy-2">
                                    <Col xl={6}>
                                        <SpkAccordions items={FaqsQuestionsAnswers} HeaderClass="bg-transparent" accordionClass='accordion-customicon1 faq-accordion landing-faq-accordion accordion-primary accordions-items-separate' />
                                    </Col>
                                    <Col xl={6}>
                                        <SpkAccordions items={FaqsQuestionsAnswers1} HeaderClass="bg-transparent" accordionClass='accordion-customicon1 faq-accordion landing-faq-accordion accordion-primary accordions-items-separate' />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-8 --> */}

                {/* <!-- Start:: Section-9 --> */}
                <section className="section landing-Features py-4" id="testimonials">
                    <div className="container reviews-container">
                        <Row className=" justify-content-center pb-3">
                            <Col xl={10} >
                                <div className="text-center mb-0 mt-4 heading-section">
                                    <p className="fs-14 fw-medium text-default mb-1">
                                        <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Testimonials</span>
                                    </p>
                                    <h4 className="mt-3 mb-1 fw-semibold">Hear From Our Satisfied Customers</h4>
                                    <div className="fs-14 mb-5">Explore genuine reviews and testimonials
                                        to see how our products and services have made a positive impact.
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12}>
                                <SpkSwiperJs slides={LandingSwiperCard} loop={true} pagination={{ clickable: true, }} autoplay={true} slidesPerView={2} breakpoint={breakpoints} className="swiper pagination-dynamic testimonialSwiperService" />
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-9 --> */}

                {/* <!-- Start:: Section-10 --> */}
                <section className="section" id="contact">
                    <div className="container text-center">
                        <p className="fs-14 fw-medium text-default mb-1">
                            <span className="landing-section-heading text-default"><i className="ti ti-inner-shadow-top-right-filled text-primary me-1 fs-10"></i>Contact  Us</span>
                        </p>
                        <h4 className="fw-semibold mt-3 mb-2">Have Questions? We're Here to Help!</h4>
                        <Row className=" justify-content-center">
                            <Col xl={9}>
                                <p className="text-muted fs-14 mb-5 fw-normal">Discover our extensive support resources! Get
                                    quick answers to your questions and find the solutions you need.
                                </p>
                            </Col>
                        </Row>
                        <Row className=" justify-content-center align-items-center">
                            <Col xl={9}>
                                <Card className="custom-card contactus-form contactus-form-left overflow-hidden">
                                    <Card.Body className=" p-5 pb-0">
                                        <Row className=" pt-0">
                                            <Col xxl={7} xl={6} lg={12} md={12} sm={12}>
                                                <Row className=" gy-3 text-start">
                                                    <Col xl={12}>
                                                        <label className="form-label" htmlFor="contact-address-firstname">First Name :</label>
                                                        <input className="form-control bg-light" id="contact-address-firstname" placeholder="Enter Name" type="text" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <label className="form-label" htmlFor="contact-address-email">Email Id :</label>
                                                        <input className="form-control bg-light" id="contact-address-email" placeholder="Enter Email Id" type="email" />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <div className="d-flex gap-2 align-items-end">
                                                            <div className="flex-grow-1">
                                                                <label className="form-label" htmlFor="contact-mail-message">Message :</label>
                                                                <textarea className="form-control bg-light" id="contact-mail-message" rows={1} placeholder="Write Here.."></textarea>
                                                            </div>
                                                            <div>
                                                                <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave waves-effect waves-light">Submit</SpkButton>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xxl={5} xl={6} className="d-none d-xl-block">
                                                <div className="primary-dash-border rounded">
                                                    <img src={media8} alt="" className="img-fluid landing-contact-img" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                    <Card.Body className=" p-5">
                                        <Row className=" justify-content-center gy-3 gy-xl-0">
                                            <Col xl={4}>
                                                <Card className="custom-card mb-0 border shadow-none">
                                                    <Card.Body className="">
                                                        <span className="avatar avatar-lg bg-primary bg-opacity-50 avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                enableBackground="new 0 0 24 24" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path
                                                                    d="M18.5 10.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3-.34-.31C7.6 15.99 5.5 12.77 5.5 10.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7z"
                                                                    fillOpacity=".8" fill="#fff" />
                                                                <path
                                                                    d="M12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2zm6 8.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                                                            </svg>
                                                        </span>
                                                        <p className="fw-semibold fs-14 mb-1 mt-3"><span className="text-muted fw-medium fs-12">Door.No:</span> 1352/A-12,</p>
                                                        <p className="fw-semibold fs-14 mb-0">Street, Hyderabad.</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={4}>
                                                <Card className="custom-card mb-0 border shadow-none">
                                                    <Card.Body className="">
                                                        <span className="avatar avatar-lg bg-secondary bg-opacity-50 avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7 4h10v14H7z" opacity=".8" fill="#fff" /><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3-3H7V4h10v14z" /></svg>
                                                        </span>
                                                        <p className="fw-semibold fs-14 mb-1 mt-3">
                                                            <span className="text-muted fw-medium fs-12">Landline: </span>+122
                                                            1234 32422
                                                        </p>
                                                        <p className="fw-semibold fs-14 mb-0">
                                                            <span className="text-muted fw-medium fs-12">Mobile: </span>+014 1234
                                                            32422
                                                        </p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={4}>
                                                <Card className="custom-card mb-0 border shadow-none">
                                                    <Card.Body className="">
                                                        <span className="avatar avatar-lg bg-danger bg-opacity-50 avatar-rounded">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                                                                viewBox="0 0 24 24" width="24px" fill="#000">
                                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                                <path d="M20 8l-8 5-8-5v10h16zm0-2H4l8 4.99z"
                                                                    opacity=".8" fill="#fff" />
                                                                <path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z" />
                                                            </svg>
                                                        </span>
                                                        <p className="fw-semibold fs-14 mb-1 mt-3"><span
                                                            className="text-muted fw-medium fs-12">Mail:
                                                        </span>arhakhan@mail.com</p>
                                                        <p className="fw-semibold fs-14 mb-0"><span
                                                            className="text-muted fw-medium fs-12">Mail:
                                                        </span>official874@mail.com</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-10 --> */}

                {/* <!-- Start:: Section-11 --> */}
                <section className="section landing-footer text-fixed-white">
                    <div className="container">
                        <Row>
                            <Col md={4} sm={6} className="col-12">
                                <div className="px-4">
                                    <p className="mb-2 fw-medium fs-14 text-fixed-white">Subscribe :</p>
                                    <ul className="list-unstyled fw-normal landing-footer-list">
                                        <li>
                                            <div className="input-group p-1 border bg-white rounded-pill gap-2 mb-4">
                                                <input type="text" className="form-control rounded-pill border-0 bg-transparent" placeholder="Subscribe to our news letter.." />
                                                <div className="btn btn-primary rounded-pill">Subscribe</div>
                                            </div>
                                            <p className="mb-2 fw-medium fs-14 text-fixed-white">Follow Us On :</p>
                                            <div className="mb-0">
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-facebook-line fw-bold lh-1 align-middle"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-twitter-x-line fw-bold lh-1 align-middle"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="danger" Customclass="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-instagram-line fw-bold lh-1 align-middle"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="warning" Customclass="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-github-line fw-bold lh-1 align-middle"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="info" Customclass="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-youtube-line fw-bold lh-1 align-middle"></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={2} sm={6} className="col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium fs-14 text-primary text-decoration-underline link-offset-3">PAGES </h6>
                                    <ul className="list-unstyled op-8 fw-normal landing-footer-list">
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Email</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Timeline</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Contacts</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Portfolio</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={2} sm={6} className="col-12">
                                <div className="px-4">
                                    <h6 className="fw-medium fs-14 text-primary text-decoration-underline link-offset-3">INFO</h6>
                                    <ul className="list-unstyled op-8 fw-normal landing-footer-list">
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Contact US</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">About</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Services</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="#!" className="text-fixed-white">Terms & Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4} sm={6} className="col-12 mb-md-0 mb-3">
                                <div className="px-4">
                                    <p className="fw-medium mb-3">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`}><img src={dark} alt="" className="landing-footer-logo" /></Link>
                                    </p>
                                    <p className="mb-2 op-6 fw-normal">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et
                                        magnam,<br />
                                        fuga est mollitia eius, quo illum illo inventore optio aut quas omnis rem. Dolores
                                        accusan.
                                    </p>
                                    <div className="d-flex gap-4 op-9 mt-4">
                                        <Link to="#!" className="text-primary fw-medium fs-14 text-decoration-underline link-offset-1">Contact Us</Link>
                                        <span className="op-3">|</span>
                                        <Link to="#!" className="text-primary fw-medium fs-14 text-decoration-underline link-offset-1">Terms & Conditions</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <!-- End:: Section-11 --> */}

                <div className="text-center landing-main-footer py-3 text-muted">
                    <span className="text-muted fs-15">
                        Copyright ©
                        <span id="year">2025</span>
                        <Link to="#!" className="text-primary fw-medium"><u> Innovative</u></Link>.
                        Designed with
                        <i className="fa fa-heart text-danger"></i> by
                        <Link to="#!" className="text-primary fw-medium mx-1"><u>Spruko</u></Link>.
                        All rights reserved.
                    </span>
                </div>


            </div>
            {/* <!-- End::app-content --> */}
            <LandingSwitcher
                show={show}
                handleClose={handleClose}
            />
        </Fragment>
    )
};

export default Landing;