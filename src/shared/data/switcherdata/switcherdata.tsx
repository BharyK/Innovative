import {
  useState,
  type ClassAttributes,
  type InputHTMLAttributes,
  type JSX,
} from "react";
import { MENUITEMS, type Menuitemtype } from "../../layouts-components/sidebar/nav";
import { getState, setState } from "../../services/switcherServices";

const switcherSelector = (selector: string) => {
  if (typeof selector !== "string" || selector.trim() === "") {
    return null;
  }
  return document?.querySelector<HTMLElement>(selector);
};
const switcherDoucmentIdSelector = (selector: string): HTMLElement | null => {
  return document.getElementById(selector);
};

const getDocumentElement = (): HTMLElement => {
  return document.documentElement;
};

export const updateTheme = (themeType: string, clicked: string | boolean) => {
  const newState = {
    dataThemeMode: themeType === "dark" ? "dark" : "light",
    dataHeaderStyles: themeType === "dark" ? "dark" : "light",
    dataMenuStyles: themeType === "dark" ? "dark" : "dark",
    bodyBg: "",
    bodyBg2: "",
    inputBorder: "",
    formControlBg: "",
    lightRgb: "",
    gray: "",
  };
  setState(newState);
  localStorage.setItem(`Innovative${themeType}Theme`, themeType);
  localStorage.removeItem(
    `Innovative${themeType === "dark" ? "light" : "dark"}Theme`
  );

  if (clicked === "clicked") {
    localStorage.removeItem("bodyBg");
    localStorage.removeItem("bodyBg2");
    localStorage.removeItem("bgImg");
    localStorage.removeItem("Innovativeheader");
    localStorage.removeItem("Innovativemenu");
    localStorage.removeItem("lightRgb");
    localStorage.removeItem("formControlBg");
  }
};

export const setDirection = (direction: "ltr" | "rtl") => {
  const newState = {
    dir: direction,
  };

  setState(newState);

  // Manage localStorage based on the direction
  if (direction === "rtl") {
    localStorage.setItem("Innovativertl", "rtl");
    localStorage.removeItem("Innovativeltr");
  } else {
    localStorage.removeItem("Innovativertl");
  }
};

export function closeMenu() {
  const closeMenudata = (items: Menuitemtype[]) => {
    items?.forEach((item) => {
      item.active = false;
      if (item.children) {
        closeMenudata(item.children);
      }
    });
  };
  closeMenudata(MENUITEMS);
}

export const updateLayout = (layoutType: string) => {
  setTimeout(() => {
    switcherSelector("")?.click();
  }, 100);
  const theme = getState();
  const darkmenu1 = theme.dataMenuStyles ? theme.dataMenuStyles : "light";
  const darkmenu = theme.dataMenuStyles ? theme.dataMenuStyles : "dark";
  const newState = {
    dataNavLayout: layoutType === "horizontal" ? "horizontal" : "vertical",
    // dataVerticalStyle: layoutType === "vertical" ? "overlay" : "",
    dataNavStyle: localStorage.Innovativenavstyles
      ? localStorage.Innovativenavstyles
      : layoutType === "vertical"
        ? localStorage.Innovativenavstyles
        : layoutType === "horizontal"
          ? "menu-click"
          : "",
    // toggled: layoutType === "vertical" ? "" : '',
    dataMenuStyles:
      layoutType === "horizontal"
        ? theme.class === "dark"
          ? darkmenu
          : darkmenu1
        : darkmenu,
  };

  setState(newState);
  localStorage.setItem("InnovativeLayout", layoutType);

  if (layoutType === "vertical") {
    const updateNavStyleLocal = localStorage.Innovativenavstyles
      ? localStorage.Innovativenavstyles
      : '';



    localStorage.setItem("Innovativenavstyles", updateNavStyleLocal);
    updateNavStyle(updateNavStyleLocal, theme.toggled);

  } else {
    localStorage.removeItem("Innovativeverticalstyles");
  }

  const Sidebar: HTMLElement | null = switcherSelector(".main-menu");
  if (Sidebar) {
    Sidebar.style.marginInline = "0px";
  }
  closeMenu();
};

