import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Noah Guerrero </span>
            from <span className="purple"> Cedar Park, Texas.</span>
            <br />I'm a Senior Account Coordinator and Marketing Coordinator and graduated with a BBA in Marketing.
            <br />
            <br />
            Apart from my work, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Investing in the stock market
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Paddle Boardng
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hard work is worthless for those that don't believe in themselves."{" "}
          </p>
          <footer className="blockquote-footer">Naruto Uzumaki</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
