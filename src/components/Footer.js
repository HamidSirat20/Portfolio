import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" style={{ paddingTop: "1.2rem" }}>
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "2rem", height: "2rem", borderRadius: "50%" }}
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdul-hamid-eshaqzada-b67a5bb9/"
                target="_blank"
              >
                <img src={navIcon1} alt="link"></img>
              </a>
              <a href="https://github.com/HamidSirat20" target="_blank">
                <img src={navIcon2} alt="link"></img>
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
