import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link to="/" className="navigation__link">
                  <span>01</span> Home{" "}
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/skills" className="navigation__link">
                  <span>02</span> Skills{" "}
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/projects" className="navigation__link">
                  <span>03</span> Projects{" "}
                </Link>
              </li>
              <li className="navigation__item">
                <Link to="/contact" className="navigation__link">
                  <span>04</span> Contact Me{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{marginTop: '2rem', marginBottom: '2rem', paddingLeft: '2rem'}}>
              <h2>Imon Hossain</h2>
            </div>
          </div>
        </div>
      </>
    );
};

export default Header;