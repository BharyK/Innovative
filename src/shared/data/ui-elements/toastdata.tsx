import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react/jsx-runtime';
import SpkButton from '../../@spk-reusable-components/reusable-uielements/spk-button';

const notify = () => toast("I'm a toast message.");

export const Customtoaster = () => {
  return (
    <Fragment>
      <SpkButton Buttonvariant="primary" Id="toast-button" onClickfunc={notify}>Click For Live Toast</SpkButton>
      <ToastContainer />
    </Fragment>
  );
};