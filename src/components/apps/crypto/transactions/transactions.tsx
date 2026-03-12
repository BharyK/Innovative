import { Fragment, useState, } from "react";
import { Card, Col, Form, Pagination } from "react-bootstrap";
import { Cardsdata, Historydata, type historydata } from "../../../../shared/data/apps/crypto/transactiondata";
import Seo from "../../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../../shared/layouts-components/pageheader/pageheader";
import Spktransactioncard from "../../../../shared/@spk-reusable-components/reusable-apps/spk-transactioncard";
import SpkDropdown from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import SpkButton from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import SpkTables from "../../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-badge";
import SpkTooltips from "../../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips";


const Transactions = () => {
    const [transaction, setTransaction] = useState(Historydata);
    const handleRemove = (id: number) => {
        const list = transaction.filter((idx: historydata) => idx.id !== id)
        setTransaction(list);
    }
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Transactions" />
            <Pageheader title="Apps" subtitle="Crypto" currentpage="Transactions" activepage="Transactions" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <div className="row row-cols-xxl-5 row-cols-xl-3 row-cols-md-2 row-cols-1">
                {Cardsdata.map((idx) => (
                    <div className="col" key={idx.id}>
                        <Spktransactioncard obj={idx} />
                    </div>
                ))}
            </div>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Col xl={12}>
                <Card className="custom-card">
                    <Card.Header className="justify-content-between">
                        <div className="card-title"> Transaction History </div>
                        <div className="d-flex flex-wrap gap-2">
                            <div> <Form.Control className="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example" /> </div>
                            <SpkDropdown Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Arrowicon={true}>
                                <li><a className="dropdown-item" href="#!">This Week</a></li>
                                <li><a className="dropdown-item" href="#!">This Month</a></li>
                                <li><a className="dropdown-item" href="#!">This Year</a></li>
                            </SpkDropdown>
                            <div>
                                <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn btn-wave waves-effect waves-light">View All</SpkButton>
                            </div>
                        </div>
                    </Card.Header>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <SpkTables tableClass="table text-nowrap"
                                header={[{ title: 'Cryptocurrency' }, { title: 'Date & Time' }, { title: 'Transaction ID' }, { title: 'Type' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Recipient Address' }, { title: 'Actions' }]}>
                                {transaction.map((idx) => (
                                    <tr className="transaction-list" key={idx.id}>
                                        <td>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                                <div className="fw-medium"> {idx.name}</div>
                                            </div>
                                        </td>
                                        <td>{idx.date}</td>
                                        <td>{idx.txn}</td>
                                        <td className={`text-${idx.bg1} fw-medium`}>{idx.type}</td>
                                        <td>{idx.amount}</td>
                                        <td> <SpkBadge variant={`${idx.bg}-transparent`}>{idx.status}</SpkBadge></td>
                                        <td className="text-muted">{idx.recipoent}</td>
                                        <td>
                                            <SpkTooltips title="download">
                                                <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon me-1"  ><i className="ri-download-2-line"></i>
                                                </SpkButton>
                                            </SpkTooltips>
                                            <SpkButton Size="sm" Buttonvariant="danger-light" onClickfunc={() => handleRemove(idx.id)} Customclass="btn btn-icon ms-1 transactions-delete">
                                                <i className="ri-delete-bin-5-line"></i>
                                            </SpkButton>
                                        </td>
                                    </tr>
                                ))}
                            </SpkTables>
                        </div>
                    </div>
                    <div className="card-footer border-top-0">
                        <nav aria-label="Page navigation">
                            <Pagination className=" mb-0 float-end">
                                <Pagination.Item disabled > Previous </Pagination.Item>
                                <Pagination.Item>1</Pagination.Item>
                                <Pagination.Item active aria-current="page"> 2 </Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item> Next</Pagination.Item>
                            </Pagination>
                        </nav>
                    </div>
                </Card>
            </Col>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default Transactions;