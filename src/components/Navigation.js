import React from 'react';
import './Navigation.css';
import {Link} from "react-router-dom";
const Navigation = () => {
    return (
        <nav className="navContainer">
                <Link className="navItem" to="/AddNotice">Dodaj ogłoszenie</Link>
                <Link className="navItem" to="/">Ogłoszenia</Link>
                <Link className="navItem" to="/selectedNotices">Wybrane ogłoszenia</Link>
                <Link className="navItem" to="/acceptedNotices">Zaakceptowane ogłoszenia</Link>
        </nav>
    );
};

export default Navigation;