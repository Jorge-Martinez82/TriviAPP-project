import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    return (
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
    );

};
export default Header;