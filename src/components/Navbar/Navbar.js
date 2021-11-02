import React from "react";
import "./navbar.css";

// Icons
import { Menu, Search, Bell, ShoppingCart } from "react-feather";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-div">
        <h1>connectZ!</h1>
        <div className="dropdown dropdown-azul">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Menu />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                Página 1
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Página 2
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Página 3
              </button>
            </li>
          </ul>
        </div>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            <Search height="18" />
          </span>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="nav-div">
        <div className="nav-icons">
          <button className="shop">
            <ShoppingCart />
            <span>15</span>
          </button>
          <button className="notf">
            <Bell />
            <span>15</span>
          </button>
        </div>
        <div className="dropdown dropdown-usuario">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="https://bnu.brasileirosnargentina.com.br/wp-content/uploads/2016/12/Floralis-Generica-800x600.jpg" />
            Olá, <span className="name">Usuário</span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                Item 1
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Item 2
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Item 3
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
