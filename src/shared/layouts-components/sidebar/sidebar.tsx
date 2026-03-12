import { Fragment, useEffect, useRef, useState } from "react";
import { data$, getState, setState } from "../../services/switcherServices";
import { MENUITEMS, type Menuitemtype } from "./nav";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import Menuloop from "./menuloop";
import logo1 from "../../../assets/images/brand-logos/desktop-logo.png";
import logo2 from "../../../assets/images/brand-logos/toggle-logo.png";
import logo3 from "../../../assets/images/brand-logos/desktop-dark.png";
import logo4 from "../../../assets/images/brand-logos/toggle-dark.png";


const Sidebar = () => {

  let [variable, setVariable] = useState(getState());
  const local_varaiable = variable;

  useEffect(() => {
    const subscription = data$.subscribe((e) => {
      setVariable(e);
    });
    return () => subscription.unsubscribe();
  }, [variable]);


  const [menuitems, setMenuitems] = useState(MENUITEMS);

  function closeMenuFn() {
    const closeMenuRecursively = (items: Menuitemtype[]) => {
      items?.forEach((item: Menuitemtype) => {
        item.active = false;
        closeMenuRecursively(item.children);
      });
    };
    closeMenuRecursively(MENUITEMS);
    setMenuitems((arr: Menuitemtype[]) => [...arr]);
  }

  const sidebarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const slidesArrow = (selector: string): HTMLElement | null => document.querySelector(selector);

  const SelectorAll = (selector: string) => document.querySelectorAll(selector);

  useEffect(() => {
    const resizeEventListeners = [
      { event: 'resize', handler: menuResizeFn },
      { event: 'resize', handler: checkHoriMenu }
    ];
    resizeEventListeners.forEach(({ event, handler }) => {
      window.addEventListener(event, handler);
    });
    const mainContent = slidesArrow(".main-content");
    if (window.innerWidth <= 992) {
      if (mainContent) {
        const newState = {
          toggled: "close"
        }
        setState(newState)
      } else if (document.documentElement.getAttribute('data-nav-layout') == 'horizontal') {
        closeMenuFn();
      }
    }
    if (mainContent) {
      mainContent.addEventListener('click', menuClose);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      resizeEventListeners.forEach(({ event, handler }) => {
        window.removeEventListener(event, handler);
      });
      if (mainContent) {
        mainContent.removeEventListener('click', menuClose);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Baselocation = useLocation()

  function Onhover() {
    const theme = getState();
    if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay != 'open') {
      const newState = {
        "iconOverlay": "open"
      }
      setState(newState)
    }

  }
  function Outhover() {
    const theme = getState();
    if ((theme.toggled == "icon-overlay-close" || theme.toggled == "detached-close") && theme.iconOverlay == "open") {
      const newState = {
        "iconOverlay": ""
      }
      setState(newState)
    }
  }

  const overlayRef = useRef<HTMLDivElement | null>(null);

  function menuClose() {

    const theme = getState();;

    if (window.innerWidth <= 992) {
      const newState = {
        toggled: "close"
      }
      setState(newState)
    }
    if (overlayRef.current) {
      overlayRef.current.classList.remove("active");
    }
    if (theme.dataNavLayout === "horizontal" || theme.dataNavStyle === "menu-click" || theme.dataNavStyle === "icon-click") {
      closeMenuFn();
    }
  }


  const WindowPreSize = typeof window !== 'undefined' ? [window.innerWidth] : [];
  function menuResizeFn() {
    WindowPreSize.push(window.innerWidth);
    if (WindowPreSize.length > 2) { WindowPreSize.shift() }
    if (WindowPreSize.length > 1) {
      if ((WindowPreSize[WindowPreSize.length - 1] < 992) && (WindowPreSize[WindowPreSize.length - 2] >= 992)) {
        // less than 992;
        const newState = {
          toggled: "close"
        }
        setState(newState)
      }

      if ((WindowPreSize[WindowPreSize.length - 1] >= 992) && (WindowPreSize[WindowPreSize.length - 2] < 992)) {
        const theme = getState();
        // greater than 992
        if (theme.dataVerticalStyle == "doublemenu") {
          const doublemenuactive = slidesArrow(".double-menu-active");

          if (doublemenuactive) {
            const newState = {
              toggled: "double-menu-open"
            }
            setState(newState)
          }
          else {
            const newState = {
              toggled: "double-menu-close"
            }
            setState(newState)
          }
        } else {
          setState({ toggled: "" });
        }
      }
    }
  }
  const menuNavRef = useRef<HTMLUListElement | null>(null);
  const mainContainerRef = useRef<HTMLUListElement | null>(null);

  function checkHoriMenu() {
    const menuNav = menuNavRef.current;
    const mainContainer1 = mainContainerRef.current;

    if (menuNav && mainContainer1) {
      const computedStyle = window.getComputedStyle(menuNav);
      const marginLeftValue = Math.ceil(
        Number(computedStyle.marginLeft.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(computedStyle.marginRight.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
      } else {
        menuNav.style.marginLeft = "0px";
        menuNav.style.marginRight = "0px";
        menuNav.style.marginInlineStart = "0px";
      }

      const isRtl = document.documentElement.getAttribute("dir") === "rtl";

      if (!isRtl) {
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
          if (Math.abs(check) < Math.abs(marginLeftValue)) {
            menuNav.style.marginLeft = -check + "px";
          }
        }
      } else {
        if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
          if (Math.abs(check) < Math.abs(marginRightValue)) {
            menuNav.style.marginRight = -check + "px";
          }
        }
      }
    }
  }

  function switcherArrowFn(): void {

    // Used to remove is-expanded class and remove class on clicking arrow buttons
    function slideClick(): void {
      const slide = SelectorAll(".slide");
      const slideMenu = SelectorAll(".slide-menu");

      slide.forEach((element) => {
        if (element.classList.contains("is-expanded")) {
          element.classList.remove("is-expanded");
        }
      });

      slideMenu.forEach((element) => {
        if (element.classList.contains("open")) {
          element.classList.remove("open");
          element.style.display = "none";
        }
      });
    }

    slideClick();
  }

  function slideRight() {
    const menuNav = slidesArrow(".main-menu");
    const mainContainer1 = slidesArrow(".main-sidebar");
    const slideRightButton = slidesArrow("#slide-right");
    const slideLeftButton = slidesArrow("#slide-left");
    const element = slidesArrow(".main-menu > .slide.open");
    const element1 = slidesArrow(".main-menu > .slide.open > ul");
    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) > Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);

              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            if (slideRightButton) {
              slideRightButton.classList.remove("hidden");
            }
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }


      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "hidden";
      }
    }

    switcherArrowFn();
  }

  function slideLeft() {
    const menuNav = slidesArrow(".main-menu");
    const mainContainer1 = slidesArrow(".main-sidebar");
    const slideRightButton = slidesArrow("#slide-right");
    const slideLeftButton = slidesArrow("#slide-left");
    const element = slidesArrow(".main-menu > .slide.open");
    const element1 = slidesArrow(".main-menu > .slide.open > ul");
    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) <= Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineStart = "0px";
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineStart = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);

              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }

      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "hidden";
      }
    }

    switcherArrowFn();
  }

  const level = 0;
  let hasParent = false;
  let hasParentLevel = 0;

  function setSubmenu(event: MouseEvent, targetObject: Menuitemtype, MENUITEMS = menuitems) {
    // const theme = getState();
    if (!event?.ctrlKey) {
      for (const item of MENUITEMS) {
        if (item === targetObject) {
          item.active = true;
          item.selected = true;
          setMenuAncestorsActive(item);
        } else if (!item.active && !item.selected) {
          item.active = false; // Set active to false for items not matching the target
          item.selected = false; // Set active to false for items not matching the target
        } else {
          removeActiveOtherMenus(item);
        }
        if (item.children && item.children.length > 0) {
          setSubmenu(event, targetObject, item.children);
        }
      }

    }

    setMenuitems((arr: Menuitemtype[]) => [...arr]);
  }
  function getParentObject(obj: Menuitemtype[], childObject: Menuitemtype) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && JSON.stringify(obj[key]) === JSON.stringify(childObject)) {
          return obj; // Return the parent object
        }
        if (typeof obj[key] === "object") {
          const parentObject: any = getParentObject(obj[key], childObject);
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null; // Object not found
  }
  function setMenuAncestorsActive(targetObject: Menuitemtype) {
    const parent = getParentObject(menuitems, targetObject);
    const theme = getState();
    if (parent) {
      if (hasParentLevel > 2) {
        hasParent = true;
      }
      parent.active = true;
      parent.selected = true;
      hasParentLevel += 1;
      setMenuAncestorsActive(parent);
    }
    else if (!hasParent) {
      if (theme.dataVerticalStyle == "doublemenu") {
        const newState = {
          toggled: "double-menu-close"
        }
        setState(newState)

      }
    }
  }
  function removeActiveOtherMenus(item: Menuitemtype | Menuitemtype[]) {
    if (!item) return;
    if (Array.isArray(item)) {
      for (const val of item) {
        val.active = false;
        val.selected = false;

        if (val.children && val.children.length > 0) {
          removeActiveOtherMenus(val.children);
        }
      }
    } else {
      item.active = false;
      item.selected = false;

      if (item.children && item.children.length > 0) {
        removeActiveOtherMenus(item.children);
      }
    }
  }
  //
  function setMenuUsingUrl(currentPath: string) {

    hasParent = false;
    hasParentLevel = 1;
    // Check current url and trigger the setSidemenu method to active the menu.
    const setSubmenuRecursively = (items: Menuitemtype[]) => {

      items?.forEach((item: Menuitemtype) => {
        if (item.path == '') { }
        else if (item.path === currentPath) {
          setSubmenu(null, item);
        }
        if (item.children) {
          setSubmenuRecursively(item.children);
        }
      });
    };
    setSubmenuRecursively(MENUITEMS);
  }
  const [previousUrl, setPreviousUrl] = useState("/");

  useEffect(() => {
    const currentPath = Baselocation.pathname.endsWith("/") ? Baselocation.pathname.slice(0, -1) : Baselocation.pathname;

    if (currentPath !== previousUrl) {
      setMenuUsingUrl(currentPath);
      setPreviousUrl(currentPath);
    }
  }, [Baselocation.pathname]);


  //
  function toggleSidemenu(event: MouseEvent, targetObject: Menuitemtype, MenuItems = menuitems, isChild = false) {
    const theme = getState();
    let element = event.target;

    if (
      (theme.dataNavStyle !== "icon-hover" && theme.dataNavStyle !== "menu-hover") ||
      (window.innerWidth < 992) ||
      (theme.dataNavLayout !== "horizontal" && theme.toggled !== "icon-hover-closed" && theme.toggled !== "menu-hover-closed")
    ) {
      for (const item of MenuItems) {
        if (item === targetObject) {
          if (theme.dataVerticalStyle === 'doublemenu') {
            // checking for child in double menu 
            if (isChild) {
              item.active = !item.active; // Children toggle normally
            } else {
              item.active = true; // Parent should always stay active when double menu active
            }
          } else {
            item.active = !item.active; // Regular toggle 
          }

          if (item.active) {
            closeOtherMenus(MenuItems, item);
          } else if (theme.dataVerticalStyle === 'doublemenu') {
            // setState({ ...theme, toggled: "double-menu-close" });
          }

          setAncestorsActive(MenuItems, item);
        } else if (!item.active && theme.dataVerticalStyle !== 'doublemenu') {
          item.active = false;
        }

        if (item.children && item.children.length > 0) {
          toggleSidemenu(event, targetObject, item.children, true); // Always pass isChild = true for recursive
        }
      }

      if (targetObject?.children && targetObject.active) {
        if (theme.dataVerticalStyle === 'doublemenu' && theme.toggled !== 'double-menu-open') {

          for (const item of MenuItems) {
            if (item.children && item.children.length > 0) {
              setState({ ...theme, toggled: "double-menu-open" });
            }
            else {
              setState({ ...theme, toggled: "double-menu-close" });
            }
          }
        }
      }

      // Directional logic for horizontal layout
      if (
        element &&
        theme.dataNavLayout === 'horizontal' &&
        (theme.dataNavStyle === 'menu-click' || theme.dataNavStyle === 'icon-click')
      ) {
        const listItem = element.closest("li");
        if (listItem) {
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0
          let listItemUL = listItem.closest('ul:not(.main-menu)');
          while (listItemUL) {
            listItemUL = listItemUL.parentElement?.closest('ul:not(.main-menu)');
            if (listItemUL) outterUlWidth += listItemUL.clientWidth;
          }

          if (siblingUL) {
            let siblingULRect = listItem.getBoundingClientRect();
            if (theme.dir === 'rtl') {
              targetObject.dirchange =
                (siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 &&
                  outterUlWidth < window.innerWidth &&
                  outterUlWidth + siblingULRect.width * 2 < window.innerWidth)
                  ? true : false;
            } else {
              targetObject.dirchange =
                (outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth &&
                  siblingULRect.right >= 0 &&
                  outterUlWidth + siblingULRect.width * 2 < window.innerWidth)
                  ? true : false;
            }
          }
        }
      }
    }

    setMenuitems((arr: Menuitemtype[]) => [...arr]); // ✅ Triggers re-render
  }

  function setAncestorsActive(MenuItems: Menuitemtype, targetObject: Menuitemtype) {
    const theme = variable;
    const parent = findParent(MenuItems, targetObject);
    if (parent) {
      parent.active = true;
      if (parent.active) {
        const newState = {
          ...theme,
          toggled: "double-menu-open"
        }
        setState(newState)
        // setState({ ...theme, toggled: "double-menu-open" });
      }

      setAncestorsActive(MenuItems, parent);
    }
  }

  function closeOtherMenus(MENUITEMS: Menuitemtype[], targetObject: Menuitemtype) {
    for (const item of MENUITEMS) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }


  function findParent(MenuItems: Menuitemtype[], targetObject: Menuitemtype): Menuitemtype | null {
    for (const item of MenuItems) {
      if (item.children && item.children.includes(targetObject)) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const parent: Menuitemtype | null = findParent(MenuItems = item.children, targetObject);
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }
  //
  function HoverToggleInnerMenuFn(event: MouseEvent, item: Menuitemtype) {
    const theme = getState();;
    let element = event.target;
    if (element && theme.dataNavLayout == "horizontal" && (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")) {
      const listItem = element.closest("li");
      if (listItem) {
        // Find the first sibling <ul> element
        const siblingUL = listItem.querySelector("ul");
        let outterUlWidth = 0;
        let listItemUL = listItem.closest("ul:not(.main-menu)");
        while (listItemUL) {
          listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
          if (listItemUL) {
            outterUlWidth += listItemUL.clientWidth;
          }
        }
        if (siblingUL) {
          // You've found the sibling <ul> element
          let siblingULRect = listItem.getBoundingClientRect();
          if (theme.dir == "rtl") {
            if ((siblingULRect.left - siblingULRect.width - outterUlWidth + 150 < 0 && outterUlWidth < window.innerWidth) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          } else {
            if ((outterUlWidth + siblingULRect.right + siblingULRect.width + 50 > window.innerWidth && siblingULRect.right >= 0) && (outterUlWidth + siblingULRect.width + siblingULRect.width < window.innerWidth)) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          }
        }
      }
    }
  }

  //to open menu
  const Sideclick = () => {
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute("data-icon-overlay") != "open") {
        html.setAttribute("data-icon-overlay", "open");
      }

    }
  };

  const handleClick = (event: MouseEvent) => {
    // Your logic here
    event.preventDefault(); // Prevents the default anchor behavior (navigation)
    // ... other logic you want to perform on click
  };

  return (
    <Fragment>
      <div id="responsive-overlay" ref={overlayRef} onClick={() => { menuClose(); }}></div>
      <aside className="app-sidebar sticky" id="sidebar" onMouseOver={Onhover} onMouseLeave={Outhover} >
        <div className="main-sidebar-header">
          <Link to={`${import.meta.env.BASE_URL}dashboards/sales/`} className="header-logo">
            <img src={logo1} alt="logo" className="desktop-logo" />
            <img src={logo2} alt="logo" className="toggle-logo" />
            <img src={logo3} alt="logo" className="desktop-dark" />
            <img src={logo4} alt="logo" className="toggle-dark" />
          </Link>
        </div>
        <SimpleBar className="main-sidebar" id="sidebar-scroll">
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div className="slide-left" id="slide-left" onClick={slideLeft} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
            </div>
            <ul className="main-menu" onClick={() => Sideclick()}>
              {MENUITEMS.map((list, index) => (
                <Fragment key={index}>
                  <li className={` ${list.menutitle ? "slide__category" : ""} ${list.type === 'link' ? 'slide' : ''} ${list.type === 'sub' ? 'slide has-sub' : ''} ${list.active ? 'open' : ''}  ${list?.selected ? 'active' : ''}  `}>
                    {list.menutitle ? <span className='category-name'>{list.menutitle}</span> : ""}
                    {list.type === "link" ?
                      <Link to={list.path} className={`side-menu__item  ${list.selected ? 'active' : ''}`}>
                        <span className={`${local_varaiable?.dataVerticalStyle == 'doublemenu' ? '' : 'none'}`}>
                          {/* <SpkTooltips placement="auto" title={list.title}> */}
                          <div>{list.icon}</div>
                          {/* </SpkTooltips> */}
                        </span>
                        {/* {local_varaiable.dataVerticalStyle != "doublemenu" ? list.icon : ""} */}
                        <span className="side-menu__label">{list.title} {list.badgetxt ? (<span className={list.class}>{list.badgetxt}</span>
                        ) : (
                          ""
                        )}
                        </span>
                      </Link>
                      : ""}
                    {list.type === "empty" ?
                      <Link to="#!" className='side-menu__item' onClick={handleClick} >{list.icon}<span className=""> {list.title} {list.badgetxt ? (
                        <span className={list.class}>{list.badgetxt} </span>
                      ) : (
                        ""
                      )}
                      </span>
                      </Link>
                      : ""}
                    {list.children && <Menuloop MenuItems={list} level={level + 1} handleToMenu={toggleSidemenu} HoverToggleInnerMenuFn={HoverToggleInnerMenuFn} />}

                  </li>
                </Fragment>
              ))}
            </ul>
            <div className="slide-right" id="slide-right" onClick={slideRight}><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
          </nav>
        </SimpleBar>
      </aside>
    </Fragment>
  );
};

export default Sidebar;