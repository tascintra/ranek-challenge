import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const btnProductRef = useRef();

  useEffect(() => {
    btnProductRef.current.focus();
  });

  return (
    <div
      className={
        "max-w-screen-bs m-auto pb-6 sm:pb-9"
      }
    >
      <header className='w-full pt-6 sm:pt-9 flex gap-5'>
        <NavLink to='/'>
          <Button label='Produtos' ref={btnProductRef} />
        </NavLink>

        <NavLink to='/contato'>
          <Button label='Contato' />
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
