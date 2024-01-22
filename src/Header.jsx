import "./Header.css"
import logo from "../public/logo.png"

const Header = () => {
  return (
    <>

<nav className="navigace ">
    <a href="#" className="logo">
      <img src={logo} alt="logo" className="obr_logo" />
    </a>
    <input type="checkbox" id="toggler" />
    <label htmlFor="toggler">
      {" "}
      <i className="fa-solid fa-bars" />
    </label>
    <div className="menu">
      <ul className="list">
        <li className="pad">
          <a href="index.html" className="nadtrh">
            <i className="fa-solid fa-house domecek" /> <strong>Domů</strong>
          </a>
        </li>
        <li>
          <a href="aktuality.html" className="nadtrh">
            <i className="fa-solid fa-newspaper aktuality" />{" "}
            <strong>Aktuality</strong>
          </a>
        </li>
        <li>
          <a href="oskole.html" className="nadtrh">
            <i className="fa-solid fa-circle-info informace" />{" "}
            <strong>O škole</strong>
          </a>
        </li>
        <li>
          <a href="uchazeci.html" className="nadtrh">
            <i className="fa-solid fa-user panacek" />{" "}
            <strong>Pro uchazeče</strong>
          </a>
        </li>
        <li className="pad_d">
          <a href="kontakty.html" className="nadtrh">
            <i className="fa-solid fa-phone telefon" />{" "}
            <strong>Kontakty</strong>
          </a>
        </li>
      </ul>
    </div>
  </nav>


    </>
  );
};

export default Header;
