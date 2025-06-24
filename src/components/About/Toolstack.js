import React from "react";
import { Col, Row } from "react-bootstrap";
import{ DiGnu } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiLinux,
  SiWireshark,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGnu/>
            </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
      </Row>
  );
}

export default Toolstack;
