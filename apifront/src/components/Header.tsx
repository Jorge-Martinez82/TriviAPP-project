import React, {useState} from 'react'
import {Link} from "react-router-dom";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header">
                <div>
                    <h1 className="title">&lt;/TriviAPP&gt;</h1>
                    <nav className="nav">

                        <li>
                            <Link className="link" to="/">Home</Link>{" "}
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/Body">TriviAPP</Link>
                        </li>
                        <li>
                            <Link to="/mytriviapp">MyTriviAPP</Link>
                        </li>
                    </nav>
                </div>

            </div>
            <div className="headerMobile">
                <h1 className="title">&lt;/TriviAPP&gt;</h1>
                <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>

                {isMenuOpen && (
                    <nav className="nav">
                        <ul className="menu_ham">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/Body">TriviAPP</a>
                            </li>
                            <li>
                                <a href="/mytriviapp">MyTriviAPP</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </>
    );

};
export default Header;