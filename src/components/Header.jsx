import React, { useState, useEffect } from "react";

// Logo
import logo from "../assets/img/logo.png";

// Utils
import { scrollToSection } from "../utils/ScrollToSection";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-primary py-6 shadow-lg" : "bg-transparent py-5"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto  gap-y-6 flex flex-col items-center lg:flex-row lg:justify-between lg:gap-y-0">
        <a href="/">
          <img src={logo} alt="logo" className="w-[130px] h-[130px] rounded-full p-2" />
        </a>
        <nav className={`${header ? "text-secondary" : "text-black"} font-primary font-semibold flex gap-x-4 uppercase text-[21px] tracking-3px items-center lg:gap-x-8`}>
          <div href="" onClick={() => scrollToSection('#home')} className="hover:text-secondary-hover transition cursor-pointer" >Home</div>
          <div href="" onClick={() => scrollToSection('#history')} className="hover:text-secondary-hover transition cursor-pointer" >Nosotros</div>
          <div href="" onClick={() => scrollToSection('#menu')} className="hover:text-secondary-hover transition cursor-pointer" >Menu</div>
          <a href="/events" className="hover:text-secondary-hover transition">Eventos</a>
          <div href="" onClick={() => scrollToSection('#contact')} className="hover:text-secondary-hover transition cursor-pointer">Reserva</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
