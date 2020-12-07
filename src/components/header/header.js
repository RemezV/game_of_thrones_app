import React from 'react';
import './header.sass'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header__block">
            <h3 className="header__title">
                <Link to="/">
                Game of Thrones DB
                </Link>
            </h3>
            <ul className="header__list">
                <li className="header__list-item">
                    <Link to="/characters/" className="random">Characters</Link>
                </li>
                <li className="header__list-item">
                    <Link to="/houses/" className="random">Houses</Link>
                </li>
                <li className="header__list-item">
                    <Link to="/books/" className="random">Books</Link>   
                </li>
            </ul>
        </div>
    );
};

export default Header;