export const updateNavStyle = (actionType: string, toggledState: string) => {
  const newState = {
    dataNavStyle: actionType,
    toggled: toggledState,
    dataVerticalStyle: "",
  };
  setState(newState);
  localStorage.setItem("Innovativenavstyles", actionType);
  localStorage.removeItem("Innovativeverticalstyles");

  if (actionType === "icon-click" || actionType === "icon-hover") {
    const Sidebar: HTMLElement | null = switcherSelector(".main-menu");
    if (Sidebar) {
      Sidebar.style.marginInline = "0px";
    }
  }
};

export const DefaultMenu = () => {
  const newState = {
    dataVerticalStyle: "overlay",
    dataNavLayout: "vertical",
    toggled: "",
    dataNavStyle: "",
  };
  setState(newState);
  localStorage.setItem("Innovativeverticalstyles", "default");
  localStorage.removeItem("Innovativenavstyles");
};

export const ClosedMenu = () => {
  const newState = {
    dataNavLayout: "vertical",
    dataVerticalStyle: "closed",
    toggled: "close-menu-close",
  };
  setState(newState);
  localStorage.setItem("Innovativeverticalstyles", "closed");
  localStorage.removeItem("Innovativenavstyles");
};

const IconTextOpenFn = () => {
  let html = getDocumentElement();
  if (html.getAttribute("data-toggled") === "icon-text-close") {
    html.setAttribute("data-icon-text", "open");
  }
};

const IconTextCloseFn = () => {
  let html = getDocumentElement();
  if (html.getAttribute("data-toggled") === "icon-text-close") {
    html.removeAttribute("data-icon-text");
  }
};

export const IconText = () => {
  const newState = {
    dataNavLayout: "vertical",
    dataVerticalStyle: "icontext",
    toggled: "icon-text-close",
    dataNavStyle: "",
  };
  setState(newState);
  localStorage.setItem("Innovativeverticalstyles", "icontext");
  localStorage.removeItem("Innovativenavstyles");
  const MainContent = switcherSelector(".main-content");
  const appSidebar = switcherSelector(".app-sidebar");

  appSidebar?.addEventListener("click", () => {
    IconTextOpenFn();
  });

  MainContent?.addEventListener("click", () => {
    IconTextCloseFn();
  });
};

export const iconOverlayFn = () => {
  const newState = {
    dataNavLayout: "vertical",
    dataVerticalStyle: "overlay",
    toggled: "icon-overlay-close",
  };
  setState(newState);
  localStorage.setItem("Innovativeverticalstyles", "overlay");
  localStorage.removeItem("Innovativenavstyles");
  const icon = switcherDoucmentIdSelector(
    "switcher-icon-overlay"
  ) as HTMLInputElement;
  if (icon) {
    icon.checked = true;
  }

  const MainContent = switcherSelector(".main-content");
  const appSidebar = switcherSelector(".app-sidebar");

  if (appSidebar) {
    appSidebar.addEventListener("mouseenter", DetachedOpenFn);
    appSidebar.removeEventListener("mouseenter", DetachedOpenFn);
  }

  if (MainContent) {
    MainContent.addEventListener("mouseleave", DetachedCloseFn);
    MainContent.removeEventListener("mouseleave", DetachedCloseFn);
  }
};

function DetachedOpenFn() {
  let html = getDocumentElement();
  if (window.innerWidth > 992) {
    if (
      html.getAttribute("data-toggled") === "detached-close" ||
      html.getAttribute("data-toggled") === "icon-overlay-close"
    ) {
      html.setAttribute("data-icon-overlay", "open");
    }
  }
}

function DetachedCloseFn() {
  let html = getDocumentElement();
  if (window.innerWidth > 992) {
    if (
      html.getAttribute("data-toggled") === "detached-close" ||
      html.getAttribute("data-toggled") === "icon-overlay-close"
    ) {
      html.removeAttribute("data-icon-overlay");
    }
  }
}




export const DetachedFn = () => {
  const newState = {
    dataNavLayout: "vertical",
    dataVerticalStyle: "detached",
    toggled: "detached-close",
    dataNavStyle: "",
  };
  setState(newState);
  localStorage.setItem("Innovativeverticalstyles", "detached");
  localStorage.removeItem("Innovativenavstyles");
  const MainContent = switcherSelector(".main-content");
  const appSidebar = switcherSelector(".app-sidebar");

  appSidebar?.addEventListener("click", () => {
    DetachedOpenFn();
  });
  MainContent?.addEventListener("click", () => {
    DetachedCloseFn();
  });
};

