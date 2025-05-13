import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohamed Yasar Arafath K M </span>
            from <span className="purple"> Chennai, India.</span>
            <br/>
            I'm a passionate and curious Programmer, always eager to learn and explore new technologies.
            <br/>
            I have completed Master's in <span className="purple">Computer Application</span> at Measi Insitute of Information Technology(MIIT).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Online Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Physical Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A developer by choice, a problem-solver by nature."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Yasar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
