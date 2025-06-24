import React from "react";
import { ReactComponent as N8NIcon } from '../../Assets/n8n.svg';
import { Col, Row } from "react-bootstrap";
import { TbBrandPowershell } from "react-icons/tb";
import {
  DiJavascript1,
  DiMongodb,
  DiPython,
  DiGit,
  DiBootstrap,
  DiJava,
} from "react-icons/di";

import {
  SiC,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiApache,
  SiDocker,
  SiGnubash,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhpmyadmin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <N8NIcon style={{ width: "50px", height: "50px" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>

    </Row>
  );
}

export default Techstack;
