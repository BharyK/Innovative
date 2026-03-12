import { Fragment, useEffect, useRef, useState } from "react"
import { Dropdown, ListGroup, Modal, Nav, Tab } from "react-bootstrap"
import SimpleBar from 'simplebar-react';
import { MENUITEMS, type Menuitemtype } from "../sidebar/nav"
import { Link } from "react-router-dom";
import { data$, getState, setState } from "../../services/switcherServices";
import SpkDropdown from "../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import Switcher from "../switcher/switcher";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import face14 from "../../../assets/images/faces/14.jpg";
import { cartProduct, Languages, NotificationsFollow, NotificationsInvites, NotificationsMentions, NotificationsViewall } from "../../data/header/headerdata";
import { updateTheme } from "../../data/switcherdata/switcherdata";


const Header = () => {

    //  switcher offcanvas

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [variable, setVariable] = useState(getState());
    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            // No need to manually update component state, the UI will re-render automatically
            setVariable(e);
        });

        return () => subscription.unsubscribe(); // Clean up the subscription
    }, [variable]);

    function menuClose() {
        const theme = variable;

        if (window.innerWidth <= 992) {
            const newState = {
                toggled: "close"
            }
            setState(newState);
        }

        if (window.innerWidth >= 992) {
            const local_varaiable = theme;
            const newToggledValue = local_varaiable.toggled ? local_varaiable.toggled : '';

            setState({ toggled: newToggledValue });
        }
    }
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const Query = (selector: string) => document.querySelector(selector)

    //Togglesidebar
    const toggleSidebar = () => {
        const theme = getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === "vertical") {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    case "closed":
                        // Toggle between open/close state for "closed" vertical style
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "close-menu-close" ? "" : "close-menu-close"
                        });
                        break;
                    case "overlay":
                        // Handle icon-overlay state with window width check
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "icon-overlay-close" ? "" : "icon-overlay-close",
                            iconOverlay: ""
                        });

                        if (theme.toggled !== "icon-overlay-close" && window.innerWidth >= 992) {
                            setState({
                                toggled: "icon-overlay-close",
                                iconOverlay: "",
                            });
                        }
                        break;
                    case "icontext":
                        // Handle icon-text state
                        setState({
                            dataNavStyle: "",
                            toggled: theme.toggled === "icon-text-close" ? "" : "icon-text-close"
                        });
                        break;
                    case "doublemenu":
                        // Handle double menu state
                        setState({ dataNavStyle: "" });
                        if (theme.toggled === "double-menu-open") {
                            setState({ toggled: "double-menu-close" });
                        } else {
                            // Toggle the active double menu item
                            const sidemenu = Query(".side-menu__item.active");
                            if (sidemenu) {
                                setState({ toggled: "double-menu-open" });
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                } else {
                                    setState({ toggled: "double-menu-close" });
                                }
                            }
                        }
                        break;
                    case "detached":
                        // Handle detached menu state
                        setState({
                            toggled: theme.toggled === "detached-close" ? "" : "detached-close",
                            iconOverlay: ""
                        });
                        break;
                    default:
                        setState({ toggled: "" });
                        break;
                }

                // Handle navStyle changes
                switch (navStyle) {
                    case "menu-click":
                        setState({
                            toggled: theme.toggled === "menu-click-closed" ? "" : "menu-click-closed"
                        });
                        break;
                    case "menu-hover":
                        setState({
                            toggled: theme.toggled === "menu-hover-closed" ? "" : "menu-hover-closed"
                        });
                        break;
                    case "icon-click":
                        setState({
                            toggled: theme.toggled === "icon-click-closed" ? "" : "icon-click-closed"
                        });
                        break;
                    case "icon-hover":
                        setState({
                            toggled: theme.toggled === "icon-hover-closed" ? "" : "icon-hover-closed"
                        });
                        break;
                }
            }
        }
        else {
            // For mobile view (screen width < 992px)
            if (theme.toggled === "close") {
                setState({ toggled: "open" });

                setTimeout(() => {
                    if (theme.toggled === "open") {
                        const overlay = overlayRef.current
                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = overlayRef.current
                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }
                    window.addEventListener("resize", () => {
                        if (window.innerWidth >= 992) {
                            const overlay = Query("#responsive-overlay");
                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                setState({ toggled: "close" });
            }
        }
    };


    const [cartItems, setCartItems] = useState([...cartProduct]);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);
    const handleRemove = (itemId: number, event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };

    function dec(el: React.MouseEvent<HTMLButtonElement>) {
        el.preventDefault();

        const parent = el.currentTarget.parentElement;
        if (!parent) return;

        const input = parent.querySelector('input') as HTMLInputElement | null;
        if (!input) return;

        const unit = Number(input.value);

        if (unit === 0) return;

        input.value = String(unit - 1);
    }

    function inc(el: React.MouseEvent<HTMLButtonElement>) {
        el.preventDefault();

        const parent = el.currentTarget.parentElement;
        if (!parent) return;

        const input = parent.querySelector('input') as HTMLInputElement | null;
        if (!input) return;

        const unit = Number(input.value);
        input.value = String(unit + 1);
    }

    //full screen
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    };

    //Endfull screen

    // Search function 


    //Search Functionality

    const searchRef = useRef<HTMLInputElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (event: MouseEvent) => {
        const searchInput = searchRef.current;
        const container = containerRef.current;

        if (searchInput && container && !searchInput.contains(event.target as Node) && !container.contains(event.target as Node)) {
            container.classList.remove("searchdrop");
        } else if (searchInput && container && (searchInput === event.target || searchInput.contains(event.target as Node))) {
            container.classList.add("searchdrop");
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleClick);

        return () => {
            document.body.removeEventListener("click", handleClick);
        };
    }, []);

    const searchResultRef = useRef<HTMLDivElement | null>(null);
    const [showa, setShowa] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [listgroup, setListgroup] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);

    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            const target = event.target as Node | null;

            if (
                searchResultRef.current &&
                target &&
                !searchResultRef.current.contains(target)
            ) {
                searchResultRef.current.classList.add('d-none');
            }
        };

        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('click', clickHandler);
        };
    }, []);

    const myfunction = (inputvalue: string) => {
        if (searchResultRef.current) {
            searchResultRef.current.classList.remove("d-none");
        }


        const i: Menuitemtype[] = [];
        const allElement2: Menuitemtype[] = [];
        MENUITEMS.forEach((mainLevel: Menuitemtype) => {
            if (mainLevel.children) {
                setShowa(true);
                mainLevel.children.forEach((subLevel: Menuitemtype) => {
                    i.push(subLevel);
                    if (subLevel.children) {
                        subLevel.children.forEach((subLevel1: Menuitemtype) => {
                            i.push(subLevel1);
                            if (subLevel1.children) {
                                subLevel1.children.forEach((subLevel2: Menuitemtype) => {
                                    i.push(subLevel2);
                                });
                            }
                        });
                    }
                });
            }
        });
        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (
                    allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())
                ) {
                    setListgroup(true);
                    if (
                        allElement.path &&
                        !allElement2.some((el: Menuitemtype) => el.title === allElement.title)
                    ) {
                        allElement2.push(allElement);
                    }
                }
            }
        }

        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setListgroup(false);
                setsearchval("Type something");
                setsearchcolor("text-dark");
            }
            if (!allElement2.length) {
                setListgroup(false);
                setsearchcolor("text-danger");
                setsearchval("There is no component with this name");
            }
        }
        setNavData(allElement2);
    };

    //Responsive Search
    const [responsiveSearch, setResponsiveSearch] = useState(false);

    const handleClose1 = () => setResponsiveSearch(false);
    const handleSearchModal = () => setResponsiveSearch(true);

    return (
        <Fragment>
            {/* <!-- app-header --> */}
            <header className="app-header sticky" id="header">

                {/* <!-- Start::main-header-container --> */}
                <div className="main-header-container container-fluid px-0">

                    {/* <!-- Start::header-content-left --> */}
                    <div className="header-content-left">

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
                                    <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                                    <img src={desktopdark} alt="logo" className="desktop-dark" />
                                    <img src={toggledark} alt="logo" className="toggle-dark" />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div className="header-element mx-lg-0 mx-2" >
                            <Link aria-label="Hide Sidebar" onClick={toggleSidebar}
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                data-bs-toggle="sidebar" to="#!"><span></span></Link>
                        </div>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <div ref={containerRef} className="header-element header-search d-md-block d-none my-auto autoComplete_wrapper">
                            {/* <!-- Start::header-link --> */}
                            <input type="text" className="header-search-bar form-control" id="header-search" onClick={() => { }} ref={searchRef} defaultValue={InputValue} onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })}
                                placeholder="Search for Results..." autoComplete="off" autoCapitalize="off" />
                            <a href="#!" className="header-search-icon border-0">
                                <i className="bi bi-search align-middle"></i>
                            </a>
                            {showa ?
                                <div className="card custom-card search-result w-100 position-absolute search-fix border border-top-0 " ref={searchResultRef}>
                                    <div className="card-header border-bottom">
                                        <div className="card-title mb-0 text-break">Search result of {InputValue}</div>
                                    </div>
                                    <div className='card-body overflow-auto'>
                                        <ListGroup className=''>
                                            {listgroup ?
                                                NavData.map((e) =>
                                                    <ListGroup.Item key={Math.random()} className="">
                                                        <Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShowa(false), setInputValue(""); }}>{e.title}</Link>
                                                    </ListGroup.Item>
                                                )
                                                : <b className={`${searchcolor} `}>{searchval}</b>}
                                        </ListGroup>
                                    </div>
                                </div>
                                : ""}
                            {/* <!-- End::header-link --> */}
                        </div>
                        {/* <!-- End::header-element --> */}

                    </div>
                    {/* <!-- End::header-content-left --> */}

                    {/* <!-- Start::header-content-right --> */}
                    <ul className="header-content-right">

                        {/* <!-- Start::header-element --> */}
                        <li className="header-element d-md-none d-block" >
                            <Link to="#!" className="header-link" data-bs-toggle="modal" onClick={handleSearchModal}
                                data-bs-target="#header-responsive-search">
                                {/* <!-- Start::header-link-icon --> */}
                                <i className="bi bi-search header-link-icon"></i>
                                {/* <!-- End::header-link-icon --> */}
                            </Link>
                        </li>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <SpkDropdown Align="end" Togglevariant='' Customclass="header-element country-selector dropdown custom-dropdown" toggleas="a" Navigate='#!' autoClose={true} Customtoggleclass='header-link dropdown-toggle border-0 border-start' Svgicon={(

                            <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="1.5" color="currentColor">
                                    <path
                                        d="M7 8.38h4.5m5.5 0h-2.5m-3 0h3m-3 0V7m3 1.38c-.527 1.886-1.632 3.669-2.893 5.236M8.393 17c1.019-.937 2.17-2.087 3.214-3.384m0 0c-.643-.754-1.543-1.973-1.8-2.525m1.8 2.525l1.929 2.005" />
                                    <path
                                        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                                </g>
                            </svg>
                        )} Svg={true} Menuclass='main-header-dropdown dropdown-menu dropdown-menu-end'>
                            {Languages.map((idx) => (
                                <li key={idx.id}>
                                    <Link className="dropdown-item d-flex align-items-center" to="#!">
                                        <span className="avatar avatar-rounded avatar-xs lh-1 me-2">
                                            <img src={idx.flag} alt="img" />
                                        </span>
                                        {idx.label}
                                    </Link>
                                </li>
                            ))}

                        </SpkDropdown>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <li className="header-element header-theme-mode" >
                            {/* <!-- Start::header-link|layout-setting --> */}
                            <Link to="#!" className="header-link layout-setting">
                                <span className="dark-layout" onClick={() => updateTheme('light', 'clicked')}>
                                    {/* <!-- Start::header-link-icon --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M12 2v1.5m0 17V22m7.07-2.929l-1.06-1.06M5.99 5.989L4.928 4.93M22 12h-1.5m-17 0H2m17.071-7.071l-1.06 1.06M5.99 18.011l-1.06 1.06"
                                            color="currentColor" />
                                    </svg>
                                    {/* <!-- End::header-link-icon --> */}
                                </span>
                                <span className="light-layout" onClick={() => updateTheme('dark', 'clicked')}>
                                    {/* <!-- Start::header-link-icon --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                        viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M21.5 14.078A8.557 8.557 0 0 1 9.922 2.5C5.668 3.497 2.5 7.315 2.5 11.873a9.627 9.627 0 0 0 9.627 9.627c4.558 0 8.376-3.168 9.373-7.422"
                                            color="currentColor" />
                                    </svg>
                                    {/* <!-- End::header-link-icon --> */}
                                </span>
                            </Link>
                            {/* <!-- End::header-link|layout-setting --> */}
                        </li>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <SpkDropdown autoClose='outside' Align="end" Customclass="header-element cart-dropdown custom-cart" toggleas="a" Navigate='#!' Svg={true} Customtoggleclass='header-link dropdown-toggle border-0 border-start no-caret' Badgetag={true} Badgeclass='header-icon-badge' Menuclass='main-header-dropdown cart-dropdown dropdown-menu dropdown-menu-end'
                            Badgecolor='primary' Badgeid='cart-icon-badge' Badgetext={cartItemCount} Badgepill={true} Svgicon={(
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                    viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" color="currentColor">
                                        <path
                                            d="M8 16h7.263c4.488 0 5.17-2.82 5.998-6.93c.239-1.187.358-1.78.071-2.175s-.837-.395-1.938-.395H6" />
                                        <path
                                            d="M8 16L5.379 3.515A2 2 0 0 0 3.439 2H2.5m6.38 14h-.411C7.105 16 6 17.151 6 18.571a.42.42 0 0 0 .411.429H17.5" />
                                        <circle cx="10.5" cy="20.5" r="1.5" />
                                        <circle cx="17.5" cy="20.5" r="1.5" />
                                    </g>
                                </svg>
                            )}>

                            {/* <!-- Start::main-header-dropdown --> */}
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-16">Cart Items<span
                                        className="badge bg-secondary-transparent ms-1 fs-12"
                                        id="cart-data">{cartItemCount}</span></p>
                                    <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/products`} className="d-inline-flex align-items-center"><span className="text-primary text-decoration-underline">Continue
                                        Shopping </span><i className="ti ti-arrow-narrow-right ms-1 text-primary"></i></Link>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <SimpleBar className="list-unstyled mb-0" id="header-cart-items-scroll">
                                {cartItems.map((idx) => (
                                    <Dropdown.Item as="li" className="dropdown-item" key={idx.id}>
                                        <div className="d-flex align-items-center cart-dropdown-item gap-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md bg-gray-300">
                                                    <img src={idx.src} alt="img" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="d-flex align-items-center justify-content-between mb-0">
                                                    <div className="mb-0 fs-14 fw-medium">
                                                        <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/cart`}>{idx.name}</Link>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <div className="input-group border-0 rounded flex-nowrap">
                                                                <span onClick={dec} className="badge me-1 mt-1 rounded-circle bg-primary-transparent product-quantity-minus"><i className="ri-subtract-line"></i></span>
                                                                <input type="text" className="form-control form-control-sm bg-transparent border-0 p-0 text-center w-100" aria-label="quantity" id="product-quantity4" defaultValue={idx.qty} />
                                                                <span onClick={inc} className="badge ms-1 mt-1 rounded-circle bg-primary-transparent product-quantity-plus"><i className="ri-add-line"></i></span>
                                                            </div>
                                                            <span className="fs-12 text-default">Color : <span className={`text-${idx.class} fw-semibold`}> {idx.color}</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <Link to="#!" onClick={(event) => handleRemove(idx.id, event)}
                                                            className="header-cart-remove dropdown-item-close"><i
                                                                className="ri-delete-bin-line"></i></Link>
                                                        <h6 className="fw-medium mb-0 mt-1 text-nowrap">${idx.newpr}<span
                                                            className="text-decoration-line-through text-muted fw-normal ms-1 fs-13 d-inline-block">${idx.oldpr}</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                ))}
                            </SimpleBar>
                            <div className={`p-3 empty-header-item border-top ${cartItemCount === 0 ? 'd-none' : 'd-block'}`}>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="fw-medium fs-14">Order Total :</div>
                                    <h6 className="mb-0">$740</h6>
                                </div>
                                <div className="text-center d-grid">
                                    <Link to={`${import.meta.env.BASE_URL}apps/ecommerce/checkout`} className="btn btn-primary btn-wave">Proceed to
                                        checkout</Link>
                                </div>
                            </div>
                            <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-primary-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2"></i>
                                    </span>
                                    <h6 className="fw-medium mb-1 mt-3">Your Cart is Empty</h6>
                                    <span className="mb-3 fw-normal fs-13 d-block">Add some items to make it happy :)</span>
                                </div>
                            </div>
                            {/* <!-- End::main-header-dropdown --> */}
                        </SpkDropdown>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <SpkDropdown toggleas="a" Align="end" Togglevariant='' Customtoggleclass='header-link dropdown-toggle no-caret border-0 border-start' Customclass="header-element notifications-dropdown d-xl-block d-none dropdown"
                            Navigate='#!' Id='messageDropdown' Svg={true} Badgetag={true} Badgecolor='pink'
                            Badgeclass='header-icon-pulse bg-pink rounded pulse pulse-pink custom-header-icon-pulse' Menuclass='main-header-dropdown dropdown-menu dropdown-menu-end'
                            Svgicon={(
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                    viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" color="currentColor">
                                        <path
                                            d="M2.53 14.77c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.13-.857-.777-1.57-1.256-2.267c-.627-.924-.689-1.931-.69-3.003C19.525 5.358 16.157 2 12 2S4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267" />
                                        <path d="M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3" />
                                    </g>
                                </svg>
                            )}>
                            {/* <!-- Start::main-header-dropdown --> */}
                            <div className="p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-16">Notifications  <span className="badge bg-secondary-transparent ms-1" id="notifiation-data">20</span></p>
                                    <a href="#!" className="text-primary text-decoration-underline">Mark As Read<i className="ri-arrow-right-line ms-1"></i></a>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className="nav nav-tabs nav-tabs-header m-3 p-2 rounded bg-light" role="tablist">
                                    <Nav.Item className="nav-item border-0" role="presentation">
                                        <Nav.Link eventKey="first" className="" data-bs-toggle="tab" role="tab" aria-current="page"
                                            href="#tabpane1" aria-selected="true">View All</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item border-0" role="presentation">
                                        <Nav.Link eventKey="second" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#tabpane2"
                                            aria-selected="false" tabIndex={-1}>Mentions</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item border-0" role="presentation">
                                        <Nav.Link eventKey="third" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#tabpane3"
                                            aria-selected="false" tabIndex={-1}>Followers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item border-0" role="presentation">
                                        <Nav.Link eventKey="fourth" className="" data-bs-toggle="tab" role="tab" aria-current="page" href="#tabpane4"
                                            aria-selected="false" tabIndex={-1}>Invites</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="border-top">
                                    <Tab.Pane eventKey="first" className="text-muted p-0 border-0" id="tabpane1" role="tabpanel">
                                        <SimpleBar className="list-unstyled mb-0" id="header-notification-scroll">
                                            {NotificationsViewall.map((idx) => (
                                                <li className="dropdown-item" key={idx.id}>
                                                    <div className="d-flex align-items-start">
                                                        <div className="pe-2 lh-1">
                                                            <span className={`avatar avatar-md bg-light  ${idx.icon ? 'bg-secondary-transparent' : ''} `}>
                                                                {idx.icon ? (<i className={idx.icon}></i>) : <img src={idx.avatar} alt="img" />}
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                                            <div>
                                                                <p className="mb-1" dangerouslySetInnerHTML={{ __html: idx.message }}></p>
                                                                <div className="text-muted fs-13">
                                                                    <span><i className="ri-time-line me-1"></i>{idx.timestamp}</span>
                                                                </div>
                                                                {idx.someContent ? (
                                                                    <div className="p-2 mt-2 rounded bg-light border text-default"> Amazing! Fast, to the point,really amazing to work with them!!! </div>
                                                                ) : ''}

                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fs-12 text-muted text-nowrap d-inline-flex align-items-center"><i className={`ri-checkbox-blank-circle-fill me-1 fs-8 text-${idx.statusColor}`}></i>{idx.timeAgo}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="text-muted p-0 border-0" id="tabpane2" role="tabpanel">
                                        <SimpleBar className="list-unstyled mb-0" id="header-notification-scroll1">
                                            {NotificationsMentions.map((idx) => (
                                                <li className="dropdown-item" key={idx.id}>
                                                    <div className="d-flex align-items-start">
                                                        <div className="pe-2 lh-1">
                                                            <span className="avatar avatar-md bg-light text-default">
                                                                <img src={idx.avatar} alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                                            <div>
                                                                <p className="mb-1"><a href="#!"><span
                                                                    className="fw-semibold me-1 d-inline-block">{idx.user}</span>{idx.message}</a></p>
                                                                <div className="text-muted fs-13">
                                                                    <span><i className="ri-time-line me-1"></i>{idx.timestamp}</span>
                                                                </div>
                                                                {idx.someContent ? (
                                                                    <div className="p-2 mt-2 rounded bg-light border text-default"> It sounds like you had a great experience!What specifically? </div>
                                                                ) : ''}

                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fs-12 text-muted text-nowrap d-inline-flex align-items-center"><i
                                                                    className={`ri-checkbox-blank-circle-fill me-1 fs-8 text-${idx.statusColor}`}></i>{idx.timeAgo}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className="text-muted p-0 border-0" id="tabpane3" role="tabpanel">
                                        <SimpleBar className="list-unstyled mb-0" id="header-notification-scroll2">
                                            {NotificationsFollow.map((idx) => (
                                                <li className="dropdown-item" key={idx.id}>
                                                    <div className="d-flex align-items-start">
                                                        <div className="pe-2 lh-1">
                                                            <span className="avatar avatar-md bg-light text-default">
                                                                <img src={idx.avatar} alt="img" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                                            <div>
                                                                <p className="mb-1"><a href="#!"><span
                                                                    className="fw-semibold me-1 d-inline-block">{idx.user}</span>{idx.message}</a></p>
                                                                <div className="text-muted fs-13">
                                                                    <span><i className="ri-time-line me-1"></i>{idx.timestamp}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fs-12 text-muted d-inline-flex align-items-center"><i
                                                                    className={`ri-checkbox-blank-circle-fill me-1 fs-8 text-${idx.statusColor}`}></i>{idx.timeAgo}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </SimpleBar>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="text-muted p-0 border-0" id="tabpane4" role="tabpanel">
                                        <SimpleBar className="list-unstyled mb-0" id="header-notification-scroll3">
                                            {NotificationsInvites.map((idx) => (
                                                <li className="dropdown-item" key={idx.id}>
                                                    <div className="d-flex align-items-start">
                                                        <div className="pe-2 lh-1">
                                                            <span className={`avatar avatar-md bg-${idx.iconBg}-transparent`}>
                                                                <i className={`${idx.iconClass} fs-18`}></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow-1 d-flex align-items-start justify-content-between">
                                                            <div>
                                                                <p className="mb-1" dangerouslySetInnerHTML={{ __html: idx.message }}></p>
                                                                <div className="text-muted fs-13">
                                                                    <span><i className="ri-time-line me-1"></i>{idx.timestamp}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p
                                                                    className="mb-0 fs-12 text-muted d-inline-flex text-nowrap ms-4 align-items-center">
                                                                    <i
                                                                        className={`ri-checkbox-blank-circle-fill me-1 fs-8 text-${idx.statusColor}`}></i>{idx.timeAgo}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </SimpleBar>
                                    </Tab.Pane>
                                </Tab.Content>
                                <div className="p-3 empty-header-item1 border-top">
                                    <div className="d-grid">
                                        <a href="#!" className="btn btn-primary btn-wave">View All</a>
                                    </div>
                                </div>
                                <div className="p-5 empty-item1 d-none">
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-notification-off-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-medium mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </Tab.Container>
                            {/* <!-- End::main-header-dropdown --> */}
                        </SpkDropdown>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <li className="header-element header-fullscreen">
                            {/* <!-- Start::header-link --> */}
                            <Link to="#!" className="header-link" onClick={toggleFullScreen}>
                                {fullScreen ? (

                                    <svg xmlns="http://www.w3.org/2000/svg" className="full-screen-close header-link-icon"
                                        width="1em" height="1em" viewBox="0 0 24 24">
                                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" color="currentColor">
                                            <path
                                                d="M2 10.002c.029-3.414.218-5.296 1.46-6.537C4.924 2 7.282 2 11.997 2s7.073 0 8.538 1.465S22 7.287 22 12.003c0 4.715 0 7.073-1.465 8.537c-1.241 1.242-3.123 1.431-6.537 1.46" />
                                            <path
                                                d="M4.999 13c-1.17.035-1.868.165-2.351.648s-.613 1.18-.648 2.35M8.001 13c1.17.035 1.868.165 2.351.648s.613 1.18.648 2.35m0 3.003c-.035 1.17-.165 1.868-.648 2.351s-1.18.613-2.35.648m-3.003 0c-1.17-.035-1.868-.165-2.351-.648s-.613-1.18-.648-2.35m14.413-7.996l-2.903-.066c-.432-.01-.777-.345-.782-.757l-.031-2.644m7.331-3.773l-6.747 6.601" />
                                        </g>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" full-screen-open header-link-icon" width="1em"
                                        height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="m12.567 7.934l2.742.1c.407.015.73.35.73.758v2.615m-5.5 2.027l5.044-5.018M2 17c0-1.886 0-2.828.586-3.414S4.114 13 6 13h1c1.886 0 2.828 0 3.414.586S11 15.114 11 17v1c0 1.886 0 2.828-.586 3.414S8.886 22 7 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18zm0-8.5v2M14 2h-4m12 12v-4m-8.5 12h2M2.06 5.5c.154-1.066.453-1.821 1.036-2.404S4.434 2.214 5.5 2.06m13 0c1.066.154 1.821.453 2.404 1.036c.582.583.882 1.338 1.036 2.404m0 13c-.154 1.066-.454 1.821-1.036 2.404c-.583.582-1.338.882-2.404 1.036"
                                            color="currentColor" />
                                    </svg>
                                )}
                            </Link>
                            {/* <!-- End::header-link --> */}
                        </li>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <SpkDropdown Align="end" Id="mainHeaderProfile" Togglevariant='' autoClose={true} Customclass="header-element dropdown custom-dropdown" Imagetag={true} Imageclass='avatar avatar-xs' Imagesrc={face14} iconPosition='before'
                            Customtoggleclass='header-link dropdown-toggle no-caret border-0 border-start' Menuclass='main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end'>
                            {/* <!-- Start::header-link|dropdown-toggle --> */}
                            <li><Link className="dropdown-item d-flex align-items-center" to={`${import.meta.env.BASE_URL}pages/profile`}><i
                                className="ti ti-user me-2 fs-16"></i>Profile</Link></li>
                            <li><Link className="dropdown-item d-flex align-items-center" to={`${import.meta.env.BASE_URL}pages/email/mail-settings`}><i
                                className="ti ti-settings me-2 fs-16"></i>Settings</Link></li>
                            <li><Link className="dropdown-item d-flex align-items-center" to={`${import.meta.env.BASE_URL}`}><i
                                className="ti ti-logout me-2 fs-16"></i>Log Out</Link></li>
                        </SpkDropdown>
                        {/* <!-- End::header-element --> */}

                        {/* <!-- Start::header-element --> */}
                        <li className="header-element">
                            {/* <!-- Start::header-link|switcher-icon --> */}
                            <Link to="#!" className="header-link switcher-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#switcher-canvas" onClick={handleShow}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" width="1em" height="1em"
                                    viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" color="currentColor">
                                        <path
                                            d="m21.318 7.141l-.494-.856c-.373-.648-.56-.972-.878-1.101c-.317-.13-.676-.027-1.395.176l-1.22.344c-.459.106-.94.046-1.358-.17l-.337-.194a2 2 0 0 1-.788-.967l-.334-.998c-.22-.66-.33-.99-.591-1.178c-.261-.19-.609-.19-1.303-.19h-1.115c-.694 0-1.041 0-1.303.19c-.261.188-.37.518-.59 1.178l-.334.998a2 2 0 0 1-.789.967l-.337.195c-.418.215-.9.275-1.358.17l-1.22-.345c-.719-.203-1.078-.305-1.395-.176c-.318.129-.505.453-.878 1.1l-.493.857c-.35.608-.525.911-.491 1.234c.034.324.268.584.736 1.105l1.031 1.153c.252.319.431.875.431 1.375s-.179 1.056-.43 1.375l-1.032 1.152c-.468.521-.702.782-.736 1.105s.14.627.49 1.234l.494.857c.373.647.56.971.878 1.1s.676.028 1.395-.176l1.22-.344a2 2 0 0 1 1.359.17l.336.194c.36.23.636.57.788.968l.334.997c.22.66.33.99.591 1.18c.262.188.609.188 1.303.188h1.115c.694 0 1.042 0 1.303-.189s.371-.519.59-1.179l.335-.997c.152-.399.428-.738.788-.968l.336-.194c.42-.215.9-.276 1.36-.17l1.22.344c.718.204 1.077.306 1.394.177c.318-.13.505-.454.878-1.101l.493-.857c.35-.607.525-.91.491-1.234s-.268-.584-.736-1.105l-1.031-1.152c-.252-.32-.431-.875-.431-1.375s.179-1.056.43-1.375l1.032-1.153c.468-.52.702-.781.736-1.105s-.14-.626-.49-1.234" />
                                        <path d="M15.52 12a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" />
                                    </g>
                                </svg>
                            </Link>
                            <Switcher show={show} handleClose={handleClose} />
                            {/* <!-- End::header-link|switcher-icon --> */}
                        </li>
                        {/* <!-- End::header-element --> */}

                    </ul>
                    {/* <!-- End::header-content-right --> */}

                </div>
                {/* <!-- End::main-header-container --> */}

            </header>
            {/* <!-- /app-header --> */}
            <Modal show={responsiveSearch} onHide={handleClose1} className="modal fade" id="header-responsive-search" tabIndex="-1" aria-labelledby="header-responsive-search" aria-hidden="true">
                <Modal.Body>
                    <div className="input-group">
                        <input type="text" className="form-control border-end-0" placeholder="Search Anything ..." onClick={() => { }} ref={searchRef} defaultValue={InputValue} onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })}
                            aria-label="Search Anything ..." aria-describedby="button-addon2" />
                        <button className="btn btn-primary rounded-end-1" type="button" id="button-addon2"><i className="bi bi-search"></i></button>

                        {showa ?
                            <div className="card custom-card search-result w-100 position-absolute search-fix border mt-5 rounded " ref={searchResultRef}>
                                <div className="card-header border-bottom">
                                    <div className="card-title mb-0 text-break">Search result of {InputValue}</div>
                                </div>
                                <div className='card-body overflow-auto'>
                                    <ListGroup className=''>
                                        {listgroup ?
                                            NavData.map((e) =>
                                                <ListGroup.Item key={Math.random()} className="">
                                                    <Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShowa(false), setInputValue(""); }}>{e.title}</Link>
                                                </ListGroup.Item>
                                            )
                                            : <b className={`${searchcolor} `}>{searchval}</b>}
                                    </ListGroup>
                                </div>
                            </div>
                            : ""}
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Header