import logo from "../../assets/imgs/logo.svg";

import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="astrometa-logo-container">
          <img src={logo} alt="AstroMeta" />
          <h1>AstroMeta</h1>
          <p>
            Desenvolvido por
            <a href="https://www.instagram.com/davi.696/" target="_blank">
              @DaviSantos
            </a>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
