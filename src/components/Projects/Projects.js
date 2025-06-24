import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import packet from "../../Assets/Projects/packet_capture.png";
import bookshop from "../../Assets/Projects/bookshop.png"
import url_shortener from "../../Assets/Projects/url_shortener.png";
import Student_manage from "../../Assets/Projects/Student_manage.png";
import proxy_redirector from "../../Assets/Projects/Proxy_Redirector.png";
import log_monitor from "../../Assets/Projects/log_monitor.png";
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
              imgPath={proxy_redirector}
              isBlog={false}
              title="Proxy Redirector"
              description="A Python-based HTTP proxy built with mitmproxy to intercept, modify, and redirect web traffic in real-time. Features include domain blocking, content rewriting, and header injection—ideal for learning HTTP internals and traffic analysis."
              ghLink="https://github.com/KMyasar/proxy-redirector"
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
              imgPath={bookshop}
              isBlog={false}
              title="Bookshop"
              description="A Demo application is built with PHP, allows management of the online bookshop. The users can search and purchase books on the site, edit their shopping cart and make an order. There is a screen which contains user accounts where customers are able to register and login. The backend of the system is implemented using PHP, MySQL, while the front end is built using HTML, CSS, Javascript, jQuery and bootstrap templates."
              ghLink="https://github.com/Kmyasar/bookshop"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={log_monitor}
              isBlog={false}
              title="Linux Log Monitor"
              description="A lightweight shell script that monitors .log files in the /var/log directory and alerts if any file exceeds a configurable size threshold. It’s designed for system administrators or developers to track uncontrolled log growth and potential disk space issues. Features include colored CLI output, optional email alerts, and compatibility with both Linux and macOS environments."
              ghLink="https://github.com/KMyasar/log_monitor"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
