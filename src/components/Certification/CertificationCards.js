import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiExternalLink } from "react-icons/hi";

function ProjectCards(props) {
  const handleVerifyClick = () => {
    if (props.postVerify) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = props.postVerify.url;
      form.target = "_blank"; // Open in new tab

      for (const key in props.postVerify.payload) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = props.postVerify.payload[key];
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    } else {
      window.open(props.verify, "_blank");
    }
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={handleVerifyClick}>
          <HiExternalLink /> &nbsp;
          {props.isBlog ? "Blog" : "Verify"}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
