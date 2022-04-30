import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgGoogle } from "react-icons/cg";
import {   IoIosColorFilter } from "react-icons/io"

import {

  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobecreativecloud,
  SiAdobephotoshop,
  SiGoogleads,
  // standing in place for DaVinci Resolve
  SiAudacity,
  SiObsstudio,
  SiMicrosoft
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobecreativecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiObsstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoIosColorFilter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleads />
      </Col>
    </Row>
  );
}

export default Techstack;
