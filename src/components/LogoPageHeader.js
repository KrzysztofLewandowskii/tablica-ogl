import React from 'react';
import './LogoPageHeader.css';
const LogoPageHeader = ({projectTitle}) => {
    return (
        <div className="logoContainer">
            <h2 className="logoName">{projectTitle}</h2>
        </div>
    );
};

export default LogoPageHeader;