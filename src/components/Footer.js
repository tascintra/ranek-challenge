import React from "react";
import styled from "styled-components";

const Text = styled.p`
  color: #adacad;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
`;

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <Text>Ranek. Alguns direitos reservados.</Text>
    </footer>
  );
};

export default Footer;
