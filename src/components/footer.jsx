import React from "react";
import { Container } from "react-bootstrap";

// Importing images for footer
import INSTAGRAM from "../assets/images/instagram_icon.png";
import GITHUB from "../assets/images/github_icon.png";

const Footer = () => {
  return (
    <Container fluid className="text-center footer">
      <div className="pt-5 pb-3">
        <a
          href="https://www.instagram.com/laurier.cs/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={INSTAGRAM} alt="Instagram" />
        </a>
        <a
          href="https://github.com/LaurierCS"
          target="_blank"
          rel="noopener noreferrer">
          <img src={GITHUB} alt="LinkedIn" />
        </a>
        <hr id="underline" className="mt-3 mb-2" />
        <p>© 2022 - LCS</p>
      </div>
    </Container>
  );
};
export default Footer;