export const DoubletFn = () => {
  const newState = {
    dataNavLayout: "vertical",
    dataVerticalStyle: "doublemenu",
    toggled: "double-menu-open",
    dataNavStyle: "",
  };
  setState(newState);

  localStorage.setItem("Innovativeverticalstyles", "doublemenu");
  localStorage.removeItem("Innovativenavstyles");
  setTimeout(() => {
    if (!switcherSelector(".main-menu .slide.active ul")) {
      const theme = getState();
      const newState = {
        ...theme,
        toggled: "double-menu-close",
      };
      setState(newState);
    }
  }, 100);
};

export const setPageStyle = (style: "regular" | "classic" | "modern") => {
  const newState = {
    dataPageStyle: style,
  };

  setState(newState);
  localStorage.setItem(
    `Innovative${style}`,
    style.charAt(0).toUpperCase() + style.slice(1)
  );

  const styles = ["regular", "classic", "modern"];
  styles.forEach((item) => {
    if (item !== style) {
      localStorage.removeItem(`Innovative${item}`);
    }
  });
};

export const setLayout = (layout: "default" | "fullwidth" | "boxed") => {
  const newState = {
    dataWidth: layout,
  };
  setState(newState);

  localStorage.setItem(
    `Innovative${layout}`,
    layout.charAt(0).toUpperCase() + layout.slice(1)
  );

  const layouts = ["default", "fullwidth", "boxed"];
  layouts.forEach((item) => {
    if (item !== layout) {
      localStorage.removeItem(`Innovative${item}`);
    }
  });
};

export const setMenuPosition = (position: "fixed" | "scrollable") => {
  const newState = {
    dataMenuPosition: position,
  };

  setState(newState);

  // Set the corresponding menu position in localStorage and remove the other
  localStorage.setItem(
    `Innovativemenu${position}`,
    `Menu${position.charAt(0).toUpperCase() + position.slice(1)}`
  );
  const otherPosition = position === "fixed" ? "scrollable" : "fixed";
  localStorage.removeItem(`Innovativemenu${otherPosition}`);
};

export const setHeaderPosition = (position: "fixed" | "scrollable") => {
  const newState = {
    dataHeaderPosition: position,
  };

  setState(newState);

  // Set the corresponding menu position in localStorage and remove the other
  localStorage.setItem(
    `Innovativeheader${position}`,
    `Header${position.charAt(0).toUpperCase() + position.slice(1)}`
  );
  const otherPosition = position === "fixed" ? "scrollable" : "fixed";
  localStorage.removeItem(`Innovativeheader${otherPosition}`);
};

export const setMenuStyle = (style: string) => {
  localStorage.setItem("Innovativemenu", style);

  const currentColor = localStorage.getItem("Innovativemenu") || style;
  const newState = {
    dataMenuStyles: currentColor,
  };

  setState(newState);
  // Set the corresponding menu style in localStorage
  localStorage.setItem("Innovativemenu", style);
};

export const setHeaderStyle = (
  style: "light" | "dark" | "color" | "gradient" | "transparent"
) => {
  const newState = {
    dataHeaderStyles: style,
  };

  setState(newState);

  // Set the corresponding menu style in localStorage
  localStorage.setItem("Innovativeheader", style);
};

export const setPrimaryColor = (rgb: string) => {
  const newState = {
    colorPrimaryRgb: rgb,
  };

  setState(newState);
  localStorage.setItem("primaryRGB", rgb);
};

export const updateBackgroundColor = (
  bgColor1: string,
  bgColor2: string,
  clicked: string | boolean
) => {
  const newState = {
    bodyBg: bgColor1,
    bodyBg2: bgColor2,
    inputBorder: "rgba(255,255,255,0.1)",
    lightRgb: bgColor2,
    formControlBg: `rgb(${bgColor2})`,
    dataThemeMode: "dark",
    dataMenuStyles: "dark",
    dataHeaderStyles: "dark",
    gray: "rgba(255,255,255,0.1)",
  };

  setState(newState);

  localStorage.setItem("bodyBg", bgColor1);
  localStorage.setItem("bodyBg2", bgColor2);
  localStorage.setItem("lightRgb", bgColor2);
  localStorage.setItem("inputBorder", "rgba(255,255,255,0.1)");
  localStorage.removeItem("InnovativelightTheme");
  localStorage.removeItem("InnovativedarkTheme");
  if (clicked === "clicked") {
    localStorage.removeItem("Innovativeheader");
    localStorage.removeItem("Innovativemenu");
  }
};

