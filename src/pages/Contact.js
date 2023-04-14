import React from "react";
import Head from "../hooks/Head";
import styled from "styled-components";
import responsive from "../styles/Responsive";
import Title from "../styles/Title";
import contactImg from "../img/contato.jpg";
import Footer from "../components/Footer";

const Text = styled.p`
  font-family: sans-serif;
  font-size: 1.2rem;
  position: relative;
  padding-left: 32px;
  &::before {
    content: "";
    background: #d8d8d8;
    width: 20px;
    height: 2px;
    position: absolute;
    left: 0;
    top: 18px;
  }
`;

const ImgContato = styled.img`
  max-width: 100%;
  border-radius: 8px;

  @media ${responsive.sm} {
    max-width: 324px;
    height: 476px;
  }
`;

const Contact = () => {
  return (
    <div
      className={
        "max-w-screen-bs sm:h-[calc(100vh-7rem)] m-auto flex flex-col items-center animate-slide-left"
      }
    >
      <Head title='Ranek | Contato' description='This is Ranek challenge' />

      <main className='w-full h-full flex-col sm:flex-row flex gap-1 sm:gap-9'>
        <ImgContato src={contactImg} alt='Imagem contato' />
        <div className='pt-4 flex flex-col gap-2'>
          <Title>Entre em contato.</Title>
          <Text>andre@origamid.com</Text>
          <Text>99999-9999</Text>
          <Text>Rua Ali Perto, 999</Text>
        </div>
      </main>
      <Footer className='pt-8' />
    </div>
  );
};

export default Contact;
