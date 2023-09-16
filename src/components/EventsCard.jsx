import { Col } from "react-bootstrap";

function EventsCard ({ title, description, imgUrl}) {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="event-imgbx">
                <img src={imgUrl} alt="" />
                <div className="event-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
}

export default EventsCard;