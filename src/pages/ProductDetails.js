import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import responsive from "../styles/Responsive";
import ErrorMsg from "../styles/ErrorMsg";
import Title from "../styles/Title";
import Head from "../hooks/Head";
import useAxios from "../hooks/useAxios";
import Footer from "../components/Footer";
import Spin from "../components/Spin";

const Text = styled.p`
  font-family: sans-serif;
  font-size: 1.2rem;
`;

const PriceTag = styled.p`
  max-width: fit-content;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: #87f955;
  color: #097800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.2rem;
`;

const ImgProduto = styled.img`
  max-width: 49%;
  border-radius: 8px;

  @media ${responsive.sm} {
    max-width: 324px;
    height: 476px;
  }
`;

const ProductDetails = () => {
  const [details, setDetails] = useState([]);
  const { data, error, loading, requestData } = useAxios();
  const params = useParams();

  useEffect(() => {
    requestData({
      method: "GET",
      url: `/produto/${params.id}`,
    });
  }, [requestData, params]);

  useEffect(() => {
    data && setDetails(data);
  }, [data]);

  let main;

  if (error) {
    main = (
      <main className='mt-auto'>
        <ErrorMsg className='pb-24'>{error.message}.</ErrorMsg>
      </main>
    );
  } else if (loading) {
    main = (
      <main className='w-full h-screen'>
        <Spin />
      </main>
    );
  } else if (data) {
    main = (
      <main className='w-full h-full flex flex-col sm:flex-row gap-1 sm:gap-9 animate-slide-left'>
        <div className='flex flex-row sm:flex-col gap-2 sm:gap-10'>
          {details.fotos &&
            details.fotos.map((foto, index) => (
              <ImgProduto key={index} src={foto.src} alt={foto.titulo} />
            ))}
        </div>
        <div className='pt-4 flex flex-col gap-2'>
          <Title>{details.nome}</Title>
          <PriceTag>
            {Number(details.preco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </PriceTag>
          <Text>{details.descricao}</Text>
        </div>
      </main>
    );
  } else main = null;

  return (
    <div
      className={`max-w-screen-bs h-[calc(100vh-6rem)] ${
        details.fotos && details.fotos.length > 1
          ? "sm:h-full"
          : "sm:h-[calc(100vh-7rem)]"
      } m-auto flex flex-col items-center`}
    >
      <Head
        title={`Ranek | ${!loading ? details.nome : ""}`}
        description={`Esta é a página para o produto ${details.nome}`}
      />

      {main}

      {data && <Footer className='pt-10' />}
    </div>
  );
};

export default ProductDetails;
