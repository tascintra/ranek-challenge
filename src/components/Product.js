import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import responsive from "../styles/Responsive";
import Title from "../styles/Title";

const CardProduto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;

  @media ${responsive.sm} {
    max-width: 204px;
  }
`;

const ImgProduto = styled.img`
  border-radius: 8px;
`;

const Product = ({ photo, name, id }) => {
  return (
    <Link to={`produto/${id}`}>
      <CardProduto>
        <ImgProduto src={photo} alt={`Foto ${name}`} />
        <Title>{name}</Title>
      </CardProduto>
    </Link>
  );
};

export default Product;