const ColorPicker = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) => {
  return (
    <div className="color-picker-input">
      <input type="color" {...props} />
    </div>
  );
};

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const ThemePrimaryColor = () => {
  const [color, updateColor] = useState("#FFFFFF");
  const [rgb, _setRgb] = useState<{ colorPrimaryRgb: string }>({
    colorPrimaryRgb: "",
  });

  const handleInput = (e: { target: { value: number; }; }) => {
    const color = e.target.value;
    let { r, g, b }: number = hexToRgb(color);

    // Update color only if it's different
    if (color !== updateColor) {
      updateColor(color);
    }

    // Only update RGB state if the value has changed
    if (rgb.colorPrimaryRgb !== `${r}, ${g}, ${b}`) {
      const newState = {
        colorPrimaryRgb: `${r}, ${g}, ${b}`,
      };
      setState(newState);
      localStorage.setItem("dynamiccolor", `${r}, ${g}, ${b}`);
      localStorage.removeItem("primaryRGB");
    }
  };

  return (
    <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
      <ColorPicker onChange={handleInput} value={color} />
    </div>
  );
};

// color picker for background colors
interface Rgb {
  r: number;
  g: number;
  b: number;
}
export const ThemeBackgroundColor = () => {
  const [state, updateState] = useState("#FFFFFF");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { r, g, b }: Rgb = hexToRgb(e.target.value);
    updateState(e.target.value);
    const newState = {
      bodyBg: `${r + 14}, ${g + 14}, ${b + 14}`,
      bodyBg2: `${r} ${g} ${b}`,
      inputBorder: "rgba(255,255,255,0.1)",
      lightRgb: `${r + 5} ${g + 5} ${b + 5}`,
      formControlBg: `rgb(${r}, ${g}, ${b})`,
      dataThemeMode: "dark",
      dataHeaderStyles: "dark",
      dataMenuStyles: "dark",
      gray: `rgb(${r} ${g} ${b})`,
    };
    setState(newState);

    localStorage.setItem("bodyBg", `${r}, ${g}, ${b}`);
    localStorage.setItem("bodyBg2", `${r + 14}, ${g + 14}, ${b + 14}`);
    localStorage.setItem("lightRgb", `${r + 5} ${g + 5} ${b + 5}`);
    localStorage.setItem('formControlBg', `rgb(${r}, ${g}, ${b})`)
    localStorage.setItem("inputBorder", "rgba(255,255,255,0.1)");
    localStorage.removeItem("Innovativemenu");
    localStorage.removeItem("Innovativeheader");
    localStorage.removeItem("InnovativelightTheme");
    localStorage.removeItem("InnovativedarkTheme");
  };

  return (
    <div className="Themebackgroundcolor">
      <ColorPicker onChange={handleInput} value={state} />
    </div>
  );
};

export const setBgImage = (bgImageNumber: number) => {
  const bgImgKey = `bgimg${bgImageNumber}`;

  const newState = {
    bgImg: bgImgKey,
  };

  setState(newState);

  // Loop through bgimage keys to remove the ones that aren't selected
  for (let i = 1; i <= 5; i++) {
    if (i === bgImageNumber) {
      localStorage.setItem(`bgimage${i}`, bgImgKey);
    } else {
      localStorage.removeItem(`bgimage${i}`);
    }
  }
};

export const Reset = () => {
  const newState = {
    lang: "en",
    dir: "ltr",
    dataThemeMode: "light",
    dataMenuStyles: "dark",
    dataNavLayout: "vertical",
    dataHeaderStyles: "light",
    dataVerticalStyle: "overlay",
    toggled: "",
    dataNavStyle: "",
    horStyle: "",
    dataPageStyle: "regular",
    dataWidth: "fullwidth",
    dataMenuPosition: "fixed",
    dataHeaderPosition: "fixed",
    iconOverlay: "",
    colorPrimaryRgb: "",
    bodyBg: "",
    bodyBg2: "",
    inputBorder: "",
    lightRgb: "",
    formControlBg: "",
    gray: "",
    bgImg: "",
    loader: "disable",
    iconText: "",
    body: {
      class: "",
    },
  };

  setState(newState);
  localStorage.clear();

  const icon = switcherDoucmentIdSelector(
    "switcher-default-menu"
  ) as HTMLInputElement;
  if (icon) {
    icon.checked = true;
  }
};

