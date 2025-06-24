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
              A tech enthusiast, self-learner, and aspiring <b className="purple">software engineer</b> with a passion for turning ideas into real-world solutions.
              <br />
              <br />My journey into tech started not in a classroom, but with curiosity and a keyboard. I began teaching myself programming at 20 — diving into <i>
                <b className="purple"> C</b>
              </i>, then exploring<i>
                <b className="purple"> PHP </b>
              </i> and<i>
                <b className="purple"> Python</b>
              </i>, gradually building my skills in <b className="purple">full-stack development</b>, <b className="purple">system-level programming</b>, and <b className="purple">automation</b>.

              <br />
              <br />
              Over time, my interest expanded into cybersecurity. From understanding how systems break to learning how to secure them, I’ve developed a strong foundation in security concepts.
              <br />
              <br />
              Whether I’m building production-ready applications or breaking things to understand them better, I bring a problem-solving mindset, professional development habits, and a passion for secure, reliable engineering.
              <br />
              <br />
              <i>
                <b className="purple">Code with purpose. Learn with passion. Build for impact
                </b></i>
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
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Mhdyasarpers"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mhdyasar21/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
