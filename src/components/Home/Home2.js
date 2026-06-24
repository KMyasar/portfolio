import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">QA Engineer</b> and{" "}
              <b className="purple">Automation Developer</b> with a cybersecurity 
              mindset currently ensuring the reliability of mission critical 
              ATM software at a leading vendor.
              <br />
              <br />
              My journey started with curiosity and a keyboard. I taught myself 
              programming, diving into <i><b className="purple">C</b></i>,{" "}
              <i><b className="purple">PHP</b></i>, and{" "}
              <i><b className="purple">Python</b></i>, building a strong 
              foundation in <b className="purple">full stack development</b>,{" "}
              <b className="purple">system analysis</b>, and{" "}
              <b className="purple">automation scripting</b>.
              <br />
              <br />
              Over time, my passion expanded into{" "}
              <b className="purple">cybersecurity</b>. From understanding how 
              systems break to learning how to secure them, I bring a 
              developer's mindset to quality assurance writing scripts 
              that prevent bugs and secure applications before they hit production.
              <br />
              <br />
              Whether I'm architecting scalable solutions or breaking things 
              to understand them better, I bring a problem solving mindset, 
              professional development habits, and a passion for secure, 
              reliable engineering.
              <br />
              <br />
              <i>
                <b className="purple">
                  Code with purpose. Test with precision. Build for impact.
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KMyasar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Mhdyasarpers"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mhdyasar21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mohamedyasar_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;