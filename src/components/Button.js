import React from "react";
import styled from "styled-components";

const DefaultBtn = styled.button`
  background: #eee;
  width: 112px;
  height: 40px;
  font-family: sans-serif;
  font-size: 1.3rem;
  border-radius: 4px;
  &:hover,
  &:focus {
    background: #d8d8d8;
    outline: none;
  }
`;

const Button = React.forwardRef(({ label }, ref) => (
  <DefaultBtn ref={ref}>{label}</DefaultBtn>
));

export default Button;
