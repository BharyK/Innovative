import face1 from '../../../assets/images/faces/1.jpg';
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face4 from '../../../assets/images/faces/4.jpg';
import face5 from '../../../assets/images/faces/5.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face7 from '../../../assets/images/faces/7.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face10 from '../../../assets/images/faces/10.jpg';
import face11 from '../../../assets/images/faces/11.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face13 from '../../../assets/images/faces/13.jpg';
import face14 from '../../../assets/images/faces/14.jpg';
import face15 from '../../../assets/images/faces/15.jpg';
import face16 from '../../../assets/images/faces/16.jpg';
import face17 from '../../../assets/images/faces/17.jpg';
import face18 from '../../../assets/images/faces/18.jpg';
import face19 from '../../../assets/images/faces/19.jpg';
import face20 from '../../../assets/images/faces/20.jpg';
import face21 from '../../../assets/images/faces/21.jpg';


export const messages = [
    {
        title: "ACTIVE CHATS",
        chats: [
            {
                name: "Emma Johnson",
                time: "1:32PM",
                message: "Hey there! How's your day going? 😊",
                imgUrl: face5,
                status: "online",
                unread: 0,
                isActive: false,
                isTyping: false,
                ticmark:true
            },
            {
                name: "Amelia Turner",
                time: "12:24PM",
                message: "Typing...",
                imgUrl: face2,
                status: "online",
                unread: 2,
                isActive: "true",
                isTyping: true,
                ticmark:false
            },
            {
                name: "Samuel Harris",
                time: "1:16PM",
                message: "Just had the best coffee ever! ☕",
                imgUrl: face10,
                status: "online",
                unread: 0,
                isActive: false,
                isTyping: false,
                ticmark:true
            },
            {
                name: "Aria Robinson",
                time: "12:45PM",
                message: "Guess what? I aced that test!",
                imgUrl: face8,
                status: "online",
                unread: 0,
                isActive: false,
                isTyping: false,
                ticmark:true
            }
        ]
    },
    {
        title: "ALL CHATS",
        chats: [
            {
                name: "Logan Brooks",
                imgUrl: face11,
                time: "11:54AM",
                message: "Movie night tonight? 🎞️",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0,
            },
            {
                name: "Evelyn Adams",
                imgUrl: face3,
                time: "9:45AM",
                message: "Work is dragging...",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0,
            },
            {
                name: "Lily Brown",
                imgUrl: face6,
                time: "8:31AM",
                message: "Meet for lunch tomorrow?",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0,
            },
            {
                name: "Chloe Lewis",
                imgUrl: face4,
                time: "7:23AM",
                message: "Weekend plans?",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0
            },
            {
                name: "Leo Phillips",
                imgUrl: face13,
                time: "10:22AM",
                message: "Craving pizza right now! 🍕",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0,
            },
            {
                name: "Lucas Hayes",
                imgUrl: face15,
                time: "9:10AM",
                message: "Got any Netflix recommendations?",
                status: "offline",
                isActive: false,
                isTyping: false,
                unread: 0,
            }
        ]
    }
];

export const myChatGroups = [
    {
        id: 1,
        name: "1) ChatMingle Collective",
        onlineBadge: {
            text: "4 Online",
            bg: "success-transparent"
        },
        avatars: [
            face2,
            face8,
            face2,
            face10
        ],
        extraMembers: "+19"
    },
    {
        id: 2,
        name: "2) ConnectHub Crew",
        onlineBadge: {
            text: "32 Online",
            bg: "secondary-transparent"
        },
        avatars: [
            face1,
            face7,
            face3,
            face9,
            face12
        ],
        extraMembers: "+123"
    },
    {
        id: 3,
        name: "3) TalkTide Tribe",
        onlineBadge: {
            text: "3 Online",
            bg: "warning-transparent"
        },
        avatars: [
            face4,
            face8,
            face13
        ],
        extraMembers: "+15"
    },
    {
        id: 4,
        name: "4) DialogDynasty",
        onlineBadge: {
            text: "5 Online",
            bg: "danger-transparent"
        },
        avatars: [
            face1,
            face7,
            face14
        ],
        extraMembers: "+28"
    },
    {
        id: 5,
        name: "5) NexusChat Nexus",
        onlineBadge: {
            text: "0 Online",
            bg: "light text-dark"
        },
        avatars: [
            face5,
            face6,
            face12,
            face3
        ],
        extraMembers: "+53"
    }
];


