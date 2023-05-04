import React, { useEffect, useState } from "react";
import ErrorMsg from "../styles/ErrorMsg"
import useAxios from "../hooks/useAxios";
import Head from "../components/Head";
import Product from "../components/Product";
import Spin from "../components/Spin";
import Footer from "../components/Footer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { data, error, loading, requestData } = useAxios();

  useEffect(() => {
    requestData({
      method: "GET",
      url: "/produto",
    });
  }, [requestData]);

  useEffect(() => {
    data && setProducts(data);
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
      <main className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-9 animate-slide-left'>
        {products &&
          products.map((product, index) => (
            <Product
              key={index}
              photo={product.fotos[0].src}
              name={product.nome}
              id={product.id}
            />
          ))}
      </main>
    );
  } else main = null;

  return (
    <div
      className={`max-w-screen-bs ${
        error ? "h-[50vh]" : "h-full"
      } m-auto flex flex-col items-center`}
    >
      <Head title='Ranek' description='This is Ranek challenge' />

      {main}

      {data && <Footer className='pt-9' />}
    </div>
  );
};

export default Home;
