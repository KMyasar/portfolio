import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Mohamed Yasar Arafath K M</span>  
            a curious mind from <span className="purple">Chennai</span> who 
            discovered programming not in a classroom, but through late night 
            curiosity and a keyboard that never let me sleep.
            <br />
            <br />
            What started as tinkering with <span className="purple">C</span> and 
            <span className="purple"> PHP</span> evolved into a full fledged career 
            in <span className="purple">software quality</span> and 
            <span className="purple"> automation</span>. Today, I find joy in 
            writing scripts that catch bugs before they reach production, and 
            analyzing systems for vulnerabilities that others might miss.
            <br />
            <br />
            I believe the best engineers are those who understand both sides of 
            the coin how to build <span className="purple">and</span> how to break. 
            That's why I'm equally comfortable writing automation frameworks and 
            thinking like an attacker to secure applications.
            <br />
            <br />
            When I'm not in front of a screen, you'll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competing in online multiplayer games
            </li>
            <li className="about-activity">
              <ImPointRight /> Pushing limits at the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Getting lost in movies and tech documentaries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiosity didn't kill the cat — it made her a better engineer."
          </p>
          <footer className="blockquote-footer">Mohamed Yasar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;