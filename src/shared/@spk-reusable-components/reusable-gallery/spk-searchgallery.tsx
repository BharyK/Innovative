import { Fragment, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import { SearchGalleryListdata } from "../../data/pages/searchdata";

export const SearchGalleryList = () => {
    const [open, setOpen] = useState(false);

    

    return (
        <Fragment>
            {SearchGalleryListdata.map((idx) => (
                <Col lg={3} md={3} sm={6} className="col-12" key={idx.id}>
                    <Link to='#!' className="glightbox card search-images-card" data-gallery="gallery1">
                        <img src={idx.src} alt="image" onClick={() => setOpen(true)} />
                        <div className="p-2">
                            <div className="d-flex align-items-center gap-1">
                                <div className="avatar avatar-xs">
                                    <img src={idx.avatarSrc} alt="" />
                                </div>
                                <div className="figure-caption fs-13 fw-medium text-default">{idx.title}</div>
                            </div>
                            <div className="fs-12 text-default">{idx.company}</div>
                        </div>
                    </Link>
                </Col>
            ))}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={SearchGalleryListdata.map(({ src, title, }) => ({
                    src,
                    caption: `${title}`,
                }))}
            />
        </Fragment>
    );
};