import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { NavbarMenu } from "../../../utils/data";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Estado do usuário logado
  const user = useSelector((state) => state.user.user);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-40 bg-white">
      <nav className="flex justify-between items-center px-4 py-4 md:px-20 md:py-5">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center gap-1 cursor-pointer">
          Inhambo<span className="text-blue-500">Imóveis</span>
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-gray-600" />
          ) : (
            <Bars3BottomRightIcon className="w-7 h-7 text-gray-600" />
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`md:flex md:gap-x-5 items-center md:static absolute left-0 w-full md:w-auto transition-all duration-500 ease-in bg-white md:bg-transparent ${
            isOpen ? "top-14" : "-top-full"
          }`}
        >
          {NavbarMenu.map((item) => (
            <li
              key={item.id}
              className="md:my-0 my-7 text-gray-800 hover:text-blue-500 font-semibold text-center"
            >
              <Link
                to={item.link}
                className="block md:inline px-4 py-2 md:px-0"
                onClick={() => setIsOpen(false)} // Fecha o menu ao clicar
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <div className="flex items-center gap-2">
              {/* Ícone de Usuário */}
              <Link to={user ? "/perfil" : "/entrar"} className="flex items-center gap-2">
                <UserCircleIcon className="w-7 h-7 text-gray-600" />
                {user?.nome ? (
                  <span className="text-gray-800 font-medium">{`Olá, ${user.nome}`}</span>
                ) : (
                  <span className="text-gray-800 font-medium">Entrar</span>
                )}
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
