import { Card, Col, Dropdown, Row } from "react-bootstrap";
import { Fragment } from "react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import { Link } from "react-router-dom";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import { ActivityByWeek, MostPopular, PlayedData, Player, PodcastActivityOptions, PodcastActivitySeries, PopularArtists, RecentlyPlayedFullData, TopCategories, TopPodcasters } from "../../../shared/data/dashboards/podcastdata";
import SpkDropdown from "../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown";
import Spkapexcharts from "../../../shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "../../../shared/@spk-reusable-components/reusable-tables/spk-tables";
import background3 from '../../../assets/images/media/backgrounds/3.png'
import png1 from '../../../assets/images/media/png/11.png'


const Podcast = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title={"Expenses"} />

            <Pageheader title="Dashboard" currentpage="Expenses" activepage="Expenses" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={7}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Popular Artists </Card.Title>
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm" Buttontype="button">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <Row className="list-unstyled gy-4">
                                {PopularArtists.map((data) => (
                                    <Col className=" mb-3 mb-xl-0" key={data.id}>
                                        <div className={`border border-${data.border} border-opacity-25 align-items-center gap-2 p-3 text-center rounded-3 pod-artist`}>
                                            <div className="lh-1 mb-2 rounded-circle">
                                                <span className="podcast-author rounded-circle d-inline-block">
                                                    <span className={`avatar avatar-xxl p-2 bg-${data.imageBg} bg-opacity-20 avatar-rounded`}>
                                                        <img src={data.image} alt="" />
                                                    </span>
                                                </span>
                                            </div>
                                            <div> <Link to="#!" className="fw-semibold">{data.title}</Link>
                                                <p className="text-muted mb-2">{data.author}</p><span className={`text-${data.imageBg} fw-semibold`}>{data.posts} Posts</span>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Most Popular </Card.Title>
                            <Link to="#!" className="btn btn-sm btn-primary-light"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pb-0 pt-0">
                            <Row>
                                {MostPopular.map((data) => (
                                    <div className="col-md-6" key={data.id}>
                                        <Card className="custom-card border shadow-none">
                                            <Card.Body className="">
                                                <div className="d-flex align-items-center">
                                                    <img src={data.image} alt="img" className="avatar avatar-xxl me-3" />
                                                    <div className="w-100">
                                                        <div className="d-flex align-items-start justify-content-between mb-2 flex-wrap gap-2">
                                                            <div>
                                                                <Link to="#!">
                                                                    <h6 className="fw-semibold mb-0">{data.title}</h6>
                                                                </Link>
                                                                <span className="text-muted fs-12">By {data.author}</span>
                                                            </div>
                                                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-icon no-caret" Icon={true} IconClass="ri-more-2-fill">
                                                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li>
                                                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                                                            </SpkDropdown>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between flex-wrap gap-2">
                                                            <SpkButton Buttonvariant="primary-transparent" aria-label="button" Buttontype="button" Customclass="btn btn-sm py-0 px-2"> <i className="ri-play-fill me-1"></i> Listen Now </SpkButton>
                                                            <div className="d-flex align-items-center gap-3 lh-1 flex-wrap gap-2">
                                                                <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1">
                                                                    <i className="ri-time-line lh-1 align-middle fs-14"></i>{data.duration}
                                                                </span>
                                                                <span className="d-block d-flex align-items-center gap-2 fs-14 fw-semibold lh-1"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>{data.listens}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} md={8}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Podcast Activity</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light no-caret" Toggletext=" Sort By " Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" pt-0 pb-0">
                            <div className="ps-3 d-flex align-items-center gap-3 pb-3 mb-2">
                                <h5 className="fw-medium mb-0">365 Hours</h5>
                                <div className="text-muted fs-12 mb-0">Total Watch Time<span className="ms-2 d-inline-block text-primary"><i className="fe fe-arrow-up-right"></i>0.25%</span> </div>
                            </div>
                            <div id="podcast-activity">
                                <Spkapexcharts chartOptions={PodcastActivityOptions} chartSeries={PodcastActivitySeries} type="line" width={'100%'} height={379} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} md={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Top Categories </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0">
                            <ul className="list-unstyled latest-courses-list main-custom-card">
                                {TopCategories.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center flex-wrap gap-3"> <span
                                            className={`avatar avatar-md ${data.categoryColor}`}>
                                            {data.svg}
                                        </span>
                                            <div className=""> <span className="d-block fw-semibold mb-0">{data.title}</span>
                                                <Link to="#!" className="text-muted fs-13">Read More<i className="ti ti-arrow-right mx-1"></i></Link>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    {Player.map((data) => (
                        <Card className="custom-card overflow-hidden" key={data.id}>
                            <Card.Body className=" p-4">
                                <div className="d-flex justify-content-between">
                                    <h5 className="fw-semibold mb-1 mt-2">Player</h5>
                                    <Link aria-label="anchor" to="#!"> <i className="ri-heart-fill fs-4 lh-1 text-danger"></i> </Link>
                                </div>
                                <p className="op-8 fs-12 mb-4">{data.description}</p>
                                <div className="text-center mb-4">
                                    <div className="mb-4 pod-player-img p-1 bg-primary-transparent rounded shadow-sm">
                                        <img src={data.imageUrl} alt="" className="rounded shadow-sm" />
                                    </div>
                                    <Link to="#!">
                                        <h6 className="fw-semibold mb-1">{data.title}</h6>
                                    </Link>
                                    <span className="op-8 fs-13">By {data.artist}</span>
                                </div>
                                <div className="d-flex gap-3 align-items-center mb-4">
                                    <div className="fs-12">{data.currentTime}</div>
                                    <div className="progress progress-xs progress-custom progress-animate podcast-playing-progress" role="progressbar" aria-valuenow={data.progress.ariaValueNow} aria-valuemin={0} aria-valuemax={100}>
                                        <div className="progress-bar" style={{ width: data.progress.width }}> </div>
                                    </div>
                                    <div className="fs-12">{data.totalTime}</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center p-2 bg-light flex-wrap gap-3 lh-1 rounded mb-2 custom-podcast">
                                    <Link aria-label="anchor" to="#!"> <i className="ri-repeat-2-line fs-18 p-3 rounded-circle pod-icons shadow-sm"></i></Link>
                                    <Link aria-label="anchor" to="#!"> <i className="ri-skip-back-line fs-18 p-3 rounded-circle pod-icons shadow-sm"></i></Link>
                                    <Link aria-label="anchor" to="#!"> <i className="ri-pause-line fs-18 p-3 rounded-circle pod-icons shadow-sm bg-primary text-fixed-white"></i></Link>
                                    <Link aria-label="anchor" to="#!"> <i className="ri-skip-forward-line fs-18 p-3 rounded-circle pod-icons shadow-sm"></i> </Link>
                                    <Link aria-label="anchor" to="#!"> <i className="ri-shuffle-line fs-18 p-3 rounded-circle pod-icons shadow-sm"></i> </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Recently Played </Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-2">
                            <ul className="list-unstyled podcast-recently-played-list">
                                {PlayedData.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1"> <span className={`avatar avatar-md p-1 bg-${data.imageBg}`}>
                                                <img src={data.image} alt="" /> </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link to="#!" className="fw-semibold">{data.title}</Link>
                                                <span className="d-block fs-13 text-muted">{data.author}</span>
                                            </div>
                                            <div className="text-end">
                                                <Link to="#!" className="fw-medium text-gray-3">
                                                    <i className={`ri-heart-fill fs-18 lh-1 text-${data.timeColor}`}></i>
                                                </Link>
                                                <span className="d-block fs-13 text-muted">{data.time}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Top Podcasters</Card.Title> <SpkButton Buttonvariant="light" Customclass="btn btn-sm" Buttontype="button">View All</SpkButton>
                        </Card.Header>
                        <Card.Body className=" pt-1">
                            <ul className="list-unstyled podcasters">
                                {TopPodcasters.map((data) => (
                                    <li key={data.id}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1"> <span className={`avatar avatar-md p-1 bg-${data.avatarBg} avatar-rounded`}>
                                                <img src={data.avatar} alt="" /> </span> </div>
                                            <div className="flex-fill"> <span className="fs-14 d-block mb-0 fw-semibold">{data.name}</span>
                                                <span className="text-muted fs-12">{data.followers} Followers</span>
                                            </div>
                                            <div> <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm">Follow</SpkButton> </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Activity By Week</Card.Title>
                            <Link to="#!" className="fs-12 text-muted fw-medium d-inline-flex align-items-center"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" pt-0 Pod-activity">
                            {ActivityByWeek.map((data) => (
                                <div className={`d-flex align-items-start p-2  Pod-activity-list border rounded`} key={data.id}>
                                    <div className="me-2">
                                        <span className={`avatar avatar-md p-2 bg-${data.avatarBg} border border-${data.avatarBorder} border-opacity-25 avatar-rounded`}> {data.svg} </span>
                                    </div>
                                    <div className="flex-fill mt-1">
                                        <div className="d-flex align-items-top justify-content-between mb-2">
                                            <div>
                                                <div className="fw-semibold mb-1 lh-1">{data.episode}</div>
                                                <p className="mb-0 text-muted">{data.title}</p>
                                            </div>
                                            <div className="text-muted fw-medium fs-12">Last Played</div>
                                        </div>
                                        <div className="d-flex align-items-center gap-3 justify-content-between">
                                            <div className={`progress progress-md p-1 rounded-1 progress-animate custom-progress-4 flex-fill bg-${data.progressContainerBg}`} role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                                                <div className={`progress-bar progress-bar-striped bg-${data.progress.progressBg}`} style={{ width: data.progress.width }}></div>
                                            </div>
                                            <div><strong>{data.time}</strong><span className="text-muted"> mins</span></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title> Recently Played </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext=" Sort By " Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Podcast Name' }, { title: 'duration' }, { title: 'Category' }, { title: 'Latest Episode' }, { title: 'Average Duration' }, { title: 'Favourites' }, { title: 'Action' },]}>
                                    {RecentlyPlayedFullData.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={data.image} className="" alt="..." />
                                                    </span>
                                                    <div>
                                                        <Link to="#!" className="fw-semibold mb-0 d-flex align-items-center">{data.title}</Link>
                                                        <span className="fs-12 d-block text-muted">{data.author}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{data.playTime}</td>
                                            <td> <span className={`badge bg-${data.categoryBg}`}>{data.category}</span> </td>
                                            <td>{data.episode}</td>
                                            <td>{data.duration}</td>
                                            <td> <Link aria-label="anchor" to="#!"> <i className={`ri-heart-fill fs-16 lh-1 text-${data.id === 2 || data.id === 4 ? "muted op-2" : "danger"} me-2`}></i> {data.id === 2 || data.id === 4 ? "Add Now" : "Added"}</Link> </td>
                                            <td>
                                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light btn-icon no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                    <li><Dropdown.Item href='#!'>Download</Dropdown.Item></li>
                                                    <li><Dropdown.Item href='#!'>Import</Dropdown.Item></li>
                                                    <li><Dropdown.Item href='#!'>Export</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </td >
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link className="page-link" to="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link className="page-link" to="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#!">2</Link></li>
                                            <li className="page-item"> <Link className="page-link text-primary" to="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment >
    );
};

export default Podcast;