import { useRef } from "react";
import "../App";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ovo088i",
        "template_1inl9ca",
        form.current,
        "sU7p25XC21Tt2rvcz"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}></Col>
          <Col size={12} md={6}>
            <h3>Contact Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <label>FullName</label>
              <input type="text" name="user_name" placeholder="FullName" />
              <label>Email</label>
              <input type="email" name="user_email" placeholder="Email" />
              <label>Message</label>
              <textarea name="message" rows={5} placeholder="Message..." />
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