export const Reset1 = () => {
  const newState = {
    lang: "en",
    dir: "ltr",
    dataThemeMode: "light",
    dataMenuStyles: "light",
    dataNavLayout: "horizontal",
    dataHeaderStyles: "light",
    dataVerticalStyle: "overlay",
    toggled: "",
    dataNavStyle: "",
    horStyle: "",
    dataPageStyle: "regular",
    dataWidth: "fullwidth",
    dataMenuPosition: "fixed",
    dataHeaderPosition: "fixed",
    iconOverlay: "",
    colorPrimaryRgb: "",
    bodyBg: "",
    bodyBg2: "",
    inputBorder: "",
    lightRgb: "",
    formControlBg: "",
    gray: "",
    bgImg: "",
    loader: "disable",
    iconText: "",
    body: {
      class: "",
    },
  };

  setState(newState);
  localStorage.clear();

  const icon = switcherDoucmentIdSelector(
    "switcher-default-menu"
  ) as HTMLInputElement;
  if (icon) {
    icon.checked = true;
  }
};

export const LocalStorageBackup = (setPageLoading) => {
  // toggling the theme
  localStorage.InnovativedarkTheme ? updateTheme("dark", true) : "";
  localStorage.InnovativelightTheme ? updateTheme("light", true) : "";
  //  toggling the direction
  localStorage.Innovativertl ? setDirection("rtl") : "";
  // Page Styles:
  localStorage.Innovativeregular ? setPageStyle("regular") : "";
  localStorage.Innovativeclassic ? setPageStyle("classic") : "";
  localStorage.Innovativemodern ? setPageStyle("modern") : "";
  // Layout Width Styles:
  localStorage.Innovativefullwidth ? setLayout("fullwidth") : "";
  localStorage.Innovativedefault ? setLayout("default") : "";
  localStorage.Innovativeboxed ? setLayout("boxed") : "";
  // Menu Positions:
  localStorage.Innovativemenufixed ? setMenuPosition("fixed") : "";
  localStorage.Innovativemenuscrollable ? setMenuPosition("scrollable") : "";
  // Header Positions:
  localStorage.Innovativeheaderfixed ? setHeaderPosition("fixed") : "";
  localStorage.Innovativeheaderscrollable ? setHeaderPosition("scrollable") : "";
  // Menu With Background Image
  localStorage.bgimage1 ? setBgImage(1) : "";
  localStorage.bgimage2 ? setBgImage(2) : "";
  localStorage.bgimage3 ? setBgImage(3) : "";
  localStorage.bgimage4 ? setBgImage(4) : "";
  localStorage.bgimage5 ? setBgImage(5) : "";
  // Vertical & Horizontal Menu Styles
  localStorage.Innovativenavstyles === "menu-click"
    ? updateNavStyle("menu-click", "menu-click-closed")
    : "";
  localStorage.Innovativenavstyles === "menu-hover"
    ? updateNavStyle("menu-hover", "menu-hover-closed")
    : "";
  localStorage.Innovativenavstyles === "icon-click"
    ? updateNavStyle("icon-click", "icon-click-closed")
    : "";
  localStorage.Innovativenavstyles === "icon-hover"
    ? updateNavStyle("icon-hover", "icon-hover-closed")
    : "";
  // toggling the layOut
  localStorage.InnovativeLayout == "horizontal" && updateLayout("horizontal");

  // Menu Colors:
  switch (localStorage.Innovativemenu) {
    case "light":
      setMenuStyle("light");
      break;
    case "dark":
      setMenuStyle("dark");
      break;
    case "color":
      setMenuStyle("color");
      break;
    case "gradient":
      setMenuStyle("gradient");
      break;
    case "transparent":
      setMenuStyle("transparent");
      break;
    default:
      break;
  }

  // Header Colors:

  switch (localStorage.Innovativeheader) {
    case "light":
      setHeaderStyle("light");
      break;
    case "dark":
      setHeaderStyle("dark");
      break;
    case "color":
      setHeaderStyle("color");
      break;
    case "gradient":
      setHeaderStyle("gradient");
      break;
    case "transparent":
      setHeaderStyle("transparent");
      break;
    default:
      break;
  }

  // Theme Primary Colors
  switch (localStorage.primaryRGB) {
    case "25, 168, 213":
      setPrimaryColor("25, 168, 213");
      break;
    case "217, 116, 25":
      setPrimaryColor("217, 116, 25");
      break;
    case "223, 25, 194":
      setPrimaryColor("223, 25, 194");
      break;
    case "161, 182, 28":
      setPrimaryColor("161, 182, 28");
      break;
    case "166, 25, 230":
      setPrimaryColor("166, 25, 230");
      break;
    default:
      break;
  }

  // Theme background colors

  switch (localStorage.bodyBg) {
    case "53, 3, 141":
      updateBackgroundColor("53, 3, 141", "67, 19, 151", true);
      break;
    case "0, 84, 151":
      updateBackgroundColor("0, 84, 151", "22, 92, 149", true);
      break;
    case "0, 86, 81":
      updateBackgroundColor("0, 86, 81", "0, 96, 91", true);
      break;
    case "73, 0, 133":
      updateBackgroundColor("73,0,133", "84, 16, 141", true);
      break;
    case "45, 52, 0":
      updateBackgroundColor("45, 52, 0", "54, 62, 0", true);
      break;
    default:
      break;
  }

  if (localStorage.dynamiccolor) {
    const dynamiccolor = localStorage.getItem("dynamiccolor");
    const newState = {
      colorPrimaryRgb: dynamiccolor,
    };
    setState(newState);
  }
  //Theme BAckground:
  if (localStorage.bodyBg) {
    const newState = {
      bodyBg: localStorage.bodyBg,
      bodyBg2: localStorage.bodyBg2,
      dataThemeMode: "dark",
      dataHeaderStyles: localStorage.Innovativeheader
        ? localStorage.Innovativeheader
        : localStorage.InnovativedarkTheme
          ? "dark"
          : "dark",
      lightRgb: localStorage.lightRgb,
      formControlBg: localStorage.formControlBg,
      inputBorder: localStorage.inputBorder,
      gray: localStorage.gray,
      dataMenuStyles: localStorage.Innovativemenu
        ? localStorage.Innovativemenu
        : localStorage.InnovativedarkTheme
          ? "dark"
          : "dark",
    };
    setState(newState);
  }

  // Sidemenu Layout Styles:

  if (localStorage.Innovativeverticalstyles) {
    let verticalstyles = localStorage.getItem("Innovativeverticalstyles");

    switch (verticalstyles) {
      case "default":
        let defaultId = switcherDoucmentIdSelector(
          "switcher-default-menu"
        ) as HTMLInputElement;
        if (defaultId) {
          defaultId.checked = true;
        }
        DefaultMenu();
        break;

      case "closed":
        let closedId = switcherDoucmentIdSelector(
          "switcher-icontext-menu"
        ) as HTMLInputElement;
        if (closedId) {
          closedId.checked = true;
        }
        ClosedMenu();
        break;

      case "icontext":
        let icontextId = switcherDoucmentIdSelector(
          "switcher-icontext-menu"
        ) as HTMLInputElement;
        if (icontextId) {
          icontextId.checked = true;
        }
        IconText();
        break;

      case "overlay":
        let overlayId = switcherDoucmentIdSelector(
          "switcher-detached"
        ) as HTMLInputElement;
        if (overlayId) {
          overlayId.checked = true;
        }
        iconOverlayFn();
        break;

      case "detached":
        let detachedId = switcherDoucmentIdSelector(
          "switcher-detached"
        ) as HTMLInputElement;
        if (detachedId) {
          detachedId.checked = true;
        }
        DetachedFn();
        break;

      case "doublemenu":
        let doubleId = switcherDoucmentIdSelector(
          "switcher-double-menu"
        ) as HTMLInputElement;
        if (doubleId) {
          doubleId.checked = true;
        }
        DoubletFn();
        break;

      default:
        let defaultbutton = switcherDoucmentIdSelector(
          "switcher-default-menu"
        ) as HTMLInputElement;
        if (defaultbutton) {
          defaultbutton.checked = true;
        }
        break;
    }
  }

  setPageLoading(true);
};
