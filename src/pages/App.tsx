import { Fragment, useEffect, useState } from "react";
import { Initialload } from "../shared/contextapi";
import { Outlet } from "react-router-dom";
import Footer from "../shared/layouts-components/footer/footer";
import Switcher from "../shared/layouts-components/switcher/switcher";
import Sidebar from "../shared/layouts-components/sidebar/sidebar";
import Backtotop from "../shared/layouts-components/backtotop/backtotop";
import Header from "../shared/layouts-components/header/header";


function App() {

  const [lateLoad, setLateLoad] = useState(false);

  useEffect(() => {
    setLateLoad(true);
  },[lateLoad]);
  const [pageLoading, setPageLoading] = useState(false)

  const [isSwitcherOpen, setSwitcherOpen] = useState(false); // State to control switcher visibility

  const toggleSwitcher = () => {
    setSwitcherOpen((prevState) => !prevState); // Toggle the switcher visibility
  };

  return (
    <Fragment>
      <Initialload.Provider value={{ pageLoading, setPageLoading }}>
        <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
          <Switcher isSwitcherOpen={isSwitcherOpen} toggleSwitcher={toggleSwitcher} />
          <div className='page'>
            <Header />
            <Sidebar />
            <div className={`main-content app-content`}>
              <div className='container-fluid'>
                <Outlet />
              </div>
            </div>
            <Footer />
          </div>
          <Backtotop />
        </div>
      </Initialload.Provider>
    </Fragment>
  )
}

export default App
