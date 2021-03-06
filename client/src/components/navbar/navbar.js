import React from "react";
import {Link} from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <img src={require("../../img/header-logo.png")} alt="Bosa Noga" />
            </Link>

            <div className="collapase navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" activeclassname="active" to="/">
                    Главная
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="active"
                    to="/catalog"
                  >
                    Каталог
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="active"
                    to="/about"
                  >
                    О магазине
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="active"
                    to="/contacts"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div
                    data-id="search-expander"
                    className="header-controls-pic header-controls-search"
                  ></div>

                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form
                  data-id="search-form"
                  className="header-controls-search-form form-inline invisible"
                >
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
