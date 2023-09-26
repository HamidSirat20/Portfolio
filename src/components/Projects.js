import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce-App",
      description:
        "E-commerce App fetch data from a REST API and display them in the browser. The website showcased functionalities such as product display, product searching, sorting, adding/removing items from the cart, and adjusting the quantity of products in the cart.",
      imgUrl: projImg1,
    },
    {
      title: "Vanilla html/scss Responsive Design",
      description:
        "is a static webpage created solely with HTML, CSS/Sass. The static, responsive web page features various usage of HTML, CSS, and Sass.",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  // State to keep track of the active project index
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const handleImageClick = (index) => {
    // Define the project details
    const projectToOpen = projects[index];

    // Check if the clicked project matches the one you want to open
    if (
      projectToOpen.title === "Ecommerce-App" &&
      projectToOpen.description ===
        "E-commerce App fetch data from a REST API and display them in the browser. The website showcased functionalities such as product display, product searching, sorting, adding/removing items from the cart, and adjusting the quantity of products in the cart."
    ) {
      // Open the specific URL for this project
      window.open(
        "https://64fa00b0ed36582551fcf0de--jovial-buttercream-c944ba.netlify.app/"
      );
    }

    // Set the active project index when an image is clicked
    setActiveProjectIndex(index);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p style={{ textAlign: "justify" }}>
              This multifaceted web development project comprises three key
              components: a series of simple yet elegant HTML/CSS responsive
              designs for versatile user interfaces, a dynamic React TypeScript
              frontend for an engaging and interactive ecommerce experience, and
              a robust full-stack ecommerce web application.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                {/* ... */}
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <Col key={index} xs={12} md={4}>
                          <img
                            src={project.imgUrl}
                            alt={project.title}
                            onClick={() => handleImageClick(index)}
                            style={{ cursor: "pointer" }}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

export default Projects;
