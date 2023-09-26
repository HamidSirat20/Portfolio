import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import languages from "../assets/img/languages.png";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a passionate Web Developer, I have the following skill set to
                the table, honed through my academic journey and hands-on
                experience. Let's explore what I can offer:
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item" style={{ textAlign: "left" }}>
                  <h5>FRONTEND</h5>
                  <ul>
                    <li>JavaScript (Material-UI, React, Redux)</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                <div className="item" style={{ textAlign: "left" }}>
                  <h5>BACKEND</h5>
                  <ul>
                    <li>C#</li>
                    <li>Devops</li>
                    <li>Azure Cloud</li>
                    <li>PostgreSql</li>
                  </ul>
                </div>
                <div className="item" style={{ textAlign: "left" }}>
                  <h5>Civil Engineering</h5>
                  <ul>
                    <li>Building Information Modelling (BIM)</li>
                    <li>Lean Construction</li>
                    <li>Autodesk Revit</li>
                    <li>AutoCAD</li>
                  </ul>
                </div>
                <div className="item" style={{ textAlign: "left" }}>
                  <h5>languages</h5>
                  <ul>
                    <li>Dari/Persian (Native)</li>
                    <li>English (Fluent)</li>
                    <li>Turkish (Intermediate)</li>
                    <li>Finnish (Novice)</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
