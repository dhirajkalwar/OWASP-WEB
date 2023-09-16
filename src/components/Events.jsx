import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import EventsCard from "./EventsCard";
import eventImg1 from "../assets/img/event-img1.jpg";
import "animate.css";
import TrackVisiblity from "react-on-screen";
import Calendar from "./Calendar";

function Events () {
    const events = [
        {
            title: "Capture The Flag",
            description: "Cyber Security Event",
            imgUrl: eventImg1,
        },
        {
            title: "Capture The Flag",
            description: "Cyber Security Event",
            imgUrl: eventImg1,
        },{
            title: "Capture The Flag",
            description: "Cyber Security Event",
            imgUrl: eventImg1,
        },
    ];

    return (
        <section className="event" id="events">
            <Container>
                <Row>
                    <Col size={12}>
                     <TrackVisiblity>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                             <h2>Events</h2>
                             <p>
                             Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book.
                             </p>
                            <Tab.Container id="events-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link id="upcom-event" eventKey="first">
                                            Upcoming Event
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link id="past-event" eventKey="second">
                                            Past Event
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : "" }>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            <Calendar />
                                        </Row>
                                        <Row>
                                            {events.map((events, index) => {
                                                return <EventsCard key={index} {...events} />;
                                            })}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                            <p>Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a
                                            type specimen book.
                                            </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                            </div>
                        )}
                     </TrackVisiblity>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Events;