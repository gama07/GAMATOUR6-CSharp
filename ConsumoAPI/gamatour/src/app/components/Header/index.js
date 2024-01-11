import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html" id="logo">
            <span>Gama Tour</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="destino.html">
                  Destinos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sobre-nós.html">
                  Sobre Nós
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Pesquisar"
              />
              <button
                className="btn btn-primary me-2"
                type="button"
              >
                Pesquisar
              </button>
            </form>
            <button
              className="btn"
              style={{ background: '#29d9d5', color: 'white' }}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
