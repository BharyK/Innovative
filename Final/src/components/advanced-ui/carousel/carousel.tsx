
import SpkCarouselComponent from "../../../shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
import { Captioncarousel, Carouseldata, Crosscarousel, Darkcarousel, Disablecarousel, Indicatorcarousel, Individualcarousel, Slidecarousel } from "../../../shared/data/adavanec-ui/carouseldata";
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carouseldata1, carouseldata2, carouseldata3, carouseldata4, carouseldata5, carouseldata6, carouseldata7, carouseldata8, reusablecarousel1, reusablecarousel2, reusablecarousel3, reusablecarousel4, reusablecarousel5, reusablecarousel6, reusablecarousel7, reusablecarousel8 } from "../../../shared/data/prism-code/advanced-ui-prism";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import Seo from "../../../shared/layouts-components/seo/seo";
import { Fragment } from "react";
import { Col } from "react-bootstrap";
import ShowCode from "../../../shared/showcode/showcode";

const Carousel = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Carousel"} />
            <Pageheader title="Advanced Ui" currentpage="Carousel" activepage="Carousel" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <div className="row">
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Slides Only" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel1} dataCode={carouseldata1} reusableCode={reusablecarousel1}>
                        <SpkCarouselComponent items={Slidecarousel} mainClass="carousel slide" controls={false} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With controls" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel2} dataCode={carouseldata2} reusableCode={reusablecarousel2}>
                        <SpkCarouselComponent items={Carouseldata} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With indicators" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel3} dataCode={carouseldata3} reusableCode={reusablecarousel3}>
                        <SpkCarouselComponent items={Indicatorcarousel} mainClass="carousel slide" indicators={true} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="With captions" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel4} dataCode={carouseldata4} reusableCode={reusablecarousel4}>
                        <SpkCarouselComponent items={Captioncarousel} mainClass="carousel slide" indicators={true} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Crossfade" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel5} dataCode={carouseldata5} reusableCode={reusablecarousel5}>
                        <SpkCarouselComponent items={Crosscarousel} fade={true} mainClass="carousel slide carousel-fade" indicators={false} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <ShowCode title="Individual .carousel-item interval" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel6} dataCode={carouseldata6} reusableCode={reusablecarousel6}>
                        <SpkCarouselComponent interval1={1000} items={Individualcarousel} mainClass="carousel slide" indicators={false} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xxl={4} md={6}>
                    <ShowCode title="Disable touch swiping" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel7} dataCode={carouseldata7} reusableCode={reusablecarousel7}>
                        <SpkCarouselComponent items={Disablecarousel} mainClass="carousel slide" indicators={false} data-bs-interval="false" interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
                <Col xxl={4} md={6}>
                    <ShowCode title="Dark variant" customCardClass="custom-card" customCardHeaderClass="pb-0" reactCode={carousel8} dataCode={carouseldata8} reusableCode={reusablecarousel8}>
                        <SpkCarouselComponent items={Darkcarousel} mainClass="carousel slide" indicators={true} interval={1500} wrap={true} />
                    </ShowCode>
                </Col>
            </div>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Carousel;