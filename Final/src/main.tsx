import { Fragment, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './shared/common/ui/routingdata';
import { store } from './shared/common/ui/redux/store';
import RootWrapper from './pages/rootwrapper';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';

const Firebaselayout = lazy(() => import('./pages/firebaselayout'));
const Signin = lazy(() => import('./firebase/login'));
const App = lazy(() => import('./pages/App'));
const Landinglayout = lazy(() => import('./pages/landinglayout'));
const Landing = lazy(() => import('./components/pages/landing/landing'));
const AuthenticationLayout = lazy(() => import('./pages/authenticationlayout'));
const Error500 = lazy(() => import('./components/error/500-error/500-error'));
const ComingSoon = lazy(() => import('./components/authentication/coming-soon/coming-soon'));
const CreateBasic = lazy(() => import('./components/authentication/create-password/create-basic/create-basic'));
const CreateCover = lazy(() => import('./components/authentication/create-password/create-cover/create-cover'));
const LockBasic = lazy(() => import('./components/authentication/lock-screen/lock-basic/lock-basic'));
const LockCover = lazy(() => import('./components/authentication/lock-screen/lock-cover/lock-cover'));
const ResetBasic = lazy(() => import('./components/authentication/reset-password/reset-basic/reset-basic'));
const ResetCover = lazy(() => import('./components/authentication/reset-password/reset-cover/reset-cover'));
const SignInBasic = lazy(() => import('./components/authentication/sign-in/sign-in-basic/sign-in-basic'));
const SignInCover = lazy(() => import('./components/authentication/sign-in/sign-in-cover/sign-in-cover'));
const SignUpBasic = lazy(() => import('./components/authentication/sign-up/sign-up-basic/sign-up-basic'));
const SignUpCover = lazy(() => import('./components/authentication/sign-up/sign-up-cover/sign-up-cover'));
const TwoStepBasic = lazy(() => import('./components/authentication/two-step-verification/two-step-basic/two-step-basic'));
const TwoStepCover = lazy(() => import('./components/authentication/two-step-verification/two-step-cover/two-step-cover'));
const UnderMaintenance = lazy(() => import('./components/authentication/under-maintenance/under-maintenance'));
const Error401 = lazy(() => import('./components/error/401-error/401-error'));
const Error404 = lazy(() => import('./components/error/404-error/404-error'));
const Loader = lazy(() => import('./shared/layouts-components/loader/loader'));

// Wrap the entire router in Suspense so all lazy-loaded components are safe
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Fragment>
    <Provider store={store}>
      <RootWrapper>
        <BrowserRouter>
          <ErrorBoundary fallback={<Error500 />}>
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* Firebase Layout */}
                <Route path={`${import.meta.env.BASE_URL}`} element={<Firebaselayout />}>
                  <Route index element={<Signin />} />
                  <Route path={`${import.meta.env.BASE_URL}common/firebase/signin`} element={<Signin />} />
                </Route>

                {/* Main App */}
                <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
                  {RouteData.map((idx) => (
                    <Route key={idx.id} path={idx.path} element={idx.element} />
                  ))}
                </Route>

                {/* Landing Layout */}
                <Route path={`${import.meta.env.BASE_URL}`} element={<Landinglayout />}>
                  <Route path={`${import.meta.env.BASE_URL}pages/landing`} element={<Landing />} />
                </Route>

                {/* Authentication Layout */}
                <Route path={`${import.meta.env.BASE_URL}`} element={<AuthenticationLayout />}>
                  <Route path='*' element={<Error500 />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/coming-soon`} element={<ComingSoon />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/create-password/create-basic`} element={<CreateBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/create-password/create-cover`} element={<CreateCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/lock-screen/lock-basic`} element={<LockBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/lock-screen/lock-cover`} element={<LockCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/reset-password/reset-basic`} element={<ResetBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/reset-password/reset-cover`} element={<ResetCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/sign-in/sign-in-basic`} element={<SignInBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/sign-in/sign-in-cover`} element={<SignInCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-basic`} element={<SignUpBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/sign-up/sign-up-cover`} element={<SignUpCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/two-step-verification/two-step-basic`} element={<TwoStepBasic />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/two-step-verification/two-step-cover`} element={<TwoStepCover />} />
                  <Route path={`${import.meta.env.BASE_URL}authentication/under-maintenance`} element={<UnderMaintenance />} />
                  <Route path={`${import.meta.env.BASE_URL}error/401-error`} element={<Error401 />} />
                  <Route path={`${import.meta.env.BASE_URL}error/404-error`} element={<Error404 />} />
                  <Route path={`${import.meta.env.BASE_URL}error/500-error`} element={<Error500 />} />
                </Route>
              </Routes>
            </Suspense>

          </ErrorBoundary>
        </BrowserRouter>
      </RootWrapper>
    </Provider>
  </Fragment>
);
