import React, { Fragment, useEffect, useState } from 'react';
import { ToastContainer, Bounce, type ToastOptions, type ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { data$, getState } from '../../services/switcherServices';

interface SpkToastifyProps {
    message?: string;
    buttonLabel?: string;
    toastOptions?: ToastOptions;
    hideProgressBar?: boolean;
    newestOnTop?: boolean;
    closeOnClick?: boolean;
    rtl?: boolean;
    pauseOnFocusLoss?: boolean;
    draggable?: boolean;
    pauseOnHover?: boolean;
    position?: ToastPosition;
}

const SpkToastify: React.FC<SpkToastifyProps> = ({ hideProgressBar = false, newestOnTop = false, closeOnClick = true, rtl = false, pauseOnFocusLoss = true, draggable = true, pauseOnHover = true, position }) => {
    let [variable, setVariable] = useState(getState());

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setVariable(e);
        });
        return () => subscription.unsubscribe();
    }, [variable]);


    return (
        <Fragment>
            <ToastContainer position={position} autoClose={5000} hideProgressBar={hideProgressBar} newestOnTop={newestOnTop} closeOnClick={closeOnClick} rtl={rtl} pauseOnFocusLoss={pauseOnFocusLoss} draggable={draggable} pauseOnHover={pauseOnHover} theme={variable.dataThemeMode === 'light' ? 'light' : 'dark'} transition={Bounce} />
        </Fragment>
    );
};
export default SpkToastify;