import React, { useState, useEffect } from "react";
import Logo from "../assets/larnu_logo.png";
import { Icon } from "@iconify/react";
const Header = () => {
  const [active, setActive] = useState(false);
  const [traslateP, setTraslateP] = useState("-translate-y-96");

  const handleClick = () => {
    setActive(!active);
    active === false
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
    active === false
      ? setTraslateP("translate-y-0")
      : setTraslateP("-translate-y-96");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setActive(false);
        setTraslateP("-translate-y-96");
        document.body.style.overflow = "unset";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white relative z-10">
      <div
        className={`flex justify-between items-center p-5 z-10 bg-white max-w-screen-lg mx-auto`}
      >
        <div className="flex gap-x-10">
          <img className=" z-10 w-36" src={Logo} alt="Larnu Logo" />
          <ul className=" items-end gap-x-10 gap-y-4 hidden lg:flex">
            <li>
              <a
                className="font-fibraBold  text-colorTitulo text-xl"
                href="https://es.larnu.com/security"
                target="_blank"
              >
                Bootcamp
              </a>
            </li>
            <li>
              <a
                className="font-fibraBold  text-colorTitulo text-xl"
                href="https://es.larnu.com/gdpr"
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="font-fibraBold  text-colorTitulo text-xl"
                href="https://es.larnu.com/terms"
                target="_blank"
              >
                Egresados
              </a>
            </li>
            <li>
              <a
                className="font-fibraBold  text-colorTitulo text-xl"
                href="https://es.larnu.com/privacy-policy"
                target="_blank"
              >
                Misión
              </a>
            </li>
          </ul>
        </div>
        <Icon
          className="text-3xl z-10 block lg:hidden"
          icon="charm:menu-hamburger"
          onClick={handleClick}
        />
        <button className="bg-transparent border-2 border-colorBotonRe text-colorBotonRe text-xl  hidden lg:inline-block rounded-full hover:bg-colorBotonRe hover:text-white py-1 px-6">
          Registrate
        </button>
      </div>
      <div
        className={
          active
            ? "bg-black bg-opacity-75 transition ease-in duration-300 min-h-screen absolute w-full -z-10"
            : "bg-black bg-opacity-0 transition ease-in duration-300 h-0 absolute w-full -z-10"
        }
      >
        <div
          className={`font-fibraBold px-4 py-6 rounded-b-2xl bg-white absolute transform transition ease-in duration-300  ${traslateP} w-full`}
        >
          <ul className="flex flex-col gap-y-5 mb-6 text-colorTitulo">
            <li>BootCamp</li>
            <li>Blog</li>
            <li>Egresados</li>
            <li>Misión</li>
          </ul>
          <button className="bg-transparent border-2 border-colorBotonRe hover:bg-colorBotonRe hover:text-white text-colorBotonRe w-full rounded-full py-1">
            Registrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
