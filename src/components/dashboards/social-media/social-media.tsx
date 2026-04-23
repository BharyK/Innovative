import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";

const SocialMedia = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title={"Release of Purchase Orders"} />

            <Pageheader title="Dashboard" currentpage="Release of Purchase Orders" activepage="Release of Purchase Orders" />

         
        </Fragment >
    );
};

export default SocialMedia;