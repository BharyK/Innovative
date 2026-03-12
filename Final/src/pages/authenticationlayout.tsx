import { Fragment, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Initialload } from '../shared/contextapi';
import { store } from '../shared/common/ui/redux/store';
import { Provider } from 'react-redux';
import LandingSwitcher from '../shared/layouts-components/switcher/landing-switcher';

const AuthenticationLayout = () => {
  const [pageLoading, setPageLoading] = useState(false)
  return (
    <Fragment>
      <Initialload.Provider value={{ pageLoading, setPageLoading }}>
        <Provider store={store}>
          <LandingSwitcher />
          <Outlet />
        </Provider>
      </Initialload.Provider>
    </Fragment>
  )

}

export default AuthenticationLayout;
