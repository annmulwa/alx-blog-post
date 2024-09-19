import React from 'react';
import Logo from "../img/logo.jpeg";

const Footer = () => {
    return (
        <footer>
            <img src={ Logo } alt="" />
            <span>
                Made with ♥️, Sweat💧 and <b>React.js</b>.
                #WeDoHardThings
            </span>
        </footer>
    )
}

export default Footer;
