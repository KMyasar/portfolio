import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import packet from "../../Assets/Projects/packet_capture.png";
import bookshop from "../../Assets/Projects/bookshop.png"
import url_shortener from "../../Assets/Projects/url_shortener.png";
import Student_manage from "../../Assets/Projects/Student_manage.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshop}
              isBlog={false}
              title="Bookshop"
              description="A Demo application is built with PHP, allows management of the online bookshop. The users can search and purchase books on the site, edit their shopping cart and make an order. There is a screen which contains user accounts where customers are able to register and login. The backend of the system is implemented using PHP, MySQL, while the front end is built using HTML, CSS, Javascript, jQuery and bootstrap templates."
              ghLink="https://github.com/Kmyasar/bookshop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Student_manage}
              isBlog={false}
              title="Student Management System"
              description="A Student Information Management System, a web application designed to add, manage, and list student details efficiently. The project is built with modern web development technologies to provide a user-friendly interface and reliable functionality."
              ghLink="https://github.com/KMyasar/student-info"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={url_shortener}
              isBlog={false}
              title="URL Shortener"
              description="This is a basic URL shortener application built using Flask and SQLite. It allows users to shorten long URLs into shorter, more manageable links."
              ghLink="https://github.com/KMyasar/url_shortener"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={packet}
              isBlog={false}
              title="Packet Sniffer"
              description="This is a basic packet sniffer program written in C that uses the libpcap library to capture and display basic information about network packets on a specified interface."
              ghLink="https://github.com/KMyasar/packet-sniffer"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
