import { useState, useEffect } from 'react';
import loader from "../../../assets/images/media/loader.svg"

const Loader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoadingState = () => {
            setLoading(false);
        };
        handleLoadingState();
    }, [loading]);

    return loading ? (
        <div id="loader" className="loader">
            <img src={loader} alt="Loading..." />
        </div>
    ) : null;
};

export default Loader;