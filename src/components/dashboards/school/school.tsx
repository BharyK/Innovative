import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";

const School = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Delivery Challan"} />

            <Pageheader title="Dashboard" currentpage="Delivery Challan" activepage="Delivery Challan" />

        </Fragment>
    );
};

export default School;