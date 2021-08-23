import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const logo = props.logo;
    
    return (
        <div className="header d-flex justify-content-center align-items-center">
            {
                (logo === "") ? <h1><FontAwesomeIcon icon={faFutbol} />All FOOTBALL</h1> : <img src={logo} alt="" />
            }
        </div>
    );
};

export default Header;