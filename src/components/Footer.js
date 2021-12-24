import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://github.com/Kalyan9493">
            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Github
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.linkedin.com/in/kalyankumarreddy-kavalakuntla-6554a3164/">
                <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  LinkedIn
                </span>
              </i></FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.instagram.com/kalyankumar279/">
            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.facebook.com/kalyankumarreddy098/">
            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;