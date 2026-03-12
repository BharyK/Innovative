import { Card } from "react-bootstrap";
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import team1 from '../../../assets/images/faces/team/1.png'
import team3 from '../../../assets/images/faces/team/3.png'
import team7 from '../../../assets/images/faces/team/7.png'
import team8 from '../../../assets/images/faces/team/8.png'

interface ReviewType {
    id: number;
    cardClass: string;
    title: string;
    description: string;
    src: string;
    name: string;
    position: string;
}
export const ReviewsStyle1: ReviewType[] = [
    {
        id: 1,
        cardClass: 'primary',
        title: 'Excellent Experience!',
        description: 'I am extremely satisfied with the product and the outstanding service I received. The quality exceeded my expectations, and the customer support was incredible.',
        src: face1,
        name: 'Hadley Kylin',
        position: 'Product Designer'
    },
    {
        id: 2,
        cardClass: 'secondary',
        title: 'Amazing Product Quality!',
        description: 'The product arrived on time and the quality is top-notch. I am impressed by the attention to detail and the exceptional durability detail detail. Highly recommend Product.',
        src: face2,
        name: 'Jaxon Blake',
        position: 'Tech Enthusiast'
    },
    {
        id: 3,
        cardClass: 'danger',
        title: 'Unmatched Value for Money!',
        description: 'I am incredibly happy with my purchase. The product offers fantastic features for the price. It performs The product offers as advertised, and I couldn\'t be more satisfied.',
        src: face14,
        name: 'Liam Harper',
        position: 'Marketing Specialist'
    },
    {
        id: 4,
        cardClass: 'warning',
        title: 'Exceeded My Expectations!',
        description: 'The product quality and functionality are beyond what I expected. It\'s rare to find something that works so well and looks so good. I\'ll definitely be purchasing again very soon!',
        src: face6,
        name: 'Sophia Carter',
        position: 'Business Owner'
    },
    {
        id: 5,
        cardClass: 'info',
        title: 'Went above and beyond!',
        description: 'The quality and functionality of the product go above and beyond my expectations. It\'s not often you find something that performs so well and looks so great. I’ll definitely be making another purchase!',
        src: face6,
        name: 'Flora Mary',
        position: 'Product Manager'
    }
];

export const ReviewsStyle1Swiper = ReviewsStyle1.map((idx) => (
    <div key={idx.id}>
        <Card className={`custom-card border reviws-section1 ${idx.cardClass}`}>
            <Card.Body className=" text-center p-4">
                <div className={`fw-semibold fs-17 mb-2 text-${idx.cardClass}`}>{idx.title}</div>
                <p> {idx.description}</p>
                <div>
                    <span className="avatar avatar-xl rounded-circle mb-2">
                        <img src={idx.src} alt="" className="img-fluid rounded-circle" />
                    </span>
                    <p className="mb-1 fw-bold fs-14">{idx.name}</p>
                    <p className="mb-0 fs-13 text-muted">{idx.position}</p>
                </div>
            </Card.Body>
        </Card>
    </div>
))

interface ReviewStyle2Type {
    id: number;
    rating: number;
    class: string;
    src: string;
    name: string;
}
export const ReviewsStyle2: ReviewStyle2Type[] = [
    { id: 1, rating: 4.5, class: 'primary', src: team1, name: 'Flora Mary', },
    { id: 2, rating: 4.5, class: 'secondary', src: team3, name: 'Flora Mary', },
    { id: 3, rating: 4.5, class: 'danger', src: team7, name: 'Flora Mary', },
    { id: 4, rating: 4.3, class: 'warning', src: team8, name: 'Jaxon Blake', },
];

export const ReviewsStyle2Swiper = ReviewsStyle2.map((idx) => (
    <div key={idx.id}>
        <Card className="custom-card reviews-section-2 overflow-hidden">
            <Card.Body>
                <div className="d-flex gap-3 align-items-start flex-wrap flex-sm-nowrap">
                    <div className={`border mt-0 border-${idx.class} border-opacity-10 shadow-sm flex-shrink-0 p-2 bg-${idx.class} rounded-circle bg-opacity-10 user-bg-review`}>
                        <img src={idx.src} alt="img" />
                    </div>
                    <div className="text-wrap"> <i
                        className={`bx bxs-quote-alt-left fs-30 mb-2 text-${idx.class} review-icon`}></i><br />
                        <span className="ps-3 d-flex align-items-center gap-1">
                            <i className="ri-star-fill text-warning"></i>
                            <i className="ri-star-fill text-warning"></i>
                            <i className="ri-star-fill text-warning"></i>
                            <i className="ri-star-fill text-warning"></i>
                            <i className="ri-star-half-fill text-warning"></i>
                            <span className="ms-2">{idx.rating}</span>
                        </span>
                        <div className="ps-3 fw-medium">
                            <i> "The team went above and beyond to
                                ensure that all my questions were answered. Their dedication to
                                customer satisfaction is truly commendable." </i>
                        </div>
                        <div className="ps-3 mt-3">
                            <p className="mb-0 fw-semibold fs-14">{idx.name}</p>
                            <div className="fw-normal text-muted fs-12 mb-2">Customer Support Specialist</div>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    </div>
))

