import { Fragment, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { BlogGalleryData } from "./blogdetailsdata";
import blog4 from '../../../../assets/images/media/blog/4.jpg'
import blog5 from '../../../../assets/images/media/blog/5.jpg'
import blog6 from '../../../../assets/images/media/blog/6.jpg'
import blog24 from '../../../../assets/images/media/blog/24.jpg'
import blog25 from '../../../../assets/images/media/blog/25.jpg'

export const BlogGallery = () => {

    const [open, setOpen] = useState(false);

   

    return (
        <Fragment>
            <Row className="gy-1 gx-1">
                <Col lg={6} md={6} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1">
                        <img src={blog24} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1">
                        <img src={blog25} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1">
                        <img src={blog5} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1">
                        <img src={blog4} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col lg={4} md={4} sm={6} className="col-6">
                    <Link to="#!" className="glightbox card mb-0" data-gallery="gallery1">
                        <img src={blog6} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>
            <Lightbox open={open} close={() => setOpen(false)} slides={BlogGalleryData} />
        </Fragment>
    )
}
