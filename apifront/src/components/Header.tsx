import React from 'react'
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div>
                <nav>
                    <h1>TriviAPP</h1>
                    <li>
                        <Link to="/">Home</Link>{" "}
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
                    <hr/>
                </nav>
            </div>

        </div>
    );

};
export default Header;