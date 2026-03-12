import EmojiPicker from 'emoji-picker-react';
import SimpleBar from 'simplebar-react'
import { Col, Form, Modal, Nav, Offcanvas, Row } from "react-bootstrap";
import { Fragment, useRef, useState, type ChangeEvent } from 'react';
import Seo from '../../../shared/layouts-components/seo/seo';
import Pageheader from '../../../shared/layouts-components/pageheader/pageheader';
import { callLogs, chatGroups, chatTabs, contacts, digitalChatbotChatQuestions, documents, messages, myChatGroups, statusData } from '../../../shared/data/pages/chatappdata';
import SpkDropdown from '../../../shared/@spk-reusable-components/reusable-uielements/spk-dropdown';
import { Link } from 'react-router-dom';
import SpkTooltips from '../../../shared/@spk-reusable-components/reusable-uielements/spk-tooltips';
import SpkButton from '../../../shared/@spk-reusable-components/reusable-uielements/spk-button';
import SpkBadge from '../../../shared/@spk-reusable-components/reusable-uielements/spk-badge';
import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face21 from '../../../assets/images/faces/21.jpg';
import { ChatGallerylist } from '../../../shared/data/pages/chatgallerydata';


const Chat = () => {
    const [selectedTab, setSelectedTab] = useState("users-tab");

    const [selectedUser, setSelectedUser] = useState<any>({ name: "", status: "", img: face2 });
    const chartWrapperRef = useRef<HTMLDivElement | null>(null); // Create a reference to the chart wrapper

    const toggleChat = () => {
        chartWrapperRef.current?.classList.add("responsive-chat-open");
    };

    const toggleChat1 = () => {
        chartWrapperRef.current?.classList.remove("responsive-chat-open");
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showPicker, setShowPicker] = useState(false);
    const [inputValue, setInputValue] = useState(""); // state for input value
    const pickerRef = useRef(null);

    interface EmojiClickData {
        emoji: string;
    }

    const handleEmojiClick = (emojiData: EmojiClickData) => {
        // Append the selected emoji to the input value
        setInputValue((prevValue) => prevValue + emojiData.emoji);
    };
    const [selectedImage, setSelectedImage] = useState(face21);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {

        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target?.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };


    const [offcanvas, setOffcanvas] = useState<{ [key: string]: boolean }>({});
    const handleOffcanvasOpen = (offcanvasName: string) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: true }));
    };
    const handleOffcanvasClose = (offcanvasName: string) => {
        setOffcanvas((prevOffcanvas) => ({ ...prevOffcanvas, [offcanvasName]: false }));
    };


    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title="Pages-Chat" />

            <Pageheader title="Pages" currentpage="Chat" activepage="Chat" />
            {/* <!-- Page Header Close --> */}

            <div className="main-chart-wrapper gap-2  mb-2 d-flex" ref={chartWrapperRef} onClick={() => setShowPicker(false)}>
                <SimpleBar className="chat-navbar rounded border bg-white p-3 d-flex flex-column justify-content-between" id="main-chat-navabar">
                    <ul className="nav nav-tabs scaleX nav-justified mb-0 border-bottom-0" id="myTab1" role="tablist">
                        {chatTabs.map((data, index) => (
                            <li className="nav-item me-0" role="presentation" key={index} onClick={() => setSelectedTab(data.tabId)}>
                                <Nav.Link className={`nav-link chat-nav-link mb-3 d-flex align-items-center justify-content-center ${selectedTab === data.tabId ? "active" : ""}`} >
                                    {data.svg}
                                </Nav.Link>
                            </li>
                        ))}
                    </ul>
                </SimpleBar>
                <div className="chat-info border">
                    <div className="tab-content" id="myTabContent">
                        {selectedTab === "users-tab" && (
                            <div className="tab-pane border-0 chat-users-tab active show" id="users-tab-pane"
                                role="tabpanel" aria-labelledby="users-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Messages</h6>
                                    <SpkDropdown Togglevariant="secondary-light" Customtoggleclass="btn-secondary-light btn btn-icon btn-secondary-light btn-wave waves-light waves-effect d-flex align-items-center justify-content-center no-caret" Icon={true} IconClass="ri-settings-3-line">
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Select All</Link></li>
                                        <li className="p-0"><Link className="dropdown-item" to="#!">Clear All</Link>
                                        </li>
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Setting
                                        </Link></li>
                                    </SpkDropdown>
                                </div>

                                <SimpleBar className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">

                                    {messages.map((data, index) => (
                                        <>
                                            <li className="pb-0" key={index}>
                                                <p className="text-muted fs-11 fw-medium mb-2 op-7">{data.title}</p>
                                            </li>
                                            {
                                                data.chats.map((chat, idx) => {
                                                    return (
                                                        <li className={`${chat.isActive ? "active" : ""} ${chat.unread > 0 ? "chat-msg-unread" : ""} checkforactive`} key={idx}>
                                                            <Link to="#!" onClick={() => setSelectedUser({ name: chat.name, status: chat.status, img: chat.imgUrl })}>
                                                                <div className="d-flex align-items-top">
                                                                    <div className="me-1 lh-1">
                                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                                            <img src={chat.imgUrl} alt="img" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex-fill" onClick={toggleChat}>
                                                                        <p className="mb-0 fw-medium">
                                                                            {chat.name}
                                                                            <span className="float-end text-muted fw-normal fs-11">{chat.time}</span>
                                                                        </p>
                                                                        <p className={`fs-12 mb-0 ${chat.isTyping ? "chat-msg-typing" : ""}`}>
                                                                            <span className="chat-msg text-truncate">{chat.message}</span>
                                                                            {chat.unread > 0 ? (<span className="badge bg-danger rounded-pill float-end">{chat.unread}</span>) : ""}
                                                                            {chat.ticmark ? (<span className="chat-read-icon float-end align-middle"><i className="ri-check-double-fill"></i></span>) : ''}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </>
                                    ))}
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "groups-tab" && (
                            <div className="tab-pane border-0 chat-groups-tab active show" id="groups-tab-pane" role="tabpanel"
                                aria-labelledby="groups-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Groups</h6>
                                    <SpkTooltips title="Add Group">
                                        <SpkButton Buttonlabel="button" Buttonvariant="secondary-light" Customclass="btn btn-icon  btn-wave waves-light waves-effect" Buttontype="button">
                                            <i className="ri-add-line"></i></SpkButton>
                                    </SpkTooltips>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 mt-2" id="groups-tab-pane-list">
                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-1 op-7">MY CHAT GROUPS</p>
                                    </li>
                                    {
                                        myChatGroups.map((data, index) => {
                                            return (
                                                <>
                                                    <li key={index}>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div onClick={toggleChat}>
                                                                <p className="mb-0">{data.name}</p>
                                                                <p className="mb-0"><span className={`badge bg-${data.onlineBadge.bg}`}>{data.onlineBadge.text}</span></p>
                                                            </div>
                                                            <div className="avatar-list-stacked my-auto">
                                                                {
                                                                    data.avatars.map((imgSrc, idx) => {
                                                                        return (
                                                                            <span className="avatar avatar-sm avatar-rounded" key={idx}>
                                                                                <img src={imgSrc} alt="img" />
                                                                            </span>
                                                                        )
                                                                    })
                                                                }
                                                                <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                                    to="#!">
                                                                    {data.extraMembers}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </>
                                            )
                                        })
                                    }

                                    {/* Group Chats */}
                                    <li className="pb-0">
                                        <p className="text-muted fs-11 fw-medium mb-1 op-7">GROUP CHATS</p>
                                    </li>
                                    {chatGroups.map((data, index) => (
                                        <li className={`checkforactive ${data.unread > 0 ? "chat-msg-unread" : ""} ${data.isActive ? "" : "chat-inactive"}`} key={index}>
                                            <Link to="#!"
                                                onClick={() => setSelectedUser({ name: data.name, status: data.status, img: data.imgUrl })}
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className={`avatar avatar-md ${data.status === "online" ? "online" : "offline"} me-2 avatar-rounded`}>
                                                            <img src={data.imgUrl} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill" onClick={toggleChat}>
                                                        <p className="mb-0 fw-medium">
                                                            {data.name}
                                                            <span className="float-end text-muted fw-normal fs-11">{data.time}</span>
                                                        </p>
                                                        <p className={`fs-12 mb-0 ${data.isTyping ? "chat-msg-typing" : ""}`}>
                                                            <span className="chat-msg text-truncate">{data.message}</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                            {
                                                                data.unread > 0 ? (
                                                                    <span className="badge bg-success-transparent rounded-circle float-end">{data.unread}</span>
                                                                )
                                                                    : ""
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </SimpleBar>
                            </div>
                        )}
                        {selectedTab === "call-tab" && (
                            <div className="tab-pane border-0 chat-call-tab active show" id="call-tab-pane" role="tabpanel" aria-labelledby="groups-tab" tabIndex={0} >
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">All Calls</h6>
                                    <SpkDropdown Togglevariant="secondary-light" Customtoggleclass="btn btn-icon no-caret  btn-wave waves-light waves-effect d-flex align-items-center justify-content-center" Icon={true} IconClass="ri-settings-3-line">
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Delete</Link></li>
                                        <li className="p-0"><Link className="dropdown-item" to="#!">Select All</Link>
                                        </li>
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Clear All
                                        </Link></li>
                                    </SpkDropdown>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 mt-2 call-tab p-3" id="call-tab-list">
                                    {callLogs.map((data, index) => (
                                        <li className="mb-3" key={index}>
                                            <div className="d-flex align-items-center flex-wrap gap-1">
                                                <div className="me-1 lh-1">
                                                    <span className={`avatar avatar-md ${data.statusClass} me-2 avatar-rounded p-1 border`}>
                                                        <img src={data.imgUrl} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        {data.name}
                                                        <span className={`ms-1 ${data.callStatusClass}`}><i className={data.callTypeIcon}></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">{data.timestamp}</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <SpkButton Buttonlabel="button" Buttontype="button" Buttonvariant='' Customclass={`btn btn-sm btn-icon btn-${data.buttonClr}`}>
                                                        <i className={data.buttonIcon}></i>
                                                    </SpkButton>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "status-tab" && (
                            <div className="tab-pane border-0 chat-status-tab active show" id="status-tab-pane" role="tabpanel"
                                aria-labelledby="groups-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Status</h6>
                                    <SpkTooltips title="Add Status">
                                        <SpkButton Buttonlabel="button" Customclass="btn btn-icon btn-secondary-light btn-wave waves-light waves-effect"
                                            Buttontype="button" Buttontoggle="tooltip">
                                            <i className="ri-add-line"></i>
                                        </SpkButton>
                                    </SpkTooltips>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 chat-status-tab p-3" id="chat-status-tab">
                                    <li className="mb-3">
                                        <div className="d-flex gap-2 align-items-center">
                                            <span className="avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed">
                                                <img src={face5} alt="" />
                                            </span>
                                            <div>
                                                <div className="fw-semibold">My Status</div>
                                                <p className="mb-0 text-muted fs-11">Tap to add status</p>
                                            </div>
                                        </div>
                                    </li>
                                    {statusData.map((data, index) => (
                                        <>
                                            <li className="mb-3" key={index}>
                                                <p className="text-muted fs-11 fw-medium mb-2 op-7">{data.title}</p>
                                            </li>
                                            {data.status.map((status, idx) => (
                                                <li className="mb-3" key={idx}>
                                                    <div className="d-flex gap-2 align-items-center">
                                                        <span className="avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed">
                                                            <img src={status.avatar} alt="" />
                                                        </span>
                                                        <div>
                                                            <div className="fw-semibold">{status.name}</div>
                                                            <p className="mb-0 text-muted fs-12"><i className={status.classes.timeIcon}></i>{status.time}</p>
                                                        </div>
                                                        {status.views ? (
                                                            <div className="ms-auto">
                                                                <span className="mb-0 text-muted fs-12"><i className={status.classes.viewIcon}></i>{status.views}</span>
                                                            </div>
                                                        ) :
                                                            ""
                                                        }
                                                    </div>
                                                </li>
                                            ))}
                                        </>
                                    ))}
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "contacts-tab" && (
                            <div className="tab-pane border-0 chat-contacts-tab active show" id="contacts-tab-pane" role="tabpanel"
                                aria-labelledby="contacts-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Contacts</h6>
                                    <SpkButton Buttonlabel="button" Buttonvariant="secondary-light" onClickfunc={handleShow} Customclass="btn btn-icon btn-wave waves-light waves-effect"
                                        Buttontype="button" data-bs-toggle="modal" data-bs-target="#create-contact"> <i
                                            className="ri-add-line"></i> </SpkButton>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 chat-contacts-tab" id="contacts-tab-pane-list">
                                    {contacts.map((data, index) => (
                                        <>
                                            <li key={index}>
                                                <span className="text-default fw-semibold">{data.group}</span>
                                            </li>
                                            {data.contacts.map((contact, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <div className="d-flex align-items-center gap-3">
                                                            <div className="lh-1">
                                                                <span className="avatar avatar-rounded avatar-sm">
                                                                    <img src={contact.avatar.src} alt="image" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="d-block fw-semibold">
                                                                    {contact.name}
                                                                </span>
                                                            </div>
                                                            <SpkDropdown Togglevariant="outline-light" Customtoggleclass="btn btn-icon btn-sm no-caret" Icon={true} IconClass="ri-more-2-fill">
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-message-2-line me-2"></i>Chat</Link></li>
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-phone-line me-2"></i>Audio Call</Link></li>
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-live-line me-2"></i>Video Call</Link></li>
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-edit-line me-2"></i>Edit</Link></li>
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-spam-2-line me-2"></i>Block</Link></li>
                                                                <li><Link className="dropdown-item" to="#!"><i
                                                                    className="ri-delete-bin-line me-2"></i>Delete</Link></li>
                                                            </SpkDropdown>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </>
                                    ))}
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "robot-tab" && (
                            <div className="tab-pane border-0 chat-robot-tab active show" id="robot-tab-pane" role="tabpanel"
                                aria-labelledby="robot-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Digital Chatbot</h6>
                                    <SpkTooltips title="New Chat">
                                        <SpkButton Buttonlabel="button" Buttonvariant="secondary-light" Customclass="btn btn-icon btn-wave waves-light waves-effect"
                                            Buttontype="button" ><i className="ti ti-edit fs-16"></i> </SpkButton>
                                    </SpkTooltips>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 chat-robot-tab" id="chat-robot-tab">
                                    <ul className="list-unstyled">
                                        <li className="border-bottom">
                                            <div className="custom-search chat-custom-search">
                                                <input type="text" className="header-search-bar form-control" id="header-search"
                                                    placeholder="Search for Results..." />
                                                <Link to="#!" className="custom-search-icon border-0">
                                                    <i className="bi bi-search"></i>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <span className="fs-13 text-muted fw-medium">Recent Search Result :</span>
                                        </li>
                                        {digitalChatbotChatQuestions.map((data, index) => (
                                            <li className={`${index === 0 ? "border-top" : ""} ${data.active ? "active" : ""}`} key={index}>
                                                <Link to="#!" className="fs-14">
                                                    <span className="avatar avatar-sm bg-light avatar-circle text-default me-2">
                                                        <i className={`${data.icon} fs-16`}></i>
                                                    </span>
                                                    {data.question}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "profile-tab" && (
                            <div className="tab-pane border-0 chat-profile-tab active show" id="profile-tab-pane" role="tabpanel"
                                aria-labelledby="profile-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                                    <h6 className="fw-semibold mb-0">Profile</h6>
                                    <SpkDropdown Togglevariant="secondary-light" Customtoggleclass="btn btn-icon btn-wave waves-light waves-effect no-caret" Icon={true} IconClass="ri-settings-3-line">
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Action</Link></li>
                                        <li className="p-0"><Link className="dropdown-item" to="#!">Another
                                            action</Link>
                                        </li>
                                        <li className="p-0"><Link className="dropdown-item"
                                            to="#!">Something else
                                        </Link></li>
                                    </SpkDropdown>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 profile-tab" id="profile-tab-list">
                                    <li className="chat-user-details">
                                        <div className="text-center mb-3">
                                            <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson">
                                                <img className="chatimageperson" src={face2} alt="" />
                                            </span>
                                            <p className="mb-1 fs-15 fw-medium text-dark lh-1 chatnameperson">Amelia Turner</p>
                                            <p className="fs-12 text-muted"><span className="chatnameperson">emaileyjackson2134</span>@gmail.com</p>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fs-14 fw-medium">Object :</span>
                                            <p className="mb-0 mt-2 fs-14 text-muted">When multiple languages blend, the resulting language often features a simpler and more regular grammar compared to the individual languages.</p>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fs-14 fw-medium">Personal Information :</span>
                                            <div className="text-muted mt-2">
                                                <p className="mb-2">
                                                    <span className="avatar avatar-sm avatar-rounded text-primary">
                                                        <i className="ri-mail-line align-middle fs-15"></i>
                                                    </span>
                                                    <span className="fw-medium text-default">Email : </span> your.email@example.com
                                                </p>
                                                <p className="mb-2">
                                                    <span className="avatar avatar-sm avatar-rounded text-secondary">
                                                        <i className="ri-phone-line align-middle fs-15"></i>
                                                    </span>
                                                    <span className="fw-medium text-default">Phone : </span> +1 (555) 123-4567
                                                </p>
                                                <p className="mb-2">
                                                    <span className="avatar avatar-sm avatar-rounded text-success">
                                                        <i className="ri-map-pin-line align-middle fs-15"></i>
                                                    </span>
                                                    <span className="fw-medium text-default">Website : </span> www.yourwebsite.com
                                                </p>
                                                <p className="mb-0">
                                                    <span className="avatar avatar-sm avatar-rounded text-orange">
                                                        <i className="ri-building-line align-middle fs-15"></i>
                                                    </span>
                                                    <span className="fw-medium text-default">Location : </span> City, Country
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <span className="fs-14 fw-medium">Skills :</span>
                                            <div className="mt-2">
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Project Management</span>
                                                </Link>
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Data Analysis</span>
                                                </Link>
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Marketing Strategy</span>
                                                </Link>
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Graphic Design</span>
                                                </Link>
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Content Creation</span>
                                                </Link>
                                                <Link to="#!">
                                                    <span className="badge bg-light text-default m-1 border">Market Research</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="fs-14 fw-medium">Recent Connections :</span>
                                            <ul className="list-group list-group-flush border rounded mt-2">
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={face1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Amelia Turner</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn btn-icon"> <i className="ri-add-line lh-1 align-middle"></i> </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={face14} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Henry Morgan</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon"> <i className="ri-add-line lh-1 align-middle"></i> </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={face3} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Aurora Reed</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon"> <i className="ri-add-line lh-1 align-middle"></i> </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={face10} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Leo Phillips</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon"> <i className="ri-add-line lh-1 align-middle"></i> </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={face5} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span className="fw-medium">Ava Taylor</span>
                                                        </div>
                                                        <div>
                                                            <SpkButton Size="sm" Buttonvariant="primary-light" Customclass="btn btn-icon"> <i className="ri-add-line lh-1 align-middle"></i> </SpkButton>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </SimpleBar>
                            </div>
                        )
                        }
                        {selectedTab === "documentation-tab" && (
                            <div className="tab-pane border-0 chat-documentation-tab active show" id="documentation-tab-pane" role="tabpanel"
                                aria-labelledby="documentation-tab" tabIndex={0}>
                                <div className="p-3 border-bottom d-flex justify-content-between align-items-center flex-wrap gap-2">
                                    <h6 className="fw-semibold mb-0">Documents</h6>
                                    <SpkButton Buttonlabel="button" Buttonvariant="secondary-light" Customclass="btn btn-sm btn- btn-wave waves-light waves-effect"
                                        Buttontype="button"><i className="ri-download-line me-2 fs-13"></i>Download All</SpkButton>
                                </div>
                                <SimpleBar className="list-unstyled mb-0 chat-robot-tab" id="recent-doc-tab">
                                    <li className="border-bottom">
                                        <div className="custom-search chat-custom-search">
                                            <input type="text" className="header-search-bar form-control" id="header-search"
                                                placeholder="Search for Document..." />
                                            <Link to="#!" className="custom-search-icon border-0">
                                                <i className="bi bi-search"></i>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="border-bottom">
                                        <span className="fs-13 text-muted fw-medium">Recent Shared Documents :</span>
                                    </li>
                                    {documents.map((data, index) => {
                                        return (
                                            <li key={index} className={index === documents.length - 1 ? 'border-bottom-0' : 'border-bottom'}>
                                                <div className="d-flex align-items-top justify-content-between">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className={`avatar avatar-md bg-${data.iconBg}`}>
                                                            <i className={`${data.icon} fs-18`}></i>
                                                        </div>
                                                        <div>
                                                            <Link to="#!" className="mb-1 fw-medium">{data.name}</Link>
                                                            <span className="fs-13 text-muted d-block">{data.size}</span>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        <SpkDropdown Togglevariant="outline-light" Customtoggleclass="btn btn-icon btn-outline-light btn-wave waves-light no-caret waves-effect d-flex align-items-center justify-content-center" Icon={true} IconClass="ri-more-2-fill fs-14">
                                                            <li className="p-0"><Link className="dropdown-item"
                                                                to="#!">Action</Link></li>
                                                            <li className="p-0"><Link className="dropdown-item" to="#!">Another
                                                                action</Link>
                                                            </li>
                                                            <li className="p-0"><Link className="dropdown-item"
                                                                to="#!">Something else
                                                            </Link></li>
                                                        </SpkDropdown>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }
                                </SimpleBar>
                            </div>
                        )}
                    </div>
                </div>
                <div className="main-chat-area border">
                    {selectedTab !== "robot-tab" && (
                        <div className="main-chat">
                            <div className="d-flex align-items-center border-bottom main-chat-head flex-wrap">
                                <div className="me-2 lh-1">
                                    <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                        <img className="chatimageperson" src={selectedUser.img} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <p className="mb-0 fw-medium fs-14 lh-1">
                                        <Link to="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" onClick={() => handleOffcanvasOpen('rightOffcanvas')} aria-controls="offcanvasRight" className="chatnameperson responsive-userinfo-open">
                                            {selectedUser.name ? selectedUser.name : "Amelia Turner"}
                                        </Link>
                                    </p>
                                    <p className="text-muted mb-0 chatpersonstatus">
                                        {selectedUser.status ? selectedUser.status : "online"}
                                    </p>
                                </div>

                                <div className="d-flex flex-wrap rightIcons ms-auto">
                                    <SpkTooltips title="Call">
                                        <SpkButton aria-label="button" Buttontype="button" Buttonvariant="primary-light"
                                            Customclass="btn btn-icon my-1 ms-2 rounded-pill">
                                            <i className="ti ti-phone"></i>
                                        </SpkButton>
                                    </SpkTooltips>
                                    <SpkTooltips title="Video">
                                        <SpkButton aria-label="button" Buttontype="button" Buttonvariant="secondary-light"
                                            Customclass="btn btn-icon btn-secondary-light my-1 ms-2 rounded-pill" >
                                            <i className="ti ti-video"></i>
                                        </SpkButton>
                                    </SpkTooltips>
                                    <SpkButton Buttonlabel="button" Buttontype="button" onClickfunc={toggleChat1} Buttonvariant="outline-light"
                                        Customclass="btn btn-icon  my-1 ms-2 rounded-pill responsive-userinfo-open">
                                        <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                                    </SpkButton>
                                    <SpkDropdown Customclass="ms-2" Togglevariant="danger-light" Customtoggleclass="btn btn-icon btn-danger-light my-1 rounded-pill btn-wave waves-light no-caret" Icon={true} IconClass="ti ti-dots-vertical">
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-3-line me-1"></i>Profile</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-format-clear me-1"></i>Clear Chat</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-unfollow-line me-1"></i>Delete User</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-forbid-line me-1"></i>Block User</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-error-warning-line me-1"></i>Report</Link></li>
                                    </SpkDropdown>
                                    <SpkButton Buttonlabel="button" Buttontype="button" onClickfunc={toggleChat1}
                                        Customclass="btn btn-icon btn-danger my-1 ms-2 rounded-pill responsive-chat-close">
                                        <i className="ri-close-line align-middle mb-1"></i>
                                    </SpkButton>
                                </div>
                            </div>
                            <SimpleBar className="chat-content" id="main-chat-content">
                                <ul className="list-unstyled" id="main-chat-content">
                                    <li className="chat-day-label">
                                        <span>Today</span>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">
                                                        {selectedUser.name ? selectedUser.name : "Amelia Turner"}
                                                    </span> <span
                                                        className="msg-sent-time">11:48PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hey there! &#128522; How's it going?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:50PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hey! I'm good, thanks. Just finished some work. How
                                                            about you?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">
                                                        {selectedUser.name ? selectedUser.name : "Amelia Turner"}
                                                    </span> <span
                                                        className="msg-sent-time">11:51PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Not too bad, just chilling. Have any exciting plans
                                                            for the weekend?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Not really, just relaxing. Maybe catch up on some
                                                            movies. You?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                    <img className="chatimageperson" src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">
                                                        {selectedUser.name ? selectedUser.name : "Amelia Turner"}
                                                    </span> <span
                                                        className="msg-sent-time">11:55PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Same here. Thinking of trying out that new cafe
                                                            downtown. Heard they have amazing coffee.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"><i
                                                            className="ri-check-double-line"></i></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div className="">
                                                        <p className="mb-0">Oh, nice! Let me know how it is. I might check it
                                                            out too.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img className="chatimageperson" src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md online avatar-rounded">
                                                    <img className="chatimageperson" src={selectedUser.img} alt="" />
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info chatnameperson">
                                                    {selectedUser.name ? selectedUser.name : "Amelia Turner"}
                                                    <span className="msg-sent-time">11:57PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">No spoilers, promise! Enjoy the binge-watching
                                                            session. &#128516;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleBar>
                            <div className="chat-footer">
                                <Link aria-label="anchor" className="btn btn-danger-light me-2 btn-icon btn-send" to="#!"> <i className="ri-attachment-2"></i> </Link>
                                <Link aria-label="anchor" className="btn btn-icon me-2 btn-primary emoji-picker" onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation(); // Prevent the click from bubbling to parent
                                    setShowPicker((prev) => !prev);
                                }}
                                    to="#!">
                                    <i className="ri-emotion-line"></i>
                                </Link>
                                {showPicker && (
                                    <div
                                        ref={pickerRef}
                                        style={{
                                            position: "absolute",
                                            zIndex: 1000,
                                            bottom: "3.5rem",
                                        }}
                                        onClick={(e) => e.stopPropagation()} // Prevent the picker itself from closing when clicked
                                    >
                                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                                    </div>
                                )}
                                <input className="form-control chat-message-space" placeholder="Type your message here..."
                                    type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                <Link aria-label="anchor" className="btn btn-secondary ms-2 btn-icon btn-send"
                                    to="#!">
                                    <i className="ri-send-plane-2-line"></i>
                                </Link>
                            </div>
                        </div>
                    )}
                    {selectedTab === "robot-tab" && (
                        <div className="robot-chat">
                            <div className="d-flex align-items-center border-bottom main-chat-head flex-wrap">
                                <div className="flex-fill">
                                    <p className="h6 mb-0 fw-medium">Your Perfect Solution for a Modern Website.</p>
                                </div>
                                <div className="d-flex flex-wrap rightIcons">
                                    <SpkButton aria-label="button" Buttontype="button" Buttonvariant="primary-light"
                                        Customclass="btn btn-icon btn-primary-light my-1 ms-2 btn-sm">
                                        <i className="ti ti-settings"></i>
                                    </SpkButton>
                                    <SpkButton aria-label="button" Buttontype="button" Buttonvariant="danger-light"
                                        Customclass="btn btn-icon btn-danger-light my-1 ms-2 btn-sm">
                                        <i className="ti ti-trash"></i>
                                    </SpkButton>
                                    <SpkButton aria-label="button" Buttontype="button" Buttonvariant="outline-light"
                                        Customclass="btn btn-icon btn-outline-light my-1 ms-2 responsive-userinfo-open btn-sm">
                                        <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                                    </SpkButton>
                                    <SpkDropdown Togglevariant="secondary-light" Customclass="ms-2" Customtoggleclass="btn btn-icon no-caret my-1 btn-wave waves-light btn-sm" Icon={true} IconClass="ti ti-dots-vertical">
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-3-line me-1"></i>Profile</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-format-clear me-1"></i>Clear Chat</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-unfollow-line me-1"></i>Delete User</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-user-forbid-line me-1"></i>Block User</Link></li>
                                        <li><Link className="dropdown-item" to="#!"><i
                                            className="ri-error-warning-line me-1"></i>Report</Link></li>
                                    </SpkDropdown>
                                    <SpkButton Buttonlabel="button" Buttontype="button" Buttonvariant="outline-light" Customclass="btn btn-icon my-1 ms-2 responsive-chat-close btn-sm">
                                        <i className="ri-close-line align-middle"></i>
                                    </SpkButton>
                                </div>
                            </div>
                            <SimpleBar className="chat-content" id="main-chat-content1">
                                <ul className="list-unstyled">
                                    <li className="chat-day-label">
                                        <span>Today</span>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded bg-primary chatstatusperson">
                                                    <i className="ti ti-robot fs-20"></i>
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span
                                                        className="msg-sent-time">11:48PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hello! How can I assist you today?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"></span>11:50PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">Hi! I'm looking for a template for my website. Do you have any recommendations?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src={face15} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded bg-primary chatstatusperson">
                                                    <i className="ti ti-robot fs-20"></i>
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span
                                                        className="msg-sent-time">11:51PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0"> Absolutely! The Innovative template is a great option for modern websites. It's fully responsive, customizable, and comes with clean, user-friendly design. Would you like to learn more about its features?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">That sounds interesting. What are some of its key features?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src={face15} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded bg-primary chatstatusperson">
                                                    <i className="ti ti-robot fs-20"></i>
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info">
                                                    <span className="chatnameperson">Aria Robinson</span> <span
                                                        className="msg-sent-time">11:55PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0">A sleek, modern design with a focus on user experience.

                                                            Pre-built pages for easy setup (Home, About, Services, Contact).

                                                            Integration with popular tools like Google Maps and social media links.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-end">
                                        <div className="chat-list-inner">
                                            <div className="me-3">
                                                <span className="chatting-user-info">
                                                    <span className="msg-sent-time"><span
                                                        className="chat-read-mark align-middle d-inline-flex"></span>11:52PM</span> You
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div className="">
                                                        <p className="mb-0">Thank you! I'll check it out..</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src={face15} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-item-start">
                                        <div className="chat-list-inner">
                                            <div className="chat-user-profile">
                                                <span className="avatar avatar-md avatar-rounded bg-primary chatstatusperson">
                                                    <i className="ti ti-robot fs-20"></i>
                                                </span>
                                            </div>
                                            <div className="ms-3">
                                                <span className="chatting-user-info chatnameperson">
                                                    Aria Robinson <span className="msg-sent-time">11:45PM</span>
                                                </span>
                                                <div className="main-chat-msg">
                                                    <div>
                                                        <p className="mb-0"> You're welcome! If you need any assistance or have further questions, just let me know. Have a great day! &#128516;</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleBar>
                            <div className="chat-footer">
                                <Link aria-label="anchor" className="btn btn-icon me-2 btn-secondary emoji-picker"
                                    to="#!">
                                    <i className="ri-emotion-line"></i>
                                </Link>
                                <input className="form-control chat-message-space" placeholder="Type your message here..."
                                    type="text" />
                                <Link aria-label="anchor" className="btn btn-primary ms-2 btn-icon btn-send"
                                    to="#!">
                                    <i className="ri-send-plane-2-line"></i>
                                </Link>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>


            {/* <!-- Start::chat user details offcanvas --> */}
            <Offcanvas className="offcanvas-end" placement='end' show={offcanvas['rightOffcanvas'] || false} onHide={() => handleOffcanvasClose('rightOffcanvas')} tabIndex={-1} id="offcanvasRight">
                <Offcanvas.Body className="p-0">
                    <div className="chat-user-details p-0" id="chat-user-details">
                        <div className="text-center p-4 bg-light position-relative mb-3">
                            <button type="button" className="btn-close btn btn-sm btn-icon chat-cancel-btn btn-white border m-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            <span className="avatar avatar-rounded online avatar-xxl me-2 mb-3 chatstatusperson">
                                <img className="chatimageperson" src={selectedUser.img} alt="img" />
                            </span>
                            <p className="mb-1 fs-15 fw-medium text-dark lh-1 chatnameperson">{selectedUser.name ? selectedUser.name : "Amelia Turner"}</p>
                            <p className="fs-12 text-muted"><span className="chatnameperson">emaileyjackson2134</span>@gmail.com</p>
                            <p className="text-center mb-0">
                                <button type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary btn-wave"><i className="ri-phone-line"></i></button>
                                <button type="button" aria-label="button" className="btn btn-icon rounded-pill btn-secondary ms-2 btn-wave"><i className="ri-video-add-line"></i></button>
                                <button type="button" aria-label="button" className="btn btn-icon rounded-pill btn-danger ms-2 btn-wave"><i className="ri-chat-1-line"></i></button>
                            </p>
                        </div>
                        <div className="mb-3 border rounded m-3">
                            <div className="fw-medium px-4 py-3 border-bottom">Shared Files
                                <span className="badge bg-secondary rounded-pill ms-1">04</span>
                                <span className="float-end fs-11"><Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link></span>
                            </div>
                            <ul className="shared-files list-unstyled mb-0">
                                <li className="px-4 py-3 mb-0 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 bg-primary-transparent rounded">
                                            <span className="shared-file-icon">
                                                <i className="ti ti-file-text text-primary"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="fs-12 fw-medium mb-0">Project Details.pdf</p>
                                            <p className="mb-0 text-muted fs-11">24,Oct 2024 - 14:24PM</p>
                                        </div>
                                        <div className="fs-18">
                                            <Link aria-label="anchor" to="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-4 py-3 mb-0 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 bg-secondary-transparent rounded">
                                            <span className="shared-file-icon">
                                                <i className="ri-image-line text-secondary"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="fs-12 fw-medium mb-0">Img_02.Jpg</p>
                                            <p className="mb-0 text-muted fs-11">22,Oct 2024 - 10:19AM</p>
                                        </div>
                                        <div className="fs-18">
                                            <Link aria-label="anchor" to="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-4 py-3 mb-0 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 bg-success-transparent rounded">
                                            <span className="shared-file-icon">
                                                <i className="ri-image-line text-success"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="fs-12 fw-medium mb-0">Img_15.Jpg</p>
                                            <p className="mb-0 text-muted fs-11">22,Oct 2024 - 10:18AM</p>
                                        </div>
                                        <div className="fs-18">
                                            <Link aria-label="anchor" to="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                        </div>
                                    </div>
                                </li>
                                <li className="px-4 py-3 mb-0">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 bg-orange-transparent rounded">
                                            <span className="shared-file-icon">
                                                <i className="ri-video-line text-orange"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="fs-12 fw-medium mb-0">Video_15_02_2022.MP4</p>
                                            <p className="mb-0 text-muted fs-11">22,Oct 2024 - 10:18AM</p>
                                        </div>
                                        <div className="fs-18">
                                            <Link to="#!"><i className="ri-download-2-line text-muted"></i></Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-0 border rounded p-4 m-3">
                            <div className="fw-medium mb-4">Photos & Media
                                <span className="badge bg-primary-transparent rounded-circle ms-1">22</span>
                                <span className="float-end fs-11"><Link to="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link></span>
                            </div>
                            <ChatGallerylist />
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End::chat user details offcanvas --> */}

            <Modal centered show={show} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-labelledby="create-folder"
                data-bs-keyboard="false" aria-hidden="true">

                <div className="modal-content">
                    <Modal.Header className="">
                        <h6 className="modal-title" id="staticBackdropLabel">Create Contact
                        </h6>
                        <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal" onClickfunc={handleClose}
                            aria-label="Close"></SpkButton>
                    </Modal.Header>
                    <Modal.Body className="">
                        <Row className=" gy-3 justify-content-center">
                            <Col xl={3} className="">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge Customclass="badge rounded-pill bg-primary avatar-badge" Onclickfun={openFileInput}>
                                        <Form.Control type="file" name="photo" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }}
                                            className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </Col>
                            <Col xl={12} className="">
                                <Form.Label htmlFor="create-folder1" className="form-label">Contact Name</Form.Label>
                                <Form.Control type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                            </Col>
                            <Col xl={12} className="">
                                <Form.Label htmlFor="create-folder1" className="form-label">Contact Destination</Form.Label>
                                <Form.Control type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <SpkButton Size="sm" Buttonvariant="light" Buttontype="button" onClickfunc={handleClose}
                            Buttondismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                        <SpkButton Size="sm" Buttonvariant="primary" Buttontype="button">Create</SpkButton>
                    </Modal.Footer>
                </div>

            </Modal>

        </Fragment>
    );
};

export default Chat;
