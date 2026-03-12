import { Fragment, } from "react";
import { Card, Col } from "react-bootstrap";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import { WalletData } from "../../../../shared/data/apps/crypto/walletdata";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";

const Wallet = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Wallet" />
            <Pageheader title="Apps" subtitle="Crypto" currentpage="Wallet" activepage="Wallet" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row">
                {WalletData.map((idx, index) => (
                    <Col xxl={6} lg={6} key={index}>
                        <Card className="custom-card">
                            <Card.Header className="border-bottom">
                                <Card.Title> {idx.title} </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <img src={idx.imgSrc} alt="Bitcoin" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available {idx.walletType}</span>
                                            <span className="fw-medium fs-18">{idx.value}</span>
                                        </div>
                                    </div>
                                    <div className="text-end">
                                        <span className="fw-medium fs-18">{idx.Usdvalue}</span>
                                        <span className="d-block text-muted fs-12 fw-normal">Value in USD</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-3 flex-wrap">
                                    <div>
                                        <span className="d-block text-muted fs-12 fw-normal">Total Transactions:</span>
                                        <span className="fw-medium fs-15">{idx.transaction}</span>
                                    </div>
                                    <div>
                                        <span className="d-block text-muted fs-12 fw-normal">Last Transaction:</span>
                                        <span className="fw-medium fs-15">{idx.Lasttransaction}</span>
                                        <span className="text-muted fs-12 ms-1"> on 2024-09-24</span>
                                    </div>
                                    <div className="text-break">
                                        <span className="d-block text-muted fs-12 fw-normal">Wallet Address:</span>
                                        <span className="fw-medium fs-15">{idx.walletAddress}</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex gap-2 flex-wrap">
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-w-lg btn-wave flex-fill waves-effect waves-light d-inline-flex align-items-center justify-content-center">
                                        <i className="ti ti-coins me-1 fs-14"></i> Transfer
                                    </SpkButton>
                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-w-lg  btn-wave flex-fill waves-effect waves-light d-inline-flex align-items-center justify-content-center">
                                        <i className="ri-wallet-3-line me-1 fs-14"></i> Withdraw
                                    </SpkButton>
                                    <SpkButton Buttonvariant="danger" Customclass="btn btn-w-lg  btn-wave flex-fill waves-effect waves-light d-inline-flex align-items-center justify-content-center">
                                        <i className="ri-history-line me-1 fs-14"></i> Transaction History
                                    </SpkButton>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </div>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Wallet;