export const chatGroups = [
    {
        id: 1,
        name: "ChatMingle Collective 😍",
        message: "Hira Typing...",
        imgUrl: face17,
        status: "online",
        time: "12:45PM",
        unread: 2,
        isActive: true,
        isTyping: true,
    },
    {
        id: 2,
        name: "ConnectHub Crew",
        message: "Rams: Happy to be part of this group",
        imgUrl: face18,
        status: "online",
        time: "1:16PM",
        unread: 0,
        isActive: false,
        isTyping: false,
    },
    {
        id: 3,
        name: "TalkTide Tribe 😎",
        message: "Simon,Melissa,Amanda,Patrick,Siddique",
        imgUrl: face19,
        status: "offline",
        time: "12:24PM",
        unread: 0,
        isActive: false,
        isTyping: false,
    },
    {
        id: 4,
        name: "DialogDynasty",
        message: "Kamalan,Subha,Ambrose,Kiara,Jackson",
        imgUrl: face20,
        status: "offline",
        time: "1:32PM",
        unread: 0,
        isActive: false,
        isTyping: false,
    },
    {
        id: 5,
        name: "NexusChat Nexus",
        message: "Subman,Rajen,Kairo,Dibasha,Alexa",
        imgUrl: face21,
        status: "offline",
        time: "12:45PM",
        unread: 0,
        isActive: false,
        isTyping: false,
    }
];


export const chatTabs = [
    {
        id: 1,
        name: "users-tab",
        tabId: "users-tab",
        isActive: true,
        link: "",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-messages">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </svg>
        ),
    },
    {
        id: 2,
        name: "groups-tab",
        tabId: "groups-tab",
        isActive: false,
        link: "",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-users">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
        ),
    },
    {
        id: 3,
        name: "call-tab",
        tabId: "call-tab",
        isActive: false,
        link: "",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
        ),
    },
    {
        id: 4,
        name: "status-tab",
        tabId: "status-tab",
        isActive: false,
        link: "",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-star">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            </svg>
        ),
    },
    {
        id: 5,
        name: "contacts-tab",
        tabId: "contacts-tab",
        isActive: false,
        link: "",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-address-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                <path d="M10 16h6" />
                <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 8h3" />
                <path d="M4 12h3" />
                <path d="M4 16h3" />
            </svg>
        ),
    },
    {
        id: 6,
        name: "robot-tab",
        tabId: "robot-tab",
        isActive: false,
        link: "",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-robot-face">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
                <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
                <path d="M9 7l-1 -4" />
                <path d="M15 7l1 -4" />
                <path d="M9 12v-1" />
                <path d="M15 12v-1" />
            </svg>
        ),
    },
    {
        id: 7,
        name: "profile-tab",
        tabId: "profile-tab",
        isActive: false,
        link: "",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-square">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                <path
                    d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
            </svg>
        ),
    },
    {
        id: 8,
        name: "documentation-tab",
        tabId: "documentation-tab",
        isActive: false,
        link: "",
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-files">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path
                    d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
            </svg>
        ),
    }
];

export const callLogs = [
    {
        id: 1,
        name: "Aarav Sharma",
        imgUrl: face1,
        statusClass: "online",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "Today, 12:47PM",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 2,
        name: "Priya Gupta",
        imgUrl: face2,
        statusClass: "online",
        callTypeIcon: "ti ti-arrow-up-right",
        callStatusClass: "outgoing-call-failed",
        timestamp: "Today, 10:27AM",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 3,
        name: "Vikram Malhotra",
        imgUrl: face3,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-up-right",
        callStatusClass: "outgoing-call-success",
        timestamp: "Yesterday, 12:45PM",
        buttonIcon: "ti ti-video",
        buttonClr: "secondary-light"
    },
    {
        id: 4,
        name: "Neha Kapoor",
        imgUrl: face4,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "3 Days ago",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 5,
        name: "Rahul Desai",
        imgUrl: face5,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "2 Days ago",
        buttonIcon: "ti ti-video",
        buttonClr: "secondary-light"
    },
    {
        id: 6,
        name: "Priyanka Singh",
        imgUrl: face6,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-up-right",
        callStatusClass: "outgoing-call-failed",
        timestamp: "24, Oct 2023",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 7,
        name: "Deepika Mehta",
        imgUrl: face7,
        statusClass: "online",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "22, Oct 2023",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 8,
        name: "Rohan Khanna",
        imgUrl: face8,
        statusClass: "online",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "13, Oct 2023",
        buttonIcon: "ti ti-video",
        buttonClr: "secondary-light"
    },
    {
        id: 9,
        name: "Sameer Choudhary",
        imgUrl: face9,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-up-right",
        callStatusClass: "outgoing-call-failed",
        timestamp: "13, Sep 2023",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 10,
        name: "Kavya Iyer",
        imgUrl: face10,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-up-right",
        callStatusClass: "outgoing-call-success",
        timestamp: "10, July 2023",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    },
    {
        id: 11,
        name: "Neeraj Tiwari",
        imgUrl: face11,
        statusClass: "offline",
        callTypeIcon: "ti ti-arrow-down-left",
        callStatusClass: "incoming-call-success",
        timestamp: "1, Apr 2023",
        buttonIcon: "ti ti-phone",
        buttonClr: "primary-light"
    }
];

