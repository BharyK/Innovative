
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import Seo from "../../../shared/layouts-components/seo/seo";
import Pageheader from "../../../shared/layouts-components/pageheader/pageheader";
import SpkButton from "../../../shared/@spk-reusable-components/reusable-uielements/spk-button";
import face2 from '../../../assets/images/faces/2.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face6 from '../../../assets/images/faces/6.jpg';
import face8 from '../../../assets/images/faces/8.jpg';
import face9 from '../../../assets/images/faces/9.jpg';
import face12 from '../../../assets/images/faces/12.jpg';
import face15 from '../../../assets/images/faces/15.jpg';


const FullCalendars = () => {
  let eventGuid = 0;
  const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "Calendar Events",
        id: "1",
        bg: "primary",
        icon: "calendar-line",
      },
      {
        title: "Birthday Events",
        id: "2",
        bg: "secondary",
        icon: "cake-2-line",
      },
      {
        title: "Holiday Calendar",
        id: "3",
        bg: "danger",
        icon: "gift-line",
      },
      {
        title: "Office Events",
        id: "4",
        bg: "info",
        icon: "building-line",
        border: "border-info-transparent"
      },
      {
        title: "Other Events",
        id: "5",
        bg: "warning",
        icon: "timeline-view",
      },
      {
        title: "Festival Events",
        id: "6",
        bg: "pink",
        icon: "tent-line",
      },
      {
        title: "Timeline Events",
        id: "7",
        bg: "teal",
        icon: "timeline-view",
      },
    ],
  };
  const [state] = useState(initialstate1);
  const externalEventsRef = useRef(null); // Creating a reference for the external events container
  useEffect(() => {
    if (externalEventsRef.current) {
      new Draggable(externalEventsRef.current, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          const title = eventEl.getAttribute("title");
          const id = eventEl.getAttribute("data");
          const classValue = eventEl.getAttribute("class");
          return {
            title: title,
            id: id,
            className: classValue,
          };
        },
      });
    }
  }, [externalEventsRef]); // 

  function renderEventContent(eventInfo: EventContentArg) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = () => { };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <Fragment>
      {/* <!-- Page Header --> */}
      <Seo title={"Full Calendar"} />
      <Pageheader title="Apps" currentpage="Full Calendar" activepage="Full Calendar" />
      {/* <!-- Page Header Close --> */}

      {/* <!-- Start::row-1 --> */}
      <Row>
        <Col xl={12}>
          <Card className="custom-card calendar-card">
            <Card.Body>
              <div className="d-flex gap-2 justify-content-between flex-wrap align-items-center">
                <div>
                  <h5>Monthly Overview</h5>
                  <p className="mb-0">Check your reminders and appointments for this month. You can view all upcoming
                    events and create new ones directly from this dashboard.</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={4} className="">
          <Card className="custom-card">
            <Card.Header className="justify-content-between pb-0">
              <Card.Title className="">All Events</Card.Title>
              <SpkButton Buttonvariant="secondary" Size="sm" Customclass="btn b btn-wave"><i
                className="ri-add-line align-middle me-1 fw-medium d-inline-block"></i>Add Event</SpkButton>
            </Card.Header>
            <Card.Body className="p-0">
              <div id="external-events" className="p-3" ref={externalEventsRef}>
                {state.events.map((event) => (
                  <div
                    className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event bg-${event.bg}-transparent border ${event.border}`}
                    title={event.title} key={event.id}>
                    <div className={`fc-event-main text-${event.bg} fs-13`}>
                      <span className="ms-1 me-2 d-inline-block fs-16"><i
                        className={`ri-${event.icon}`}></i></span>{event.title}</div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="p-0">
              <div className="p-3">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-medium">
                    Activity :
                  </h6>
                  <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn btn-wave">View All</SpkButton>
                </div>
              </div>
              <SimpleBar className="p-3 border-bottom" id="full-calendar-activity">
                <ul className="list-unstyled mb-0 fullcalendar-events-activity pe-2">
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                      <p className="mb-1 fw-medium">Reviewed the final draft of the proposal</p><span
                        className="badge bg-primary ms-auto">Sep 10, 2024</span>
                    </div>
                    <div className="text-muted fs-12">
                      <div className="avatar-list-stacked"> <span className="avatar avatar-xs avatar-rounded"> <img
                        src={face15} alt="img" /> </span> <span
                          className="avatar avatar-xs avatar-rounded"> <img src={face8} alt="img" />
                        </span> <span className="avatar avatar-xs avatar-rounded bg-info"> P </span> </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                      <p className="mb-1 fw-medium">Completed user testing for the new feature</p><span
                        className="badge bg-info ms-auto">Sep 08, 2024</span>
                    </div>
                    <div className="text-muted fs-12">
                      <div className="avatar-list-stacked"> <span className="avatar avatar-xs avatar-rounded"> <img
                        src={face2} alt="img" /> </span> <span
                          className="avatar avatar-xs avatar-rounded"> <img src={face8} alt="img" />
                        </span> <span className="avatar avatar-xs avatar-rounded"> <img src={face2}
                          alt="img" /> </span> </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                      <p className="mb-1 fw-medium">Updated the project timeline and shared with the team</p><span
                        className="badge bg-secondary ms-auto">Sep 05, 2024</span>
                    </div>
                    <div className="text-muted fs-12">
                      <div className="avatar-list-stacked"> <span className="avatar avatar-xs avatar-rounded"> <img
                        src={face12} alt="img" /> </span> <span
                          className="avatar avatar-xs avatar-rounded bg-primary"> A </span> </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                      <p className="mb-1 fw-medium">Reviewed the project progress and communicated the updates to the stakeholders</p><span
                        className="badge bg-danger ms-auto">Nov 10, 2024</span>
                    </div>
                    <div className="text-muted fs-12">
                      <div className="avatar-list-stacked"> <span className="avatar avatar-xs avatar-rounded"> <img
                        src={face2} alt="img" /> </span> <span className="avatar avatar-xs avatar-rounded"> <img
                          src={face6} alt="img" /> </span><span className="avatar avatar-xs avatar-rounded"> <img
                            src={face8} alt="img" /> </span><span className="avatar avatar-xs avatar-rounded"> <img
                              src={face9} alt="img" /> </span></div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between flex-wrap flex-xxl-nowrap gap-1">
                      <p className="mb-1 fw-medium">Resolved client queries and provided detailed responses via email</p><span
                        className="badge bg-warning ms-auto">Sep 05, 2024</span>
                    </div>
                    <div className="text-muted fs-12">
                      <div className="avatar-list-stacked"> <span className="avatar avatar-xs avatar-rounded"> <img
                        src={face8} alt="img" /> </span><span className="avatar avatar-xs avatar-rounded"> <img
                          src={face3} alt="img" /> </span> <span
                            className="avatar avatar-xs avatar-rounded bg-primary"> N </span> </div>
                    </div>
                  </li>
                </ul>
              </SimpleBar>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={9} xl={8}>
          <Card className="custom-card">
            <Card.Header>
              <Card.Title>Full Calendar</Card.Title>
            </Card.Header>
            <Card.Body>
              <div id='calendar2'>
                <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                  headerToolbar={{ left: "prev,next today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek" }}
                  initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true} dayMaxEvents={true}
                  initialEvents={INITIAL_EVENTS} select={handleDateSelect} eventContent={renderEventContent} eventClick={handleEventClick}
                  eventsSet={handleEvents}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!--End::row-1 --> */}
    </Fragment>
  );
};

export default FullCalendars;