interface ReviewStyle3Type {
    id: number;
    class: string;
    name: string;
    position: string;
    src: string;
    email: string;
    verify: string;
}
export const ReviewsStyle3: ReviewStyle3Type[] = [
    { id: 1, class: 'primary', name: 'Jaxon Blake', position: 'Product Designer', src: face15, email: 'jaxon@gmail.com', verify: 'Verified', },
    { id: 2, class: 'secondary', name: 'Flora Mary', position: 'Tech Enthusiast', src: face1, email: 'flora@gmail.com', verify: 'NotVerified', },
    { id: 3, class: 'danger', name: 'Hadley Kylin', position: 'Marketing Specialist', src: face10, email: 'kylin@gmail.com', verify: 'Verified', },
    { id: 4, class: 'warning', name: 'Liam Harper', position: 'Product Designer', src: face12, email: 'liam@gmail.com', verify: 'NotVerified', },
    { id: 5, class: 'info', name: 'Sophia Carter', position: 'Business Owner', src: face5, email: 'sophia@gmail.com', verify: 'NotVerified', },
    { id: 6, class: 'orange', name: 'Sophia Carter', position: 'Business Owner', src: face5, email: 'sophia@gmail.com', verify: 'NotVerified', },
];

export const ReviewsStyle3Swiper = ReviewsStyle3.map((idx) => (
    <div key={idx.id}>
        <Card className={`custom-card border reviws-section3 main-custom-card ${idx.class}`}>
            <Card.Body className=" p-2">
                <div className="review-avatar-div bg-light">
                    <h6 className="mb-0 fw-semibold">{idx.name}</h6>
                    <span className="fs-13">{idx.position}</span>
                    <span className="avatar avatar-xl avatar-rounded"><img src={idx.src} alt="" /></span>
                </div>
                <div className="p-2 pt-4 mt-2">
                    <div className="d-flex align-items-center justify-content-between gap-1 flex-wrap">
                        <p className="mb-0">{idx.email}</p>
                        <span className={`badge bg-${idx.verify === 'Verified' ? 'primary' : 'danger'}-transparent`}><i className="ri-checkbox-circle-line me-1"></i>{idx.verify}</span>
                    </div>
                    <p className="mb-2 mt-3 text-muted">The team went above and beyond to ensure
                        that all my questions were answered. Their dedication to customer
                        satisfaction is truly commendable.</p>
                    <span className="star-icon">
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-half-fill text-warning"></i>
                        <span className="ms-2">4.5</span>
                    </span>
                </div>
            </Card.Body>
        </Card>
    </div>
))

interface ReviewStyle4Type {
    id: number;
    class: string;
    src: string;
    name: string;
    position: string;
}
export const ReviewsStyle4: ReviewStyle4Type[] = [
    { id: 1, class: 'primary', src: face1, name: 'Hadley Kylin', position: 'Product Designer', },
    { id: 2, class: 'secondary', src: face1, name: 'Hadley Kylin', position: 'Product Designer', },
    { id: 3, class: 'danger', src: face4, name: 'Joxan Blake', position: 'Ui Designer', },
];

export const ReviewsStyle4Swiper = ReviewsStyle4.map((idx) => (
    <div key={idx.id}>
        <Card className={`custom-card reviews-section-4 text-fixed-white ${idx.class} p-3`}>
            <Card.Body className=" text-center">
                <i className="ri-double-quotes-l review-03-quote1"></i>
                <span className="avatar avatar-xxl rounded-circle mb-2 review-03-img">
                    <img src={idx.src} alt="" className="img-fluid rounded-circle p-2 bg-white" />
                </span>
                <div className="border p-3 pt-5 rounded-3">
                    <p className="mb-1 fw-bold mt-2 fs-14">{idx.name}</p>
                    <p className="mb-1 fs-11 text-muted">{idx.position}</p>
                    <div className="mb-3 star-icon">
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-fill text-warning"></i>
                        <i className="ri-star-half-fill text-warning"></i>
                    </div>
                    <p> I am extremely satisfied with the product and the outstanding service I
                        received. The quality exceeded my expectations, and the customer support
                        was incredible. I am extremely satisfied. </p>
                </div>
            </Card.Body>
        </Card>
    </div>
))