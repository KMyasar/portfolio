import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificationCards";
import Particle from "../Particle";
import SecureDevelopment from "../../Assets/certifications/DevelopingSecureSoftware.png";
import lahtp from "../../Assets/certifications/lahtp.png";
import PythonForDS from "../../Assets/certifications/PythonForDS.png";
import JSEssential from "../../Assets/certifications/JSEssentials.png";
import Linuxcert from "../../Assets/certifications/LinuxCert.png";
import MERNStack from "../../Assets/certifications/MERN_Stack.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certifications I've gained recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lahtp}
              isBlog={false}
              title="Learn the Art of Hacking Through Programming"
              description="A hands-on cybersecurity course focused on learning ethical hacking through programming fundamentals. The course covers topics such as vulnerability discovery, exploit development, input sanitization, and secure coding practices using PHP, MySQL, and JavaScript. It emphasizes building and analyzing real-world vulnerable applications."
              postVerify={{
                url: "https://selfmade.ninja/verify-cert",
                payload: { "cert-name": "8ikt2ic9kf" }
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SecureDevelopment}
              isBlog={false}
              title="Developing Secure Software"
              description="Covers the principles of secure software development across the software development lifecycle (SDLC). Topics include threat modeling, secure design patterns, input validation, cryptography basics, and mitigation of common vulnerabilities such as injection, XSS, and CSRF using real-world development tools and techniques."
              verify="https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/2d70c302-dfc4-4c8a-8e24-f589b7f9eecc-mohamed-yasar-arafath-k-m-d860b15e-9ed3-4ab7-a7e5-c05798b567e0-certificate.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PythonForDS}
              isBlog={false}
              title="Python for Data Science"
              description="An introductory certification that teaches Python programming fundamentals tailored for data science tasks. It covers data types, control structures, functions, and libraries like NumPy and pandas for data manipulation, along with basic data visualization using matplotlib. The course builds a foundation for performing data analysis and working with structured datasets."
              verify="https://courses.edx.org/certificates/96ec92f9335548ddad5780db277f65cb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JSEssential}
              isBlog={false}
              title="JavaScript Essentials"
              description="Covers the core concepts of JavaScript including variables, functions, objects, arrays, DOM manipulation, and asynchronous programming with promises. It also introduces ES6 features and forms the foundation for frontend frameworks and modern web application development."
              verify="https://verify.letsupgrade.in/certificate/LUJS0720A1557"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Linuxcert}
              isBlog={false}
              title="Introduction to Linux"
              description="An introductory course on the Linux operating system, covering command-line usage, file system navigation, user and permission management, basic shell scripting, networking tools, and package management. Ideal for beginners and aspiring system administrators or DevOps engineers."
              verify="https://courses.edx.org/certificates/94b564e464d2411bacaa5b6ec121d927"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MERNStack}
              isBlog={false}
              title="MERN Stack Development"
              description="A practical full-stack web development certification focusing on building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Topics include CRUD operations, RESTful APIs, frontend/backend integration, and deploying applications with modern JavaScript tooling."
              verify="https://drive.google.com/file/d/1NBmjbLed2AHFJquZFviyQvody58yrUiq/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
