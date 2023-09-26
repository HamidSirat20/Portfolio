import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import integrify from "../assets/img/integrify.png";
import itu from "../assets/img/itu.jpg";
import boun from "../assets/img/boun.png";

const Projects = () => {
  const projects = [
    {
      title: "Integrify Academy",
      description: "Full Stack Development",
      location: "Helsinki,Finland",
      date: 2023,
      imgUrl: integrify,
    },
    {
      title: "Istanbul Technical University",
      description: "Project and Construction Management",
      location: "Istanbul,Turkiye",
      date: 2021,
      imgUrl: itu,
    },
    {
      title: "Boğaziçi University",
      description: "Civil Engineering",
      location: "Istanbul,Turkiye",
      date: 2017,
      imgUrl: boun,
    },
  ];

  // State to keep track of the active project index
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const handleImageClick = (index) => {
    // Define the project details
    const projectToOpen = projects[index];

    // Check if the clicked project matches the one you want to open
    if (
      projectToOpen.title === "Integrify Academy" &&
      projectToOpen.description === "Full Stack Development"
    ) {
      // Open the specific URL for this project
      window.open("https://www.integrify.io/");
    }
    if (
      projectToOpen.title === "Istanbul Technical University" &&
      projectToOpen.description === "Project and Construction Management"
    ) {
      // Open the specific URL for this project
      window.open("https://pyy.itu.edu.tr/en/homepage");
    }
    if (
      projectToOpen.title === "Boğaziçi University" &&
      projectToOpen.description === "Civil Engineering"
    ) {
      // Open the specific URL for this project
      window.open("http://www.ce.boun.edu.tr/");
    }

    // Set the active project index when an image is clicked
    setActiveProjectIndex(index);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Educations</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
                          <h4
                            style={{
                              textAlign: "center",
                              paddingBottom: "2rem",
                            }}
                          >
                            {project.title}
                          </h4>
                          <img
                            src={project.imgUrl}
                            alt={project.title}
                            onClick={() => handleImageClick(index)}
                            style={{
                              cursor: "pointer",
                              width: "100%",
                              height: "auto",
                            }}
                          />
                          <div
                            style={{
                              textAlign: "center",
                              paddingTop: "2rem",
                            }}
                          >
                            <div>{project.description}</div>
                            <div>{project.location}</div>
                            <div>{project.date}</div>
                          </div>
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
