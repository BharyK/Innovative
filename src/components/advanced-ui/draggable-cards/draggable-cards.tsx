
import { Fragment } from "react";
import Draggabledata from "../../../shared/data/adavanec-ui/draggabledata"
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";


const DraggableCards = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Draggable Cards"} />
            <Pageheader title="Advanced Ui" currentpage="Draggable Cards" activepage="Draggable Cards" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Draggabledata />
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default DraggableCards;