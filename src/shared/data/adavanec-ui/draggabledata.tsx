import { Fragment, useEffect, useRef, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import Dragula from "react-dragula";
import SpkCard from "../../@spk-reusable-components/reusable-uielements/reusable-cards/spk-basiccard";
import SpkCollapsecard from "../../@spk-reusable-components/reusable-uielements/reusable-cards/spkcollapsecard";
import SpkButton from "../../@spk-reusable-components/reusable-uielements/spk-button";
import Spktitlecards from "../../@spk-reusable-components/reusable-uielements/reusable-cards/spktitlecards";
import Spkimageoverlaycard from "../../@spk-reusable-components/reusable-uielements/reusable-cards/spkimageoverlaycard";
import Spkbgcards from "../../@spk-reusable-components/reusable-uielements/reusable-cards/spkbgcards";
import media35 from '../../../assets/images/media/media-35.jpg';
import media36 from '../../../assets/images/media/media-36.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face15 from '../../../assets/images/faces/15.jpg';

const Draggabledata = () => {

	const leftContainerRef = useRef<HTMLDivElement | null>(null);
	const rightContainerRef = useRef<HTMLDivElement | null>(null);
	const windowElement = typeof window !== "undefined" ? window : null;

	useEffect(() => {
		if (leftContainerRef.current && rightContainerRef.current && windowElement) {
			Dragula([leftContainerRef.current, rightContainerRef.current]);
		}
	}, []);


	//fullscreen
	const [fullScreen, setFullscreen] = useState("true");
	const [fullscreenshow, setfullscreenShow] = useState(false);

	const fullscreenmodalClose = () => setfullscreenShow(false);

	function handleShow(breakpoint: boolean) {
		setFullscreen(breakpoint);
		setfullscreenShow(true);
	}

	return (
		<Fragment>

			<div className="row">
				<Col xl={6} ref={leftContainerRef} id="draggable-left">
					<SpkCard linkTag={true} cardClass="card custom-card card-bg-primary"
						bodyText={(
							<blockquote className="blockquote mb-0 text-center">
								<h6 className="text-fixed-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
								<footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
							</blockquote>
						)} />
					<SpkCollapsecard normalToggle={true}
						Navigate="#!" Title="Card With Fullscreen Button" OnClickFunc={() => handleShow(true)} footertext="Read More"
					>
						<Modal show={fullscreenshow} fullscreen={fullScreen}>
							<Modal.Header>
								<Modal.Title className="fw-semibold">Card With Fullscreen Button</Modal.Title>
								<span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='ri-fullscreen-line me-3' ></i></span>
							</Modal.Header>
							<Modal.Body>
								<h6 className='card-text fw-medium'> FullScreen Card</h6>

								There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</Modal.Body>
							<Modal.Footer>
								<SpkButton Buttonvariant="secondary" onClickfunc={fullscreenmodalClose}>
									Close
								</SpkButton>
								<SpkButton Buttonvariant="primary">
									Save Changes
								</SpkButton>
							</Modal.Footer>
						</Modal>
						<h6 className="card-text fw-medium">FullScreen Card</h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</SpkCollapsecard>
					<SpkCollapsecard expandButton={true} collapseToggle={true}
						Navigate="#!" Title="Card With Collapse Button" footertext="Read More"
					>
						<h6 className="card-text fw-medium">Collapsible Card</h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</SpkCollapsecard>
					<SpkCollapsecard hideToggle={true}
						Navigate="#!" Title="Card With Close Button" footertext="Read More"
					>
						<h6 className="card-text fw-medium">Closed Card </h6>
						<p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
					</SpkCollapsecard>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-card border border-info" Anchortagbefore={true}  >
						<div className="d-flex align-items-center">
							<div className="me-3">
								<span className="avatar avatar-xl">
									<img src={face8} alt="img" />
								</span>
							</div>
							<div>
								<p className="card-text text-info mb-1 fs-14 fw-medium">Alicia Keys.</p>
								<div className="card-title fs-12 mb-1">Department Of Commerce</div>
								<div className="card-title text-muted fs-11 mb-0">24 Years, Female</div>
							</div>
						</div>
					</Spktitlecards>
					<Spktitlecards AnchortagNavigate="#!" Navigate="#!" Customclass="custom-card" Anchortagbefore={true}>
						<div className="d-flex align-items-center">
							<div className="me-3">
								<span className="avatar avatar-md">
									<img src={face15} alt="img" />
								</span>
							</div>
							<div>
								<p className="card-text mb-0 fs-14 fw-medium">Atharva Simon.</p>
								<div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
							</div>
						</div>
					</Spktitlecards>
				</Col>
				<Col xl={6} ref={rightContainerRef} id="draggable-right">
					<Spkimageoverlaycard CustomClass="overlay-card" CardHeader={false} Imgsrc={media36} Overlayclass="over-content-bottom top-0"
						CardFooter={true} Footertext="Last updated 3 mins ago" Customimgclass="card-img" Custombodyclass="text-fixed-white" Customfooterclass="text-fixed-white" >
						<div className="card-text text-fixed-white">
							Image Overlays Are Awesome!
						</div>
						<div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
						{/* <div className="card-text">Last updated 3 mins ago</div> */}
					</Spkimageoverlaycard>
					<Spkbgcards Navigate="#!" Customclass="card-bg-secondary" color="primary2" Imgsrc={face5} Title="Samantha sid" Value="In leave for 1 month" Textclass="fixed-white" Class="fixed-white" />
					<Spkimageoverlaycard CustomClass="overlay-card" Title="Image Overlays Are Awesome!" Imgsrc={media35} CardHeader={true}
						CardFooter={false} Customimgclass="card-img" Custombodyclass="text-fixed-white" CustomTitleclass="text-fixed-white">
						<div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
						<div className="card-text">Last updated 3 mins ago</div>
					</Spkimageoverlaycard>
				</Col>
			</div>
			{/* <!--End::row-1 --> */}

		</Fragment>
	)
};

export default Draggabledata;