export const statusData = [
    {
        title: "Your Status",
        status: [
            {
                id: 1,
                name: "You",
                avatar: face9,
                time: "Today, 09:03",
                views: 12,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "ri-eye-line lh-1 me-1"
                }
            },
            {
                id: 2,
                name: "You",
                avatar: face9,
                time: "Today, 08:36",
                views: 35,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "ri-eye-line lh-1 me-1"
                }
            }
        ]
    },
    {
        title: "New Status",
        status: [
            {
                id: 3,
                name: "Advitha",
                avatar: face2,
                time: "Today, 13:45",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            },
            {
                id: 4,
                name: "Revanth",
                avatar: face13,
                time: "Today, 12:15",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            },
            {
                id: 5,
                name: "Samista Roy",
                avatar: face5,
                time: "Today, 09:32",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            },
            {
                id: 6,
                name: "Govardhan",
                avatar: face12,
                time: "Yesterday, 15:45",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            },
            {
                id: 7,
                name: "Lavanya",
                avatar: face6,
                time: "Yesterday, 14:11",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            },
            {
                id: 8,
                name: "Sunil",
                avatar: face11,
                time: "Yesterday, 04:12",
                views: 0,
                classes: {
                    avatar: "avatar avatar-md avatar-rounded p-1 border border-secondary border-dashed",
                    timeIcon: "ri-time-line lh-1 me-1",
                    viewIcon: "",
                }
            }
        ]
    }
];

export const contacts = [
    {
        group: "A",
        contacts: [
            {
                name: "Ava Taylor",
                avatar: {
                    type: "image",
                    src: face5
                },
            }
        ]
    },
    {
        group: "B",
        contacts: [
            {
                name: "Benjamin Turner",
                avatar: {
                    type: "image",
                    src: face12
                },
            }
        ]
    },
    {
        group: "C",
        contacts: [
            {
                name: "Caleb Rodriguez",
                avatar: {
                    type: "image",
                    src: face14
                },
            }
        ]
    },
    {
        group: "D",
        contacts: [
            {
                name: "Daniel Sullivan",
                avatar: {
                    type: "initials",
                    src: face1
                },
            }
        ]
    },
    {
        group: "E",
        contacts: [
            {
                name: "Emma Johnson",
                avatar: {
                    type: "image",
                    src: face7
                },
            }
        ]
    },
    {
        group: "J",
        contacts: [
            {
                name: "Jackson Rivera",
                avatar: {
                    type: "image",
                    src: face15
                },
            }
        ]
    },
    {
        group: "L",
        contacts: [
            {
                name: "Leo Phillips",
                avatar: {
                    type: "initials",
                    src: face14
                },
            },
            {
                name: "Lily Brown",
                avatar: {
                    type: "image",
                    src: face2
                },
            }
        ]
    },
    {
        group: "N",
        contacts: [
            {
                name: "Noah Russell",
                avatar: {
                    type: "image",
                    src: face10
                },
            }
        ]
    },
    {
        group: "W",
        contacts: [
            {
                name: "Wyatt Thompson",
                avatar: {
                    type: "image",
                    src: face16
                },
            }
        ]
    }
];

export const digitalChatbotChatQuestions = [
    {
        question: "What are the best chat applications team?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "How do you prioritize privacy in your chats?",
        icon: "ti ti-brand-hipchat",
        active: true
    },
    {
        question: "What are the trends in chat app security?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "Can I integrate chat functionality?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "How do cross-platform chat apps work?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "What are the benefits of using rich media?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "Are there chat app that support video calls?",
        icon: "ti ti-brand-hipchat",
        active: false
    },
    {
        question: "Do any chat apps support video calls?",
        icon: "ti ti-brand-hipchat",
        active: false
    }
];

export const documents = [
    {
        name: "VID-00292312-SPK823.mp4",
        size: "1.35MB",
        icon: "ti ti-video",
        iconBg: "primary-transparent",
        type: "video"
    },
    {
        name: "AUD-1002-2012.mp3",
        size: "422KB",
        icon: "ti ti-headphones",
        iconBg: "secondary-transparent",
        type: "audio"
    },
    {
        name: "Document-02.pdf",
        size: "12.75KB",
        icon: "ti ti-file-text",
        iconBg: "danger-transparent",
        type: "document"
    },
    {
        name: "IMG-09123878-SPK734.jpeg",
        size: "1.35MB",
        icon: "ti ti-photo",
        iconBg: "warning-transparent",
        type: "image"
    },
    {
        name: "VID-5076-SRK54.mp4",
        size: "422KB",
        icon: "ti ti-video",
        iconBg: "info-transparent",
        type: "video"
    },
    {
        name: "MainDoc13.doc",
        size: "16.75MB",
        icon: "ti ti-folders",
        iconBg: "orange-transparent",
        type: "document"
    },
    {
        name: "AUD45578-MAIN12.mp3",
        size: "422KB",
        icon: "ti ti-headphones",
        iconBg: "teal-transparent",
        type: "audio"
    }
];

