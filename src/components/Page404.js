import React from "react";
import styled from "styled-components";

const Text = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2rem;
  text-align: center;
`;

const Page404 = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-10rem)]'>
      <Text className='pb-32'>Erro 404. Página não encontrada.</Text>
    </div>
  );
};

export default Page404;
