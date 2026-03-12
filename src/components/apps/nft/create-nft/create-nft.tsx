import { Fragment, useState, type KeyboardEvent } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { Card, Col, Form, Row } from "react-bootstrap";
import CreatableSelect from 'react-select/creatable';
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import SpkSelect from "../../../../shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import { Link } from "react-router-dom";
import SpkNftMarcketPlace from "../../../../shared/@spk-reusable-components/reusable-dashboards/spk-nftmarcketplace";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import nft27 from '../../../../assets/images/nft-images/27.jpg';
import nft28 from '../../../../assets/images/nft-images/28.jpg';
import nft29 from '../../../../assets/images/nft-images/29.jpg';
import nft30 from '../../../../assets/images/nft-images/30.jpg';
import nft31 from '../../../../assets/images/nft-images/31.jpg';
import nft3 from '../../../../assets/images/nft-images/3.jpg';
import face4 from '../../../../assets/images/faces/4.jpg';


registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);


const CreateNft = () => {
    const [files, setFiles] = useState<any>([]);

    const Blockchaindata = [
        { label: 'Select a blockchain', value: "Select a blockchain" },
        { label: 'Ethereum', value: "Ethereum" },
        { label: 'Polygon', value: "Polygon" },
    ]
    const Collectiondata = [
        { label: 'Select a collection', value: "Select a collection" },
        { label: 'Collection 1', value: "Collection 1" },
        { label: 'Collection 2', value: "Collection 2" },
    ]
    const Royality = [
        { label: 'Choose Royalities', value: 1 },
        { label: 'Flat Royalty', value: 2 },
        { label: 'Graduated Royalty', value: 3 },
        { label: 'Tiered Royalty', value: 4 },
        { label: 'Time-Limited Royalty', value: 5 },
        { label: 'Customized Royalty', value: 6 },
    ]

    const MyCollectionsdata = [
        { id: 1, image: nft27, title: 'Digital Dreamscapes', text: '24 Likes', date: '24, Sep 2024 - 12:45PM' },
        { id: 2, image: nft28, title: 'Cosmic Reflections', text: '45 Likes', date: '15, Aug 2024 - 02:30PM' },
        { id: 3, image: nft29, title: 'Future Visions', text: '30 Likes', date: '10, Sep 2024 - 03:15PM' },
        { id: 4, image: nft30, title: 'Mystical Forest', text: '60 Likes', date: '05, Oct 2024 - 01:00PM' },
        { id: 5, image: nft31, title: 'Celestial Horizons', text: '30 Likes', date: '10, Oct 2024 - 03:15PM' },
    ]
    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState<any>('');
    const [value, setValue] = useState([
        createOption("Digital Art, "),
        createOption("Blockchain"),
        createOption("Crypto Collectibles"),
        createOption("Unique Artwork"),
        createOption("NFT Marketplace")
    ]);
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    const data = {
        id: 1,
        title: "Skywing Falcon Celestial",
        category: "Music",
        categoryColor: "secondary",
        bid: "3.5ETH",
        timeLeft: "02hrs : 45m : 12s",
        image: nft3,
        avatar: face4,
        creator: "CryptoArt",
    }
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Create NFT" />

            <Pageheader title="Apps" subtitle="NFT" currentpage="Create NFT" activepage="Create NFT" />
            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9} xl={8} className="">
                    <Card className="custom-card">
                        <Card.Header >
                            <Card.Title>Create NFT</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label htmlFor="input-placeholder" className="form-label">NFT Title: </Form.Label>
                                </Col>
                                <Col md={10}>
                                    <Form.Control type="text" className="form-control" id="input-placeholder"
                                        placeholder="eg:Abstract Digital Art" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label htmlFor="nft-description" className="form-label">NFT Description: </Form.Label>
                                </Col>
                                <Col md={10}>
                                    <textarea className="form-control" id="nft-description" rows={3}
                                        placeholder="Enter Description"></textarea>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label className="form-label mb-0 mt-2">Artwork Upload :</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <div className="create-nft-item bg-light py-3 rounded">
                                        <FilePond className="single-filepond" files={files} onupdatefiles={setFiles} maxFiles={6} name="files" stylePanelLayout='compact circle' labelIdle='Drag & Drop your file here or click ' />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <label htmlFor="nft-collection" className="form-label">Collection:</label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Collectiondata} defaultvalue={[Collectiondata[0]]} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label htmlFor="nft-royality" className="form-label">Royalties (%):</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <SpkSelect option={Royality} classNameprefix='Select2' menuplacement='auto' mainClass="multi-select"
                                        placeholder="Select The Royalties" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label htmlFor="nft-tags" className="form-label">Tags:</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <CreatableSelect components={components} classNamePrefix='react-select' inputValue={inputValue} isClearable isMulti menuIsOpen={false} onChange={(newValue) => {
                                        if (Array.isArray(newValue)) {
                                            setValue(newValue);
                                        } else {
                                            setValue([]);
                                        }
                                    }} onInputChange={(newValue) => setInputValue(newValue)} onKeyDown={handleKeyDown} placeholder="Type something and press enter..." value={value} />

                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col md={2}>
                                    <Form.Label htmlFor="nft-properties" className="form-label">Properties:</Form.Label>
                                </Col>
                                <Col md={10}>
                                    <textarea className="form-control" id="nft-properties" rows={3}
                                        placeholder="Define your NFT properties..."></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="blockchain" className="form-label">Blockchain:</Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <SpkSelect option={Blockchaindata} classNameprefix='Select2' defaultvalue={[Blockchaindata[0]]} menuplacement='auto' mainClass="multi-select"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="editions" className="form-label">No. of Editions:</Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Control type="number" className="form-control" id="editions" placeholder="e.g., 1" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-link" className="form-label">External Link: </Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Control type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-creator-name" className="form-label">Creator Name: </Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Control type="text" className="form-control" id="nft-creator-name"
                                                placeholder="Enter Name" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-creator-name" className="form-label">NFT Price: </Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Control type="text" className="form-control" id="nft-price"
                                                placeholder="Enter Price" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={6}>
                                    <Row className="mb-3">
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-creator-name" className="form-label">NFT Size: </Form.Label>
                                        </Col>
                                        <Col xl={8}>
                                            <Form.Control type="text" className="form-control" id="nft-size"
                                                placeholder="Enter Size" />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <Link to="#!" className="btn btn-primary me-2 btn-wave waves-effect waves-light">Create NFT</Link>
                            <Link to="#!" className="btn btn-danger btn-wave waves-effect waves-light">Cancel</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Row>
                        <Col xxl={12}>
                            <SpkNftMarcketPlace card={data} />
                        </Col>
                        <Col xxl={12} className="">
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title className=""> My Collections : </Card.Title>
                                    <Link to="#!" className="text-primary text-decoration-underline ms-auto"> View All </Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap">
                                            {MyCollectionsdata.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td>
                                                        <Link to="#!">
                                                            <div className="d-flex align-items-top">
                                                                <div className="avatar avatar-md me-2">
                                                                    <img src={idx.image} alt="" />
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <p className="mb-0 fs-14 fw-medium similar-product-name text-truncate">{idx.title}</p>
                                                                    <span className="fw-medium text-muted fs-12">{idx.text}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="text-center"> {idx.date}</td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default CreateNft;