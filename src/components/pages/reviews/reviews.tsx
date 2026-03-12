
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { ReviewsStyle1Swiper, ReviewsStyle2Swiper, ReviewsStyle3Swiper, ReviewsStyle4Swiper } from "../../../shared/data/pages/reviewsdata";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkSwiperJs from "../../../shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";

const Reviews = () => {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
  const breakpoints1 = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
  const breakpoints2 = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
  const breakpoints3 = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <Seo title={"Reviews"} />
      <Pageheader title="Pages" currentpage="Reviews" activepage="Reviews" />

      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row className="justify-content-center">
        <Col xl={12}>
          <h6 className="mb-3"> REVIEWS STYLE 1 :</h6>
          <SpkSwiperJs slides={ReviewsStyle1Swiper} breakpoint={breakpoints} loop={true} autoplay={true} spaceBetween={20} slidesPerView={4} className="swiper reviws-swiper-1" mainClass="" />
        </Col>
        <Col xl={12}>
          <h6 className="mb-3"> REVIEWS STYLE 2 :</h6>
          <SpkSwiperJs slides={ReviewsStyle2Swiper} breakpoint={breakpoints1} loop={true} autoplay={true} spaceBetween={20} slidesPerView={3} className="swiper reviws-swiper-2" mainClass="" />
        </Col>
        <Col xl={12}>
          <h6 className="mb-3"> REVIEWS STYLE 3 :</h6>
          <SpkSwiperJs slides={ReviewsStyle3Swiper} breakpoint={breakpoints2} loop={true} autoplay={true} spaceBetween={20} slidesPerView={5} className="swiper reviws-swiper-3" mainClass="" />
        </Col>
        <Col xl={12}>
          <h6 className="mb-3"> REVIEWS STYLE 4 :</h6>
          <SpkSwiperJs slides={ReviewsStyle4Swiper} breakpoint={breakpoints3} loop={true} autoplay={true} spaceBetween={20} slidesPerView={2} className="swiper reviws-swiper-4" mainClass="" />
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}
    </Fragment>
  );
};

export default Reviews;