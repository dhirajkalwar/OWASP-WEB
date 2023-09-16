import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Ctfhome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["OWASP TCET"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner">
      <Container>
          <h1 className=" mt-0">CTF-2023</h1>
        <Row className="align-items-center  rounded">
          {/* <Col xs={12} md={6} xl={7}> */}
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Presented By`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      // data-rotate='[ "To Owasp TCET"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                      Capture The Flag Challenge: Participants will engage in an exciting CTF competition that simulates real-world cybersecurity scenarios. The challenges are designed to test participants' knowledge and problem-solving skills in various areas of cybersecurity, including web application security, cryptography, forensics, and more.
                  </p>
                </div>
              )}
            </TrackVisibility>
        </Row>
      </Container>
    </section>
  );
}
export default Ctfhome;
