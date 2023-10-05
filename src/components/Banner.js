import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-image.png";
import Nav from "react-bootstrap/Nav";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Software Developer",
    "Full Stack Developer",
  ];
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
    <section className="banner" id="about">
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} style={{ paddingLeft: "40px" }}>
          <h1>
            {`Hi I'm Hamid a`}{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='["Web Developer","Software Developer", "Full Stack Developer",]'
            ></span>{" "}
            <span className="wrap">{text}</span>
          </h1>
          <p style={{ textAlign: "justify" }}>
            A software engineer with expertise in C# and CAD, transitioned from
            BIM & Digital Design to software development in 2021. I have
            recently graduated from Integrify's coding bootcamp and I'm looking
            for opportunities in software development. I was selected amongst
            hundreds of applicants and successfully completed the whole academy
            with good grades. Now I'm looking for a full-time position through
            Integrify, find more information on my application.
          </p>
          <Nav.Link href="#contact">
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Nav.Link>
        </Col>
        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header-img" style={{ width: "60%" }} />
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
