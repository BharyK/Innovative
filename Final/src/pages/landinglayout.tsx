
import { Fragment, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { Initialload } from '../shared/contextapi';
import LandingSwitcher from '../shared/layouts-components/switcher/landing-switcher';
import Backtotop from '../shared/layouts-components/backtotop/backtotop';


const Landinglayout = () => {

  const bodyRef = useRef<HTMLElement | null>(null);

  const location = useLocation()

  useEffect(() => {
    bodyRef.current = document.body

    if (location.pathname.includes('pages/landing')) {
      bodyRef.current.classList.add('landing-body');
    } else {
      bodyRef.current.classList.remove('landing-body');
    }

    return () => {
      bodyRef.current?.classList.remove('landing-body');
    };

  }, [location.pathname]);
  const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
  };

  useEffect(() => {
    const html = getDocumentElement()

    // Remove the attribute on mount
    html.removeAttribute('data-bg-img');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bg-img") {
          html.removeAttribute('data-bg-img'); // Force remove it again
        }
      });
    });

    observer.observe(html, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);
  const [pageLoading, setPageLoading] = useState(false);
  return (
    <Fragment >
      <Initialload.Provider value={{ pageLoading, setPageLoading }}>
        <div>
          <LandingSwitcher />
          <Outlet />
        </div>
        <Backtotop />
      </Initialload.Provider>
    </Fragment>
  )
}

export default Landinglayout