import { Fragment, useState } from "react";
import { Map, Marker, Overlay, Draggable, ZoomControl, } from 'pigeon-maps';
import { Card, Col, Row } from "react-bootstrap";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import logo from '../../../assets/images/brand-logos/toggle-logo.png';
import desktop from '../../../assets/images/brand-logos/desktop-logo.png';

const PigeonMaps = () => {

    const [center, setCenter] = useState<[number, number]>([50.879, 4.6997])
    const [zoom, setZoom] = useState(11)

    //Marker 
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`

    //Draggable
    const [anchor, setAnchor] = useState<[number, number]>([50.879, 4.6997]);

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Pigeon Maps"} />
            <Pageheader title="Maps" currentpage="Pigeon Maps" activepage="Pigeon Maps" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pigeon Map</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <div id="vector-map">
                                <Map height={300} center={center} zoom={zoom} onBoundsChanged={({ center, zoom }) => { setCenter(center); setZoom(zoom) }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Map With Markers</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <div id="marker-map">
                                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                                    <Marker width={50} anchor={[50.879, 4.6997]} color={color} onClick={() => setHue(hue + 20)} />
                                    <Marker width={50} anchor={[50.879, 4.6997]} color={color} onClick={() => setHue(hue + 20)}>
                                    </Marker>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Map With Image Markers</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <div id="marker-image-map">
                                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                                    <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
                                        <img src={desktop} alt='' className="img-fluid" />
                                    </Overlay>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Map With Image Draggable Overlay</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <div id="lines-map">
                                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                                    <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                                        <img src={logo} alt="Pigeon!" className="img-fluid" />
                                    </Draggable>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Zoom Control</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body border border-dashed m-2 mt-0 rounded-1">
                            <div id="us-map">
                                <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                                    <ZoomControl />
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default PigeonMaps;