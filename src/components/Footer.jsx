// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footerStyle text-black py-4">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>Follow Me</h5>
            <div className="d-flex justify-content-center">
              <a
                href="https://github.com/Kenhie94"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black mx-2"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kenjyjap/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black mx-2"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>kenjyjap@gmail.com</p>
          </Col>
          <Col md={4}>
            <h5>&copy; {new Date().getFullYear()} Kenjy Jap</h5>
            <p>All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;